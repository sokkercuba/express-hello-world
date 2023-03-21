import axios from "axios";

const TYPE = "application/json";
const CONTENT_TYPE = "Content-Type";
const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: TYPE,
    [CONTENT_TYPE]: TYPE,
    "X-Forwarded-Host": "https://sokker.org",
  },
});

export default apiClient;
