import { useState } from 'react';
import { FaStar, FaPlay } from 'react-icons/fa';
import './FeaturedCard.css';

interface FeaturedMovie {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  releaseDate: string;
}

interface FeaturedCardProps {
 movies: FeaturedMovie[];
}

const FeaturedCard = ({ movies }: FeaturedCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!movies || movies.length === 0) return null;
  const currentMovie = movies[currentIndex];

  return (
    <div className="featured-wrapper">
      <div className="featured-container">
        <img 
          src={currentMovie.imageUrl}
          alt={currentMovie.title} 
          className="featured-image"
        />
        
        <div className="featured-overlay">
          <div className="featured-rating">
            <FaStar className="star-icon" />
            <span>{currentMovie.rating.toFixed(1)}</span>
          </div>

          <div className="featured-info">
            <h2 className="featured-title">{currentMovie.title}</h2>
            <p className="featured-details">Trending #{currentIndex + 1}</p>
            <p className="featured-details bottom-row">{currentMovie.releaseDate}</p>
          </div>

          <button className="play-btn" aria-label="Play Movie">
            <FaPlay style={{ marginLeft: '4px' }} />
          </button>
        </div>
      </div>

      <div className="carousel-dots">
        {movies.map((movie, index) => (
          <div 
            key={movie.id} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;