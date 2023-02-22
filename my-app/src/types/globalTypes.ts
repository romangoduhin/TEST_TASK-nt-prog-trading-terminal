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
    instrument: string,
    amount: number,
    side: Side,
    price: number
}