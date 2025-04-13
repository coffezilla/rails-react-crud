import { Link } from "react-router-dom";
import LocalStorage from "../components/debuggin/LocalStorage";
import Redux from "../components/debuggin/Redux";
import FormLogin from "../components/forms/FormLogin/FormLogin";

const Login = () => {
	return (
		<div className="">
			<FormLogin />
			<ul>
				<li>
					<Link to="/registrar">Registrar</Link>
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

export default Login;
