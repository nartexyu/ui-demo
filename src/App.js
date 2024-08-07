import React, { useState } from 'react';

import Header from './components/Header';
import ThemeSwitch from './themes/ThemeSwitch';

import './App.css';

function App() {
  const [theme, setTheme] = useState('futurism');
  const [nmMobile, setnmMobile] = useState('home');

  return (
    <div className="h-screen w-screen relative">
      <Header theme={theme} setTheme={setTheme} nmMobile={nmMobile} setnmMobile={setnmMobile}/>
      <ThemeSwitch theme={theme} setTheme={setTheme} nmMobile={nmMobile} setnmMobile={setnmMobile}/>
    </div>
  );
}

export default App;
