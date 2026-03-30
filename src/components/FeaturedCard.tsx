import { FaStar, FaPlay } from 'react-icons/fa';
import './FeaturedCard.css';
interface FeaturedCardProps {
  title: string;
  imageUrl: string;
  rating: number;
  releaseDate: string;
}

const FeaturedCard = ({ title, imageUrl, rating, releaseDate }: FeaturedCardProps) => {
  return (
    <div className="featured-wrapper">
      <div className="featured-container">
        <img 
          src={imageUrl}
          alt={title} 
          className="featured-image"
        />
        
        <div className="featured-overlay">
          <div className="featured-rating">
            <FaStar className="star-icon" />
            <span>{rating.toFixed(1)}</span>
          </div>

          <div className="featured-info">
            <h2 className="featured-title">{title}</h2>
            <p className="featured-details">Trending #1</p>
            <p className="featured-details bottom-row">{releaseDate}</p>
          </div>

          <button className="play-btn" aria-label="Play Movie">
            <FaPlay style={{ marginLeft: '4px' }} />
          </button>
        </div>
      </div>

      <div className="carousel-dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default FeaturedCard;