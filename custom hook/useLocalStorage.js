function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    
    if (initialValue instanceof Function) return initialValue();

    return initialValue;
}

function useLocalStorage(key, initialValue) {
    const [value, setValue] = React.useState(() => {
        return getSavedValue(key, initialValue);
    });

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}