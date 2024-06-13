import React, { ReactNode } from "react";

export interface NavbarItemType {
	path: string;
	text: string;
	content?: ReactNode;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}
