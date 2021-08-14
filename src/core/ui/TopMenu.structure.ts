import { action, separator, submenu, ITopMenuRoot } from './TopMenu';

export function getMenu(): ITopMenuRoot {
  const file = submenu('File', [
    action('New...'),
    action('Open...'),
    separator(),
    submenu('Preferences', [
      action('Global'),
      action('User'),
      action('Interface'),
      action('Option'),
    ]),
    separator(),
    action('Exit'),
  ]);

  const edit = submenu('Edit', [
    action('Copy'),
    action('Cut'),
    action('Paste'),
    separator(),
    action('Select all'),
  ]);

  return [file, edit];
}
