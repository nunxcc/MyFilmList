import './Filter.css';

interface FilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const Filter = ({ categories, selectedCategory, onSelectCategory }: FilterProps) => {
  return (
    <div className="filter-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;