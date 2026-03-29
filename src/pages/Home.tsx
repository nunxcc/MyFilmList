import { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FeaturedCard from '../components/FeaturedCard';
import Filter from '../components/Filter';

const Home = () => {
  const [activeGenre, setActiveGenre] = useState('Action');

  const genres = ['Action', 'Drama', 'Comedy', 'Romance', 'Horror', 'Sci-Fi'];

  return (
    <div style={{ padding: '24px' }}>
      <Header />
      <SearchBar />
      <FeaturedCard />
      <Filter
        categories={genres}
        selectedCategory={activeGenre}
        onSelectCategory={(genre) => setActiveGenre(genre)}
      />
    </div>
  );
};

export default Home;