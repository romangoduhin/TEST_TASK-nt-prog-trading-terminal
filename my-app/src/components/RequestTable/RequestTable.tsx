import React from 'react';
import {Card, Table} from "@mantine/core";
import {useAppSelector} from "../../redux/hooks";

function RequestTable() {
    const requests = useAppSelector((state) => state.requests.requests);

    const rows = requests.map((req, ind) => (
        <tr key={req.id}>
            <td>{ind + 1}</td>
            <td>{req.creationTime}</td>
            <td>{req.changeTime}</td>
            <td>{req.status}</td>
            <td>{req.side}</td>
            <td>{req.price}</td>
            <td>{req.amount}</td>
            <td>{req.instrument}</td>
        </tr>
    ));

    return (
        <Card w="65vw" h="90vh" shadow="sm" p="lg" radius="md" withBorder>
            <Table>
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
        </Card>
    );
}

export default RequestTable;