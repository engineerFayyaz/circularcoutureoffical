import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getUserFromLocalStorage} from "../../storage/loggedInUserLocalSt"
import {storeUserToLocalStorage} from "../../storage/loggedInUserLocalSt"

const MainHeaderAdmin = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
      let u=getUserFromLocalStorage();
      
      setLoggedInUser(u)
   
     }, []);

     const handleSignout = () => {
      storeUserToLocalStorage(null);
  };

    return (
        <>
        <div className="main-header-section d-lg-flex justify-content-between">
        <div className="fixed-container">
          <div className="row no-gutters d-flex align-items-center ">
            <div className="col-md-4">
              <ul className="list-inline mb-0">
                <li className="list-inline-item mr-4">
                  <p className="currancy-idicator text-uppercase mb-0">
                    🇬🇧 GBP £
                  </p>
                </li>
                <li className="list-inline-item">
                  <Link
                    className="default-link -md link text-uppercase"
                    to="/how-to-rent"
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
            <div className="col-md-4">
              <ul className="list-inline mb-0 text-right mr-4 mt-1">
                <li className="list-inline-item mr-1">
                  <Link
                    className="default-link -md list-an-item-link text-uppercase"
                    to="/listingnew"
                  >
                    List an item
                  </Link>
                </li>
                <li className="list-inline-item ml-1 mr-1">
                  <turbo-frame id="account_credit_balance_header" />{" "}
                </li>
                <li className="list-inline-item ml-1 mr-1">
                  <Link to="/wishlist">
                    <img
                      alt="Empty Heart Button"
                      width={24}
                      height={24}
                      src="/images/icons/header-heart.svg"
                    />
                  </Link>{" "}
                </li>
                <li
                  className="list-inline-item ml-1 mr-4"
                  id="rental_bag_dropdown_wrapper"
                  data-action="mouseleave->header#hideRentalBag"
                >
                  <turbo-frame id="rental_bag_dropdown_items_frame">
                    <ul className="list-inline d-inline-block text-uppercase">
                      <li className="list-inline-item dropdown position-relative">
                        <Link
                          to="#"
                          className="dropdown-toggle rental-bag-dropdown-btn"
                          role="button"
                          id="rental_bag_dropdown"
                          data-toggle="dropdown"
                        >
                          <img
                            alt="Rental Bag"
                            width="19.33"
                            height="23.52"
                            src="/images/icons/rental-bag.svg"
                          />
                        </Link>
                        <div
                          className="dropdown-menu dropdown-menu-left rental-bag-dropdown"
                          aria-labelledby="rental_bag_dropdown"
                          data-action="mouseover->header#showRentalBag"
                          style={{}}
                        >
                          <div className="header text-capitalize">
                            My Rental Bag{" "}
                          </div>
                          <div className="placeholder text-center">
                            <div className="mb-3">
                              Your rental bag is empty.
                            </div>
                            <div className="mb-3">
                              Click below to find your dream rental piece!
                            </div>
                            <Link
                              className="btn btn-primary -dark-red btn-block new-arrivals-btn"
                              to="/collections/NewArrival"
                            >
                              See our new arrivals
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </turbo-frame>
                </li>
                <li className="list-inline-item">
      <div className="dropdown">
        <button
          className="header-dropdown-btn dropdown-toggle"
          type="button"
          id="userNavDropdownLink"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
        >
          <span id="js-unread-message-indicator"> {loggedInUser && loggedInUser.name.substring(0, 2)}</span>
        </button>
        <div
          className={`dropdown-menu dropdown-menu-left header-dropdown ${dropdownOpen ? 'show' : ''}`}
          aria-labelledby="userNavDropdownLink"
        >
          <Link className="link mt-0 give-get" to="/Panel/referral">
            Give £10, Get £10
          </Link>
          <Link className="link dashboard" to="/Panel/dashboard">
            DASHBOARD
          </Link>
          <Link className="link text-uppercase" to="/Panel/lending">
            Renting &amp; Lending
          </Link>
          <Link className="link text-uppercase" to="/Panel/buyer">
            Buying &amp; Selling
          </Link>
          <Link className="link" to="/Panel/listing">
            WARDROBE
          </Link>
          <Link className="link" to="/Panel/messege/">
            MESSAGES <span id="unread-messages-count"></span>
          </Link>
          <Link className="link" to="/Panel/wishlist">
            WISHLISTS
          </Link>
          <Link className="link" to="/Panel/profile">
            EDIT MY PROFILE
          </Link>
          <Link className="link" to="/Panel/account">
            MY ACCOUNT
          </Link>
          <div className="divider"></div>
          <Link
            className="link -sm"
            rel="nofollow"
            data-method="delete"
            to="/"
            onClick={handleSignout}
          >
            Signout 
          </Link>
        </div>
      </div>
    </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default MainHeaderAdmin;