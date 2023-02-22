export type Status = 'active' | 'rejected' | 'cancelled' | 'filled';

export interface Request {
    id: number,
    creationTime: string,
    changeTime: string,
    status: Status,
    side: string,
    price: number,
    amount: number,
    instrument: string,
}

export interface FormSubmitValues {
    instrument: string,
    amount: number,
    side: string
}