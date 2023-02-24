import {getRandArrEl} from "../helpers/getRandArrEl";
import {updatedStatuses} from "../components/Tickers/Ticker/meta";
import {updateRequestStatus} from "./slices/requestsSlice";
import {Dispatch} from "@reduxjs/toolkit";

export const updateRequestStatusThunk = (id: number) => (dispatch: Dispatch) => { //here I emulate the status updating
    const randStatus = getRandArrEl(updatedStatuses);

    return new Promise((res) => {
        setTimeout(() => {
                dispatch(updateRequestStatus({id: id, status: randStatus}))
                res(randStatus)
            },
            2000
        )
    })
};