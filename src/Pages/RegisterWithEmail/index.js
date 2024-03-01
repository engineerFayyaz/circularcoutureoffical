import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterWithEmail = () => {
    const navigate = useNavigate();
    // State variables to store form data
    const [formData, setFormData] = useState({
        id: 1, // Default ID
        typeId: 1, // Default typeId
        permissionId: 1,
        email: '',
        userName: '',
        password: '',
        name: '',
        address: '',
        country: '',
        mobileNumber: '',
        zipCode: '',
        city: '',
        state: '',
        agreedToTerms: false,
        receiveMarketingEmails: false,
    });

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    // Function to handle form submission
    const handleSubmit = async () => {
        try {
            const dataWithIds = {
                ...formData,
                typeId: 1, // Default typeId
                permissionId: 1, // Default permissionId
                id:1,
            };

            const response = await axios.post('https://localhost:7220/api/users', dataWithIds);

            console.log('Registration successful:', response.data);
            toast.success('Registration successful');
            navigate('/Signin')
            // Handle success, e.g., redirect to another page
        } catch (error) {
            console.error('Registration failed:', error.response);
            toast.error('Registration failed');

            // Handle error, e.g., show error message to the user
        }
    };


    return (
        <>
            <div className="container signIn-form-container">
                <div className="row d-flex align-items-center justify-content-center signIn-form-row">
                <div className="col-lg-6 text-center px-3" >
                        <img  src="/images/CC TM Logo cheetaa.png" width={"480px"} />
                         </div>
                    <div className="col-lg-6 model-first-div text-center">
                        <div className="col-lg-7 mx-auto mt-5 d-flex justify-content-center text-uppercase fs-5 align-items-center  mt-4">
                            <h4>Open your account</h4>
                        </div>
                        <div className="col-sm-8 mx-auto mt-4 justify-content-center  align-items-center d-flex">
                            <p>Create your CIRCULAR COUTURE account to join the collective, create wishlists and begin renting.</p>
                        </div>
                        <div className="row set-email-width ml-1">
                            <span className="ml-4">Your email*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="row  ml-4 mt-3 ">
                            <div className="col-sm-5  set-email-width1  justify-content-start">
                                <span className="">User Name*</span>
                                <br />
                                <input
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleInputChange}
                                    placeholder="User Name"
                                />
                            </div>
                        </div>
                        <div className="row set-email-width ml-1 mt-3">
                            <span className="ml-4">Password*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                            />
                        </div>
                        <div className="row set-email-width ml-1 mt-3">
                            <span className="ml-4">Name*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                            />
                        </div>
                        <div className="row set-email-width ml-1 mt-3">
                            <span className="ml-4">Address*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                            />
                        </div>
                        <div className="row set-email-width ml-1 mt-3">
                            <span className="ml-4">Country*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                placeholder="Country"
                            />
                        </div>
                        <div className="row set-email-width ml-1 mt-3">
                            <span className="ml-4">Mobile Number*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="text"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                placeholder="Mobile Number"
                            />
                        </div>
                        <div className="row set-email-width ml-1 mt-3">
                            <span className="ml-4">Zip Code*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                placeholder="Zip Code"
                            />
                        </div>
                        <div className="row set-email-width ml-1 mt-3">
                            <span className="ml-4">City*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City"
                            />
                        </div>
                        <div className="row set-email-width ml-1 mt-3">
                            <span className="ml-4">State*</span>
                            <br />
                            <input
                                className="mt-2"
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                placeholder="State"
                            />
                        </div>
                        <div className="justify-content-center para-text-email-section">
                            <p>
                                Your password must be over 8 characters long and include at least 1 upper-case letter, 1 lower-case letter, 1 number, and 1 special character.
                            </p>
                        </div>
                        <div className=" d-flex align-items-center justify-content-center">
                            <input
                                type="checkbox"
                                name="agreedToTerms"
                                checked={formData.agreedToTerms}
                                onChange={handleInputChange}
                            />
                            {/* &nbsp; &nbsp;&nbsp; */}
                            <span className='ml-2'>I agree to terms of service and privacy policy.</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-3">
                            <input
                                type="checkbox"
                                name="receiveMarketingEmails"
                                checked={formData.receiveMarketingEmails}
                                onChange={handleInputChange}
                            />
                            {/* &nbsp; &nbsp;&nbsp; */}
                            <span className='ml-2'>I agree to receive marketing emails from</span>
                        </div>
                        <div className="row sign-button-platform">
                            <Link >
                            <button type="button" onClick={handleSubmit}>
                                <span>Register</span>
                            </button>
                            </Link>
                        </div>
                        <div className="row mt-4 justify-content-center">
                            <Link
                                to="/Signup"
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

export default RegisterWithEmail;
