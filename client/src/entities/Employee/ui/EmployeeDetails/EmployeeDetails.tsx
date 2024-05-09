import { classNames } from "@/shared/lib/utils/classNames/classNames";
import cls from "./EmployeeDetails.module.scss";
import { memo } from "react";
import {
	DynamicReducerLoader,
	ReducersList,
} from "@/shared/lib/DynamicReducerLoader/DynamicReducerLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getEmployeeDetailsError } from "../../model/selectors/employeeDetails";
import { fetchEmployeeByID } from "../../model/services/fetchEmployeeById/fetchEmployeeById";
import { employeeDetailsReducer } from "../../model/slices/employeeDetailsSlice";
import { ColumnStack } from "@/shared/ui/Stack";

import { EmployeeDetailsCard } from "../EmployeeDetailsCard";
import { EmployeeDetailsError } from "../EmployeeDetailsError/EmployeeDetailsError";
import { useInitEffect } from "@/shared/lib/hooks/useInitEffect/useInitEffect";

interface EmployeeDetailsProps {
	className?: string;
	employeeId: string;
}

const reducers: ReducersList = {
	employeeDetails: employeeDetailsReducer,
};

export const EmployeeDetails = memo(function EmployeeDetails(
	props: EmployeeDetailsProps
) {
	const { className, employeeId } = props;
	const dispatch = useAppDispatch();
	const error = useSelector(getEmployeeDetailsError);

	useInitEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(fetchEmployeeByID(employeeId));
		}
	});

	let content;

	if (error) {
		content = <EmployeeDetailsError />;
	} else {
		content = <EmployeeDetailsCard employeeId={employeeId} />;
	}

	return (
		<DynamicReducerLoader reducers={reducers} removeAfterUnmount>
			<ColumnStack
				gap="16"
				max
				align="center"
				className={classNames(cls.employeeDetails, [className], {})}
			>
				{content}
			</ColumnStack>
		</DynamicReducerLoader>
	);
});
