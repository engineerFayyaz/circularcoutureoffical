import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/admin-header.css";
import AdminHeader from "../../Components/AdminHeader";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // For demonstration, check if email and password match predefined values
    if (email === "Admin@circulardashbord.com" && password === "Admin12") {
      toast.success("Login successful!");
      // Redirect or perform further actions here
      window.location.href = "/AdminPanel/AdminMainPage"; // Redirect example
    } else {
      toast.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="container admin-login-container d-flex align-items-center justify-content-center m-0">
        <div className="content">
          <img src="/images/CC TM Logo.png" width={280} alt="CC TM Logo" />
          <form className="content__form" onSubmit={handleLogin}>
            <div className="content__inputs">
              <label>
                <input
                  required
                  type="text"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                
              </label>
              <label>
                <input
                  required
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
              </label>
            </div>
            <button type="submit">
              Log In
            </button>
          </form>
          <div className="content__or-text">
            <span />
            <span>
              OR
            </span>
            <span />
          </div>
          <div className="content__forgot-buttons">
            {/* <button>
              <span>
                <svg
                  className=""
                  height="512"
                  style={{ enableBackground: 'new 0 0 512 512' }}
                  version="1.1"
                  viewBox="0 0 408.788 408.788"
                  width="512"
                  x="0"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  y="0"
                >
                  <g>
                    <path
                      className=""
                      d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 0 1-8.954-8.92l-.182-47.087a8.955 8.955 0 0 1 8.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 0 1 8.955 8.955v39.704a8.955 8.955 0 0 1-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 0 1-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
                      data-original="#475993"
                      fill="#475993"
                    />
                  </g>
                </svg>
              </span>
              <span>
                Log in with Facebook
              </span>
            </button> */}
            <button>
              Forgot password?
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
