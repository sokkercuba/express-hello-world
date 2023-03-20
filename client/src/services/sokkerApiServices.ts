import axios from "axios";
import apiClient from "./apiClient";

const SOKKER_URL = import.meta.env.VITE_SOKKER_URL;

interface SokkerCredentials {
  login: string;
  password: string;
  remember: boolean;
}

export const getUserData = (cookies: string) =>
  apiClient(SOKKER_URL).get("/current", {
    headers: {
      Cookie: cookies,
    },
  });

export const handleLogin = (credentials: SokkerCredentials) => {
  const { login, password } = credentials;

  if (!login || !password)
    return "There are missing auth fields login or password";

  return axios
    .post(`${SOKKER_URL}/api/v1/login`, credentials)
    .then((res) => {
      console.log("handleLogin resp: ", res);
      return res;
    })
    .catch((err) => {
      console.log("handleLogin err: ", err);
      return err;
    });
};

export const handleLogOut = (cookies: string) => {
  if (!cookies) return "You need to provide cookies for this request";

  return (
    apiClient(SOKKER_URL).get(`/logout`),
    {
      headers: {
        Cookie: cookies,
      },
    }
  );
};
