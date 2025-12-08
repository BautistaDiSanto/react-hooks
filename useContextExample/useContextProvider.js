const ThemeContext = React.createContext();

const UseContextExample = () => {
    const [darkTheme, setDarkTheme] = React.useState(true);

    function toggleTheme() {
        setDarkTheme(prevTheme => !prevTheme);
    }

    return (
        <>
            <h1> Use Context Example </h1>
            <br />
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={() => toggleTheme()}>
                    Change Theme
                </button>
                <ClassContextComponent/>
                <FunctionContextComponent/>
            </ThemeContext.Provider>
        </>
    );
}