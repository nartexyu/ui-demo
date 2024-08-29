import React from 'react';
import Neubrutalism from './Neubrutalism';
import Bauhaus from './Bauhaus';
import Neumorphism from './Neumorphism';
import RetroFuturism from './RetroFuturism';
import Glassmorphism from './Glassmorphism';

// ThemeSwitch component handles the rendering of different UI themes based on the selected theme prop.
const ThemeSwitch = ({ theme, setTheme, nmMobile }) => {
    // console.log('Current theme:', theme);
    switch (theme) {
        case 'bauhaus':
            return <Bauhaus />;
        case 'neumorphism':
            return <Neumorphism setTheme={setTheme} nmMobile={nmMobile}/>;
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
