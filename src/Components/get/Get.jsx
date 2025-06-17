import React from 'react';
import './Get.scss';

function Get() {
    return (
        <div className='container'>
            <section className=" header-section">
                <h1 className="main-title">О КУРСЕ</h1>
            </section>

            <section className="main-content">
                <div className="content-grid">
                    <div className="left-column">
                        <div className="info-block">
                            <h2>Полная программа: от А до Я</h2>
                            <ul>
                                <li>Подробное изучение без пропусков</li>
                                <li>Изучение современных веб-технологий, фреймворков</li>
                                <li>Создание справочника от Smart Money для ICT и Quorum</li>
                                <li>Подробный разбор каждого урока, видео, функций</li>
                                <li>Создание полноценных проектов</li>
                                <li>Портфолио потенциального джуниор-разработчика</li>
                            </ul>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="info-block">
                            <h2>Обучение проходит:</h2>
                            <ul>
                                <li>Онлайн и офлайн</li>
                                <li>На узбекском и русском языках</li>
                                <li>Гибкий график: утренние, дневные, вечерние занятия</li>
                                <li>С домашними заданиями</li>
                                <li>Проверка домашних заданий ментором</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Get;
