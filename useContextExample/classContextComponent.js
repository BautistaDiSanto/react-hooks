class ClassContextComponent extends React.Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#333' : '#CCC',
            color: dark ? '#CCC' : '#333',
            padding: '10px',
            margin: '10px'
        };
    };

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}> class theme</div>
                }}
            </ThemeContext.Consumer>
        );
    }
}