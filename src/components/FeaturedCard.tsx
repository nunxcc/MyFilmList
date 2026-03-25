import { FaStar, FaPlay } from 'react-icons/fa';
import './FeaturedCard.css';

const FeaturedCard = () => {
  return (
    <div className="featured-wrapper">
      <div className="featured-container">
        <img 
          src="https://image.tmdb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg" 
          alt="Featured Movie" 
          className="featured-image"
        />
        
        <div className="featured-overlay">
          
          <div className="featured-rating">
            <FaStar className="star-icon" />
            <span>4.7</span>
          </div>

          <div className="featured-info">
            <h2 className="featured-title">Rima</h2>
            <p className="featured-details">Drama, Horror, Mystery & Thriller</p>
            <p className="featured-details">15, March, 2020</p>
            <p className="featured-details bottom-row">1h 30min, Arabic</p>
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