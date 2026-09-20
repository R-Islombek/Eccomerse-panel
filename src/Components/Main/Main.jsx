import React from 'react';
import './Main.css';

import ukki from '../Images/Ukki.png';
import gr1 from '../Images/Gr1.png';
import gr2 from '../Images/Gr2.png';
import gr3 from '../Images/Gr3.png';
import girl from '../Images/Girl.jpg';

const Main = () => {
  return (
    <main className="main">
      <section className="main__filter-section">
        <div className="main__container">

          <div className="main__hero-speech">
            <div className="main__speech-bubble">
              <h3 className="main__speech-title">Кем вы хотите стать?</h3>
              <p className="main__speech-text">
                Пора найти себя<br />
                и выбрать подходящий<br />
                курс :)
              </p>
              <p className="main__speech-footer">Удачи!</p>
            </div>
            <div className="main__character">
              <img src={ukki} alt="Сова" className="main__character-img" />
            </div>
          </div>
          <div className="main__categories">
            
            <div className="main__tabs">
              <button className="main__tab main__tab--active">
                <img src={gr1} alt="Дети" className="main__tab-icon" />
                <div className="main__tab-content">
                  <span className="main__tab-title">Дети</span>
                  <span className="main__tab-subtitle">8 — 14 лет</span>
                </div>
              </button>

              <button className="main__tab">
                <img src={gr2} alt="Подростки" className="main__tab-icon" />
                <div className="main__tab-content">
                  <span className="main__tab-title">Подростки</span>
                  <span className="main__tab-subtitle">14 — 18 лет</span>
                </div>
              </button>

              <button className="main__tab">
                <img src={gr3} alt="Взрослые" className="main__tab-icon" />
                <div className="main__tab-content">
                  <span className="main__tab-title">Взрослые</span>
                  <span className="main__tab-subtitle">18 — ∞</span>
                </div>
              </button>
            </div>

            <div className="main__tags">
              <button className="main__tag">Робототехника</button>
              <button className="main__tag">Создание игр</button>
              <button className="main__tag">Web-разработка</button>
              <button className="main__tag">Мультимедиа</button>
              <button className="main__tag">Шахматы</button>
              <button className="main__tag">3D-моделирование и дизайн</button>
              <button className="main__tag main__tag--active">
                Английский язык
                <span className="main__tag-cursor">👆</span>
              </button>
              <button className="main__tag">Блогинг</button>
              <button className="main__tag">Soft skills</button>
            </div>

          </div>
        </div>
      </section>

      <section className="main__video-section">
        
        <div className="main__decorations">
          <svg className="main__decor main__decor--top-orange" width="100" height="60" viewBox="0 0 100 60">
            <line x1="0" y1="60" x2="100" y2="0" stroke="#f2994a" strokeWidth="2" />
          </svg>

          <svg className="main__decor main__decor--triangle" width="70" height="70" viewBox="0 0 70 70">
            <polygon points="35,0 70,70 0,70" fill="none" stroke="#56ccf2" strokeWidth="2" />
          </svg>

          <svg className="main__decor main__decor--left-orange" width="120" height="10" viewBox="0 0 120 10">
            <line x1="0" y1="5" x2="120" y2="5" stroke="#f2994a" strokeWidth="2" />
          </svg>

          <svg className="main__decor main__decor--center-line" width="10" height="60" viewBox="0 0 10 60">
            <line x1="5" y1="0" x2="5" y2="60" stroke="#f2994a" strokeWidth="2" />
          </svg>

          <svg className="main__decor main__decor--right-blue" width="120" height="120" viewBox="0 0 120 120">
            <line x1="0" y1="0" x2="120" y2="120" stroke="#56ccf2" strokeWidth="2" />
          </svg>

          <div className="main__decor main__decor--cross">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path 
                d="M35 5 H65 V35 H95 V65 H65 V95 H35 V65 H5 V35 H35 Z" 
                fill="none" 
                stroke="#56ccf2" 
                strokeWidth="2" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
        </div>

        <div className="main__video-wrapper">
          <img src={girl} alt="Девочка в VR очках" className="main__video-cover" />
          <button className="main__video-play-btn" aria-label="Play video">
            <div className="main__play-triangle"></div>
          </button>
        </div>

      </section>

      <section className="main__stats-section">
        <div className="main__container main__container--column">
          <h2 className="main__stats-title">
            Актуальные знания от признанных экспертов рынка<br />
            для новичков и практикующих специалистов.
          </h2>

          <div className="main__stats-grid">
            <div className="main__stat-card">
              <span className="main__stat-number">600</span>
              <span className="main__stat-label">Курсов</span>
            </div>

            <div className="main__stat-card">
              <span className="main__stat-number">82</span>
              <span className="main__stat-label">
                Ведущих<br />преподавателей
              </span>
            </div>

            <div className="main__stat-card">
              <span className="main__stat-number">14 795</span>
              <span className="main__stat-label">Выпускников</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;