import RequestTable from "./components/RequestTable/RequestTable";
import {Card} from "@mantine/core";
import Tickers from "./components/Tickers/Tickers";

function App() {
    return (
        <Card shadow="sm"
              display="flex"
              p="lg"
              sx={{flexDirection: 'row', justifyContent: "space-evenly"}}
              radius="md"
              withBorder
        >
            <Tickers/>
            <RequestTable/>
        </Card>
    )
}

export default App
