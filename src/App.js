import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import ThemeSwitch from './themes/ThemeSwitch';

import './App.css';

function App() {
  // Initialize theme from localStorage or fallback to 'neubrutalism'
  const [theme, setTheme] = useState(() => localStorage.getItem('selectedTheme') || 'neubrutalism');
  const [nmMobile, setnmMobile] = useState('home');

  useEffect(() => {
    // Store the selected theme in localStorage whenever it changes
    localStorage.setItem('selectedTheme', theme);
  }, [theme]);

  return (
    <div className="relative">
      <Header theme={theme} setTheme={setTheme} nmMobile={nmMobile} setnmMobile={setnmMobile}/>
      <ThemeSwitch theme={theme} setTheme={setTheme} nmMobile={nmMobile} setnmMobile={setnmMobile}/>
    </div>
  );
}

export default App;
