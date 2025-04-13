import { AxiosResponse } from "axios";
import axiosInstance from "../../helpers/axiosInstance";

// login
export const postLoginService = async (data: { email: string; password: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.post<any>(`/api/login`, data);
	console.log("response", response);
	return response;
};

// register
export const storeUserService = async (data: { email: string; password: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.post<any>(`/auth/register`, data);
	return response;
};

// recovery
export const postRecoveryService = async (data: { email: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.post<any>(`/auth/recovery-password/`, data);
	return response;
};

export const getCheckTokenService = async (data: { email: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.get<any>(`/auth/check-token/${data.email}`);
	return response;
};
