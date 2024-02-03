import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";

const Wishlist = () =>{

    return (
        <>
        <TopHeader />
        <div>
  <div
    className="main-container -with-cta-banner"
    data-controller="wishlists--page"
  >
    <div className="dashboard-layout -wishlist">
      <DashboardSidebar/>
      <div className="second-section -responsive mobile-px-0px mb-10 pb-0">
        <div className="dashboard-header mobile-px-20px">
          <div className="row mobile-no-gutters">
            <div className="col-sm-5">
              <h1>
                Wishlists
              </h1>
            </div>
          </div>
        </div>
        <div className="row mobile-no-gutters">
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion mobile-px-20px"
              id="accordionCollections"
            >
              <div className="card border-0 bg-circular-couture-transparent">
                <div
                  className="card-header border-0 px-0 bg-circular-couture-transparent"
                  id="headingCollections"
                >
                  <label className="text-uppercase position-relative show">
                    Collections
                  </label>
                  <a
                    className="default-link text-uppercase float-right desktop-only"
                    data-target="#create-collection-modal"
                    data-toggle="modal"
                    href="#"
                  >
                    Create New Collection
                  </a>
                  <a
                    className="float-right mobile-only"
                    data-target="#create-collection-modal"
                    data-toggle="modal"
                    href="#"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      height="29"
                      preserveAspectRatio="xMidYMid meet"
                      style={{
                        WebkitTransform: 'rotate(360deg)',
                        msTransform: 'rotate(360deg)',
                        transform: 'rotate(360deg)'
                      }}
                      viewBox="0 0 1024 1024"
                      width="29"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path
                        d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
                        fill="#592530"
                      />
                      <path
                        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                        fill="#592530"
                      />
                      <rect
                        fill="rgba(0, 0, 0, 0)"
                        height="1024"
                        width="1024"
                        x="0"
                        y="0"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  aria-labelledby="headingCollections"
                  className="collapse position-relative show bg-circular-couture-transparent"
                  data-parent="#accordionCollections"
                  id="collapseCollections"
                >
                  <div className="card-body p-0 bg-circular-couture-transparent">
                    <div
                      className="collection d-flex align-items-justified"
                      id="wishlist-collections-placeholder"
                    >
                      <div
                        className="collection-circle -grey-01 -cursor-pointer d-flex align-items-center text-center mx-auto"
                        data-target="#create-collection-modal"
                        data-toggle="modal"
                      >
                        <span className="text-uppercase mx-auto">
                          <i
                            aria-hidden="true"
                            className="fa fa-plus fa-2x text-circular-couture-dark-red "
                          />
                        </span>
                      </div>
                      <div className="collection-circle -grey-02 d-flex align-items-center text-center mx-auto">
                        <span className="text-uppercase mx-auto" />
                      </div>
                      <div className="collection-circle -grey-03 d-flex align-items-center text-center mx-auto desktop-only">
                        <span className="text-uppercase mx-auto" />
                      </div>
                      <div className="collection-circle -grey-04 d-flex align-items-center text-center mx-auto desktop-only">
                        <span className="text-uppercase mx-auto" />
                      </div>
                      <div className="collection-circle -grey-05 d-flex align-items-center text-center mx-auto desktop-only">
                        <span className="text-uppercase mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion pt-53px"
              id="accordionItems"
            >
              <div className="card border-0 bg-circular-couture-transparent">
                <div
                  className="card-header border-0 px-0 pb-0 mobile-px-20px"
                  id="headingItems"
                >
                  <label className="text-uppercase position-relative show">
                    Items
                  </label>
                </div>
                <div
                  aria-labelledby="headingItems"
                  className="collapse position-relative show bg-circular-couture-transparent"
                  data-parent="#accordionItems"
                  id="collapseItems"
                >
                  <div className="card-body mb-5 mobile-mb-0px">
                    <div className="container px-0">
                      <turbo-frame
                        class="row no-gutters mx-0"
                        id="wishlist_result_frame"
                      >
                        <div
                          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
                          id="listing-85565"
                        >
                          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                            <a
                              className="item-link"
                              data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                              data-controller="google-tag-manager--enhanced-ecommerce"
                              data-google-tag-manager--enhanced-ecommerce-item-brand="Alessandra Rich"
                              data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;tops&quot;]"
                              data-google-tag-manager--enhanced-ecommerce-item-colour="red"
                              data-google-tag-manager--enhanced-ecommerce-item-name="Checked bouclé tweed blazer"
                              data-google-tag-manager--enhanced-ecommerce-item-price="179"
                              data-google-tag-manager--enhanced-ecommerce-item-uid="6184572"
                              data-listing-id="85565"
                              href="/listings.html/checked-boucle-tweed-blazer"
                              target="_blank"
                            >
                              <div className="text-center">
                                <img
                                  alt="Image of Alessandra Rich checked bouclé tweed blazer"
                                  className="item-image"
                                  sizes="100vw"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1274,w_849,x_69,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/uza8ujowk5m5e04irczrro7mcn9e"
                                />
                                <div className="position-relative text-uppercase">
                                  <span className="listing-tag -collections">
                                    Managed
                                  </span>
                                </div>
                                <div className="item-name">
                                  ALESSANDRA RICH
                                </div>
                                <p className="item-size mb-0">
                                  UK 6, UK 8
                                </p>
                                <div className="separator mx-auto" />
                                <div className="item-price">
                                  {' '}RENT FROM £179{' '}
                                </div>
                                <p className="item-rrp text-uppercase mb-0">
                                  Retail £1,880
                                </p>
                              </div>
                            </a>
                            <div
                              className="love-heart-button listing-main-heart wishlist-heart wishlist-heart-85565"
                              data-controller="wishlisting"
                              data-target="wishlisting.heartMainContainer"
                            >
                              <div className="item-heart item-hearted">
                                <a
                                  className="active"
                                  data-action="wishlisting#removeWishlistedItem"
                                  data-method="delete"
                                  data-remote="true"
                                  data-target="wishlisting.unwishlistLink"
                                  href="/wishlist.html/unfavourite?listing_id=85565"
                                  rel="nofollow"
                                >
                                  <img
                                    className="filled-wishlist-icon"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                  />
                                </a>
                              </div>
                              <a
                                className="add-to-collection-icon-container"
                                data-action="wishlisting#showAddToCollectionModal"
                                data-target-modal="#add-to-collection-modal-1920014"
                                href="#"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="mt-10px"
                                  data-container="body"
                                  data-content="ADD TO COLLECTION"
                                  data-placement="right"
                                  data-toggle="popover"
                                  data-trigger="hover"
                                  focusable="false"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    WebkitTransform: 'rotate(360deg)',
                                    msTransform: 'rotate(360deg)',
                                    transform: 'rotate(360deg)'
                                  }}
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <path
                                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                                    fill="#592530"
                                  />
                                  <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                    fill="#592530"
                                  />
                                  <rect
                                    fill="rgba(0, 0, 0, 0)"
                                    height="24"
                                    width="24"
                                    x="0"
                                    y="0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="add-to-collection-modal-1920014"
                            role="dialog"
                            tabIndex="-1"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <span
                                className="tap-to-close d-none"
                                data-dismiss="modal"
                              >
                                Tap to close
                              </span>
                              <div className="modal-content rounded-0">
                                <div className="modal-header border-bottom-0 pb-0">
                                  <button
                                    aria-label="Close"
                                    className="close mobile-hide"
                                    data-dismiss="modal"
                                    type="button"
                                  >
                                    <span aria-hidden="true">
                                      X
                                    </span>
                                  </button>
                                </div>
                                <div className="modal-body pb-5">
                                  <div className="row">
                                    <div className="col-12 col-md-9 mx-auto">
                                      <div className="row">
                                        <div className="col-12">
                                          <h5 className="modal-title text-center mb-3 text-capitalize">
                                            {' '}Add To Collection{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          data-controller="wishlists--add-to-collection"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/change_wishlist_boards/1920014"
                                            className="default-form"
                                            data-action="ajax:success->wishlists--add-to-collection#processUpdateResponse"
                                            data-remote="true"
                                            data-target="wishlists--add-to-collection.form"
                                            data-turbo="false"
                                            method="post"
                                          >
                                            <input
                                              autoComplete="off"
                                              defaultValue="patch"
                                              name="_method"
                                              type="hidden"
                                            />
                                            <input
                                              autoComplete="off"
                                              defaultValue="sPFDJssFULXQMW6wv4MPdRq7izy3hTJUy0V0TSOwCi9YJFWpA4zDhUdCADrc0XyKw7BsefpBKD0DkMV7kEsCdQ=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            <div className="form-group">
                                              <label>
                                                SELECT COLLECTION*
                                              </label>
                                              <div
                                                className="mobile-native-dropdown-container"
                                                id="category-mobile-native-dropdown-container"
                                              >
                                                <select
                                                  className="form-control category-dropdown mobile-native-dropdown mb-3"
                                                  id="wishlist_wishlist_board_id"
                                                  name="wishlist[wishlist_board_id]"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <input
                                                className="btn btn-primary -dark-red btn-block mb-4"
                                                data-disable-with="SAVING..."
                                                name="commit"
                                                type="submit"
                                                value="ADD TO COLLECTION"
                                              />
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
                          id="listing-86274"
                        >
                          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                            <a
                              className="item-link"
                              data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                              data-controller="google-tag-manager--enhanced-ecommerce"
                              data-google-tag-manager--enhanced-ecommerce-item-brand="Moñot"
                              data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;dresses&quot;]"
                              data-google-tag-manager--enhanced-ecommerce-item-colour="red"
                              data-google-tag-manager--enhanced-ecommerce-item-name="Monot cut out gown"
                              data-google-tag-manager--enhanced-ecommerce-item-price="399"
                              data-google-tag-manager--enhanced-ecommerce-item-uid="5246069"
                              data-listing-id="86274"
                              href="/listings.html/monot-cut-out-gown"
                              target="_blank"
                            >
                              <div className="text-center">
                                <img
                                  alt="Image of Moñot monot cut out gown"
                                  className="item-image"
                                  sizes="100vw"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_756,w_504,x_32,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/98tfzp9m5tx7cemklikwqlwgizll"
                                />
                                <div className="position-relative text-uppercase" />
                                <div className="item-name">
                                  MOÑOT
                                </div>
                                <p className="item-size mb-0">
                                  UK 8
                                </p>
                                <div className="separator mx-auto" />
                                <div className="item-price">
                                  {' '}RENT FROM £399{' '}
                                </div>
                                <p className="item-rrp text-uppercase mb-0">
                                  Retail £7,500
                                </p>
                              </div>
                            </a>
                            <div
                              className="love-heart-button listing-main-heart wishlist-heart wishlist-heart-86274"
                              data-controller="wishlisting"
                              data-target="wishlisting.heartMainContainer"
                            >
                              <div className="item-heart item-hearted">
                                <a
                                  className="active"
                                  data-action="wishlisting#removeWishlistedItem"
                                  data-method="delete"
                                  data-remote="true"
                                  data-target="wishlisting.unwishlistLink"
                                  href="/wishlist.html/unfavourite?listing_id=86274"
                                  rel="nofollow"
                                >
                                  <img
                                    className="filled-wishlist-icon"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                  />
                                </a>
                              </div>
                              <a
                                className="add-to-collection-icon-container"
                                data-action="wishlisting#showAddToCollectionModal"
                                data-target-modal="#add-to-collection-modal-1920013"
                                href="#"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="mt-10px"
                                  data-container="body"
                                  data-content="ADD TO COLLECTION"
                                  data-placement="right"
                                  data-toggle="popover"
                                  data-trigger="hover"
                                  focusable="false"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    WebkitTransform: 'rotate(360deg)',
                                    msTransform: 'rotate(360deg)',
                                    transform: 'rotate(360deg)'
                                  }}
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <path
                                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                                    fill="#592530"
                                  />
                                  <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                    fill="#592530"
                                  />
                                  <rect
                                    fill="rgba(0, 0, 0, 0)"
                                    height="24"
                                    width="24"
                                    x="0"
                                    y="0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="add-to-collection-modal-1920013"
                            role="dialog"
                            tabIndex="-1"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <span
                                className="tap-to-close d-none"
                                data-dismiss="modal"
                              >
                                Tap to close
                              </span>
                              <div className="modal-content rounded-0">
                                <div className="modal-header border-bottom-0 pb-0">
                                  <button
                                    aria-label="Close"
                                    className="close mobile-hide"
                                    data-dismiss="modal"
                                    type="button"
                                  >
                                    <span aria-hidden="true">
                                      X
                                    </span>
                                  </button>
                                </div>
                                <div className="modal-body pb-5">
                                  <div className="row">
                                    <div className="col-12 col-md-9 mx-auto">
                                      <div className="row">
                                        <div className="col-12">
                                          <h5 className="modal-title text-center mb-3 text-capitalize">
                                            {' '}Add To Collection{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          data-controller="wishlists--add-to-collection"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/change_wishlist_boards/1920013"
                                            className="default-form"
                                            data-action="ajax:success->wishlists--add-to-collection#processUpdateResponse"
                                            data-remote="true"
                                            data-target="wishlists--add-to-collection.form"
                                            data-turbo="false"
                                            method="post"
                                          >
                                            <input
                                              autoComplete="off"
                                              defaultValue="patch"
                                              name="_method"
                                              type="hidden"
                                            />
                                            <input
                                              autoComplete="off"
                                              defaultValue="AYvBB7qaN2ToHDi1IJKQFQC+RDNAUjlPQ1qD1n9XGVCQ8xoLJeCZXCiXLAWIhk7ZVM6/NsBleuXthjaY1HOPsA=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            <div className="form-group">
                                              <label>
                                                SELECT COLLECTION*
                                              </label>
                                              <div
                                                className="mobile-native-dropdown-container"
                                                id="category-mobile-native-dropdown-container"
                                              >
                                                <select
                                                  className="form-control category-dropdown mobile-native-dropdown mb-3"
                                                  id="wishlist_wishlist_board_id"
                                                  name="wishlist[wishlist_board_id]"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <input
                                                className="btn btn-primary -dark-red btn-block mb-4"
                                                data-disable-with="SAVING..."
                                                name="commit"
                                                type="submit"
                                                value="ADD TO COLLECTION"
                                              />
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
                          id="listing-86645"
                        >
                          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                            <a
                              className="item-link"
                              data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                              data-controller="google-tag-manager--enhanced-ecommerce"
                              data-google-tag-manager--enhanced-ecommerce-item-brand="16ARLINGTON"
                              data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;tops&quot;]"
                              data-google-tag-manager--enhanced-ecommerce-item-colour="grey"
                              data-google-tag-manager--enhanced-ecommerce-item-name="Solace off-shoulder top "
                              data-google-tag-manager--enhanced-ecommerce-item-price="29"
                              data-google-tag-manager--enhanced-ecommerce-item-uid="9193633"
                              data-listing-id="86645"
                              href="/listings.html/solace-off-shoulder-top"
                              target="_blank"
                            >
                              <div className="text-center">
                                <img
                                  alt="Image of 16 Arlington solace off-shoulder top"
                                  className="item-image"
                                  sizes="100vw"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_934,w_622,x_260,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/qj1f4xwszxsxta56tlzoix9aw6gm"
                                />
                                <div className="position-relative text-uppercase" />
                                <div className="item-name">
                                  16ARLINGTON
                                </div>
                                <p className="item-size mb-0">
                                  UK 10
                                </p>
                                <div className="separator mx-auto" />
                                <div className="item-price">
                                  {' '}RENT FROM £29{' '}
                                </div>
                                <p className="item-rrp text-uppercase mb-0">
                                  Retail £435
                                </p>
                              </div>
                            </a>
                            <div
                              className="love-heart-button listing-main-heart wishlist-heart wishlist-heart-86645"
                              data-controller="wishlisting"
                              data-target="wishlisting.heartMainContainer"
                            >
                              <div className="item-heart item-hearted">
                                <a
                                  className="active"
                                  data-action="wishlisting#removeWishlistedItem"
                                  data-method="delete"
                                  data-remote="true"
                                  data-target="wishlisting.unwishlistLink"
                                  href="/wishlist.html/unfavourite?listing_id=86645"
                                  rel="nofollow"
                                >
                                  <img
                                    className="filled-wishlist-icon"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                  />
                                </a>
                              </div>
                              <a
                                className="add-to-collection-icon-container"
                                data-action="wishlisting#showAddToCollectionModal"
                                data-target-modal="#add-to-collection-modal-1920012"
                                href="#"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="mt-10px"
                                  data-container="body"
                                  data-content="ADD TO COLLECTION"
                                  data-placement="right"
                                  data-toggle="popover"
                                  data-trigger="hover"
                                  focusable="false"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    WebkitTransform: 'rotate(360deg)',
                                    msTransform: 'rotate(360deg)',
                                    transform: 'rotate(360deg)'
                                  }}
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <path
                                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                                    fill="#592530"
                                  />
                                  <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                    fill="#592530"
                                  />
                                  <rect
                                    fill="rgba(0, 0, 0, 0)"
                                    height="24"
                                    width="24"
                                    x="0"
                                    y="0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="add-to-collection-modal-1920012"
                            role="dialog"
                            tabIndex="-1"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <span
                                className="tap-to-close d-none"
                                data-dismiss="modal"
                              >
                                Tap to close
                              </span>
                              <div className="modal-content rounded-0">
                                <div className="modal-header border-bottom-0 pb-0">
                                  <button
                                    aria-label="Close"
                                    className="close mobile-hide"
                                    data-dismiss="modal"
                                    type="button"
                                  >
                                    <span aria-hidden="true">
                                      X
                                    </span>
                                  </button>
                                </div>
                                <div className="modal-body pb-5">
                                  <div className="row">
                                    <div className="col-12 col-md-9 mx-auto">
                                      <div className="row">
                                        <div className="col-12">
                                          <h5 className="modal-title text-center mb-3 text-capitalize">
                                            {' '}Add To Collection{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          data-controller="wishlists--add-to-collection"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/change_wishlist_boards/1920012"
                                            className="default-form"
                                            data-action="ajax:success->wishlists--add-to-collection#processUpdateResponse"
                                            data-remote="true"
                                            data-target="wishlists--add-to-collection.form"
                                            data-turbo="false"
                                            method="post"
                                          >
                                            <input
                                              autoComplete="off"
                                              defaultValue="patch"
                                              name="_method"
                                              type="hidden"
                                            />
                                            <input
                                              autoComplete="off"
                                              defaultValue="VxR2FtkKxU0c4AoulcW48MC0xEN46XQDk048HSy2Vc8ODNilwY5NFxo4PtyauBTRtSEwMHK/lEAtse6bUjvSJA=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            <div className="form-group">
                                              <label>
                                                SELECT COLLECTION*
                                              </label>
                                              <div
                                                className="mobile-native-dropdown-container"
                                                id="category-mobile-native-dropdown-container"
                                              >
                                                <select
                                                  className="form-control category-dropdown mobile-native-dropdown mb-3"
                                                  id="wishlist_wishlist_board_id"
                                                  name="wishlist[wishlist_board_id]"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <input
                                                className="btn btn-primary -dark-red btn-block mb-4"
                                                data-disable-with="SAVING..."
                                                name="commit"
                                                type="submit"
                                                value="ADD TO COLLECTION"
                                              />
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
                          id="listing-88314"
                        >
                          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                            <a
                              className="item-link"
                              data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                              data-controller="google-tag-manager--enhanced-ecommerce"
                              data-google-tag-manager--enhanced-ecommerce-item-brand="Charlotte Simone"
                              data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;outerwear&quot;]"
                              data-google-tag-manager--enhanced-ecommerce-item-colour="green"
                              data-google-tag-manager--enhanced-ecommerce-item-name="Harlow"
                              data-google-tag-manager--enhanced-ecommerce-item-price="66"
                              data-google-tag-manager--enhanced-ecommerce-item-uid="5938507"
                              data-listing-id="88314"
                              href="/listings.html/harlow-50895"
                              target="_blank"
                            >
                              <div className="text-center">
                                <img
                                  alt="Image of Charlotte Simone harlow"
                                  className="item-image"
                                  sizes="100vw"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1427,w_951,x_157,y_236/c_fill,f_webp,h_634,q_auto:best,w_424/27hi4cfbbklsf8z765rx6z844zh0"
                                />
                                <div className="position-relative text-uppercase">
                                  <span className="listing-tag -collections">
                                    Managed
                                  </span>
                                </div>
                                <div className="item-name">
                                  CHARLOTTE SIMONE
                                </div>
                                <p className="item-size mb-0">
                                  UK 8, UK 10, UK 12
                                </p>
                                <div className="separator mx-auto" />
                                <div className="item-price">
                                  {' '}RENT FROM £66{' '}
                                </div>
                                <p className="item-rrp text-uppercase mb-0">
                                  Retail £425
                                </p>
                              </div>
                            </a>
                            <div
                              className="love-heart-button listing-main-heart wishlist-heart wishlist-heart-88314"
                              data-controller="wishlisting"
                              data-target="wishlisting.heartMainContainer"
                            >
                              <div className="item-heart item-hearted">
                                <a
                                  className="active"
                                  data-action="wishlisting#removeWishlistedItem"
                                  data-method="delete"
                                  data-remote="true"
                                  data-target="wishlisting.unwishlistLink"
                                  href="/wishlist.html/unfavourite?listing_id=88314"
                                  rel="nofollow"
                                >
                                  <img
                                    className="filled-wishlist-icon"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                  />
                                </a>
                              </div>
                              <a
                                className="add-to-collection-icon-container"
                                data-action="wishlisting#showAddToCollectionModal"
                                data-target-modal="#add-to-collection-modal-1920011"
                                href="#"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="mt-10px"
                                  data-container="body"
                                  data-content="ADD TO COLLECTION"
                                  data-placement="right"
                                  data-toggle="popover"
                                  data-trigger="hover"
                                  focusable="false"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    WebkitTransform: 'rotate(360deg)',
                                    msTransform: 'rotate(360deg)',
                                    transform: 'rotate(360deg)'
                                  }}
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <path
                                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                                    fill="#592530"
                                  />
                                  <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                    fill="#592530"
                                  />
                                  <rect
                                    fill="rgba(0, 0, 0, 0)"
                                    height="24"
                                    width="24"
                                    x="0"
                                    y="0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="add-to-collection-modal-1920011"
                            role="dialog"
                            tabIndex="-1"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <span
                                className="tap-to-close d-none"
                                data-dismiss="modal"
                              >
                                Tap to close
                              </span>
                              <div className="modal-content rounded-0">
                                <div className="modal-header border-bottom-0 pb-0">
                                  <button
                                    aria-label="Close"
                                    className="close mobile-hide"
                                    data-dismiss="modal"
                                    type="button"
                                  >
                                    <span aria-hidden="true">
                                      X
                                    </span>
                                  </button>
                                </div>
                                <div className="modal-body pb-5">
                                  <div className="row">
                                    <div className="col-12 col-md-9 mx-auto">
                                      <div className="row">
                                        <div className="col-12">
                                          <h5 className="modal-title text-center mb-3 text-capitalize">
                                            {' '}Add To Collection{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          data-controller="wishlists--add-to-collection"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/change_wishlist_boards/1920011"
                                            className="default-form"
                                            data-action="ajax:success->wishlists--add-to-collection#processUpdateResponse"
                                            data-remote="true"
                                            data-target="wishlists--add-to-collection.form"
                                            data-turbo="false"
                                            method="post"
                                          >
                                            <input
                                              autoComplete="off"
                                              defaultValue="patch"
                                              name="_method"
                                              type="hidden"
                                            />
                                            <input
                                              autoComplete="off"
                                              defaultValue="T7hJoKAwO7j266lkDfYrmNpQ9bxVhKJyzteIdAG7maJBfi8cccYvJs6kIz444ig/sVnYZLQf4KU1xQdaODNpLA=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            <div className="form-group">
                                              <label>
                                                SELECT COLLECTION*
                                              </label>
                                              <div
                                                className="mobile-native-dropdown-container"
                                                id="category-mobile-native-dropdown-container"
                                              >
                                                <select
                                                  className="form-control category-dropdown mobile-native-dropdown mb-3"
                                                  id="wishlist_wishlist_board_id"
                                                  name="wishlist[wishlist_board_id]"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <input
                                                className="btn btn-primary -dark-red btn-block mb-4"
                                                data-disable-with="SAVING..."
                                                name="commit"
                                                type="submit"
                                                value="ADD TO COLLECTION"
                                              />
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
                          id="listing-84238"
                        >
                          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                            <a
                              className="item-link"
                              data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                              data-controller="google-tag-manager--enhanced-ecommerce"
                              data-google-tag-manager--enhanced-ecommerce-item-brand="Perfect Moment"
                              data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;tops&quot;]"
                              data-google-tag-manager--enhanced-ecommerce-item-colour="blue"
                              data-google-tag-manager--enhanced-ecommerce-item-name="Schild intarsia merino wool tu"
                              data-google-tag-manager--enhanced-ecommerce-item-price="36"
                              data-google-tag-manager--enhanced-ecommerce-item-uid="7777191"
                              data-listing-id="84238"
                              href="/listings.html/schild-intarsia-merino-wool-tu"
                              target="_blank"
                            >
                              <div className="text-center">
                                <img
                                  alt="Image of Perfect Moment schild intarsia merino wool tu"
                                  className="item-image"
                                  sizes="100vw"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_838,w_559,x_0,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/zzvr3p1e98mcroie3ftxz0fmknjl"
                                />
                                <div className="position-relative text-uppercase">
                                  <span className="listing-tag -collections">
                                    Managed
                                  </span>
                                </div>
                                <div className="item-name">
                                  PERFECT MOMENT
                                </div>
                                <p className="item-size mb-0">
                                  UK 8, UK 10, UK 12
                                </p>
                                <div className="separator mx-auto" />
                                <div className="item-price">
                                  {' '}RENT FROM £36{' '}
                                </div>
                                <p className="item-rrp text-uppercase mb-0">
                                  Retail £260
                                </p>
                              </div>
                            </a>
                            <div
                              className="love-heart-button listing-main-heart wishlist-heart wishlist-heart-84238"
                              data-controller="wishlisting"
                              data-target="wishlisting.heartMainContainer"
                            >
                              <div className="item-heart item-hearted">
                                <a
                                  className="active"
                                  data-action="wishlisting#removeWishlistedItem"
                                  data-method="delete"
                                  data-remote="true"
                                  data-target="wishlisting.unwishlistLink"
                                  href="/wishlist.html/unfavourite?listing_id=84238"
                                  rel="nofollow"
                                >
                                  <img
                                    className="filled-wishlist-icon"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                  />
                                </a>
                              </div>
                              <a
                                className="add-to-collection-icon-container"
                                data-action="wishlisting#showAddToCollectionModal"
                                data-target-modal="#add-to-collection-modal-1920010"
                                href="#"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="mt-10px"
                                  data-container="body"
                                  data-content="ADD TO COLLECTION"
                                  data-placement="right"
                                  data-toggle="popover"
                                  data-trigger="hover"
                                  focusable="false"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    WebkitTransform: 'rotate(360deg)',
                                    msTransform: 'rotate(360deg)',
                                    transform: 'rotate(360deg)'
                                  }}
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <path
                                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                                    fill="#592530"
                                  />
                                  <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                    fill="#592530"
                                  />
                                  <rect
                                    fill="rgba(0, 0, 0, 0)"
                                    height="24"
                                    width="24"
                                    x="0"
                                    y="0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="add-to-collection-modal-1920010"
                            role="dialog"
                            tabIndex="-1"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <span
                                className="tap-to-close d-none"
                                data-dismiss="modal"
                              >
                                Tap to close
                              </span>
                              <div className="modal-content rounded-0">
                                <div className="modal-header border-bottom-0 pb-0">
                                  <button
                                    aria-label="Close"
                                    className="close mobile-hide"
                                    data-dismiss="modal"
                                    type="button"
                                  >
                                    <span aria-hidden="true">
                                      X
                                    </span>
                                  </button>
                                </div>
                                <div className="modal-body pb-5">
                                  <div className="row">
                                    <div className="col-12 col-md-9 mx-auto">
                                      <div className="row">
                                        <div className="col-12">
                                          <h5 className="modal-title text-center mb-3 text-capitalize">
                                            {' '}Add To Collection{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          data-controller="wishlists--add-to-collection"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/change_wishlist_boards/1920010"
                                            className="default-form"
                                            data-action="ajax:success->wishlists--add-to-collection#processUpdateResponse"
                                            data-remote="true"
                                            data-target="wishlists--add-to-collection.form"
                                            data-turbo="false"
                                            method="post"
                                          >
                                            <input
                                              autoComplete="off"
                                              defaultValue="patch"
                                              name="_method"
                                              type="hidden"
                                            />
                                            <input
                                              autoComplete="off"
                                              defaultValue="OvBmRLBfTjTbk1tWZb0Y+KfBnSzR0gx6/eoCy3OqtW7eV/LXPBXIkepmuT4q0+vSfC0e6sggFSzIsyftq3wJ5w=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            <div className="form-group">
                                              <label>
                                                SELECT COLLECTION*
                                              </label>
                                              <div
                                                className="mobile-native-dropdown-container"
                                                id="category-mobile-native-dropdown-container"
                                              >
                                                <select
                                                  className="form-control category-dropdown mobile-native-dropdown mb-3"
                                                  id="wishlist_wishlist_board_id"
                                                  name="wishlist[wishlist_board_id]"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <input
                                                className="btn btn-primary -dark-red btn-block mb-4"
                                                data-disable-with="SAVING..."
                                                name="commit"
                                                type="submit"
                                                value="ADD TO COLLECTION"
                                              />
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
                          id="listing-84714"
                        >
                          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                            <a
                              className="item-link"
                              data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                              data-controller="google-tag-manager--enhanced-ecommerce"
                              data-google-tag-manager--enhanced-ecommerce-item-brand="Paco Rabanne"
                              data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;dresses&quot;]"
                              data-google-tag-manager--enhanced-ecommerce-item-colour="silver"
                              data-google-tag-manager--enhanced-ecommerce-item-name="Sequinned flared skirt dress "
                              data-google-tag-manager--enhanced-ecommerce-item-price="59"
                              data-google-tag-manager--enhanced-ecommerce-item-uid="2943832"
                              data-listing-id="84714"
                              href="/listings.html/sequinned-flared-skirt-dress"
                              target="_blank"
                            >
                              <div className="text-center">
                                <img
                                  alt="Image of Paco Rabanne sequinned flared skirt dress"
                                  className="item-image"
                                  sizes="100vw"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1571,w_1047,x_61,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/49p1t3375bg2tc037g4g7lo7qngm"
                                />
                                <div className="position-relative text-uppercase" />
                                <div className="item-name">
                                  PACO RABANNE
                                </div>
                                <p className="item-size mb-0">
                                  UK 6
                                </p>
                                <div className="separator mx-auto" />
                                <div className="item-price">
                                  {' '}RENT FROM £59{' '}
                                </div>
                                <p className="item-rrp text-uppercase mb-0">
                                  Retail £300
                                </p>
                              </div>
                            </a>
                            <div
                              className="love-heart-button listing-main-heart wishlist-heart wishlist-heart-84714"
                              data-controller="wishlisting"
                              data-target="wishlisting.heartMainContainer"
                            >
                              <div className="item-heart item-hearted">
                                <a
                                  className="active"
                                  data-action="wishlisting#removeWishlistedItem"
                                  data-method="delete"
                                  data-remote="true"
                                  data-target="wishlisting.unwishlistLink"
                                  href="/wishlist.html/unfavourite?listing_id=84714"
                                  rel="nofollow"
                                >
                                  <img
                                    className="filled-wishlist-icon"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                  />
                                </a>
                              </div>
                              <a
                                className="add-to-collection-icon-container"
                                data-action="wishlisting#showAddToCollectionModal"
                                data-target-modal="#add-to-collection-modal-1920009"
                                href="#"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="mt-10px"
                                  data-container="body"
                                  data-content="ADD TO COLLECTION"
                                  data-placement="right"
                                  data-toggle="popover"
                                  data-trigger="hover"
                                  focusable="false"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    WebkitTransform: 'rotate(360deg)',
                                    msTransform: 'rotate(360deg)',
                                    transform: 'rotate(360deg)'
                                  }}
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <path
                                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                                    fill="#592530"
                                  />
                                  <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                    fill="#592530"
                                  />
                                  <rect
                                    fill="rgba(0, 0, 0, 0)"
                                    height="24"
                                    width="24"
                                    x="0"
                                    y="0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="add-to-collection-modal-1920009"
                            role="dialog"
                            tabIndex="-1"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <span
                                className="tap-to-close d-none"
                                data-dismiss="modal"
                              >
                                Tap to close
                              </span>
                              <div className="modal-content rounded-0">
                                <div className="modal-header border-bottom-0 pb-0">
                                  <button
                                    aria-label="Close"
                                    className="close mobile-hide"
                                    data-dismiss="modal"
                                    type="button"
                                  >
                                    <span aria-hidden="true">
                                      X
                                    </span>
                                  </button>
                                </div>
                                <div className="modal-body pb-5">
                                  <div className="row">
                                    <div className="col-12 col-md-9 mx-auto">
                                      <div className="row">
                                        <div className="col-12">
                                          <h5 className="modal-title text-center mb-3 text-capitalize">
                                            {' '}Add To Collection{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          data-controller="wishlists--add-to-collection"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/change_wishlist_boards/1920009"
                                            className="default-form"
                                            data-action="ajax:success->wishlists--add-to-collection#processUpdateResponse"
                                            data-remote="true"
                                            data-target="wishlists--add-to-collection.form"
                                            data-turbo="false"
                                            method="post"
                                          >
                                            <input
                                              autoComplete="off"
                                              defaultValue="patch"
                                              name="_method"
                                              type="hidden"
                                            />
                                            <input
                                              autoComplete="off"
                                              defaultValue="A/sXbwJo0VfPq7pZYHPbTIH+ytM+AMtDkXRMMr2lkHOE0C17s+lvS6EwlLsbRlpjI6wlS2SbrWOoZTpZdnSmQw=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            <div className="form-group">
                                              <label>
                                                SELECT COLLECTION*
                                              </label>
                                              <div
                                                className="mobile-native-dropdown-container"
                                                id="category-mobile-native-dropdown-container"
                                              >
                                                <select
                                                  className="form-control category-dropdown mobile-native-dropdown mb-3"
                                                  id="wishlist_wishlist_board_id"
                                                  name="wishlist[wishlist_board_id]"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <input
                                                className="btn btn-primary -dark-red btn-block mb-4"
                                                data-disable-with="SAVING..."
                                                name="commit"
                                                type="submit"
                                                value="ADD TO COLLECTION"
                                              />
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
                          id="listing-85698"
                        >
                          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                            <a
                              className="item-link"
                              data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                              data-controller="google-tag-manager--enhanced-ecommerce"
                              data-google-tag-manager--enhanced-ecommerce-item-brand="Perfect Moment"
                              data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;outerwear&quot;]"
                              data-google-tag-manager--enhanced-ecommerce-item-colour="black"
                              data-google-tag-manager--enhanced-ecommerce-item-name="Polar Flare II houndstooth-pri"
                              data-google-tag-manager--enhanced-ecommerce-item-price="68"
                              data-google-tag-manager--enhanced-ecommerce-item-uid="8537193"
                              data-listing-id="85698"
                              href="/listings.html/polar-flare-ii-houndstooth-pri"
                              target="_blank"
                            >
                              <div className="text-center">
                                <img
                                  alt="Image of Perfect Moment polar flare ii houndstooth-pri"
                                  className="item-image"
                                  sizes="100vw"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/h52040tra6v1conpudsr15b1rfnt"
                                />
                                <div className="position-relative text-uppercase">
                                  <span className="listing-tag -collections">
                                    Managed
                                  </span>
                                </div>
                                <div className="item-name">
                                  PERFECT MOMENT
                                </div>
                                <p className="item-size mb-0">
                                  Multiple Sizes
                                </p>
                                <div className="separator mx-auto" />
                                <div className="item-price">
                                  {' '}RENT FROM £68{' '}
                                </div>
                                <p className="item-rrp text-uppercase mb-0">
                                  Retail £440
                                </p>
                              </div>
                            </a>
                            <div
                              className="love-heart-button listing-main-heart wishlist-heart wishlist-heart-85698"
                              data-controller="wishlisting"
                              data-target="wishlisting.heartMainContainer"
                            >
                              <div className="item-heart item-hearted">
                                <a
                                  className="active"
                                  data-action="wishlisting#removeWishlistedItem"
                                  data-method="delete"
                                  data-remote="true"
                                  data-target="wishlisting.unwishlistLink"
                                  href="/wishlist.html/unfavourite?listing_id=85698"
                                  rel="nofollow"
                                >
                                  <img
                                    className="filled-wishlist-icon"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                  />
                                </a>
                              </div>
                              <a
                                className="add-to-collection-icon-container"
                                data-action="wishlisting#showAddToCollectionModal"
                                data-target-modal="#add-to-collection-modal-1920008"
                                href="#"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="mt-10px"
                                  data-container="body"
                                  data-content="ADD TO COLLECTION"
                                  data-placement="right"
                                  data-toggle="popover"
                                  data-trigger="hover"
                                  focusable="false"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    WebkitTransform: 'rotate(360deg)',
                                    msTransform: 'rotate(360deg)',
                                    transform: 'rotate(360deg)'
                                  }}
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <path
                                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                                    fill="#592530"
                                  />
                                  <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                    fill="#592530"
                                  />
                                  <rect
                                    fill="rgba(0, 0, 0, 0)"
                                    height="24"
                                    width="24"
                                    x="0"
                                    y="0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="add-to-collection-modal-1920008"
                            role="dialog"
                            tabIndex="-1"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <span
                                className="tap-to-close d-none"
                                data-dismiss="modal"
                              >
                                Tap to close
                              </span>
                              <div className="modal-content rounded-0">
                                <div className="modal-header border-bottom-0 pb-0">
                                  <button
                                    aria-label="Close"
                                    className="close mobile-hide"
                                    data-dismiss="modal"
                                    type="button"
                                  >
                                    <span aria-hidden="true">
                                      X
                                    </span>
                                  </button>
                                </div>
                                <div className="modal-body pb-5">
                                  <div className="row">
                                    <div className="col-12 col-md-9 mx-auto">
                                      <div className="row">
                                        <div className="col-12">
                                          <h5 className="modal-title text-center mb-3 text-capitalize">
                                            {' '}Add To Collection{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          data-controller="wishlists--add-to-collection"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/change_wishlist_boards/1920008"
                                            className="default-form"
                                            data-action="ajax:success->wishlists--add-to-collection#processUpdateResponse"
                                            data-remote="true"
                                            data-target="wishlists--add-to-collection.form"
                                            data-turbo="false"
                                            method="post"
                                          >
                                            <input
                                              autoComplete="off"
                                              defaultValue="patch"
                                              name="_method"
                                              type="hidden"
                                            />
                                            <input
                                              autoComplete="off"
                                              defaultValue="enZy0ZrjeHKOC2/H5R6Azte2eb99XHz32/8wFzH/ZULmrg4ShILUx6/WBVx2PhM8/ckSxUWqDZOBX2d9aI9g2g=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            <div className="form-group">
                                              <label>
                                                SELECT COLLECTION*
                                              </label>
                                              <div
                                                className="mobile-native-dropdown-container"
                                                id="category-mobile-native-dropdown-container"
                                              >
                                                <select
                                                  className="form-control category-dropdown mobile-native-dropdown mb-3"
                                                  id="wishlist_wishlist_board_id"
                                                  name="wishlist[wishlist_board_id]"
                                                />
                                              </div>
                                            </div>
                                            <div className="form-group">
                                              <input
                                                className="btn btn-primary -dark-red btn-block mb-4"
                                                data-disable-with="SAVING..."
                                                name="commit"
                                                type="submit"
                                                value="ADD TO COLLECTION"
                                              />
                                            </div>
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
                          id="listing-53465"
                        >
                          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                            <a
                              className="item-link"
                              data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                              data-controller="google-tag-manager--enhanced-ecommerce"
                              data-google-tag-manager--enhanced-ecommerce-item-brand="Perfect Moment"
                              data-google-tag-manager--enhanced-ecommerce-item-categories="[&quot;jumpsuits&quot;]"
                              data-google-tag-manager--enhanced-ecommerce-item-colour="black"
                              data-google-tag-manager--enhanced-ecommerce-item-name="Ryder softshell ski suit"
                              data-google-tag-manager--enhanced-ecommerce-item-price="112"
                              data-google-tag-manager--enhanced-ecommerce-item-uid="7234319"
                              data-listing-id="53465"
                              href="/listings.html/ryder-softshell-ski-suit"
                              target="_blank"
                            >
                              <div className="text-center">
                                <img
                                  alt="Image of Perfect Moment ryder softshell ski suit"
                                  className="item-image"
                                  sizes="100vw"
                                  src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/19ayaovqhqrdx57v4janqjrkpdrs"
                                />
                                <div className="position-relative text-uppercase">
                                  <span className="listing-tag -collections">
                                    Managed
                                  </span>
                                </div>
                                <div className="item-name">
                                  PERFECT MOMENT
                                </div>
                                <p className="item-size mb-0">
                                  UK 6, UK 8, UK 10
                                </p>
                                <div className="separator mx-auto" />
                                <div className="item-price">
                                  {' '}RENT FROM £112{' '}
                                </div>
                                <p className="item-rrp text-uppercase mb-0">
                                  Retail £905
                                </p>
                              </div>
                            </a>
                            <div
                              className="love-heart-button listing-main-heart wishlist-heart wishlist-heart-53465"
                              data-controller="wishlisting"
                              data-target="wishlisting.heartMainContainer"
                            >
                              <div className="item-heart item-hearted">
                                <a
                                  className="active"
                                  data-action="wishlisting#removeWishlistedItem"
                                  data-method="delete"
                                  data-remote="true"
                                  data-target="wishlisting.unwishlistLink"
                                  href="/wishlist.html/unfavourite?listing_id=53465"
                                  rel="nofollow"
                                >
                                  <img
                                    className="filled-wishlist-icon"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                  />
                                </a>
                              </div>
                              <a
                                className="add-to-collection-icon-container"
                                data-action="wishlisting#showAddToCollectionModal"
                                data-target-modal="#add-to-collection-modal-1920007"
                                href="#"
                              >
                                <svg
                                  aria-hidden="true"
                                  className="mt-10px"
                                  data-container="body"
                                  data-content="ADD TO COLLECTION"
                                  data-placement="right"
                                  data-toggle="popover"
                                  data-trigger="hover"
                                  focusable="false"
                                  height="24"
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    WebkitTransform: 'rotate(360deg)',
                                    msTransform: 'rotate(360deg)',
                                    transform: 'rotate(360deg)'
                                  }}
                                  viewBox="0 0 24 24"
                                  width="24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  <path
                                    d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"
                                    fill="#592530"
                                  />
                                  <path
                                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"
                                    fill="#592530"
                                  />
                                  <rect
                                    fill="rgba(0, 0, 0, 0)"
                                    height="24"
                                    width="24"
                                    x="0"
                                    y="0"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="add-to-collection-modal-1920007"
                            role="dialog"
                            tabIndex="-1"
                          >
                            <div
                              className="modal-dialog modal-dialog-centered"
                              role="document"
                            >
                              <span
                                className="tap-to-close d-none"
                                data-dismiss="modal"
                              >
                                Tap to close
                              </span>
                              <div className="modal-content rounded-0">
                                <div className="modal-header border-bottom-0 pb-0">
                                  <button
                                    aria-label="Close"
                                    className="close mobile-hide"
                                    data-dismiss="modal"
                                    type="button"
                                  >
                                    <span aria-hidden="true">
                                      X
                                    </span>
                                  </button>
                                </div>
                                <div className="modal-body pb-5">
                                  <div className="row">
                                    <div className="col-12 col-md-9 mx-auto">
                                      <div className="row">
                                        <div className="col-12">
                                          <h5 className="modal-title text-center mb-3 text-capitalize">
                                            {' '}Add To Collection{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          data-controller="wishlists--add-to-collection"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/change_wishlist_boards/1920007"
                                            className="default-form"
                                            data-action="ajax:success->wishlists--add-to-collection#processUpdateResponse"
                                            data-remote="true"
                                            data-target="wishlists--add-to-collection.form"
                                            data-turbo="false"
                                            method="post"
                                          >
                                            undefined
                                            <input
                                              autoComplete="off"
                                              defaultValue="patch"
                                              name="_method"
                                              type="hidden"
                                            />
                                            undefined
                                            <input
                                              autoComplete="off"
                                              defaultValue="c6HlNMU14vLAB5e8eIffCTPpS9KNnqU2DOcG9kUbxn/hdLSXAtHOCCGNIMPL8hsne7Q7s+Be7diqrrUwDwNbkA=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            undefined
                                            <div className="form-group">
                                              undefined
                                              <label>
                                                SELECT COLLECTION*
                                              </label>
                                              undefined
                                              <div
                                                className="mobile-native-dropdown-container"
                                                id="category-mobile-native-dropdown-container"
                                              >
                                                undefined
                                                <select
                                                  className="form-control category-dropdown mobile-native-dropdown mb-3"
                                                  id="wishlist_wishlist_board_id"
                                                  name="wishlist[wishlist_board_id]"
                                                />
                                                undefined
                                              </div>
                                              undefined
                                            </div>
                                            undefined
                                            <div className="form-group">
                                              undefined
                                              <input
                                                className="btn btn-primary -dark-red btn-block mb-4"
                                                data-disable-with="SAVING..."
                                                name="commit"
                                                type="submit"
                                                value="ADD TO COLLECTION"
                                              />
                                              undefined
                                            </div>
                                            undefined
                                          </form>
                                          undefined
                                        </div>
                                        undefined
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </turbo-frame>
                      <turbo-frame
                        complete=""
                        id="wishlist_loader"
                        loading="lazy"
                        src="https://www.circular-couturecollective.com/wishlist?page=2"
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
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalCenterTitle"
    className="modal fade default-modal tap-to-close-modal"
    id="create-collection-modal"
    role="dialog"
    tabIndex="-1"
  >
    <div
      className="modal-dialog modal-dialog-centered"
      role="document"
    >
      <span
        className="tap-to-close d-none"
        data-dismiss="modal"
      >
        Tap to close
      </span>
      <div className="modal-content rounded-0">
        <div className="modal-header border-bottom-0 pb-0">
          <button
            aria-label="Close"
            className="close mobile-hide"
            data-dismiss="modal"
            type="button"
          >
            <span aria-hidden="true">
              X
            </span>
          </button>
        </div>
        <div className="modal-body pb-5">
          <div className="row">
            <div className="col-12 col-md-9 mx-auto">
              <div className="row">
                <div className="col-12">
                  <h5 className="modal-title text-center mb-3 text-capitalize">
                    {' '}Create New Collection{' '}
                  </h5>
                </div>
                <div
                  className="col-lg-12"
                  data-controller="wishlists--create-collection"
                >
                  <form
                    acceptCharset="UTF-8"
                    action="/wishlist_boards"
                    className="default-form"
                    data-action="ajax:success->wishlists--create-collection#processCreateRequestResponse"
                    data-remote="true"
                    data-target="wishlists--create-collection.form"
                    method="post"
                  >
                    <input
                      autoComplete="off"
                      defaultValue="RnXsif6sLjX/uhRnaSAZEkpNMbHzmyMceWdD4Aau3MV5K+1aXzZNI9/7o/p5Za/M194r/9rL9dFH8yeM207EFw=="
                      name="authenticity_token"
                      type="hidden"
                    />
                    <div className="form-group">
                      <label>
                        ENTER THE NAME*
                      </label>
                      <input
                        autoComplete="off"
                        autoFocus
                        className="form-control mb-3"
                        data-action="keyup->wishlists--create-collection#updateCtaColor"
                        data-target="wishlists--create-collection.input"
                        id="wishlist_board_name"
                        name="wishlist_board[name]"
                        required
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="btn btn-outline-primary -grey btn-block mb-4"
                        data-disable-with="SAVING..."
                        data-target="wishlists--create-collection.ctaButton"
                        name="commit"
                        type="submit"
                        value="CREATE"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        <EmailSubscription />
        <Footer />
        </>
    )
}

export default Wishlist;
