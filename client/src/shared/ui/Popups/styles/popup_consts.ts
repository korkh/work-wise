import { DropdownDirection } from "@/shared/types/ui_components";
import cls from "./popup.module.scss";

export const mapDirectionClass: Record<DropdownDirection, string> = {
	"bottom left": cls.BottomLeftOptions,
	"bottom right": cls.BottomRightOptions,
	"top right": cls.TopRightOptions,
	"top left": cls.TopLeftOptions,
};
