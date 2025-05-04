import React from 'react';
import './FirstSteps.scss';
import coun from "../../widgets/assets/image/coun.png";
import dude from "../../widgets/assets/image/dude.png";


const FirstSteps = () => {
    return (
        <div className='first_steps'>
            <img className='coin_img' src={coun} alt="" />
            <div className='first_steps_container'>
                <div className='first_steps_title'>
                    <h1>
                        Первые шаги <br />
                        в трейдинге:<br />
                        опыт студента<br />
                        и первые успехи<br />
                    </h1>
                    <p>
                        Студент делится опытом прохождения курсов по <br />
                        трейдингу, своими первыми успехами и советами <br />
                        для начинающих.
                    </p>
                    <button>УЗНАТЬ БОЛЬШЕ</button>
                </div>
                <div className='first_steps_img'>
                    <img src={dude} alt="" />
                </div>
                    
            </div>
        </div>
    );
}

export default FirstSteps;
