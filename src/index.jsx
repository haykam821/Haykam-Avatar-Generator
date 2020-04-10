require("file-loader?name=[name].[ext]!html-minify-loader!./index.html");

const log = require("./debug.js").main;

const React = require("react");
React.__spread = Object.assign;

const ReactDOM = require("react-dom");

const ThemedApp = require("./components/themed-app.jsx");

ReactDOM.render(<ThemedApp/>, document.getElementById("app"), () => {
	log("mounted application");
});