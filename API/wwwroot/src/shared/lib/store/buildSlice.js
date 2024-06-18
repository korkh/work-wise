/* eslint-disable @typescript-eslint/ban-ts-comment */
import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
export function buildSlice(options) {
    const slice = createSlice(options);
    const useActions = () => {
        const dispatch = useDispatch();
        // @ts-ignore
        return useMemo(
        // @ts-ignore
        () => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };
    return {
        ...slice,
        useActions,
    };
}
