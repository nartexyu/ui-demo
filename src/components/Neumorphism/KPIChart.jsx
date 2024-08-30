import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const KPIChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      series: [
        {
          type: "gauge",
          startAngle: 180,
          endAngle: 0,
          radius: "95%",
          roundCap: true,
          pointer: { show: false },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
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
            },
          },
          axisLine: {
            lineStyle: {
              width: 5,
              shadowBlur: 5,
              shadowColor: "rgba(0, 0, 0, 0.3)",
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              color: [
                [0.9, "#f1f5f9"],
                [1, "#f1f5f9"],
              ],
            },
          },
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: { show: false },
          data: [{ value: 90 }],
          detail: {
            valueAnimation: true,
            offsetCenter: ["0%", "0%"],
            fontSize: 24,
            fontWeight: "lighter",
            color: "#4b5563",
            formatter: () => "770",
          },
        },
      ],
    };
    chart.setOption(option);

    return () => chart.dispose();
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

export default KPIChart;
