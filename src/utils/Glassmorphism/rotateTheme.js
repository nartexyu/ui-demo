// Rotates the theme index based on the provided direction (left or right swipe)
export const rotateTheme = (
  direction,
  setFade,
  setCurrentThemeIndex,
  themes
) => {
  setFade(true);
  setTimeout(() => {
    setCurrentThemeIndex(
      (prevIndex) => (prevIndex + direction + themes.length) % themes.length
    );
    setFade(false);
  }, 200); // Duration of the fade-out transition
};
