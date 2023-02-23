import React, {useState} from 'react';

function usePagination(data: any[], pageSize: number) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalCount = data.length;
    const pagesCount = Math.ceil(totalCount / pageSize);

    function getCurrentData() {
        const indexOfLast = currentPage * pageSize;
        const indexOfFirst = indexOfLast - pageSize;
        return data.slice(indexOfFirst, indexOfLast);
    }

    const currentData = getCurrentData();

    return {currentPage, setCurrentPage, pagesCount, currentData};
}

export default usePagination;