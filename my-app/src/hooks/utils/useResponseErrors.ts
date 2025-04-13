import { AxiosError } from "axios";
import useAuth from "../services/useAuth/useAuth";

const useResponseErrors = () => {
	const { logoutAuth } = useAuth();
	const getResponseErrorMessage = (error: AxiosError) => {
		if (error.response) {
			// The request was made and the server responded with a status code
		} else if (error.request) {
			// The request was made but no response was received
			if (error.request?.status === 0) {
			} else {
				logoutAuth();
			}
		} else {
			// Something happened in setting up the request
			console.log("Error:", error.message);
		}
	};

	return {
		getResponseErrorMessage,
	};
};

export default useResponseErrors;
