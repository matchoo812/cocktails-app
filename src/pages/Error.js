import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section error-page-section'>
      <div className='error-container'>
        <h1>Oops! You've gone to the wrong place. No cocktails here!</h1>
        <Link to='/' className='btn btn-primary'>
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
