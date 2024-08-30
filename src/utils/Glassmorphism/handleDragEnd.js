export const handleDragEnd = (e, startXRef, rotateTheme) => {
  const endX = e.clientX || e.changedTouches[0].clientX;
  if (endX > startXRef.current + 50) {
    rotateTheme(1);
  } else if (endX < startXRef.current - 50) {
    rotateTheme(-1);
  }
};
