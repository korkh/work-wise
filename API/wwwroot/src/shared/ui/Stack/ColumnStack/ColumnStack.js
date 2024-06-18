import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from "../Flex/Flex";
export const ColumnStack = (props) => {
    const { align = "start", "data-testid": testId, ...rest } = props;
    return (_jsx(Flex, { ...rest, direction: "column", align: align, "data-testid": testId }));
};
