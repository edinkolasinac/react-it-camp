import { useState } from "react";
import { useEffect } from "react";
import api from "../../../../api/api";
const Quote = () => {
    const [quote, setQuote] = useState();

    //   useEffect(() => {
    //     api.get("/random").then((result) => {
    //       const data = result.data;

    //       setQuote(data);
    //     });
    //   }, []);

    const fetchQuote = async () => {
        try {
            const result = await api.get("/random");
            const data = result.data;
            setQuote(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div style={{ width: 500 }}>
            <select onChange={Qute()}> </select>
            <button onClick={() => fetchQuote()}>Fetch new</button>
            <div style={{ width: 400, border: 16 }}></div>
            {quote && quote.author}
        </div>
    );
};

export default Quote;