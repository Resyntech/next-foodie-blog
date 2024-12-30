"use client";
import type { Children } from "@/app/layout";
import { AuthProvider } from "@/authentication/AuthContext";
import store from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

export default function Providers({ children }: Children) {
  return (
    <AuthProvider>
      <Provider store={store}>{children}</Provider>
    </AuthProvider>
  );
}
