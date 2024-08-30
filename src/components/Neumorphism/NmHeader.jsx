import React from "react";
import { useAtom } from "jotai";
import { nmMobileAtom, themeAtom } from "../../atoms/atoms";
import {
  HomeIcon,
  SpendingIcon,
  ExpensesIcon,
  BudgetIcon,
  SettingsIcon,
} from "../../assets/svgs/Neumorphism/nmSvgs";

const NmHeader = () => {
  const [nmMobile, setNmMobile] = useAtom(nmMobileAtom);
  const [, setTheme] = useAtom(themeAtom);

  const handleButtonClick = (buttonName) => {
    setNmMobile(buttonName);
  };

  return (
    <header>
      {/* Mobile Header */}
      <div className="lg:hidden fixed bottom-0 h-1/5 w-screen flex items-center justify-center bg-slate-100 p-4 rounded-t-lg shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]">
        <div className="space-x-8">
          <button
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${
              nmMobile === "home"
                ? "shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]"
                : "shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]"
            } `}
            onClick={() => handleButtonClick("home")}
          >
            <HomeIcon />
          </button>
          <button
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${
              nmMobile === "spendingbreakdown"
                ? "shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]"
                : "shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]"
            } `}
            onClick={() => handleButtonClick("spendingbreakdown")}
          >
            <SpendingIcon />
          </button>
          <button
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${
              nmMobile === "expenses"
                ? "shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]"
                : "shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]"
            } `}
            onClick={() => handleButtonClick("expenses")}
          >
            <ExpensesIcon />
          </button>
          <button
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${
              nmMobile === "budget"
                ? "shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]"
                : "shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]"
            } `}
            onClick={() => handleButtonClick("budget")}
          >
            <BudgetIcon />
          </button>
          <button
            className={`rounded-lg transition-all duration-300 ease-in-out p-2 ${
              nmMobile === "settings"
                ? "shadow-[inset_3px_3px_5px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)]"
                : "shadow-[3px_3px_5px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]"
            } `}
            onClick={() => handleButtonClick("settings")}
          >
            <SettingsIcon />
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex h-screen w-1/5 bg-slate-100 text-gray-600 fixed flex flex-col justify-center rounded-lg shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)]">
        <div className="p-4 flex flex-col justify-center items-center">
          <h1 className="lg:text-3xl font-light mb-12">UI Demo</h1>
          <ul className="lg:text-xl font-light space-y-8">
            <li className="mb-4">
              <button
                className="bg-slate-100 p-8 rounded-full font-normal hover:text-orange-400 shadow-[5px_5px_10px_rgb(190,190,190),-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
                onClick={() => setTheme("neumorphism")}
              >
                Neumorphism
              </button>
            </li>
            <li className="mb-4">
              <button
                className="bg-slate-100 p-8 rounded-full hover:text-orange-400 hover:shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
                onClick={() => setTheme("retro-futurism")}
              >
                Retro-Futurism
              </button>
            </li>
            <li className="mb-4">
              <button
                className="bg-slate-100 p-8 rounded-full hover:text-orange-400 hover:shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
                onClick={() => setTheme("glassmorphism")}
              >
                Glassmorphism
              </button>
            </li>
            <li className="mb-4">
              <button
                className="bg-slate-100 p-8 rounded-full hover:text-orange-400 hover:shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
                onClick={() => setTheme("neubrutalism")}
              >
                Neubrutalism
              </button>
            </li>
            <li className="mb-4">
              <button
                className="bg-slate-100 p-8 rounded-full hover:text-orange-400 hover:shadow-[inset_5px_5px_10px_rgb(190,190,190),inset_-5px_-5px_10px_rgb(255,255,255)] transition-all duration-300 ease-in-out"
                onClick={() => setTheme("bauhaus")}
              >
                Bauhaus
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NmHeader;
