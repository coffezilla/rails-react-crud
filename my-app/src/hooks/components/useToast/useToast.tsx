import FeatherIcon from "feather-icons-react";
import toast from "react-hot-toast";

interface IProps {
	type?: "success" | "error" | "loading";
	message: string;
	duration?: number;
	id?: string;
}

const useToast = () => {
	const showToast = ({ type = "success", message, duration = 5000, id }: IProps) => {
		toast.custom(
			(t) => (
				<div
					data-cy={`${type === "error" ? "toast-default_error" : type === "success" ? "toast-default_success" : "toast-default_loading"}`}
					className={`bg-white px-5 py-3 shadow-md rounded-full flex items-center space-x-3  ${t.visible ? "animate-enter" : "animate-leave"}`}
				>
					<div>{t.icon}</div>
					<span>{message}</span>
				</div>
			),
			{
				id: id,
				icon:
					type === "error" ? (
						<FeatherIcon icon="alert-circle" size={20} className="text-red-500" />
					) : type === "loading" ? (
						<FeatherIcon icon="loader" size={20} className="text-gray-500 animate-spin" />
					) : (
						<FeatherIcon icon="check-circle" size={20} className="text-green-500" />
					),
				duration: duration,
			},
		);
	};

	return { showToast };
};

export default useToast;
