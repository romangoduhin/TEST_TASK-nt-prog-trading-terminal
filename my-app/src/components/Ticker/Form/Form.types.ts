import {Request} from "../../../types/globalTypes";

export interface FormValues {
    instrument: string,
    amount: number,
}

export interface FormProps {
    handleSubmit: (values: Request) => void
}