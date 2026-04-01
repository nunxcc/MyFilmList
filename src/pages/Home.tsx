import { useEffect, useState } from 'react';
import NavigationBar from '../components/Navbar/NavigationBar';
import SearchBar from '../components/SearchBar/SearchBar';
import FeaturedCard from '../components/FeaturedCard/FeaturedCard';
import Filter from '../components/Filter/Filter';
import MovieCard from '../components/MovieCard/MovieCard';
import { searchMedia, getTrending, getImageUrl, getMoviesByGenre, GENRE_ID_MAP } from '../services/api';
import type { MediaItem } from '../types';
import './Home.css';

const Home = () => {
  const [activeGenre, setActiveGenre] = useState('All');
  const [trendingMovies, setTrendingMovies] = useState<MediaItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const genres =['All', 'Action', 'Drama', 'Comedy', 'Romance', 'Horror', 'Sci-Fi'];

  useEffect(() => {
    const fetchMedia = async () => {
      let movies;
      if (searchQuery) {
        movies = await searchMedia(searchQuery);
      } else if (activeGenre === 'All') {
        movies = await getTrending();
      } else {
        const genreId = GENRE_ID_MAP[activeGenre];
        movies = await getMoviesByGenre(genreId);
      }
      setTrendingMovies(movies);
    };
    
    fetchMedia();
  }, [activeGenre, searchQuery]); 

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveGenre('All'); 
  };

  return (
    <div className="home-container">
      <NavigationBar />
      <SearchBar onSearch={handleSearch} />
      
      {!searchQuery && trendingMovies.length > 0 && (
        <>
          <FeaturedCard 
            title={trendingMovies[0].title || trendingMovies[0].name || 'Unknown'}
            imageUrl={getImageUrl(trendingMovies[0].backdrop_path || trendingMovies[0].poster_path || '')}
            rating={trendingMovies[0].vote_average / 2}
            releaseDate={trendingMovies[0].release_date || trendingMovies[0].first_air_date || ''}
          />
          <Filter
            categories={genres}
            selectedCategory={activeGenre}
            onSelectCategory={(genre) => {
              setActiveGenre(genre);
              setSearchQuery('');
            }}
          />
        </>
      )}

      <h2 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>
        {searchQuery ? `Results for "${searchQuery}"` : 
         activeGenre === 'All' ? 'Trending Now' : `${activeGenre} Movies`}
      </h2>

      <div className="movie-grid">
        {trendingMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            mediaType={movie.media_type || 'movie'} 
            title={movie.title || movie.name || 'Unknown Title'}
            posterUrl={movie.poster_path
              ? getImageUrl(movie.poster_path)
              : 'https://via.placeholder.com/500x750/2A2D3A/FFFFFF?text=No+Poster'}
              
            rating={movie.vote_average / 2}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;