import Ticker from "./components/Ticker/Ticker";
import RequestTable from "./components/RequestTable/RequestTable";
import {Card, SimpleGrid} from "@mantine/core";
import Chart from "./components/Chart/Chart";

function App() {
    return (
        <Card shadow="sm"
              display="flex"
              sx={{flexDirection: 'row', justifyContent: "space-evenly"}}
              radius="md"
              withBorder
        >
            <SimpleGrid h="90vh"
                        w="30vw"
                        display="flex"
                        style={{flexDirection: "column", justifyContent: "space-between"}}
                        cols={1}
            >
                <Ticker/>
                <Chart/>
            </SimpleGrid>
            <RequestTable/>
        </Card>
    )
}

export default App
