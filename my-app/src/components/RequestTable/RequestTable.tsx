import React, {useEffect, useState} from 'react';
import {Card} from "@mantine/core";
import {useAppSelector} from "../../redux/hooks";
import {isArrEmpty} from "../../helpers/isArrEmpty";
import usePagination from "../../helpers/hooks/usePagination";
import Table from "./Table/Table"
import Footer from "./Footer/Footer";
import EmptyContent from "./EmptyContent/EmptyContent";

function RequestTable() {
    const requests = useAppSelector((state) => state.requests.requests);

    const [isVisible, setIsVisible] = useState(false);

    const {page, onChangePage, pagesCount, currentData} = usePagination(requests, 15)

    useEffect(() => {
        if (!isArrEmpty(currentData)) {
            setIsVisible(true)
            return
        }
        if (isVisible && isArrEmpty(currentData)) {
            setIsVisible(false)
            return
        }
    }, [currentData]);

    return (
        <Card w="65vw" h="90vh" shadow="sm" p="lg" radius="md" withBorder>
            {isVisible
                ? <>
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