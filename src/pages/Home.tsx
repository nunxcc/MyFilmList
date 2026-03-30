import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FeaturedCard from '../components/FeaturedCard';
import Filter from '../components/Filter';
import MovieCard from '../components/MovieCard';
import { getTrending, getImageUrl } from '../services/api';
import type { MediaItem } from '../types';

const Home = () => {
  const [activeGenre, setActiveGenre] = useState('Action');
  const [trendingMovies, setTrendingMovies] = useState<MediaItem[]>([]);
  const genres = ['Action', 'Drama', 'Comedy', 'Romance', 'Horror', 'Sci-Fi'];

useEffect(() => {
  const fetchMovies = async () => {
    const movies = await getTrending();
    setTrendingMovies(movies);
  };

  fetchMovies();
}, []);

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

      <h2 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>Trending Movies</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '16px'
      }}>
        {trendingMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title || movie.name || 'Unknown Title'}
            posterUrl={getImageUrl(movie.poster_path)}
            rating={movie.vote_average / 2}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;