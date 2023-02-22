import React from 'react';
import {Card} from '@mantine/core';
import {addRequest} from "../../redux/requestsSlice";
import {useAppDispatch} from "../../redux/hooks";
import Form from "./Form/Form";
import {FormSubmitValues} from "../../types/globalTypes";

function Ticker() {
    const dispatch = useAppDispatch();

    function handleSubmit(values : FormSubmitValues) {
        dispatch(addRequest(values));
    }

    return (
        <Card w="30vw" h="90vh" shadow="sm" p="lg" radius="md" withBorder>
            <Form handleSubmit={handleSubmit}/>
        </Card>
    );
}

export default Ticker;
