import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  // set focus on search form when page loads
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search for your favorite cocktail</label>
          <input type='text' id='name' ref={searchValue} onChange={searchCocktail} />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
