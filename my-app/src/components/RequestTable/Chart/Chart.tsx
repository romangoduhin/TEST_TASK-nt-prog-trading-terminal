import React from 'react';
import {Card, Text} from "@mantine/core";
import ReactEcharts from "echarts-for-react";
import {ChartProps} from "./Chart.types";
import {formatDate} from "../../../helpers/formatDate";

function Chart({data}: ChartProps) { //This is just example of chart
    const option = {
        xAxis: {
            type: 'category',
            data: data.map(el => formatDate(el.creationTime))
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: "Buy",
                type: 'bar',
                data: data.filter(el => el.side === "buy").map(el => el.price)
            },
            {
                name: "Sell",
                type: 'bar',
                data: data.filter(el => el.side === "sell").map(el => el.price)
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['Sell', 'Buy']
        },
    };

    return <Card h="94%" shadow="sm" p={0} radius="md" withBorder>
        <Text fz="md" fw={500} mt="sm" ml="lg" align="left">Price chart</Text>
        <ReactEcharts style={{
            height: '100%',
            width: '100%',
        }} option={option}
        />
    </Card>
}

export default Chart;