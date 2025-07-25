import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL ,
  withCredentials: true, // Include cookies in requests
}
);

export default axiosInstance;

