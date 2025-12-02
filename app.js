// // import React, { useState } from "react";
// import UseMemoExample from "./useMemoExample";
// import UseReducerExample from "./useReducerExample";

const PAGES = {
  HOME: "home",
  USE_MEMO: 'UseMemoExample',
  USE_REDUCER: 'UseReducerExample',
};

function App() {
  const [currentPage, setCurrentPage] = React.useState(PAGES.HOME);

    const renderPage = () => {
      switch (currentPage) {
        case PAGES.USE_MEMO:
          return <UseMemoExample />;
        case PAGES.USE_REDUCER:
          return <UseReducerExample />;
        case PAGES.HOME:
        default:
          return <h1>React Hooks Showcase Home</h1>;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage(PAGES.HOME)}>HOME</button>
        <button onClick={() => setCurrentPage(PAGES.USE_MEMO)}>useMemo Example</button>
        <button onClick={() => setCurrentPage(PAGES.USE_REDUCER)}>useMemo Example</button>
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