export const handleDragStart = (e, startXRef) => {
  startXRef.current = e.clientX || e.touches[0].clientX;
};
