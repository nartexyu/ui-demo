import React from "react";
import { useAtom } from "jotai";
import { nmMobileAtom, themeAtom } from "../../atoms/atoms";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import ProgressBar from "./ProgressBar";
import HorizontalBarChart from "./HorizontalBarChart";

const MobileNeumorphism = () => {
  const [nmMobile] = useAtom(nmMobileAtom);
  const [, setTheme] = useAtom(themeAtom);

  return (
    <div className="lg:hidden fixed grid justify-center items-center bg-slate-100 h-4/5 w-screen">
      <div className="h-1/3 w-screen flex flex-col items-center justify-center">
        <h3 className="text-lg font-thin">UI Demo</h3>
        <h1 className="text-3xl font-thin mb-8">Dashboard</h1>
        {nmMobile === "home" && <div className="text-2xl font-thin">Home</div>}
        {nmMobile === "spendingbreakdown" && (
          <div className="text-2xl font-thin">Spending Breakdown</div>
        )}
        {nmMobile === "expenses" && (
          <div className="text-2xl font-thin">Monthly Expenses</div>
        )}
        {nmMobile === "budget" && (
          <div className="text-2xl font-thin">Spending vs. Budget</div>
        )}
      </div>
      <div className="h-full w-screen -mt-36">
        {nmMobile === "home" && (
          <div className="flex justify-center items-center h-4/5">
            <div className="h-full w-5/6 grid grid-cols-3 grid-rows-2 gap-4 justify-center items-center place-content-center">
              <div className="h-full col-span-1 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4 flex flex-col justify-between">
                <h2 className="text-xl font-thin flex justify-center">
                  Account Balance
                </h2>
                <p className="lg:text-2xl font-thin text-gray-600 p-4 rounded-lg shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]">
                  $12,345
                </p>
              </div>
              <div className="h-full col-span-1 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4 flex flex-col justify-between">
                <h2 className="text-xl font-thin flex justify-center">
                  Savings Rate
                </h2>
                <p className="lg:text-2xl font-thin text-gray-600 p-4 rounded-lg shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]">
                  23%
                </p>
              </div>
              <div className="h-full col-span-1 row-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                <h2 className="text-xl font-thin h-1/3 flex justify-center">
                  Debt Repayment Progress
                </h2>
                <div className="w-full h-5/6 flex justify-between items-center">
                  <ProgressBar />
                </div>
              </div>
              <div className="h-full col-span-2 bg-slate-100 rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-10px_-10px_15px_rgb(255,255,255)] p-4">
                <h2 className="text-xl font-thin h-1/3 flex justify-center">
                  Savings Goal
                </h2>
                <div className="w-full h-2/3 flex justify-between items-center">
                  <HorizontalBarChart />
                </div>
              </div>
            </div>
          </div>
        )}
        {nmMobile === "spendingbreakdown" && <DonutChart />}
        {nmMobile === "expenses" && <LineChart />}
        {nmMobile === "budget" && <BarChart />}
        {nmMobile === "settings" && (
          <div className="flex flex-col justify-center items-center space-y-4 transition-all duration-300 ease-in-out">
            <button
              className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
              onClick={() => setTheme("neumorphism")}
            >
              Neumorphism
            </button>
            <button
              className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
              onClick={() => setTheme("retro-futurism")}
            >
              Retro-futurism
            </button>
            <button
              className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
              onClick={() => setTheme("glassmorphism")}
            >
              Glassmorphism
            </button>
            <button
              className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
              onClick={() => setTheme("neubrutalism")}
            >
              Neubrutalism
            </button>
            <button
              className="bg-slate-100 p-6 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
              onClick={() => setTheme("bauhaus")}
            >
              Bauhaus
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNeumorphism;
