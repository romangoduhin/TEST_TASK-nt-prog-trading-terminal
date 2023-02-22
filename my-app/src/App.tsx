import styles from "./App.module.scss"
import Ticker from "./components/Ticker/Ticker";

function App() {
    return (
        <div className={styles.container}>
            <Ticker/>
        </div>
    )
}

export default App
