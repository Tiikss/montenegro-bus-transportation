import React from 'react';
import './themeToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function ThemeToggle({ theme, toggleTheme, hamburger }) {
  return (
    <button onClick={toggleTheme} className='theme-toggle-button'>
      {!hamburger ? (theme === 'light' ? <FontAwesomeIcon icon={faMoon} className='dark-mode-icn'/> : <FontAwesomeIcon icon={faSun} className='dark-mode-icn' />)
        :theme === 'light' ? <FontAwesomeIcon icon={faMoon} className='dark-mode-icn' style={{color:"black"}}/> : <FontAwesomeIcon icon={faSun} className='dark-mode-icn' style={{color:"white"}}/>
        }
    </button>
  );
}

export default ThemeToggle;
