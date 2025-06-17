import React from 'react'
import './Str9.scss'

function Str9() {
    return (
        <div className='strategies'>
            <h2>СТРАТЕГИИ, КОТОРЫЕ<br />
                РАБОТАТЮТ</h2>
            <p className='up_p'>
                Мы обучаем проверенным подходам,<br />
                которые используют профессионалы по всему миру:
            </p>
            <div className="parent">
                <div className="div1">
                    <h3>Smart Money</h3>
                    <h6>(SMC): изучение поведения крупных игроков.</h6>
                </div>
                <div className="div2">
                    <h3>ICT:</h3>
                    <h6>
                        анализ рыночных структур<br />
                        и зон ликвидности.
                    </h6>
                </div>
                <div className="div3">
                    <h3>Ограничено:</h3>
                    <p>
                        Личный разбор от наставника<br />
                        для первых 10 учеников

                    </p>
                </div>
                <div className="div4">
                    <h3>Скидка</h3>
                    <p>
                        -20% при ранней оплате
                    </p>
                </div>
                <div className="div5">
                    <h3>Акция:</h3>
                    <p>Только до 15 мая!</p>
                </div>
            </div>
            
        </div>
    )
}

export default Str9