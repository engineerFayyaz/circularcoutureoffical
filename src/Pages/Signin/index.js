import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userName: "", // Adding userName field
    });

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "https://localhost:7220/api/users/login",
                formData
            );

            console.log("Login successful:", response.data);
            // Handle success, e.g., redirect to another page
        } catch (error) {
            console.error("Login failed:", error.response);
            // Handle error, e.g., show error message to the user
        }
    };

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
                                    style={{  backgroundColor: "#592530", padding: "5px 20px" }}
                                >
                                    <h2 style={{color: "white"}} >SIGN IN</h2>
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
                            <Link >
                            <button type="button">
                                <span>Sign in with Google</span>
                            </button>
                            </Link>
                        </div>
                        <div className="row sign-button-platform">
                            <i className="fa-brands fa-facebook" />
                            <Link >
                            <button type="button">
                                <span>Sign in with Facebook</span>
                            </button>
                            </Link>
                        </div>
                        <div className="row sign-button-platform">
                            <i className="fa-brands fa-apple" />
                            <Link>
                            <button type="button">
                                <span>Sign in with Apple</span>
                            </button>
                            </Link>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-100 mt-4">
                            <h4>OR</h4>
                        </div>
                        <div className="row set-email-width ml-2">
                            <span className="mt-4 ml-0">UserName*</span>
                            <input
                                className="mt-2"
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleInputChange}
                                placeholder="UserName"
                            />
                        </div>
                        <div className="row set-email-width ml-2">
                            <span className="mt-4 ml-0" style={{marginLeft:"-17px !important"}}>Email*</span>
                            
                            <input
                                className="mt-2"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="row set-email-width ml-2">
                            <span className="mt-4 ml-0">Password*</span>
                            
                            <input
                                className="mt-2"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                            />
                        </div>
                       
                        <div className="row sign-button-platform">
                            <button type="button" onClick={handleSubmit}>
                                <span>Sign in</span>
                            </button>
                        </div>
                        <div className="row mt-0 justify-content-start mb-3">
                            <Link
                                to="/Forgot-Password"
                                className="text-dark text-uppercase text-decoration-none"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
