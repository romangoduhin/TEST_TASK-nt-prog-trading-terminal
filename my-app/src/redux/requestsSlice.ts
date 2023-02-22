import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit';
import {RequestsState} from "./types";
import {FormSubmitValues, Request} from "../types/globalTypes";
import {getId} from "../helpers/getId";
import {getCurrentDate} from "../helpers/getCurrentDate";

const initialState: RequestsState = {
    requests: [],
}

export const requestsSlice = createSlice({
    name: 'requests',
    initialState,
    reducers: {
        addRequest: (state, action: PayloadAction<FormSubmitValues>) => {
            const reqData: Request = {
                id: getId(),
                creationTime: getCurrentDate(),
                changeTime: getCurrentDate(),
                status: 'active',
                side: action.payload.side,
                price: action.payload.price,
                amount: action.payload.amount,
                instrument: action.payload.instrument,
            }
            state.requests.push(reqData)
        }
    },
})

export const {addRequest} = requestsSlice.actions;
export default requestsSlice.reducer;