import React from 'react';
import './FirstSteps.scss';
import coun from "../../widgets/assets/image/coun.png";
import dude from "../../widgets/assets/image/dude.png";


const FirstSteps = () => {
    return (
        <div className='first_steps'>
            <h1>
                Старт<br />
                ближайших <br />
                потоков
            </h1>
            <div className="parent">
                <div className="div1">
                    <h3>2025</h3>
                    <p>Май</p>
                </div>
                <div className="div2">
                    <h3>3-4 группы</h3>
                    <p>по 10 человек</p>
                </div>
                <div className="div3">
                    <h3>ФОРМАТ</h3>
                    <p>Онлайн и оффлайн</p>
                </div>
                <div className="div4">
                    <h3>Язык</h3>
                    <p>Кыргызский и Русский</p>
                </div>
                <div className="div5">
                    <div className='btn'>
                        🚀 ХОЧУ В ПОТОК
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstSteps;
