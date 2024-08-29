import React, { useState, useEffect, useRef } from 'react';

import NbHeader from './Neubrutalism/NbHeader';
import NmHeader from './Neumorphism/NmHeader';
import GlassHeader from './Glassmorphism/GlassHeader';
import BauhausHeader from './Bauhaus/BauhausHeader';
import RfHeader from './Retro-futurism/RfHeader';
import Neubrutalism from './Neubrutalism/NbHeader';

const Header = ({ theme, setTheme, nmMobile, setnmMobile }) => {
    const renderHeaderContent = () => {
        switch (theme) {
            case 'neubrutalism':
                return (
                    <NbHeader setTheme={setTheme} />          
                );
            case 'bauhaus':
                return (
                    <BauhausHeader setTheme={setTheme}/>
                );
            case 'neumorphism':
                return (
                    <NmHeader setTheme={setTheme} nmMobile={nmMobile} setnmMobile={setnmMobile}/>
                );
            case 'retro-futurism':
                return (
                    <RfHeader setTheme={setTheme} />
                );
            case 'glassmorphism':
                return (
                    <GlassHeader setTheme={setTheme}/>
                )
            default:
                return ( 
                    <NbHeader setTheme={setTheme} />
                );
        }
    };

    return renderHeaderContent();
};

export default Header;
