import './MovieCard.css';
import { useState, useEffect } from 'react';
import poster from '../img/poster.jpg';

function MovieCard({data,title,year,imdbID,poster}){
    
    return(
        <article className="card">
            <figure>
                <img src={poster}/>
            </figure>
            <h3>{title}</h3>
            <h4>{year}</h4>
            <a target='_blank' href={`https://www.imdb.com/title/${imdbID}`}>Link To imdb<span className="material-icons">
east
</span></a>
        </article>
    )
}
export default MovieCard;