"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUI } from "@/redux/reducers/uiReducer";
import type { Children } from "@/app/layout";

const ToggleMode = ({ children }: Children) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.ui.darkMode);

  React.useEffect(() => {
    dispatch(getUI());
  }, [dispatch]);

  return <div className={darkMode ? "dark" : ""}>{children}</div>;
};

export default ToggleMode;
