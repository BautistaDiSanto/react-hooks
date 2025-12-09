// // import React, { useState } from "react";
// import UseMemoExample from "./useMemoExample";
// import UseReducerExample from "./useReducerExample";

const PAGES = {
  HOME: "home",
  USE_STATE: 'UseStateExample',
  USE_EFFECT: 'UseEffectExample',
  USE_MEMO: 'UseMemoExample',
  USE_REF: 'UseRefExample',
  USE_CONTEXT: 'UseContextExample',
  USE_REDUCER: 'UseReducerExample',
  USE_CALLBACK: 'UseCallbackExample',
  CUSTOM_HOOK: 'CustomHookExample',
};

function App() {
  const [currentPage, setCurrentPage] = React.useState(PAGES.HOME);

    const renderPage = () => {
      switch (currentPage) {
        case PAGES.USE_STATE:
          return <UseStateExample />;
        case PAGES.USE_EFFECT:
          return <UseEffectExample />;
        case PAGES.USE_MEMO:
          return <UseMemoExample />;
        case PAGES.USE_REF:
          return <UseRefExample />;
        case PAGES.USE_CONTEXT:
          return <UseContextExample />;
        case PAGES.USE_REDUCER:
          return <UseReducerExample />;
        case PAGES.USE_CALLBACK:
          return <UseCallbackExample />;
        case PAGES.CUSTOM_HOOK:
          return <CustomHookExample />;
        case PAGES.HOME:
          return <Home />;
        default:
          return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage(PAGES.HOME)}>HOME</button>
        <button onClick={() => setCurrentPage(PAGES.USE_STATE)}>useState</button>
        <button onClick={() => setCurrentPage(PAGES.USE_EFFECT)}>useEffect</button>
        <button onClick={() => setCurrentPage(PAGES.USE_MEMO)}>useMemo</button>
        <button onClick={() => setCurrentPage(PAGES.USE_REF)}>useRef</button>
        <button onClick={() => setCurrentPage(PAGES.USE_CONTEXT)}>useContext</button>
        <button onClick={() => setCurrentPage(PAGES.USE_REDUCER)}>useReducer</button>
        <button onClick={() => setCurrentPage(PAGES.USE_CALLBACK)}>useCallback</button>
        <button onClick={() => setCurrentPage(PAGES.CUSTOM_HOOK)}>CustomHook</button>
      </nav>
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

// 2. Render the App component to the DOM
// Modern React 18+ syntax:
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);