import { useReducer } from "react";
import InputSimple from "../../ui/InputSimple/InputSimple";
import useAuth from "../../../hooks/services/useAuth/useAuth";
import useToast from "../../../hooks/components/useToast/useToast";

type TInputs = "email" | "password";

interface IInitialState {
	email: string;
}

const initialState: IInitialState = {
	email: "",
};

interface IAction {
	type: TInputs;
	payload: string;
}

const reducer = (state: IInitialState, action: IAction) => {
	switch (action.type) {
		case "email":
			return { ...state, email: action.payload };
		default:
			throw new Error();
	}
};

const FormForgotPassword = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { showToast } = useToast();
	const { recoveryAuth, isLoadingPost: isLoadingPostAuth } = useAuth();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		dispatch({ type: name as TInputs, payload: value });
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		recoveryAuth({ email: state.email }).then((response) => {
			if (response.status === 200) {
				showToast({ message: response.data.message, type: "success" });
				window.location.href = "/login";
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
				<h2>Form Forgot Password</h2>
				<form onSubmit={handleSubmit}>
					<InputSimple handleChange={handleChange} value={state.email} name="email" />

					<button className="bg-gray-300">Login</button>
					<pre>{JSON.stringify(state, null, 1)}</pre>
				</form>
			</div>
		</>
	);
};

export default FormForgotPassword;
