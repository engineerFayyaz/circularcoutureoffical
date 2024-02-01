import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NewArrival from "./Pages/Collections/NewArrival";

const ProjectRoutes =()=>{
    return(
    <React.Suspense fallback={<>Loading...</>}>
        <Router>
        <Routes>
        <Route path="/Home" element={<Home />} />  
        <Route path="/Collections/NewArrival" element={<NewArrival/>}/>             
        </Routes>
        </Router>
    </React.Suspense>
    );
}
export default ProjectRoutes;
