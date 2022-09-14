import { useGlobalContext } from "../context";
import Loader from "./Loader";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);

  if (loading) return <Loader />;

  if (cocktails.length === 0) {
    return <h2 className='section-title'>No cocktails matched your search</h2>;
  }

  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
    </section>
  );
};

export default CocktailList;
