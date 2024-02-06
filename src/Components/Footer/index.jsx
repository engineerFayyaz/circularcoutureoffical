import React from "react";
import { Link } from "react-router-dom";
const Footer =()=>{
    return(
        <>
         <footer className="footer-section2">
          <div className="content">
            <div className="row no-gutters d-flex justify-content-between">
              <div className="col col-md">
                <div className="first-column">
                  <div className="footer-links mb-5 mb-md-0">
                    <h4 className="mb-3" style={{ color: "white" }}>
                      A B O U T &nbsp;US
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <Link className="link" to="/About">
                          Our story
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link
                          target="_blank"
                          className="link"
                          to="/Sustainability"
                        >
                          sustainability
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link className="link" to="/HowToLend">
                          How it works
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link className="link" to="/Refer-a-Friend">
                        GIVE AU$10, GET AU$10
                        </Link>
                      </li>
                      <li className="mb-3">
                              <Link className="link" to="/Community">
                                Community
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="link" to="/Press">
                                Press
                              </Link>
                            </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                <div className="second-column">
                  <div className="footer-links mb-5 mb-md-0">
                    <h4 className="mb-3" style={{ color: "white" }}>
                      R E N T / B U Y
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <Link className="link" to="#">
                          Order tracking
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link className="link" to="/TermsOfService">
                          Our service
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link className="link" to="/CookiePolicy">
                          Returns policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                <div className="third-column">
                  <div className="footer-links mb-5 mb-md-0">
                    <h4 className="mb-3" style={{ color: "white" }}>
                      L E N D / S E L L
                    </h4>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <Link className="link" to="/SellingOrRenting">
                          How to sell?
                        </Link>
                      </li>
                      <li className="mb-3">
                        <Link className="link" to="/About">
                          Our selling advice
                        </Link>
                      </li>
                      <li>
                        <Link className="link" to="/SellingOrRenting">
                          Sell an item
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                <div className="fourth-column">
                  <div className="row no-gutters">
                    <div className="col col-lg-12">
                      <div className="fifth-column">
                        <div className="footer-links mt-0 mt-md-4 mt-lg-0 pt-0 pt-md-2 pt-lg-0">
                          <h4 style={{ color: "white" }}>H E L P</h4>
                          <ul className="list-unstyled">
                            <li className="mb-3">
                              <Link className="link" to="/FAQ" target="_blank">
                                FAQs
                              </Link>
                            </li>
                            {/* <li className="mb-3">
                              <a className="link" href="#">
                                Help center
                              </a>
                            </li> */}
                            <li className="mb-3">
                              <Link className="link" to="/Contact" target="_blank">
                                Contact us
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="link" to="/TermsOfService">
                                Terms Of Services
                              </Link>
                            </li>
                            <li className="mb-3">
                              <Link className="link" to="/CookiePolicy">
                                Privacy Policy
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="whitelogo mt-2 d-flex justify-content-center">
              <img src="/images/CC TM Logo cheetaa.png" alt="" />
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