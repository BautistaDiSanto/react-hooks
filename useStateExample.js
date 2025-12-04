const UseStateExample = () => {
    // recommended use one useState per value being tracked
    const [number, setNumber] = React.useState(() => {
        // if this function is defined outside of useState,
         // it will run on every render instead of just the initial render
         console.log('Initial state function running');
         return 0;
    });

     const [theme, setTheme] = React.useState('light');

     function increment() {
         // setState recieves a previous state value as an argument to ensure the most up-to-date value is used when updating state
         setNumber(prevCount => prevCount + 1);
         setTheme(prevTheme => prevTheme = 'dark');
     }

     function decrement() {
         setNumber(prevCount => prevCount - 1);
         setTheme(prevTheme => prevTheme = 'light');
     }

     return (
         <>
             <h1> Use State Example </h1>
             <br />
             <button onClick={decrement}>-</button>
             <span>{`${number} ${theme}`}</span>
             <button onClick={increment}>+</button>
         </>
     );
 }

// const UseStateExample = () => {
//     const [object, setObject] = React.useState({count: 0, otherValue: 'other value'});
//     console.log(object);

//     function increment() {
//         // if we don't spread the previous object, we lose all other properties not being updated
//         setObject(prevCount => {
//             return { count: prevCount.count + 1 }
//         });
//     }

//     function decrement() {
//         setObject(prevCount => {
//             return { ...prevCount, count: prevCount.count - 1 }
//         });
//     }

//     return (
//         <>
//             <h1> Use State Example </h1>
//             <br />
//             <button onClick={decrement}>-</button>
//             <span>{object.count}</span><span>{object.otherValue}</span>
//             <button onClick={increment}>+</button>
//         </>
//     );
// }