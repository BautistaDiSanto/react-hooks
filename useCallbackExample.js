// only use in extremely weird cases where you need to memoize a function definition
const UseCallbackExample = () => {
  const [number, setNumber] = React.useState(1);
  const [dark, setDark] = React.useState(false);

  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
  // the difference with useMemo is that useMemo returns the result of the function, while useCallback returns the function itself.
  // this means that useCallback is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
  const getItems = React.useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
  };

  return (
    <>
      <h1> Use Callback Example </h1>
      <br/>
      <div style={themeStyles}>
        <input 
          type="number" 
          value={number} 
          onChange={e => setNumber(parseInt(e.target.value))} 
        />
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <List getItems={getItems} />
      </div>
    </>
  );
}

const List = (({ getItems }) => {
  const [items, setItems] = React.useState([]);
  
  React.useEffect(() => {
    setItems(getItems());
    console.log('updating items');
  }, [getItems]);

  return items.map(item => <div key={item}>{item}</div>);
});