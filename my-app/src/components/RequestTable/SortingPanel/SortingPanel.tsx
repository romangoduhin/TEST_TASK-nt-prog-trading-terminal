import React from 'react';
import {Button, SimpleGrid} from "@mantine/core";
import {SortingPanelProps, sortModeType} from "./SortingPanel.types";

function SortingPanel({data, onChangeData, isChartVisible, switchChartVisibility}: SortingPanelProps) {
    function sortByAmount(mode: sortModeType) {
        const arr = [...data];

        switch (mode) {
            case 0:
                return onChangeData(arr)
            case 1:
                return onChangeData(arr.sort((a, b) => a.amount - b.amount))
            case -1:
                return onChangeData(arr.sort((a, b) => b.amount - a.amount))
        }
    }

    return (
        <SimpleGrid h="5%" mb="sm" spacing="xl" cols={4}>
            <Button disabled={isChartVisible} onClick={() => sortByAmount(1)} uppercase>
                Sort Amount by Increase
            </Button>

            <Button disabled={isChartVisible} onClick={() => sortByAmount(-1)} uppercase>
                Sort Amount by Decrease
            </Button>

            <Button disabled={isChartVisible} onClick={() => sortByAmount(0)} color="cyan" uppercase>
                Default
            </Button>

            <Button onClick={switchChartVisibility} color="grape" uppercase>
                {isChartVisible ? "Show Table" : "Show Chart"}
            </Button>
        </SimpleGrid>
    );
}

export default SortingPanel;