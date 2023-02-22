import Ticker from "./components/Ticker/Ticker";
import RequestTable from "./components/RequestTable/RequestTable";
import {Card} from "@mantine/core";

function App() {
    return (
        <Card shadow="sm"
              display="flex"
              sx={{flexDirection: 'row', justifyContent: "space-evenly"}}
              radius="md"
              withBorder
        >
            <Ticker/>
            <RequestTable/>
        </Card>
    )
}

export default App
