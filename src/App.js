import React from "react";
import Routes from "./Routes";
import ReactModal from "react-modal";
// import Home from "./Pages/Home";
ReactModal.setAppElement("#root");
function App() {
  return (
    // <Home/>
    <>
      <Routes />
    </>
  );
}

export default App;
