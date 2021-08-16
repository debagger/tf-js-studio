export interface IActionBase {
  useState: () => unknown;
  execute: () => void;
  caption: string;
  description: string;
}

export interface IAction<S> extends IActionBase {
  useState: () => S;
  execute: () => void;
  caption: string;
  description: string;
}
