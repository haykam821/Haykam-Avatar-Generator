require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

import * as React from "react";
import ReactDOM from "react-dom/client";
import ThemedApp from "./components/themed-app";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<ThemedApp />);

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/service-worker.js");
}
