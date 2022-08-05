import api from "../../../../api/api";
;


const FetchQuotes = async () => {
    try {
        const result = await api.get(`/qoutes`);
        const data = result.data;
        setQuote(data);
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    fetchQuote(tag);
}, [tag]);


export default FetchQuotes;