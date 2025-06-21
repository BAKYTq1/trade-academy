import React from 'react';
import './Results.scss';

const cases = [
  {
    name: 'Асан',
    age: 31,
    city: 'Бишкек',
    points: [
      'Был бизнес по стройке.',
      'Приехал в команду, изучают стратегии по золоту.',
      'Сейчас торгую 3 раза в день, стабильно +5–7% в месяц.',
      'Уже отбил курс.',
    ],
  },
  {
    name: 'Элина',
    age: 23,
    city: 'Ош',
    points: [
      'Начинала вообще знаний. Взяли в VIP-группу.',
      'Через 2 месяца — реальный счёт в $5000.',
      'Первая прибыль — $470.',
    ],
  },
  {
    name: 'Бекболот',
    age: 35,
    city: 'Бишкек',
    points: [
      'Работаю на госслужбе, прошёл курс и теперь торгую сам.',
      'Спокойно, без паники..',
      'Спасибо за психологию и сопровождение.',
    ],
  },
];

const highlightTargets = [
  '3 раза',
  '\\+5–7% в месяц',        
  '2 месяца',
  '\\$3000',
  '\\$400',
];

const highlightRegex = new RegExp(`(${highlightTargets.join('|')})`, 'gi');

const highlight = (text) =>
  text.replace(highlightRegex, '<span class="accent">$1</span>');

const Results = () => {
  return (
    <section className="container">
      <div className=" cases-section">
        <h2 className="section-title">КЕЙСЫ И РЕЗУЛЬТАТЫ</h2>

        <div className="cases-grid">
          {cases.map((item, idx) => (
            <div className="case-card" key={idx}>
              <div className="case-image" />
              <div className="case-info">
                <h3 className="case-name">
                  {item.name}, {item.age} год — {item.city}
                </h3>

                <ul>
                  {item.points.map((p, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: highlight(p) }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <button className="more-button">СМОТРЕТЬ БОЛЬШЕ КЕЙСОВ</button>
      </div>
    </section>
  );
};

export default Results;
