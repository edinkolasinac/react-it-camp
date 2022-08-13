import { useRef } from "react";

const Ref = () => {
    const myRef = useRef();
    return (<div>
        <input ref={myRef} type="text" />
        <button onClick={() => myRef.current.focus()}>ref</button>
    </div>
    );
}

export default Ref;