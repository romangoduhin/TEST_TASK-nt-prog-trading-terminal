import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';
import {RequestsState} from "./types";
import {Request} from "../types/globalTypes";

const initialState: RequestsState = {
    requests: [],
}

export const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addRequest: (state, action: PayloadAction<Request>) => {
            state.requests.push(action.payload)
        },
    },
})

export const {addRequest} = requestsSlice.actions;
export default requestsSlice.reducer;