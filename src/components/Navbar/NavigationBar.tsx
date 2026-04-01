import './NavigationBar.css';
import { FiMenu } from 'react-icons/fi';
import userAvatar from '../../assets/userHeisen.jpg';

const NavigationBar = () => {
  return (
    <header className="header-container">
      <div className="profile-section">
        <img 
          src={userAvatar} 
          alt="User Avatar" 
          className="avatar" 
        />
        <div className="user-info">
          <span className="welcome-text">Welcome back</span>
          <h2 className="user-name">Heisenberg</h2>
        </div>
      </div>
      
      <button className="menu-btn" aria-label="Menu">
        <FiMenu size={24} />
      </button>
    </header>
  );
};

export default NavigationBar;