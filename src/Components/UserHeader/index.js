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
      <div className="top-header d-flex justify-content-end bg-dark text-light mt-4 p-1">
        <div
          className="me-5 four-icon d-flex align-items-center mt-3"
          style={{ columnGap: "10px" }}
        >
          <div className="dropdown dropup ">
            <ul className="list-inline mb-0  d-flex align-items-center gap-1">
              <li className="list-inline-item">
                <Link
                  to="#"
                  className="default-link -md link text-uppercase"
                  data-toggle="modal"
                  data-target="#signin-modal"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "white", fontSize: "17px" }}
                  />
                  {/* <i style={{ color: "white", fontSize: "17px" }} className="far fa-user" /> */}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="#"
                  className="default-link -md link text-uppercase"
                  data-toggle="modal"
                  data-target="#signin-modal"
                >
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    style={{ color: "white", fontSize: "17px" }}
                  />
                  {/* <i style={{ color: "white", fontSize: "17px" }} className="far fa-user" /> */}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="#"
                  className="default-link -md link text-uppercase"
                  data-toggle="modal"
                  data-target="#signin-modal"
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ color: "white", fontSize: "17px" }}
                  />
                  {/* <i style={{ color: "white", fontSize: "17px" }} className="far fa-user" /> */}
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="#"
                  className="default-link -md link text-uppercase"
                  data-toggle="modal"
                  data-target="#signin-modal"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: "white", fontSize: "17px" }}
                  />
                  {/* <i style={{ color: "white", fontSize: "17px" }} className="far fa-user" /> */}
                </Link>
              </li>
            </ul>
          </div>
          {/* <FontAwesomeIcon
            icon={faShoppingBag}
            style={{ color: "white", fontSize: "17px" }}
          />
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "white", fontSize: "17px" }}
          />
          <FontAwesomeIcon
            icon={faHeart}
            style={{ color: "white", fontSize: "17px" }}
          /> */}
         
        </div>
      </div>
    </>
  );
};
export default UserHeader;
