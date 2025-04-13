import { useReducer } from "react";
import InputSimple from "../../ui/InputSimple/InputSimple";
import useAuth from "../../../hooks/services/useAuth/useAuth";
import useToast from "../../../hooks/components/useToast/useToast";
import { useNavigate } from "react-router-dom";

type TInputs = "email" | "password";

interface IInitialState {
	email: string;
	password: string;
}

const initialState: IInitialState = {
	email: "",
	password: "",
};

interface IAction {
	type: TInputs;
	payload: string;
}

const reducer = (state: IInitialState, action: IAction) => {
	switch (action.type) {
		case "email":
			return { ...state, email: action.payload };
		case "password":
			return { ...state, password: action.payload };
		default:
			throw new Error();
	}
};

const FormLogin = () => {
	const navigate = useNavigate();
	const [state, dispatch] = useReducer(reducer, initialState);
	const { showToast } = useToast();
	const { loginAuth, isLoadingPost: isLoadingPostAuth } = useAuth();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		dispatch({ type: name as TInputs, payload: value });
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		loginAuth({ email: state.email, password: state.password }).then((response) => {
			if (response.status === 200) {
				showToast({ message: response.data.message, type: "success" });
				window.location.href = "/dashboard";
			}

			if (response.status !== 200) {
				showToast({ message: response.data.message, type: "error" });
			}
		});
	};

	return (
		<>
			{isLoadingPostAuth && <p>Loading...</p>}
			<div>
				<h2>Form Login</h2>
				<form onSubmit={handleSubmit}>
					<InputSimple handleChange={handleChange} value={state.email} name="email" />
					<InputSimple handleChange={handleChange} value={state.password} name="password" />

					<button className="bg-gray-300" data-cy="button_submit">
						Login
					</button>
					<pre>{JSON.stringify(state, null, 1)}</pre>
				</form>
			</div>
		</>
	);
};

export default FormLogin;
