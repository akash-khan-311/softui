import React from "react";
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
    </ThemeProvider>
  </React.StrictMode>
);
