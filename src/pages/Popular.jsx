import React, { useEffect, useState } from 'react';
import TMDbAPI from '../services/URL.ts';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal'; // 모달 컴포넌트 추가
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/Popular.css';

const Popular = () => {
  const [popular, setPopular] = useState([]); // 영화 데이터
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [page, setPage] = useState(1); // 현재 페이지
  const [hasMore, setHasMore] = useState(true); // 더 불러올 데이터가 있는지 여부
  const [selectedMovie, setSelectedMovie] = useState(null); // 선택된 영화
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [showButton, setShowButton] = useState(false); // 맨 위로 버튼 표시 상태

  // API 호출 함수
  const fetchPopularMovies = async (currentPage) => {
    try {
      setLoading(true);
      const data = await TMDbAPI.getPopularMovies(currentPage);
      setPopular((prevMovies) => [...prevMovies, ...data.results]); // 기존 데이터에 추가
      setHasMore(data.page < data.total_pages); // 마지막 페이지 여부 확인
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    } finally {
      setLoading(false);
    }
  };

  // 초기 데이터 로드 및 페이지 번호 변경 시 호출
  useEffect(() => {
    fetchPopularMovies(page);
  }, [page]);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100 && // 하단 100px 근처
      !loading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1); // 다음 페이지 요청
    }

    // 맨 위로 버튼 표시 상태 업데이트
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // 스크롤 이벤트 등록 및 해제
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  // 맨 위로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 영화 클릭 시 모달 열기
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  return (
    <div className="popular">
      <h1>🏆 지금 뜨는 컨텐츠</h1>
      <div className="movie-grid">
        {popular.map((movie) => (
          <div key={movie.id} onClick={() => handleMovieClick(movie)}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      {loading && <LoadingSpinner />}
      {!hasMore && <p className="end-message">불러올 영화가 더이상 없습니다...!</p>}

      {/* 맨 위로 버튼 */}
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* 모달 */}
      {isModalOpen && selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Popular;
