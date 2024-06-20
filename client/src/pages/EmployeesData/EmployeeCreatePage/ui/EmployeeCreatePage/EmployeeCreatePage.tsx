import { memo, useCallback, useState } from "react";
import { PageContainer } from "@/widgets/PageContainer";
import { Section } from "@/shared/ui/Section";
import { ColumnStack, RowStack } from "@/shared/ui/Stack";
import { Avatar } from "@/shared/ui/Avatar";
import {
	Address,
	Employee,
	PersonalInformation,
	RegistrationAddress,
} from "@/entities/Employee";
import { EmployeeCreatePpageHeader } from "../EmployeeCreatePpageHeader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { createEmployee } from "@/entities/Employee";
import { useNavigate } from "react-router-dom";
import { getRouteEmployees } from "@/shared/consts/routerConsts";

const EmployeeCreatePage = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [formData, setFormData] = useState<Partial<Employee>>({});

	const onSave = useCallback(() => {
		dispatch(createEmployee(formData as Employee)).then((result) => {
			if (createEmployee.fulfilled.match(result)) {
				navigate(getRouteEmployees());
			}
		});
	}, [dispatch, formData, navigate]);

	const onChangeHandler = <K extends keyof Employee>(
		field: K,
		value: Employee[K]
	) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	const onAddressChange = <K extends keyof Address>(
		field: K,
		value: Address[K]
	) => {
		setFormData((prevData) => ({
			...prevData,
			[field]: value,
		}));
	};

	return (
		<PageContainer>
			<Section max padding="16" border="partial">
				<EmployeeCreatePpageHeader onSave={onSave} />
				<ColumnStack gap="32" max>
					<RowStack justify="center" max>
						<Avatar size={200} src={""} />
					</RowStack>
					<PersonalInformation
						data={formData}
						onChangeFirstname={(value) => onChangeHandler("firstName", value)}
						onChangeLastname={(value) => onChangeHandler("lastName", value)}
						onChangeBirthday={(value) => onChangeHandler("birthDay", value)}
						onChangeEmail={(value) => onChangeHandler("email", value)}
						onChangePhoneNumber={(value) =>
							onChangeHandler("phoneNumber", value)
						}
					/>
					<RegistrationAddress
						data={formData}
						onChangeRegistrationAddress={(value) =>
							onChangeHandler(
								"registrationAddress",
								value as unknown as Address
							)
						}
						onChangeCity={(value) => onAddressChange("city", value || "")}
						onChangeZip={(value) => onAddressChange("zip", value || "")}
						onChangeCountry={(value) => onAddressChange("country", value || "")}
					/>
				</ColumnStack>
			</Section>
		</PageContainer>
	);
};

export default memo(EmployeeCreatePage);
