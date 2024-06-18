import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ReturnToTopButton.module.scss";
import { memo } from "react";
import { useReturnToTop } from "@/shared/lib/hooks/useReturnToTop/useReturnToTop";
import { Glyph } from "@/shared/ui/Glyph";
import ArrowsUpIcon from "@/shared/assets/icons/arrows-up.svg?react";
export const ReturnToTopButton = memo(function ReturnToTopButton(props) {
    const { className } = props;
    const { isVisible, returnToTop } = useReturnToTop();
    const onCLick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (_jsx("div", { className: classNames(cls.ScrollToTopButton, [className], {
            [cls.visible]: isVisible,
        }), onClick: returnToTop, children: _jsx(Glyph, { SvgImage: ArrowsUpIcon, clickable: true, onClick: onCLick, width: 32, height: 32 }) }));
});
