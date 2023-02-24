import React, {useEffect, useState} from 'react';
import {Button, ScrollArea, SimpleGrid} from "@mantine/core";
import Ticker from "./Ticker/Ticker";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {addTicker} from "../../redux/slices/requestsSlice";

function Tickers() {
    const tickers = useAppSelector((state) => state.requests.tickers);
    const dispatch = useAppDispatch();

    const [isLastTicker, setIsLastTicker] = useState(true);

    function handleAddTicker() {
        dispatch(addTicker())
    }

    useEffect(() => {
        if (tickers.length === 2) {
            setIsLastTicker(true)
            return
        }
        setIsLastTicker(false)
    }, [tickers]);


    return (
        <SimpleGrid h="90vh"
                    w="30vw"
                    cols={1}
        >
            <ScrollArea h="100%">
                {tickers.map(el => <Ticker id={el} key={el} isLastTicker={isLastTicker}/>)}
                <Button w="100%" h="5vh" onClick={handleAddTicker}>Add Ticker</Button>
            </ScrollArea>
        </SimpleGrid>
    );
}

export default Tickers;