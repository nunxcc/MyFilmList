import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FeaturedCard from '../components/FeaturedCard';

const Home = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Header />
      <SearchBar />
      <FeaturedCard />
    </div>
  );
};

export default Home;