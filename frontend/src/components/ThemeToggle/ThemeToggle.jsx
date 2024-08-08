import React from 'react';
import './themeToggle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} className='theme-toggle-button'>
      {theme === 'light' ? <FontAwesomeIcon icon={faMoon} className='dark-mode-icn'/> : <FontAwesomeIcon icon={faSun} className='dark-mode-icn' />}
    </button>
  );
}

export default ThemeToggle;
