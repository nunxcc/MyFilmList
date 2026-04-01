import { useState } from 'react';
import './SearchBar.css';
import { FiSearch, FiSliders } from 'react-icons/fi';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    // Isto para o browser não recarregar a página quando o utilizador clicar no enter ou no botão de pesquisa
    e.preventDefault(); 
    if (query.trim()) { 
      onSearch(query);
    }
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
      
      <button type="button" className="filter-btn">
        <FiSliders size={20} />
      </button>
    </form>
  );
};

export default SearchBar;