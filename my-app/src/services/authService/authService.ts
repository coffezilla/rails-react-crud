import { AxiosResponse } from "axios";
import axiosInstance from "../../helpers/axiosInstance";
import {
	IPostLoginResponse,
	IPostRefreshTokenResponse,
	IPostStoreUserRequest,
	IPostStoreUserResponse,
} from "./authService.types";

// login
export const postLoginService = async (data: {
	email: string;
	password: string;
}): Promise<AxiosResponse<IPostLoginResponse>> => {
	const response = await axiosInstance.post<IPostLoginResponse>(`/api/login`, data);
	return response;
};

// register
export const storeUserService = async (data: IPostStoreUserRequest): Promise<AxiosResponse<IPostStoreUserResponse>> => {
	const response = await axiosInstance.post<IPostStoreUserResponse>(`/api/register`, data);
	return response;
};

// recovery
export const postRecoveryService = async (data: { email: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.post<any>(`/auth/recovery-password/`, data);
	return response;
};

export const getCheckTokenService = async (data: {
	refresh_token: string;
}): Promise<AxiosResponse<IPostRefreshTokenResponse>> => {
	const response = await axiosInstance.post<IPostRefreshTokenResponse>(`/api/request-access-token`, data);
	return response;
};
