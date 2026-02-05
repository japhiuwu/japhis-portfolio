import React from "react";
import App from "./App";
import Home from "./Home";
import ReactDOM from "react-dom/client";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App>
        <Home />
    </App>
);