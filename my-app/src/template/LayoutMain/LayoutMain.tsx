import React from "react";

interface IProps {
	children: React.ReactNode;
}

const LayoutMain = ({ children }: IProps) => {
	return <div>{children}</div>;
};

export default LayoutMain;
