import { action, separator, submenu, ITopMenuRoot } from './TopMenu';

export function getMenu(): ITopMenuRoot {
  const file = submenu('File', [
    action('file.new'),
    action('file.open'),
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
