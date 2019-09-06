import React, { useContext, createContext, FC } from 'react';

export interface Store<T> {
  Provider: FC
  useStore: () => T
}

export type Hook<S, P> = (params?: P) => S

export function createStore<ObservableState, P = void>(useHook: Hook<ObservableState, P>, params?: P): Store<ObservableState> {
  const Context = createContext<ObservableState | null>(null);

  const Provider: FC = (props) => {
    return <Context.Provider value={useHook(params)}>{props.children}</Context.Provider>;
  };

  function useStore(): ObservableState {
    const state = useContext(Context);
    if (state === null) {
      throw new Error("your target Component must be wrapped by Provider");
    }
    return state;
  }

  return { Provider, useStore };
}
