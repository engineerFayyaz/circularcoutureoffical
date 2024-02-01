import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const ProjectRoutes =()=>{
    return(
    <React.Suspense fallback={<>Loading...</>}>
        <Router>
        <Routes>
            
        </Routes>
        </Router>
    </React.Suspense>
    );
}
export default ProjectRoutes;
