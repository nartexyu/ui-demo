import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';


const DonutChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        const option = {
            series: [
            {
                type: 'pie',
                radius: ['50%', '75%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '24',
                        fontWeight: 'lighter',
                        formatter: '{b}\n{c|{c}}',
                        color: '#4b5563',
                        rich: {
                            c: {
                              fontSize: '18',
                              color: '#4b5563',
                              fontWeight: 'lighter'
                            }
                        }
                    }
                },
                labelLine: {
                show: false
                },
                data: [
                    { value: 500, name: 'Housing', itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: '#fb923c' }, { offset: 1, color: '#ea580c' }] }}},
                    { value: 300, name: 'Food', itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: '#fb923c' }, { offset: 1, color: '#ea580c' }] }}},
                    { value: 200, name: 'Transport', itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: '#fb923c' }, { offset: 1, color: '#ea580c' }] }}},
                    { value: 100, name: 'Utilities', itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: '#fb923c' }, { offset: 1, color: '#ea580c' }] }}},
                    { value: 50, name: 'Misc.', itemStyle: { color: { type: 'linear', x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: '#fb923c' }, { offset: 1, color: '#ea580c' }] }}}
                ],
                itemStyle: {
                    borderRadius: [30, 30, 30, 30],
                    shadowBlur: 10,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                }
            }
            ]
        };
        chart.setOption(option);
  
        return () => {
            chart.dispose();
        };
    }, []);
  
    return (
        <div className="flex justify-center items-center w-full h-full">
          <div style={{ width: '70%', paddingTop: '70%', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', boxShadow: '5px 5px 10px rgb(190, 190, 190), -5px -5px 10px rgb(255, 255, 255)', borderRadius: '50%', overflow: 'hidden' }}>
              <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
    );
};
 
const BarChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
      const chart = echarts.init(chartRef.current);
      const option = {
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#9ca3af'
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#9ca3af'
          },
          splitLine: {
            lineStyle: {
              color: '#e2e8f0'
            }
          }
        },
        series: [
          {
            name: 'Value',
            type: 'bar',
            barWidth: '35%',
            stack: 'Stack',
            itemStyle: {
              borderRadius: [0, 0, 20, 20], // Rounded corners for the filled bars
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: '#fb923c' }, // Top color
                  { offset: 1, color: '#ea580c' }  // Bottom color
                ],
                global: false // False by default
              },
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowOffsetX: 4,
              shadowOffsetY: 4
            },
            data: [70, 60, 80, 90, 50] // Actual values for the filled bars
          },
          {
            name: 'Background',
            type: 'bar',
            barWidth: '55%', // Slightly wider to create the overlap effect
            stack: 'Stack',
            itemStyle: {
              color: '#f1f5f9',
              borderRadius: [20, 20, 0, 0], // Rounded corners for the container bars, only at the top
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowOffsetX: 4,
              shadowOffsetY: 4
            },
            data: [30, 40, 20, 10, 50] // Values slightly larger to create the overlap effect
          }
        ],
        backgroundColor: '#f1f5f9' // Background color similar to the card
      };
      chart.setOption(option);
  
      return () => {
        chart.dispose();
      };
    }, []);
  
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="relative w-full h-full">
                <div ref={chartRef} className="w-full h-full ml-2" />
            </div>
        </div>
    );
};

const LineChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        const option = {
            xAxis: {
            type: 'category',
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            axisLine: {
                lineStyle: {
                color: '#e2e8f0'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9ca3af'
            }
            },
            yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                color: '#e2e8f0'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#9ca3af'
            },
            splitLine: {
                lineStyle: {
                color: '#e2e8f0'
                }
            }
            },
            series: [
            {
                name: 'Data',
                type: 'line',
                smooth: true,
                data: [225, 200, 350, 300, 250, 400, 350, 450, 300, 500, 300, 600],
                lineStyle: {
                color: '#e2e8f0',
                width: 2
                },
                itemStyle: {
                    color: 'white',
                    borderColor: '#9ca3af',
                    borderWidth: 1,
                    shadowBlur: 8,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                },
                symbolSize: 6,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                          { offset: 0, color: '#f8fafc' }, // Top color
                          { offset: 1, color: '#f1f5f9' }  // Bottom color
                        ],
                        global: false // False by default
                    },
                    shadowBlur: 5,
                    shadowColor: 'rgba(210, 210, 210, 1)',
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                }
            }
            ],
            backgroundColor: '#f1f5f9'
        };
        chart.setOption(option);
    
        return () => {
            chart.dispose();
        };
        }, []);
    
        return (
            <div className="relative w-full h-full flex justify-center items-center">
                <div ref={chartRef} className="relative w-full h-full ml-2" />
            </div>
    );
};

const KPIChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        const option = {
            series: [
            {
                type: 'gauge',
                startAngle: 180,
                endAngle: 0,
                radius: '95%',
                roundCap: true,
                pointer: {
                show: false
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                    itemStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                            { offset: 0, color: '#fb923c' }, // Top color
                            { offset: 1, color: '#ea580c' }  // Bottom color
                            ],
                        }
                    },
                },
                axisLine: {
                    lineStyle: {
                      width: 5,
                      shadowBlur: 5,
                      shadowColor: 'rgba(0, 0, 0, 0.3)',
                      shadowOffsetX: 3,
                      shadowOffsetY: 3,
                      color: [[0.9, '#f1f5f9'], [1, '#f1f5f9']]
                    }
                },
                splitLine: {
                show: false
                },
                axisTick: {
                show: false
                },
                axisLabel: {
                show: false
                },
                data: [
                {
                    value: 90,
                
                    detail: {
                        valueAnimation: true,
                        offsetCenter: ['0%', '0%']
                    }
                }
                ],
                title: {
                    fontSize: 14,
                    color: '#333'
                },
                detail: {
                    width: 32,
                    height: 14,
                    fontSize: 24,
                    fontWeight: 'lighter',
                    color: '#4b5563',
                    borderColor: '#f1f5f9',
                    borderWidth: 1,
                    borderRadius: 3,
                    formatter: () => '770'
                }
            }
            ]
        };
        chart.setOption(option);
    
        return () => {
            chart.dispose();
        };
        }, []);
    
        return (
            <div className="flex justify-center items-center w-full h-full">
                <div className="relative w-1/2 h-full shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] rounded-lg">
                    <div className="relative w-full h-full">
                    <div ref={chartRef} className="w-full h-full mt-4" />
                    </div>
                </div>
            </div>
        );
};

const ProgressBar = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        const option = {
        xAxis: {
            type: 'category',
            data: ['Debt Repayment'],
            axisLine: {
            show: false
            },
            axisTick: {
            show: false
            },
            axisLabel: {
            show: false
            }
        },
        yAxis: {
            max: 100,
            show: false
        },
        series: [
            {
            type: 'bar',
            data: [40], // 40% of debt repaid
            showBackground: true,
            backgroundStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: '#e2e8f0' }, // Top color
                        { offset: 1, color: '#f1f5f9' }  // Bottom color
                    ],
                    global: false // False by default
                },
                borderRadius: [20, 20, 20, 20], // Rounded corners for the background bar
                shadowBlur: 5,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffsetX: 3,
                shadowOffsetY: 3
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'white' }, // Top color
                        { offset: 1, color: '#f1f5f9' }  // Bottom color
                    ],
                    global: false // False by default
                },
                borderRadius: [20, 20, 20, 20], // Rounded corners for the progress bar
                shadowBlur: 5,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffsetX: 3,
                shadowOffsetY: 3
            },
            label: {
                show: true,
                position: 'inside',
                formatter: '{c}%',
                color: '#9ca3af',
                fontWeight: 'lighter'
            }
            }
        ],
        grid: {
            left: '20%',
            right: '20%',
            top: '0%',
            bottom: '20%'
        }
        };
        chart.setOption(option);

        return () => {
        chart.dispose();
        };
    }, []);

    return (
        <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-full h-full" style={{ paddingBottom: '50%' }}>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="relative w-full h-full rounded-lg overflow-hidden custom-inset-shadow">
                <div ref={chartRef} className="w-full h-full" />
            </div>
            </div>
        </div>
        </div>
    );
};

const HorizontalBarChart = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {
        const chart = echarts.init(chartRef.current);
        const option = {
            title: {
            left: 'center',
            textStyle: {
                color: '#9ca3af',
                fontWeight: 'lighter'
            }
            },
            tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
            },
            xAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                color: '#f1f5f9'
                }
            },
            axisLabel: {
                color: '#9ca3af'
            },
            splitLine: {
                lineStyle: {
                color: '#e2e8f0'
                }
            }
            },
            yAxis: {
            type: 'category',
            data: [],
            axisLine: {
                lineStyle: {
                color: '#e2e8f0'
                }
            },
            axisLabel: {
                color: '#e2e8f0'
            }
            },
            series: [
            {
                name: 'Savings',
                type: 'bar',
                data: [94],
                itemStyle: {
                    borderRadius: [20, 20, 20, 20],
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'white' }, // Top color
                            { offset: 1, color: '#f1f5f9' }  // Bottom color
                        ],
                        global: false // False by default
                    },
                    shadowBlur: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowOffsetX: 3,
                    shadowOffsetY: 3,
                },
                barWidth: '75%'
            }
            ],
            backgroundColor: '#f1f5f9'
        };
        chart.setOption(option);
    
        return () => {
            chart.dispose();
        };
    }, []);
  
    return (
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-full h-full">
          <div ref={chartRef} className="w-full h-full" />
        </div>
      </div>
    );
  };
  
