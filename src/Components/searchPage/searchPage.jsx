import React, { useState, useContext } from "react";
import { WeatherContext } from "../../Helper/Context";

const SearchPage = () => {
  const api = {
    key: "ea850cb916bec38694127de991dfde74",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const { weather, setWeather } = useContext(WeatherContext);
  const getInputValue = () => {
    if (query) {
      fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          result.cod !== "404" ? setWeather(result) : setError(result.message);
          setQuery("");
        });
    }
  };
  return (
    <div>
      <div className="shadow-md rounded-xl mx-5 sm:px-8 sm:pt-6 sm:pb-8 sm:mb-4 sm:mt-4 bg-slate-800">
        <div className="pt-8 pb-10 pr-20 pl-20">
          <p className="text-white text-center">Search For Location</p>
          <form>
            <input
              className={`border appearance-none  block w-full mt-5 bg-gray-200 text-gray-700  rounded-lg py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                error && "border-red-600"
              }`}
              id="grid-first-name"
              type="text"
              placeholder="City"
              onChange={(e) => setQuery(e.target.value)}
            />
            {error && <p className="text-red-500 text-s">{error}</p>}
            <button
              class="mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 w-full hover:bg-teal-700 border-none text-sm border-4 text-white py-2 px-2 rounded-xl"
              type="button"
              onClick={getInputValue}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
