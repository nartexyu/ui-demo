import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const ProgressBar = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      xAxis: {
        type: "category",
        data: ["Debt Repayment"],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
      },
      yAxis: { max: 100, show: false },
      series: [
        {
          type: "bar",
          data: [40],
          showBackground: true,
          backgroundStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#e2e8f0" },
                { offset: 1, color: "#f1f5f9" },
              ],
            },
            borderRadius: [20, 20, 20, 20],
            shadowBlur: 5,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffsetX: 3,
            shadowOffsetY: 3,
          },
          itemStyle: {
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
            borderRadius: [20, 20, 20, 20],
            shadowBlur: 5,
            shadowColor: "rgba(0, 0, 0, 0.2)",
            shadowOffsetX: 3,
            shadowOffsetY: 3,
          },
          label: {
            show: true,
            position: "inside",
            formatter: "{c}%",
            color: "#9ca3af",
            fontWeight: "lighter",
          },
        },
      ],
      grid: { left: "20%", right: "20%", top: "0%", bottom: "20%" },
    };
    chart.setOption(option);

    return () => chart.dispose();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="relative w-full h-full" style={{ paddingBottom: "50%" }}>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="relative w-full h-full rounded-lg overflow-hidden custom-inset-shadow">
            <div ref={chartRef} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
