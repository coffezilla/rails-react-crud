import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useLocalStorage from "./useLocalStorage";
import { LOCAL_STORAGE_PREFERENCES } from "../../helpers/constants";
import { rdxChangePreferenceData } from "../../redux/ducks/User";
import { IReduxUser } from "../../redux/ducks/User.types";

const useLocalPreferences = () => {
	const { getLocalStorage, setLocalStorage } = useLocalStorage();
	const { data: localStorageData, status: hasLocalStorage } = getLocalStorage(LOCAL_STORAGE_PREFERENCES);

	const dispatch = useDispatch();

	const rdxPreferences = useSelector((state: IReduxUser) => state.localdata.preferences);
	const userPreferences = rdxPreferences;
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
		setLocalStorage(LOCAL_STORAGE_PREFERENCES, {
			preferences: {
				theme: "light",
			},
		});
	};

	// UPDATE DEFAULT REDUX
	const updateReduxWithLocalStorage = (localStorageData: IReduxUser["user"]) => {
		// updating redux when setting the localstorage
		dispatch(rdxChangePreferenceData(localStorageData.preferences));
		setIsLocalStorageLoaded(true);
	};

	// ACTIONS
	const updateTheme = (option: any) => {
		dispatch(rdxChangePreferenceData({ theme: option }));

		// update localstorage when updating redux
		setLocalStorage(LOCAL_STORAGE_PREFERENCES, {
			preferences: {
				...localStorageData.preferences,
				theme: option,
			},
		});
	};

	return {
		initLocalStorage,
		isLocalStorageLoaded,
		updateTheme,
		userPreferences,
	};
};

export default useLocalPreferences;
