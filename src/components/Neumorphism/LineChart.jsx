import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      xAxis: {
        type: "category",
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
        ],
        axisLine: { lineStyle: { color: "#e2e8f0" } },
        axisTick: { show: false },
        axisLabel: { color: "#9ca3af" },
      },
      yAxis: {
        type: "value",
        axisLine: { lineStyle: { color: "#e2e8f0" } },
        axisTick: { show: false },
        axisLabel: { color: "#9ca3af" },
        splitLine: { lineStyle: { color: "#e2e8f0" } },
      },
      series: [
        {
          name: "Data",
          type: "line",
          smooth: true,
          data: [225, 200, 350, 300, 250, 400, 350, 450, 300, 500, 300, 600],
          lineStyle: { color: "#e2e8f0", width: 2 },
          itemStyle: {
            color: "white",
            borderColor: "#9ca3af",
            borderWidth: 1,
            shadowBlur: 8,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffsetX: 3,
            shadowOffsetY: 3,
          },
          symbolSize: 6,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#f8fafc" },
                { offset: 1, color: "#f1f5f9" },
              ],
            },
            shadowBlur: 5,
            shadowColor: "rgba(210, 210, 210, 1)",
            shadowOffsetX: 3,
            shadowOffsetY: 3,
          },
        },
      ],
      backgroundColor: "#f1f5f9",
    };
    chart.setOption(option);

    return () => chart.dispose();
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <div ref={chartRef} className="relative w-full h-full ml-2" />
    </div>
  );
};

export default LineChart;
