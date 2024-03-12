import React from "react";
import "../../css/admin-header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const AdminHeader = () => {
  return (
    <header>
      <nav className="navbar-admin navbar-expand-sm">
        <div className="container-fluid d-flex align-items-center">
          <div className="row w-100">
          <div className="col-md-4 main-nav-brand-admin">
            <Link className="navbar-brand-admin" to="/AdminPanel/AdminMainPage">
             <img src="/images/CC TM Logo.png" width={"300px"}/>
            </Link>
          </div>
          <div className="col-12 col-sm-5 text-center main-nav-brand-admin justify-content-center">
          <input type="search" name="" id="" placeholder="Search" />
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"20px",position:"relative",right:"4.5rem",cursor:"pointer"}}/>
          </div>
          <div
            className="collapse col-md-3 navbar-collapse d-flex justify-content-end"
            id="collapsibleNavId"
          >
            <form className="d-flex  nav-icon align-items-end">
              <div className="user d-flex flex-row">
                <div className="dropdown">
                  <button
                    className="btn text-dark dropdown-toggle border-0"
                    type="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Circular Couture
                  </button>
                  <div
                    className="dropdown-menu text-decoration-none"
                    aria-labelledby="userDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                    <Link className="dropdown-item" to="/AdminPanel/Login">
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
      </nav>
    </header>

  )
};
export default AdminHeader;