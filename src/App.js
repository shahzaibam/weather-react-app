import React, { useState } from "react";
import "./index.css"

const api = {
  key: "17adf829f7057ada2efec64db13762b7",
  base: "https://api.openweathermap.org/data/2.5"
};

function App() {

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => setWeather(result))
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = [d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">

          <input
            type="text"
            className="search-bar"
            placeholder="Search here..."
          />

        </div>
        <div className="location-box">
          <div className="location">
            New York City, US
          </div>
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="weather-box">
            <div className="temp">15ºc</div>
            <div className="temp">Sunny</div>

          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
