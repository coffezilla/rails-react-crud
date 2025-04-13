import { AxiosResponse } from "axios";
import axiosInstance from "../../helpers/axiosInstance";

// ========================================
// FAKE API LOGIC
// ========================================
// let response: IApiResponse = {
// 	status: 200,
// 	data: {},
// };

// if (data.email !== "foo@gmail.com" || data.password !== "123123") {
// 	response = { data: { message: "Wrong login" }, status: 401 };
// 	return response;
// }
// ========================================

// response = {
// 	status: 200,
// 	data: {
// 		message: "logged",
// 		result: {
// 			token: "my-new-token",
// 			email: "foo@gail.com",
// 			timestamp: new Date(),
// 		},
// 	},
// };

export const getCheckTokenService = async (data: { email: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.get(`/auth/check-token/${data.email}`);
	return response;
};

// login
export const postLoginService = async (data: { email: string; password: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.post(`/auth/login`, data);
	return response;
};

// register
export const storeUserService = async (data: { email: string; password: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.post(`/auth/register`, data);
	return response;
};

// recovery
export const postRecoveryService = async (data: { email: string }): Promise<AxiosResponse<any>> => {
	const response = await axiosInstance.post(`/auth/recovery-password/`, data);
	return response;
};
