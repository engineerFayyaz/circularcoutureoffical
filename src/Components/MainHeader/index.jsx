import React, {useState} from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {

  return (
    <>
        <div className="main-header-section d-lg-flex justify-content-between">
          <div className="fixed-container">
            <div className="row no-gutters">
              <div className="col-md-4" style={{ marginTop: "14px" }}>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-4">
                    <p className="currancy-idicator text-uppercase mb-0">
                      AUD AU$
                    </p>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="default-link -md link text-uppercase"
                      to="/HowToLend"
                    >
                      How it works
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 text-center">
                <Link className="nav-link mx-0 p-0 d-inline-block logo" to="/">
                  <img
                    width={350}
                    className="header-logo"
                    alt="CIRCULAR COUTURE logo"
                    src="/images/CC TM Logo.png"
                  />
                </Link>
              </div>
              <div
                className="col-md-4"
                style={{
                  marginTop: "14px",
                  textAlign: "end",
                  paddingRight: "11px",
                }}
              >
                <Link
                  to={"/Signin"}
                  style={{ fontSize: "11px !important", cursor: "pointer" }}
                  data-toggle="modal"
                  data-target="#signin-modal"
                  className="text-dark"
                >
                  <b>SIGN IN/ REGISTER</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default MainHeader;
