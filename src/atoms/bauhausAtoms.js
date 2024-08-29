import { atom } from 'jotai';

export const inputValueAtom = atom('');
export const weatherDataAtom = atom(null);
export const selectedDayAtom = atom(null);
export const hourlyDataAtom = atom([]);
export const yAxisMinAtom = atom(null);
export const yAxisMaxAtom = atom(null);
