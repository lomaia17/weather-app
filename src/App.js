import "./App.css";
import { useState } from "react";
import SearchPage from "./Components/searchPage/searchPage";
import WeatherForecast from "./Components/forecastPage/weatherForecast";

import { WeatherContext } from "./Helper/Context";

function App() {
  const [weather, setWeather] = useState(null);

  const returnToHomePage = () => {
    setWeather(null);
  };

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      <div className="flex justify-center items-center flex-col ">
        <h1
          className="text-white text-2xl mt-10 mb-10 cursor-pointer"
          onClick={returnToHomePage}
        >
          Weather <span className="font-bold">Forecast ☀️</span>
        </h1>
        {!weather && <SearchPage />}
        {weather && <WeatherForecast />}
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
