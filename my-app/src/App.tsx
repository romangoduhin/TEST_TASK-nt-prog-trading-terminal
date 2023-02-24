import RequestTable from "./components/RequestTable/RequestTable";
import {Card} from "@mantine/core";
import Tickers from "./components/Tickers/Tickers";
import {useState} from "react";
import AuthModal from "./components/AuthModal/AuthModal";

function App() {
    const [isAuthVisible, setIsAuthVisible] = useState(true);

    function handleSwitch(){
        setIsAuthVisible(prev=>!prev)
    }

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
            <AuthModal isOpen={isAuthVisible} setOpen={handleSwitch}/>
        </Card>
    )
}

export default App
