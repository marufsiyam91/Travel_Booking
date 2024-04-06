import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import TourContextProvider from "./Context/TourContext.jsx";
import { ScrollToTop } from "./Components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TourContextProvider>
      <RouterProvider router={Routes}>
        <ScrollToTop>
        <App />
        </ScrollToTop>
      </RouterProvider>
    </TourContextProvider>
  </React.StrictMode>
);
