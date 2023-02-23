import React from 'react';
import {ScrollArea, Table as MantineTable} from "@mantine/core";
import {Request} from "../../../types/globalTypes";
import {getInstrLabel} from "../../../helpers/getInstrLabel";
import {TableProps} from "./Table.types";

function Table({fullData, currentData}: TableProps) {
    function getRows(data: Array<Request>) {
        return data.map((el) => (
            <tr key={el.id}>
                <td>{fullData.indexOf(el) + 1}</td>
                <td>{el.creationTime}</td>
                <td>{el.changeTime}</td>
                <td style={{textTransform: 'capitalize'}}>{el.status}</td>
                <td style={{textTransform: 'capitalize', color: el.side === 'sell' ? 'red' : 'green'}}>{el.side}</td>
                <td style={{color: el.side === 'sell' ? 'red' : 'green'}}>{el.price}</td>
                <td style={{color: el.side === 'sell' ? 'red' : 'green'}}>{el.amount}</td>
                <td>{getInstrLabel(el.instrument)}</td>
            </tr>))
    }

    return (
        <ScrollArea h="85%">
            <MantineTable horizontalSpacing="sm"
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
            </MantineTable>
        </ScrollArea>
    );
}

export default Table;