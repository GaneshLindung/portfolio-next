export const triggerButtonGlow = (event) => {
  const button = event.currentTarget;

  if (!button) {
    return;
  }

  if (button.__glowTimeout) {
    clearTimeout(button.__glowTimeout);
  }

  button.classList.remove('button-glow');
  // Force reflow so the animation can restart
  void button.offsetWidth;

  button.classList.add('button-glow');

  button.__glowTimeout = setTimeout(() => {
    button.classList.remove('button-glow');
    button.__glowTimeout = undefined;
  }, 650);
};