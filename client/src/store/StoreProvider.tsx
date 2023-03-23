import { createContext, Dispatch, useEffect, useReducer } from "react";
import storeReducer, { StoreState } from "./storeReducer";

import type { StoreProviderProps } from "./StoreProviderProps";
import { getStoredState, setStoredState } from "./localStorage";

const AppContext = createContext<{
  state: StoreState;
  dispatch: Dispatch<any>;
}>({ state: getStoredState(), dispatch: () => null });

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(storeReducer, getStoredState());

  useEffect(() => {
    setStoredState(state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, StoreProvider };
