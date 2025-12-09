function useUpdateLoger(value) {
    React.useEffect(() => {
        console.log("Value changed: ", value);
    }, [value]);
};