import { LOCAL_STORAGE_AUTH, LOCAL_STORAGE_PREFERENCES } from "../../helpers/constants";
import useLocalMyData from "../../hooks/storage/useLocalUser";
import useLocalPreferences from "../../hooks/storage/useLocalPreferences";
import useLocalStorage from "../../hooks/storage/useLocalStorage";

const LocalStorage = () => {
	const { getLocalStorage } = useLocalStorage();
	const localStorageAuth = getLocalStorage(LOCAL_STORAGE_AUTH);
	const localStoragePrefs = getLocalStorage(LOCAL_STORAGE_PREFERENCES);
	// const { userPreferences } = useLocalPreferences();
	// const { myData } = useLocalMyData();

	return (
		<div className="border-2 border-black bg-gray-100 text-xs">
			<h2>LocalStorageAuth:</h2>
			<pre>{JSON.stringify(localStorageAuth, null, 1)}</pre>
			<h2>LocalStoragePref:</h2>
			<pre>{JSON.stringify(localStoragePrefs, null, 1)}</pre>
		</div>
	);
};

export default LocalStorage;
