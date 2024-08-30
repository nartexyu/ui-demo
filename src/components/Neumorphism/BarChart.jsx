import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May"],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: "#9ca3af" },
      },
      yAxis: {
        type: "value",
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { color: "#9ca3af" },
        splitLine: { lineStyle: { color: "#e2e8f0" } },
      },
      series: [
        {
          name: "Value",
          type: "bar",
          barWidth: "35%",
          stack: "Stack",
          itemStyle: {
            borderRadius: [0, 0, 20, 20],
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#fb923c" },
                { offset: 1, color: "#ea580c" },
              ],
            },
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffsetX: 4,
            shadowOffsetY: 4,
          },
          data: [70, 60, 80, 90, 50],
        },
        {
          name: "Background",
          type: "bar",
          barWidth: "55%",
          stack: "Stack",
          itemStyle: {
            color: "#f1f5f9",
            borderRadius: [20, 20, 0, 0],
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffsetX: 4,
            shadowOffsetY: 4,
          },
          data: [30, 40, 20, 10, 50],
        },
      ],
      backgroundColor: "#f1f5f9",
    };
    chart.setOption(option);

    return () => chart.dispose();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-full h-full">
        <div ref={chartRef} className="w-full h-full ml-2" />
      </div>
    </div>
  );
};

export default BarChart;
