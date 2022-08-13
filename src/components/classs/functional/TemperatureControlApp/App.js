import { set } from "date-fns";
import React, { useState } from "react";
import style from './stajl.css'
const Apps = () => {


    const [temperatureValue, setTemperatureValue] = useState(10);

    const [temperatureColor, setTemperatureColor] = useState('cold');

    const smanji = () => {
        const Novatemperature = temperatureValue - 1;


        const color = setTemperatureColor;

        if (color) {
            setTemperatureColor('hot');
        }
    }



    return (

        <div className="app-container">









            <div className="temperature-display-container">
                <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}
                </div>



            </div>


            <div className="button-container">
                <button onClick={() => {
                    setTemperatureValue(temperatureValue + 1)
                }} >+</button>



                <button onClick={smanji}> -</button>



            </div>



        </div>
    );
}


export default Apps;