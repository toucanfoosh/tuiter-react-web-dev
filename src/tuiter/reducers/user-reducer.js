import { createSlice } from "@reduxjs/toolkit";
import initialState from "./data/user.json"

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeUser(state, action) {
            return action.payload;
        }
    }
});

export default userSlice.reducer;
export const { changeUser } = userSlice.actions;