import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Glyph.module.scss";
import { memo } from "react";

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, "onClick">;

interface GlyphBaseProps extends SvgProps {
	className?: string;
	SvgImage: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableGlyphProps extends GlyphBaseProps {
	clickable?: false;
}

interface ClickableBaseProps extends GlyphBaseProps {
	clickable: true;
	onClick: () => void;
}

type GlyphProps = NonClickableGlyphProps | ClickableBaseProps;

export const Glyph = memo(function Glyph(props: GlyphProps) {
	const {
		className,
		SvgImage,
		width = 32,
		height = 32,
		clickable,
		...otherProps
	} = props;

	const image = (
		<SvgImage
			className={classNames(cls.glyph, [className], {})}
			width={width}
			height={height}
			{...otherProps}
			onClick={undefined}
		/>
	);

	if (clickable) {
		return (
			<button
				type="button"
				className={cls.button}
				onClick={props.onClick}
				style={{ height, width }}
			>
				{image}
			</button>
		);
	}

	return image;
});
