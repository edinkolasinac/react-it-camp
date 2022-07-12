import { useEffect } from "react";

const RadnomColor = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const random = (){

        const redLocal = Math.round(math.random() * 255);
        const blueLocal = Math.round(math.random() * 255);
        const greenLocal = Math.round(math.random() * 255);

        setRed(redLocal);
        setBlue(blueLocal);
        setBlue(blueLocal);

        useEffect(() => {
            setInterval(random, 100);
        })
    }
    return (
        <div >
            <div style={{
                backgroundColor: `rgb (${red},${green},${blue}), `
            width: 100,
                height: 100,
            }
            }
            ></div>
        </div>
    );

};