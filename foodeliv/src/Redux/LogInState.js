import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userState: {},
};

export const LoginState = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLog: (state, action) => {
            state.userState = action.payload;
        },
    },
});

export const { userLog } = LoginState.actions;

export default LoginState.reducer;
