import React from 'react';
import '../styles/MovieCard.css'; // Assuming we create a corresponding CSS file

const MovieCard = ({ movie, onClick }) => {
  const { poster_path } = movie;

  return (
    <div className="movie-card" onClick={onClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="Movie Poster"
        className="movie-poster"
      />
    </div>
  );
};

export default MovieCard;
