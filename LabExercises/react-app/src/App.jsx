import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";
import Emoji from "./components/Emoji";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Greeting name="John">
                <p>Welcome to the app!</p>
            </Greeting>
            <BigCats></BigCats>
            <Emoji></Emoji>
        </>
    );
}

export default App;
