import { useCallback, useState } from "react";
import { AxiosError } from "axios";

// Constants
import { LOCAL_STORAGE_AUTH } from "../../../helpers/constants";

// Custom Hooks
import useLocalStorage from "../../storage/useLocalStorage";
import useLocalAuth from "../../storage/useLocalAuth";
import {
	getCheckTokenService,
	postLoginService,
	postRecoveryService,
	storeUserService,
} from "../../../services/authService/authService";
import useLocalUser from "../../storage/useLocalUser";

const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [isLoadingGet, setIsLoadingGet] = useState<boolean>(true);
	const [isLoadingPost, setIsLoadingPost] = useState<boolean>(false);

	const { getLocalStorage } = useLocalStorage();
	const { updateUserData } = useLocalUser();
	const { updateAuthData } = useLocalAuth();

	const localStorageAuth = getLocalStorage(LOCAL_STORAGE_AUTH);

	// check auth
	const checkAuths = useCallback(() => {
		const hasLocalStorageAccessToken = localStorageAuth?.data?.auth?.access_token;
		if (hasLocalStorageAccessToken) {
			getCheckTokenService({ refresh_token: localStorageAuth.data.auth.refresh_token })
				.then((response) => {
					if (response) {
						if (response.status === 200) {
							// update redux locally
							updateUserData({
								id: response.data.user_id,
								name: response.data.email,
								email: response.data.email,
							});
							setIsAuthenticated(true);

							// update access token localhost
							updateAuthData({
								...localStorageAuth.data.auth,
								access_token: response.data.access_token,
							});
						}
					}
				})
				.catch((error: AxiosError<{ error: string }>) => {
					if (error.response) {
						if (error.response.status === 401) {
							console.log("Mensagem", error.response.data.error);
						}
						logoutAuth();
					}
				})
				.finally(() => {
					setIsLoadingGet(false);
				});
		} else {
			setIsLoadingGet(false);
		}
	}, []);

	// login
	const loginAuth = async (data: { email: string; password: string }) => {
		let responseAuth = {
			data: {},
			status: 0,
		};

		setIsLoadingPost(true);
		await postLoginService(data)
			.then((response) => {
				responseAuth = {
					data: response.data,
					status: response.status,
				};

				if (response.status === 200) {
					// update local storage
					updateAuthData({
						access_token: response.data.access_token,
						refresh_token: response.data.refresh_token,
						email: response.data.user.email,
						timestamp: response.data.user.updated_at,
					});
				}
			})
			.catch((error: AxiosError<{ error: string }>) => {
				logoutAuth();
				if (error.response) {
					responseAuth = {
						...responseAuth,
						status: error.response.status,
						data: {
							message: error.response.data.error,
						},
					};
				}
			})
			.finally(() => {
				setIsLoadingPost(false);
			});
		return responseAuth;
	};

	// register
	const registerAuth = async (data: { email: string; password: string; name: string }) => {
		let responseAuth = {
			data: {},
			status: 0,
		};

		setIsLoadingPost(true);
		await storeUserService(data)
			.then((response) => {
				responseAuth = {
					data: response.data,
					status: response.status,
				};
			})
			.catch((error: AxiosError<{ error: string }>) => {
				if (error.response) {
					responseAuth = {
						...responseAuth,
						status: error.response.status,
						data: {
							message: "E-mail already registered or another problem",
						},
					};
				}
			})
			.finally(() => {
				setIsLoadingPost(false);
			});
		return responseAuth;
	};

	// recovery
	const recoveryAuth = async (data: { email: string }) => {
		let responseAuth = {
			data: {},
			status: 0,
		};

		setIsLoadingPost(true);
		await postRecoveryService(data)
			.then((response) => {
				responseAuth = {
					data: response.data.data,
					status: response.status,
				};
			})
			.catch((error: AxiosError) => {
				if (error.response) {
					responseAuth = {
						...responseAuth,
						status: error.status,
						data: {
							message: error.message,
						},
					};
				}
			})
			.finally(() => {
				setIsLoadingPost(false);
			});
		return responseAuth;
	};

	// logout
	const logoutAuth = async () => {
		let responseAuth = {
			message: "",
		};

		// update local storage
		updateAuthData({});
		updateUserData({});

		return responseAuth;
	};

	return {
		isAuthenticated,
		isLoadingGet,
		isLoadingPost,
		checkAuths,
		loginAuth,
		logoutAuth,
		recoveryAuth,
		registerAuth,
	};
};

export default useAuth;
