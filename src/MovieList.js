// MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from './assets/asset';

const MovieList = () => {
  return (
    <div className="movie-list" >
      <h2 className='heading'>Choose a Movie</h2>
      <div className="movies-grid">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className="movie-card">
            <img src={movie.image} className='movieimg' alt={movie.title} />
            <h3 className='moviename'>{movie.title}</h3>
            <h3 className='moviegenre'>{movie.genre}</h3>
          </div>
         </Link>
      ))}
      </div>
    </div>
  );
};

export default MovieList;