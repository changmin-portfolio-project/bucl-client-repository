export const isActivePopUp = (isActive: boolean | string): void => {
  if (isActive) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }
};
