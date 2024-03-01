import React, {useState} from "react";
import { Link } from "react-router-dom";

const MainHeaderAdmin = () =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
                  <a
                    className="default-link -md link text-uppercase"
                    href="/how-to-rent"
                  >
                    How it works
                  </a>
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
                  <a
                    className="default-link -md list-an-item-link text-uppercase"
                    href="/listings/new"
                  >
                    List an item
                  </a>
                </li>
                <li className="list-inline-item ml-1 mr-1">
                  <turbo-frame id="account_credit_balance_header" />{" "}
                </li>
                <li className="list-inline-item ml-1 mr-1">
                  <a href="/wishlist">
                    <img
                      alt="Empty Heart Button"
                      width={24}
                      height={24}
                      src="/images/icons/header-heart.svg"
                    />
                  </a>{" "}
                </li>
                <li
                  className="list-inline-item ml-1 mr-4"
                  id="rental_bag_dropdown_wrapper"
                  data-action="mouseleave->header#hideRentalBag"
                >
                  <turbo-frame id="rental_bag_dropdown_items_frame">
                    <ul className="list-inline d-inline-block text-uppercase">
                      <li className="list-inline-item dropdown position-relative">
                        <a
                          href="#"
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
                        </a>
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
                            <a
                              className="btn btn-primary -dark-red btn-block new-arrivals-btn"
                              href="/collections/NewArrival"
                            >
                              See our new arrivals
                            </a>
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
          <span id="js-unread-message-indicator">HS</span>
        </button>
        <div
          className={`dropdown-menu dropdown-menu-right header-dropdown ${dropdownOpen ? 'show' : ''}`}
          aria-labelledby="userNavDropdownLink"
        >
          <a className="link mt-0 give-get" href="/Panel/referral">
            Give £10, Get £10
          </a>
          <a className="link dashboard" href="/Panel/dashboard">
            DASHBOARD
          </a>
          <a className="link text-uppercase" href="/Panel/lending">
            Renting &amp; Lending
          </a>
          <a className="link text-uppercase" href="/Panel/buyer">
            Buying &amp; Selling
          </a>
          <a className="link" href="/Panel/listing">
            WARDROBE
          </a>
          <a className="link" href="/Panel/messege/">
            MESSAGES <span id="unread-messages-count"></span>
          </a>
          <a className="link" href="/Panel/wishlist">
            WISHLISTS
          </a>
          <a className="link" href="/Panel/profile">
            EDIT MY PROFILE
          </a>
          <a className="link" href="/Panel/account">
            MY ACCOUNT
          </a>
          <div className="divider"></div>
          <a
            className="link -sm"
            rel="nofollow"
            data-method="delete"
            href="/users/sign_out"
          >
            SIGN OUT
          </a>
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