import { atom, createStore, Provider } from "jotai";
import { createElement, ReactNode } from "react";

/**
 * Global state management powered by Jotai.
 * @see https://jotai.org/
 */
export const store = createStore();
export const isDropDownOptionClickedAtom = atom(false);

export function StoreProvider(props: StoreProviderProps): JSX.Element {
  return createElement(Provider, { store, ...props });
}

export type StoreProviderProps = {
  children: ReactNode;
};
