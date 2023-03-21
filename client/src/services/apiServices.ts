import { Buffer } from "buffer/";
import apiClient from "./apiClient";

const API_USER = import.meta.env.API_USER;
const API_PASSW = import.meta.env.API_PASSW;

const authorization =
  "Basic " + Buffer.from(API_USER + ":" + API_PASSW).toString("base64");

interface ApiParams {
  col: string;
  key: string;
}

export const setCollection = (params: ApiParams, body: any) => {
  const { col, key } = params;

  return apiClient.post(`/${col}/${key}`, body, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const deleteCollection = (params: ApiParams) => {
  const { col, key } = params || null;

  return apiClient.delete(`/${col}/${key}`, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const getCollection = (params: ApiParams) => {
  const { col, key } = params || null;

  return apiClient.get(`/${col}/${key}`, {
    headers: {
      Authorization: authorization,
    },
  });
};

export const getCollections = (col: string) => {
  return apiClient.get(`/${col}`, {
    headers: {
      Authorization: authorization,
    },
  });
};
