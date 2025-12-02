const UseMemoExample = () => {
  const [number, setNumber] = React.useState(0);
  const [dark, setDark] = React.useState(false);

  // const doubleNumber = slowFunction(number);
  const doubleNumber = React.useMemo(() => {
    slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
    padding: '10px',
    margin: '10px'
  };

  return (
    <>
      <h1> Use Memo Example </h1>
      <br/>
      <input 
        type="number" 
        value={number} 
        onChange={e => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>
        The number is: {number}
      </div>
      <div>
        The doubled number is: {doubleNumber}
      </div>
    </>
  );
}

function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}