import { Navigate } from "react-router-dom";

interface IProps {
	children: React.ReactNode;
	isAuthenticated: boolean;
}

const UnPrivateRoute = ({ children, isAuthenticated }: IProps) => {
	return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default UnPrivateRoute;
