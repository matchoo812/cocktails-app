import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <div>
      <h2>Search Form Component</h2>
    </div>
  );
};

export default SearchForm;
