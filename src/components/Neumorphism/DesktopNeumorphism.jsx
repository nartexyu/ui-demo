import React from "react";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import KPIChart from "./KPIChart";
import ProgressBar from "./ProgressBar";
import HorizontalBarChart from "./HorizontalBarChart";

const DesktopNeumorphism = () => {
  return (
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
            <p className="lg:text-2xl font-thin text-gray-600 p-4 rounded-lg shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] flex items-center justify-center">
              $12,345
            </p>
          </div>
          <div className="col-span-1 row-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
            <h2 className="text-2xl font-thin h-1/3 flex items-center justify-center">
              Debt Repayment Progress
            </h2>
            <div className="w-full h-5/6 flex justify-between items-center">
              <ProgressBar />
            </div>
          </div>
          <div className="col-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
            <h2 className="text-2xl font-thin h-1/3">Savings Goal</h2>
            <div className="w-full h-2/3 flex justify-between items-center">
              <HorizontalBarChart />
            </div>
          </div>
          <div className="col-span-1 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4 flex flex-col justify-between">
            <h2 className="lg:text-2xl font-thin flex items-center justify-center">
              Savings Rate
            </h2>
            <p className="lg:text-2xl font-thin text-gray-600 p-4 rounded-lg shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] flex items-center justify-center">
              23%
            </p>
          </div>
          <div className="col-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
            <h2 className="lg:text-2xl font-thin text-center h-1/3">
              Credit Score
            </h2>
            <div className="w-full h-2/3 flex justify-between items-center">
              <KPIChart />
            </div>
          </div>
          <div className="col-span-2 row-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
            <h2 className="lg:text-3xl font-thin mb-4 h-1/6">
              Spending vs. Budget
            </h2>
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
  );
};

export default DesktopNeumorphism;
