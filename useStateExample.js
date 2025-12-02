const UseStateExample = () => {
    const [number, setNumber] = React.useState(0);

    function increment() {
        setNumber(number + 1);
    }

    function decrement() {
        setNumber(number - 1);
    }

    return (
        <>
            <h1> Use State Example </h1>
            <br />
            <button onClick={decrement}>-</button>
            <span>{number}</span>
            <button onClick={increment}>+</button>
        </>
    );
}