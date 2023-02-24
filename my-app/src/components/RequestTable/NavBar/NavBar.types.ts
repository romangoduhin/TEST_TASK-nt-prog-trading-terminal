import {Request} from "../../../types/globalTypes";

export type sortModeType = -1 | 0 | 1;

export interface NavBarProps {
    data: Request[],
    onChangeData: (newState: Request[]) => void,
    isChartVisible: boolean,
    switchChartVisibility: () => void,
}