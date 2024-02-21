import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import Reviews from "../../Components/Reviews";
const ProductDetail = () =>{
    return (
        <>
        <TopHeader />
        <div>
  <div className="main-container pt-0 -with-cta-banner">
    <div className="component-container my-3 my-md-4">
      <div className="component breadcrumb pt-3">
        <ul className="breadcrumb-lists">
          <li className="breadcrumb-list">
            {' '}
            <Link
              className="breadcrumb-link clickable"
              to="/"
            >
              Home
            </Link>
            {' '}
          </li>
          <li className="breadcrumb-list">
            {' '}
            <Link
              className="breadcrumb-link clickable"
              to="/collections/clothing"
            >
              Clothing
            </Link>
            {' '}
          </li>
          <li className="breadcrumb-list">
            {' '}
            <Link
              className="breadcrumb-link clickable"
              to="/collections/dresses"
            >
              Dresses
            </Link>
            {' '}
          </li>
          <li className="breadcrumb-list">
            {' '}
            <Link
              className="breadcrumb-link"
              to="javascript:void()"
            >
              The Mini Night							Tremors Sequin
            </Link>
            {' '}
          </li>
        </ul>
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
                        {' '}Managed items are pieces CIRCULAR COUTURE looks after on our brands’												behalf. You can easily recognise them from their MANAGED tag.{' '}
                      </p>
                      <p>
                        They are professionally cleaned by Oxwash, include free return shipping												and are available for next day shipping if you book by midday.
                      </p>
                      <p>
                        <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/4419475865105-What-does-MANAGED-mean-">
                          Click													here to learn more
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
                        {' '}Top Lenders are a group of some of the most trusted and best performing												members of the CIRCULAR COUTURE marketplace. You can easily recognise												them by looking for the badge on item and profile pages. You can also												filter the marketplace to only show items from Top Lender wardrobes.											
                      </p>
                      <p>
                        <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/5136087908753-What-is-a-Top-Lender-">
                          Click													here to learn more
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
                                Fit																Policy
                              </Link>
                              {' '}to give you more of your money back when your															item doesn’t fit you. Return this item within 24 hours of															your rental beginning and you’ll receive a part-money,															part-credit refund.
                            </p>
                            <p className="m-0">
                              The rental fee will be refunded directly and the															dry cleaning fee will be credited to your CIRCULAR COUTURE															account.
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
                        Size												guide
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
                        data-action="                      product-rent-component#showCalendar                      product-rent-component#updateAddToBagDurationAndPrice                      product-rent-component#validate                    "
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
                        data-action="                      product-rent-component#showCalendar                      product-rent-component#updateAddToBagDurationAndPrice                      product-rent-component#validate                    "
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
                        data-action="                      product-rent-component#showCalendar                      product-rent-component#updateAddToBagDurationAndPrice                      product-rent-component#validate                    "
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
                        data-action="                      product-rent-component#showCalendar                      product-rent-component#updateAddToBagDurationAndPrice                      product-rent-component#validate                    "
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
                              The rental price of an item is determined by a combination of															both the item’s recommended retail price (RRP) and a day															rate which is calculated by our algorithms. The higher the															item’s RRP, the more competitive the day rate becomes. This															keeps rental prices fair and accessible on more expensive															items. It also means that longer rental periods become															better value options to our customers without compromising															on payouts to our Lender community.
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
                                  The Start Date is the date on which you can expect																	your item to arrive, although it could get to you																	sooner. If you are renting for an event, we																	recommend setting the Start Date a few days before.																
                                </p>
                                <p>
                                  The End Date is the date by which you should have																	sent the item back in the post to its owner. If this																	is a Sunday, then you should send the item back on																	the Saturday or Monday and let the Lender know.
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
                    <Link to="/ListItems/ListStepOne">
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
                    </Link>
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
    <div className="col-12 px-0">
      <turbo-frame
        complete=""
        id="featured_faq_component_frame"
        src="https://www.circular-couturecollective.com/component_loader/pdp_sections/featured_faq_component_frame?listing_id=74496"
        target="_top"
      >
        <div className="featured-faq-component">
          <h2 className="faq-title text-center">
            Common Questions
          </h2>
          <div className="faq-row no-gutters">
            <div className="faq-card col-12 col-lg">
              <div className="featured-faq-card-component">
                <div className="col-12 text-center p-0">
                  {' '}
                  <img
                    alt="An icon of a tag"
                    height="24"
                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/tag-30acf963b4beb7211a16f2156988858b.svg"
                    width="24"
                  />
                  <p className="title">
                    {' '}What if my item doesn't fit?{' '}
                  </p>
                  <p className="description">
                    {' '}Return this item within 24 hours and you'll receive a										part-money, part-credit refund.{' '}
                    <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/4402511533841-What-if-the-item-does-not-fit-">
                      Learn											more.
                    </Link>
                    {' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-card col-12 col-lg">
              <div className="featured-faq-card-component">
                <div className="col-12 text-center p-0">
                  {' '}
                  <img
                    alt="An icon of a truck"
                    height="24"
                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/truck-cf22033e1b92cd8a37b079d41dceb113.svg"
                    width="24"
                  />
                  <p className="title">
                    {' '}When will I receive my item?{' '}
                  </p>
                  <p className="description">
                    {' '}The item will be shipped a few days before your Start Date.										
                    <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/9170731141905-How-can-I-track-my-rental-">
                      Learn											more.
                    </Link>
                    {' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="faq-card col-12 col-lg">
              <div className="featured-faq-card-component">
                <div className="col-12 text-center p-0">
                  {' '}
                  <img
                    alt="An icon of a drop"
                    height="24"
                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/drop-a0acb12f8a7d07769855d806078582a2.svg"
                    width="24"
                  />
                  <p className="title">
                    {' '}What if I damage my item?{' '}
                  </p>
                  <p className="description">
                    {' '}The AU$7.50 Damage Protection fee will cover you!{' '}
                    <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/4419480012177-What-is-Damage-Protection-">
                      Learn											more.
                    </Link>
                    {' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </turbo-frame>
    </div>
    
    <div className="col-12 px-0">
      <turbo-frame
        complete=""
        id="product_details_component_frame"
        src="https://www.circular-couturecollective.com/component_loader/pdp_sections/product_details_component_frame?listing_id=74496"
        target="_top"
      >
        <div className="product-details-component">
          <div className="row no-gutters product-details-container ">
            <div className="col-12 col-lg-6 accordion">
              <div
                className="no-gutters product-accordion-component product-details-accordion"
                data-controller="carbon-calculation"
                id="productAccordion"
              >
                <div className="col-12">
                  <h2 className="m-0 pb-3">
                    Details
                  </h2>
                  <div className="card product-accordion-border">
                    <div
                      className="card-header p-0 border-0"
                      id="descriptionHeader"
                    >
                      <Link
                        aria-controls="collapseDescription"
                        aria-expanded="false"
                        className="collapse-link collapsed"
                        data-target="#collapseDescription"
                        data-toggle="collapse"
                        to="#"
                      >
                        <h3 className="collapse-title">
                          Description
                        </h3>
                      </Link>
                    </div>
                    <div
                      aria-labelledby="descriptionHeader"
                      className="collapse product-accordion-content"
                      data-parent="#productAccordion"
                      id="collapseDescription"
                    >
                      <div className="card-body card-content">
                        {' '}Scattered with thousands of shimmering												sequins, The Vampire's Wife's black The Mini Night Tremors dress is												crafted from lustrous satin for an opulent feel. Shown here with: Jimmy												Choo Bon Bon micro crystal-embellished satin bucket bag, Aquazzura												Sinner Plateau 140 metallic-leather sandals and Amina Muaddi Cameron												mini crystal-pavé hoop earrings{' '}
                      </div>
                    </div>
                  </div>
                  <div className="card product-accordion-border">
                    <div
                      className="card-header p-0 border-0"
                      id="sizeFitesHeader"
                    >
                      <Link
                        aria-controls="collapseSizeFit"
                        aria-expanded="false"
                        className="collapse-link collapsed"
                        data-target="#collapseSizeFit"
                        data-toggle="collapse"
                        to="#"
                      >
                        <h3 className="collapse-title">
                          Size & Fit
                        </h3>
                      </Link>
                    </div>
                    <div
                      aria-labelledby="sizeFitHeader"
                      className="collapse product-accordion-content"
                      data-parent="#productAccordion"
                      id="collapseSizeFit"
                    >
                      <div className="card-body card-content">
                        {' '}Model is a size 08UK and wears a size												08UK (04US/ 40IT/ 36FR) Height 5ft 9.5in/177cm, Full bust 34.4in/87.3cm,												Waist 27.6in/70.1cm, Hip 37.8in/95.8cm Fits true to size Fitted across												the shoulders through bust and waist Falls loose over the legs Designed												for a mini dress length{' '}
                      </div>
                    </div>
                  </div>
                  <div className="card product-accordion-border">
                    <div
                      className="card-header p-0 border-0"
                      id="deliveryHeader"
                    >
                      <Link
                        aria-controls="collapseDelivery"
                        aria-expanded="false"
                        className="collapse-link collapsed"
                        data-target="#collapseDelivery"
                        data-toggle="collapse"
                        to="#"
                      >
                        <h3 className="collapse-title">
                          Delivery
                        </h3>
                      </Link>
                    </div>
                    <div
                      aria-labelledby="deliveryHeader"
                      className="collapse product-accordion-links product-accordion-content"
                      data-parent="#productAccordion"
                      id="collapseDelivery"
                    >
                      <div className="card-content">
                        <dl>
                          <dt>
                            1. Pick a Start Date
                          </dt>
                          <dd className="mb-3">
                            {' '}This is the date your item will arrive so please														select a Start Date a day or two before you plan to wear your														rental.
                          </dd>
                          <dt>
                            2. The Lender has 48hrs to accept your request
                          </dt>
                          <dd className="mb-3">
                            Your request will remain pending until accepted.														You will see a payment authorisation on your card, which will														only be taken once the request is accepted. You can check the														status of your order within your My Rentals section!
                          </dd>
                          <dt>
                            3. Track your delivery
                          </dt>
                          <dd className="mb-3">
                            Once accepted, you will receive a confirmation														email and app notification. Track the delivery of your rental														using the tracking details provided by your Lender.{' '}
                            <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/9170731141905-How-can-I-track-my-rental-">
                              Learn															more
                            </Link>
                            {' '}
                          </dd>
                          <dt>
                            More questions?
                          </dt>
                          <ul>
                            <li>
                              <dd>
                                <Link to="https://www.circular-couturecollective.com/how-to-rent">
                                  How																	does it work?
                                </Link>
                              </dd>
                            </li>
                            <li>
                              <dd>
                                {' '}
                                <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/4402511540881-What-happens-if-I-m-not-in-to-accept-a-delivery-">
                                  What																	happens if I'm not in to accept a delivery?
                                </Link>
                              </dd>
                            </li>
                          </ul>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="card product-accordion-border">
                    <div
                      className="card-header p-0 border-0"
                      id="returnItemHeader"
                    >
                      <Link
                        aria-controls="collapseReturnItem"
                        aria-expanded="false"
                        className="collapse-link collapsed"
                        data-target="#collapseReturnItem"
                        data-toggle="collapse"
                        to="#"
                      >
                        <h3 className="collapse-title">
                          Returning Your Item
                        </h3>
                      </Link>
                    </div>
                    <div
                      aria-labelledby="returnItemHeader"
                      className="collapse product-accordion-links product-accordion-content"
                      data-parent="#productAccordion"
                      id="collapseReturnItem"
                    >
                      <div className="card-content">
                        <dl>
                          <dt>
                            1. Return your item on the rental End Date
                          </dt>
                          <dd className="mb-3">
                            On the final day of the rental period, you must														return your rental using the pre-paid return label provided.													
                          </dd>
                          <ul>
                            <li>
                              <dd>
                                Secure the pre-paid label to the front of your parcel																and post it at your local Post Office.
                              </dd>
                            </li>
                            <li>
                              <dd className="mb-3 text-danger">
                                Late returns will incur a fee																of AU$25 per day.{' '}
                                <Link
                                  className="text-danger"
                                  to="https://help.circular-couturecollective.com/hc/en-us/articles/4419482108433-Late-fees"
                                >
                                  Learn more
                                </Link>
                                {' '}
                              </dd>
                            </li>
                          </ul>
                          <dt>
                            2. Package your rental up
                          </dt>
                          <dd className="mb-3">
                            Place your rental in the original packaging.														Remember to include a 'Return to sender' (your address) on the														back of the parcel.
                          </dd>
                          <dt>
                            3. Share your tracking details
                          </dt>
                          <dd className="mb-3">
                            As soon as the item is posted, provide the Lender														with the tracking details to ensure a successful return!
                          </dd>
                          <dd>
                            Further questions?{' '}
                            <Link to="#">
                              We are here to help
                            </Link>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="card product-accordion-border">
                    <div
                      className="card-header p-0 border-0"
                      id="dryCleaningHeader"
                    >
                      <Link
                        aria-controls="collapseDryCleaning"
                        aria-expanded="false"
                        className="collapse-link collapsed"
                        data-target="#collapseDryCleaning"
                        data-toggle="collapse"
                        to="#"
                      >
                        <h3 className="collapse-title">
                          Dry Cleaning
                        </h3>
                      </Link>
                    </div>
                    <div
                      aria-labelledby="dryCleaningHeader"
                      className="collapse product-accordion-content"
                      data-parent="#productAccordion"
                      id="collapseDryCleaning"
                    >
                      <div className="card-content">
                        <p className="text-danger">
                          Please do not clean your rental.
                        </p>
                        <p>
                          It's the Lenders responsibility to clean their item ahead of a rental													and once it's returned. A dry cleaning fee is included in the rental													fee so it's all taken care of!{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card product-accordion-border">
                    <div
                      className="card-header p-0 border-0"
                      id="environmentalSavingsHeader"
                    >
                      <Link
                        aria-controls="collapseEnvironmentalSavings"
                        aria-expanded="false"
                        className="collapse-link collapsed"
                        data-target="#collapseEnvironmentalSavings"
                        data-toggle="collapse"
                        to="#"
                      >
                        <h3 className="collapse-title">
                          Environmental Savings
                        </h3>
                      </Link>
                    </div>
                    <div
                      aria-labelledby="environmentalSavingsHeader"
                      className="collapse product-accordion-content"
                      data-parent="#productAccordion"
                      id="collapseEnvironmentalSavings"
                    >
                      <div className="card-content environmental-savings-icon">
                        <p className="mb-0">
                          {' '}By renting this item, instead of buying it new and													wearing it once, you are saving{' '}
                          <span
                            className="font-weight-bold"
                            data-price="44.949999999999996"
                            data-rrp="1539.85"
                            data-target="carbon-calculation.listingViewPrice"
                          >
                            1495kg
                          </span>
                          <span className="font-weight-bold">
                            of CO2
                          </span>
                          {' '}which is the equivalent													of:{' '}
                        </p>
                        <div className="row no-gutters my-3">
                          <div className="icon-block">
                            <div className="image-container">
                              {' '}
                              <img
                                alt="Car"
                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/car-fd8d7d0a4ac16f96d643d1d1f6d2d833.svg"
                              />
                            </div>
                            <p>
                              {' '}
                              <span className="font-weight-bold mx-1">
                                5329
                              </span>
                              {' '}
                              <span className="miles-text">
                                {' '}mi in a car{' '}
                              </span>
                              {' '}/{' '}
                            </p>
                          </div>
                          <div className="icon-block">
                            <div className="image-container">
                              {' '}
                              <img
                                alt="Tree"
                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/tree-7ad02071ca52b523c0d145f7c53d96a9.svg"
                              />
                            </div>
                            <p>
                              {' '}
                              <span className="font-weight-bold">
                                25
                              </span>
                              {' '}Trees{' '}
                            </p>
                          </div>
                        </div>
                        <div className="footer-icon-block">
                          <p>
                            Verified by
                          </p>
                          {' '}
                          <img
                            alt="Cogo logo"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/cogo-edd0cdf6c1a643b38516b0f7d6b69623.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card product-accordion-border">
                    <div
                      className="card-header p-0 border-0"
                      id="lenderTypeHeader"
                    >
                      <Link
                        aria-controls="collapseLenderType"
                        aria-expanded="false"
                        className="collapse-link collapsed"
                        data-target="#collapseLenderType"
                        data-toggle="collapse"
                        to="#"
                      >
                        <h3 className="collapse-title">
                          Lender Type
                        </h3>
                      </Link>
                    </div>
                    <div
                      aria-labelledby="dryCleaningHeader"
                      className="collapse product-accordion-links product-accordion-content"
                      data-parent="#productAccordion"
                      id="collapseLenderType"
                    >
                      <div className="card-content">
                        <dl>
                          <div className="py-3">
                            <div className="lender-badge component badge primary small">
                              {' '}
                              <img
                                alt="An icon of a bell"
                                height="17"
                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/bell-a350244daea6dc6bc04093a9ae6712e6.svg"
                                width="17"
                              />
                              															Managed by{' '}
                              <span className="logo">
                                CIRCULAR COUTURE
                              </span>
                              {' '}
                            </div>
                          </div>
                          <dt className="font-weight-normal mb-3">
                            Managed items are items managed														by CIRCULAR COUTURE. This means:
                          </dt>
                          <ul>
                            <li>
                              <dd>
                                Pre-paid return labels are included
                              </dd>
                            </li>
                            <li>
                              <dd>
                                Next Day delivery is possible if booked by 12pm
                              </dd>
                            </li>
                            <li>
                              <dd>
                                Every item is sustainably cleaned by our partners																Oxwash.{' '}
                                <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/4419477651729-Who-is-responsible-for-dry-cleaning-">
                                  Learn																	more.
                                </Link>
                                {' '}
                              </dd>
                            </li>
                          </ul>
                          <div className="pt-3 mt-3 pb-3">
                            <div className="lender-badge component badge secondary small">
                              {' '}
                              <img
                                alt="An icon of a award"
                                height="17"
                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/award-cf8e2d4e167db55546a6f49c2ba74a31.svg"
                                width="17"
                              />
                              															Top Lender{' '}
                            </div>
                          </div>
                          <dt className="font-weight-normal">
                            Top Lenders are some of the most														trusted and best performing members of the CIRCULAR COUTURE														marketplace.														
                            <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/5136087908753-What-is-a-Top-Lender-">
                              Learn															more.
                            </Link>
                          </dt>
                          <div className="pt-3 mt-3 pb-3">
                            <div className="lender-badge component badge neutral small">
                              {' '}
                              <img
                                alt="An icon of a user"
                                height="17"
                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/user-2cf5503a2f18001ae97106b2917781e3.svg"
                                width="17"
                              />
                              															Lender{' '}
                            </div>
                          </div>
                          <dt className="font-weight-normal mb-3">
                            Our other lenders are newer to														the platform and are working their way up to Top Lender status!													
                          </dt>
                          <dt className="font-weight-normal pb-3">
                            If you require any further														information before placing your rental request, send them a														message!
                          </dt>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 lender-cta">
              <div className="product-lender-cta-component">
                <h2>
                  listed by
                </h2>
                <div className="product-lender">
                  <Link
                    to="/members/circular-couture-hu-49619"
                    target="_top"
                  >
                    <div className="row no-gutters product-lender-component">
                      {' '}
                      <img
                        alt="profile picture"
                        className="profile-picture-icon"
                        src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_fill,f_auto,h_118,q_auto,w_118/nn4ix7koigdihd8igfw3pfa4nnkb"
                      />
                      <div className="product-lender-info">
                        <h3 className="lender-name">
                          MATCHES
                        </h3>
                        <div className="my-2">
                          {' '}
                          <span className="badge">
                            <div className="badge component badge primary small">
                              <img
                                alt="An icon of a bell"
                                height="17"
                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/bell-a350244daea6dc6bc04093a9ae6712e6.svg"
                                width="17"
                              />
                              															Managed by{' '}
                              <span className="logo">
                                CIRCULAR COUTURE
                              </span>
                            </div>
                          </span>
                        </div>
                        <div className="row no-gutters align-items-center lender-info">
                          <div className="detail-no-bullet">
                            {' '}Lender since 2022{' '}
                          </div>
                          <div className="detail-list text-underline">
                            {' '}View wardrobe{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <button
                    className="w-100 component button tertiary "
                    data-target="#messaging-a-managed"
                    data-toggle="modal"
                    name="button"
                    target="_top"
                    type="submit"
                  >
                    <div className="title ">
                      {' '}Message Lender{' '}
                    </div>
                  </button>
                  <div
                    className="component modal messaging-a-managed fade"
                    data-controller="modal-component"
                    data-modal-component-state-value="hide"
                    id="messaging-a-managed"
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
                        <div>
                          <h3 className="text-center">
                            Messaging a{' '}
                            <br />
                            {' '}Managed Account
                          </h3>
                          <p className="text-center">
                            {' '}This account is managed by the{' '}
                            <span className="circular-couture-font-logo">
                              CIRCULAR COUTURE
                            </span>
                            														team.														
                            <br />
                          </p>
                          <p className="text-center mb-4">
                            {' '}If you’d like to speak to someone,														please visit														
                            <br />
                            {' '}our{' '}
                            <Link
                              className="text-circular-couture-light-red"
                              to="https://help.circular-couturecollective.com/hc/en-us/requests/new"
                              target="_blank"
                            >
                              <u>
                                Help Centre
                              </u>
                            </Link>
                            {' '}or use the help														widget found														
                            <br />
                            {' '}in the bottom right corner of your screen.													
                          </p>
                          <div className="text-center">
                            <Link
                              className="component button primary "
                              to="https://help.circular-couturecollective.com/hc/en-us/requests/new"
                              target="_top"
                            >
                              <div className="title ">
                                {' '}Speak to someone{' '}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </turbo-frame>
    </div>
  
  <Reviews />
    <div
      className="back-to-top-component"
      data-controller="back-to-top-component"
    >
      <div
        className=""
        data-action="click->back-to-top-component#backToTop"
      >
        {' '}
        <img
          alt="An icon of a chevron up"
          className="icon"
          src="https://res.cloudinary.com/dcaptnlz3/image/asset/chevron-up-4f073549496f869462ac41bbae25ba5f.svg"
        />
      </div>
      <p className="title">
        Back to Top
      </p>
    </div>
  </div>
  <div
    className="component modal size-guide fade"
    data-controller="modal-component"
    data-modal-component-state-value="hide"
    id="size-guide"
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
        <div className="row no-gutters">
          <div className="col-12">
            <div className="modal-title-wrapper">
              <h3 id="sizing-guide-category-name-modal">
                								Ready-to-wear size guide							
              </h3>
            </div>
          </div>
          <div className="col-12">
            <div
              className="sizing-table-wrapper"
              id="sizing-guide-modal"
            >
              <table className="table sizing-table sticky-left mb-0">
                <tbody>
                  <tr className="trow">
                    <th scope="row">
                      UK
                    </th>
                  </tr>
                  <tr className="trow">
                    <th scope="row">
                      US
                    </th>
                  </tr>
                  <tr className="trow">
                    <th scope="row">
                      IT
                    </th>
                  </tr>
                  <tr className="trow">
                    <th scope="row">
                      FR
                    </th>
                  </tr>
                  <tr className="trow">
                    <th scope="row">
                      DN
                    </th>
                  </tr>
                  <tr className="trow">
                    <th scope="row">
                      RU
                    </th>
                  </tr>
                  <tr className="trow">
                    <th scope="row">
                      GER
                    </th>
                  </tr>
                  <tr className="trow">
                    <th scope="row">
                      AUS
                    </th>
                  </tr>
                  <tr className="trow">
                    <th scope="row" />
                  </tr>
                </tbody>
              </table>
              <table className="table sizing-table text-center mb-0">
                <tbody>
                  <tr className="trow">
                    <td>
                      4
                    </td>
                    <td>
                      6
                    </td>
                    <td>
                      8
                    </td>
                    <td>
                      10
                    </td>
                    <td>
                      12
                    </td>
                    <td>
                      14
                    </td>
                    <td>
                      16
                    </td>
                    <td>
                      18
                    </td>
                    <td>
                      20
                    </td>
                    <td>
                      22
                    </td>
                    <td>
                      24
                    </td>
                    <td>
                      26
                    </td>
                    <td>
                      28
                    </td>
                    <td>
                      30
                    </td>
                    <td>
                      32
                    </td>
                  </tr>
                  <tr className="trow">
                    <td>
                      00
                    </td>
                    <td>
                      0
                    </td>
                    <td>
                      2-4
                    </td>
                    <td>
                      4-6
                    </td>
                    <td>
                      8
                    </td>
                    <td>
                      10
                    </td>
                    <td>
                      12
                    </td>
                    <td>
                      14
                    </td>
                    <td>
                      16
                    </td>
                    <td>
                      18
                    </td>
                    <td>
                      20
                    </td>
                    <td>
                      22
                    </td>
                    <td>
                      24
                    </td>
                    <td>
                      26
                    </td>
                    <td>
                      28
                    </td>
                  </tr>
                  <tr className="trow">
                    <td>
                      36
                    </td>
                    <td>
                      38
                    </td>
                    <td>
                      40
                    </td>
                    <td>
                      42
                    </td>
                    <td>
                      44
                    </td>
                    <td>
                      46
                    </td>
                    <td>
                      48
                    </td>
                    <td>
                      50
                    </td>
                    <td>
                      52
                    </td>
                    <td>
                      54
                    </td>
                    <td>
                      56
                    </td>
                    <td>
                      58
                    </td>
                    <td>
                      60
                    </td>
                    <td>
                      62
                    </td>
                    <td>
                      64
                    </td>
                  </tr>
                  <tr className="trow">
                    <td>
                      32
                    </td>
                    <td>
                      34
                    </td>
                    <td>
                      36
                    </td>
                    <td>
                      38
                    </td>
                    <td>
                      40
                    </td>
                    <td>
                      42
                    </td>
                    <td>
                      44
                    </td>
                    <td>
                      46
                    </td>
                    <td>
                      48
                    </td>
                    <td>
                      50
                    </td>
                    <td>
                      52
                    </td>
                    <td>
                      54
                    </td>
                    <td>
                      56
                    </td>
                    <td>
                      58
                    </td>
                    <td>
                      60
                    </td>
                  </tr>
                  <tr className="trow">
                    <td>
                      30
                    </td>
                    <td>
                      32
                    </td>
                    <td>
                      34
                    </td>
                    <td>
                      36
                    </td>
                    <td>
                      38
                    </td>
                    <td>
                      40
                    </td>
                    <td>
                      42
                    </td>
                    <td>
                      44
                    </td>
                    <td>
                      46
                    </td>
                    <td>
                      48
                    </td>
                    <td>
                      50
                    </td>
                    <td>
                      52
                    </td>
                    <td>
                      54
                    </td>
                    <td>
                      56
                    </td>
                    <td>
                      58
                    </td>
                  </tr>
                  <tr className="trow">
                    <td>
                      38
                    </td>
                    <td>
                      40
                    </td>
                    <td>
                      42
                    </td>
                    <td>
                      44
                    </td>
                    <td>
                      46
                    </td>
                    <td>
                      48
                    </td>
                    <td>
                      50
                    </td>
                    <td>
                      52
                    </td>
                    <td>
                      54
                    </td>
                    <td>
                      56
                    </td>
                    <td>
                      58
                    </td>
                    <td>
                      60
                    </td>
                    <td>
                      62
                    </td>
                    <td>
                      64
                    </td>
                    <td>
                      66
                    </td>
                  </tr>
                  <tr className="trow">
                    <td>
                      30
                    </td>
                    <td>
                      32
                    </td>
                    <td>
                      34
                    </td>
                    <td>
                      36
                    </td>
                    <td>
                      38
                    </td>
                    <td>
                      40
                    </td>
                    <td>
                      42
                    </td>
                    <td>
                      44
                    </td>
                    <td>
                      46
                    </td>
                    <td>
                      48
                    </td>
                    <td>
                      50
                    </td>
                    <td>
                      52
                    </td>
                    <td>
                      54
                    </td>
                    <td>
                      56
                    </td>
                    <td>
                      58
                    </td>
                  </tr>
                  <tr className="trow">
                    <td>
                      4
                    </td>
                    <td>
                      6
                    </td>
                    <td>
                      8
                    </td>
                    <td>
                      10
                    </td>
                    <td>
                      12
                    </td>
                    <td>
                      14
                    </td>
                    <td>
                      16
                    </td>
                    <td>
                      18
                    </td>
                    <td>
                      20
                    </td>
                    <td>
                      22
                    </td>
                    <td>
                      24
                    </td>
                    <td>
                      26
                    </td>
                    <td>
                      28
                    </td>
                    <td>
                      30
                    </td>
                    <td>
                      32
                    </td>
                  </tr>
                  <tr className="trow">
                    <td>
                      XXS
                    </td>
                    <td>
                      XS
                    </td>
                    <td>
                      S
                    </td>
                    <td>
                      M
                    </td>
                    <td>
                      M-L
                    </td>
                    <td>
                      L
                    </td>
                    <td>
                      XL
                    </td>
                    <td>
                      XXL
                    </td>
                    <td>
                      2XL
                    </td>
                    <td>
                      3XL
                    </td>
                    <td>
                      4XL
                    </td>
                    <td>
                      5XL
                    </td>
                    <td>
                      6XL
                    </td>
                    <td>
                      7XL
                    </td>
                    <td>
                      8XL
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 desktop-hide">
            <div className="swipe-info text-center my-4">
              <p className="text text-uppercase">
                Swipe to see more sizes
              </p>
              {' '}
              <img
                alt="swipe"
                className="swipe-image"
                loading="lazy"
                src="https://res.cloudinary.com/dcaptnlz3/image/asset/swipe-0820428dff947f6bc2f3832aed4f79ef.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="component modal size-detail fade"
    data-controller="modal-component"
    data-modal-component-state-value="hide"
    id="size-detail"
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
        <div className="row no-gutters">
          <div className="col-12">
            <div className="modal-title-wrapper">
              <h3 id="sizing-detail-category-name-modal">
                								Size Details							
              </h3>
            </div>
          </div>
          <div className="col-12">
            <div
              className="sizing-detail-table-wrapper"
              id="sizing-detail-modal"
            >
              <p className="size-fit-notes">
                Model is a size 08UK and wears a size 08UK (04US/ 40IT/ 36FR)								Height 5ft 9.5in/177cm, Full bust 34.4in/87.3cm, Waist 27.6in/70.1cm, Hip 37.8in/95.8cm								Fits true to size Fitted across the shoulders through bust and waist Falls loose over								the legs Designed for a mini dress length
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row  mx-0 mt-5 py-4">
      <div className=" col-lg-8 mx-auto d-flex justify-content-center flex-column guest-list-button">
        <h1 className="mt-2">
          <span>
            guest list
          </span>
        </h1>
        <h5 className="mt-3">
          <span>
            Join our guest list for the latest in trending and fashion						updates.
          </span>
        </h5>
        <input
          className="mt-5"
          placeholder=" Email"
          type="text"
        />
        <Link to="/ListItems/ListStepTwo">
          {' '}
          <button className="mt-4 mb-4 btn-signup1">
            sign up
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>
        <EmailSubscription />
        <Footer />
        </>
    )
}
export default ProductDetail;