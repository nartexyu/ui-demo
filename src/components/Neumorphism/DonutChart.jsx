import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const DonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    const option = {
      series: [
        {
          type: "pie",
          radius: ["50%", "75%"],
          avoidLabelOverlap: false,
          label: { show: false, position: "center" },
          emphasis: {
            label: {
              show: true,
              fontSize: "24",
              fontWeight: "lighter",
              formatter: "{b}\n{c|{c}}",
              color: "#4b5563",
              rich: {
                c: { fontSize: "18", color: "#4b5563", fontWeight: "lighter" },
              },
            },
          },
          labelLine: { show: false },
          data: [
            {
              value: 500,
              name: "Housing",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#fb923c" },
                    { offset: 1, color: "#ea580c" },
                  ],
                },
              },
            },
            {
              value: 300,
              name: "Food",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#fb923c" },
                    { offset: 1, color: "#ea580c" },
                  ],
                },
              },
            },
            {
              value: 200,
              name: "Transport",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#fb923c" },
                    { offset: 1, color: "#ea580c" },
                  ],
                },
              },
            },
            {
              value: 100,
              name: "Utilities",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#fb923c" },
                    { offset: 1, color: "#ea580c" },
                  ],
                },
              },
            },
            {
              value: 50,
              name: "Misc.",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: "#fb923c" },
                    { offset: 1, color: "#ea580c" },
                  ],
                },
              },
            },
          ],
          itemStyle: {
            borderRadius: [30, 30, 30, 30],
            shadowBlur: 10,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            shadowColor: "rgba(0, 0, 0, 0.3)",
          },
        },
      ],
    };
    chart.setOption(option);

    return () => chart.dispose();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div style={{ width: "70%", paddingTop: "70%", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            boxShadow:
              "5px 5px 10px rgb(190, 190, 190), -5px -5px 10px rgb(255, 255, 255)",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <div ref={chartRef} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
