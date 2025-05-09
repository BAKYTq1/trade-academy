import React from 'react';
import banner from '../../assets/img/Group (5).svg';
import './style.scss';

const Banner = () => {
  return (
    <section className="banner">
      <div className="scale-wrapper">
        <div className="item-banner">
          <div className="banner-left">
            <h1>LIGNUM ACADEMY:</h1>
            <p>
              Мы обучаем трейдингу и помогаем вам стать частью нашего
              профессионального комьюнити трейдеров.
            </p>
            <button>ЗАПИСАТЬСЯ</button>
          </div>
          <div className="banner-right">
            <div className="blur-circle" />
            <img src={banner} alt="Трейдинг и технологии" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
