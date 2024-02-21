import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import Route from "./Route.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={Route} />
    </ThemeProvider>
  </React.StrictMode>
);
