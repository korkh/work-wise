import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    scroll: {},
};
export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});
export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;
