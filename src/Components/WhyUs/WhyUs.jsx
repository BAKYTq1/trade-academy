import React from 'react'
import './WhyUs.scss'
import why from "../../widgets/assets/image/Mirbek_img/why.svg"

function WhyUs() {
    return (
        <div className='why_us'>
            <img className='why_img' src={why} alt="" />
            <div className="why_us_container">
                <div className="why_us_container_title">
                    <h2>
                        Почему важна<br />
                        психология<br />
                        трейдинга?<br />
                    </h2>
                    <ul>

                        <li>
                            Трейдинг — это не только стратегии <br />
                            и анализ, но и управление эмоциями. <br />

                        </li>
                        <li>
                            Мы учим вас сохранять спокойствие, <br />
                            уверенность и принимать решения<br />
                            на основе логики, а не импульсов.
                        </li>
                    </ul>

                </div>
                <img src={why} alt="" />
            </div>
        </div>
    )
}

export default WhyUs