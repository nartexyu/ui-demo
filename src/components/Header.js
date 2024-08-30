import React, { useState, useEffect, useRef } from 'react';

import NbHeader from './Neubrutalism/NbHeader';
import NmHeader from './Neumorphism/NmHeader';
import GlassHeader from './Glassmorphism/GlassHeader';
import BauhausHeader from './Bauhaus/BauhausHeader';
import RfHeader from './Retro-futurism/RfHeader';
import Neubrutalism from './Neubrutalism/NbHeader';

import { useAtom } from 'jotai';
import { themeAtom } from '../atoms/atoms';

const Header = () => {
    const [theme] = useAtom(themeAtom);

    useEffect(() => {
    // Store the selected theme in localStorage whenever it changes
        localStorage.setItem("selectedTheme", theme);
    }, [theme]);

    const renderHeaderContent = () => {
        switch (theme) {
            case 'neubrutalism':
                return (
                    <NbHeader />          
                );
            case 'bauhaus':
                return (
                    <BauhausHeader />
                );
            case 'neumorphism':
                return (
                    <NmHeader />
                );
            case 'retro-futurism':
                return (
                    <RfHeader />
                );
            case 'glassmorphism':
                return (
                    <GlassHeader />
                )
            default:
                return ( 
                    <NbHeader />
                );
        }
    };

    return renderHeaderContent();
};

export default Header;
