import { action, separator, submenu, ITopMenuRoot } from './app.topmenu';

export function getMenu(): ITopMenuRoot {
  const file = submenu('File', [
    action('file.open'),
    action('file.new'),
    separator(),
    submenu('Preferences', [
      action('prefs.global'),
      action('prefs.user'),
      action('prefs.interface'),
      action('prefs.options'),
    ]),
    separator(),
    action('app.exit'),
  ]);

  // const edit = submenu('Edit', [
  //   action('Copy'),
  //   action('Cut'),
  //   action('Paste'),
  //   separator(),
  //   action('Select all'),
  // ]);

  return [file];
}
