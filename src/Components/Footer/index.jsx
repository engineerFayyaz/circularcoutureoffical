import React from "react";

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
                        <a className="link" href="/About">
                          Our story
                        </a>
                      </li>
                      <li className="mb-3">
                        <a
                          target="_blank"
                          className="link"
                          href="/Sustainability"
                        >
                          sustainability
                        </a>
                      </li>
                      <li className="mb-3">
                        <a className="link" href="/HowToLend">
                          How it works
                        </a>
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
                        <a className="link" href="#">
                          Order tracking
                        </a>
                      </li>
                      <li className="mb-3">
                        <a className="link" href="/TermsOfService">
                          Our service
                        </a>
                      </li>
                      <li className="mb-3">
                        <a className="link" href="/CookiePolicy">
                          Returns policy
                        </a>
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
                        <a className="link" href="/SellingOrRenting">
                          How to sell?
                        </a>
                      </li>
                      <li className="mb-3">
                        <a className="link" href="/About">
                          Our selling advice
                        </a>
                      </li>
                      <li>
                        <a className="link" href="/SellingOrRenting">
                          Sell an item
                        </a>
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
                              <a className="link" href="#">
                                FAQs
                              </a>
                            </li>
                            <li className="mb-3">
                              <a className="link" href="#">
                                Help center
                              </a>
                            </li>
                            <li className="mb-3">
                              <a className="link" href="#">
                                Contact us
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="whitelogo mt-5 d-flex justify-content-center">
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