import React from 'react'
import './STRATEGIES.scss'
import img from '../../widgets/assets/image/Mirbek_img/Starteg3.svg'

function STRATEGIES() {
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
                    <div>
                    <h3>SC:</h3>
                    <h6>
                        понимание спроса и предложения на рынке.
                    </h6>

                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
            <p className='down_p'>Эти методики помогут вам находить лучшие точки входа и<br />
                выхода на рынке.</p>
        </div>
    )
}

export default STRATEGIES