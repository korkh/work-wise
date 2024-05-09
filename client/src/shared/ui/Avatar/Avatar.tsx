import { CSSProperties, useMemo } from "react";
import { classNames, Mods } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Avatar.module.scss";

import UserIcon from "../../assets/icons/user-blank.svg?react";
import { Skeleton } from "../Skeleton";
import { Glyph } from "../Glyph";
import { AppImage } from "../AppImage";

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

export const Avatar = ({ className, src, size = 100, alt }: AvatarProps) => {
	const mods: Mods = {};

	const styles = useMemo<CSSProperties>(
		() => ({
			width: size,
			height: size,
		}),
		[size]
	);

	const fallback = <Skeleton width={size} height={size} border="50%" />;
	const fallbackError = (
		<Glyph width={size} height={size} SvgImage={UserIcon} />
	);

	return (
		<AppImage
			fallback={fallback}
			fallbackError={fallbackError}
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.avatar, [className], mods)}
		/>
	);
};
