import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";
import AppContext from "./state/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppContext.Provider>
      <App />
    </AppContext.Provider>

  </React.StrictMode>
);
