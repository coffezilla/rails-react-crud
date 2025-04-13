import { useReducer } from "react";
import InputSimple from "../../ui/InputSimple/InputSimple";
import useAuth from "../../../hooks/services/useAuth/useAuth";
import useToast from "../../../hooks/components/useToast/useToast";

type TInputs = "name" | "email" | "password";

interface IInitialState {
	name: string;
	email: string;
	password: string;
}

const initialState: IInitialState = {
	name: "",
	email: "",
	password: "",
};

interface IAction {
	type: TInputs;
	payload: string;
}

const reducer = (state: IInitialState, action: IAction) => {
	switch (action.type) {
		case "name":
			return { ...state, name: action.payload };
		case "email":
			return { ...state, email: action.payload };
		case "password":
			return { ...state, password: action.payload };
		default:
			throw new Error();
	}
};

const FormRegister = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { showToast } = useToast();
	const { registerAuth, isLoadingPost: isLoadingPostAuth } = useAuth();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		dispatch({ type: name as TInputs, payload: value });
	};

	const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		registerAuth({ name: state.name, email: state.email, password: state.password }).then((response) => {
			if (response.status === 201) {
				showToast({ message: response.data.message, type: "success" });
				window.location.href = "/login";
			}

			if (response.status !== 201) {
				showToast({ message: response.data.message, type: "error" });
			}
		});
	};

	return (
		<>
			{isLoadingPostAuth && <p>Loading...</p>}
			<div>
				<h2>Form Register</h2>
				<form onSubmit={handleSubmit}>
					<InputSimple handleChange={handleChange} value={state.name} name="name" />
					<InputSimple handleChange={handleChange} value={state.email} name="email" />
					<InputSimple handleChange={handleChange} value={state.password} name="password" />

					<button className="bg-gray-300">Register</button>
					<pre>{JSON.stringify(state, null, 1)}</pre>
				</form>
			</div>
		</>
	);
};

export default FormRegister;
