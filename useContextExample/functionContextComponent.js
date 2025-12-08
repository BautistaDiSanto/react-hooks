const ThemeContext = React.createContext();

const FunctionContextComponent = () => {
    const darkTheme = React.useContext(ThemeContext);

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '10px',
        margin: '10px'
    };

    return (
        <>
            <div style={ {...themeStyles} }>
                function theme
            </div>
        </>
    );
}