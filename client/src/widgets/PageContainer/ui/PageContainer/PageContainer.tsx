import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { classNames, Mods } from "@/shared/lib/utils/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { StateSchema } from "@/app/providers/StoreProvider";

import cls from "./PageContainer.module.scss";

import { TestingProps } from "@/shared/types/testing";
import { getUIScrollByPath, uiActions } from "@/features/UI";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageContainerProps extends TestingProps {
	className?: string;
	children: ReactNode;
	height?: number | string;
	onScrollEnd?: () => void;
	center?: boolean;
}

export const PAGE_ID = "PAGE_ID";

export const PageContainer = memo(function PageContainer(
	props: PageContainerProps
) {
	const { className, children, height = "85vh", onScrollEnd, center } = props;
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const scrollPosition = useSelector((state: StateSchema) =>
		getUIScrollByPath(state, pathname)
	);

	useInfiniteScroll({
		triggerRef,
		wrapperRef: undefined,
		callback: onScrollEnd,
	});

	useInitEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(
			uiActions.setScrollPosition({
				position: e.currentTarget.scrollTop,
				path: pathname,
			})
		);
	}, 500);

	const mods: Mods = {
		[cls.center]: center,
	};

	return (
		<main
			style={{ height: height }}
			ref={wrapperRef}
			className={classNames(cls.Page, [className], mods)}
			onScroll={onScroll}
			id={PAGE_ID}
			data-testid={props["data-testid"] ?? "Page"}
		>
			{children}
			{onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
		</main>
	);
});
