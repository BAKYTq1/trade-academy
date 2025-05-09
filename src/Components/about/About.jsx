import React from 'react'
import './About.scss'
import coin from '../../widgets/assets/image/Mirbek_img/coin-12345.svg'
import img from '../../widgets/assets/image/Mirbek_img/coin228.svg'

function About() {
    return (
        <div className='about'>
            <img className='about_coin'  src={coin} alt="" />
            <h1>Кто мы?</h1>
            <p>
                <span>Мы —команда профессионалов</span> , которые помогают <br />
                новичкам освоить трейдинг с нуля. <span>Наши курсы подходят </span><br />
               <span> для любого уровня подготовки.</span> Мы обучаем проверенным <br />
                стратегиям,<span> даём практику на реальных рынках</span> и ведём <br />
                вас до получения стабильного дохода на трех разных <br />
                рынках это: акции, крипта, форекс<br />
            </p>
            <img className='about_img' src={img} alt="" />
        </div>
    )
}

export default About