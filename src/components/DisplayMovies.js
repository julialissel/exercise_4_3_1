import './DisplayMovies.css';
import ErrorHandle from './ErrorHandle';
import MovieCard from './MovieCard';
function DisplayMovies({data, query}){  
  console.log(data.Response)
  let movieData;
  if (data.Response == "True") {
    let dataSerch = data.Search;
    movieData = dataSerch.map((movie, index) => <MovieCard title={movie.Title} year={movie.Year} imdbID={movie.imdbID} poster={movie.Poster} key={index} />);    
  } else {
    movieData = <ErrorHandle query={query}/>;
  }
    return(
      <section className="SearchResults">
          {movieData}
       
      </section>
    )
}
export default DisplayMovies;