import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { addDays, format, startOfToday, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

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

export default WeatherGraph;
