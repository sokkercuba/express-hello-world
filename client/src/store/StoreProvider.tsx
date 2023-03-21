import { createContext, Dispatch, useReducer } from "react";
import type { StoreProviderProps } from "./StoreProviderProps";
import storeReducer, { initialState, StoreState } from "./storeReducer";

const AppContext = createContext<{
  state: StoreState;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, StoreProvider };
