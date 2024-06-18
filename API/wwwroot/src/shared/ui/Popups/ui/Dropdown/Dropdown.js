import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./Dropdown.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import { mapDirectionClass } from "../../styles/popup_consts";
import popupCls from "../../styles/popup.module.scss";
import { Button } from '../../../Button';
import { AppLink } from '../../../AppLink';
export const Dropdown = memo(function Dropdown(props) {
    const { className, trigger, items, direction = "bottom right", variant, } = props;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const menuClasses = [mapDirectionClass[direction], popupCls.menu];
    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current &&
            !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (_jsxs("div", { className: classNames(cls.dropdown, [className, popupCls.popup], {}), ref: dropdownRef, children: [_jsx(Button, { variant: variant, onClick: toggleDropdown, className: cls.trigger, children: trigger }), isOpen && (_jsx("div", { className: classNames(cls.menu, menuClasses, {}), children: items.map((item, index) => {
                    const content = ({ active }) => (_jsx("button", { type: "button", disabled: item.disabled, onClick: item.onClick, className: classNames(cls.item, [], {
                            [popupCls.active]: active,
                        }), children: item.content }));
                    if (item.href) {
                        return (_createElement(AppLink, { to: item.href, ...(item.disabled ? { disabled: true } : {}), key: `dropdown-key-${index}` }, content({ active: true })));
                    }
                    return (_jsx("div", { ...(item.disabled ? { disabled: true } : {}), children: content({ active: true }) }, `dropdown-key-${index}`));
                }) }))] }));
});
