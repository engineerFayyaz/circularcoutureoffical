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
                    <a href="how-it-works.html">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="/FAQ">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="/Return">
                      Returns & Refunds
                    </a>
                  </li>
                  <li>
                    <a href="rental-agreement.html">
                      Rental Agreement
                    </a>
                  </li>
                  <li>
                    <a href="atd-rewards.html">
                      ATD Rewards
                    </a>
                  </li>
                  <li>
                    <a href="customer-service.html">
                      Make an Enquiry
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu">
                <div className="footer__menu-title">
                  Around Australia
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <a href="dress-hire-sydney.html">
                      Sydney
                    </a>
                  </li>
                  <li>
                    <a href="dress-hire-melbourne.html">
                      Melbourne
                    </a>
                  </li>
                  <li>
                    <a href="dress-hire-brisbane.html">
                      Brisbane
                    </a>
                  </li>
                  <li>
                    <a href="dress-hire-adelaide.html">
                      Adelaide
                    </a>
                  </li>
                  <li>
                    <a href="dress-hire-perth.html">
                      Perth
                    </a>
                  </li>
                  <li>
                    <a href="dress-hire-gold-coast.html">
                      Gold Coast
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu">
                <div className="footer__menu-title">
                  ABOUT ATD
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <a href="/About">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/Sustainability">
                      Sustainability
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/TermsOfService">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="privacy.html">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/Contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu">
                <div className="footer__menu-title">
                  DISCOVER
                </div>
                <ul className="footer__menu-list">
                  <li>
                    <a href="designers.html">
                      Designers
                    </a>
                  </li>
                  <li>
                    <a href="site-map.html">
                      Site Map
                    </a>
                  </li>
                </ul>
                <div className="footer__menu-title mt-30">
                  Follow us
                </div>
                <ul className="footer__menu-socials">
                  <li>
                    <a
                      href="https://instagram.com/allthedressesau"
                      target="_blank"
                    >
                      <svg className="ico ico-mono-social-instagram">
                        <use xlinkHref="img/sprite-mono.svg#ico-mono-social-instagram" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://facebook.com/allthedressesau"
                      target="_blank"
                    >
                      <svg className="ico ico-mono-social-facebook">
                        <use xlinkHref="img/sprite-mono.svg#ico-mono-social-facebook" />
                      </svg>
                    </a>
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
                    <a href="designer/alemais.html">
                      Alemais
                    </a>
                  </li>
                  <li>
                    <a href="designer/zimmermann.html">
                      Zimmermann
                    </a>
                  </li>
                  <li>
                    <a href="occasion/black-tie-dresses.html">
                      Black Tie Dresses
                    </a>
                  </li>
                  <li>
                    <a href="designer/lidee.html">
                      L'idée
                    </a>
                  </li>
                  <li>
                    <a href="occasion/school-formal-dresses.html">
                      School Formal Dresses
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <a href="designer/elliatt.html">
                      Elliatt
                    </a>
                  </li>
                  <li>
                    <a href="feature/long-sleeve-dresses.html">
                      Long Sleeve Dresses
                    </a>
                  </li>
                  <li>
                    <a href="designer/winona.html">
                      Winona
                    </a>
                  </li>
                  <li>
                    <a href="designer/aje.html">
                      Aje
                    </a>
                  </li>
                  <li>
                    <a href="length/maxi-dresses.html">
                      Maxi Dresses
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <a href="length/midi-dresses.html">
                      Midi Dresses
                    </a>
                  </li>
                  <li>
                    <a href="occasion/cocktail-party-dresses.html">
                      Cocktail Party Dresses
                    </a>
                  </li>
                  <li>
                    <a href="designer/leo-lin.html">
                      Leo Lin
                    </a>
                  </li>
                  <li>
                    <a href="designer/sir-the-label.html">
                      Sir The Label
                    </a>
                  </li>
                  <li>
                    <a href="designer/chanel.html">
                      Chanel
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <a href="designer/bec-and-bridge.html">
                      Bec & Bridge
                    </a>
                  </li>
                  <li>
                    <a href="designer/rat-and-boa.html">
                      Rat & Boa
                    </a>
                  </li>
                  <li>
                    <a href="feature/sequin-dresses.html">
                      Sequin Dresses
                    </a>
                  </li>
                  <li>
                    <a href="designer/saint-laurent.html">
                      Saint Laurent
                    </a>
                  </li>
                  <li>
                    <a href="colour/white-dresses.html">
                      White Dresses
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <a href="designer/lia-stublla.html">
                      Lia Stublla
                    </a>
                  </li>
                  <li>
                    <a href="colour/black-dresses.html">
                      Black Dresses
                    </a>
                  </li>
                  <li>
                    <a href="formal-dress-hire.html">
                      Formal Dresses
                    </a>
                  </li>
                  <li>
                    <a href="occasion/engagement-dresses.html">
                      Engagement Party
                    </a>
                  </li>
                  <li>
                    <a href="designer/shona-joy.html">
                      Shona Joy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer__menu no-title">
                <ul className="footer__menu-list">
                  <li>
                    <a href="designer/sonya.html">
                      Sonya
                    </a>
                  </li>
                  <li>
                    <a href="occasion/party-dresses.html">
                      Party Dresses
                    </a>
                  </li>
                  <li>
                    <a href="category/bags.html">
                      Bags & Clutches
                    </a>
                  </li>
                  <li>
                    <a href="occasion/hens-party-dresses.html">
                      Hen's Party Dresses
                    </a>
                  </li>
                  <li>
                    <a href="feature/floral-dresses.html">
                      Floral Dresses
                    </a>
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