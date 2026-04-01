import { useState } from 'react';
import './SearchBar.css';
import { FiSearch, FiSliders } from 'react-icons/fi';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="search-container">
      <FiSearch className="search-icon" size={20} />
      
      <input 
        type="text" 
        placeholder="Search" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      
      <button className="filter-btn">
        <FiSliders size={20} />
      </button>
    </div>
  );
};

export default SearchBar;