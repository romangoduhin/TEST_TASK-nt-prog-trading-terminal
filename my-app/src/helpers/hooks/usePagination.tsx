import React, {useState} from 'react';

function usePagination(data: any[], pageSize: number) {
    const [page, setPage] = useState(1);

    const totalCount = data.length;
    const pagesCount = Math.ceil(totalCount / pageSize);

    function onChangePage(number: number) {
        setPage(number)
    }

    function getCurrentData() {
        const indexOfLast = page * pageSize;
        const indexOfFirst = indexOfLast - pageSize;
        return data.slice(indexOfFirst, indexOfLast);
    }

    const currentData = getCurrentData();

    return {page, onChangePage, pagesCount, currentData};
}

export default usePagination;