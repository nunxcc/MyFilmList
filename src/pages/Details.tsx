import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShare2 } from 'react-icons/fi';
import { FaPlay, FaStar, FaHeart } from 'react-icons/fa';
import { getMediaDetails, getMediaCredits, getImageUrl } from '../services/api';
import type { MediaDetails, CastMember } from '../types';
import './Details.css';
import DetailsBar from '../components/Navbar/DetailsBar';

const Details = () => {
  const { type, id } = useParams(); 
  const navigate = useNavigate(); // Back-button
  
  const [details, setDetails] = useState<MediaDetails | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      if (type && id) {
        const detailsData = await getMediaDetails(type, id);
        const castData = await getMediaCredits(type, id);
        setDetails(detailsData);
        setCast(castData);
      }
    };
    fetchData();
  }, [type, id]);

  if (!details) {
    return <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>Loading...</div>;
  }   // loading message

  const formatRuntime = (minutes?: number) => {
    if (!minutes) return '';
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}min`;
  }; // min to hours function

  return (
    <div className="details-page">
      <div className="hero-container">
        <img 
          src={getImageUrl(details.backdrop_path || details.poster_path)} 
          alt={details.title || details.name} 
          className="hero-image" 
        />
        <div className="hero-overlay"></div>
        
        <DetailsBar />

        <button className="center-play">
          <FaPlay size={20} style={{ marginLeft: '4px' }} />
        </button>

        <span className="runtime-tag">
          {formatRuntime(details.runtime || details.episode_run_time?.[0])}
        </span>
      </div>

      <div className="info-section">
        <div className="tags-row">
          {details.genres && details.genres.length > 0 && (
            <div className="genre-tag">{details.genres[0].name}</div>
          )}
          
          <div className="rating-tag">
            <FaStar color="#FFD700" />
            {(details.vote_average / 2).toFixed(1)}
          </div>

          <button className="heart-btn">
            <FaHeart size={24} />
          </button>
        </div>

        <h1 className="title">{details.title || details.name}</h1>
        <p className="overview">
          {details.overview} <span style={{ color: '#E50914', cursor: 'pointer' }}>Show More</span>
        </p>

        <h2 className="cast-title">Actors</h2>
        <div className="cast-scroll">
          {cast.map((actor) => (
            <div key={actor.id} className="actor-card">
              <img 
                src={actor.profile_path ? getImageUrl(actor.profile_path) : 'https://via.placeholder.com/80x80?text=No+Img'} 
                alt={actor.name} 
                className="actor-img"  // for actors without pfp
              />
              <p className="actor-name">{actor.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="imdb-btn">Open IMDB</button>

    </div>
  );
};

export default Details;