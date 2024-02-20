// import React from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import "../../css/admin-header.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram ,faFacebook,  faTwitter ,  faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []); 

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper footer__main">
            <div className="footer__menus col-6">
              <div className="footer__menu">
                <div className="footer__menu-title">
                  CUSTOMER SERVICE
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/HowToLend">
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/FAQ">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/Return">
                      Returns & Refunds
                    </Link>
                  </li>
                  <li>
                    <Link to="/RentalArguments">
                      Rental Agreement
                    </Link>
                  </li>
                  <li>
                    <Link to="/ATDReward">
                      ATD Rewards
                    </Link>
                  </li>
                  <li>
                    <Link to="/MakeEnquiry">
                      Make an Enquiry
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu">
                <div className="footer__menu-title">
                  DISCOVER
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/Designer">
                      Designers
                    </Link>
                  </li>
                  <li>
                    <Link to="/SiteMap">
                      Site Map
                    </Link>
                  </li>
                </ul>

              </div>
              <div className="footer__menu">
                <div className="footer__menu-title">
                  ABOUT ATD
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/About">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Sustainability">
                      Sustainability
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/TermsOfService">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/Privacy-Policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer__menu">
                <div className="footer__menu-title">
                  Follow us
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <a className="nav-link mx-0 p-0 d-inline-block logo" href="/">
                      <img style={{ color: "white" }}
                        width={260}
                        className="header-logo"
                        alt="CIRCULAR COUTURE logo"
                        src="/images/footer-logo.png"
                      />
                    </a>

                  </li>
                  <div className="d-flex justify-content-evenly">
                    <FontAwesomeIcon style={{ fontSize: "27px", margin: "10px", cursor:"pointer" }} icon={faInstagram} />
                    <FontAwesomeIcon style={{ fontSize: "27px", margin: "10px", cursor:"pointer" }} icon={faFacebook} />
                    <FontAwesomeIcon style={{ fontSize: "27px", margin: "10px", cursor:"pointer" }} icon={faTwitter} />
                    <FontAwesomeIcon style={{ fontSize: "27px", margin: "10px", cursor:"pointer" }} icon={faLinkedin} />
                  </div>
                  <div>
                    {/* <button className="" type="button">Subscribe</button> */}
                    <input className="Subscribe-footer-upper-btn" type="text" name="" id="" placeholder="Enter Your Email" />
                  </div>
                </ul>
              </div>
              <div className="footer__menu">
                <div className="footer__menu-title">
                  Around Australia
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/Sydney">
                      Sydney
                    </Link>
                  </li>
                  <li>
                    <Link to="/Melbourne">
                      Melbourne
                    </Link>
                  </li>
                  <li>
                    <Link to="/Brisbane">
                      Brisbane
                    </Link>
                  </li>
                  <li>
                    <Link to="/Adelaide">
                      Adelaide
                    </Link>
                  </li>
                  <li>
                    <Link to="/Perth">
                      Perth
                    </Link>
                  </li>
                  <li>
                    <Link to="/GoldCoast">
                      Gold Coast
                    </Link>
                  </li>
                </ul>

              </div>
              {/* logo page */}
            </div>
          </div>

          <div className="footer__separator footer__separator--one" />
          <div className="footer__wrapper footer__top-searches">
            <div
              className="footer__menus"
              style={{
                flex: '0 0 100%',
                maxWidth: '100%'
              }}
            >
              <div className="footer__menu footer___bottom-width">
                <div className="footer__menu-title">
                  OUR TOP SEARCHES
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/Designers/Alemais">
                      Alemais
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Zimmermann
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Black Tie Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      L'idée
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      School Formal Dresses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/Designers/Alemais">
                      Elliatt
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Long Sleeve Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Winona
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Aje
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Maxi Dresses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/Designers/Alemais">
                      Midi Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Cocktail Party Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Leo Lin
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Sir The Label
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Chanel
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/Designers/Alemais">
                      Bec & Bridge
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Rat & Boa
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Sequin Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Saint Laurent
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      White Dresses
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/Designers/Alemais">
                      Lia Stublla
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Black Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Formal Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Engagement Party
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Shona Joy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <Link to="/Designers/Alemais">
                      Sonya
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Party Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Bags & Clutches
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Hen's Party Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/Designers/Alemais">
                      Floral Dresses
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer>
        <div className="footer-copyright text-center mt-5 pt-3 pt-lg-0">
          <p className="text">
            Terms &amp; Conditions Privacy policy &amp; cookies Affiliation{" "}
            <br />
            ©2024
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;