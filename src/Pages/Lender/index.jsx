import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const Lender = () =>{
    return (
        <>
        <TopHeader />

        <div className="main-container no-overflow-x pt-0 -with-cta-banner">
  <div
    className="lenders-page"
    data-controller="lenders"
    data-lenders-first-rate="0.035"
    data-lenders-fourth-rate="0.0225"
    data-lenders-page="lenders"
    data-lenders-second-rate="0.03"
    data-lenders-third-rate="0.025"
  >
    <div className="lenders-header bg-circular-couture-dark-red text-center">
      <div className="content mx-auto py-5 px-3 px-md-0">
        <h1 className="mb-5 mx-5">
          Become a Lender
        </h1>
        <p className="text text-circular-couture-off-white my-4 mx-1 mx-md-0">
          Listing your items on{' '}
          <span className="circular-couture-font-logo">
            CIRCULAR COUTURE
          </span>
          {' '}is both easy and free to do! You can list and manage your wardrobe yourself. We just ask that make sure the item is on our{' '}
          <a
            className="text-circular-couture-raffia"
            href="/designers"
          >
            Designers List
          </a>
          , less than two years old and has a retail price over AU$120.
        </p>
        <div className="mx-3 mx-md-0">
          <div className="row">
            <div className="col-12 col-md-5 mx-auto">
              {' '}
              <a
                className="btn btn-block btn-primary -white button mt-0 mt-md-3 mb-3 mb-md-4"
                href="/ListItems/ListStepOne"
              >
                list my wardrobe
              </a>
              {' '}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lenders-form-wrapper mx-auto my-5 px-4 px-md-0">
      <h2 className="text-center mb-4 mx-4 mx-md-0">
        How much could I make?
      </h2>
      <form
        className="default-form marketing-form"
        data-action="lenders#calculatePotentialEarnings"
      >
        <div className="form-row">
          <div
            className="form-group col-lg mr-0 mr-lg-3"
            data-controller="bootstrap-dropdown"
          >
            <label
              className="text"
              htmlFor="item_category"
            >
              Item Category*
            </label>
            <div data-controller="form-dropdown">
              <div className="dropdown form-dropdown d-none d-sm-block">
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="form-control dropdown-toggle input"
                  data-toggle="dropdown"
                  type="button"
                />
                <div className="dropdown-menu">
                  {' '}
                  <a
                    className="dropdown-item"
                    data-action="form-dropdown#selectChanges"
                    data-value="DRESSES"
                    href="/Collections/Dresses"
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
                    href="/Collections/Tops"
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
                    href="/Collections/Accessories"
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
                    href="/Collections/Jumpsuit"
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
                    href="/Collections/OuterWear"
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
                  data-target="form-dropdown.selectTag lenders.selectTag"
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
          <div className="form-group col-lg mr-0 mr-lg-3">
            <label
              className="text"
              htmlFor="item_value"
            >
              Item Value*
            </label>
            <input
              className="form-control -with-pound-icon input mb-0 mb-lg-2"
              data-target="lenders.itemValue"
              id="item_value"
              min="1"
              step="0.01"
              type="number"
            />
            {' '}
          </div>
          <div className="form-group col-lg-3">
            <label
              className="text invisible mb-0 mb-lg-2"
              htmlFor="item_value"
            >
              Calculate
            </label>
            <button
              className="btn btn-block btn-primary -dark-red"
              type="submit"
            >
              Calculate
            </button>
          </div>
        </div>
      </form>
    </div>
    <div
      className="lenders-earnings-wrapper text-center mx-auto mb-5 pt-5 pb-4 px-4 d-none"
      data-target="lenders.earningsDiv"
    >
      <h3 className="mb-5">
        Potential Earnings
        <sup>
          1
        </sup>
      </h3>
      <div className="lenders-earnings">
        <div className="row">
          <div className="col-6 col-md-3 order-1">
            <p
              className="price"
              data-target="lenders.fourDays"
            />
            <p className="days my-4">
              4 days
            </p>
          </div>
          <div className="col-6 col-md-3 order-3 order-md-2">
            <p
              className="price"
              data-target="lenders.eightDays"
            />
            <p className="days my-4">
              8 days
            </p>
          </div>
          <div className="col-6 col-md-3 order-2 order-md-3">
            <p
              className="price"
              data-target="lenders.tenDays"
            />
            <p className="days my-4">
              10 days
            </p>
          </div>
          <div className="col-6 col-md-3 order-4">
            <p
              className="price"
              data-target="lenders.twentyDays"
            />
            <p className="days my-4">
              20 days
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="recently-added-section bg-circular-couture-off-white">
      <div className="more-items-section mx-auto mb-5">
        <div className="jumbotron bg-circular-couture-off-white rounded-0 pt-5 pb-4 pb-md-5 mb-0">
          <h2 className="text-center mb-0 mb-md-5">
            Recently Rented
          </h2>
          <div
            className="position-relative d-block more-items-row -with-carousel"
            data-controller="item-carousel"
          >
            <div className="items-carousel__wrapper listings-show__items-carousel slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: '1',
                    transform: 'translate3d(0px, 0px, 0px)',
                    width: '714px'
                  }}
                >
                  <div
                    aria-hidden="false"
                    className="slick-slide slick-current slick-active"
                    data-slick-index="0"
                    style={{
                      width: '238px'
                    }}
                  >
                    <div>
                      <div
                        className="d-block"
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div
                          className="item-card listing-snippet listing-snippet__position--relative text-center"
                          id="listing-2"
                        >
                          <a
                            className="item-link"
                            data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                            data-controller="google-tag-manager--enhanced-ecommerce"
                            data-google-tag-manager--enhanced-ecommerce-item-brand="Toast"
                            data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;dresses&quot;, &quot;Cotton-Jersey&quot;, &quot;Loose&quot;, &quot;Smart Casual&quot;, &quot;Summer&quot;, &quot;Seasonal&quot;, &quot;midi&quot;, &quot;Maxi&quot;, &quot;3/4 Sleeves&quot;, &quot;Bell Sleeve&quot;, &quot;Long Sleeve&quot;, &quot;V-Necks&quot;, &quot;A-Line&quot;, &quot;White&quot;, &quot;Black&quot;]"
                            data-google-tag-manager--enhanced-ecommerce-item-colour="multi"
                            data-google-tag-manager--enhanced-ecommerce-item-name="Chevron Striped dress"
                            data-google-tag-manager--enhanced-ecommerce-item-price="36"
                            data-google-tag-manager--enhanced-ecommerce-item-uid="3406148"
                            data-listing-id="2"
                            href="/listings.html/butterfly-dress"
                            tabIndex="0"
                            target="_blank"
                          >
                            <div className="text-center">
                              {' '}
                              <img
                                alt="Image of Toast chevron striped dress"
                                className="item-image"
                                data-original="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_589,w_392,x_15,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/xXtZKRLDy17um5KmUpZyRTYG"
                                src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_589,w_392,x_15,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/xXtZKRLDy17um5KmUpZyRTYG"
                                style={{}}
                              />
                              <div className="item-name">
                                TOAST
                              </div>
                              <p className="item-size mb-0">
                                UK 14
                              </p>
                              <div className="separator mx-auto" />
                              <div className="item-price">
                                {' '}RENT FROM AU$36{' '}
                              </div>
                              <p className="item-rrp text-uppercase mb-0">
                                Retail AU$170
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="false"
                    className="slick-slide slick-active"
                    data-slick-index="1"
                    style={{
                      width: '238px'
                    }}
                  >
                    <div>
                      <div
                        className="d-block"
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div
                          className="item-card listing-snippet listing-snippet__position--relative text-center"
                          id="listing-6"
                        >
                          <a
                            className="item-link"
                            data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                            data-controller="google-tag-manager--enhanced-ecommerce"
                            data-google-tag-manager--enhanced-ecommerce-item-brand="Needle & Thread"
                            data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;dresses&quot;, &quot;Cotton-Jersey&quot;, &quot;Floral&quot;, &quot;Loose&quot;, &quot;Casual&quot;, &quot;Smart Casual&quot;, &quot;Summer&quot;, &quot;Seasonal&quot;, &quot;3/4 Sleeves&quot;, &quot;Bell Sleeve&quot;, &quot;V-Necks&quot;, &quot;A-Line&quot;, &quot;Black&quot;]"
                            data-google-tag-manager--enhanced-ecommerce-item-colour="multi"
                            data-google-tag-manager--enhanced-ecommerce-item-name="Bessie ruffled floral-print"
                            data-google-tag-manager--enhanced-ecommerce-item-price="43"
                            data-google-tag-manager--enhanced-ecommerce-item-uid="5354281"
                            data-listing-id="6"
                            href="/listings.html/shore-thing-lobster-crossbody"
                            tabIndex="0"
                            target="_blank"
                          >
                            <div className="text-center">
                              {' '}
                              <img
                                alt="Image of Needle & Thread bessie ruffled floral-print"
                                className="item-image"
                                data-original="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1208,w_805,x_42,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/Z1C4wk1iDY6X2aj5gFkcP5V5"
                                src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1208,w_805,x_42,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/Z1C4wk1iDY6X2aj5gFkcP5V5"
                                style={{}}
                              />
                              <div className="item-name">
                                NEEDLE & THREAD
                              </div>
                              <p className="item-size mb-0">
                                UK 16
                              </p>
                              <div className="separator mx-auto" />
                              <div className="item-price">
                                {' '}RENT FROM AU$43{' '}
                              </div>
                              <p className="item-rrp text-uppercase mb-0">
                                Retail AU$250
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="false"
                    className="slick-slide slick-active"
                    data-slick-index="2"
                    style={{
                      width: '238px'
                    }}
                  >
                    <div>
                      <div
                        className="d-block"
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div
                          className="item-card listing-snippet listing-snippet__position--relative text-center"
                          id="listing-13"
                        >
                          <a
                            className="item-link"
                            data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                            data-controller="google-tag-manager--enhanced-ecommerce"
                            data-google-tag-manager--enhanced-ecommerce-item-brand="Medea"
                            data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;bags&quot;, &quot;Leather-Faux Leather&quot;, &quot;Winter&quot;, &quot;Summer&quot;, &quot;Seasonal&quot;]"
                            data-google-tag-manager--enhanced-ecommerce-item-colour="purple"
                            data-google-tag-manager--enhanced-ecommerce-item-name="Prima Short leather tote"
                            data-google-tag-manager--enhanced-ecommerce-item-price="50"
                            data-google-tag-manager--enhanced-ecommerce-item-uid="4131743"
                            data-listing-id="13"
                            href="/listings.html/dabble-tiered-gingham-cotton-poplin-midi-dress"
                            tabIndex="0"
                            target="_blank"
                          >
                            <div className="text-center">
                              {' '}
                              <img
                                alt="Image of Medea prima short leather tote"
                                className="item-image"
                                data-original="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1418,w_945,x_19,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/W8547rfy9AEUtdusWjk6WUcv"
                                src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1418,w_945,x_19,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/W8547rfy9AEUtdusWjk6WUcv"
                                style={{}}
                              />
                              <div className="item-name">
                                MEDEA
                              </div>
                              <p className="item-size mb-0">
                                OS
                              </p>
                              <div className="separator mx-auto" />
                              <div className="item-price">
                                {' '}RENT FROM AU$50{' '}
                              </div>
                              <p className="item-rrp text-uppercase mb-0">
                                Retail AU$380
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              aria-disabled="true"
              className="slick-custom-btn slick-custom-btn--top-30 slick-custom-btn__prev slick-arrow slick-hidden"
              tabIndex="-1"
            >
              {' '}
              <img
                alt="Preview Button"
                height="29.13"
                src="https://res.cloudinary.com/dcaptnlz3/image/asset/feather-chevron-right-dark-c463577a4d2895bea9f615d02e0852e7.svg"
                width="15.55"
              />
              {' '}
            </button>
            <button
              aria-disabled="true"
              className="slick-custom-btn slick-custom-btn--top-30 slick-custom-btn__next slick-arrow slick-hidden"
              tabIndex="-1"
            >
              {' '}
              <img
                alt="Next Button"
                height="29.13"
                src="https://res.cloudinary.com/dcaptnlz3/image/asset/feather-chevron-right-dark-c463577a4d2895bea9f615d02e0852e7.svg"
                width="15.55"
              />
              {' '}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="lenders-why-concierge text-center mt-5">
      <h2 className="mb-5">
        Why Lend With{' '}
        <span className="circular-couture-font-logo">
          CIRCULAR COUTURE?
        </span>
      </h2>
      <div className="items mx-auto">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl">
            {' '}
            <img
              alt="Shield image"
              height="43"
              src="https://res.cloudinary.com/dcaptnlz3/image/asset/shield-b86860e028ab57337b59e70cf44f4fb4.svg"
              width="40.36"
            />
            <div className="lenders-how-works-step mt-4 mb-5">
              <h4 className="title mb-4">
                It’s Simple
              </h4>
              <p className="description mx-auto first-text">
                Our 3-step process makes it easier than ever to list your items on{' '}
                <span className="circular-couture-font-logo">
                  CIRCULAR COUTURE.
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl">
            {' '}
            <img
              alt="Chat image"
              height="43"
              src="https://res.cloudinary.com/dcaptnlz3/image/asset/chat-5360001ec6c2643e4ac83022a570facc.svg"
              width="43"
            />
            <div className="lenders-how-works-step mt-4 mb-5">
              <h4 className="title mb-4">
                Rent & Earn
              </h4>
              <p className="description mx-auto second-text">
                On average, you make your money back after 4 to 5 rentals. All subsequent rentals will turn your investment pieces into a profit.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl">
            {' '}
            <img
              alt="Lock image"
              height="43"
              src="https://res.cloudinary.com/dcaptnlz3/image/asset/lock-c3d6d6bd56b32337f1478be3d802541c.svg"
              width="29.77"
            />
            <div className="lenders-how-works-step mt-4 mb-5">
              <h4 className="title mb-4">
                It’s Smart
              </h4>
              <p className="description text mx-auto third-text">
                Most items rent within the first 30 days to our{' '}
                <span className="circular-couture-font-logo">
                  CIRCULAR COUTURE
                </span>
                {' '}community.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-xl">
            {' '}
            <img
              alt="Car image"
              height="43"
              src="https://res.cloudinary.com/dcaptnlz3/image/asset/card-c63f1c84ce4f9b7743c12beed13a1f4f.svg"
              width="42.33"
            />
            <div className="lenders-how-works-step mt-4 mb-5">
              <h4 className="title mb-4">
                Peace Of Mind
              </h4>
              <p className="description mx-auto fourth-text">
                You can opt to cover your items with a security deposit when listing your items.
              </p>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl">
            {' '}
            <img
              alt="Leaf image"
              height="43"
              src="https://res.cloudinary.com/dcaptnlz3/image/asset/leaf-a606464040e28a1c247974fc12681076.svg"
              width="44.02"
            />
            <div className="lenders-how-works-step mt-4 mb-5">
              <h4 className="title mb-4">
                It’s Sustainable
              </h4>
              <p className="description mx-auto fifth-text">
                Increasing the active life of clothing by an additional nine months reduces the carbon, water and waste footprints by 20-30% per item.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lenders-header lenders-ready-to-consign bg-circular-couture-off-white text-center">
      <div className="content mx-auto">
        <h2 className="mx-5">
          Ready to Lend?
        </h2>
        <p className="text text-circular-couture-black my-5">
          Click below to get started.
        </p>
        <div className="mx-5 mx-md-0">
          <div className="row">
            <div className="col-12 col-md-5 mx-auto">
              {' '}
              <a
                className="btn btn-block btn-primary -dark-red button mb-3 mb-md-4"
                href="/ListItems/ListStepOne"
              >
                list my wardrobe
              </a>
              {' '}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="lenders-notes text-center my-5 mx-4 mx-md-5">
      <p className="text">
        <sup>
          1
        </sup>
        {' '}The sampling above provides a range of similar items’ pricing from within the last 90 days and is not a guarantee of future pricing.
      </p>
      <p className="text">
        <sup>
          2
        </sup>
        {' '}Estimated per rental, based on selected category.
      </p>
    </div>
  </div>
 
</div>
        <EmailSubscription />
        <Footer />
        </>
    )
}
export default Lender;