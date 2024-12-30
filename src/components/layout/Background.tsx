"use client";
import { useSelector } from "react-redux";

const Background = ({ children }) => {
  const darkMode = useSelector((state) => state.ui.darkMode);

  return (
    <div className="min-h-screen font-bold duration-300 ease-in-out dark:bg-black">
      <div className="bg-[url('/Background.jpg')] bg-no-repeat bg-cover fixed inset-0 -z-50" />
      <div>{children}</div>
    </div>
  );
};

export default Background;
