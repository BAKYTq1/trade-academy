import React from 'react'
import './About.scss'
import coin from '../../widgets/assets/image/Mirbek_img/coin-12345.svg'
import group from '../../assets/Group 101.svg'
import img from '../../assets/Group 99.svg'

function About() {
    return (
        <div className='about container' id='education'>
            <img className='about_coin'  src={coin} alt="" />
            <h1>Для кого это обучение?</h1>
            <p className='top-p'>Этот курс для тебя, если:</p>
            <ul>
                <li>Ты хочешь освоить новую <br /> профессию с высоким доходом</li>
                <li>Уже пробовал трейдинг, но не получалось — слил депозит <br /> или не понял, как торговать правильно</li>
                <li>У тебя есть бизнес или работа, и ты хочешь наращивать <br /> капитал вне зависимости от основного дохода</li>
                <li>Устал от "обучения ради галочки" — нужен реальный <br /> результат, стратегии и уверенность в действиях</li>
            </ul>
            <div className='item-about'>
                <img src={group} alt="" />
                <p>Мы обучим с нуля, поставим мышление, <br /> дадим рабочую систему и не отпустим, <br /> пока ты сам не сдашься.
</p>
            </div>
<img className='about_img' src={img} alt="" />
        </div>
    )
}

export default About