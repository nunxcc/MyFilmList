import { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FeaturedCard from '../components/FeaturedCard';
import Filter from '../components/Filter';
import MovieCard from '../components/MovieCard';

const mockMovies = [
  { id: 1, title: 'Under Paris', rating: 5, posterUrl: 'https://image.tmdb.org/t/p/w500/qZPLK5sY40T5X5a22V24J04lQ6w.jpg' },
  { id: 2, title: 'Damsel', rating: 4.5, posterUrl: 'https://image.tmdb.org/t/p/w500/sMp34cNKjIb18UBOCszKww269zV.jpg' },
  { id: 3, title: 'Dune: Part Two', rating: 5, posterUrl: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2TGbiU05w.jpg' },
  { id: 4, title: 'Godzilla x Kong', rating: 3.5, posterUrl: 'https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLvLuPEb12fTYM.jpg' },
];

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

      <h2 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>Trending Movies</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '16px'
      }}>
        {mockMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterUrl={movie.posterUrl}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;