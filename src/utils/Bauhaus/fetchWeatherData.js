import axios from 'axios';

export const fetchWeatherData = async (
  city,
  setWeatherData,
  setSelectedDay,
  setHourlyData,
  setYAxisMin,
  setYAxisMax
) => {
  try {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
    );
    const forecastDays = response.data.forecast.forecastday;

    if (Array.isArray(forecastDays)) {
      setWeatherData(forecastDays);
      const todayData = forecastDays[0];
      setSelectedDay(todayData);
      setHourlyData(todayData.hour);
      setYAxisMin(todayData.day.mintemp_c - 5);
      setYAxisMax(todayData.day.maxtemp_c + 5);
    } else {
      console.error("Weather data is not an array:", forecastDays);
    }
  } catch (error) {
    console.error("Error fetching weather data", error);
  }
};
