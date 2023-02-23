import React from 'react';
import {Card} from '@mantine/core';
import {addRequest} from "../../redux/requestsSlice";
import {useAppDispatch} from "../../redux/hooks";
import Form from "./Form/Form";
import {FormSubmitValues} from "../../types/globalTypes";
import {updateRequestStatusThunk} from "../../redux/thunks";
import toast, {Toaster} from "react-hot-toast";

function Ticker() {
    const dispatch = useAppDispatch();

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
        <Card h="35vh" shadow="sm" p="lg" radius="md" withBorder>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <Form handleSubmit={handleSubmit}/>
        </Card>
    );
}

export default Ticker;
