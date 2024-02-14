import React from "react";
import { Link } from "react-router-dom";
// import "../../css/admin-header.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper footer__main">
            <div className="footer__menus">
              <div className="footer__menu">
                <div className="footer__menu-title">
                  CUSTOMER SERVICE
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <Link to="how-it-works.html">
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
                    <Link to="/PrivacyPolicy">
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
                    <Link to=" /SiteMap">
                      Site Map
                    </Link>
                  </li>
                </ul>
                <div className="footer__menu-title mt-30">
                  Follow us
                </div>
                <ul className="footer__menu-socials">
                  <li>
                    <Link
                      to="https://instagram.com/allthedressesau"
                      target="_blank"
                    >
                      <svg className="ico ico-mono-social-instagram">
                        <use xlinkHref="img/sprite-mono.svg#ico-mono-social-instagram" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://facebook.com/allthedressesau"
                      target="_blank"
                    >
                      <svg className="ico ico-mono-social-facebook">
                        <use xlinkHref="img/sprite-mono.svg#ico-mono-social-facebook" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="footer__bottom">
            <div
              className="footer__payments js-teleport"
              data-teleport-condition=">992"
              data-teleport-to="footer-payment"
            >
              <div className="footer__payment">
                <svg className="ico ico-mono-Visa">
                  <use xlinkHref="img/sprite-mono.svg#ico-mono-Visa" />
                </svg>
              </div>
              <div className="footer__payment">
                <svg className="ico ico-mono-AmericanExpress">
                  <use xlinkHref="img/sprite-mono.svg#ico-mono-AmericanExpress" />
                </svg>
              </div>
              <div className="footer__payment">
                <svg className="ico ico-color-MasterCard">
                  <use xlinkHref="img/sprite-color.svg#ico-color-MasterCard" />
                </svg>
              </div>
              <div className="footer__payment">
                <svg className="ico ico-mono-ApplePay">
                  <use xlinkHref="img/sprite-mono.svg#ico-mono-ApplePay" />
                </svg>
              </div>
              <div className="footer__payment">
                <svg className="ico ico-mono-GooglePay">
                  <use xlinkHref="img/sprite-mono.svg#ico-mono-GooglePay" />
                </svg>
              </div>
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
              <div className="footer__menu">
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
          {/* <div className="footer__separator footer__separator--two" /> */}
          {/* <div className="footer__copyright">
            <div className="footer__copyright-logo">
              <svg className="ico ico-mono-atd-logo-full">
                <use xlinkHref="img/sprite-mono.svg#ico-mono-atd-logo-full" />
              </svg>
            </div>
            <div className="footer__copyright-text">
              Copyright All The Dresses 2024
            </div>
          </div> */}
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