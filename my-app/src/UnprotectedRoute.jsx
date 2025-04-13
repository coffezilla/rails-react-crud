import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function UnprotectedRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={(props) => {
				return <Component {...props} {...rest} />;
			}}
		/>
	);
}

export default UnprotectedRoute;
