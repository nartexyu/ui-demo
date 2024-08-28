import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as echarts from 'echarts';
import { addDays, format, startOfToday, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

// Calendar component that renders a clickable calendar for date selection, restricted to today and the next two days because of API restrictions (free is forecast +2 days, paid is +- 14)
const Calendar = ({ onSelectDate }) => {
  const today = startOfToday();
  const tomorrow = addDays(today, 1);
  const dayAfterTomorrow = addDays(today, 2);

  // Check if a date is within today or the next two days
  const isWithinNextTwoDays = (date) => {
      return date.getTime() === today.getTime() || 
             date.getTime() === tomorrow.getTime() || 
             date.getTime() === dayAfterTomorrow.getTime();
  };

  // Render the calendar with clickable dates for today and the next two days
  const renderCalendar = () => {
      const monthStart = startOfMonth(today);
      const monthEnd = endOfMonth(monthStart);
      const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
      const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });
      const calendarDays = eachDayOfInterval({ start: startDate, end: endDate });

      return calendarDays.map((date) => {
          const isClickable = isWithinNextTwoDays(date);
          const isToday = date.getTime() === today.getTime();

          return (
              <div
                  key={date}
                  className={`pl-2 pt-2 hover:bg-blue-500 transition-all duration-200 ease-in-out ${isClickable ? 'cursor-pointer' : ''} ${isToday ? 'text-white bg-black' : 'bg-yellow-50 '}`}
                  style={{ pointerEvents: isClickable ? 'auto' : 'none' }} 
                  onClick={() => isClickable && onSelectDate(date)} 
              >
                  {format(date, 'd')} 
              </div>
          );
      });
  };

  return (
      <div className="grid grid-cols-7 gap-0 w-full h-full">
          {renderCalendar()}
      </div>
  );
};

// WeatherGraph component that renders a line chart displaying hourly weather data for a specific day
const WeatherGraph = ({ hourlyData, yAxisMin, yAxisMax }) => {
  // Reference to the chart container
  const chartRef = React.useRef(null); 

  useEffect(() => {
      if (chartRef.current && hourlyData.length > 0) {
          const chart = echarts.init(chartRef.current); 

          // Center the current time to +-12 hours purely for even aesthetics
          const currentTime = new Date().getHours(); 
          const hoursBefore = 12; 
          const hoursAfter = 13; 

          const currentHourIndex = hourlyData.findIndex(
              (hour) => new Date(hour.time).getHours() === currentTime
          );

          let previousHours = [];
          let nextHours = [];

          // Get previous 12 hours of data, handling wrap-around cases at the start of the array
          for (let i = 1; i <= hoursBefore; i++) {
              const index = (currentHourIndex - i + hourlyData.length) % hourlyData.length;
              previousHours.unshift(hourlyData[index]);
          }

          // Get next 13 hours of data, handling wrap-around cases at the end of the array
          for (let i = 0; i < hoursAfter; i++) {
              const index = (currentHourIndex + i) % hourlyData.length;
              nextHours.push(hourlyData[index]);
          }

          const displayedHours = [...previousHours, ...nextHours];

          const option = {
              xAxis: {
                  type: 'category',
                  data: displayedHours.map((hour, index) => {
                      if (!hour.time) return ''; 
                      const time = new Date(hour.time);
                      return format(time, index === hoursBefore ? "'NOW'" : 'ha'); 
                  }),
                  axisLabel: {
                      show: true,
                      color: '#000',
                      align: 'center',
                      margin: 0,
                  },
                  axisLine: {
                      show: false,
                  },
                  axisTick: {
                      show: false,
                  },
              },
              yAxis: {
                  type: 'value',
                  min: yAxisMin, 
                  max: yAxisMax,
                  axisLine: { show: false },
                  splitLine: { show: false },
                  axisLabel: { show: false },
              },
              grid: {
                  left: '5%',
                  right: '5%',
                  bottom: '20%',
                  top: '20%',
                  containLabel: true,
              },
              series: [
                  {
                      data: displayedHours.map((hour, index) => ({
                          value: hour.temp_c,
                          itemStyle: {
                              color: '#000',
                          },
                          label: {
                              show: index === hoursBefore,
                              position: 'top',
                              formatter: `${hour.temp_c}°`,
                              color: '#000',
                          },
                      })),
                      type: 'line',
                      smooth: true,
                      lineStyle: {
                          width: 2,
                          color: '#000',
                      },
                      symbol: 'none',
                      markPoint: {
                          data: [
                              {
                                  coord: [hoursBefore, hourlyData[currentHourIndex].temp_c],
                                  symbol: 'circle',
                                  symbolSize: 12,
                                  label: {
                                      show: true,
                                      position: 'top',
                                      formatter: `${hourlyData[currentHourIndex].temp_c}°`,
                                      color: '#000',
                                  },
                                  itemStyle: {
                                      color: '#000',
                                  },
                              },
                          ],
                      },
                      emphasis: {
                          itemStyle: {
                              color: '#000',
                              symbol: 'circle',
                              symbolSize: 10,
                          },
                          label: {
                              show: true,
                              position: 'top',
                              formatter: (params) => `${params.value}°C`,
                              color: '#000',
                          },
                      },
                  },
              ],
              tooltip: {
                  trigger: 'axis',
                  formatter: (params) => {
                      const data = params[0].data;
                      return `${data.value}°C`; 
                  },
                  axisPointer: {
                      type: 'none',
                  },
              },
              backgroundColor: 'transparent',
          };

          chart.setOption(option);
      }
  }, [hourlyData]);

  return <div ref={chartRef} className='w-[100%] lg:w-[50%] h-[100%]'></div>; 
};

