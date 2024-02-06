import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import{ Link } from "react-router-dom";
const ListStepThree = () =>{
    return (
        <>
        <TopHeader />
        <main>
  <section>
    <div className="container-fluid bg-light">
      <div className="row mx-auto mt-5 pt-5">
        <div className="col-lg-4 mx-auto pt-5">
          <div className="d-flex justify-content-center text-center flex-column list-an-item pt-5">
            <h1>
              <span className="text-uppercase ">
                list an item
              </span>
            </h1>
            <p>
              <span className="text-dark">
                Share the love and list of your faves
              </span>
            </p>
          </div>
          <div className="d-flex flex-row justify-content-center text-capitalize text-center three-btn-step">
            <Link to="/ListItems/ListStepOne">
              <button className="btn btn-light ">
                step one
              </button>
            </Link>
            <Link to="/ListItems/ListStepTwo">
              <button className="btn btn-light">
                step two
              </button>
            </Link>
            <Link to="/ListItems/ListStepThree">
              <button className="btn btn-light active">
                step three
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row mx-0  mt-5">
        <div className="col-lg-11 step-one d-flex flex-column justify-content-between">
          <h3>
            {' '}
            <span>
              STEP THREE
            </span>
          </h3>
          <h6>
            <span>
              Review & List
            </span>
          </h6>
        </div>
      </div>
      <div className="product-display row">
        <div className="col-12 col-lg-6 px-0">
          <div className="product-gallery">
            <div
              className="component product-gallery"
              data-controller="product-gallery-component"
            >
              <div
                className="product-thumbnails -vertical slick-initialized slick-slider slick-vertical"
                data-product-gallery-component-target="thumbnailsVertical"
                id="productThumbnails"
              >
                <div
                  className="slick-list draggable"
                  style={{
                    height: '768px'
                  }}
                >
                  <div
                    className="slick-track"
                    style={{
                      height: '512px',
                      opacity: '1',
                      transform: 'translate3d(0px, 0px, 0px)'
                    }}
                  >
                    <div
                      aria-hidden="false"
                      className="slick-slide slick-current slick-active"
                      data-slick-index="0"
                      style={{
                        width: '78px'
                      }}
                    >
                      <div>
                        <img
                          alt="Image 1 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                          className="product-thumbnail-image"
                          height="120"
                          src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/ztu45631fl6i688u8ucuy4wt1sy3"
                          style={{
                            display: 'inline-block',
                            opacity: '1',
                            width: '100%'
                          }}
                        />
                      </div>
                    </div>
                    <div
                      aria-hidden="false"
                      className="slick-slide slick-active"
                      data-slick-index="1"
                      style={{
                        width: '78px'
                      }}
                    >
                      <div>
                        <img
                          alt="Image 2 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                          className="product-thumbnail-image"
                          height="120"
                          src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/fihg58jwp2dikkw89y5k1pi6x02v"
                          style={{
                            display: 'inline-block',
                            opacity: '1',
                            width: '100%'
                          }}
                        />
                      </div>
                    </div>
                    <div
                      aria-hidden="false"
                      className="slick-slide slick-active"
                      data-slick-index="2"
                      style={{
                        width: '78px'
                      }}
                    >
                      <div>
                        <img
                          alt="Image 3 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                          className="product-thumbnail-image"
                          height="120"
                          src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/tcjb09injav1h2e8g7y3qsgi3xej"
                          style={{
                            display: 'inline-block',
                            opacity: '1',
                            width: '100%'
                          }}
                        />
                      </div>
                    </div>
                    <div
                      aria-hidden="false"
                      className="slick-slide slick-active"
                      data-slick-index="3"
                      style={{
                        width: '78px'
                      }}
                    >
                      <div>
                        <img
                          alt="Image 4 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                          className="product-thumbnail-image"
                          height="120"
                          src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/32p6dt7wdj7k37umetejcxlo50rm"
                          style={{
                            display: 'inline-block',
                            opacity: '1',
                            width: '100%'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-image-wrapper">
                <div
                  className="carousel slick-initialized slick-slider"
                  data-product-gallery-component-target="mainImage"
                  id="mainSlick"
                >
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: '1',
                        width: '2376px'
                      }}
                    >
                      <div
                        aria-hidden="false"
                        className="slick-slide slick-current slick-active"
                        data-slick-index="0"
                        style={{
                          left: '0px',
                          opacity: '1',
                          position: 'relative',
                          top: '0px',
                          width: '594px',
                          zIndex: '999'
                        }}
                      >
                        <div>
                          <img
                            alt="Rent The Mini Night Tremors sequin - The Vampire’s Wife | CIRCULAR COUTURE"
                            className="product-image-item"
                            data-product-gallery-component-target="image"
                            src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_900,q_auto:best,w_600/ztu45631fl6i688u8ucuy4wt1sy3"
                            style={{
                              display: 'inline-block',
                              opacity: '1',
                              width: '100%'
                            }}
                          />
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="slick-slide"
                        data-slick-index="1"
                        style={{
                          left: '-594px',
                          opacity: '0',
                          position: 'relative',
                          top: '0px',
                          width: '594px',
                          zIndex: '998'
                        }}
                        tabIndex="-1"
                      >
                        <div>
                          <img
                            alt="Rent The Mini Night Tremors sequin - The Vampire’s Wife | CIRCULAR COUTURE"
                            className="product-image-item"
                            data-product-gallery-component-target="image"
                            src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_900,q_auto:best,w_600/fihg58jwp2dikkw89y5k1pi6x02v"
                            style={{
                              display: 'inline-block',
                              opacity: '1',
                              width: '100%'
                            }}
                          />
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="slick-slide"
                        data-slick-index="2"
                        style={{
                          left: '-1188px',
                          opacity: '0',
                          position: 'relative',
                          top: '0px',
                          width: '594px',
                          zIndex: '998'
                        }}
                        tabIndex="-1"
                      >
                        <div>
                          <img
                            alt="Rent The Mini Night Tremors sequin - The Vampire’s Wife | CIRCULAR COUTURE"
                            className="product-image-item"
                            data-product-gallery-component-target="image"
                            src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_900,q_auto:best,w_600/tcjb09injav1h2e8g7y3qsgi3xej"
                            style={{
                              display: 'inline-block',
                              opacity: '1',
                              width: '100%'
                            }}
                          />
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="slick-slide"
                        data-slick-index="3"
                        style={{
                          left: '-1782px',
                          opacity: '0',
                          position: 'relative',
                          top: '0px',
                          width: '594px',
                          zIndex: '998'
                        }}
                        tabIndex="-1"
                      >
                        <div>
                          <img
                            alt="Rent The Mini Night Tremors sequin - The Vampire’s Wife | CIRCULAR COUTURE"
                            className="product-image-item"
                            data-lazy="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_900,q_auto:best,w_600/32p6dt7wdj7k37umetejcxlo50rm"
                            data-product-gallery-component-target="image"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/product-lazy-template-c7212d0edfbabccebcb34e85c5e002f9"
                            style={{
                              display: 'inline-block',
                              width: '100%'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <turbo-frame class="wishlist_button_component_8813361">
                  <button
                    className="component wishlist-button"
                    data-action="wishlist-button-component#toggleWishlist"
                    data-controller="wishlist-button-component"
                    data-wishlist-button-component-authenticated-value="false"
                    data-wishlist-button-component-current-page-path-value="/listings/the-mini-night-tremors-sequinn-9887"
                    data-wishlist-button-component-url-value="/wishlist_toggle/8813361"
                    data-wishlist-count="49"
                    target="_top"
                  >
                    {' '}
                    <img
                      alt="An icon of a heart"
                      src="https://res.cloudinary.com/dcaptnlz3/image/asset/heart-7dd5f36c98ccda2c8242b92c95914d6e.svg"
                    />
                  </button>
                </turbo-frame>
                <button
                  className="component listing-share-button d-none"
                  data-action="click->listing-share-button-component#show"
                  data-controller="listing-share-button-component"
                  data-listing-share-button-component-text-value="Rent this The Mini Night Tremors Sequin dress from The Vampire’s Wife, available now on CIRCULAR COUTURE — Europe's leading fashion rental destination."
                  data-listing-share-button-component-title-value="CIRCULAR COUTURE"
                  data-listing-share-button-component-url-value="https://www.circular-couturecollective.com/listings/the-mini-night-tremors-sequinn-9887"
                >
                  {' '}
                  <img
                    alt="An icon of a share listing icon"
                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/share-listing-icon-2fd44a33fc576364c29cac2253b3b5b6.svg"
                  />
                </button>
                <button
                  className="next slick-arrow"
                  data-product-gallery-component-target="nextArrow"
                  style={{}}
                >
                  <img
                    alt="An icon of a chevron right"
                    height="24"
                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/chevron-right-4d9dc1896a4765e272ce510a3e1d363f.svg"
                    width="24"
                  />
                </button>
                <button
                  className="prev slick-arrow"
                  data-product-gallery-component-target="prevArrow"
                  style={{}}
                >
                  <img
                    alt="An icon of a chevron left"
                    height="14"
                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/chevron-left-218bf512919cbc55739cb2f87ee19df1.svg"
                    width="18"
                  />
                </button>
                <div
                  className="product-thumbnails -horizontal slick-initialized slick-slider"
                  data-product-gallery-component-target="thumbnailsHorizontal"
                  id="productThumbnails"
                  style={{}}
                >
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: '1',
                        transform: 'translate3d(0px, 0px, 0px)',
                        width: '0px'
                      }}
                    >
                      <div
                        aria-hidden="false"
                        className="slick-slide slick-current slick-active"
                        data-slick-index="0"
                        style={{
                          width: '0px'
                        }}
                      >
                        <div>
                          <img
                            alt="Image 1 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                            className="product-thumbnail-image"
                            data-product-gallery-component-target="image"
                            src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/ztu45631fl6i688u8ucuy4wt1sy3"
                            style={{
                              display: 'inline-block',
                              opacity: '1',
                              width: '100%'
                            }}
                          />
                        </div>
                      </div>
                      <div
                        aria-hidden="false"
                        className="slick-slide slick-active"
                        data-slick-index="1"
                        style={{
                          width: '0px'
                        }}
                      >
                        <div>
                          <img
                            alt="Image 2 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                            className="product-thumbnail-image"
                            data-product-gallery-component-target="image"
                            src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/fihg58jwp2dikkw89y5k1pi6x02v"
                            style={{
                              display: 'inline-block',
                              opacity: '1',
                              width: '100%'
                            }}
                          />
                        </div>
                      </div>
                      <div
                        aria-hidden="false"
                        className="slick-slide slick-active"
                        data-slick-index="2"
                        style={{
                          width: '0px'
                        }}
                      >
                        <div>
                          <img
                            alt="Image 3 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                            className="product-thumbnail-image"
                            data-product-gallery-component-target="image"
                            src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/tcjb09injav1h2e8g7y3qsgi3xej"
                            style={{
                              display: 'inline-block',
                              opacity: '1',
                              width: '100%'
                            }}
                          />
                        </div>
                      </div>
                      <div
                        aria-hidden="false"
                        className="slick-slide slick-active"
                        data-slick-index="3"
                        style={{
                          width: '0px'
                        }}
                      >
                        <div>
                          <img
                            alt="Image 4 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                            className="product-thumbnail-image"
                            data-product-gallery-component-target="image"
                            src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/32p6dt7wdj7k37umetejcxlo50rm"
                            style={{
                              display: 'inline-block',
                              opacity: '1',
                              width: '100%'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 px-0">
          <div className="product-details ml-0 ml-lg-auto">
            <div className="component product-header">
              <div className="listed-by">
                {' '}Listed by{' '}
                <Link to="/members/circular-couture-hu-49619">
                  MATCHES
                </Link>
              </div>
              <div className="product-title">
                <Link to="/designers/the-vampire-s-wife">
                  <h1 className="brand-name">
                    {' '}The Vampire’s Wife{' '}
                  </h1>
                </Link>
                <h1 className="item-name">
                  Rent The Mini Night Tremors sequin
                </h1>
              </div>
              <div className="reviews">
                <div className="badge-section">
                  {' '}
                  <span className="badge p-0">
                    <div
                      className="component badge primary large"
                      data-target="#managed-by-circular-couture"
                      data-toggle="modal"
                    >
                      Managed by{' '}
                      <span className="logo">
                        CIRCULAR COUTURE
                      </span>
                      {' '}
                      <img
                        alt="An icon of a info"
                        height="17"
                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                        width="17"
                      />
                    </div>
                  </span>
                  <div
                    className="component modal managed-by-circular-couture fade"
                    data-controller="modal-component"
                    data-modal-component-state-value="hide"
                    id="managed-by-circular-couture"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        {' '}
                        <span
                          className="close-modal"
                          data-action="click->modal-component#hideModal"
                        >
                          <img
                            alt="An icon of a close"
                            height="24"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                            width="24"
                          />
                        </span>
                        <h3 className="text-center">
                          what are managed items?
                        </h3>
                        <p>
                          {' '}Managed items are pieces CIRCULAR COUTURE looks after on our brands’                                                        behalf. You can easily recognise them from their MANAGED tag.{' '}
                        </p>
                        <p>
                          They are professionally cleaned by Oxwash, include free return shipping                                                        and are available for next day shipping if you book by midday.
                        </p>
                        <p>
                          <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/4419475865105-What-does-MANAGED-mean-">
                            Click                                                            here to learn more
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="component modal top-lender fade"
                    data-controller="modal-component"
                    data-modal-component-state-value="hide"
                    id="top-lender"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        {' '}
                        <span
                          className="close-modal"
                          data-action="click->modal-component#hideModal"
                        >
                          <img
                            alt="An icon of a close"
                            height="24"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                            width="24"
                          />
                        </span>
                        <h3 className="text-center">
                          what are TOP LENDERS?
                        </h3>
                        <p>
                          {' '}Top Lenders are a group of some of the most trusted and best performing                                                        members of the CIRCULAR COUTURE marketplace. You can easily recognise                                                        them by looking for the badge on item and profile pages. You can also                                                        filter the marketplace to only show items from Top Lender wardrobes.
                        </p>
                        <p>
                          <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/5136087908753-What-is-a-Top-Lender-">
                            Click                                                            here to learn more
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="accordion"
              id="productOptionAccordion"
            >
              <div
                className="component product-rent"
                data-controller="product-rent-component"
                data-product-rent-component-current-frame-url="https://www.circular-couturecollective.com/listings/the-mini-night-tremors-sequinn-9887"
                data-product-rent-component-current-path-value="https://www.circular-couturecollective.com/listings/the-mini-night-tremors-sequinn-9887"
              >
                <label
                  className="header"
                  htmlFor="product_rent"
                >
                  <h5 className="title">
                    Rent
                    <div className="sub-title">
                      {' '}From AU$155.28 / 4 days{' '}
                    </div>
                    <div className="retail">
                      <span className="price">
                        Retail AU$1,495.00
                      </span>
                      <span className="saves">
                        Save AU$1,339.72
                      </span>
                    </div>
                  </h5>
                </label>
                <turbo-frame
                  data-action="turbo:frame-render->product-rent-component#stopFormLoading"
                  id="product-rent-component-form-frame"
                  reloadable="true"
                  target="_top"
                >
                  <form
                    acceptCharset="UTF-8"
                    action="/rentals"
                    className="content collapse show"
                    data-action="ajax:beforeSend->booking-request#validateForm ajax:success->google-tag-manager--enhanced-ecommerce#successfulCheckout ajax:success->product-rent-component#checkRequirements"
                    data-controller="google-tag-manager--enhanced-ecommerce"
                    data-google-tag-manager--enhanced-ecommerce-checkout-type="Rental Start Checkout"
                    data-google-tag-manager--enhanced-ecommerce-item-brand="The Vampire’s Wife"
                    data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;dresses&quot;]"
                    data-google-tag-manager--enhanced-ecommerce-item-colour="black"
                    data-google-tag-manager--enhanced-ecommerce-item-name="The Mini Night Tremors sequin"
                    data-google-tag-manager--enhanced-ecommerce-item-price="155"
                    data-google-tag-manager--enhanced-ecommerce-item-uid="8813361"
                    data-parent="#productOptionAccordion"
                    data-product-rent-component-target="form"
                    data-remote="true"
                    id="productRent"
                    method="post"
                    style={{
                      opacity: '1',
                      pointerEvents: 'auto'
                    }}
                  >
                    <input
                      autoComplete="off"
                      defaultValue="u/WtcQqMS97CmQ6qGSedHKNlp0wmGp+ukwnnKvdHL/3eGnxco6m9DjVdJw2WR/V8OImp3yJw7XzbvtahFTjOug=="
                      name="authenticity_token"
                      type="hidden"
                    />
                    <input
                      autoComplete="off"
                      className="js-product-rent-listing-id"
                      defaultValue="74496"
                      id="rental_listing_id"
                      name="rental[listing_id]"
                      type="hidden"
                    />
                    <input
                      autoComplete="off"
                      className="js-product-rent-rental-lender-id"
                      defaultValue="172091"
                      id="rental_lender_id"
                      name="rental[lender_id]"
                      type="hidden"
                    />
                    <div className="sizes">
                      <div className="titles">
                        <div
                          className="size-title"
                          id="size-section"
                        >
                          Size *
                        </div>
                        <div>
                          {' '}
                          <Link
                            className="size-detail"
                            data-target="#size-detail"
                            data-toggle="modal"
                            to="#"
                          >
                            Size details
                          </Link>
                          {' '}
                          <Link
                            className="size-guide"
                            data-target="#size-guide"
                            data-toggle="modal"
                            to="#"
                          >
                            Size guide
                          </Link>
                          {' '}
                        </div>
                      </div>
                      <select
                        className="component dropdown js-product-rent-unit-id"
                        data-action="change->product-rent-component#updateProductRentFormCalendar change->product-rent-component#setAddToBagUnit"
                        data-product-rent-component-target="unitId sizeDropdown"
                        id="unit-id-input-field"
                        name="rental[line_items_attributes][0][unit_id]"
                        style={{
                          color: 'inherit'
                        }}
                      >
                        <option
                          disabled
                          selected
                          value=""
                        >
                          Select Size
                        </option>
                        <option value="29708b35-6b0b-4b55-aafe-62e103ff91bc">
                          UK 8
                        </option>
                        <option value="67424a5d-2d00-4071-93aa-817fd160c31b">
                          UK 16
                        </option>
                      </select>
                      <input
                        autoComplete="off"
                        className="js-product-rent-line-item-lender-id"
                        defaultValue="172091"
                        id="rental_line_items_attributes_0_lender_id"
                        name="rental[line_items_attributes][0][lender_id]"
                        type="hidden"
                      />
                    </div>
                    <div className="d-flex">
                      <div className="badge-section">
                        <div
                          className="component badge neutral small"
                          data-target="#worried-about-fit"
                          data-toggle="modal"
                        >
                          {' '}Worried about fit?{' '}
                          <img
                            alt="An icon of a info"
                            height="17"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                            width="17"
                          />
                        </div>
                        <div
                          className="component modal worried-about-fit fade"
                          data-controller="modal-component"
                          data-modal-component-state-value="hide"
                          id="worried-about-fit"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              {' '}
                              <span
                                className="close-modal"
                                data-action="click->modal-component#hideModal"
                              >
                                <img
                                  alt="An icon of a close"
                                  height="24"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                                  width="24"
                                />
                              </span>
                              <h3 className="text-center">
                                Worried about fit?
                              </h3>
                              <p>
                                We’ve updated our{' '}
                                <Link
                                  className="link"
                                  to="https://help.circular-couturecollective.com/hc/en-us/articles/4402511533841-What-if-the-item-does-not-fit-"
                                >
                                  Fit                                                                        Policy
                                </Link>
                                {' '}to give you more of your money back when your                                                                    item doesn’t fit you. Return this item within 24 hours of                                                                    your rental beginning and you’ll receive a part-money,                                                                    part-credit refund.
                              </p>
                              <p className="m-0">
                                The rental fee will be refunded directly and the                                                                    dry cleaning fee will be credited to your CIRCULAR COUTURE                                                                    account.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="sizes">
                        {' '}
                        <Link
                          className="size-detail"
                          data-target="#size-detail"
                          data-toggle="modal"
                          to="#"
                        >
                          Size details
                        </Link>
                        {' '}
                        <Link
                          className="size-guide"
                          data-target="#size-guide"
                          data-toggle="modal"
                          to="#"
                        >
                          Size                                                        guide
                        </Link>
                        {' '}
                      </div>
                    </div>
                    <div
                      className="rental-period-section"
                      data-product-rent-component-target="rentalPeriodSection"
                      id="rental-period-section"
                    >
                      <div className="title">
                        Rental period *
                      </div>
                      <div className="rental-rates-description">
                        <div className="icon d-md-flex align-items-md-center">
                          <img
                            alt="An icon of a tag"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/tag-bfe411d6a970aecf12dae86f548ae4f9.svg"
                          />
                        </div>
                        {' '}Longer rentals mean lower daily rates and bigger savings.
                      </div>
                      <div className="period-boxes row">
                        <input
                          autoComplete="off"
                          className="rental-period-field js-number-of-day-rental"
                          data-action="                              product-rent-component#showCalendar                              product-rent-component#updateAddToBagDurationAndPrice                              product-rent-component#validate                            "
                          data-duration-price="155.2795"
                          defaultValue="4"
                          hidden
                          id="number_of_day_rental1"
                          name="rental[number_of_day_rental]"
                          type="radio"
                        />
                        <label
                          className="col-6 period-box-column m-0 px-0 pr-2 pb-3"
                          htmlFor="number_of_day_rental1"
                        >
                          <div
                            className="period-box"
                            data-product-rent-component-target="rentalPeriodBox"
                          >
                            <div className="days-2">
                              4 days
                            </div>
                            <div className="price-2">
                              AU$155.28
                            </div>
                            <div className="price-2">
                              {' '}
                              <span className="cost-per-day">
                                AU$38.82/day
                              </span>
                            </div>
                          </div>
                        </label>
                        <input
                          autoComplete="off"
                          className="rental-period-field js-number-of-day-rental"
                          data-action="                              product-rent-component#showCalendar                              product-rent-component#updateAddToBagDurationAndPrice                              product-rent-component#validate                            "
                          data-duration-price="233.514"
                          defaultValue="8"
                          hidden
                          id="number_of_day_rental2"
                          name="rental[number_of_day_rental]"
                          type="radio"
                        />
                        <label
                          className="col-6 period-box-column m-0 px-0 pl-2"
                          htmlFor="number_of_day_rental2"
                        >
                          <div
                            className="period-box"
                            data-product-rent-component-target="rentalPeriodBox"
                          >
                            <div className="days-2">
                              8 days
                            </div>
                            <div className="price-2">
                              {' '}AU$233.51{' '}
                            </div>
                            <div className="price-2">
                              {' '}
                              <span className="cost-per-day">
                                AU$29.19/day
                              </span>
                              <span className="discount-percentage">
                                {' '}Save 25%
                              </span>
                              {' '}
                            </div>
                          </div>
                        </label>
                        <input
                          autoComplete="off"
                          className="rental-period-field js-number-of-day-rental"
                          data-action="                              product-rent-component#showCalendar                              product-rent-component#updateAddToBagDurationAndPrice                              product-rent-component#validate                            "
                          data-duration-price="412.3275"
                          defaultValue="16"
                          hidden
                          id="number_of_day_rental5"
                          name="rental[number_of_day_rental]"
                          type="radio"
                        />
                        <label
                          className="col-6 period-box-column m-0 px-0 pr-2 pb-3"
                          htmlFor="number_of_day_rental5"
                        >
                          <div
                            className="period-box"
                            data-product-rent-component-target="rentalPeriodBox"
                          >
                            <div className="days-2">
                              16 days
                            </div>
                            <div className="price-2">
                              {' '}AU$412.33{' '}
                            </div>
                            <div className="price-2">
                              {' '}
                              <span className="cost-per-day">
                                AU$25.77/day
                              </span>
                              <span className="discount-percentage">
                                {' '}Save 34%
                              </span>
                              {' '}
                            </div>
                          </div>
                        </label>
                        <input
                          autoComplete="off"
                          className="rental-period-field js-number-of-day-rental"
                          data-action="                              product-rent-component#showCalendar                              product-rent-component#updateAddToBagDurationAndPrice                              product-rent-component#validate                            "
                          data-duration-price="512.9065"
                          defaultValue="30"
                          hidden
                          id="number_of_day_rental6"
                          name="rental[number_of_day_rental]"
                          type="radio"
                        />
                        <label
                          className="col-6 period-box-column m-0 px-0 pl-2"
                          htmlFor="number_of_day_rental6"
                        >
                          <div
                            className="period-box"
                            data-product-rent-component-target="rentalPeriodBox"
                          >
                            <div className="days-2">
                              30 days
                            </div>
                            <div className="price-2">
                              {' '}AU$512.91{' '}
                            </div>
                            <div className="price-2">
                              {' '}
                              <span className="cost-per-day">
                                AU$17.10/day
                              </span>
                              <span className="discount-percentage">
                                {' '}Save 56%
                              </span>
                              {' '}
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className="badge-section">
                        <div
                          className="component badge neutral small"
                          data-target="#how-does-pricing-work"
                          data-toggle="modal"
                        >
                          {' '}How does pricing work{' '}
                          <img
                            alt="An icon of a info"
                            height="17"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                            width="17"
                          />
                        </div>
                        <div
                          className="component modal how-does-pricing-work fade"
                          data-controller="modal-component"
                          data-modal-component-state-value="hide"
                          id="how-does-pricing-work"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              {' '}
                              <span
                                className="close-modal"
                                data-action="click->modal-component#hideModal"
                              >
                                <img
                                  alt="An icon of a close"
                                  height="24"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                                  width="24"
                                />
                              </span>
                              <h3 className="text-center">
                                How does pricing work?
                              </h3>
                              <p>
                                The rental price of an item is determined by a combination of                                                                    both the item’s recommended retail price (RRP) and a day                                                                    rate which is calculated by our algorithms. The higher the                                                                    item’s RRP, the more competitive the day rate becomes. This                                                                    keeps rental prices fair and accessible on more expensive                                                                    items. It also means that longer rental periods become                                                                    better value options to our customers without compromising                                                                    on payouts to our Lender community.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <input
                      autoComplete="off"
                      className="js-product-rent-pickup-date"
                      data-action="change->product-rent-component#updateAddToBagDate"
                      data-product-rent-component-target="pickupDate"
                      id="pickupDate"
                      name="rental[pickup_date]"
                      type="hidden"
                    />
                    <input
                      autoComplete="off"
                      className="js-product-rent-return-date"
                      data-product-rent-component-target="returnDate"
                      id="returnDate"
                      name="rental[return_date]"
                      type="hidden"
                    />
                    <div
                      className="rental-dates-section d-none"
                      data-product-rent-component-target="rentalDatesSection"
                      id="pick-up-date-section"
                    >
                      <div className="title">
                        Dates *
                      </div>
                      <p>
                        Tap to select Start Date, preferably 1-2 days before you plan to wear it.
                      </p>
                      <turbo-frame
                        complete=""
                        id="rental_dates_calendar_component_frame"
                        src="https://www.circular-couturecollective.com/component_loader/pdp_sections/rental_dates_calendar_component_frame?listing_id=74496"
                        target="_top"
                      >
                        <div
                          className="component rental-dates-calendar flex-column"
                          data-controller="rental-dates-calendar-component"
                          data-rental-dates-calendar-component-blocked-dates-for-start-date-value="[]"
                          data-rental-dates-calendar-component-duration-value="4"
                          data-rental-dates-calendar-component-end-date-target-field-value="#returnDate"
                          data-rental-dates-calendar-component-open-in-connect-value="false"
                          data-rental-dates-calendar-component-price-value="0"
                          data-rental-dates-calendar-component-start-date-target-field-value="#pickupDate"
                          data-rental-dates-calendar-component-unavailable-dates-value="[]"
                        >
                          <div
                            className="date-range-wrapper"
                            data-rental-dates-calendar-component-target="calendarWrapper"
                          >
                            <input
                              className="d-none"
                              data-rental-dates-calendar-component-target="field"
                              defaultValue=""
                              readOnly
                              type="text"
                            />
                            <div className="daterangepicker ltr show-calendar opensleft">
                              <div className="ranges" />
                              <div className="drp-calendar left">
                                <div className="calendar-table" />
                                <div
                                  className="calendar-time"
                                  style={{
                                    display: 'none'
                                  }}
                                />
                              </div>
                              <div className="drp-calendar right">
                                <div className="calendar-table" />
                                <div
                                  className="calendar-time"
                                  style={{
                                    display: 'none'
                                  }}
                                />
                              </div>
                              <div className="drp-buttons">
                                <span className="drp-selected" />
                                <button
                                  className="cancelBtn btn btn-sm btn-default"
                                  type="button"
                                >
                                  Cancel
                                </button>
                                <button
                                  className="applyBtn btn btn-sm btn-primary"
                                  disabled
                                  type="button"
                                >
                                  Apply
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="badge-section mt-3">
                            <div
                              className="component badge neutral small"
                              data-target="#what-these-dates-mean"
                              data-toggle="modal"
                            >
                              {' '}
                              <img
                                alt="An icon of a info"
                                height="17"
                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                                width="17"
                              />
                              What these dates mean?{' '}
                            </div>
                            <div
                              className="component modal what-these-dates-mean fade"
                              data-controller="modal-component"
                              data-modal-component-state-value="hide"
                              id="what-these-dates-mean"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  {' '}
                                  <span
                                    className="close-modal"
                                    data-action="click->modal-component#hideModal"
                                  >
                                    <img
                                      alt="An icon of a close"
                                      height="24"
                                      src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                                      width="24"
                                    />
                                  </span>
                                  <h3 className="text-center">
                                    WHAT THESE DATES MEAN?
                                  </h3>
                                  <p>
                                    The Start Date is the date on which you can expect                                                                            your item to arrive, although it could get to you                                                                            sooner. If you are renting for an event, we                                                                            recommend setting the Start Date a few days before.
                                  </p>
                                  <p>
                                    The End Date is the date by which you should have                                                                            sent the item back in the post to its owner. If this                                                                            is a Sunday, then you should send the item back on                                                                            the Saturday or Monday and let the Lender know.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="rental-arrivals mt-4 d-none"
                            data-rental-dates-calendar-component-target="rentalArrivalDetails"
                          >
                            <div>
                              {' '}
                              <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/calendar-start-7742e6ccc0cab85129683829feabd3d1.svg" />
                              Arrives by{' '}
                              <span data-rental-dates-calendar-component-target="arrivalDate">
                                Monday, 26th September{' '}
                              </span>
                              {' '}
                            </div>
                            <div>
                              {' '}
                              <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/calendar-end-a386fb60addd1db6f73cacbf7cfb7729.svg" />
                              Return by{' '}
                              <span data-rental-dates-calendar-component-target="returningDate">
                                Monday, 3rd October{' '}
                              </span>
                              {' '}
                            </div>
                          </div>
                          <div className="total-price-wrapper">
                            {' '}Total:{' '}
                            <span data-rental-dates-calendar-component-target="totalPrice">
                              AU$0.00
                            </span>
                            {' '}
                          </div>
                        </div>
                      </turbo-frame>
                    </div>
                    <div className="actions">
                      <button
                        className="w-100 js-product-rent-submit-button component button primary "
                        data-action="product-rent-component#validate"
                        name="button"
                        target="_top"
                        type="submit"
                      >
                        <div className="title ">
                          {' '}Rent Now{' '}
                        </div>
                      </button>
                      <turbo-frame
                        complete=""
                        id="add_to_bag_button_component_frame"
                        src="https://www.circular-couturecollective.com/component_loader/pdp_sections/add_to_bag_button_component_frame?listing_id=74496&unit_id="
                        target="_top"
                      >
                        <button
                          className="w-100 js-add-to-bag-button component button tertiary "
                          data-action="product-rent-component#validate"
                          name="button"
                          target="_top"
                          type="button"
                        >
                          <div className="title ">
                            {' '}
                            <span>
                              Add To Bag
                            </span>
                            {' '}
                          </div>
                        </button>
                      </turbo-frame>
                    </div>
                  </form>
                </turbo-frame>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
        <EmailSubscription />
        <Footer />
        </>
    )
}
export default ListStepThree;