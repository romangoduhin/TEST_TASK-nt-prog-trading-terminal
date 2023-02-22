import {getRandArrEl} from "../helpers/getRandArrEl";
import {updatedStatuses} from "../components/Ticker/meta";
import {updateRequestStatus} from "./requestsSlice";
import {Dispatch} from "@reduxjs/toolkit";

export const updateRequestStatusThunk = (id: number) => (dispatch: Dispatch) => { //here I emulate the status updating
    const randStatus = getRandArrEl(updatedStatuses);

    setTimeout(() => {
            dispatch(updateRequestStatus({id: id, status: randStatus}))
        },
        2000
    )
};