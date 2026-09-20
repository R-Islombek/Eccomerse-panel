import React from 'react';
import './Banner.css';

import monitorIcon from '../Images/monitorIcon.png';
import newsIcon from '../Images/newsIcon.png';
import worldIcon from '../Images/worldIcon.png';
import shapesIcon from '../Images/shapesIcon.png';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">

        <div className="banner__hero">
          <div className="banner__hero-date">
            <span className="banner__hero-day">25</span>
            <span className="banner__hero-month">ноября</span>
          </div>

          <div className="banner__hero-content">
            <h3 className="banner__hero-title">
              День открытых дверей
            </h3>

            <p className="banner__hero-text">
              Приглашаем всех желающих на бесплатную экскурсию
              <br />
              в мир востребованных профессий и полезных навыков
            </p>
          </div>

          <button className="banner__hero-btn">
            Записаться <span className="banner__arrow">›</span>
          </button>
        </div>

        <div className="banner__grid">

          <div className="banner__card banner__card--large-blue">
            <div className="banner__card-icon-wrapper">
              <img
                src={monitorIcon}
                alt="Программы обучения"
                className="banner__card-icon"
              />
            </div>

            <h4 className="banner__card-title">
              Программы обучения
            </h4>

            <p className="banner__card-text">
              В списке наших курсов вы сможете найти профессию и
              занятие по душе, изучить новое и получить практические
              знания, которые помогут получить работу мечты.
            </p>

            <button className="banner__card-btn">
              Подробнее <span className="banner__arrow">›</span>
            </button>
          </div>

          <div className="banner__right-group">

            <div className="banner__top-cards">

              <div className="banner__card banner__card--green">
                <img
                  src={newsIcon}
                  alt="Новости Академии"
                  className="banner__card-icon"
                />

                <h4 className="banner__card-title">
                  Новости Академии
                </h4>
              </div>

              <div className="banner__card banner__card--pink">
                <img
                  src={worldIcon}
                  alt="Мир IT"
                  className="banner__card-icon"
                />

                <h4 className="banner__card-title">
                  Мир IT
                </h4>
              </div>

            </div>

            <div className="banner__card banner__card--yellow">

              <div className="banner__card-icon-wrapper">
                <img
                  src={shapesIcon}
                  alt="Попробуй!"
                  className="banner__card-icon"
                />
              </div>

              <div className="banner__card-body">
                <h4 className="banner__card-title">
                  Попробуй!
                </h4>

                <p className="banner__card-text">
                  Пройдите тест и узнайте свои способности в сфере
                  информационных технологий
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
