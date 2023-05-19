import { createSlice } from "@reduxjs/toolkit";

export const alertVisibilitySlice = createSlice({
    name: "alertVisibility",
    initialState: {
        alertVisible: true,
    },
    reducers: {
        changeVisibility: (state) => {
            state.alertVisible = !state.alertVisible;
        },
        changeVisibilityManual: (state, action) => {
            state.alertVisible = action.payload;
        }
    }
})

export const { changeVisibility, changeVisibilityManual } = alertVisibilitySlice.actions

export default alertVisibilitySlice.reducer;