export const handleSubmit = (
  e,
  inputValue,
  fetchWeatherData,
  setWeatherData,
  setSelectedDay,
  setHourlyData,
  setYAxisMin,
  setYAxisMax
) => {
  e.preventDefault();

  fetchWeatherData(
    inputValue,
    setWeatherData,
    setSelectedDay,
    setHourlyData,
    setYAxisMin,
    setYAxisMax
  );
};
