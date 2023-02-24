import {Request} from "../types/globalTypes"

export interface RequestsState {
    requests: Array<Request>,
    tickers: Array<number>
}

export interface UserState {
    email: string | null,
}