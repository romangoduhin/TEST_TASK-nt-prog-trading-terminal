import {Request} from "../../../types/globalTypes";

export interface FooterProps {
    fullData: Request[]
    currentPage: number
    setCurrentPage: (number: number) => void
    pagesCount: number
}