import React from "react";

const TopHeader =()=>{
    return(
        <>
          <div
          className="fixed-top header scroll-down"
          data-controller="header"
          data-target="header.container"
          data-action="scroll@window->header#hideAnnouncementBanner"
        >
          <div className="top-header d-flex justify-content-end bg-dark text-light mt-4 p-1">
            <div className="me-5 four-icon d-flex align-items-center gap-5 mt-3">
              <div className="dropdown dropup ">
                <ul className="list-inline mb-0  ">
                  <li className="list-inline-item">
                    {" "}
                    <a
                      href="#"
                      className="default-link -md link text-uppercase"
                      data-toggle="modal"
                      data-target="#signin-modal"
                    >
                      <i className="far fa-user " />
                    </a>{" "}
                  </li>
                </ul>
              </div>
              <i className="fas fa-shopping-bag" />
              <i className="fas fa-search" />
              <i className="far fa-heart" />
            </div>
          </div>
          <div className="main-header-section d-lg-flex justify-content-between">
            <div className="fixed-container">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-4">
                      <p className="currancy-idicator text-uppercase mb-0">
                        🇬🇧 GBP £
                      </p>
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a
                        className="default-link -md link text-uppercase"
                        href="/HowToLend"
                      >
                        How it works
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 text-center">
                  <a
                    className="nav-link mx-0 p-0 d-inline-block logo"
                    href="/Home"
                  >
                    {" "}
                    <img
                      width={350}
                      className="header-logo"
                      alt="CIRCULAR COUTURE logo"
                      src="/images/CC TM Logo.png"
                    />
                  </a>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid main-mobile-header-section">
            <div className="row h-100 align-items-center">
              <div className="col-4">
                <a href="#" data-toggle="modal" data-target="#mobile_nav_modal">
                  {/* https://res.cloudinary.com/dcaptnlz3/image/asset/feather-menu-a27514f57eb39570acf76060d920ca9b.svg */}
                  <img
                    alt="An icon of a menu"
                    className="mb-1"
                    width={26}
                    height={18}
                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/burger-menu-lighter-4f3d911c8cdee134cbe592dc97fa8295.svg"
                  />
                </a>{" "}
                <span style={{ marginLeft: 10 }}>
                  <turbo-frame id="account_credit_balance_header" />{" "}
                </span>
              </div>
              <div className="col-4 text-center">
                <a href="/Home">
                  {" "}
                  <img
                    alt="CIRCULAR COUTURE Logo"
                    width={100}
                    height={21}
                    className="img img-responsive circular-couture-logo"
                    src="/images/CC TM Logo.png"
                  />
                </a>
              </div>
              <div className="col-4 text-right">
                <turbo-frame id="mobile_header_bag_frame" />{" "}
                <img
                  alt="An icon of a search"
                  className="search-image"
                  data-toggle="modal"
                  data-target="#nav_mobile_search_form"
                  width={24}
                  height={24}
                  src="https://res.cloudinary.com/dcaptnlz3/image/asset/search2-ab289f14410a86cee3a5373e949dd4bf.svg"
                />
              </div>
            </div>
          </div>
          <nav
            className="navbar navbar-menu-section"
            data-controller="mega-menu-contents"
          >
            <div className="row no-gutters fixed-container p-0 py-3 flex-nowrap">
              <div className="links-wrapper text-uppercase">
                <div className="" />
                <div className="col-12 row no-gutters p-0 justify-content-around align-items-center mr-3">
                  <a
                    target="_top"
                    className="nav-link with-mega-menu-content "
                    data-target-link-content=".link-content.-just-in"
                    data-action="mouseover->mega-menu-contents#showMenu"
                    data-target-mega-menu="justIn"
                    href="/Collections/NewArrival"
                  >
                    New In
                  </a>
                  <a
                    target="_top"
                    className="nav-link with-mega-menu-content"
                    data-target-link-content=".link-content.-designers"
                    data-action="mouseover->mega-menu-contents#showMenu"
                    data-target-mega-menu="designers"
                    href="/Designer"
                  >
                    Designers
                  </a>
                  <a
                    target="_top"
                    className="nav-link with-mega-menu-content new-menu-hover"
                    data-target-link-content=".link-content.-clothing"
                    data-action="mouseover->mega-menu-contents#showMenu"
                    data-target-mega-menu="clothing"
                    href="javascript:void(0);"
                  >
                    Clothing
                  </a>
                  <a
                    target="_top"
                    className="nav-link with-mega-menu-content accessories-menu-hover"
                    data-target-link-content=".link-content.-accessories"
                    data-action="mouseover->mega-menu-contents#showMenu"
                    data-target-mega-menu="accessories"
                    href="/Collections/Accessories"
                  >
                    Accessories
                  </a>
                  <a
                    data-action="mouseover->mega-menu-contents#hideMenu"
                    target="_top"
                    className="nav-link "
                    href="/Collections/Resale"
                  >
                    Resale
                  </a>
                  <a
                    data-action="mouseover->mega-menu-contents#hideMenu"
                    target="_top"
                    className="nav-link"
                    href="/Edits"
                  >
                    Edits
                  </a>
                  <a
                    data-action="mouseover->mega-menu-contents#hideMenu"
                    target="_top"
                    className="nav-link"
                    href="/ListItems/ListStepOne"
                  >
                    List By Wardrobe
                  </a>
                </div>
              </div>
              {/* <div class="row no-gutters justify-content-end">
          <div class="search-nav-wrapper pl-2">
              <form class="default-form h-100" novalidate="novalidate" action="/search" accept-charset="UTF-8"
                  method="get"> <span><img alt="An icon of a search" width="15" height="15"
                          src="https://res.cloudinary.com/dcaptnlz3/image/asset/search2-ab289f14410a86cee3a5373e949dd4bf.svg"></span>
                  <input class="form-control search-input m-0 d-inline text-uppercase h-100"
                      placeholder="SEARCH..." required="required" type="search" name="listing[search_for]"
                      id="listing_search_for">
              </form>
          </div>
      </div> */}
            </div>
            <div className="links-content-wrapper d-none">
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
                          {" "}
                          <h6 className="text-dark">COLOTHING</h6>
                        </div>
                        <div className="body">
                          {" "}
                          <a target="_top" href="/Collections/Clothing">
                            All Clothing
                          </a>
                          <a target="_top " href="/Collections/Dresses">
                            Dresses
                          </a>
                          <a target="_top " href="/Collections/Tops">
                            Tops
                          </a>
                          <a target="_top" href="/Collections/Skirts">
                            Skirts
                          </a>
                          <a target="_top" href="/Collections/Trousers">
                            Trousers
                          </a>
                          <a target="_top" href="/Collections/Sweaters">
                            Sweaters
                          </a>
                          <a target="_top" href="/Collections/OuterWear">
                            Outerwear
                          </a>
                          <a target="_top" href="/Collections/JumpSuit">
                            Jumpsuits
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-xl-3">
                      <div className="links">
                        <div className="header">
                          {" "}
                          <h6 className="text-dark">DRESSES</h6>
                        </div>
                        <div className="body">
                          {" "}
                          <a target="_top" href="/Collections/NewArrival">
                            All Dresses
                          </a>
                          <a target="_top " href="/Collections/DressMini">
                            Mini
                          </a>
                          <a target="_top " href="/Collections/DressKneeLength">
                            Kee Length
                          </a>
                          <a target="_top" href="/Collections/DressMidi">
                            Midi
                          </a>
                          <a target="_top" href="/Collections/DressMaxi">
                            Maxi
                          </a>
                          <a target="_top" href="/Collections/DressGowns">
                            Gowns
                          </a>
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
                          {" "}
                          <span>AUTUMN '23</span>
                        </h1>
                        <button className="btn"> view collection</button>
                      </div>
                    </div>
                  </div>
                </turbo-frame>
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
                        <a
                          href="/Collections/NewArrival"
                          className=" d-block w-100"
                        >
                          New In
                        </a>
                      </li>
                      <li>
                        <a href="/Designer" className=" d-block w-100">
                          Designers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="arrow d-block w-100"
                          data-toggle="modal"
                          data-target="#clothing_menu"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          className="arrow d-block w-100"
                          href="/Collections/Dresses"
                          data-toggle="modal"
                          data-target="#designers_menu"
                        >
                          Dresses
                        </a>
                      </li>
                      {/* <li><a class="d-block w-100" href="/collections/bags">Bags</a></li> */}
                      <li>
                        <a
                          href="/Collections/Accessories"
                          className="arrow d-block w-100"
                        >
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a className="d-block w-100" href="/Edits">
                          Edits
                        </a>
                      </li>
                      <li>
                        <a
                          className="d-block  text-circular-couture-ligh w-100"
                          href="/Collections/Resale"
                        >
                          Resale
                        </a>
                      </li>
                      <li>
                        <a className="d-block w-100" href="/Lender">
                          Lenders
                        </a>
                      </li>
                      <li className="devider" />
                      <li>
                        <a className="d-block w-100" href="/HowToLend">
                          How it works
                        </a>
                      </li>
                      <li>
                        <a className="d-block w-100" href="/Sustainability">
                          Sustainability
                        </a>
                      </li>
                      <li>
                        <a className="d-block w-100" href="/About">
                          About Us
                        </a>
                      </li>
                      <li className="devider" />
                      <li>
                        <a
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#signin-modal"
                          className="d-block w-100"
                          href="#"
                        >
                          Sign In/Register
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="closer"
                    data-action="click->mobile-nav#closeAllModals"
                  >
                    {" "}
                    <span className="text-uppercase text-center close-text">
                      tap to close
                    </span>{" "}
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
                      data-target="#--mobile_nav_modal"
                    >
                      Just In
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/collections/clothing">New clothing</a>
                      </li>
                      <li>
                        <a href="/collections/accessories">New accessories</a>
                      </li>
                      <li>
                        <a href="/collections/shoes">New shoes</a>
                      </li>
                      <li>
                        <a href="/collections/bags">New bags</a>
                      </li>
                      <li>
                        <a
                          className="with-border-bottom"
                          href="/collections/new_arrivals"
                        >
                          view all
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="closer"
                    data-action="click->mobile-nav#closeAllModals"
                  >
                    {" "}
                    <span className="text-uppercase text-center close-text">
                      tap to close
                    </span>{" "}
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
                      data-target="#--mobile_nav_modal"
                    >
                      DRESSES
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/Collections/Dresses">ALL DRESSES</a>
                      </li>
                      <li>
                        <a href="/Collections/DressMini">MINI </a>
                      </li>
                      <li>
                        <a href="/Collections/DressKneeLength">
                          KEE LENGTH
                        </a>
                      </li>
                      <li>
                        <a href="/Collections/DressMidi">MIDI</a>
                      </li>
                      <li>
                        <a href="/Collections/DressMaxi">MAXI</a>
                      </li>
                      <li>
                        <a href="/Collections/DressGowns">GOWNS</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="closer"
                    data-action="click->mobile-nav#closeAllModals"
                  >
                    {" "}
                    <span className="text-uppercase text-center close-text">
                      tap to close
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal filter-modal mobile-menu-modal left fade -sub-modal"
            id="clothing_menu"
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
                      data-target="#--mobile_nav_modal"
                    >
                      Clothings
                    </div>
                    <ul className="list-unstyled">
                      <li>
                        <a href="/Collections/Clothing">ALL CLOTHING</a>
                      </li>
                      <li>
                        <a href="/Collections/Dresses">DRESSES</a>
                      </li>
                      <li>
                        <a href="/Collections/Tops">TOPS </a>
                      </li>
                      <li>
                        <a href="/Collections/Skirts">SHIRTS</a>
                      </li>
                      <li>
                        <a href="/Collections/Trousers">TROUSERS</a>
                      </li>
                      <li>
                        <a href="/Collections/Sweaters">SWEATERS</a>
                      </li>
                      <li>
                        <a href="/Collections/OuterWear">OUTERWEAR</a>
                      </li>
                      <li>
                        <a href="/Collections/JumpSuit">JUMPSUITS</a>
                      </li>
                      {/* <li><a class="with-border-bottom" href="/collections/clothing">view all</a></li> */}
                    </ul>
                  </div>
                  <div
                    className="closer"
                    data-action="click->mobile-nav#closeAllModals"
                  >
                    {" "}
                    <span className="text-uppercase text-center close-text">
                      tap to close
                    </span>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="how-credit-works-modal"
            className="component modal how-credit-works-modal fade"
            data-controller="modal-component"
            data-modal-component-state-value="hide"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                {" "}
                <span
                  className="close-modal"
                  data-action="click->modal-component#hideModal"
                >
                  <img
                    alt="An icon of a close"
                    width={24}
                    height={24}
                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                  />
                </span>
                <h3 className="text-center">How Credit Works</h3>
                <p>
                  {" "}
                  Earn 5% of the total rental price as CIRCULAR COUTURE credit
                  on every successful rental. Successful rentals do not have a
                  fit guarantee or dispute resolution refund. Credits can be
                  applied at checkout on future rentals. Credits will be awarded
                  48 hours after the rental end date. No minimum spend applies
                  but credits cannot be used in conjunction with coupon codes.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="modal filter-modal mobile-nav-search fade -sub-modal"
            id="nav_mobile_search_form"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog m-0 " role="document">
              <div className="modal-content rounded-0 border-0">
                <div className="modal-body text-uppercase">
                  {" "}
                  <span className="close-button" data-dismiss="modal">
                    <img
                      height={21}
                      className="mb-1"
                      alt="Close search form"
                      src="https://res.cloudinary.com/dcaptnlz3/image/asset/close2-9ce00f8bad7b880f0021600df402c8e5.svg"
                    />
                  </span>
                  <form
                    className="default-form"
                    action="/search/header%20search"
                    acceptCharset="UTF-8"
                    data-remote="true"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="_method"
                      defaultValue="patch"
                      autoComplete="off"
                    />
                    <input
                      type="hidden"
                      name="authenticity_token"
                      defaultValue="4tNVQCTgx8xOJG5Kma0FHXJ6O6RuGFarcaHOwVVKtInUcj/nEc3FJuS51jBYyrkOl+IurmRb4MzhBDcJIAjW+A=="
                      autoComplete="off"
                    />
                    <div className="form-group mb-0 d-flex">
                      <input
                        className="form-control d-inline mb-0 mr-2"
                        autoComplete="off"
                        required="required"
                        type="search"
                        name="listing[search_for]"
                        id="listing_search_for"
                      />
                      <input
                        type="submit"
                        name="commit"
                        defaultValue="Search"
                        className="btn btn-primary -dark-red"
                        data-disable-with="Search"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-loading d-none">
          <div className="overlay-loading__inner">
            {" "}
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dcaptnlz3/image/asset/loader-gold-5f30b2355e5bda1b758dbf28e77079dc.gif"
            />
          </div>
          <div className="overlay-loading__content">
            <p className="mt-5 mb-0">We are uploading your image...</p>
            <p>
              (This may take a few moments for large files or a slow connection)
            </p>
          </div>
        </div>
        <div
          className="modal tappable-overlay-modal fade bottom"
          id="verification_pending_modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-add-to-body-class="regular-backdrop"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content rounded-0 border-0">
              <div className="modal-header border-0" data-dismiss="modal">
                <h3 data-dismiss="modal">TAP TO RETURN</h3>
              </div>
              <div className="modal-body text-center">
                <h3>VERIFICATION PENDING</h3>
                <p>
                  {" "}
                  Thank you for submitting your ID. It can sometimes take a few
                  minutes to process so hang tight and you'll receive an email
                  to confirm your verification.{" "}
                </p>{" "}
                <a
                  className="btn btn-primary -dark-red form-control"
                  data-dismiss="modal"
                  href="#"
                >
                  CLOSE
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade default-modal tap-to-close-modal confirm-email-modal"
          id="registration_confirm_email_modal"
          data-keyboard="false"
          data-backdrop="static"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          data-controller="sign-up-email-confirms"
          data-sign-up-email-confirms-triggering-modal-id=""
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content content rounded-0">
              <div className="modal-header border-bottom-0 pb-0" />
              <div className="modal-body body pb-5 px-3 px-md-5 mx-sm-0 mx-md-4">
                <div className="email-confirmation text-center">
                  <h5 className="modal-title title">Confirm Your Email</h5>
                  <p className="subtitle mb-0">
                    You told us this is your email, is that correct?
                  </p>
                  <p
                    className="email my-4 pb-2"
                    id="user_confirm_email_container"
                  />
                  <button
                    name="commit"
                    className="btn btn-primary btn-block -dark-red button mx-auto mb-4"
                    id="confirm-email-modal-submit-button"
                    data-target="submitRegistrationFormButton"
                    data-action="click->sign-up-email-confirms#submitEmailSignUpForm"
                  >
                    YES, THAT IS CORRECT
                  </button>{" "}
                  <a
                    href="#"
                    className="footer-link text-uppercase"
                    data-action="click->sign-up-email-confirms#backToTriggeringModalForm"
                  >
                    No, I need to change it
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-controller="apple-sign-in facebook-sign-in google-sign-in"
          data-referral-sign-up-code=""
          data-influencer-sign-up-referral-code=""
          data-apple-sign-in-redirect-url="https://www.circular-couturecollective.com/users/auth/apple"
          data-apple-sign-in-state-token="eyJhbGdvcml0aG0iOiJSUzI1NiIsImFsZyI6Im5vbmUifQ.eyJyZXF1ZXN0X2Zyb20iOiJXRUIifQ."
          data-facebook-sign-in-redirect-url="https://www.circular-couturecollective.com/users/auth/facebook"
          data-facebook-sign-in-client-id={271225253722003}
          data-google-sign-in-client-id="510121040724-p3787ob5r9tdbkb9dlh6ciimrm1osl7s.apps.googleusercontent.com"
          data-google-sign-in-redirect-url="https://www.circular-couturecollective.com/users/auth/google"
        >
          <div
            className="modal fade default-modal tap-to-close-modal"
            id="signup-modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content rounded-0">
                <div className="modal-header border-bottom-0 pb-0">
                  <button
                    type="button"
                    className="close mobile-hide"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    {" "}
                    <span aria-hidden="true">X</span>{" "}
                  </button>
                </div>
                <div className="modal-body pb-5">
                  <div className="row">
                    <div className="col-12 col-md-9 mx-auto">
                      <div className="row">
                        <div className="col-5 offset-1 text-left">
                          <h5 className="modal-title text-uppercase">
                            <a
                              href="#"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#signin-modal"
                            >
                              Sign In
                            </a>
                          </h5>
                        </div>
                        <div className="col-5 text-right">
                          <h5 className="modal-title text-uppercase">
                            <a href="#" className="active">
                              Register
                            </a>
                          </h5>
                        </div>
                        <div className="col-12">
                          <form
                            className="default-form"
                            data-controller="oauth-links"
                            data-action="ajax:success->oauth-links#response ajax:error->oauth-links#toggleSpinner ajax:send->oauth-links#toggleSpinner"
                            action="/oauth_link_generators"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="24AJvpEm1d6af3fX4JXIlt+sOF5g7jMOffhtPH6iwgdUY95g2Xf79a+gWkIuaW21GEcB56vRUQfwoHE0AVRIAA=="
                              autoComplete="off"
                            />
                            <input
                              defaultValue="google"
                              autoComplete="off"
                              type="hidden"
                              name="provider"
                              id="provider"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referrer_code]"
                              id="_redirect_data_referrer_code"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referral_token]"
                              id="_redirect_data_referral_token"
                            />
                            <input
                              defaultValue="false"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][from_ios]"
                              id="_redirect_data_from_ios"
                            />
                            <input
                              className="form-redirect-info-token-field"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][redirect_info_token]"
                              id="_redirect_data_redirect_info_token"
                            />
                            <button
                              type="submit"
                              className="btn btn-primary -dark-red btn-block socials-link js-auth-button mt-4"
                            >
                              <i
                                className="fa-brands fa-google mr-2"
                                data-oauth-links-target="icon"
                                aria-hidden="true"
                              />{" "}
                              Register with Google{" "}
                            </button>
                          </form>
                        </div>
                        <div className="col-lg-12">
                          <form
                            className="default-form"
                            data-controller="oauth-links"
                            data-action="ajax:success->oauth-links#response ajax:error->oauth-links#toggleSpinner ajax:send->oauth-links#toggleSpinner"
                            action="/oauth_link_generators"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="yFU9VU7yK6FPSmQSxwRN+pQn+OAPOk+1eMns0qPg2m1HtuqLBqMFinqVSYcJ+OjZU8zBWcQFLbz1kfDa3BZQag=="
                              autoComplete="off"
                            />
                            <input
                              defaultValue="facebook"
                              autoComplete="off"
                              type="hidden"
                              name="provider"
                              id="provider"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referrer_code]"
                              id="_redirect_data_referrer_code"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referral_token]"
                              id="_redirect_data_referral_token"
                            />
                            <input
                              defaultValue="false"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][from_ios]"
                              id="_redirect_data_from_ios"
                            />
                            <input
                              className="form-redirect-info-token-field"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][redirect_info_token]"
                              id="_redirect_data_redirect_info_token"
                            />
                            <button
                              type="submit"
                              className="btn btn-primary -dark-red btn-block socials-link js-auth-button"
                            >
                              <i
                                className="fa-brands fa-facebook-f mr-2"
                                data-oauth-links-target="icon"
                                aria-hidden="true"
                              />{" "}
                              Register with facebook{" "}
                            </button>
                          </form>
                        </div>
                        <div className="col-lg-12">
                          <form
                            className="default-form"
                            data-controller="oauth-links"
                            data-action="ajax:success->oauth-links#response ajax:error->oauth-links#toggleSpinner ajax:send->oauth-links#toggleSpinner"
                            action="/oauth_link_generators"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="5MoWFdhRHLPlsauRB1nVPQKbyEKbUOfeevF/HaYfl5FrKcHLkAAymNBuhgTJpXAexXDx+1Bvhdf3qWMV2ekdlg=="
                              autoComplete="off"
                            />
                            <input
                              defaultValue="apple"
                              autoComplete="off"
                              type="hidden"
                              name="provider"
                              id="provider"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referrer_code]"
                              id="_redirect_data_referrer_code"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referral_token]"
                              id="_redirect_data_referral_token"
                            />
                            <input
                              defaultValue="false"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][from_ios]"
                              id="_redirect_data_from_ios"
                            />
                            <input
                              className="form-redirect-info-token-field"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][redirect_info_token]"
                              id="_redirect_data_redirect_info_token"
                            />
                            <button
                              type="submit"
                              className="btn btn-primary -dark-red btn-block socials-link js-auth-button"
                            >
                              <i
                                className="fa-brands fa-apple mr-2"
                                data-oauth-links-target="icon"
                                aria-hidden="true"
                              />{" "}
                              Register with Apple{" "}
                            </button>
                          </form>
                        </div>
                        <div className="col-lg-12">
                          <a
                            href="#"
                            className="btn btn-primary -dark-red btn-block socials-link js-auth-button"
                            data-dismiss="modal"
                            data-toggle="modal"
                            data-target="#registration_modal"
                          >
                            <i
                              className="fa-solid fa-envelope mr-2"
                              aria-hidden="true"
                            />{" "}
                            Register with email{" "}
                          </a>
                        </div>
                        <div className="col-lg-12">
                          <p className="text-center text-uppercase terms-text my-2">
                            {" "}
                            By registering with a 3rd party,
                            <br /> I accept{" "}
                            <span className="circular-couture-font-logo">
                              CIRCULAR COUTURE
                            </span>
                            's{" "}
                            <a
                              href="/TermsOfService"
                              target="_blank"
                              className="btn-circular-couture"
                            >
                              terms of service
                            </a>{" "}
                            and{" "}
                            <a
                              href="/CookiePolicy"
                              target="_blank"
                              className="btn-circular-couture"
                            >
                              privacy policy
                            </a>
                            .
                          </p>
                        </div>
                        <div className="col-lg-12">
                          <hr />
                        </div>
                        <div className="col-lg-12">
                          <h5 className="modal-title modal-sub-title text-center mt-4">
                            Were you referred?
                          </h5>
                        </div>
                        <div className="col-lg-12">
                          <form
                            className="default-form"
                            noValidate="novalidate"
                            action="/influencer_referral_code_checks"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="/qTkPrt1HSX2TRQOWycMC7ss8Wm9PKzosgr4bK5di2sVoSFZ7dGdqV36fwGBn7aYzaarnIxk0FsL7fxYLq+x/g=="
                              autoComplete="off"
                            />
                            <div className="form-group">
                              <label>Referral Code*</label>
                              <div className="input-group mb-2">
                                <input
                                  className="form-control mb-0"
                                  required="required"
                                  type="text"
                                  name="referral_token"
                                  id="referral_token"
                                />
                                <div className="invalid-feedback">
                                  This field is required.
                                </div>
                                <input
                                  defaultValue=""
                                  autoComplete="off"
                                  type="hidden"
                                  name="influencer_redirect_info"
                                  id="influencer_redirect_info"
                                />
                                <div className="input-group-append">
                                  <input
                                    type="submit"
                                    name="commit"
                                    defaultValue="submit"
                                    className="btn btn-primary -dark-red js-auth-button"
                                    data-disable-with="submitting..."
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-12 text-uppercase text-center mt-4 desktop-hide">
                          {" "}
                          <a
                            href="#"
                            className="pb-1 footer-link "
                            data-dismiss="modal"
                          >
                            &lt; return
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal default-modal tap-to-close-modal fade"
            id="signin-modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content rounded-0">
                <div className="modal-header border-bottom-0 pb-0">
                  <button
                    type="button"
                    className="close mobile-hide"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    {" "}
                    <span aria-hidden="true">X</span>{" "}
                  </button>
                </div>
                <div className="modal-body pb-5">
                  <div className="row">
                    <div className="col-12 col-md-9 mx-auto">
                      <div className="row">
                        <div className="col-5 offset-1 text-left">
                          <h5 className="modal-title text-uppercase">
                            <a href="#" className="active">
                              Sign In
                            </a>
                          </h5>
                        </div>
                        <div className="col-5 text-right">
                          <h5 className="modal-title text-uppercase">
                            <a
                              href="#"
                              data-dismiss="modal"
                              data-toggle="modal"
                              data-target="#signup-modal"
                            >
                              Register
                            </a>
                          </h5>
                        </div>
                        <div className="col-12">
                          <form
                            className="default-form"
                            data-controller="oauth-links"
                            data-action="ajax:success->oauth-links#response ajax:error->oauth-links#toggleSpinner ajax:send->oauth-links#toggleSpinner"
                            action="/oauth_link_generators"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="wYTbb9d/ny5uDgFsaqWfAnmIc3MZJi0cG5iifDaUW0FOZwyxny6xBVvRLPmkWTohvmNKytIZTxWWwL50SWLRRg=="
                              autoComplete="off"
                            />
                            <input
                              defaultValue="google"
                              autoComplete="off"
                              type="hidden"
                              name="provider"
                              id="provider"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referrer_code]"
                              id="_redirect_data_referrer_code"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referral_token]"
                              id="_redirect_data_referral_token"
                            />
                            <input
                              defaultValue="false"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][from_ios]"
                              id="_redirect_data_from_ios"
                            />
                            <input
                              className="form-redirect-info-token-field"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][redirect_info_token]"
                              id="_redirect_data_redirect_info_token"
                            />
                            <button
                              type="submit"
                              className="btn btn-primary -dark-red btn-block socials-link js-auth-button mt-4"
                            >
                              <i
                                className="fa-brands fa-google mr-2"
                                data-oauth-links-target="icon"
                                aria-hidden="true"
                              />{" "}
                              Sign in with Google{" "}
                            </button>
                          </form>
                        </div>
                        <div className="col-lg-12">
                          <form
                            className="default-form"
                            data-controller="oauth-links"
                            data-action="ajax:success->oauth-links#response ajax:error->oauth-links#toggleSpinner ajax:send->oauth-links#toggleSpinner"
                            action="/oauth_link_generators"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="r0gbBI2eXfpRDnMNupfXQynmHiph3o2PtrmfeGorvuggq8zaxc9z0WTRXph0a3Jg7g0nk6rh74Y74YNwFd007w=="
                              autoComplete="off"
                            />
                            <input
                              defaultValue="facebook"
                              autoComplete="off"
                              type="hidden"
                              name="provider"
                              id="provider"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referrer_code]"
                              id="_redirect_data_referrer_code"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referral_token]"
                              id="_redirect_data_referral_token"
                            />
                            <input
                              defaultValue="false"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][from_ios]"
                              id="_redirect_data_from_ios"
                            />
                            <input
                              className="form-redirect-info-token-field"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][redirect_info_token]"
                              id="_redirect_data_redirect_info_token"
                            />
                            <button
                              type="submit"
                              className="btn btn-primary -dark-red btn-block socials-link js-auth-button"
                            >
                              <i
                                className="fa-brands fa-facebook-f mr-2"
                                data-oauth-links-target="icon"
                                aria-hidden="true"
                              />{" "}
                              Sign in with facebook{" "}
                            </button>
                          </form>
                        </div>
                        <div className="col-lg-12">
                          <form
                            className="default-form"
                            data-controller="oauth-links"
                            data-action="ajax:success->oauth-links#response ajax:error->oauth-links#toggleSpinner ajax:send->oauth-links#toggleSpinner"
                            action="/oauth_link_generators"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="c6f3LScOJcOHrill/H5G9FVBs6rpQ+7RDkhzl2ZoOcX8RCDzb18L6LJxBPAyguPXkqqKEyJ8jNiDEG+fGZ6zwg=="
                              autoComplete="off"
                            />
                            <input
                              defaultValue="apple"
                              autoComplete="off"
                              type="hidden"
                              name="provider"
                              id="provider"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referrer_code]"
                              id="_redirect_data_referrer_code"
                            />
                            <input
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][referral_token]"
                              id="_redirect_data_referral_token"
                            />
                            <input
                              defaultValue="false"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][from_ios]"
                              id="_redirect_data_from_ios"
                            />
                            <input
                              className="form-redirect-info-token-field"
                              autoComplete="off"
                              type="hidden"
                              name="[redirect_data][redirect_info_token]"
                              id="_redirect_data_redirect_info_token"
                            />
                            <button
                              type="submit"
                              className="btn btn-primary -dark-red btn-block socials-link js-auth-button"
                            >
                              <i
                                className="fa-brands fa-apple mr-2"
                                data-oauth-links-target="icon"
                                aria-hidden="true"
                              />{" "}
                              Sign in with Apple{" "}
                            </button>
                          </form>
                        </div>
                        <div className="col-lg-12">
                          <p className="text-center text-uppercase or-separator mt-3 mb-0">
                            {" "}
                            or{" "}
                          </p>
                        </div>
                        <div className="col-lg-12">
                          <form
                            data-controller="sign-in"
                            className="default-form "
                            id="new_user"
                            noValidate="novalidate"
                            action="/users/sign_in"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="WlLgax1xXXfYxmEtopWVCxToXxaG6Sk8+hm7/ACg3jSDu3CiOl1F0lnguwQKgpmHzSAX6q4fQcRJv4Pf9Kt1GQ=="
                              autoComplete="off"
                            />
                            <input
                              type="hidden"
                              name="g-recaptcha-response-data[signin]"
                              id="g-recaptcha-response-data-signin"
                              data-sitekey="6LfMm9gUAAAAAPfBrSPaIigZApwctK11y6ARGCoh"
                              className="g-recaptcha g-recaptcha-response "
                              defaultValue="03AFcWeA5pIkn_zgoDFo6b8haU6IAErDt9t9yFe3oy6uG1LJN7gvM58CLplljKzhMz2oQy146QdNkwpp7tJOht6_QVAxRrvx2F0Vu5j-iG6iRpELQ7J_N7MmHnEil04ofyM_3Lfzg7HvRsALth3-BgBZD3AcBkXpJMNi8kVhn85hWDydIE0MZp-7G9rb4aJUcVgRq4O5eGdX-6Cm5marjYCTs7AjgBdbU0l_BQ0ZJqtiiugm743qdxtufhANn_4KcaWaUAyX7q_rHHaF0dIS8t2sZ09SoGrPZY23ArZR36-9Pg7yL1H8ziVzQZijG8xAPjk_cR8jj5GlFGD1ngdiInbr3zjgvRBqzoCRPBert9CUIRNjASAV2IXCBHRwSq1UdNR7XyQ85hDTXNSYCemww6sLT6-HEugsaw-aJZ0w67dZ298gx-GkhNpfkHiEQm8854UDO47KnDoBLN38OEcjssTFSbbBf-UskxM_dDjathijIczRFgFtBAbM41cj8Qasvq4NpOpPQXTmiNdlmOvtDMLU6-nOVuv9G2bFZ6IQMMdJjxmN_ZOEmAFE4"
                              style={{}}
                            />
                            <input
                              type="hidden"
                              name="redirect_info_token"
                              id="redirect_info_token"
                              className="form-redirect-info-token-field"
                              autoComplete="off"
                            />{" "}
                            <span className="text-center text-uppercase terms-text mt-2 devise-modal-form__error mt-0 mb-1 text-left"></span>
                            <div className="form-group">
                              <label>Email*</label>
                              <input
                                autofocus="autofocus"
                                className="form-control"
                                autoComplete="email"
                                required="required"
                                type="email"
                                name="user[email]"
                                id="user_email"
                              />
                              <div className="invalid-feedback">
                                This field is required.
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Password*</label>
                              <input
                                className="form-control"
                                autoComplete="off"
                                required="required"
                                type="password"
                                name="user[password]"
                                id="user_password"
                              />
                              <div className="invalid-feedback">
                                This field is required.
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="form-check p-0 text-left custom-checkout-wrapper my-3">
                                <label className="form-check-label p-0">
                                  <input
                                    name="user[remember_me]"
                                    type="hidden"
                                    defaultValue={0}
                                    autoComplete="off"
                                  />
                                  <input
                                    className="custom-check-input"
                                    type="checkbox"
                                    defaultValue={1}
                                    name="user[remember_me]"
                                    id="user_remember_me"
                                  />{" "}
                                  Remember me
                                </label>
                              </div>
                            </div>
                          
                            {/* <input
                              type="submit"
                              name="commit"
                              defaultValue="sign in"
                              className="btn btn-primary btn-block -dark-red mb-4 js-auth-button"
                              data-disable-with="signing in..."
                              data-target="sign-in.button"
                            /> */}
                           <a href="/panel/dashboard"
                           className="btn btn-primary btn-block -dark-red mb-4 "
                           type="submit"
                           >Sign In</a>
                          </form>
                        </div>
                        <div className="col-lg-12 text-uppercase text-center">
                          {" "}
                          <a
                            href="#"
                            data-dismiss="modal"
                            data-toggle="modal"
                            data-target="#forgot_password_modal"
                            className="footer-link js-link-sign-in mobile-hide"
                          >
                            forgot your password?
                          </a>{" "}
                          <a
                            href="#"
                            data-dismiss="modal"
                            data-toggle="modal"
                            data-target="#forgot_password_modal"
                            className="btn btn-outline-primary btn-block -dark-red mb-4 js-link-sign-in desktop-hide"
                          >
                            forgot your password?
                          </a>{" "}
                          <a
                            href="#"
                            className="pb-1 footer-link desktop-hide"
                            data-dismiss="modal"
                          >
                            &lt; return
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade default-modal tap-to-close-modal"
            id="forgot_password_modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            data-controller="reset-password"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content rounded-0">
                <div className="modal-header border-bottom-0 pb-0">
                  <button
                    type="button"
                    className="close mobile-hide"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    {" "}
                    <span aria-hidden="true">X</span>{" "}
                  </button>
                </div>
                <div className="modal-body pb-5">
                  <div className="row">
                    <div className="col-12 col-md-9 mx-auto">
                      <div className="row">
                        <div className="col-12">
                          <h5 className="modal-title text-center text-uppercase mb-3">
                            forgot your password?
                          </h5>
                        </div>
                        <div className="col-12 text-right">
                          <p className="text-center or-separator px-2 mb-4">
                            {" "}
                            Enter your email address and we'll send a link to
                            reset your password.{" "}
                          </p>
                        </div>
                        <div
                          className="col-lg-12"
                          data-target="reset-password.resetPasswordEmailWrapper"
                        >
                          <form
                            data-action="ajax:success->reset-password#onResetPasswordEmailSuccess"
                            className="default-form"
                            action="/users/password"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="wvCHjmL/56gTEYv+fDBVTrmSnBa9nZcMCaJ+9+jzLZ7R96CM07SEgCAC6MYOxAA2th30KenrZDddNio9+6baxQ=="
                              autoComplete="off"
                            />
                            <p className="signin-paragraph devise-modal-form__error mt-0 mb-1 text-left"></p>
                            <div
                              className="form-group"
                              id="email_field_wrapper"
                            >
                              <label htmlFor="user_email">Your Email*</label>
                              <input
                                autofocus="autofocus"
                                className="form-control mb-3"
                                id="email_field"
                                autoComplete="email"
                                type="email"
                                name="user[email]"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="submit"
                                name="commit"
                                defaultValue="reset my password"
                                className="btn btn-primary btn-block -dark-red mb-4"
                                data-disable-with="sending..."
                              />
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-12 text-uppercase text-center">
                          {" "}
                          <a
                            href="#"
                            data-dismiss="modal"
                            data-toggle="modal"
                            data-target="#signin-modal"
                            className="footer-link js-link-sign-in mobile-hide"
                          >
                            &lt; Back
                          </a>{" "}
                          <a
                            href="#"
                            data-dismiss="modal"
                            data-toggle="modal"
                            data-target="#signin-modal"
                            className="btn btn-outline-primary btn-block -dark-red mb-4 js-link-sign-in desktop-hide"
                          >
                            &lt; Back
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade default-modal tap-to-close-modal"
            id="registration_modal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
            data-controller="sign-up"
            data-sign-up-modal-id="#registration_modal"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content rounded-0">
                <div className="modal-header border-bottom-0 pb-0">
                  <button
                    type="button"
                    className="close mobile-hide"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    {" "}
                    <span aria-hidden="true">X</span>{" "}
                  </button>
                </div>
                <div className="modal-body pb-5">
                  <div className="row">
                    <div className="col-12 col-md-9 mx-auto">
                      <div className="row">
                        <div className="col-12 mobile-hide">
                          <h5 className="modal-title text-center mb-3">
                            Open your account
                          </h5>
                        </div>
                        <div className="col-12 text-right mobile-hide">
                          <p className="text-center or-separator px-2 mb-4">
                            {" "}
                            Create your{" "}
                            <span className="circular-couture-font-logo">
                              CIRCULAR COUTURE
                            </span>{" "}
                            account to join the collective, create wishlists and
                            begin renting.{" "}
                          </p>
                        </div>
                        <div
                          className="col-lg-12"
                          data-target="sign-up.registrationFormWrapper"
                        >
                          <form
                            id="sign-up-modal__form"
                            data-target="sign-up.form"
                            data-action="ajax:success->sign-up#onSignUpSuccess"
                            className="default-form"
                            action="/users"
                            acceptCharset="UTF-8"
                            data-remote="true"
                            method="post"
                          >
                            <input
                              type="hidden"
                              name="authenticity_token"
                              defaultValue="Usdh5cpyFvgHE/MtbAwCJtu0ETNyQmV0afjNR5KjDZSDUFhWXT7P9rjLNxFjekD4KRdwiCTFrPgNvOazqjSJVg=="
                              autoComplete="off"
                            />
                            <input
                              type="hidden"
                              name="g-recaptcha-response-data[signup]"
                              id="g-recaptcha-response-data-signup"
                              data-sitekey="6LfMm9gUAAAAAPfBrSPaIigZApwctK11y6ARGCoh"
                              className="g-recaptcha g-recaptcha-response "
                              defaultValue="03AFcWeA4enwYIIRAh07qB5n0PqMbPpFpWCmWUFVi19LqzlnxCblFHKSnTPw3ctW78wSCkczi5bEsyv9yoSTjkiIgnI8lhXoxZHXDmkhbIPNoTH9b0mR0gmX4LJlDUNiGm-lGHH1mMq2tm7gqyN3Igye4CHjBiNjcT9_ASwZKRvf_lwnW9NNGbrcavN56NyapTjzQA0ziUGXTFg80LpJAJ_1wXle4W_xsN_X8XQPHhAgRtq7URX5I5E0MoCIFKLbNKxOHAvh62-u5AAYNhrPBlAO4VKfk11hGRIJ3eE1ICwrpyB4_LeKk1q_g_wWAH9t45cUUnRtLciOrMrs09eb7S-zOh9vwNYr7gJY4dc81n7D4JJ0B7_nd4ZdhkRbVg7oB3lleXHtnmCDHDuUBQeq4Pn8jAagHspm5sr8Ig1VLgf9vnK8KUO3Q84vGhmhT5876mH4VcLwNho-2h_hp4gMBgkaXA8YA5k13-aqXlf7gY8DnMJGkMcKzkCUPLWui9BqpB0335Qhn6E7ocJ-XNHt1JXm1V0wv_CsRFnBqO0hvTtStdpN3iH_-O-So"
                              style={{}}
                            />{" "}
                            <span className="text-uppercase terms-text devise-modal-form__error" />
                            <input
                              type="hidden"
                              name="registration_rental_listng_url"
                              id="registration_rental_listng_url"
                              autoComplete="off"
                            />
                            <input
                              type="hidden"
                              name="redirect_info_token"
                              id="redirect_info_token"
                              className="form-redirect-info-token-field"
                              autoComplete="off"
                            />
                            <div className="row">
                              <div className="col-12">
                                <div className="form-group">
                                  <label htmlFor="user_email">
                                    Your Email*
                                  </label>
                                  <input
                                    autofocus="autofocus"
                                    className="form-control"
                                    autoComplete="email"
                                    data-target="sign-up.userEmail"
                                    required="required"
                                    type="email"
                                    name="user[email]"
                                    id="user_email"
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="form-group">
                                  <label htmlFor="user_firstname">
                                    First Name*
                                  </label>
                                  <input
                                    className="form-control"
                                    pattern="^[-'a-zA-Z ]+$"
                                    data-target="sign-up.userFirstname"
                                    type="text"
                                    name="user[firstname]"
                                    id="user_firstname"
                                  />
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="form-group">
                                  <label htmlFor="user_lastname">
                                    Last Name*
                                  </label>
                                  <input
                                    className="form-control"
                                    pattern="^[-'a-zA-Z ]+$"
                                    type="text"
                                    name="user[lastname]"
                                    id="user_lastname"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label htmlFor="user_password">
                                    Password*
                                  </label>
                                  <input
                                    className="form-control"
                                    autoComplete="off"
                                    type="password"
                                    name="user[password]"
                                    id="user_password"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label htmlFor="user_password_confirmation">
                                    Password Confirmation*
                                  </label>
                                  <input
                                    className="form-control"
                                    autoComplete="off"
                                    type="password"
                                    name="user[password_confirmation]"
                                    id="user_password_confirmation"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <p className="text-center text-uppercase terms-text">
                                  {" "}
                                  Your password must be over 8 characters long
                                  and include at least 1 upper-case letter, 1
                                  lower-case letter, 1 number and 1 special
                                  character.
                                </p>
                              </div>
                              <div className="col-12">
                                <div className="form-check p-0 text-left custom-checkout-wrapper remember-me mb-2">
                                  <label
                                    className="form-check-label p-0"
                                    htmlFor="terms_of_service_and_privacy_policy"
                                  >
                                    <input
                                      name="user[agreed_to_terms_of_service_and_policies]"
                                      type="hidden"
                                      defaultValue={0}
                                      autoComplete="off"
                                    />
                                    <input
                                      id="terms_of_service_and_privacy_policy"
                                      className="form-check-input custom-check-input ml-0 mt-0"
                                      type="checkbox"
                                      defaultValue={1}
                                      name="user[agreed_to_terms_of_service_and_policies]"
                                    />{" "}
                                    I agree to terms of service and privacy
                                    policy.{" "}
                                  </label>
                                </div>
                                <div className="form-check p-0 text-left custom-checkout-wrapper remember-me mt-1">
                                  <label
                                    className="form-check-label p-0"
                                    htmlFor="referral_add_to_mailing_list"
                                  >
                                    <input
                                      name="user[agreed_to_receive_marketing_emails]"
                                      type="hidden"
                                      defaultValue={0}
                                      autoComplete="off"
                                    />
                                    <input
                                      id="referral_add_to_mailing_list"
                                      className="form-check-input custom-check-input ml-0 mt-0"
                                      type="checkbox"
                                      defaultValue={1}
                                      name="user[agreed_to_receive_marketing_emails]"
                                    />{" "}
                                    I agree to receive marketing emails from
                                    circular-couture.{" "}
                                  </label>
                                </div>
                              </div>
                              <div className="col-12">
                                <input
                                  type="submit"
                                  name="commit"
                                  defaultValue="register"
                                  className="btn btn-primary btn-block -dark-red mb-4 mt-2"
                                  data-disable-with="saving..."
                                />
                                <input
                                  type="submit"
                                  name="commit"
                                  defaultValue="register-and-save"
                                  className="d-none"
                                  id="registration-modal-save-button"
                                  data-target="sign-up.saveSignUpFormButton"
                                  data-disable-with="register-and-save"
                                />
                                {/* <button role='button' class='btn btn-primary btn-block -dark-red mb-4 mt-2' data-target='sign-up.initialRegisterButton' data-action='click->sign-up#showConfirmEmailModal'>REGISTER</button> */}
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="col-lg-12 text-uppercase text-center">
                          {" "}
                          <a
                            href="#"
                            data-dismiss="modal"
                            data-toggle="modal"
                            data-target="#signup-modal"
                            className="footer-link js-link-sign-in mobile-hide"
                          >
                            &lt; Back
                          </a>{" "}
                          <a
                            href="#"
                            data-dismiss="modal"
                            data-toggle="modal"
                            data-target="#signup-modal"
                            className="btn btn-outline-primary btn-block -dark-red mb-4 js-link-sign-in desktop-hide"
                          >
                            &lt; Back
                          </a>{" "}
                          <a
                            href="#"
                            className="pb-1 footer-link desktop-hide"
                            data-dismiss="modal"
                          >
                            &lt; return
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="authModalContainer" />
        <div data-controller="iubenda" />
        <div data-controller="zendesk" />
        <div
          data-controller="heap--add-user-custom-properties"
          data-heap--add-user-custom-properties-logged-in-user-value="false"
          data-heap--add-user-custom-properties-current-user-id-value=""
        >
          {" "}
        </div>
        <div
          id="how-credit-works-modal"
          className="component modal how-credit-works-modal fade"
          data-controller="modal-component"
          data-modal-component-state-value="hide"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              {" "}
              <span
                className="close-modal"
                data-action="click->modal-component#hideModal"
              >
                <img
                  alt="An icon of a close"
                  width={24}
                  height={24}
                  src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                />
              </span>
              <h3 className="text-center">How Credit Works</h3>
              <p>
                {" "}
                Earn 5% of the total rental price as CIRCULAR COUTURE credit on
                every successful rental. Successful rentals do not have a fit
                guarantee or dispute resolution refund. Credits can be applied
                at checkout on future rentals. Credits will be awarded 48 hours
                after the rental end date. No minimum spend applies but credits
                cannot be used in conjunction with coupon codes.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          data-controller="tap-to-close-modal"
          className="modal default-modal tap-to-close-modal fade connect-bank-account"
          id="timeout-error-modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            {" "}
            <span className="tap-to-close desktop-hide" data-dismiss="modal">
              Tap to close
            </span>
            <div className="modal-content rounded-0">
              <div className="modal-header border-bottom-0 pb-0">
                <button
                  type="button"
                  className="close mobile-hide"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  {" "}
                  <span aria-hidden="true">X</span>{" "}
                </button>
              </div>
              <div className="modal-body pb-5 px-md-5 mx-sm-0 mx-md-4">
                <h6 className="modal-title text-center mb-3 text-capitalize">
                  Whoops!
                </h6>
                <div className="text-center px-2 mb-4">
                  <p>
                    It looks like something went wrong, sorry about that... This
                    can happen when a timeout occurs.
                  </p>
                  <p>
                    Please try to perform your action again and, if the issue
                    persists, then please get in touch with our Customer Care
                    team using the chat bubble.
                  </p>
                </div>
                <button
                  className="btn btn-primary btn-block -dark-red mt-2"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </>
    )
};
export default TopHeader;