import { Dispatch } from "react";
import { UserData } from "../types/UserData";
import { JuniorData } from "../types/JuniorData";
import { PlayerData } from "../types/PlayerData";
import { StoreAction, StoreActionTypes } from "./storeReducer";

const setWeek = (dispatch: Dispatch<StoreAction>, payload: number) => {
  dispatch({ type: StoreActionTypes.SET_WEEK, payload });
};

const setError = (dispatch: Dispatch<StoreAction>, payload: boolean) => {
  dispatch({ type: StoreActionTypes.SET_ERROR, payload });
};

const setErrorMsg = (dispatch: Dispatch<StoreAction>, payload: string) => {
  dispatch({ type: StoreActionTypes.SET_ERROR_MSG, payload });
};

const setUsername = (dispatch: Dispatch<StoreAction>, payload: string) => {
  dispatch({ type: StoreActionTypes.SET_USERNAME, payload });
};

const setLogin = (dispatch: Dispatch<StoreAction>, payload: boolean) => {
  dispatch({ type: StoreActionTypes.SET_LOGIN, payload });
};

const setUser = (dispatch: Dispatch<StoreAction>, payload: UserData) => {
  return dispatch({ type: StoreActionTypes.SET_USER, payload });
};

const setLoading = (dispatch: Dispatch<StoreAction>, payload: boolean) =>
  dispatch({ type: StoreActionTypes.SET_LOADING, payload });

const setPlayers = (dispatch: Dispatch<StoreAction>, payload: PlayerData) =>
  dispatch({ type: StoreActionTypes.SET_PLAYERS, payload });

const setJuniors = (dispatch: Dispatch<StoreAction>, payload: JuniorData) =>
  dispatch({ type: StoreActionTypes.SET_JUNIORS, payload });

export {
  setWeek,
  setError,
  setErrorMsg,
  setLogin,
  setUser,
  setLoading,
  setPlayers,
  setJuniors,
  setUsername,
};
