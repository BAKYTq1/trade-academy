import React, { useState } from 'react';
import './Header.scss';
import icon from '../../widgets/assets/image/icon.png';
import { FiX } from 'react-icons/fi';

function Header() {
  const [active, setActive] = useState('Проблемы');
  const [menuOpen, setMenuOpen] = useState(false);

  const headerLinks = [
  { title: 'Проблемы', link: '/', id: 'problems' },
    { title: 'Обучение', link: '#education', id: 'education' },
    { title: 'Результаты', link: '#results', id: 'results' },
    { title: 'FAQ', link: '#faq', id: 'faq' },
    { title: 'Наши трейдеры', link: '#traders', id: 'traders' },
    { title: 'Психология', link: '#psychology', id: 'psychology' },
  ];

  const handleClick = (title) => {
    setActive(title);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header">
        <img src={icon} alt="logo" className="logo" />

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>

        <nav className="desktop-nav">
          {headerLinks.map((el, index) => (
            <li
              key={index}
              onClick={() => handleClick(el.title)}
              className={active === el.title ? 'active' : ''}
            >
              {el.title}
            </li>
          ))}
        </nav>

        <button className="consultation">
          КОНСУЛЬТАЦИЯ
        </button>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button 
          className="menu-toggle open" 
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <FiX size={28} color="#FFB200" />
        </button>

        <ul className="mobile-nav">
          {headerLinks.map((el, index) => (
            <li
              key={index}
              className={active === el.title ? 'active' : ''}
              onClick={() => handleClick(el.title)}
            >
              {el.title}
            </li>
          ))}
        </ul>

        <button className="mobile-consultation">
          КОНСУЛЬТАЦИЯ
        </button>
      </div>
    </header>
  );
}

export default Header;