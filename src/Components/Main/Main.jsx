import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <main className="main">
      {/* Yuqori qism: Filtrlar va Maslahatchi */}
      <section className="main__filter-section">
        <div className="main__container">
          
          {/* Chap tarafdagi xabar va personaj */}
          <div className="main__hero-speech">
            <div className="main__speech-bubble">
              <h3 className="main__speech-title">Кем вы хотите стать?</h3>
              <p className="main__speech-text">
                Пора найти себя и выбрать подходящий курс :
              </p>
              <p className="main__speech-footer">Удачи!</p>
            </div>
            <div className="main__character">
              
            </div>
          </div>

          {/* O'ng tarafdagi kategoriyalar va teglar */}
          <div className="main__categories">
            
            {/* Yoshi bo'yicha tablar */}
            <div className="main__tabs">
              <button className="main__tab main__tab--active">
                <span className="main__tab-icon">👶</span>
                <div className="main__tab-content">
                  <span className="main__tab-title">Дети</span>
                  <span className="main__tab-subtitle">8 — 14 лет</span>
                </div>
              </button>

              <button className="main__tab">
                <span className="main__tab-icon">🧑</span>
                <div className="main__tab-content">
                  <span className="main__tab-title">Подростки</span>
                  <span className="main__tab-subtitle">14 — 18 лет</span>
                </div>
              </button>

              <button className="main__tab">
                <span className="main__tab-icon">👨</span>
                <div className="main__tab-content">
                  <span className="main__tab-title">Взрослые</span>
                  <span className="main__tab-subtitle">18 — ∞</span>
                </div>
              </button>
            </div>

            {/* Yo'nalishlar bo'yicha teglar */}
            <div className="main__tags">
              <button className="main__tag">Робототехника</button>
              <button className="main__tag">Создание игр</button>
              <button className="main__tag">Web-разработка</button>
              <button className="main__tag">Мультимедиа</button>
              <button className="main__tag">Шахматы</button>
              <button className="main__tag">3D-моделирование и дизайн</button>
              <button className="main__tag main__tag--active">Английский язык</button>
              <button className="main__tag">Блогинг</button>
              <button className="main__tag">Soft skills</button>
            </div>

          </div>
        </div>
      </section>

      {/* Video player qismi */}
      <section className="main__video-section">
        <div className="main__video-wrapper">
          
          <button className="main__video-play-btn" aria-label="Play video">
            <span className="main__play-icon">▶</span>
          </button>
        </div>
      </section>

      {/* Statistika qismi */}
      <section className="main__stats-section">
        <div className="main__container">
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
              <span className="main__stat-label">Ведущих преподавателей</span>
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