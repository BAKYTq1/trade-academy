import React from 'react';

const plans = [
  {
    name: 'Онлайн-формат',
    price: 20000,
    features: [
      'Доступ к основным материалам',
      'Базовые видеоуроки',
      'Тесты и задания',
      'Сертификат об окончании',
      'Поддержка в чате',
    ],
  },
  {
    name: 'Оффлайн в офисе',
    price: 60000,
    featured: true,
    features: [
      'Все из базового тарифа',
      'Персональные консультации',
      'Проверка домашних заданий',
      'Дополнительные материалы',
      'Помощь в трудоустройстве',
      'Доступ к закрытому сообществу',
    ],
  },
  {
    name: '👑 VIP Формат “Один на один” ',
    price: 150000,
    features: [
      'Все из стандартного тарифа',
      'Индивидуальное обучение',
      'Создание портфолио',
      'Подготовка к собеседованиям',
      'Гарантия трудоустройства',
      'Пожизненный доступ к материалам',
      'VIP-поддержка 24/7',
    ],
  },
];

function Tarif() {
  return (
      <div className="container">
    <section className="pricing-section">
        <h2 className="section-title">
          ТАРИФЫ<br />И ФОРМАТЫ<br />ОБУЧЕНИЯ
        </h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && <div className="popular-badge">ПОПУЛЯРНЫЙ</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="price">
                {plan.price.toLocaleString()}<span className="currency">с</span>
              </div>
              <ul className="features">
                {plan.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="plan-button">ВЫБРАТЬ ПЛАН</button>
            </div>
          ))}
        </div>
    </section>
      </div>
  );
}

export default Tarif;
