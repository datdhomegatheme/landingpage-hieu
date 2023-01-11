import "./assets/styles/core.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AppProvider } from "@shopify/polaris";
import en from "@shopify/polaris/locales/en.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppProvider i18n={en}>
            <App />
        </AppProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
