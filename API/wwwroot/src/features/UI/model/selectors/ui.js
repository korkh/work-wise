import { createSelector } from "@reduxjs/toolkit";
export const getUIScroll = (state) => state?.ui.scroll;
export const getUIScrollByPath = createSelector(getUIScroll, (state, path) => path, (scroll, path) => scroll[path] || 0);