const Neumorphism = ({ setTheme, nmMobile }) => {
    return (
        <div>
            {/* Mobile */}
            <div className='lg:hidden fixed grid justify-center items-center bg-slate-100 h-4/5 w-screen'>
                <div className='h-1/3 w-screen flex flex-col items-center justify-center'>
                    <h3 className='text-lg font-thin'>UI Demo</h3>
                    <h1 className='text-3xl font-thin mb-8'>Dashboard</h1>
                    { nmMobile === 'home' && <div className='text-2xl font-thin'>Home</div> }
                    { nmMobile === 'spendingbreakdown' && <div className='text-2xl font-thin'>Spending Breakdown</div> }
                    { nmMobile === 'expenses' && <div className='text-2xl font-thin'>Monthly Expenses</div> }
                    { nmMobile === 'budget' && <div className='text-2xl font-thin'>Spending vs. Budget</div> }
                </div>
                <div className='h-full w-screen -mt-36'>
                    { nmMobile === 'home' &&
                        <div className="flex justify-center items-center h-4/5"> 
                            <div className="h-full w-5/6 grid grid-cols-3 grid-rows-2 gap-4 justify-center items-center place-content-center">
                                <div className="h-full col-span-1 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4 flex flex-col justify-between">
                                    <h2 className="text-xl font-thin flex justify-center">Account Balance</h2>
                                    <p className="lg:text-2xl font-thin text-gray-600 p-4 rounded-lg shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]">$12,345</p>
                                </div>
                                <div className="h-full col-span-1 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4 flex flex-col justify-between">
                                    <h2 className="text-xl font-thin flex justify-center">Savings Rate</h2>
                                    <p className="lg:text-2xl font-thin text-gray-600 p-4 rounded-lg shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]">23%</p>
                                </div>
                                <div className="h-full col-span-1 row-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                                    <h2 className="text-xl font-thin h-1/3 flex justify-center">Debt Repayment Progress</h2>
                                    <div className='w-full h-5/6 flex justify-between items-center'>
                                        <ProgressBar />
                                    </div>
                                </div>
                                <div className="h-full col-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                                    <h2 className="text-xl font-thin h-1/3 flex justify-center">Savings Goal</h2>
                                    <div className='w-full h-2/3 flex justify-between items-center'>
                                        <HorizontalBarChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    { nmMobile === 'spendingbreakdown' && <DonutChart /> }
                    { nmMobile === 'expenses' && <LineChart /> }
                    { nmMobile === 'budget' && <BarChart /> }
                    { nmMobile === 'settings' &&
                        <div className="flex flex-col justify-center items-center space-y-4 transition-all duration-300 ease-in-out"> 
                            <button className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('neumorphism')}>
                                Neumorphism
                            </button>
                            <button className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('retro-futurism')}>
                                Retro-futurism
                            </button>
                            <button className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('glassmorphism')}>
                                Glassmorphism
                            </button>
                            <button className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('neubrutalism')}>
                                Neubrutalism
                            </button>
                            <button className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out" onClick={() => setTheme('bauhaus')}>
                                Bauhaus
                            </button>
                        </div>
                    }

                </div>
            </div>
            {/* Desktop */}
            <div className="hidden lg:flex h-screen w-4/5 ml-[20%] bg-slate-100">
                <div className="w-full h-full bg-slate-100 p-24 text-gray-600">
                    <h1 className="text-4xl font-light mb-6 text-start">Dashboard</h1>
                    <div className="grid grid-cols-6 grid-rows-4 gap-8 h-full">
                        <div className="col-span-2 row-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                            <h2 className="lg:text-3xl font-thin h-1/6">Spending Breakdown</h2>
                            <div className="flex justify-center items-center w-full h-5/6">
                                <DonutChart />
                            </div>
                        </div>
                        <div className="col-span-1 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4 flex flex-col justify-between">
                            <h2 className="lg:text-2xl font-thin">Account Balance</h2>
                            <p className="lg:text-2xl font-thin text-gray-600 p-4 rounded-lg shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] flex items-center justify-center">$12,345</p>
                        </div>
                        <div className="col-span-1 row-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4 ">
                            <h2 className="text-2xl font-thin h-1/3 flex items-center justify-center">Debt Repayment Progress</h2>
                            <div className='w-full h-5/6 flex justify-between items-center'>
                                <ProgressBar />
                            </div>
                        </div>
                        <div className="col-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                            <h2 className="text-2xl font-thin h-1/3 ">Savings Goal</h2>
                            <div className='w-full h-2/3 flex justify-between items-center'>
                                <HorizontalBarChart />
                            </div>
                        </div>
                        <div className="col-span-1 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4 flex flex-col justify-between">
                            <h2 className="lg:text-2xl font-thin flex items-center justify-center">Savings Rate</h2>
                            <p className="lg:text-2xl font-thin text-gray-600 p-4 rounded-lg shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] flex items-center justify-center">23%</p>
                        </div>
                        <div className="col-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                            <h2 className="lg:text-2xl font-thin text-center h-1/3">Credit Score</h2>
                            <div className="w-full h-2/3 flex justify-between items-center">
                                <KPIChart />
                            </div>
                        </div>
                        <div className="col-span-2 row-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                            <h2 className="lg:text-3xl font-thin mb-4 h-1/6">Spending vs. Budget</h2>
                            <div className="w-full h-5/6 flex justify-between items-center">
                                <BarChart />
                            </div>
                        </div>
                        <div className="col-span-4 row-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                            <h2 className="lg:text-3xl font-thin h-1/6">Monthly Expenses</h2>
                            <div className="w-full h-5/6 flex justify-center items-center">
                                <LineChart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Neumorphism;
