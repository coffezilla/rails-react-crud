import { Link } from "react-router-dom";
import LocalStorage from "../components/debuggin/LocalStorage";
import Redux from "../components/debuggin/Redux";
import FormRegister from "../components/forms/FormRegister/FormRegister";

const Register = () => {
	return (
		<div className="">
			<FormRegister />
			<ul>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/esqueci-minha-senha">Esqueci minha senha</Link>
				</li>
			</ul>
			<Redux />
			<LocalStorage />
		</div>
	);
};

export default Register;
