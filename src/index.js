import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";

// import Header from "./Components/headerComponents/header";
// import Counter from "./Components/counter";

ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
