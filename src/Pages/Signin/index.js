import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {login} from "../../Redux/actions/userActions"
import { useDispatch } from 'react-redux'; // Import dispatch from react-redux
import {storeUserToLocalStorage} from "../../storage/loggedInUserLocalSt"

const Signin = () => {
    const navigate = useNavigate(); // Using useNavigate hook for navigation
    const dispatch = useDispatch();
    // State variables to store form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        userName: "",
    });

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

   
    const handleSubmit = async () => {
        try {
            const data = await dispatch(login(formData));
            // Show success toast message
            toast.success('Login successful!');
            debugger
            storeUserToLocalStorage(data.results)
            navigate('/')
            console.log("navigate to")
        } catch (error) {
            // Show error toast message
            toast.error('Login failed. Please check your credentials.');
            console.error(error); // Log the error for debugging
        }
    };
    return (
        <>
            <div className="container signIn-form-container">
                <Link to={"/"} 
                style={{position:"absolute",right:"16px",top:"6px"}}>
                <FontAwesomeIcon icon={faXmark}  style={{color:"white",fontSize:"35px"}}/>
                </Link>
                <div className="row d-flex align-items-center justify-content-center signIn-form-row">
                    <div className="col-lg-6 text-center px-3" >
                        <img  src="/images/CC TM Logo cheetaa.png" width={"480px"} />
                         </div>
                    <div className="col-lg-6  model-first-div text-center">
                        <div className="row">
                            <div className="col-lg-6 d-flex justify-content-center signIn-form-column">
                                <Link
                                    to="/Signin"
                                    className="text-decoration-none"
                                    style={{  backgroundColor: "#592530", padding: "15px 28px" }}
                                >
                                    <h2 style={{color: "white",fontSize:"20px"}} >SIGN IN</h2>
                                </Link>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <Link
                                    to="/Signup"
                                    className="text-decoration-none "
                                    style={{ color: "#592530",padding: "15px 0px" }}
                                >
                                    <h2 style={{fontSize: "20px"}}>REGISTER</h2>
                                </Link>
                            </div>
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
                        <Link >
                            <button type="button" onClick={handleSubmit}>
                                <span>Sign In</span>
                            </button>
                            </Link>
                        </div>
                        <div className="row mt-1 justify-content-start mb-3">
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
