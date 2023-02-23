import {instruments} from "../components/Tickers/Ticker/meta";

export const getInstrLabel = (value: string): string => {
    const currentInst = instruments.filter(inst => inst.value === value)[0]
    return currentInst.label;
}