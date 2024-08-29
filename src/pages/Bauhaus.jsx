import React from "react";
import Calendar from "../components/Bauhaus/Calendar";
import WeatherDisplay from "../components/Bauhaus/WeatherDisplay";

const Bauhaus = () => {
  return (
    <div className="flex h-screen">
      <WeatherDisplay />
      <Calendar />
    </div>
  );
};

export default Bauhaus;
