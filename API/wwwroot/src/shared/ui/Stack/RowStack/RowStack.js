import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from "../Flex/Flex";
export const RowStack = (props) => {
    const { "data-testid": testId, ...rest } = props;
    return _jsx(Flex, { direction: "row", ...rest, "data-testid": testId });
};
