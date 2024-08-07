import React, { useState, useEffect, useRef } from 'react';

import NbHeader from './NbHeader';
import NmHeader from './NmHeader';
import GlassHeader from './GlassHeader';
import BauhausHeader from './BauhausHeader';
import RfHeader from './RfHeader';
import Neubrutalism from '../themes/Neubrutalism';

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
