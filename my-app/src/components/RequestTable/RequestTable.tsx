import React, {useEffect, useState} from 'react';
import {Card} from "@mantine/core";
import {useAppSelector} from "../../redux/hooks";
import {isArrEmpty} from "../../helpers/isArrEmpty";
import usePagination from "../../helpers/hooks/usePagination";
import Table from "./Table/Table"
import Footer from "./Footer/Footer";
import EmptyContent from "./EmptyContent/EmptyContent";
import SortingPanel from "./SortingPanel/SortingPanel";

function RequestTable() {
    const requests = useAppSelector((state) => state.requests.requests);

    const [tableData, setTableData] = useState(requests);
    const [isVisible, setIsVisible] = useState(false);

    const {page, onChangePage, pagesCount, currentData} = usePagination(tableData, 15)

    useEffect(() => {
        if (!isArrEmpty(requests)) {
            setTableData(requests)
        }
    }, [requests]);

    useEffect(() => {
        !isArrEmpty(currentData) ? setIsVisible(true) : setIsVisible(false)
    }, [currentData]);

    return (
        <Card w="65vw" h="90vh" shadow="sm" p="lg" radius="md" withBorder>
            {isVisible
                ? <>
                    <SortingPanel data={requests} onChangeData={setTableData}/>

                    <Table fullData={requests} currentData={currentData}/>

                    <Footer fullData={requests}
                            currentPage={page}
                            setCurrentPage={onChangePage}
                            pagesCount={pagesCount}
                    />
                </>
                : <EmptyContent content={'Nothing To Show'}/>
            }
        </Card>
    );
}

export default RequestTable;