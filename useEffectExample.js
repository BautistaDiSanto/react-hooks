const UseEffectExample = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    
    function handleResize() {
        setWindowWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        // removes the event listener on cleanup or unmount 
        // so we don't create memory leaks by adding multiple listeners and never removing them
        // this is especially important when dealing with components that mount and unmount frequently
        return () => {
            console.log('this will run at unmount and before next useEffect call');
            window.removeEventListener('resize', handleResize);
        };
    // by leaving the dependency array empty, this useEffect will only run once on mount
    // by not adding a dependency array, it would run on every render
    }, []);
    

    return (
        <>
            <div>{windowWidth}</div>
        </>
    );
}

// use API example
// const UseEffectExample = () => {
//     const [resourceType, setResourceType] = React.useState('posts');
//     const [items, setItems] = React.useState([]);

//     React.useEffect(() => {
//         console.log('--------------------------------------');
//         console.log('Resource type changed to:', resourceType);
//         fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//             .then(response => response.json())
//             .then(json => setItems(json));

//     }, [resourceType]);

//     return (
//         <>
//             <h1> Use State Example </h1>
//             <br />
//             <button onClick={() => setResourceType('posts')}>Posts</button>
//             <button onClick={() => setResourceType('users')}>Users</button>
//             <button onClick={() => setResourceType('comments')}>Comment</button>
//             <div>
//                 <h1>{`${resourceType}: ${items.length}`}</h1>
//                 {items.map(item => {
//                     return <pre key={item.id}>{JSON.stringify(item)}</pre>
//                 })}
//             </div>
//         </>
//     );
// }