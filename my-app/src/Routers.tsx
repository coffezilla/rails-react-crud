import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingPage from "./components/LoadingPage/LoadingPage.tsx";
import useAuth from "./hooks/services/useAuth/useAuth.ts";

// private
import Home from "./pages/Home.tsx";
import MyAccount from "./pages/MyAccount.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import Register from "./pages/Register.tsx";

// unprivate
import Login from "./pages/Login.tsx";

// public
import NotFound from "./pages/NotFound.tsx";
import UnPrivateRoute from "./UnPrivateRoute.tsx";
import PrivateRoute from "./PrivateRoute.tsx";
import useLocalPreferences from "./hooks/storage/useLocalPreferences.ts";
import useLocalAuth from "./hooks/storage/useLocalAuth.ts";

const App = () => {
	const { isLoadingGet: isLoadingGetCheckAuth, checkAuths, isAuthenticated } = useAuth();
	const { initLocalStorage: initLocalStoragePreferences } = useLocalPreferences();
	const { initLocalStorage: initLocalStorageAuth } = useLocalAuth();

	useEffect(() => {
		initLocalStoragePreferences();
		initLocalStorageAuth();
		checkAuths();
	}, []);

	if (isLoadingGetCheckAuth) {
		return <LoadingPage />;
	}

	return (
		<Router>
			<Routes>
				{/* protected */}
				<Route
					path=""
					element={
						<PrivateRoute isAuthenticated={isAuthenticated}>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<PrivateRoute isAuthenticated={isAuthenticated}>
							<Home />
						</PrivateRoute>
					}
				/>
				{/* <Route
					path="/posts"
					element={
						<PrivateRoute isAuthenticated={isAuthenticated}>
							<Operations />
						</PrivateRoute>
					}
				/>
				<Route
					path="/posts/:id"
					element={
						<PrivateRoute isAuthenticated={isAuthenticated}>
							<OperationsEdit />
						</PrivateRoute>
					}
				/> */}

				<Route
					path="/minha-conta"
					element={
						<PrivateRoute isAuthenticated={isAuthenticated}>
							<MyAccount />
						</PrivateRoute>
					}
				/>

				{/* unprotected */}
				<Route
					path="/login"
					element={
						<UnPrivateRoute isAuthenticated={isAuthenticated}>
							<Login />
						</UnPrivateRoute>
					}
				/>
				<Route
					path="/esqueci-minha-senha"
					element={
						<UnPrivateRoute isAuthenticated={isAuthenticated}>
							<ForgotPassword />
						</UnPrivateRoute>
					}
				/>
				<Route
					path="/registrar"
					element={
						<UnPrivateRoute isAuthenticated={isAuthenticated}>
							<Register />
						</UnPrivateRoute>
					}
				/>

				{/* public */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