// Main component
const Bauhaus = () => {
  const [inputValue, setInputValue] = useState(''); 
  const [weatherData, setWeatherData] = useState(null); 
  const [selectedDay, setSelectedDay] = useState(null); 
  const [hourlyData, setHourlyData] = useState([]); 
  const [yAxisMin, setYAxisMin] = useState(null);
  const [yAxisMax, setYAxisMax] = useState(null);

  // Fetch weather data for Los Angeles as default on component mount
  useEffect(() => {
      fetchWeatherData('Los Angeles');
  }, []);

  // Function to fetch weather data for the specified city from the weather API
  const fetchWeatherData = async (city) => {
      try {
          const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
          const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`); 
          setWeatherData(response.data.forecast.forecastday); 
          
          const todayData = response.data.forecast.forecastday[0]; 
            setSelectedDay(todayData);
            setHourlyData(todayData.hour);

            // Setting Y-axis min and max based on today's temperatures
            const minTemp = todayData.day.mintemp_c;
            const maxTemp = todayData.day.maxtemp_c;

            setYAxisMin(minTemp - 5); 
            setYAxisMax(maxTemp + 5);
      } catch (error) {
          console.error("Error fetching weather data", error);
      }
  };

  // Handle input changes and convert city name to uppercase.
  const handleInputChange = (e) => {
      setInputValue(e.target.value.toUpperCase());
  };

  // Handle date selection from the calendar and update the displayed weather data.
  const handleSelectDate = (date) => {
      const selectedData = weatherData.find((item) => {
          const apiDate = new Date(item.date); 
          const localApiDate = new Date(apiDate.getUTCFullYear(), apiDate.getUTCMonth(), apiDate.getUTCDate());
          const localDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

          return localApiDate.toDateString() === localDate.toDateString();
      });
      setSelectedDay(selectedData); 
      setHourlyData(selectedData.hour); 
      setYAxisMin(selectedData.day.mintemp_c - 5);
      setYAxisMax(selectedData.day.maxtemp_c + 5);
  };

  // TODO: Change SVG type based on API weather condition
  // 1. Create a `getWeatherIcon(condition)` function:
  //    - Map weather conditions (e.g., 'sunny', 'rain', 'snow') to specific SVG icons and background colors.
  // 2. Replace the current SVG in the JSX with `getWeatherIcon(selectedDay.day.condition.text)`:
  //    - Use the function to dynamically render the correct icon based on the weather condition.
  // 3. Ensure the SVG updates when the weather condition changes (e.g., on date selection or time).

  return (
    <div className="flex h-screen">
        <div className="w-screen lg:w-2/3 h-full bg-yellow-300 flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <div className="flex w-full h-1/5 items-center pt-28 lg:pt-32 lg:pl-10 items-center justify-center lg:items-start lg:justify-start" >
                <div className="relative mx-2">
                    <form onSubmit={(e) => { e.preventDefault(); fetchWeatherData(inputValue); }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="bg-transparent py-2 outline-none text-black border-b-2 border-black placeholder-black lg:pt-0 text-center lg:text-start text-4xl lg:text-2xl lg:text-4xl font-medium"
                            placeholder="LOS ANGELES"
                            style={{ width: `${Math.max(inputValue.length, 10)}ch`, minWidth: '12ch' }}
                        />
                </form>
                </div>
            </div>

            <div className="flex items-center mb-2 items-start justify-start">
                <h1 className="text-4xl lg:text-2xl lg:text-4xl flex items-start justify-start lg:pl-12">{selectedDay ? selectedDay.day.condition.text.toUpperCase() + ', ' + selectedDay.hour[new Date().getHours()].temp_c + '°C' : 'LOADING...'}</h1>
            </div>

            <div className="flex flex-col items-center justify-center  mt-4 w-3/4 lg:w-full h-1/2">
                <div className="flex items-center justify-center w-full">
                    <svg
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    fill="#000000"
                    width="400"
                    height="400"
                    >
                    <defs>
                        <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                        <circle cx="10" cy="10" r="5" fill="black" />
                        </pattern>
                    </defs>
                    <g>
                        <path
                        fill="url(#dots)"
                        d="M256,107.938c-81.781,0-148.063,66.281-148.063,148.063S174.219,404.063,256,404.063
                            c81.766,0,148.063-66.281,148.063-148.063S337.766,107.938,256,107.938z"
                        />
                        <path
                        fill="url(#dots)"
                        d="M256,61.656c17.016,0,30.828-13.813,30.828-30.828C286.828,13.797,273.016,0,256,0
                            c-17.031,0-30.828,13.797-30.828,30.828C225.172,47.844,238.969,61.656,256,61.656z"
                        />
                        <path
                        fill="url(#dots)"
                        d="M256,450.344c-17.031,0-30.828,13.797-30.828,30.828C225.172,498.188,238.969,512,256,512
                            c17.016,0,30.828-13.813,30.828-30.828C286.828,464.141,273.016,450.344,256,450.344z"
                        />
                        <path
                        fill="url(#dots)"
                        d="M118.563,118.578c12.047-12.047,12.047-31.547,0-43.594c-12.031-12.047-31.547-12.047-43.578,0
                            c-12.047,12.047-12.047,31.547,0,43.594C87.016,130.625,106.531,130.625,118.563,118.578z"
                        />
                        <path
                        fill="url(#dots)"
                        d="M393.422,393.422c-12.031,12.047-12.031,31.563,0,43.594c12.047,12.047,31.563,12.047,43.594,0
                            c12.031-12.031,12.047-31.547,0-43.594C424.984,381.391,405.469,381.391,393.422,393.422z"
                        />
                        <path
                        fill="url(#dots)"
                        d="M30.828,225.188C13.797,225.188,0,238.984,0,256c0,17.031,13.797,30.828,30.828,30.828
                            c17.016,0,30.813-13.797,30.813-30.828C61.641,238.984,47.844,225.188,30.828,225.188z"
                        />
                        <path
                        fill="url(#dots)"
                        d="M481.172,225.188c-17.016,0-30.828,13.781-30.828,30.813s13.813,30.828,30.828,30.828
                            C498.203,286.828,512,273.031,512,256C511.984,238.984,498.203,225.188,481.172,225.188z"
                        />
                        <path
                        fill="url(#dots)"
                        d="M74.984,393.422c-12.047,12.047-12.047,31.563,0,43.594c12.031,12.047,31.547,12.047,43.594,0
                            c12.031-12.031,12.031-31.547,0-43.578C106.531,381.391,87.016,381.391,74.984,393.422z"
                        />
                        <path
                        fill="url(#dots)"
                        d="M393.438,74.984c-12.047,12.047-12.047,31.547-0.016,43.594c12.047,12.047,31.563,12.047,43.594,0
                            c12.047-12.047,12.047-31.547,0-43.594C424.984,62.953,405.469,62.938,393.438,74.984z"
                        />
                    </g>
                    </svg>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center w-full h-1/6 space-x-16 mb-4 lg:mt-6">
                <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-transparent rounded-full">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    </div>
                    <span>{selectedDay ? `${selectedDay.day.maxwind_mph} mph` : 'Loading...'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-transparent rounded-full">
                    <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12,22c2.579,0,4-1.35,4-3.8,0-3.243-3.237-5.871-3.375-5.981a1,1,0,0,0-1.25,0C11.237,12.329,8,14.957,8,18.2,8,20.65,9.421,22,12,22Zm0-7.639A6.153,6.153,0,0,1,14,18.2c0,1.112-.335,1.8-2,1.8s-2-.688-2-1.8A6.153,6.153,0,0,1,12,14.361ZM6.625,2.219a1,1,0,0,0-1.25,0C5.237,2.329,2,4.957,2,8.2,2,10.65,3.421,12,6,12s4-1.35,4-3.8C10,4.957,6.763,2.329,6.625,2.219ZM6,10c-1.665,0-2-.688-2-1.8A6.153,6.153,0,0,1,6,4.361,6.153,6.153,0,0,1,8,8.2C8,9.312,7.665,10,6,10ZM18.625,2.219a1,1,0,0,0-1.25,0C17.237,2.329,14,4.957,14,8.2c0,2.45,1.421,3.8,4,3.8s4-1.35,4-3.8C22,4.957,18.763,2.329,18.625,2.219ZM18,10c-1.665,0-2-.688-2-1.8a6.153,6.153,0,0,1,2-3.839A6.153,6.153,0,0,1,20,8.2C20,9.312,19.665,10,18,10Z"></path>
                    </svg>
                    </div>
                    <span>{selectedDay ? `${selectedDay.day.avghumidity}%` : 'Loading...'}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-transparent rounded-full">
                    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000">
                        <g>
                        <rect y="254.042" width="512" height="32"></rect>
                        <path d="M227.984,335.426h-27.406c-1.297,0-2.156,0.859-2.156,2.156v91.492c0,17.485-9.719,27.406-24.39,27.406c-14.891,0-24.594-9.922-24.594-27.406v-91.492c0-1.297-0.874-2.156-2.156-2.156h-27.406c-1.297,0-2.156,0.859-2.156,2.156v90.625c0,36.477,23.297,56.329,56.313,56.329c32.797,0,56.109-19.852,56.109-56.329v-90.625C230.14,336.285,229.281,335.426,227.984,335.426z"></path>
                        <path d="M392.453,335.426h-27.844c-1.515,0-2.374,0.648-2.812,2.156l-28.485,96.242h-0.641l-29.343-96.242c-0.438-1.508-1.297-2.156-2.813-2.156h-28.046c-1.516,0-2.375,0.859-1.938,2.375l46.609,142.203c0.422,1.297,1.282,2.156,2.797,2.156h25.032c1.297,0,2.156-0.859,2.594-2.156l46.609-142.203C394.609,336.285,393.734,335.426,392.453,335.426z"></path>
                        <polygon points="355.523,145.91 378.281,171.301 417.609,75.386 317.969,104.019 338.648,127.082 245.5,202.714 29.625,27.465 13.718,47.058 245.5,235.23 "></polygon>
                        </g>
                    </svg>
                    </div>
                    <span>{selectedDay ? `${selectedDay.day.uv}` : 'Loading...'}</span>
                </div>
            </div>


            <div className='flex items-center justify-center w-full h-1/3'>
                <WeatherGraph hourlyData={hourlyData} yAxisMin={yAxisMin} yAxisMax={yAxisMax}/>
            </div>
        </div>

        <div className="hidden lg:block w-1/3 h-full flex flex-col items-center justify-center">
            <div className="w-full h-1/2 flex flex-col items-center justify-center bg-red-500 relative">
                <h1 className="text-lg h-16 absolute top-0 left-0 right-0 flex justify-center items-center pl-2">AUGUST</h1>
                <div className="pt-16 w-full h-full">
                    <Calendar onSelectDate={handleSelectDate} />
                </div>
            </div>
            <div className="w-full h-1/2 flex items-center justify-center bg-yellow-50">
                <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                    <div className="bg-blue-500 rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-br-full w-full h-full"></div>
                    <div className="bg-red-500 rounded-br-full transition-all duration-500 hover:rounded-br-none hover:rounded-tl-full w-full h-full"></div>
                    <div className="bg-yellow-300 rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-tr-none w-full h-full"></div>
                    <div className="bg-yellow-300 rounded-tr-full transition-all duration-500 hover:rounded-tr-none hover:rounded-bl-full w-full h-full"></div>
                    <div className="bg-blue-500 rounded-tl-full transition-all duration-500 hover:rounded-tl-none hover:rounded-br-full w-full h-full"></div>
                    <div className="bg-yellow-50 rounded-tr-full transition-all duration-500 hover:rounded-tr-none hover:rounded-bl-full w-full h-full"></div>
                    <div className="bg-black rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-tr-full w-full h-full"></div>
                    <div className="bg-red-500 rounded-tl-full transition-all duration-500 hover:rounded-tl-none hover:rounded-br-full w-full h-full"></div>
                    <div className="bg-yellow-300 rounded-tl-full rounded-br-full transition-all duration-500 hover:rounded-tr-full hover:rounded-tl-none hover:rounded-bl-full hover:rounded-br-none w-full h-full"></div>
                    <div className="bg-blue-500 rounded-tr-full rounded-bl-full transition-all duration-500 hover:rounded-none w-full h-full"></div>
                    <div className="bg-red-500 rounded-br-full transition-all duration-500 hover:rounded-br-none hover:rounded-tl-full w-full h-full"></div>
                    <div className="bg-black rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-tr-full w-full h-full"></div>
                    <div className="bg-red-500 rounded-tl-full transition-all duration-500 hover:rounded-tl-none hover:rounded-br-full w-full h-full"></div>
                    <div className="bg-yellow-300 rounded-bl-full transition-all duration-500 hover:rounded-bl-none hover:rounded-tr-full w-full h-full"></div>
                    <div className="bg-yellow-50 rounded-bl-full transition-all duration-500 hover:bg-black hover:rounded-bl-none hover:rounded-tr-full w-full h-full"></div>
                    <div className="bg-blue-500 rounded-tl-full transition-all duration-500 hover:rounded-tl-none hover:rounded-br-full w-full h-full"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Bauhaus;
