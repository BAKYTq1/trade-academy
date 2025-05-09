import React from 'react';
import './Get.scss';
import rek from '../../widgets/assets/image/Mirbek_img/get1.svg'
import bitcoin from '../../widgets/assets/image/Mirbek_img/bitcoin.svg'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


function Get() {
    return (
        <div className="container-get">
            <h1 className="main-heading">
                Получи <span className="highlight">$5000</span> на свой счет для торговли
            </h1>
            <p className="sub-text">
                Мы сопровождаем каждого студента до получения проп-аккаунта. Это означает, что мы можем инвестировать в вас от 5000$,
                <span className="highlight-text"> при условии что вы покажете хороший результат.</span>
            </p>

            <div className="main-content">
                <img src={bitcoin} alt="Bitcoin" className="bitcoin-image" />

                <div className="course-card">
                    <img src={rek} alt="Курс" />
                </div>

                <div className="info-boxes">
                    <div className="box">Пассивный доход с первых успешных сделок.</div>
                    <div className="arrow"><MdOutlineKeyboardDoubleArrowDown /></div>
                    <div className="box">Полная поддержка на пути к проп-аккаунту.</div>
                    <div className="arrow"><MdOutlineKeyboardDoubleArrowDown /></div>
                    <div className="box">Обучение с нуля до большого результата.</div>
                </div>
            </div>

            <button className="learn-more">УЗНАТЬ БОЛЬШЕ О ПРОП-ТРЕЙДИНГЕ</button>
        </div>
    );
}

export default Get;
