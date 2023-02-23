import React from 'react';
import {Card, CloseButton, Group} from '@mantine/core';
import {addRequest, removeTicker} from "../../../redux/requestsSlice";
import {useAppDispatch} from "../../../redux/hooks";
import Form from "./Form/Form";
import {FormSubmitValues} from "../../../types/globalTypes";
import {updateRequestStatusThunk} from "../../../redux/thunks";
import toast, {Toaster} from "react-hot-toast";
import {TickerProps} from "./Ticker.types";

function Ticker({id, isLastTicker}: TickerProps) {
    const dispatch = useAppDispatch();

    function handleRemoveTicker() {
        dispatch(removeTicker({id}))
    }

    function showToast(status: string | unknown) {
        if (status === 'filled') {
            toast.success(`Request ${status}!`)
            return
        }
        toast.error(`Request ${status}!`)
    }

    function handleSubmit(values: FormSubmitValues) {
        dispatch(addRequest(values));
        dispatch(updateRequestStatusThunk(values.id)).then((res) => showToast(res));
    }

    return (
        <Card h="41vh" mb="sm" shadow="sm" p="lg" radius="md" withBorder>
            <Group h="1vh" position="right">
                {!isLastTicker && <CloseButton p={0} onClick={handleRemoveTicker} aria-label="Close ticker"/>}
            </Group>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <Form handleSubmit={handleSubmit}/>
        </Card>
    );
}

export default Ticker;
