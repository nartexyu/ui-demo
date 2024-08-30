import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const HorizontalBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      title: {
        left: "center",
        textStyle: {
          color: "#9ca3af",
          fontWeight: "lighter",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      xAxis: {
        type: "value",
        axisLine: { lineStyle: { color: "#f1f5f9" } },
        axisLabel: { color: "#9ca3af" },
        splitLine: { lineStyle: { color: "#e2e8f0" } },
      },
      yAxis: {
        type: "category",
        data: [],
        axisLine: { lineStyle: { color: "#e2e8f0" } },
        axisLabel: { color: "#e2e8f0" },
      },
      series: [
        {
          name: "Savings",
          type: "bar",
          data: [94],
          itemStyle: {
            borderRadius: [20, 20, 20, 20],
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "white" },
                { offset: 1, color: "#f1f5f9" },
              ],
            },
            shadowBlur: 5,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffsetX: 3,
            shadowOffsetY: 3,
          },
          barWidth: "75%",
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
        <div ref={chartRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default HorizontalBarChart;
