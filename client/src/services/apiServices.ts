import apiClient from "./apiClient";
import { Buffer } from "buffer/";

const API_URL = import.meta.env.VITE_API_URL;
const API_USER = import.meta.env.API_USER;
const API_PASSW = import.meta.env.API_PASSW;

window.Buffer = Buffer;
const authorization =
  "Basic " + Buffer.from(API_USER + ":" + API_PASSW).toString("base64");

interface ApiParams {
  col: string;
  key: string;
}

export const setCollection = (params: ApiParams, body: any) => {
  const { col, key } = params;

  if (!col || !key) {
    return "Required parameters col and/or key missing!";
  }

  return apiClient(API_URL).post(`/${col}/${key}`, body, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const deleteCollection = (params: ApiParams) => {
  const { col, key } = params || null;

  if (!col || !key) {
    return "Required parameters col and/or key missing!";
  }

  return apiClient(API_URL).delete(`/${col}/${key}`, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const getCollection = (params: ApiParams) => {
  const { col, key } = params || null;

  if (!col || !key) {
    return "Required parameters col and/or key missing!";
  }

  return apiClient(API_URL).get(`/${col}/${key}`, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const getCollections = (col: string) => {
  if (!col) {
    return "Required parameter col missing!";
  }

  return apiClient(API_URL).get(`/${col}`, {
    headers: {
      Authorization: authorization,
    },
  });
};
