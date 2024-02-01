import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./compaund-component/indext";
// import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>ddd</div>
    <App />
  </React.StrictMode>
);
