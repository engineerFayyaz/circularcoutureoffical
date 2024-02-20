import React, { useState } from "react";
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import UserHeader from "../../Components/UserHeader";
const TopHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
  return (
    <>
      <div
        className="fixed-top header scroll-down"
        data-controller="header"
        data-target="header.container"
        data-action="scroll@window->header#hideAnnouncementBanner"
      >
       <UserHeader/>
        <div className="main-header-section d-lg-flex justify-content-between">
          <div className="fixed-container">
            <div className="row no-gutters">
              <div className="col-md-4" style={{ marginTop: "14px" }}>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-4">
                    <p className="currancy-idicator text-uppercase mb-0">
                      🇬🇧 GBP AU$
                    </p>
                  </li>
                  <li className="list-inline-item">

                    <Link
                      className="default-link -md link text-uppercase"
                      to="/HowToLend"
                    >
                      How it works
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 text-center">
                <Link
                  className="nav-link mx-0 p-0 d-inline-block logo"
                  to="/"
                >

                  <img
                    width={350}
                    className="header-logo"
                    alt="CIRCULAR COUTURE logo"
                    src="/images/CC TM Logo.png"
                  />
                </Link>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid main-mobile-header-section">
          <div className="row h-100 align-items-center">
            <div className="col-4">
              <Link to="#" data-toggle="modal" data-target="#mobile_nav_modal">

                <FontAwesomeIcon icon={faBars} className="mb-1" />
              </Link>
              <span style={{ marginLeft: 10 }}>
                <turbo-frame id="account_credit_balance_header" />
              </span>
            </div>
            <div className="col-4 text-center">
              <Link to="/">

                <img
                  alt="CIRCULAR COUTURE Logo"
                  width={100}
                  height={21}
                  className="img img-responsive circular-couture-logo"
                  src="/images/CC TM Logo.png"
                />
              </Link>
            </div>
            <div className="col-4 text-right">
              <turbo-frame id="mobile_header_bag_frame" />

              <FontAwesomeIcon icon={faSearch} className="search-image" style={{ color: "black" }} />
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-menu-section"
          data-controller="mega-menu-contents"
        >
          <div className="row no-gutters fixed-container p-0 py-3 flex-nowrap">
            <div className="links-wrapper text-uppercase">

              <div className="top-header-width-set-main col-12 row no-gutters p-0 justify-content-around align-items-center mr-3" >

                <Link
                  to="/Collections/NewArrival"
                  className="nav-link with-mega-menu-content"
                  data-target-link-content=".link-content.-just-in"
                  data-action="mouseover->mega-menu-contents#showMenu"
                  data-target-mega-menu="justIn"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  New In

                </Link>
                <Link
                  target="_top"
                  className="nav-link with-mega-menu-content"
                  data-target-link-content=".link-content.-designers"
                  data-action="mouseover->mega-menu-contents#showMenu"
                  data-target-mega-menu="designers"
                  to="/Designer"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  Designers
                </Link>
                <Link
                  target="_top"
                  className="nav-link with-mega-menu-content new-menu-hover"
                  data-target-link-content=".link-content.-clothing"
                  data-action="mouseover->mega-menu-contents#showMenu"
                  data-target-mega-menu="clothing"
                  to="/Collections/clothing"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  Clothing
                </Link>
                <Link
                  target="_top"
                  className="nav-link with-mega-menu-content accessories-menu-hover"
                  data-target-link-content=".link-content.-accessories"
                  data-action="mouseover->mega-menu-contents#showMenu"
                  data-target-mega-menu="accessories"
                  to="/Collections/Accessories"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  Accessories
                </Link>
                <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link "
                  to="/Collections/Resale"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  Resale
                </Link>
                <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link "
                  to="/Collections/Resale"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  SEPARATES
                </Link>
                <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link "
                  to="/Collections/Resale"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  OCCASIONS
                </Link>
                <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link "
                  to="/Kids"
                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  KIDS
                </Link>
                <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link "
                  to="/InstaShop"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  INSTA-SHOP

                </Link>
                <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link "
                  to="/Collections/Resale"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                 HELP & INFO
                </Link>
                <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link"
                  to="/Edits"
                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  Edits
                </Link>
                <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link List-By-Wardrobe"
                  to="/ListItems/ListStepOne"
                  onMouseEnter={handleDropdownOpen}
                  onMouseLeave={handleDropdownClose}
                >
                  List By Wardrobe
                </Link>
              </div>
            </div>

          </div>
          {/* <div
        className={`links-content-wrapper ${isDropdownOpen ? 'active' : ''}`}
        onMouseEnter={handleDropdownOpen}
        onMouseLeave={handleDropdownClose}
      >
            <div className="link-content -just-in">
              <turbo-frame
                loading="lazy"
                id="just_in"
                src="https://www.circular-couturecollective.com/mega_menu_contents/just_in"
                complete=""
              >
                <div className="row d-flex justify-content-around">
                  <div className="col-md-2 col-xl-2">
                    <div className="links">
                      <div className="header">

                        <h6 className="text-dark">COLOTHING</h6>
                      </div>
                      <div className="body">

                        <Link target="_top" to="/Collections/Clothing">
                          All Clothing
                        </Link>
                        <Link target="_top " to="/Collections/Dresses">
                          Dresses
                        </Link>
                        <Link target="_top " to="/Collections/Tops">
                          Tops
                        </Link>
                        <Link target="_top" to="/Collections/Skirts">
                          Skirts
                        </Link>
                        <Link target="_top" to="/Collections/Trousers">
                          Trousers
                        </Link>
                        <Link target="_top" to="/Collections/Sweaters">
                          Sweaters
                        </Link>
                        <Link target="_top" to="/Collections/OuterWear">
                          Outerwear
                        </Link>
                        <Link target="_top" to="/Collections/JumpSuit">
                          Jumpsuits
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-xl-3">
                    <div className="links">
                      <div className="header">

                        <h6 className="text-dark">DRESSES</h6>
                      </div>
                      <div className="body">

                        <Link target="_top" to="/Collections/NewArrival">
                          All Dresses
                        </Link>
                        <Link target="_top " to="/Collections/DressMini">
                          Mini
                        </Link>
                        <Link target="_top " to="/Collections/DressKneeLength">
                          Kee Length
                        </Link>
                        <Link target="_top" to="/Collections/DressMidi">
                          Midi
                        </Link>
                        <Link target="_top" to="/Collections/DressMaxi">
                          Maxi
                        </Link>
                        <Link target="_top" to="/Collections/DressGowns">
                          Gowns
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex justify-content-end">
                      <img
                        src="/images/background-images/collage(1).png"
                        alt=""
                        width={350}
                      />
                    </div>
                    <div className="autumn-button d-flex justify-content-start">
                      <h1>

                        <span>AUTUMN '23</span>
                      </h1>
                      <button className="btn"> view collection</button>
                    </div>
                  </div>
                </div>
              </turbo-frame>
            </div>
          </div> */}

          <div
            className="links-content-wrapper"
            onMouseEnter={handleDropdownOpen}
            onMouseLeave={handleDropdownClose}
          // Add some styling for visualization
          >
            <div
              className={`dropdown-content ${isDropdownOpen ? 'active' : ''}`}
              style={{ display: isDropdownOpen ? "block" : "none" }}
            >
              <div className="link-content -just-in">
                <turbo-frame
                  loading="lazy"
                  id="just_in"
                  src="https://www.circular-couturecollective.com/mega_menu_contents/just_in"
                  complete=""
                >
                  <div className="row d-flex justify-content-around">
                    <div className="col-md-2 col-xl-2">
                      <div className="links">
                        <div className="header">

                          <h6 className="text-dark">COLOTHING</h6>
                        </div>
                        <div className="body">

                          <Link target="_top" to="/Collections/Clothing">
                            All Clothing
                          </Link>
                          <Link target="_top " to="/Collections/Dresses">
                            Dresses
                          </Link>
                          <Link target="_top " to="/Collections/Tops">
                            Tops
                          </Link>
                          <Link target="_top" to="/Collections/Skirts">
                            Skirts
                          </Link>
                          <Link target="_top" to="/Collections/Trousers">
                            Trousers
                          </Link>
                          <Link target="_top" to="/Collections/Sweaters">
                            Sweaters
                          </Link>
                          <Link target="_top" to="/Collections/OuterWear">
                            Outerwear
                          </Link>
                          <Link target="_top" to="/Collections/JumpSuit">
                            Jumpsuits
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-xl-3">
                      <div className="links">
                        <div className="header">

                          <h6 className="text-dark">DRESSES</h6>
                        </div>
                        <div className="body">

                          <Link target="_top" to="/Collections/NewArrival">
                            All Dresses
                          </Link>
                          <Link target="_top " to="/Collections/DressMini">
                            Mini
                          </Link>
                          <Link target="_top " to="/Collections/DressKneeLength">
                            Kee Length
                          </Link>
                          <Link target="_top" to="/Collections/DressMidi">
                            Midi
                          </Link>
                          <Link target="_top" to="/Collections/DressMaxi">
                            Maxi
                          </Link>
                          <Link target="_top" to="/Collections/DressGowns">
                            Gowns
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex justify-content-end">
                        <img
                          src="/images/background-images/collage(1).png"
                          alt=""
                          width={350}
                        />
                      </div>
                      <div className="autumn-button d-flex justify-content-start">
                        <h1>

                          <span>AUTUMN '23</span>
                        </h1>
                        <button className="btn"> view collection</button>
                      </div>
                    </div>
                  </div>
                </turbo-frame>
              </div>
            </div>
          </div>
          <div
            className="link-content-accessories d-none"
            data-mega-menu-contents-target="accessories"
            data-action="mouseleave->mega-menu-contents#hideMenu"
          >
            <turbo-frame
              loading="lazy"
              id="accessories"
              src="/mega_menu_contents/accessories"
            >
              <div className="row">
                <div className="col-md-4 col-xl-3">
                  <div className="links">
                    <div className="header">
                      <div
                        className="col-12 shimmer py-2 px-5"
                        style={{ width: "20px !important" }}
                      />
                    </div>
                    <div className="body">
                      <div
                        className="col-12 shimmer py-2 px-5"
                        style={{ width: "20px !important" }}
                      />
                      <br />
                      <div
                        className="col-12 shimmer py-2 px-5"
                        style={{ width: "20px !important" }}
                      />
                      <br />
                      <div
                        className="col-12 shimmer py-2 px-5"
                        style={{ width: "20px !important" }}
                      />
                      <br />
                      <div
                        className="col-12 shimmer py-2 px-5"
                        style={{ width: "20px !important" }}
                      />
                    </div>
                    <div className="footer">
                      <div
                        className="row shimmer py-2 px-5"
                        style={{ width: "20px !important" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-xl-9">
                  <div className="content">
                    <div className="header">
                      <div
                        className="col-12 shimmer py-2 px-5"
                        style={{ width: "20px !important" }}
                      />
                    </div>
                    <div className="body">
                      <div className="row mb-3">
                        <div
                          className="mx-4 shimmer"
                          style={{ padding: "100px !important" }}
                        />
                        <div
                          className="mx-4 shimmer"
                          style={{ padding: "100px !important" }}
                        />
                        <div
                          className="mx-4 shimmer"
                          style={{ padding: "100px !important" }}
                        />
                        <div
                          className="mx-4 shimmer"
                          style={{ padding: "100px !important" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </turbo-frame>
          </div>
        </nav>
      </div>
      <div className="models">
        <div data-controller="mobile-nav">
          <div
            className="modal filter-modal mobile-menu-modal left fade"
            id="mobile_nav_modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog m-0 " role="document">
              <div className="modal-content rounded-0 border-0">
                <div className="modal-body">
                  <div className="content -main">
                    <ul className="list-unstyled text-uppercase">
                      <li>
                        <Link
                          to="/Collections/NewArrival"
                          className=" d-block w-100"
                        >
                          New In
                        </Link>
                      </li>
                      <li>
                        <Link to="/Designer" className=" d-block w-100">
                          Designers
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="arrow d-block w-100"
                          data-toggle="modal"
                          data-target="#clothing_menu"
                        >
                          Clothing
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="arrow d-block w-100"
                          to="/Collections/Dresses"
                          data-toggle="modal"
                          data-target="#designers_menu"
                        >
                          Dresses
                        </Link>
                      </li>
                      {/* <li><Link class="d-block w-100" to="/collections/bags">Bags</Link></li> */}
                      <li>
                        <Link
                          to="/Collections/Accessories"
                          className="arrow d-block w-100"
                        >
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link className="d-block w-100" to="/Edits">
                          Edits
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="d-block  text-circular-couture-ligh w-100"
                          to="/Collections/Resale"
                        >
                          Resale
                        </Link>
                      </li>
                      <li>
                        <Link className="d-block w-100" to="/Lender">
                          Lenders
                        </Link>
                      </li>
                      <li className="devider" />
                      <li>
                        <Link className="d-block w-100" to="/HowToLend">
                          How it works
                        </Link>
                      </li>
                      <li>
                        <Link className="d-block w-100" to="/Sustainability">
                          Sustainability
                        </Link>
                      </li>
                      <li>
                        <Link className="d-block w-100" to="/About">
                          About Us
                        </Link>
                      </li>
                      <li className="devider" />
                      <li>
                        <Link
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#signin-modal"
                          className="d-block w-100"
                          to="/Signin"
                        >
                          Sign In/Register
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="closer"
                    data-action="click->mobile-nav#closeAllModals"
                  >

                    <span className="text-uppercase text-center close-text">
                      tap to close
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal filter-modal mobile-menu-modal left fade -sub-modal"
            id="just_in_menu"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog m-0 " role="document">
              <div className="modal-content rounded-0 border-0">
                <div className="modal-body text-uppercase">
                  <div className="content">
                    <div
                      className="text-center menu-header position-relative"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#mobile_nav_modal"
                    >
                      Just In
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/collections/clothing">New clothing</Link>
                      </li>
                      <li>
                        <Link to="/collections/accessories">New accessories</Link >
                      </li>
                      <li>
                        <Link to="/collections/shoes">New shoes</Link >
                      </li>
                      <li>
                        <Link to="/collections/bags">New bags</Link >
                      </li>
                      <li>
                        <Link
                          className="with-border-bottom"
                          to="/collections/new_arrivals"
                        >
                          view all
                        </Link >
                      </li>
                    </ul>
                  </div>
                  <div
                    className="closer"
                    data-action="click->mobile-nav#closeAllModals"
                  >

                    <span className="text-uppercase text-center close-text">
                      tap to close
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal filter-modal mobile-menu-modal left fade -sub-modal"
            id="designers_menu"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog m-0 " role="document">
              <div className="modal-content rounded-0 border-0">
                <div className="modal-body text-uppercase">
                  <div className="content">
                    <div
                      className="text-center menu-header position-relative"
                      data-dismiss="modal"
                      data-toggle="modal"
                      data-target="#mobile_nav_modal"
                    >
                      DRESSES
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/Collections/Dresses">ALL DRESSES</Link>
                      </li>
                      <li>
                        <Link to="/Collections/DressMini">MINI </Link>
                      </li>
                      <li>
                        <Link to="/Collections/DressKneeLength">
                          KEE LENGTH
                        </Link>
                      </li>
                      <li>
                        <Link to="/Collections/DressMidi">MIDI</Link>
                      </li>
                      <li>
                        <Link to="/Collections/DressMaxi">MAXI</Link>
                      </li>
                      <li>
                        <Link to="/Collections/DressGowns">GOWNS</Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="closer"
                    data-action="click->mobile-nav#closeAllModals"
                  >

                    <span className="text-uppercase text-center close-text">
                      tap to close
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default TopHeader;