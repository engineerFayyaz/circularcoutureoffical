import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const Sustainability = () =>{

    return (
        <>
        <TopHeader/>
        <div className="main-container no-overflow-x pt-0 -with-cta-banner">
  <div
    className="sustainability-page"
    data-controller="sustainability"
  >
    <div className="sustainability-header text-center">
      <div className="content mx-auto py-5 px-3 px-md-0">
        <h1 className="header mx-auto mb-4">
          We Won't Stop Until Fashion Comes Full Circle
        </h1>
        <p className="text text-circularcouture-off-white my-4 mx-1 mx-md-0">
          We’re taking fashion for a ride. As one of the world’s most polluting industries, we’re making it our business to undo what it started, one rental at a time.
        </p>
        <p className="text text-circularcouture-off-white my-4 ">
          {`Traditionally, fashion has worked on a make > use > chuck basis. We say no thanks. The circular economy is restorative and regenerative by design, so buying no longer has to be the default. With the help of our ever-growing community, we’re making fashion accessible and sustainable - and it never looked so good.`}
        </p>
        {' '}
        <a
          className="default-link text-uppercase cta"
          data-action="sustainability#scrollToForm"
          href="#"
        >
          Calculate my savings
        </a>
        {' '}
      </div>
    </div>
    <div
      className="sustainability-wardrobe-background"
      data-controller="environmental-savings-calculator"
      id="calculator-section"
    >
      <div className="sustainability-enviromental mx-auto">
        <h2 className="second-header text-center mb-4">
          Environmental Savings of Renting Your Wardrobe
        </h2>
        <form
          className="default-form marketing-form px-2"
          id="calculator-form"
        >
          <div className="form-row">
            <div className="col-lg-9 col-sm-12">
              <div className="form-row">
                <div className="col-md-6 pr-1 pr-md-3 pr-lg-4">
                  <label className="text">
                    ITEM CATEGORY*
                  </label>
                  <div data-controller="form-dropdown bootstrap-dropdown">
                    <div className="dropdown form-dropdown d-none d-sm-block">
                      <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="form-control dropdown-toggle input"
                        data-toggle="dropdown"
                        type="button"
                      />
                      <div
                        className="dropdown-menu"
                        style={{}}
                      >
                        {' '}
                        <a
                          className="dropdown-item"
                          data-action="form-dropdown#selectChanges"
                          data-value="DRESSES"
                          href="#"
                        >
                          <span className="text-uppercase">
                            DRESSES
                          </span>
                        </a>
                        {' '}
                        <a
                          className="dropdown-item"
                          data-action="form-dropdown#selectChanges"
                          data-value="TOPS"
                          href="#"
                        >
                          <span className="text-uppercase">
                            TOPS
                          </span>
                        </a>
                        {' '}
                        <a
                          className="dropdown-item"
                          data-action="form-dropdown#selectChanges"
                          data-value="BOTTOMS"
                          href="#"
                        >
                          <span className="text-uppercase">
                            BOTTOMS
                          </span>
                        </a>
                        {' '}
                        <a
                          className="dropdown-item"
                          data-action="form-dropdown#selectChanges"
                          data-value="ACCESSORIES"
                          href="#"
                        >
                          <span className="text-uppercase">
                            ACCESSORIES
                          </span>
                        </a>
                        {' '}
                        <a
                          className="dropdown-item"
                          data-action="form-dropdown#selectChanges"
                          data-value="BAGS"
                          href="#"
                        >
                          <span className="text-uppercase">
                            BAGS
                          </span>
                        </a>
                        {' '}
                        <a
                          className="dropdown-item"
                          data-action="form-dropdown#selectChanges"
                          data-value="SHOES"
                          href="#"
                        >
                          <span className="text-uppercase">
                            SHOES
                          </span>
                        </a>
                        {' '}
                        <a
                          className="dropdown-item"
                          data-action="form-dropdown#selectChanges"
                          data-value="JUMPSUITS"
                          href="#"
                        >
                          <span className="text-uppercase">
                            JUMPSUITS
                          </span>
                        </a>
                        {' '}
                        <a
                          className="dropdown-item"
                          data-action="form-dropdown#selectChanges"
                          data-value="OUTERWEAR"
                          href="#"
                        >
                          <span className="text-uppercase">
                            OUTERWEAR
                          </span>
                        </a>
                        {' '}
                      </div>
                    </div>
                    <div className="mobile-native-dropdown-container d-block d-sm-none">
                      <select
                        className="form-control mobile-native-dropdown input text-uppercase mb-3"
                        data-target="form-dropdown.selectTag environmental-savings-calculator.selectedCategory"
                        id="item_category"
                        name="item_category"
                      >
                        <option value="" />
                        <option value="DRESSES">
                          DRESSES
                        </option>
                        <option value="TOPS">
                          TOPS
                        </option>
                        <option value="BOTTOMS">
                          BOTTOMS
                        </option>
                        <option value="ACCESSORIES">
                          ACCESSORIES
                        </option>
                        <option value="BAGS">
                          BAGS
                        </option>
                        <option value="SHOES">
                          SHOES
                        </option>
                        <option value="JUMPSUITS">
                          JUMPSUITS
                        </option>
                        <option value="OUTERWEAR">
                          OUTERWEAR
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pr-1 pr-lg-4 pl-1 pl-md-3 pl-lg-1">
                  <label className="text">
                    ITEM VALUE*
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control -with-pound-icon input mb-0 mb-lg-2"
                    data-target="environmental-savings-calculator.itemValue"
                    id="item_value"
                    min="1"
                    step="0.01"
                    type="number"
                  />
                  {' '}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 mx-auto">
              <label className="text invisible mb-0 mb-lg-2">
                Calculate
              </label>
              <button
                className="btn btn-primary -dark-red btn-block button"
                data-action="environmental-savings-calculator#calculateSavings"
              >
                CALCULATE
              </button>
            </div>
          </div>
        </form>
        <div className="sustainability-enviromental-box">
          <div data-target="environmental-savings-calculator.defaultCaptionContainer">
            <p className="caption text-center mb-0">
              Use the calculator above to find out your environmental savings!
            </p>
          </div>
          <div
            className="d-none"
            data-target="environmental-savings-calculator.resultWrapper"
          >
            <p className="description text-center mx-auto">
              By renting, instead of buying new and wearing once, you would be saving the equivalent CO
              <sub>
                2
              </sub>
              e of:
            </p>
            <div className="row">
              <div className="col-md-6 pr-4">
                <div className="sustainability-statbox pb-0">
                  <p
                    className="stat"
                    data-target="environmental-savings-calculator.treesCutDownContainer"
                  >
                    00
                  </p>
                  <p className="text">
                    Trees cut down
                  </p>
                </div>
              </div>
              <div className="col-md-6 pl-4">
                <div className="sustainability-statbox">
                  <p
                    className="stat"
                    data-target="environmental-savings-calculator.milesInCarContainer"
                  >
                    00
                  </p>
                  <p className="text">
                    Miles in a car
                  </p>
                </div>
              </div>
            </div>
            <div className="sustainability-logo text-center">
              {' '}
              <span className="text text-uppercase">
                Verified by
                <span>
                  <a
                    href="https://help.circularcouturecollective.com/hc/en-us/articles/4402511545233-Learn-more-about-our-Environmental-Savings"
                    target="_blank"
                  >
                    <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/cogo-primary-logo-d1dd091417608f05119f18136f06265e.png" />
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sustainability-partners text-center">
      <h2 className="second-header">
        Our friends in sustainability
      </h2>
      <p className="subheader mt-4 mb-5">
        Our mission only works if it all works. We’re climate-conscious at every step of the rental journey.
      </p>
      <div className="partners">
        <div className="hero-card mt-2 p-0">
          <a
            className="image-card partner-one pb-5"
            href="#"
            target="_blank"
          >
            <div data-w-id="03bd9c45-10fe-9d08-58a3-97a4f2f64a5d">
              <h2 className="image-title mt-0 mb-3">
                Reusable Packaging
              </h2>
              <div className="image-subtitle mt-1">
                RePack provide reusable packaging.
              </div>
              <div className="btn-link-rent-now mt-3 mb-1 pb-1 mx-auto text-uppercase">
                SEE MORE
              </div>
            </div>
          </a>
          <a
            className="image-card partner-two pb-0"
            href="#"
            target="_blank"
          >
            <div className="bg-circularcouture-off-green w-100 py-5">
              <h2 className="image-title mt-0 mb-3">
                Green Dry Cleaning
              </h2>
              <div className="image-subtitle mt-1">
                Oxwash provide sustainable dry cleaning services.
              </div>
              <div className="btn-link-rent-now mt-3 mb-1 pb-1 mx-auto text-uppercase">
                SEE MORE
              </div>
            </div>
          </a>
        </div>
        <div className="mobile-hero-card position-relative">
          <div className="carousel carousel1 slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable">
              <div
                className="slick-track"
                style={{
                  opacity: '1',
                  width: '0px'
                }}
              >
                <div
                  aria-hidden="false"
                  className="slick-slide slick-current slick-active"
                  data-slick-index="0"
                  id="slick-slide00"
                  role="tabpanel"
                  style={{
                    left: '0px',
                    opacity: '1',
                    position: 'relative',
                    top: '0px',
                    width: '0px',
                    zIndex: '999'
                  }}
                >
                  <div>
                    <a
                      className="image-card partner-one pb-5 with-credits"
                      href="https://www.originalrepack.com/"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="0"
                      target="_blank"
                    >
                      <div
                        className="fadein-when-visible"
                        data-controller="fadein-when-visible"
                        style={{
                          opacity: '1'
                        }}
                      >
                        <h3 className="image-title mt-0 mb-3">
                          Reusable Packaging
                        </h3>
                        <div className="image-subtitle">
                          RePack provide reusable packaging.
                        </div>
                        <div className="btn-link-rent-now mb-1 pb-1 mx-auto text-uppercase">
                          SEE MORE
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide"
                  data-slick-index="1"
                  id="slick-slide01"
                  role="tabpanel"
                  style={{
                    left: '0px',
                    opacity: '0',
                    position: 'relative',
                    top: '0px',
                    width: '0px',
                    zIndex: '998'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <a
                      className="image-card partner-two with-credits pb-0"
                      href="https://www.oxwash.com/"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                      target="_blank"
                    >
                      <div
                        className="fadein-when-visible bg-circularcouture-off-green w-100 py-4"
                        data-controller="fadein-when-visible"
                        style={{
                          opacity: '1'
                        }}
                      >
                        <h2 className="image-title mt-0 mb-3">
                          Green Dry Cleaning
                        </h2>
                        <div className="image-subtitle mt-1">
                          Oxwash provide sustainable dry cleaning services.
                        </div>
                        <div className="btn-link-rent-now mt-3 mb-1 pb-1 mx-auto text-uppercase">
                          SEE MORE
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="slick-dots"
              role="tablist"
              style={{
                display: 'block'
              }}
            >
              <li
                className="slick-active"
                role="presentation"
              >
                <button
                  aria-controls="slick-slide00"
                  aria-label="1 of 2"
                  aria-selected="true"
                  id="slick-slide-control00"
                  role="tab"
                  tabIndex="0"
                  type="button"
                >
                  1
                </button>
              </li>
              <li role="presentation">
                <button
                  aria-controls="slick-slide01"
                  aria-label="2 of 2"
                  id="slick-slide-control01"
                  role="tab"
                  tabIndex="-1"
                  type="button"
                >
                  2
                </button>
              </li>
            </ul>
          </div>
          <button
            className="carousel-btn carousel-btn__prev slick-arrow"
            id="carousel1_btn_prev"
            style={{}}
          >
            {' '}
            <img
              alt="An icon of a slick arrow left"
              height="26.16"
              src="https://res.cloudinary.com/dcaptnlz3/image/asset/slick-arrow-left-37a77b3b7a543b0038980eccc95f7b16.svg"
              width="18.56"
            />
            {' '}
          </button>
          <button
            className="carousel-btn carousel-btn__next slick-arrow"
            id="carousel1_btn_next"
            style={{}}
          >
            {' '}
            <img
              alt="An icon of a slick arrow right"
              height="26.16"
              src="https://res.cloudinary.com/dcaptnlz3/image/asset/slick-arrow-right-11961bf37d0979611c570399ba3926b1.svg"
              width="18.56"
            />
            {' '}
          </button>
        </div>
      </div>
    </div>
    <div className="sustainability-doyourbit-section text-center">
      <h2 className="second-header mb-5">
        Do your bit
      </h2>
      <div className="content">
        <p className="description mb-4">
          We are also proud members of{' '}
          <a
            className="text-circularcouture-light-red"
            href="#"
            target="_blank"
          >
            Ecologi
          </a>
          , a group which helps us to reduce the carbon footprint of each of our employees, as well as offsetting any business travel (which we keep to a minimum).
        </p>
        <p className="description">
          Offset calculates the amount of CO
          <sub>
            2
          </sub>
          {' '}emissions we produce as individuals within the company, and allows us to offset those emissions with monetary donations to projects that work to reduce atmospheric CO
          <sub>
            2
          </sub>
          {' '}levels.
        </p>
        <div className="mx-0 mx-xl-4 mt-5 mb-4">
          <div className="row">
            <div className="col-md-6 pr-md-4">
              <div className="sustainability-statbox bg-white px-0 mb-4">
                <p className="stat">
                  1,000
                </p>
                <p className="text mb-2">
                  members have pledged
                </p>
              </div>
            </div>
            <div className="col-md-6 pl-md-4">
              <div className="sustainability-statbox bg-white px-0">
                <p className="stat">
                  80,000kg
                </p>
                <p className="text mb-2">
                  of carbon offset
                </p>
              </div>
            </div>
          </div>
        </div>
        {' '}
        <a
          className="btn btn-primary -dark-red text-uppercase cta"
          href="#"
          target="_blank"
        >
          Join the pledge
        </a>
        {' '}
      </div>
    </div>
  </div>
  
</div>
        <EmailSubscription/>
        <Footer/>
        </>
    )
}
export default Sustainability;