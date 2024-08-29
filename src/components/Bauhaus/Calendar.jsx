import React from "react";
import {
  addDays,
  format,
  startOfToday,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import { useAtom } from "jotai";
import {
  weatherDataAtom,
  selectedDayAtom,
  hourlyDataAtom,
  yAxisMinAtom,
  yAxisMaxAtom,
} from "../../atoms/bauhausAtoms";
import { handleSelectDate } from "../../utils/Bauhaus/handleSelectDate";
import ColorGrid from "./ColorGrid";

const Calendar = () => {
  const today = startOfToday();
  const tomorrow = addDays(today, 1);
  const dayAfterTomorrow = addDays(today, 2);

  const [weatherData] = useAtom(weatherDataAtom);
  const [, setSelectedDay] = useAtom(selectedDayAtom);
  const [, setHourlyData] = useAtom(hourlyDataAtom);
  const [, setYAxisMin] = useAtom(yAxisMinAtom);
  const [, setYAxisMax] = useAtom(yAxisMaxAtom);

  const isWithinNextTwoDays = (date) => {
    return (
      date.getTime() === today.getTime() ||
      date.getTime() === tomorrow.getTime() ||
      date.getTime() === dayAfterTomorrow.getTime()
    );
  };

  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
  const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="hidden lg:block w-1/3 h-full flex flex-col items-center justify-center">
      <div className="w-full h-1/2 flex flex-col items-center justify-center bg-red-500 relative">
        <h1 className="text-lg h-16 absolute top-0 left-0 right-0 flex justify-center items-center pl-2">
          {format(today, "MMMM").toUpperCase()}
        </h1>
        <div className="pt-16 w-full h-full">
          <div className="grid grid-cols-7 gap-0 w-full h-full">
            {calendarDays.map((date) => {
              const isClickable = isWithinNextTwoDays(date);
              const isToday = date.getTime() === today.getTime();

              return (
                <div
                  key={date}
                  className={`pl-2 pt-2 hover:bg-blue-500 transition-all duration-200 ease-in-out 
                    ${isClickable ? "cursor-pointer" : ""} 
                    ${isToday ? "text-white bg-black" : "bg-yellow-50 "}`}
                  style={{ pointerEvents: isClickable ? "auto" : "none" }}
                  onClick={() =>
                    isClickable &&
                    handleSelectDate(
                      date,
                      weatherData,
                      setSelectedDay,
                      setHourlyData,
                      setYAxisMin,
                      setYAxisMax
                    )
                  }
                >
                  {format(date, "d")}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ColorGrid />
    </div>
  );
};

export default Calendar;
