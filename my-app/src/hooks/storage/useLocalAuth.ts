import { useEffect, useState } from "react";

import useLocalStorage from "./useLocalStorage";
import { LOCAL_STORAGE_AUTH } from "../../helpers/constants";

interface IRequestLogin {
	data: {
		auth: {
			email: string;
		};
	};
}

const useLocalAuth = () => {
	const { getLocalStorage, setLocalStorage } = useLocalStorage();
	const { data: localStorageData, status: hasLocalStorage } = getLocalStorage(LOCAL_STORAGE_AUTH);
	const [userAuth, setUserAuth] = useState<IRequestLogin>();

	const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);

	// INIT
	const initLocalStorage = () => {
		if (hasLocalStorage) {
			setUserAuth(getLocalStorage(LOCAL_STORAGE_AUTH));
		} else {
			setLocalStorageToDefault();
			setIsLocalStorageLoaded(true);
		}
	};

	// SET DEFAULT
	const setLocalStorageToDefault = () => {
		setLocalStorage(LOCAL_STORAGE_AUTH, {
			auth: {},
		});
		setUserAuth(getLocalStorage(LOCAL_STORAGE_AUTH));
	};

	// UPDATE DEFAULT REDUX

	// ACTIONS
	const updateAuthData = (option: any) => {
		setLocalStorage(LOCAL_STORAGE_AUTH, {
			auth: {
				...localStorageData.auth,
				token: option.token,
				email: option.email,
				timestamp: option.timestamp,
			},
		});
		setUserAuth(getLocalStorage(LOCAL_STORAGE_AUTH));
	};

	return { initLocalStorage, isLocalStorageLoaded, updateAuthData, userAuth };
};

export default useLocalAuth;
