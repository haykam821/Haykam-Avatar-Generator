require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

import * as React from "react";
import * as ReactDOM from "react-dom";
import ThemedApp from "./components/themed-app";
import { loggers } from "./debug";

ReactDOM.render(<ThemedApp />, document.getElementById("app"), () => {
	loggers.main("mounted application");
});

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/service-worker.js");
}
