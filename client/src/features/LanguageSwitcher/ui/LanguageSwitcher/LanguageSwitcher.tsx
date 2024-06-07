import { classNames } from "@/shared/lib/utils/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Button } from "@/shared/ui/Button";

interface LanguageSwitcherProps {
	className?: string;
	abbreviated?: boolean;
}

export const LanguageSwitcher = memo(function LanguageSwitcher(
	props: LanguageSwitcherProps
) {
	const { className, abbreviated } = props;
	const { t, i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "lt" ? "en" : "lt");
	};

	return (
		<Button
			variant="clear"
			onClick={toggle}
			className={classNames("", [className], {})}
		>
			{t(abbreviated ? "Abbreviated language" : "Language")}
		</Button>
	);
});
