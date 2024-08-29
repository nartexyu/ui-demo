import React, { useState, useRef } from 'react';

const FuturismHeader = ({ setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItemsRef = useRef([]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
        {/* Mobile Header */}
            <div className="lg:hidden absolute bg-transparent text-black border-black p-4 relative z-50">
                <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold font-mono">UI DEMO</h1>
                <button onClick={toggleMenu} className="focus:outline-none z-10">
                    <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                    />
                    </svg>
                </button>
                </div>
                <nav
                    className={`absolute top-0 right-0 w-screen h-screen transition-transform transform bg-gray-200 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        {['NEUBRUTALISM', 'NEUMORPHISM', 'GLASSMORPHISM', 'BAUHAUS', 'RETRO-FUTURISM'].map((themeName, index) => (
                            <div
                                key={themeName}
                                className={`font-mono font-bold mb-4 p-4 flex items-center justify-center rounded-md transition-all ${
                                    themeName === 'RETRO-FUTURISM' ? 'bg-gray-800 text-white' : 'hover:bg-gray-800 hover:text-white'
                                } hover:shadow-md hover:shadow-white`}
                                style={{ opacity: 100 }}
                                ref={(el) => (menuItemsRef.current[index] = el)}
                                onClick={() => {
                                    setTheme(themeName.toLowerCase().replace(/ /g, '-'));
                                }}
                            >
                                {themeName}
                            </div>
                        ))}
                    </div>
                </nav>

            </div>
    
        {/* Desktop Header */}
        <div className="hidden lg:flex fixed top-0 left-0 w-full justify-between items-center bg-transparent p-4 z-50  h-16 font-mono">
            <div className="text-black text-2xl">
                UI Demo
            </div>
            <div className="flex justify-center items-center">
                {['NEUBRUTALISM', 'NEUMORPHISM', 'GLASSMORPHISM', 'BAUHAUS', 'RETRO-FUTURISM'].map((themeName) => (
                <div
                    key={themeName}
                    className='cursor-pointer text-black text-lg px-3 py-2 rounded-md transition-all hover:shadow-md hover:shadow-white hover:bg-gray-800 hover:text-white'
                    onClick={() => setTheme(themeName.toLowerCase().replace(/ /g, '-'))}
                >
                    {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                </div>
                ))}
            </div>
        </div>
        </header>
    )
}

export default FuturismHeader