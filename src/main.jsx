import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/react"

import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import Route from "./Route.jsx";
import "./index.css";
import ScrollToTop from "./Shared/ScrollToTop/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ScrollToTop/>
      <RouterProvider router={Route} />
      <SpeedInsights/>
    </ThemeProvider>
  </React.StrictMode>
);
