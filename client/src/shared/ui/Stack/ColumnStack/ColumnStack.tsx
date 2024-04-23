import { Flex, FlexProps } from "../Flex/Flex";

type ColumnStackProps = Omit<FlexProps, "direction"> & {
	"data-testid"?: string;
};

export const ColumnStack = (props: ColumnStackProps) => {
	const { align = "start", "data-testid": testId, ...rest } = props;
	return (
		<Flex {...rest} direction="column" align={align} data-testid={testId} />
	);
};
