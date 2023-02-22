import React from 'react';
import {Button, NumberInput, Select, SimpleGrid, Text} from "@mantine/core";
import {instruments} from "../meta";
import {useForm} from "@mantine/form";
import {FormProps, FormValues} from "./Form.types";

function Form({handleSubmit}: FormProps) {
    const form = useForm<FormValues>({
        initialValues: {
            instrument: "",
            amount: 1,
        },
        validate: {
            instrument: (value) => (!value ? 'Select the instrument' : null),
            amount: (value) => (!value || (value < 1) ? 'Minimal amount is 1' : null),
        }
    })

    function onSubmit(side: string) {
        form.validate();

        if(form.isValid()) {
            const inputsData = form.values;
            const values = {...inputsData, side};
            handleSubmit(values);
        }
    }

    return (
        <form>
            <SimpleGrid cols={1}>
                <Select
                    clearable
                    label="Select Instrument"
                    placeholder="Pick one"
                    required
                    data={instruments}
                    {...form.getInputProps('instrument')}
                />

                <NumberInput
                    required
                    label="Input Amount"
                    placeholder="Amount"
                    {...form.getInputProps('amount')}
                />

                <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
                    <SimpleGrid cols={1}>
                        <Text weight="500" size="xl" align="center">8.99.8</Text>
                        <Button onClick={() => onSubmit('sell')} size="md" color="red" uppercase>
                            sell
                        </Button>
                    </SimpleGrid>

                    <SimpleGrid cols={1}>
                        <Text weight="500" size="xl" align="center">8.99.9</Text>
                        <Button onClick={() => onSubmit('buy')} size="md" color="green" uppercase>
                            buy
                        </Button>
                    </SimpleGrid>
                </SimpleGrid>
            </SimpleGrid>
        </form>
    );
}

export default Form;