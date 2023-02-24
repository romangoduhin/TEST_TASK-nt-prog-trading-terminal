import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';
import {UserState} from "../types";
import {User} from "../../types/globalTypes";

const initialState: UserState = {
    email: "",
    token: "",
    id: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser: (state) => {
            state.email = "";
            state.token = "";
            state.id = "";
        }
    },
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;