import { useState } from 'react';
import './SearchBar.css';
import { FiSearch, FiSliders, FiX } from 'react-icons/fi';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    // This prevents the form from submitting and refreshing the page
    e.preventDefault(); 
      onSearch(query);
  };

  const handleClear = () => {
    setQuery(''); 
    onSearch('');
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <FiSearch className="search-icon" size={20} />
      
      <input 
        type="text" 
        placeholder="Search for movies or tv shows..." 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />

      {query && (
        <button type="button" className="clear-btn" onClick={handleClear} aria-label="Clear search">
          <FiX size={20} />
        </button>
      )}
      
      <div className="divider"></div>
    
      <button type="button" className="filter-btn">
        <FiSliders size={20} />
      </button>
    </form>
  );
};

export default SearchBar;