import React from 'react';

const NmHeader = ({ setTheme, nmMobile, setnmMobile }) => {

  const handleButtonClick = (buttonName) => {
    setnmMobile(buttonName);
  };

  return (
    <header>
      {/* Mobile Header */}
      <div className='lg:hidden fixed bottom-0 h-1/5 w-screen flex items-center justify-center bg-slate-100 p-4 rounded-t-lg shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]'>
        <div className='space-x-8'>
          <button 
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${nmMobile === 'home' ? 'shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]' : 'shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]'} `} 
            onClick={() => handleButtonClick('home')}
          >
            <svg width="30px" height="30px" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>
                    {`.cls-1{fill:none;stroke:#9ca3af;stroke-linecap:round;stroke-linejoin:round;}`}
                  </style>
                </defs>
                <path className="cls-1" d="M42.63,21.85,26,7.64a3,3,0,0,0-3.9,0L5.37,21.85a2.43,2.43,0,0,0-.29,3.44A2.39,2.39,0,0,0,7,26.16H9.09V39.45a1.63,1.63,0,0,0,1.63,1.63h7.35a1.63,1.63,0,0,0,1.63-1.63V31.27a1,1,0,0,1,1-1h6.64a1,1,0,0,1,1,1v8.18a1.63,1.63,0,0,0,1.63,1.63h7.35a1.63,1.63,0,0,0,1.63-1.63V26.16H41a2.44,2.44,0,0,0,1.59-4.31Z"></path>
                <path className="cls-1" d="M32.45,13.18V7.92a.4.4,0,0,1,.39-.39h5.68a.4.4,0,0,1,.39.39h0V18.67"></path>
              </g>
            </svg>
          </button>
          <button 
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${nmMobile === 'spendingbreakdown' ? 'shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]' : 'shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]'} `} 
            onClick={() => handleButtonClick('spendingbreakdown')}
          >
            <svg width="30px" height="30px" viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>
                    {`.c{fill:none;stroke:#9ca3af;stroke-linecap:round;stroke-linejoin:round;}`}
                  </style>
                </defs>
                <circle className="c" cx="24" cy="24" r="21.5"></circle>
                <circle className="c" cx="24" cy="24" r="11.6383"></circle>
                <path className="c" d="m21.1941,2.6815c4.0324,3.4022,4.4087,8.0708,4.4087,9.7898"></path>
                <path className="c" d="m44.7003,29.8293c-4.8652,1.1495-8.8836.4002-10.3723-.4593"></path>
                <path className="c" d="m8.2858,38.6736c.7833-5.0504,3.5202-9.2414,5.0088-10.1008"></path>
              </g>
            </svg>
          </button>
          <button 
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${nmMobile === 'expenses' ? 'shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]' : 'shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]'} `} 
            onClick={() => handleButtonClick('expenses')}
          >
            <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>
                    {`.a{fill:none;stroke:#9ca3af;stroke-linecap:round;stroke-linejoin:round;}`}
                  </style>
                </defs>
                <polyline className="a" points="5.5 34.95 12.64 29.03 17.41 33.04 26.51 24.45 32.24 28.96 42.5 20.05"></polyline>
                <path className="a" d="M40.5,42.5H7.5a2,2,0,0,1-2-2V7.5a2,2,0,0,1,2-2h33a2,2,0,0,1,2,2v33A2,2,0,0,1,40.5,42.5Z"></path>
              </g>
            </svg>
          </button>
          <button 
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${nmMobile === 'budget' ? 'shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]' : 'shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]'} `} 
            onClick={() => handleButtonClick('budget')}
          >
            <svg width="30px" height="30px" viewBox="0 0 48 48" id="a" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>
                    {`.e{fill:none;stroke:#9ca3af;stroke-linecap:round;stroke-linejoin:round;}`}
                  </style>
                </defs>
                <circle id="b" className="e" cx="13.9792" cy="13.0156" r="7.5156"></circle>
                <circle id="c" className="e" cx="34.0208" cy="34.9844" r="7.5156"></circle>
                <line id="d" className="e" x1="10.973" y1="42.5" x2="37.0271" y2="5.5"></line>
              </g>
            </svg>
          </button>
          <button 
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${nmMobile === 'settings' ? 'shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]' : 'shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]'} `} 
            onClick={() => handleButtonClick('settings')}
          >
            <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#9ca3af">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>
                    {`.cls-1{fill:none;stroke:#9ca3af;stroke-linecap:round;stroke-linejoin:round;}`}
                  </style>
                </defs>
                <path className="cls-1" d="M39.23,26a16.52,16.52,0,0,0,.14-2,16.52,16.52,0,0,0-.14-2l4.33-3.39a1,1,0,0,0,.25-1.31l-4.1-7.11a1,1,0,0,0-1.25-.44l-5.11,2.06a15.68,15.68,0,0,0-3.46-2l-.77-5.43a1,1,0,0,0-1-.86H19.9a1,1,0,0,0-1,.86l-.77,5.43a15.36,15.36,0,0,0-3.46,2L9.54,9.75a1,1,0,0,0-1.25.44L4.19,17.3a1,1,0,0,0,.25,1.31L8.76,22a16.66,16.66,0,0,0-.14,2,16.52,16.52,0,0,0,.14,2L4.44,29.39a1,1,0,0,0-.25,1.31l4.1,7.11a1,1,0,0,0,1.25.44l5.11-2.06a15.68,15.68,0,0,0,3.46,2l.77,5.43a1,1,0,0,0,1,.86h8.2a1,1,0,0,0,1-.86l.77-5.43a15.36,15.36,0,0,0,3.46-2l5.11,2.06a1,1,0,0,0,1.25-.44l4.1-7.11a1,1,0,0,0-.25-1.31ZM24,31.18A7.18,7.18,0,1,1,31.17,24,7.17,7.17,0,0,1,24,31.18Z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>

    {/* Desktop Header */}
      <div className="hidden lg:flex h-screen w-1/5 bg-slate-100 text-gray-600 fixed flex flex-col justify-center rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]">
        <div className="p-4 flex flex-col justify-center items-center">
          <h1 className="lg:text-3xl font-light mb-12">UI Demo</h1>
          <ul className='lg:text-xl font-light space-y-8'>
            <li className="mb-4"><button className="bg-slate-100 p-8 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('neumorphism')}>Neumorphism</button></li>
            <li className="mb-4"><button className="bg-slate-100 p-8 rounded-full hover:text-orange-400 hover:shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('retro-futurism')}>Retro-Futurism</button></li>
            <li className="mb-4"><button className="bg-slate-100 p-8 rounded-full hover:text-orange-400 hover:shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('glassmorphism')}>Glassmorphism</button></li>
            <li className="mb-4"><button className="bg-slate-100 p-8 rounded-full hover:text-orange-400 hover:shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('neubrutalism')}>Neubrutalism</button></li>
            <li className="mb-4"><button className="bg-slate-100 p-8 rounded-full hover:text-orange-400 hover:shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('bauhaus')}>Bauhaus</button></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NmHeader;
