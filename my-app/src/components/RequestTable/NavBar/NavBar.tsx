import React from 'react';
import {Button, SimpleGrid} from "@mantine/core";
import {NavBarProps, sortModeType} from "./NavBar.types";
import {useAppDispatch} from "../../../redux/hooks";
import {removeUser} from "../../../redux/slices/userSlice";

function NavBar({data, onChangeData, isChartVisible, switchChartVisibility}: NavBarProps) {
    const dispatch = useAppDispatch();

    function logout() {
        dispatch(removeUser());
    }

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
        <SimpleGrid h="5%" mb="sm" spacing="xl" cols={5}>
            <Button disabled={isChartVisible} onClick={() => sortByAmount(1)} uppercase>
                Sort Amount by Incr.
            </Button>

            <Button disabled={isChartVisible} onClick={() => sortByAmount(-1)} uppercase>
                Sort Amount by Decr.
            </Button>

            <Button disabled={isChartVisible} onClick={() => sortByAmount(0)} color="cyan" uppercase>
                Default
            </Button>

            <Button onClick={switchChartVisibility} color="grape" uppercase>
                {isChartVisible ? "Show Table" : "Show Chart"}
            </Button>

            <Button onClick={logout} color="red" uppercase>
                logout
            </Button>
        </SimpleGrid>
    );
}

export default NavBar;