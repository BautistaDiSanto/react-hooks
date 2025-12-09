const CustomHookExample =() => {
    const [name, setName] = useLocalStorage('name', '');
    useUpdateLoger(name);

    return (
        <>
            <h1> Custom Hook Example. </h1>
            <br />
            <h2> save to local storage:</h2>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </>
    )
}