import React from 'react'
import './Course.scss'
import img from '../../widgets/assets/image/Mirbek_img/coin228.svg'
import coin from '../../widgets/assets/image/Mirbek_img/coin-bit.svg' 

function Course() {
    return (
        <section className='course'>
            <h1>ЭТОТ КУРС <br />
                ДЛЯ ТЕБЯ ЕСЛИ:</h1>
            <div className='course__content'> 
                <div className='course__content_left'>
                    <div>
                        <h2>ИЩЕШЬ КУДА  <br /> ИНВЕСТИРОВАТЬ?</h2>
                        <p>Устал от "обучения ради галочки" — нужен реальный <br /> результат, стратегии и уверенность в действиях</p>
                    </div>
                    <div>
                        <h2>УСТАЛ РАБОТАТЬ <br /> НА КОГО ТО?</h2>
                        <p>Уже пробовал трейдинг, но не получалось — <br />
                            слил депозит или не понял, как торговать<br />
                            правильно
                        </p>
                    </div>
                    <div>
                        <h2>ИЩЕШЬ СЕБЯ?</h2>
                        <p>Ты хочешь освоить новую профессию с высоким доходом? <br />
                            У тебя есть бизнес или работа, и ты хочешь наращивать <br />
                             капитал вне зависимости от основного дохода?</p>
                    </div>
                </div>
                <div className='course__content_right'> </div>
            </div>
            <img className='coin_img' src={img} alt="" />
            <img className='course_coin' src={coin} alt="" />
        </section>
    )
}

export default Course