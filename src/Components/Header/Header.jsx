import React, { useState } from 'react';
import './Header.css';

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
        
        {/* Logo */}
        <a href="#" className="header__logo logo">
          <div className="logo__icon">
            <span className="logo__shape logo__shape--cross"></span>
            <span className="logo__shape logo__shape--triangle"></span>
            <span className="logo__shape logo__shape--circle"></span>
          </div>
          <div className="logo__text">
            <span className="logo__title">FUTURE</span>
            <span className="logo__subtitle">ACADEMY</span>
          </div>
        </a>

        {/* Navigation Menu */}
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

        {/* User Actions */}
        <div className="header__actions">
          {/* Location Dropdown */}
          <div className="header__location location">
            <span className="location__icon">📍</span>
            <button type="button" className="location__button">
              Нижний Новгород
              <span className="location__arrow">❯</span>
            </button>
          </div>

          {/* Phone */}
          <a href="tel:88009503398" className="header__phone">
            8 800 950-33-98
          </a>

          {/* User Auth */}
          <a href="#" className="header__user">
            <span className="header__user-icon">👤</span>
            <span>Войти</span>
          </a>

          {/* Mobile Burger Button */}
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