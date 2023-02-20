import React from 'react';
import {Card, Select, Input, SimpleGrid, Text, Button} from '@mantine/core';
import {instruments} from "./meta";

function Ticker() {
    return (
        <div>
            <Card w="25vw" shadow="sm" p="lg" radius="md" withBorder>
                <SimpleGrid cols={1}>
                    <Select
                        label="Select Instrument"
                        placeholder="Pick one"
                        required
                        data={instruments}
                    />

                    <Input.Wrapper required label="Input Amount">
                        <Input type="number" placeholder="Amount"/>
                    </Input.Wrapper>

                    <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
                        <SimpleGrid cols={1}>
                            <Text weight="500" size="xl" align="center">8.99.8</Text>
                            <Button size="md" color="red" uppercase>
                                sell
                            </Button>
                        </SimpleGrid>

                        <SimpleGrid cols={1}>
                            <Text weight="500" size="xl" align="center">8.99.9</Text>
                            <Button size="md" color="green" uppercase>
                                buy
                            </Button>
                        </SimpleGrid>
                    </SimpleGrid>
                </SimpleGrid>
            </Card>
        </div>
    );
}

export default Ticker;
