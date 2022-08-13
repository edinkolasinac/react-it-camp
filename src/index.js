import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/classs/functional/Brojac";
import Age from "./components/classs/functional/Brojac/test1";
import Memorize from "./components/classs/functional/Memorize";
import RandomCat from "./components/classs/functional/RandomCat/RadnomCat";
import Ref from "./components/classs/functional/Ref";
import Apps from "./components/classs/functional/TemperatureControlApp/App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Memorize />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();