import React, {useEffect, useState} from 'react';
import {Card, ScrollArea, Table, Text} from "@mantine/core";
import {useAppSelector} from "../../redux/hooks";
import {isArrEmpty} from "../../helpers/isArrEmpty";
import {getInstrLabel} from "../../helpers/getInstrLabel";
import {Request} from "../../types/globalTypes"
import {Pagination} from '@mantine/core';
import usePagination from "../../helpers/hooks/usePagination";

function RequestTable() {
    const requests = useAppSelector((state) => state.requests.requests);

    const [isVisible, setIsVisible] = useState(false);

    const {currentPage, setCurrentPage, pagesCount, currentData} = usePagination(requests, 15)

    function getRows(data: Array<Request>) {
        return data.map((el) => (
            <tr key={el.id}>
                <td>{requests.indexOf(el) + 1}</td>
                <td>{el.creationTime}</td>
                <td>{el.changeTime}</td>
                <td style={{textTransform: 'capitalize'}}>{el.status}</td>
                <td style={{textTransform: 'capitalize', color: el.side === 'sell' ? 'red' : 'green'}}>{el.side}</td>
                <td style={{color: el.side === 'sell' ? 'red' : 'green'}}>{el.price}</td>
                <td style={{color: el.side === 'sell' ? 'red' : 'green'}}>{el.amount}</td>
                <td>{getInstrLabel(el.instrument)}</td>
            </tr>))
    }

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
                    <ScrollArea h="95%">
                        <Table horizontalSpacing="sm"
                               verticalSpacing="sm"
                               fontSize="md"
                               striped
                               highlightOnHover
                               withBorder
                               withColumnBorders
                        >
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Creation time</th>
                                <th>Change time</th>
                                <th>Status</th>
                                <th>Side</th>
                                <th>Price</th>
                                <th>Amount</th>
                                <th>Instrument</th>
                            </tr>
                            </thead>
                            <tbody>{getRows(currentData)}</tbody>
                        </Table>
                    </ScrollArea>

                    <Pagination mt="sm" page={currentPage} onChange={setCurrentPage} total={pagesCount}/>
                </>
                : <Text w="100%"
                        h="100%"
                        display="flex"
                        sx={{fontSize: 20, flexDirection: 'row', justifyContent: "center", alignItems: "center"}}
                >
                    Nothing to show
                </Text>
            }
        </Card>
    );
}

export default RequestTable;