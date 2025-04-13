import { Link } from "react-router-dom";
import LocalStorage from "../components/debuggin/LocalStorage";
import Redux from "../components/debuggin/Redux";
import FormForgotPassword from "../components/forms/FormForgotPassword/FormForgotPassword";

const ForgotPassword = () => {
	return (
		<div className="">
			<FormForgotPassword />
			<ul>
				<li>
					<Link to="/registrar">Registrar</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
			</ul>
			<Redux />
			<LocalStorage />
		</div>
	);
};

export default ForgotPassword;
