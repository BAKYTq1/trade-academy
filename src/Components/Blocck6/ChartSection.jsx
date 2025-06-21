import React, { useEffect, useState } from 'react';
import './style.scss';

const data = [
  { id: '01', label: 'Начни с уверенности' },
  { id: '02', label: 'Навык анализа, чтения графиков, управления рисками' },
  { id: '03', label: 'Правильное мышление и дисциплина' },
  { id: '04', label: 'Доступ к сделкам и возможность зарабатывать без офиса' },
  { id: '05', label: 'Комьюнити, разборы, поддержка и интегры' },
  { id: '06', label: 'Профессию навсегда — даже если не начнёшь с нуля' },
];

function ChartSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="chart-section">
      <h2 className="chart-title">ЧТО ТЫ ПОЛУЧИШЬ</h2>

      {!isMobile ? (
        <div className="chart-container">
<svg viewBox="0 0 700 200" className="chart-svg" preserveAspectRatio="none">
  <path
    d="M0,120 
       C40,90 60,150 100,120
       C140,60 180,180 220,120
       C260,60 300,180 340,120
       C380,60 420,180 460,120
       C500,60 540,180 580,120
       C620,60 660,180 680,120
       L700,200 L0,200 Z"
    fill="#464325"
  />
  {[35, 148, 265, 390, 510, 630].map((cx, i) => (
    <circle
      key={i}
      cx={cx}
      cy={110}              // приподняли чуть выше
      r="6"
      fill="#FFC933"
      stroke="white"        // добавили белую обводку
      strokeWidth="1"
    />
  ))}
</svg>

        <div className="labels">
    {data.map((point, idx) => (
      <div key={point.id} className={`label label-${idx}`}>
        <p>{point.label}</p>
        <span>{point.id}</span>
      </div>
    ))}
  </div>
        </div>
      ) : (
        <div className="mobile-list">
          {data.map((item, index) => (
            <div className="mobile-step" key={item.id} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="step-circle">{item.id}</div>
              <div className="step-text">{item.label}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ChartSection;
