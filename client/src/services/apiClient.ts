import axios from "axios";

const TYPE = "application/json";
const CONTENT_TYPE = "Content-Type";

const apiClient = axios.create({
  headers: {
    Accept: TYPE,
    [CONTENT_TYPE]: TYPE,
  },
});

export default apiClient;
