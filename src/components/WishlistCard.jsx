import React from 'react';
import '../styles/WishlistCard.css'; // Assuming we create a corresponding CSS file

const WishlistCard = ({ movie, onRemoveFromWishlist }) => {
  const { id, title, poster_path } = movie;

  const handleRemoveClick = () => {
    onRemoveFromWishlist(movie);
  };

  return (
    <div className="wishlist-card" key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="wishlist-poster"
      />
      <div className="wishlist-details">
        <h3>{title}</h3>
        <button onClick={handleRemoveClick} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
