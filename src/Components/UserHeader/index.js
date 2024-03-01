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
      <div className="top-header bg-dark text-dark mt-4">
        <div
          className=" w-100 d-flex align-items-center justify-content-center py-2"
          
        >
            <Link className="pt-2" to="/SubscriptionForm">
              <span>SIGN UP FOR £20 OFF YOUR FIRST RENTAL</span>
            </Link>
        </div>
      </div>
    </>
  );
};
export default UserHeader;
