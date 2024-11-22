import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Assuming we create a corresponding CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">🎬 Niraaah-flix</Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/popular">대세 콘텐츠</Link></li>
          <li><Link to="/search">찾아보기</Link></li>
          <li><Link to="/wishlist">내가 찜한 리스트</Link></li>
        </ul>
      </nav>
      <div className="header-user">
        <Link to="/signin">로그인</Link>
      </div>
    </header>
  );
};

export default Header;
