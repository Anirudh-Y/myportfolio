import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Toast from "./components/Toast";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  <div className="relative">
    <App />
    <Toast />
  </div>
  // {/* </React.StrictMode>, */}
);
