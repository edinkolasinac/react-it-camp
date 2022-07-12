import React from "react";
import { ReactDOM } from "react";
import "./style.css";


function App() {
    const [data, setData] = useState("");
    const calcBtns = [];
    [9, 7, 6, 5, 4, 3, 2, 1, 0, ".", ",", "%"].forEach(item => {
        calcBtns.push(
            <button onClick={e => {
                setData(data + e.target.value)
            }}
                value={item}
                key={item}>
                {item}
            </button>
        )
    })
}
return (<div className="App"></div>);