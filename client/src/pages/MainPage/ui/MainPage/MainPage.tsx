import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./MainPage.module.scss";
import { memo } from "react";

interface MainPageProps {
	className?: string;
}

const MainPage = (props: MainPageProps) => {
	const { className } = props;

	return <div className={classNames(cls.mainPage, [className], {})}></div>;
};

export default memo(MainPage);
