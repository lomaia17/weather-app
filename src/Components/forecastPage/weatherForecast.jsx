import React, { useContext } from "react";
import warmBg from "../../imgs/warm-bg.jpg";
import coldBg from "../../imgs/cold.jpg";
import { WeatherContext } from "../../Helper/Context";
const WeatherForecast = () => {
  const { weather, setWeather } = useContext(WeatherContext);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let today = new Date();
  let forecast = [];
  for (let i = 1; i < 6; i++) {
    forecast.push(weather.list[i]);
  }
  console.log(forecast);
  return (
    <div class="w-11/12 lg:w-auto grid overflow-hidden grid-cols-3 grid-rows-2 gap-2 shadow-md rounded-xl lg:pr-4  pb-0 mt-4 bg-slate-800 text-white">
      <div
        className="col-start-1 h-32 col-end-7 lg:col-end-2 box lg:row-span-2 bg-cover lg:w-56 lg:h-80 rounded-xl"
        style={{
          background: `linear-gradient( rgba(89, 89, 205, 0.5), rgba(89, 89, 205, 0.5) ), url(${
            weather?.list[0]?.weather[0]?.id === "800" ? warmBg : coldBg
          })`,
        }}
      >
        <div className="flex flex-row justify-between lg:flex-col p-4 text-xl">
          <div>
            <p className="font-semibold text-2xl">{days[today.getDay()]}</p>
            <p className="pt-2">
              {months[today.getMonth()]}, {[today.getDate()]}th
            </p>
            <p className="flex items-center pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 26 26"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {weather?.city?.name}
            </p>
          </div>
          <div className="lg:mt-9">
            <img
              className="lg:h-24 lg:w-24"
              src={`https://openweathermap.org/img/wn/${weather?.list[0]?.weather[0]?.icon}@2x.png`}
              alt="weather-avatar"
              style={{ marginLeft: "-25px" }}
            />
            <p className="font-bold lg:text-2xl">
              {weather?.list[0]?.main?.temp}°C
            </p>
            <p className="hidden lg:block">
              {weather?.list[0]?.weather[0]?.main}
            </p>
          </div>
        </div>
      </div>
      <div class="box col-start-1 mr-8 col-end-7 lg:col-start-2 lg:col-span-2 pl-5 pt-2">
        <div className="flex justify-between">
          <p className="text-m font-bold">Feels Like</p>
          <p>{weather?.list[0]?.main?.feels_like}°C</p>
        </div>
        <div className="flex justify-between">
          <p className="text-m font-bold">HUMIDITY</p>
          <p>{weather?.list[0]?.main?.humidity}%</p>
        </div>
        <div className="flex justify-between">
          <p className="text-m font-bold">WIND</p>
          <p>{weather?.list[0]?.wind?.speed} km/h</p>
        </div>
        <div className="flex justify-between">
          <p className="text-m font-bold">AIR PRESSURE</p>
          <p>{weather?.list[0]?.main?.pressure}mb</p>
        </div>
        <div className="flex justify-between">
          <p className="text-m font-bold">MAX TEMP</p>
          <p>{weather?.list[0]?.main?.temp_max}°C</p>
        </div>
        <div className="flex justify-between">
          <p className="text-m font-bold">MIN TEMP</p>
          <p>{weather?.list[0]?.main?.temp_min}°C</p>
        </div>
      </div>
      <div class="box col-start-1 col-end-7 lg:col-start-2 lg:col-span-2 bg-slate-700  lg:px-2 my-5 ml-4 mr-4 lg:mr-0 rounded-2xl">
        <div className="flex justify-between">
          {forecast.map((day, index) => {
            return (
              <div className="flex flex-col justify-center items-center rounded-xl cursor-pointer">
                <img
                  className="h-14 w-14"
                  src={`https://openweathermap.org/img/wn/${day?.weather[0].icon}@2x.png`}
                  alt="weather-avatar"
                />
                <p>
                  {today.getDay() + index + 1 > 6
                    ? days[Math.abs(6 - (today.getDay() + index))].slice(0, 3)
                    : days[today.getDay() + index + 1].slice(0, 3)}
                </p>
                <p className="pt-1">{Math.round(day?.main?.temp)}°C</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherForecast;
