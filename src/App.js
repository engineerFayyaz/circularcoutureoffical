import React from "react";
import Routes from "./Routes"
import ReactModal from 'react-modal';
import "../public/css/stylesheet.css"
import "../public/js/script.js"

ReactModal.setAppElement('#root');
function App() {
  return (
   <Routes/>
  );
}

export default App;
