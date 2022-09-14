import React from "react";
// import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";

// ReactDOM.render(
//   <React.StrictMode>
//     <AppProvider>
//       <App />
//     </AppProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
