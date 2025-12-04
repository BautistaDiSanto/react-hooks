const UseContextExample = () => {
    const [name, setName] = React.useState('');
    const inputRef = React.useRef();

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <h1> Use Ref Example </h1>
            <br />
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <p>Your name is: {name}</p>
            <button onClick={focus}>Focus Input</button>
        </>
    );
}