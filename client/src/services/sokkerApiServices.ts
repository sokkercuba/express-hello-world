import apiClient from "./apiClient";

interface SokkerCredentials {
  login: string;
  password: string;
  remember: boolean;
}

export const getUserData = (ip: string) =>
  apiClient.get("/current", {
    headers: {
      "X-Forwarded-For": `${ip}, https://sokker.org`,
    },
  });

export const handleLogin = (credentials: SokkerCredentials, ip: string) =>
  apiClient.post("/login", credentials, {
    headers: {
      "X-Forwarded-For": `${ip}, https://sokker.org`,
    },
  });

export const handleLogOut = (login: string, ip: string) =>
  apiClient.get("/logout", {
    params: { login },
    headers: {
      "X-Forwarded-For": `${ip}, https://sokker.org`,
    },
  });
