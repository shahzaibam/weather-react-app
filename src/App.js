import React from "react";
import "./index.css"

const api = {
  key : "17adf829f7057ada2efec64db13762b7",
  base : "https://api.openweathermap.org/data/2.5"
};

function App() {
  return (
    <div className="app">
      <main>
        <input 
          type="text"
          className="search-bar"
          placeholder="Search here..."
        />
      </main>
    </div>
  );
}

export default App;
