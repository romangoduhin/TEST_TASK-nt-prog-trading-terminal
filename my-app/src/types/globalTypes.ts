export type Status = 'active' | 'rejected' | 'cancelled' | 'filled';
export type Side = 'sell' | 'buy';

export interface Request {
    id: number,
    creationTime: string,
    changeTime: string,
    status: Status,
    side: Side,
    price: number,
    amount: number,
    instrument: string,
}

export interface FormSubmitValues {
    id: number,
    instrument: string,
    amount: number,
    side: Side,
    price: number
}

export interface ReqUpdateValues {
    id: number,
    status: Status,
}