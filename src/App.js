import React from "react";
import Routes from "./Routes";
import ReactModal from "react-modal";
// import Home from "./Pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/next";

ReactModal.setAppElement("#root");
function App() {
  return (
    // <Home/>
    <>
      <Routes />
      <SpeedInsights />
    </>
  );
}

export default App;
