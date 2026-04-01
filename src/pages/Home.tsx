import { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import FeaturedCard from '../components/FeaturedCard/FeaturedCard';
import Filter from '../components/Filter/Filter';
import MovieCard from '../components/MovieCard/MovieCard';
import { getTrending, getImageUrl, getMoviesByGenre, GENRE_ID_MAP } from '../services/api';
import type { MediaItem } from '../types';

const Home = () => {
  const [activeGenre, setActiveGenre] = useState('All');
  const [trendingMovies, setTrendingMovies] = useState<MediaItem[]>([]);
  const genres =['All', 'Action', 'Drama', 'Comedy', 'Romance', 'Horror', 'Sci-Fi'];

useEffect(() => {
  const fetchMovies = async () => {

      if (activeGenre === 'All') {
        const movies = await getTrending();
        setTrendingMovies(movies);

      } else {
        const genreId = GENRE_ID_MAP[activeGenre];
        const movies = await getMoviesByGenre(genreId);
        setTrendingMovies(movies);
      }
    };
    
  fetchMovies();
  }, [activeGenre]); 

  return (
    <div style={{ padding: '24px' }}>
      <Header />
      <SearchBar />
      {trendingMovies.length > 0 && (
        <FeaturedCard 
          title={trendingMovies[0].title || trendingMovies[0].name || 'Unknown'}
          imageUrl={getImageUrl(trendingMovies[0].backdrop_path || trendingMovies[0].poster_path || '')}
          rating={trendingMovies[0].vote_average / 2}
          releaseDate={trendingMovies[0].release_date || trendingMovies[0].first_air_date || ''}
        />
      )}

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