import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
  const { id, title, overview, release_date, vote_average, poster_path } = movie;
  const [isWishlisted, setIsWishlisted] = useState(false); // 찜하기 상태 관리
  const [detailedInfo, setDetailedInfo] = useState(null); // 영화 세부 정보 상태

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR`
        );
        setDetailedInfo(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleWishlist = () => {
    // 찜 상태 토글
    setIsWishlisted(!isWishlisted);

    // 찜하기 동작 추가 (API 호출 또는 상태 업데이트)
    if (!isWishlisted) {
      alert(`${title}을(를) 찜 목록에 추가했습니다!`);
    } else {
      alert(`${title}을(를) 찜 목록에서 제거했습니다!`);
    }
  };

  if (!detailedInfo) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const {
    original_title,
    runtime,
    genres,
    vote_count,
    original_language,
    production_companies,
    budget,
    revenue,
  } = detailedInfo;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className="modal-poster"
          />
          <div className="modal-info">
            <h2>{title}</h2>
            <p>
              <strong>원제목:</strong> {original_title}
            </p>
            <p>
              <strong>개봉일:</strong> {release_date}
            </p>
            <p>
              <strong>평점:</strong> {vote_average} ({vote_count}명 투표)
            </p>
            <p>
              <strong>장르:</strong> {genres.map((genre) => genre.name).join(', ')}
            </p>
            <p>
              <strong>러닝 타임:</strong> {runtime}분
            </p>
            <p>
              <strong>언어:</strong> {original_language.toUpperCase()}
            </p>
            <p>
              <strong>제작사:</strong>{' '}
              {production_companies.length
                ? production_companies.map((company) => company.name).join(', ')
                : '정보 없음'}
            </p>
            <p>
              <strong>예산:</strong> ${budget.toLocaleString()}
            </p>
            <p>
              <strong>수익:</strong> ${revenue.toLocaleString()}
            </p>
            <p>
              <strong>줄거리:</strong> {overview || '줄거리가 없습니다.'}
            </p>
            <button
              className={`wishlist-button ${isWishlisted ? 'active' : ''}`}
              onClick={handleWishlist}
            >
              {isWishlisted ? '찜 해제' : '찜하기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
