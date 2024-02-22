import React from "react";
import "../../css/admin-header.css";
import { Link } from "react-router-dom";
const AdminHeader = () => {
  return (
    <header>
      <nav className="navbar-admin navbar-expand-sm">
        <div className="container-fluid">
          <div className="main-nav-brand-admin">
            <Link className="navbar-brand-admin" to="/AdminPanel/AdminMainPage">
             <img src="/images/CC TM Logo.png" width={"300px"}/>
            </Link>
            <input type="search" name="" id="" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
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
      </nav>
    </header>

  )
};
export default AdminHeader;