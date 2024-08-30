import { atom } from 'jotai';

// Theme atom to manage theme with initial value from localStorage or default to 'neubrutalism'
export const themeAtom = atom(
  localStorage.getItem('selectedTheme') || 'neubrutalism'
);

// Mobile menu toggle atom
export const isMenuOpenAtom = atom(false);

// Bauhaus
export const inputValueAtom = atom('');
export const weatherDataAtom = atom(null);
export const selectedDayAtom = atom(null);
export const hourlyDataAtom = atom([]);
export const yAxisMinAtom = atom(null);
export const yAxisMaxAtom = atom(null);

// Neumorphism
export const nmMobileAtom = atom('home'); 

// Glassmorphism
export const fadeAtom = atom(false);
export const currentThemeIndexAtom = atom(0);
export const tokenAtom = atom(() => {
    const token = window.localStorage.getItem('token') || '';
    return token;
});