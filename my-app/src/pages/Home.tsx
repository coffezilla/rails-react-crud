import LocalStorage from "../components/debuggin/LocalStorage";
import Redux from "../components/debuggin/Redux";
import useAuth from "../hooks/services/useAuth/useAuth";
import useLocalPreferences from "../hooks/storage/useLocalPreferences";
import LayoutMain from "../template/LayoutMain/LayoutMain";

const Home = () => {
	const { logoutAuth } = useAuth();
	const { updateTheme } = useLocalPreferences();

	const handleUpdateTheme = (theme: "light" | "dark") => {
		updateTheme(theme);
	};

	const handleLogout = () => {
		logoutAuth().then((response) => {
			window.location.href = "/login";
			console.log("logout: ", response);
		});
	};

	return (
		<LayoutMain>
			<h1>Home</h1>
			<div className="flex flex-col items-start space-y-2">
				<button type="button" className="bg-gray-300" onClick={() => handleUpdateTheme("light")}>
					Light Mode
				</button>
				<button type="button" className="bg-gray-300" onClick={() => handleUpdateTheme("dark")}>
					Dark Mode
				</button>
				<button type="button" className="bg-gray-300" onClick={handleLogout}>
					Logout
				</button>
			</div>
			<Redux />
			<LocalStorage />
		</LayoutMain>
	);
};

export default Home;
