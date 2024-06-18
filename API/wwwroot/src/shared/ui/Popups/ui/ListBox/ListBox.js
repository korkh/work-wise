import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useMemo } from "react";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./ListBox.module.scss";
import { mapDirectionClass } from "../../styles/popup_consts";
import popupCls from "../../styles/popup.module.scss";
import { ColumnStack } from "../../../Stack";
import { Button } from "../../../Button";
import { Glyph } from "../../../Glyph";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg?react";
export function ListBox(props) {
    const { className, items, value, defaultValue, onChange, readonly, direction = "bottom right", label, } = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        if (!readonly) {
            setIsOpen((prev) => !prev);
        }
    }, [readonly]);
    const handleSelect = useCallback((selectedValue) => {
        onChange(selectedValue);
        setIsOpen(false);
    }, [onChange]);
    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);
    const optionsClasses = [mapDirectionClass[direction], popupCls.menu];
    return (_jsxs(ColumnStack, { gap: "4", children: [label && _jsx("span", { children: `${label}` }), _jsxs("div", { className: classNames(cls.ListBox, [className, popupCls.popup], {}), children: [_jsx("button", { className: cls.trigger, onClick: toggleOpen, disabled: readonly, children: _jsx(Button, { variant: "filled", disabled: readonly, bufferRight: _jsx(Glyph, { SvgImage: ArrowIcon }), children: selectedItem?.content ?? defaultValue }) }), isOpen && (_jsx("ul", { className: classNames(cls.options, optionsClasses, {}), children: items?.map((item) => (_jsx("li", { className: classNames(cls.item, [], {
                                [popupCls.disabled]: item.disabled,
                                [popupCls.selected]: item.value === value,
                            }), onClick: () => !item.disabled && handleSelect(item.value), children: item.content }, item.value))) }))] })] }));
}
