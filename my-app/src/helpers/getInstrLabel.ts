import {instruments} from "../components/Ticker/meta";

export const getInstrLabel = (value: string): string => {
    const currentInst = instruments.filter(inst => inst.value === value)[0]
    return currentInst.label;
}