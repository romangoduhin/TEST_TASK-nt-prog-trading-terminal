import React from 'react';
import {Card} from '@mantine/core';
import {addRequest, updateRequestStatus} from "../../redux/requestsSlice";
import {useAppDispatch} from "../../redux/hooks";
import Form from "./Form/Form";
import {FormSubmitValues} from "../../types/globalTypes";
import {updatedStatuses} from "./meta";
import {getRandArrEl} from "../../helpers/getRandArrEl";

function Ticker() {
    const dispatch = useAppDispatch();

    function updateStatus (id: number) { //here I emulate the status updating
        const randStatus = getRandArrEl(updatedStatuses)

        setTimeout(() => {
                dispatch(updateRequestStatus({id: id, status: randStatus}))
            },
            2000
        )
    }

    function handleSubmit(values: FormSubmitValues) {
        dispatch(addRequest(values));
        updateStatus(values.id)
    }

    return (
        <Card w="30vw" h="90vh" shadow="sm" p="lg" radius="md" withBorder>
            <Form handleSubmit={handleSubmit}/>
        </Card>
    );
}

export default Ticker;
