import React from 'react';
import './Education.scss';
import statue from '../../widgets/assets/image/Mirbek_img/statue.png'; // Добавь файл статуи в папку с компонентом
import coin from "../../widgets/assets/image/Mirbek_img/educ_coin.png";

function Education() {
  return (
    <div className="educaation_all">
        <img className='coin_img' src={coin} alt="" />
        <div className="coin__img_div"></div>
    <div className="education">
      <h1 className="education__title">Что входит в обучение:</h1>

      <div className="education__content">
        <div className="education__block top-left">
          <h2><span className="highlight">Углубленный анализ рынков:</span></h2>
          <p>Форекс, фондовые рынки, криптовалюты.</p>
          <p><span className="highlight">Работа</span> на реальных платформах (MT4/MT5).</p>
        </div>

        <div className="education__block bottom-left">
          <h2><span className="highlight">Криптовалюты и P2P-арбитраж:</span></h2>
          <p><span className="highlight">Разберётесь</span> в стейкинге, фарминге и других прибыльных стратегиях.</p>
        </div>

        <div className="education__image">
          <img src={statue} alt="Статуя Давида" />
        </div>

        <div className="education__block top-right">
          <h2><span className="highlight">Практика с проп-аккаунтами:</span></h2>
          <p>Мы <span className="highlight">шаг за шагом</span> покажем, как работать с крупными инвестиционными счетами.</p>
        </div>

        <div className="education__block bottom-right">
          <h2><span className="highlight">Чёткие стратегии:</span></h2>
          <p><span className="highlight">Управление</span> рисками и капиталом.</p>
          <p><span className="highlight">Изучение</span> Price Action, уровней поддержки и сопротивления, а также ключевых паттернов (флаг, клин, ГиП).</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Education;
