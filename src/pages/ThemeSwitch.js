import React from 'react';
import Neubrutalism from './Neubrutalism';
import Bauhaus from './Bauhaus';
import Neumorphism from './Neumorphism';
import RetroFuturism from './RetroFuturism';
import Glassmorphism from './Glassmorphism';
import { useAtom } from 'jotai';
import { themeAtom } from '../atoms/atoms';

// ThemeSwitch component handles the rendering of different UI themes based on the selected theme prop.
const ThemeSwitch = () => {
    const [theme] = useAtom(themeAtom);

    switch (theme) {
        case 'bauhaus':
            return <Bauhaus />;
        case 'neumorphism':
            return <Neumorphism />;
        case 'retro-futurism':
            return <RetroFuturism />;
        case 'glassmorphism':
            return <Glassmorphism />;
        case 'neubrutalism':
            return <Neubrutalism />;
        default:
            return <Neubrutalism />
    }
};

export default ThemeSwitch;
