const QuoteCard = () => {
    const { content, author } = props;

    return (
        <div>
            <button onClick={() => fetchQuote()}>Fetch new</button>
            <select
                name=""
                id=""
                value={tag}
                onInput={(e) => {
                    setTag(e.target.value);
                }}
            >
                <option value="technology">Technology</option>
                <option value="famous-quotes">Famous Quotes</option>
                <option value="history">History</option>
                <option value="civil-rights">Civil rights</option>
            </select>

            <div
                style={{
                    width: 400,
                    minHeight: 50,
                    border: "2px solid black",
                    padding: 10,
                }}
            >
                <p>{quote && quote.content}</p>
                <p style={{ textAlign: "right" }}>By: {quote && quote.author}</p>
            </div>
        </div>
    );
};

export default QuoteCard;