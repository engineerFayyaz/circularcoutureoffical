import React from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-6 model-first-div text-center">
                      <div className="col-lg-5 mx-auto mt-5 d-flex justify-content-center text-uppercase fs-5 align-items-center  mt-4">
                          <h4>forget your password</h4>
                      </div>
                      <div className="col-sm-7 mx-auto mt-4 justify-content-center  align-items-center d-flex">
                          <p>Enter your Email Address and will link to Reset Your Password</p>
                      </div>
                      <div className="row set-email-width ml-1">
                          <span className="ml-4"> your email*</span>
                          <br />
                          <input
                              className="mt-2"
                              type="email"
                              name=""
                              id=""
                              placeholder="Email"
                          />
                      </div>
                      <div className="row sign-button-platform">
                          <button type="button">
                              <span>reset your password</span>
                          </button>
                      </div>
                      <div className="row mt-4 justify-content-center">
                          <Link
                              to="/signin"
                              className="text-dark text-uppercase text-decoration-none"
                          >
                              &lt; back
                          </Link>
                      </div>
                  </div>
              </div>
          </div>


    </>
  );
};
export default ForgotPassword;
