import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShare2 } from 'react-icons/fi';

const DetailsBar = () => {
  const navigate = useNavigate();

  return (
    <div className="top-bar">
      <button className="icon-btn" onClick={() => navigate(-1)}>
        <FiArrowLeft size={28} />
      </button>
      <button className="icon-btn">
        <FiShare2 size={24} />
      </button>
    </div>
  );
};

export default DetailsBar;