import React from 'react'
import banner from '../../assets/img/Group (5).svg'
import './style.scss'
function Banner() {
  return (
    <div className='banner'>
      <div className='item-banner'>
        <div className='banner-left'>
            <h1>LIGNUM ACADEMY: </h1>
            <p>Мы обучаем трейдингу и помогаем вам стать частью нашего профессионального комьюнити трейдеров.</p>
            <button>ЗАПИСАТЬСЯ</button>
        </div>
        <div className='banner-right'>
            <div></div>
             <img src={banner} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
