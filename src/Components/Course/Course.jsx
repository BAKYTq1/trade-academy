import React from 'react'
import './Course.scss'
import img from '../../widgets/assets/image/Mirbek_img/coin228.svg'

function Course() {
    return (
        <div className='course'>
            <h1>ЭТОТ КУРС ДЛЯ ТЕБЯ  <br />
                ЕСЛИ:</h1>
            <div className='parent'>
                <div className='child-1'>
                    <h3>ИЩЕШЬ СЕБЯ?</h3>
                    <p>Устал работать с утра до вечера и хочешь начать <br />
                        зарабатывать удаленно и быть финансово свободным.</p>
                </div>
                <div className='child-2'>
                    <h3>УСТАЛ РАБОТАТЬ <br /> НА КОГО ТО?</h3>
                    <p>Устал работать с утра до вечера и хочешь начать <br />
                        зарабатывать удаленно и быть финансово свободным.</p>
                </div>
                <div className='child-3'>
                    <h3>ИЩЕШЬ КУДА <br /> ИНВЕСТИРОВАТЬ?</h3>
                    <p>Не знаешь как приумножить свой <br />
                        капитал и выйти на пассивный <br />
                        доход.</p>
                </div>
            </div>
            <img className='coin_img' src={img} alt="" />
        </div>
    )
}

export default Course