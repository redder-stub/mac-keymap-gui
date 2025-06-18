const macKeyNames = {
  Meta: 'Command (\u2318)',
  Alt: 'Option (\u2325)',
  Control: 'Control (\u2303)',
  Shift: 'Shift (\u21E7)'
};

window.addEventListener('keydown', event => {
  const name = macKeyNames[event.key] || event.key;
  console.log('Key pressed:', name);
});
