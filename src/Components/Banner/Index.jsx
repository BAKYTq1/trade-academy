import React from 'react';
import banner from '../../assets/img/Group (5).svg';
import './style.scss';

const Banner = () => {
  return (
    <section className="banner" id='banner'>
      <div className="scale-wrapper">
        <div className="item-banner">
          <div className="banner-left">
            <h1>Стань трейдером</h1>
            <h5>и управляй капиталом как профи</h5>
            <p>
           С нуля — до счёта в $10,000.
           </p>
           <p>
Онлайн и офлайн обучение. <br />
На кыргызском и русском. <br />
С гарантией результата. <br />
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
