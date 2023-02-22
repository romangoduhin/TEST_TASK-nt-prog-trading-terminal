import React, {useEffect, useState} from 'react';
import {Card, Table, Text} from "@mantine/core";
import {useAppSelector} from "../../redux/hooks";
import {isArrEmpty} from "../../helpers/isArrEmpty";
import {getInstrLabel} from "../../helpers/getInstrLabel";

function RequestTable() {
    const requests = useAppSelector((state) => state.requests.requests);

    const [isVisible, setIsVisible] = useState(false);

    const rows = requests.map((req, ind) => (
        <tr key={req.id}>
            <td>{ind + 1}</td>
            <td>{req.creationTime}</td>
            <td>{req.changeTime}</td>
            <td style={{textTransform: 'capitalize'}}>{req.status}</td>
            <td style={{textTransform: 'capitalize', color: req.side === 'sell' ? 'red' : 'green'}}>{req.side}</td>
            <td style={{color: req.side === 'sell' ? 'red' : 'green'}}>{req.price}</td>
            <td style={{color: req.side === 'sell' ? 'red' : 'green'}}>{req.amount}</td>
            <td>{getInstrLabel(req.instrument)}</td>
        </tr>
    ));

    useEffect(() => {
        if (!isArrEmpty(rows)) {
            setIsVisible(true)
            return
        }
        if (isVisible && isArrEmpty(rows)) {
            setIsVisible(false)
            return
        }
    }, [rows]);

    return (
        <Card w="65vw" h="90vh" shadow="sm" p="lg" radius="md" withBorder>
            {isVisible
                ? <Table horizontalSpacing="sm"
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
                    <tbody>{rows}</tbody>
                </Table>
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