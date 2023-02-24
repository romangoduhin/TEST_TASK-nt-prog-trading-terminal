import React, {useEffect, useState} from 'react';
import {Card} from "@mantine/core";
import {useAppSelector} from "../../redux/hooks";
import {isArrEmpty} from "../../helpers/isArrEmpty";
import usePagination from "../../helpers/hooks/usePagination";
import Table from "./Table/Table"
import Footer from "./Footer/Footer";
import EmptyContent from "./EmptyContent/EmptyContent";
import NavBar from "./NavBar/NavBar";
import Chart from "./Chart/Chart";

function RequestTable() {
    const requests = useAppSelector((state) => state.requests.requests);

    const [tableData, setTableData] = useState(requests);
    const [isChartVisible, setIsChartVisible] = useState(false);
    const [isTableVisible, setIsTableVisible] = useState(false);

    const {page, onChangePage, pagesCount, currentData} = usePagination(tableData, 15)

    function switchChartVisibility() {
        setIsChartVisible(prev => !prev)
    }

    useEffect(() => {
        if (!isArrEmpty(requests)) {
            setTableData(requests)
        }
    }, [requests]);

    useEffect(() => {
        !isArrEmpty(currentData) ? setIsTableVisible(true) : setIsTableVisible(false)
    }, [currentData]);

    return (
        <Card w="65vw" h="90vh" shadow="sm" p="lg" radius="md" withBorder>
            <NavBar data={requests} onChangeData={setTableData} isChartVisible={isChartVisible} switchChartVisibility={switchChartVisibility}/>

            {isChartVisible
                ? <Chart data={requests}/>
                : isTableVisible
                    ? <>
                        <Table fullData={requests} currentData={currentData}/>

                        <Footer fullData={requests}
                                currentPage={page}
                                setCurrentPage={onChangePage}
                                pagesCount={pagesCount}
                        />
                    </>
                    : <EmptyContent content={'Nothing to Show'}/>
            }
        </Card>
    );
}

export default RequestTable;