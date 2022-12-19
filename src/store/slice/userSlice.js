import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "jihoon"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increament(state) {
            state.value = "increament"
        },
        decreament(state) {
            state.value = "decreament"
        }
    }
});

export default userSlice.reducer;
export const { increament, decreament } = userSlice.actions;