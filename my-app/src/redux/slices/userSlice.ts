import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';
import {UserState} from "../types";
import {User} from "../../types/globalTypes";

const initialState: UserState = {
    email: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.email = action.payload.email;
        },
        removeUser: (state) => {
            state.email = null;
        }
    },
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;