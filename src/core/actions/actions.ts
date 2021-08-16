//eslint
export default {
  ...(await import('./file.new.action')).default,
  ...(await import('./file.open.action')).default,
  ...(await import('./prefs.global.action')).default,
  ...(await import('./prefs.interface.action')).default,
  ...(await import('./prefs.options.action')).default,
  ...(await import('./prefs.user.action')).default,
  ...(await import('./app.exit.action')).default,
};
