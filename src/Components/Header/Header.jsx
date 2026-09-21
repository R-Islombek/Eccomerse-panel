import React, { useState } from 'react';
import './Header.css';
import logo from '../Images/logo.png'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        
        <a href="#" className="header__logo logo">
          <div className="logo__icon">
            <img className='logo__shape__logos' src={logo} alt="rasm" />
          </div>
          <div className="logo__text">
            <span className="logo__title">FUTURE</span>
            <span className="logo__subtitle">ACADEMY</span>
          </div>
        </a>

        <nav className={`header__nav nav ${isMenuOpen ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link nav__link--catalog" onClick={closeMenu}>
                <span className="nav__icon-burger">☰</span>
                Все курсы
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link" onClick={closeMenu}>Мероприятия</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link" onClick={closeMenu}>Базы знаний</a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link" onClick={closeMenu}>Карьера</a>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__location location">
            <span className="location__icon">📍</span>
            <button type="button" className="location__button">
              Нижний Новгород
              <span className="location__arrow">❯</span>
            </button>
          </div>

          <a href="tel:88009503398" className="header__phone">
            8 800 950-33-98
          </a>

          <a href="#" className="header__user">
            <span className="header__user-icon">👤</span>
            <span>Войти</span>
          </a>

          <button
            type="button"
            className={`header__burger burger ${isMenuOpen ? 'burger--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;