import { Buffer } from "buffer/";
import apiClient from "./apiClient";

const API_USER = import.meta.env.API_USER;
const API_PASSW = import.meta.env.API_PASSW;
const API_URL = import.meta.env.VITE_API_URL;

const authorization =
  "Basic " + Buffer.from(API_USER + ":" + API_PASSW).toString("base64");

interface ApiParams {
  col: string;
  key: string;
}

export const setCollection = (params: ApiParams, body: any) => {
  const { col, key } = params;

  return apiClient.post(`${API_URL}/${col}/${key}`, body, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const deleteCollection = (params: ApiParams) => {
  const { col, key } = params || null;

  return apiClient.delete(`${API_URL}/${col}/${key}`, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const getCollection = (params: ApiParams) => {
  const { col, key } = params || null;

  return apiClient.get(`${API_URL}/${col}/${key}`, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const getCollections = (col: string) => {
  return apiClient.get(`${API_URL}/${col}`, {
    headers: {
      Authorization: authorization,
    },
  });
};
