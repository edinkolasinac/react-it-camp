import React, { useEffect, useState, useCallback } from "react";

const Memorize = (props) => {
    const [text, setText] = useState(1);

    return (
        <div>
            <p>{text}a</p>
            <MyInput />
        </div>
    );
};

const MyInput = React.memo((props) => {
    return <div>
        <span >
            <input>HEllo world</input>
        </span>
    </div>;
});

export default Memorize;