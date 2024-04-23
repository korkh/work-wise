import { Flex, FlexProps } from "../Flex/Flex";

type RowStackProps = Omit<FlexProps, "direction"> & {
	"data-testid"?: string;
};

export const RowStack = (props: RowStackProps) => {
	const { "data-testid": testId, ...rest } = props;
	return <Flex direction="row" {...rest} data-testid={testId} />;
};
