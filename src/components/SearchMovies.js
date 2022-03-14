import './SearchMovies.css';
import React, { useState } from 'react';
function SearchMovies({onSearch}){
    const [searchText, setSearchText] = useState('');

    const onSearchChange = (e) => setSearchText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // pass the search text back to the App component
        onSearch(searchText);
        e.currentTarget.reset();
    }

    return(
        <form className="searchField" onSubmit={handleSubmit}>
            <label htmlFor="search">&#x1F4FD; Search the site: </label>
            <input type="search"
                onChange={onSearchChange}
                name="search"
                placeholder="Search for a movie or serie..."
                id='search'
            />
            <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>
    )
}
export default SearchMovies;