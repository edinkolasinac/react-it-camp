import React from "react";
import { useState } from "react";

function Age() {

    const [age, SetAge] = useState(0);

    const povecaj = () => {
        SetAge(age + 1);
    }


    return (
        <div>
            <button onClick={povecaj}>+</button>

            <p>{age}</p>
        </div>
    )
}


export default Age;

