import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Europium = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="animate-rotate hover:pause cursor-pointer flex justify-center items-center">
      <div
        className={`absolute h-[70px] w-[70px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
      </div>
      <div
        className={`absolute h-[120px] w-[120px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(15%_-_6px)] left-[calc(87%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(50%_-_6px)] left-[calc(100%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(15%_-_6px)] left-[calc(87%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(15%_-_6px)] left-[calc(13%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(50%_-_6px)] left-[-6px]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(15%_-_6px)] left-[calc(13%_-_6px)]`}
        ></span>
      </div>
      <div
        className={`absolute h-[170px] w-[170px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(42%_-_6px)] right-[calc(1%_-_7px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(42%_-_6px)] left-[calc(1%_-_7px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(42%_-_6px)] right-[calc(1%_-_7px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(42%_-_6px)] left-[calc(1%_-_7px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(2.5%_-_6px)] left-[calc(32%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(2.5%_-_6px)] right-[calc(32%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(2.5%_-_6px)] left-[calc(32%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(2.5%_-_6px)] right-[calc(32%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(12%_-_6px)] left-[calc(17%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(12%_-_6px)] right-[calc(17%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(12%_-_6px)] left-[calc(17%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(12%_-_6px)] right-[calc(17%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(25%_-_6px)] left-[calc(6%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(25%_-_6px)] right-[calc(6%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(25%_-_6px)] left-[calc(6%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(25%_-_6px)] right-[calc(6%_-_6px)]`}
        ></span>
      </div>
      <div
        className={`absolute h-[220px] w-[220px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(0.5%_-_6px)] left-[calc(40%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(0.5%_-_6px)] right-[calc(40%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(4%_-_6px)] left-[calc(30%_-_7px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(4%_-_6px)] right-[calc(30%_-_7px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(10%_-_6px)] left-[calc(19%_-_7px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(10%_-_6px)] right-[calc(19%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(19%_-_6px)] right-[calc(10%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(19%_-_6px)] left-[calc(10%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(31%_-_6px)] right-[calc(3%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(31%_-_6px)] left-[calc(3%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(45%_-_6px)] right-[calc(0%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(45%_-_6px)] left-[calc(0%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(60%_-_6px)] right-[calc(0.5%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(60%_-_6px)] left-[calc(0.5%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(29%_-_6px)] right-[calc(4%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(29%_-_6px)] left-[calc(4%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(19%_-_6px)] left-[calc(10%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(19%_-_6px)] right-[calc(10%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(10%_-_6px)] left-[calc(19%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(10%_-_6px)] right-[calc(19%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(4%_-_6px)] left-[calc(30%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(4%_-_6px)] right-[calc(30%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(0.3%_-_6px)] left-[calc(42%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(0.3%_-_6px)] right-[calc(42%_-_6px)]`}
        ></span>
      </div>
      <div
        className={`absolute h-[270px] w-[270px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(15%_-_6px)] left-[calc(87%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(50%_-_6px)] left-[calc(100%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(15%_-_6px)] left-[calc(87%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[calc(15%_-_6px)] left-[calc(13%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(50%_-_6px)] left-[-6px]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(15%_-_6px)] left-[calc(13%_-_6px)]`}
        ></span>
      </div>
      <div
        className={`absolute h-[320px] w-[320px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
      </div>
    </div>
  );
};

export default Europium;
