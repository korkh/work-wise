import React from "react";

export interface NavbarItemType {
	path: string;
	text: string;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	authOnly?: boolean;
}
