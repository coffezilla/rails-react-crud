import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useLocalStorage from "./useLocalStorage";
import { LOCAL_STORAGE_PREFERENCES, LOCAL_STORAGE_USER } from "../../helpers/constants";
import { rdxChangePreferenceData, rdxChangeUserData } from "../../redux/ducks/User";
import { IReduxUser } from "../../redux/ducks/User.types";

const useLocalUser = () => {
	const { getLocalStorage, setLocalStorage } = useLocalStorage();
	const { data: localStorageData, status: hasLocalStorage } = getLocalStorage(LOCAL_STORAGE_USER);

	const dispatch = useDispatch();

	const rdxUser = useSelector((state: IReduxUser) => state.localdata.user);
	const userUser = rdxUser;
	const [isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false);

	// INIT
	const initLocalStorage = () => {
		if (hasLocalStorage) {
			updateReduxWithLocalStorage(localStorageData);
		} else {
			setLocalStorageToDefault();
			setIsLocalStorageLoaded(true);
		}
	};

	// SET DEFAULT
	const setLocalStorageToDefault = () => {
		setLocalStorage(LOCAL_STORAGE_USER, {
			user: {},
		});
	};

	// UPDATE DEFAULT REDUX
	const updateReduxWithLocalStorage = (localStorageData: IReduxUser["user"]) => {
		setIsLocalStorageLoaded(true);
	};

	// ACTIONS
	const updateUserData = (option: any) => {
		dispatch(rdxChangeUserData(option));

		// update localstorage
		setLocalStorage(LOCAL_STORAGE_USER, {
			user: option,
		});
	};

	return {
		initLocalStorage,
		isLocalStorageLoaded,
		updateUserData,
		userUser,
	};
};

export default useLocalUser;
