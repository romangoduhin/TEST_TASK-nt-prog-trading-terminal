import RequestTable from "./components/RequestTable/RequestTable";
import {Card} from "@mantine/core";
import Tickers from "./components/Tickers/Tickers";
import AuthModal from "./components/AuthModal/AuthModal";
import UseAuth from "./helpers/hooks/useAuth";

function App() {
    const {isAuth} = UseAuth();

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
            <AuthModal isOpen={isAuth}/>
        </Card>
    )
}

export default App
