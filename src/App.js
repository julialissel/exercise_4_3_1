import './App.css';
import { useState, useEffect } from 'react';
import SearchMovies from './components/SearchMovies';
import DisplayMovies from './components/DisplayMovies';
function App() {
  const [data, setData] = useState([]); // declare state
  const [query, setQuery] = useState('cats'); // declare new state
  
  // update the query state
  const performSearch = (value) => setQuery(value);
  useEffect( () => {
    fetch(`https://www.omdbapi.com/?apikey=37fe945a&s=${query}`)
      .then(res => res.json())
      .then(data => setData(data.Search))
      .catch(err => alert('Sorry det blev fel: ', err))

  /**
   * Problem: Om man söker på något som inte finns så dör hela appen
   * 
   *  */     
    // async function getMovies(){
    //   const respons = await fetch(`https://www.omdbapi.com/?apikey=37fe945a&s=${query}`);
    //   const data = await respons.json();
    //   // console.log('Från API', data.Search);
    //   setData(data.Search);
    // }
    // getMovies();
  }, [query]);//körs enbart vid sidladdning 
  
  return (
    <div className="App">
      <SearchMovies onSearch={performSearch}/>
      <DisplayMovies data={data}/>

      
    </div>
  );
}

export default App;
/**
 * HUr fångar man ett error? Det verakar inte gå om man har funktionella comp
 */