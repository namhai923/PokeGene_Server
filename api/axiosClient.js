import axios from "axios";
import dotenv from "dotenv";
import queryString from "query-string";

dotenv.config();

let axiosClient = axios.create({
  baseURL: process.env.API_URL,
  header: { "content-type": "application/json" },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (error) => {
    throw error;
  }
);

export default axiosClient;
