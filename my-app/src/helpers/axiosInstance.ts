import axios from "axios";
import { API_PATH, LOCAL_STORAGE_AUTH } from "../helpers/constants";

export const axiosInstance = axios.create({
	baseURL: API_PATH,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

//
axiosInstance.interceptors.request.use(
	(config) => {
		const token = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH)).auth.token;
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default axiosInstance;
