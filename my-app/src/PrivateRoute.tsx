import { Navigate } from "react-router-dom";

interface IProps {
	children: React.ReactNode;
	isAuthenticated: boolean;
}

const PrivateRoute = ({ children, isAuthenticated }: IProps) => {
	return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
