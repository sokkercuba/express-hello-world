import type { UserData } from "../types/UserData";
import type { JuniorData } from "../types/JuniorData";
import type { PlayerData } from "../types/PlayerData";
import { getStoredState } from "./localStorage";

export interface StoreState {
  error?: boolean;
  errorMsg?: string;
  username: string;
  loading: boolean;
  loggedIn: boolean;
  currentWeek: number;
  user?: UserData | null;
  playersData?: PlayerData[];
  juniorsData?: JuniorData[];
}

enum StoreActionTypes {
  SET_WEEK = "set-week",
  SET_ERROR = "set-error",
  SET_ERROR_MSG = "set-error-msg",
  SET_LOGIN = "set-login",
  SET_USER = "set-user",
  SET_USERNAME = "set-username",
  SET_LOADING = "set-loading",
  SET_PLAYERS = "set-players",
  SET_JUNIORS = "set-juniors",
}

export interface StoreAction {
  type: StoreActionTypes;
  payload: any;
}

export default function storeReducer(
  state = getStoredState(),
  action: StoreAction
): StoreState {
  switch (action.type) {
    case StoreActionTypes.SET_WEEK:
      return { ...state, currentWeek: action.payload };
    case StoreActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    case StoreActionTypes.SET_ERROR_MSG:
      return { ...state, errorMsg: action.payload };
    case StoreActionTypes.SET_USERNAME:
      return { ...state, username: action.payload };
    case StoreActionTypes.SET_LOGIN:
      return { ...state, loggedIn: action.payload };
    case StoreActionTypes.SET_USER:
      return { ...state, user: action.payload };
    case StoreActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case StoreActionTypes.SET_PLAYERS:
      return { ...state, playersData: action.payload };
    case StoreActionTypes.SET_JUNIORS:
      return { ...state, juniorsData: action.payload };
    default:
      return state;
  }
}

export { StoreActionTypes };
