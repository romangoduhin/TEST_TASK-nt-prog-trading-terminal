import {Request} from "../../../types/globalTypes";

export type sortModeType = -1 | 0 | 1;

export interface SortingPanelProps {
    data: Request[],
    onChangeData: (newState: Request[])=>void
}