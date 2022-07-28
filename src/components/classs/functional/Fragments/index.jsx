const Fragments = () => {

    const array = [1, 2, 3, 4, 5]
    return (<div>{
        array.map((element) => {
            return <p>broj {element}</p>;
            <p>{element} broj</p>
        })}</div>
    );
}

export default Fragments