import React, { useEffect } from "react";
import { useAtom } from "jotai";
import WeatherGraph from "./WeatherGraph";
import {
  inputValueAtom,
  selectedDayAtom,
  hourlyDataAtom,
  yAxisMinAtom,
  yAxisMaxAtom,
  weatherDataAtom,
} from "../../atoms/bauhausAtoms";
import { handleInputChange } from "../../utils/Bauhaus/handleInputChange";
import { handleSubmit } from "../../utils/Bauhaus/handleSubmit";
import { fetchWeatherData } from "../../utils/Bauhaus/fetchWeatherData";
import {
  PrecipitationLevel,
  Sunny,
  UvLevel,
  WindLevel,
} from "../../assets/svgs/Bauhaus/bauhausSvgs";

const WeatherDisplay = () => {
  const [inputValue, setInputValue] = useAtom(inputValueAtom);
  const [selectedDay, setSelectedDay] = useAtom(selectedDayAtom);
  const [hourlyData, setHourlyData] = useAtom(hourlyDataAtom);
  const [yAxisMin, setYAxisMin] = useAtom(yAxisMinAtom);
  const [yAxisMax, setYAxisMax] = useAtom(yAxisMaxAtom);
  const [weatherData, setWeatherData] = useAtom(weatherDataAtom);

  useEffect(() => {
    fetchWeatherData(
      "Los Angeles",
      setWeatherData,
      setSelectedDay,
      setHourlyData,
      setYAxisMin,
      setYAxisMax
    );
  }, [setWeatherData, setSelectedDay, setHourlyData, setYAxisMin, setYAxisMax]);

  return (
    <div className="w-screen lg:w-2/3 h-full bg-yellow-300 flex flex-col items-center justify-center lg:items-start lg:justify-start">
      <div className="flex w-full h-1/5 items-center pt-28 lg:pt-32 lg:pl-10 items-center justify-center lg:items-start lg:justify-start">
        <div className="relative mx-2">
          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                inputValue,
                fetchWeatherData,
                setWeatherData,
                setSelectedDay,
                setHourlyData,
                setYAxisMin,
                setYAxisMax
              )
            }
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(e, setInputValue)}
              className="bg-transparent py-2 outline-none text-black border-b-2 border-black placeholder-black lg:pt-0 text-center lg:text-start text-4xl lg:text-2xl lg:text-4xl font-medium"
              placeholder="LOS ANGELES"
              style={{
                width: `${Math.max(inputValue.length, 10)}ch`,
                minWidth: "12ch",
              }}
            />
          </form>
        </div>
      </div>

      <div className="flex items-center mb-2 items-start justify-start">
        <h1 className="text-4xl lg:text-2xl lg:text-4xl flex items-start justify-start lg:pl-12">
          {selectedDay
            ? selectedDay.day.condition.text.toUpperCase() +
              ", " +
              selectedDay.hour[new Date().getHours()].temp_c +
              "°C"
            : "LOADING..."}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mt-4 w-3/4 lg:w-full h-1/2">
        <div className="flex items-center justify-center w-full">
          {/* TODO: Change SVG and bg-color based on weather condition in API res */}
          <Sunny />
        </div>
      </div>

      <div className="flex flex-row items-center justify-center w-full h-1/6 space-x-16 mb-4 lg:mt-6">
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-transparent rounded-full">
            <WindLevel />
          </div>
          <span>
            {selectedDay ? `${selectedDay.day.maxwind_mph} mph` : "Loading..."}
          </span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-transparent rounded-full">
            <PrecipitationLevel />
          </div>
          <span>
            {selectedDay ? `${selectedDay.day.avghumidity}%` : "Loading..."}
          </span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-transparent rounded-full">
            <UvLevel />
          </div>
          <span>{selectedDay ? `${selectedDay.day.uv}` : "Loading..."}</span>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-1/3">
        <WeatherGraph
          hourlyData={hourlyData}
          yAxisMin={yAxisMin}
          yAxisMax={yAxisMax}
        />
      </div>
    </div>
  );
};

export default WeatherDisplay;
