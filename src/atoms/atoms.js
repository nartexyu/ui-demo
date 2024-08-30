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
export const tokenAtom = atom(
  window.localStorage.getItem('token') || '', // Initial value
  (get, set, newToken) => {
    // Update both the atom's state and localStorage
    set(tokenAtom, newToken);
    window.localStorage.setItem('token', newToken);
  }
);
export const playbackAtom = atom({
  playbackState: null,
  prevTrack: null,
  nextTrack: null,
  isPlaying: false,
  isTrackChanging: false,
});
export const searchAtom = atom({
  searchTerm: "",
  searchResults: [],
});
export const lightModeAtom = atom(true)