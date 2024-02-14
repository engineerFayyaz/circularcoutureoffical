import React from "react";
import { Link } from "react-router-dom";
const Signup =() => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 model-first-div text-center">
                        <div className="row">
                            <div className="col-lg-6 d-flex justify-content-center">
                                <Link
                                    to="/Signin"
                                    className="text-decoration-none"
                                    style={{ color: "#592530" }}
                                >
                                    <h2>SIGN IN</h2>
                                </Link>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <Link
                                    to="/Signup"
                                    className="text-decoration-none "
                                    style={{ color: "#592530" }}
                                >
                                    <h2>REGISTER</h2>
                                </Link>
                            </div>
                        </div>
                        <div className="row sign-button-platform justify-content-center">
                            <i className="fa-brands fa-google" />
                            <button type="button">
                                <span>Register with Google</span>
                            </button>
                        </div>
                        <div className="row sign-button-platform">
                            <i className="fa-brands fa-facebook" />
                            <button type="button">
                                <span>Register with Facebook</span>
                            </button>
                        </div>
                        <div className="row sign-button-platform">
                            <i className="fa-brands fa-apple" />
                            <button type="button">
                                <span>Register with Apple</span>
                            </button>
                        </div>
                        <div className="row sign-button-platform">
                            <i className="fa-solid fa-envelope" />
                            <Link to="/Register-with-email">
                            <button type="button" >
                                <span>Register with email</span>
                                </button>
                            </Link>
                        </div>
                        <div className="row">
                            <div className="text-flex">
                                <p>By registering with a 3rd party,</p>
                                <div className="sterms-width">
                                    <span>
                                        <p>I accpect</p> CIRCULAR COUTURE <Link to="#">sterms of </Link>
                                    </span>
                                </div>
                                <p>
                                    <Link to="#">service</Link> and <Link to="#">privacy policy.</Link>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="justify-content-center">
                            <h4>Were you referred?</h4>
                            <div className="row set-email-width ml-2">
                                <span className="mt-4 ml-4">Referral Code*</span>
                                <br />
                                <div className="btn-input-set">
                                    <input className="mt-2" type="text" name="" id="" placeholder="" />
                                    <button>Submit </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default Signup;