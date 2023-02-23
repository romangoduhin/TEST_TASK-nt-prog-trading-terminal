import React, {useEffect, useState} from 'react';
import {Button, NumberInput, Select, SimpleGrid, Text} from "@mantine/core";
import {instruments} from "../meta";
import {useForm} from "@mantine/form";
import {FormProps, FormValues} from "./Form.types";
import {Side} from "../../../types/globalTypes";
import {getId} from "../../../helpers/getId";

function Form({handleSubmit}: FormProps) {
    const [sellPrice, setSellPrice] = useState<number>(0);
    const [buyPrice, setBuyPrice] = useState<number>(0);

    const form = useForm<FormValues>({
        initialValues: {
            instrument: instruments[0].value,
            amount: 1,
        },
        validate: {
            instrument: (value) => (!value ? 'Select the instrument' : null),
            amount: (value) => (!value || (value < 1) ? 'Minimal amount is 1' : null),
        }
    })

    function onSubmit(side: Side) {
        form.validate();

        if (form.isValid()) {
            const inputsData = form.values;
            const id = getId();
            const price = side === "sell" ? sellPrice : buyPrice;
            const values = {...inputsData, side, price, id};
            handleSubmit(values);
        }
    }

    useEffect(() => { //for displaying the instrument price
        const currentInst = instruments.find(el => form.values.instrument === el.value);

        if (currentInst) {
            const {sell_price, buy_price} = currentInst;
            setBuyPrice(buy_price)
            setSellPrice(sell_price)
            return
        }
        setBuyPrice(0)
        setSellPrice(0)
    }, [form.values.instrument]);

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
                    type="number"
                    label="Input Amount"
                    placeholder="Amount"
                    {...form.getInputProps('amount')}
                />

                <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
                    <SimpleGrid cols={1}>
                        {!!sellPrice && <Text weight="500" size="xl" align="center">{sellPrice}</Text>}
                        <Button onClick={() => onSubmit('sell')} size="md" color="red" uppercase>
                            sell
                        </Button>
                    </SimpleGrid>

                    <SimpleGrid cols={1}>
                        {!!buyPrice && <Text weight="500" size="xl" align="center">{buyPrice}</Text>}
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