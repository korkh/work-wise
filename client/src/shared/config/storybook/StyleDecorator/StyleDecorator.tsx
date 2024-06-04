import React, { FC } from "react";

interface Props {
	children?: React.ReactNode;
}

const StyleDecorator: FC<Props> = ({ children }) => (
	<div style={{ padding: "20px" }}>{children}</div>
);

export default StyleDecorator;
