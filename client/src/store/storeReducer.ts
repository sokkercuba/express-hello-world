import type { UserData } from "../types/UserData";
import type { JuniorData } from "../types/JuniorData";
import type { PlayerData } from "../types/PlayerData";

export interface StoreState {
  error?: string;
  username: string;
  loggedIn: boolean;
  loading: boolean;
  user?: UserData | null;
  playersData?: PlayerData[];
  juniorsData?: JuniorData[];
}

enum StoreActionTypes {
  SET_ERROR = "set-error",
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

const initialState: StoreState = {
  error: "",
  username: "",
  user: null,
  loggedIn: false,
  loading: false,
  playersData: [],
  juniorsData: [],
};

export default function storeReducer(
  state = initialState,
  action: StoreAction
): StoreState {
  switch (action.type) {
    case StoreActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
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

export { initialState, StoreActionTypes };
