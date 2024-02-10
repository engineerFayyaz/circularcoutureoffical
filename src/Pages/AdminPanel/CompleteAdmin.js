import React from "react";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";

const CompleteAdmin =()=>{
    return(
        <>
        <AdminHeader/>
        <div className="mianDiv" style={{backgroundColor:"black" , height:"87.5vh"}}>
        <div className="container-fluid" style={{backgroundColor:"black"}}>
    <div
      className="row  text-light "
      style={{ backgroundColor: "black", color: "white" }}
    >
        <AdminSideHeader/>

        </div>
    </div>
    </div>

        </>
    )
};
export default CompleteAdmin;