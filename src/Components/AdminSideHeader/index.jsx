import React from "react";
import "../../css/admin-header.css";
import { Link } from "react-router-dom";
const AdminSideHeader = () => {
    return (
        <>
            <div className="col-lg-2 ">
                {/* Nav tabs */}
                <ul className="nav nav-tabs d-flex flex-column " id="navId" role="tablist">
                    <li className="nav-item dropdown ">
                        <Link
                            className="nav-link text-light "
                            id="drop1"
                            data-bs-toggle="dropdown"
                            to="/AdminPanel/AdminMainPage"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li className="nav-item dropdown ">
                        <Link
                            className="nav-link text-light "
                            id="drop1"
                            data-bs-toggle="dropdown"
                            to="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Product
                        </Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/AdminPanel/AddProductsAdmin">
                                Add Product
                            </Link>
                            <Link className="dropdown-item" to="/AdminPanel/ViewAdminProducts">
                                View Product
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link text-light"
                            id="drop2"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Category
                        </a>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/AdminPanel/AdminCategory">
                                Add Category
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link text-light"
                            id="drop2"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            User
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#tab2Id">
                                User Overview
                            </a>
                            <a className="dropdown-item" href="/login.html">
                                Login
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link text-light"
                            id="drop2"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Setting
                        </a>
                        {/* <div class="dropdown-menu">
                          <a class="dropdown-item" href="#tab2Id">Add Category</a>
                      </div> */}
                    </li>
                </ul>
            </div>

        </>
    )
}
export default AdminSideHeader;