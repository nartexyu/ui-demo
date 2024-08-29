export const handleSelectDate = (
  date,
  weatherData,
  setSelectedDay,
  setHourlyData,
  setYAxisMin,
  setYAxisMax
) => {
  if (!Array.isArray(weatherData)) {
    console.error("weatherData is not an array", weatherData);
    return;
  }

  const selectedData = weatherData.find((item) => {
    const apiDate = new Date(item.date);
    const localApiDate = new Date(
      apiDate.getUTCFullYear(),
      apiDate.getUTCMonth(),
      apiDate.getUTCDate()
    );
    const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return localApiDate.toDateString() === localDate.toDateString();
  });

  if (selectedData) {
    setSelectedDay(selectedData);
    setHourlyData(selectedData.hour);
    setYAxisMin(selectedData.day.mintemp_c - 5);
    setYAxisMax(selectedData.day.maxtemp_c + 5);
  } else {
    console.error("No matching date found in weatherData");
  }
};
