import { Dispatch } from "react";
import { UserData } from "../types/UserData";
import { JuniorData } from "../types/JuniorData";
import { PlayerData } from "../types/PlayerData";
import { StoreAction, StoreActionTypes } from "./storeReducer";

const setError = (dispatch: Dispatch<StoreAction>, payload: any) => {
  dispatch({ type: StoreActionTypes.SET_ERROR, payload });
};

const setUsername = (dispatch: Dispatch<StoreAction>, payload: string) => {
  console.log("🚀 ~ action setUsername:");
  console.log("🚀 ~ payload:", payload);
  dispatch({ type: StoreActionTypes.SET_USERNAME, payload });
};

const setLogin = (dispatch: Dispatch<StoreAction>, payload: boolean) => {
  console.log("🚀 ~ action setLogin:");
  console.log("🚀 ~ payload:", payload);
  dispatch({ type: StoreActionTypes.SET_LOGIN, payload });
};

const setUser = (dispatch: Dispatch<StoreAction>, payload: UserData) =>
  dispatch({ type: StoreActionTypes.SET_USER, payload });

const setLoading = (dispatch: Dispatch<StoreAction>, payload: boolean) =>
  dispatch({ type: StoreActionTypes.SET_LOADING, payload });

const setPlayers = (dispatch: Dispatch<StoreAction>, payload: PlayerData) =>
  dispatch({ type: StoreActionTypes.SET_PLAYERS, payload });

const setJuniors = (dispatch: Dispatch<StoreAction>, payload: JuniorData) =>
  dispatch({ type: StoreActionTypes.SET_JUNIORS, payload });

export {
  setError,
  setLogin,
  setUser,
  setLoading,
  setPlayers,
  setJuniors,
  setUsername,
};
