function Home() {
    return (
        <div>
            <h1>Hook</h1>
            <h2>1 Call Hooks only at the top level</h2>
            <p>Hooks must always run in the same order each time a component renders.
            This means: never inside conditionals, loops, or nested functions.
            Keep your Hook calls right inside the main body of your component or custom Hook.</p>
            <h2>2 Call Hooks only inside React functions</h2>
            <p>Hooks are designed specifically for React`s rendering process.
            You can use them inside:</p>
            <ul>
                <li> Function components</li>
                <li> Custom hooks</li>
            </ul>
            <p>Do not use them in regular JavaScript functions or class components.</p>
           <h2> 3 Custom hooks must start with “use”</h2>
                <p>When you create your own Hook, its name must begin with “use”.
                This allows React and linters to detect improper usage automatically.</p>
            <h2>4 Effects must clean up correctly</h2>
                <p>Whenever a Hook manages something that needs cleanup — like subscriptions or timers — the cleanup must be a function. This keeps components predictable and memory clean.</p>
            <h2>5 Dependencies must include everything the effect uses</h2>
                <p>When using hooks that depend on changing values (like effects, memos, or callbacks), always list every reactive value in the dependency array. This prevents bugs caused by outdated (“stale”) data.</p>
            <h2>6 Keep dependencies stable when needed</h2>
                <p>Passing newly created objects or inline functions can cause effects to run more often than intended. When stability is important, wrap values in a Hook designed to preserve identity, like memoization or callbacks.</p>
            <h2>7 Reducers must stay pure</h2>
                <p>If you use the reducer pattern for state, the reducer function should never cause side effects, perform async tasks, or mutate values directly. It must only calculate the next state.</p>
            <h2>8 Ref values do not trigger re-renders</h2>
                <p>Refs hold mutable values that can change without updating the UI.
                They`re ideal for storing data that survives across renders but doesn`t need to be shown.</p>
        </div>
    );
}