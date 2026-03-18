import { useParams } from 'react-router-dom';

const Details = () => {
  const { type, id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Movie Details</h1>
      <p>Media Type: {type}</p>
      <p>Media ID: {id}</p>
    </div>
  );
};

export default Details;