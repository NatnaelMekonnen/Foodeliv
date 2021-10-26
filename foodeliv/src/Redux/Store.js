import { configureStore } from "@reduxjs/toolkit";
import userLog from "./LogInState";

export const store = configureStore({
    reducer: {
        userState: userLog,
    },
});
