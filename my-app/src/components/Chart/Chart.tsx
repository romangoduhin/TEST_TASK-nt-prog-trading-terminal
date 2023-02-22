import React from 'react';
import {Card, Text} from "@mantine/core";
import ReactEcharts from "echarts-for-react";
import {instruments} from "../Ticker/meta";

function Chart() {
    const option = {
        xAxis: {
            type: 'category',
            data: instruments.map(el => el.label)
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            type: 'bar',
            data: instruments.map(el => el.buy_price)
        },
            {
                type: 'bar',
                data: instruments.map(el => el.sell_price)
            },
        ],
        tooltip: {
            trigger: 'axis'
        },
    };

    return <Card h="55vh" shadow="sm" p={0} radius="md" withBorder>
        <Text fz="md" fw={500} mt="sm" ml="lg" align="left">Price chart</Text>
        <ReactEcharts style={{
            height: '95%',
            width: '100%',
        }} option={option}
        />
    </Card>
}

export default Chart;