import { TLocalStorage } from "../../helpers/constants.types";

interface ILocalStorage {
	auth: {
		email: string;
		token?: string;
	};
}

const useLocalStorage = () => {
	// setting data to localstorage
	const __setLocalStorage = (localStorageName: TLocalStorage, localStorageValue: any, isJson = true) => {
		if (isJson) {
			localStorage.setItem(localStorageName, JSON.stringify(localStorageValue));
		} else {
			localStorage.setItem(localStorageName, localStorageValue);
		}
	};

	// getting data from localstorage
	const __getLocalStorage = (localStorageName: TLocalStorage): ILocalStorage => {
		let localStorageValue: any;
		if (localStorage.getItem(localStorageName) !== null) {
			localStorageValue = localStorage.getItem(localStorageName);
		} else {
			localStorageValue = false;
		}

		return JSON.parse(localStorageValue);
	};

	// clear data
	const __clearLocalStorage = (store: TLocalStorage) => {
		localStorage.removeItem(store);
	};

	const clearLocalStorage = (localStorageName: TLocalStorage) => {
		__clearLocalStorage(localStorageName);
	};

	const setLocalStorage = (localStorageName: TLocalStorage, newLocalStorage: any) => {
		__setLocalStorage(localStorageName, newLocalStorage);
	};

	const getLocalStorage = (localStorageName: TLocalStorage) => {
		const localStorage: ILocalStorage = __getLocalStorage(localStorageName);
		return { status: !!localStorage, data: localStorage };
	};

	return { clearLocalStorage, setLocalStorage, getLocalStorage };
};

export default useLocalStorage;
