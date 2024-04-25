import { DropdownDirection } from "@/shared/types/ui_components";
import cls from "./popup.module.scss";

export const mapDirectionClass: Record<DropdownDirection, string> = {
	"bottom left": cls.bottomLeftOptions,
	"bottom right": cls.bottomRightOptions,
	"top right": cls.topRightOptions,
	"top left": cls.topLeftOptions,
};
