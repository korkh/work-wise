import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
export function StoreProvider(props) {
    const { children, initialState, asyncReducers } = props;
    const store = createReduxStore(initialState, asyncReducers);
    return _jsx(Provider, { store: store, children: children });
}
