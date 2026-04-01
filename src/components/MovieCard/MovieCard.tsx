import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import './MovieCard.css';

interface MovieCardProps {
  id: number;
  title: string;
  posterUrl: string;
  rating: number;
}

const MovieCard = ({ id, title, posterUrl, rating }: MovieCardProps) => {
  
  const renderStars = () => {
    const stars =[];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.round(rating)) {
        stars.push(<FaStar key={i} className="star-filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star-empty" />);
      }
    }
    return stars;
  };

  return (
    <Link to={`/details/movie/${id}`} className="movie-card">
      <div className="poster-container">
        <img src={posterUrl} alt={title} className="movie-poster" />
      </div>
      
      <h3 className="movie-title">{title}</h3>
      
      <div className="movie-stars">
        {renderStars()}
      </div>
    </Link>
  );
};

export default MovieCard;