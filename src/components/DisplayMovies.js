import './DisplayMovies.css';
import poster from '../img/poster.jpg';
import MovieCard from './MovieCard';
function DisplayMovies({data}){  
  console.log(data)
  let movieData;
  if (data.length) {
    movieData = data.map((movie, index) => <MovieCard title={movie.Title} year={movie.Year} imdbID={movie.imdbID} poster={movie.Poster} key={index} />);    
  } else {
    movieData = "Sorry!";
  }
    return(
      <section className="SearchResults">
          {/* {data.map((movie, index) => {
          return <MovieCard title={movie.Title} year={movie.Year} imdbID={movie.imdbID} poster={movie.Poster} key={index}  />
        })} */}
          {movieData}
       
      </section>
    )
}
export default DisplayMovies;