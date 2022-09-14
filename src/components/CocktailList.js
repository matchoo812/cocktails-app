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
      <div className='cocktails-center'>
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.id} {...cocktail} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
