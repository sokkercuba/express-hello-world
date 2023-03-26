import { Dispatch } from "react";
import apiClient from "./apiClient";
import { StoreAction } from "../store/storeReducer";
import { parseSokkerErrors } from "./apiErrorHandler";
import {
  setUser,
  setError,
  setLogin,
  setLoading,
  setErrorMsg,
} from "../store/actions";
import axios from "axios";

const SOKKER_URL = import.meta.env.VITE_SOKKER_URL;
interface SokkerCredentials {
  login: string;
  password: string;
  remember: boolean;
}

export const getUserData = async (dispatch: Dispatch<StoreAction>) => {
  setLoading(dispatch, true);

  const result = await apiClient
    .get(`${SOKKER_URL}/api/current`)
    .then((response) => {
      const { status, data } = response || null;

      if (status === 200 && !data?.error) {
        console.log("🚀 ~ getUserData success:", response);
        setUser(dispatch, data);
        setError(dispatch, false);
        setErrorMsg(dispatch, "");
        return true;
      }
      if (data?.error) {
        console.log("🚀 ~ getUserData fail:", response);
        setError(dispatch, true);
        setErrorMsg(dispatch, parseSokkerErrors(data?.error));
        return false;
      }
    })
    .catch((error) => {
      console.log("🚀 ~ getUserData error:", error);
      setError(dispatch, true);
      setErrorMsg(dispatch, error?.message || error);
      return false;
    })
    .finally(() => setLoading(dispatch, false));

  return result;
};

// https://sokker.org/start.php?session=xml&ilogin=${ilogin}&ipassword=${password}
// const { ilogin, password } = credentials;

export const handleLogin = (
  credentials: SokkerCredentials,
  dispatch: Dispatch<StoreAction>
) => {
  setLoading(dispatch, true);

  const result = axios
    .post(`${SOKKER_URL}/api/auth/login`, credentials)
    .then((response) => {
      const { status, data } = response || null;

      if (status === 200 && !data?.error) {
        console.log("🚀 ~ handleLogin success:", response);
        setLogin(dispatch, true);
        setError(dispatch, false);
        setErrorMsg(dispatch, "");
        return true;
      }
      if (data?.error) {
        console.log("🚀 ~ handleLogin fail:", response);
        setError(dispatch, true);
        setErrorMsg(dispatch, parseSokkerErrors(data?.error));
        return false;
      }
    })
    .catch((error) => {
      console.log("🚀 ~ handleLogin error:", error);
      setError(dispatch, true);
      setErrorMsg(dispatch, error?.message || error);
      return false;
    })
    .finally(() => setLoading(dispatch, false));

  return result;
};

export const handleLogOut = async (dispatch: Dispatch<StoreAction>) => {
  setLoading(dispatch, true);

  const result = await apiClient
    .get(`${SOKKER_URL}/index/action/start`)
    .then((response) => {
      const { status, data } = response || null;

      if (status === 200 && !data?.error) {
        console.log("🚀 ~ handleLogOut success:", response);
        setLogin(dispatch, false);
        setError(dispatch, false);
        setErrorMsg(dispatch, "");
        return true;
      }
      if (data?.error) {
        console.log("🚀 ~ handleLogOut fail:", response);
        setError(dispatch, true);
        setErrorMsg(dispatch, parseSokkerErrors(data?.error));
        return false;
      }
    })
    .catch((error) => {
      console.log("🚀 ~ handleLogOut error:", error);
      setError(dispatch, true);
      setErrorMsg(dispatch, error?.message || error);
      return false;
    })
    .finally(() => setLoading(dispatch, false));

  return result;
};
