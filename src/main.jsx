import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DataContextProvider } from "./context/DataContext";
import "./index.css";
import "./header.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);
