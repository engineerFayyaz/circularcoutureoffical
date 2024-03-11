// import React from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "../../css/admin-header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
    fetchDesigners();
  }, []);

  const fetchDesigners = async () => {
    try {
      const response = await fetch("https://localhost:7220/api/product-designers");
      if (!response.ok) {
        throw new Error("Failed to fetch designers");
      }
      const data = await response.json();
      setDesigners(data.results.sort((a, b) => a.name.localeCompare(b.name))); // Sort designers by name
    } catch (error) {
      console.error("Error fetching designers:", error);
    }
  };

  return (
    <>
      <footer className="footer">

        <div className="container-fluid footer__wrapper footer__main">
          <div className="row footer__menus p-4 px-5">
            <div className="col-12 footer__menu">
              <div className="footer__menu-title">CUSTOMER SERVICE</div>
              <ul className="footer__menu-list">
                <li>
                  <Link to="/HowToLend">How It Works</Link>
                </li>
                <li>
                  <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                  <Link to="/Return">Returns & Refunds</Link>
                </li>
                <li>
                  <Link to="/RentalArguments">Rental Agreement</Link>
                </li>
                <li>
                  <Link to="/ATDReward">ATD Rewards</Link>
                </li>
                <li>
                  <Link to="/MakeEnquiry">Make an Enquiry</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 footer__menu">
              <div className="footer__menu-title">DISCOVER</div>
              <ul className="footer__menu-list">
                <li>
                  <Link to="/Designer">Designers</Link>
                </li>
                <li>
                  <Link to="/SiteMap">Site Map</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 footer__menu">
              <div className="footer__menu-title">ABOUT ATD</div>
              <ul className="footer__menu-list">
                <li>
                  <Link to="/About">About Us</Link>
                </li>
                <li>
                  <Link to="/Sustainability">Sustainability</Link>
                </li>
                <li>
                  <Link to="/TermsOfService">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/Privacy-Policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 footer__menu">
              <div className="footer__menu-title">Follow us</div>
              <ul className="footer__menu-list">
                <li>
                  <a className="nav-link mx-0 p-0 d-inline-block logo" href="/">
                    <img
                      style={{ color: "white" }}
                      width={260}
                      className="header-logo"
                      alt="CIRCULAR COUTURE logo"
                      src="/images/footer-logo.png"
                    />
                  </a>
                </li>
                <div className="d-flex justify-content-evenly justify-sm-start social-icons-group">
                  <FontAwesomeIcon
                    style={{ fontSize: "27px", margin: "10px", cursor: "pointer" }}
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    style={{ fontSize: "27px", margin: "10px", cursor: "pointer" }}
                    icon={faFacebook}
                  />
                  <FontAwesomeIcon
                    style={{ fontSize: "27px", margin: "10px", cursor: "pointer" }}
                    icon={faTwitter}
                  />
                  <FontAwesomeIcon
                    style={{ fontSize: "27px", margin: "10px", cursor: "pointer" }}
                    icon={faLinkedin}
                  />
                </div>
                <div>
                  <input
                    className="Subscribe-footer-upper-btn"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Email"
                  />
                </div>
              </ul>
            </div>
            <div className="col-12 footer__menu">
              <div className="footer__menu-title">Around Australia</div>
              <ul className="footer__menu-list">
                <li>
                  <Link to="/Sydney">Sydney</Link>
                </li>
                <li>
                  <Link to="/Melbourne">Melbourne</Link>
                </li>
                <li>
                  <Link to="/Brisbane">Brisbane</Link>
                </li>
                <li>
                  <Link to="/Adelaide">Adelaide</Link>
                </li>
                <li>
                  <Link to="/Perth">Perth</Link>
                </li>
                <li>
                  <Link to="/GoldCoast">Gold Coast</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="footer__separator footer__separator--one" />

        <div className="container footer__wrapper footer__top-searches">
          <div
            className="row footer__menus "
            style={{
              flex: "0 0 100%",
              maxWidth: "100%",
            }}
          >
            <div className="col-6 col-md-2 footer__menu text-sm-start">
              <div className="footer__menu-title">OUR TOP SEARCHES</div>
              <ul className="footer__menu-list">
                {designers.slice(0, 5).map((designer, index) => (
                  <li key={index}>
                    <Link to={`/designers/${designer.id}/${encodeURIComponent(designer.name)}`}>
                      {designer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-2 footer__menu no-title">
              <ul className="footer__menu-list">
                {designers.slice(5, 10).map((designer, index) => (
                  <li key={index}>
                    <Link to={`/designers/${designer.id}/${encodeURIComponent(designer.name)}`}>
                      {designer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-2 footer__menu no-title">
              <ul className="footer__menu-list">
                {designers.slice(10, 15).map((designer, index) => (
                  <li key={index}>
                    <Link to={`/designers/${designer.id}/${encodeURIComponent(designer.name)}`}>
                      {designer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-2 footer__menu no-title">
              <ul className="footer__menu-list">
                {designers.slice(15, 20).map((designer, index) => (
                  <li key={index}>
                    <Link to={`/designers/${designer.id}/${encodeURIComponent(designer.name)}`}>
                      {designer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-2 footer__menu no-title">
              <ul className="footer__menu-list">
                {designers.slice(20, 25).map((designer, index) => (
                  <li key={index}>
                    <Link to={`/designers/${designer.id}/${encodeURIComponent(designer.name)}`}>
                      {designer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-md-2 footer__menu no-title">
              <ul className="footer__menu-list">
                {designers.slice(25, 30).map((designer, index) => (
                  <li key={index}>
                    <Link to={`/designers/${designer.id}/${encodeURIComponent(designer.name)}`}>
                      {designer.name}
                    </Link>
                  </li>
                ))}
              </ul>
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
};
export default Footer;
