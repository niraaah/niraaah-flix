import React, { useState, useEffect } from 'react';
import WishlistCard from '../components/WishlistCard';
import useWishlist from '../hooks/useWishlist.ts';
import '../styles/Wishlist.css';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(useWishlist.getWishlist());
  }, []);

  const handleRemoveFromWishlist = (movie) => {
    useWishlist.toggleWishlist(movie);
    setWishlist(useWishlist.getWishlist());
  };

  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="movie-grid">
          {wishlist.map((movie) => (
            <WishlistCard
              key={movie.id}
              movie={movie}
              onRemoveFromWishlist={handleRemoveFromWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
