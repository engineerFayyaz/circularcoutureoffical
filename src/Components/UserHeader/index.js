import React from "react";
import {
  faUser,
  faHeart,
  faSearch,
  faShoppingBag,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const UserHeader = () => {
  return (
    <>
      <div className="container-fluid top-header mt-4">
            <div className="row  d-flex align-items-center justify-content-center ">
                <div className="col-md-12 mt-lg-3 py-1 mt-sm-5 text-center">
                    <Link to="/SubscriptionForm" className="text-dark" 
                    style={{
                      fontFamily: "poppins",
                      fontWeight:"bold",
                      letterSpacing:"1.1px"
                    }}
                    >
                        <span>SIGN UP FOR £20 OFF YOUR FIRST RENTAL</span>
                    </Link>
                </div>
            </div>
        </div>

    </>
  );
};
export default UserHeader;
