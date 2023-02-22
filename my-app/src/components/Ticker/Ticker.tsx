import React from 'react';
import {Card} from '@mantine/core';
import {addRequest} from "../../redux/requestsSlice";
import {useAppDispatch} from "../../redux/hooks";
import {Request} from "../../types/globalTypes";
import Form from "./Form/Form";

function Ticker() {
    const dispatch = useAppDispatch();

    function handleSubmit(values: Request) {
        dispatch(addRequest(values));
    }

    return (
        <div>
            <Card w="50vw" h="90vh" shadow="sm" p="lg" radius="md" withBorder>
                <Form handleSubmit={handleSubmit}/>
            </Card>
        </div>
    );
}

export default Ticker;
