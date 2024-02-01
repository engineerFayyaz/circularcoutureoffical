import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const Account = () =>{

    return (
        <>
        <TopHeader />
    
        <div className="main-container -with-cta-banner">
  <div className="dashboard-layout">
    <div
      className="dashboard-mobile-nav"
      data-action="click->dashboard--mobile-header#showModal"
      data-controller="dashboard--mobile-header"
      data-dashboard--mobile-header-action="index"
      data-dashboard--mobile-header-amount-value="£10"
      data-dashboard--mobile-header-lending-count="Renting & Lending"
      data-dashboard--mobile-header-offer-count="Buying & Selling"
      data-dashboard--mobile-header-order-count="Buying & Selling"
      data-dashboard--mobile-header-page="account"
    >
      <label
        className="text-uppercase mb-0"
        data-target="dashboard--mobile-header.title"
      >
        My Account
      </label>
      <img
        className="float-right mt-2"
        src="https://res.cloudinary.com/dcaptnlz3/image/asset/arrow-8ea78157963ce27c6c22d9f9b3b36d39.svg"
      />
    </div>
    <div
      aria-hidden="true"
      aria-labelledby="exampleModalLabel"
      className="modal filter-modal mobile-nav-search dashboard-mobile-nav-modal fade -sub-modal"
      id="dashboard_mobile_nav"
      role="dialog"
      tabIndex="-1"
    >
      <div
        className="modal-dialog m-0 "
        role="document"
      >
        <div className="modal-content rounded-0 border-0">
          <div className="modal-body text-uppercase p-0">
            <span
              className="close-button"
              data-dismiss="modal"
            >
              <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/arrow-8ea78157963ce27c6c22d9f9b3b36d39.svg" />
            </span>
            <ul className="list-unstyled dashboard-menu m-0">
              <li className="dashboard-index-item">
                <a
                  className="text-uppercase"
                  href="/dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="renting-index-item lending-index-item">
                <a
                  className="text-uppercase"
                  href="/lending.html"
                >
                  <turbo-frame
                    id="renting_and_lending_count_frame"
                    loading="lazy"
                    src="/rentals/request_count"
                  >
                    {' '}Renting & Lending{' '}
                  </turbo-frame>
                </a>
              </li>
              <li className="purchases-index-item">
                <a
                  className="text-uppercase"
                  href="/purchases?page=buyer"
                >
                  <turbo-frame
                    id="buying_and_selling_count_frame"
                    loading="lazy"
                    src="/purchase/offer_request_count"
                  >
                    {' '}Buying & Selling{' '}
                  </turbo-frame>
                </a>
              </li>
              <li className="listings-index-item">
                <a
                  className="text-uppercase"
                  href="/listings.html"
                >
                  Wardrobe
                </a>
              </li>
              <li className="messages_v2-index-item messages_v2-show-item">
                <a
                  className="text-uppercase"
                  href="/messages.html"
                >
                  {' '}Messages{' '}
                  <span
                    className="text-circular-couture-light-red"
                    id="unread-messages-count"
                  />
                </a>
              </li>
              <li className="wishlist-index-item">
                <a
                  className="text-uppercase"
                  href="/wishlist.html"
                >
                  Wishlists
                </a>
              </li>
              <li className="referrals-index-item">
                <a
                  className="text-uppercase"
                  href="/referrals.html"
                >
                  Give £10, Get £10
                </a>
              </li>
              <li>
                <a
                  className="text-uppercase"
                  href="https://help.circular-couturecollective.com/"
                >
                  FAQS
                </a>
              </li>
              <li className="profile-index-item">
                <a
                  className="text-uppercase"
                  href="/profile.html"
                >
                  Edit My Profile
                </a>
              </li>
              <li className="account-index-item active">
                <a
                  className="text-uppercase"
                  href="/account.html"
                >
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="first-section">
      <div className="media dashboard-users-media">
        <a
          className="edit-account-btn"
          href="/account.html"
        >
          <img
            className="avatar rounded-circle mr-3"
            src="https://res.cloudinary.com/dcaptnlz3/image/asset/c_fill,f_auto,h_118,q_auto,w_118/avatar-default-400b291b4806d585a6e1d5449bab9603.png"
          />
          <img
            className="pencil-icon"
            src="https://res.cloudinary.com/dcaptnlz3/image/asset/pencil-61c31bf589b82405df2af3587d636d63.svg"
          />
        </a>
        <div className="media-body my-auto">
          <a
            className="chat-box-heading text-dark"
            href="/members/shahid-u"
          >
            <h5 className="mb-0">
              {' '}Shahid U.{' '}
              <span>
                <svg
                  height="10.176"
                  viewBox="0 0 5.588 10.176"
                  width="5.588"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,8.762,4.381,4.381,0,0"
                    data-name="Icon feather-chevron-right"
                    fill="none"
                    id="Icon_feather-chevron-right"
                    stroke="#231e1a"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    transform="translate(0.707 0.707)"
                  />
                </svg>
              </span>
            </h5>
            <div className="star-ratings-wrapper" />
          </a>
        </div>
      </div>
      <div className="dashboard-account-balance position-relative">
        <div className="side-nav-account-credit-desktop-only">
          <div className="row mb-0 text-left mx-0 d-flex align-items-end">
            <turbo-frame id="account_credit_balance_frame">
              <a
                className="mr-2 d-flex align-items-end"
                data-target="#how-credit-works-modal"
                data-toggle="modal"
                href="#"
                id="account_balance"
              >
                Credit balance: £0.00
              </a>
            </turbo-frame>
            <div className="d-flex align-items-end pr-1">
              <a
                data-target="#how-credit-works-modal"
                data-toggle="modal"
                href="#"
              >
                <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/question-mark-2c6f6001fed8edcc159f3f1f70223177.svg" />
              </a>
            </div>
            <div className="text-wrap d-flex align-items-end">
              <a
                className="default-link -grey text-uppercase pb-0 pt-2"
                data-target="#top_up_modal"
                data-toggle="modal"
                href="#"
              >
                Top Up
              </a>
            </div>
          </div>
        </div>
        <div className="side-nav-account-credit-mobile-only">
          <div className="d-flex text-left justify-content-start">
            <div className="d-flex flex-column-end">
              <turbo-frame id="account_credit_balance_frame">
                <div className="p-0">
                  <a
                    className="text-wrap"
                    data-target="#how-credit-works-modal"
                    data-toggle="modal"
                    href="#"
                    id="account_balance"
                  >
                    {' '}Credit balance: £0.00{' '}
                  </a>
                </div>
              </turbo-frame>
              <div className=" pl-0 ml-2">
                <a
                  data-target="#how-credit-works-modal"
                  data-toggle="modal"
                  href="#"
                >
                  <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/question-mark-2c6f6001fed8edcc159f3f1f70223177.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-wrap d-flex align-items-end float-left">
            <a
              className="default-link -grey text-uppercase pb-0"
              data-target="#top_up_modal"
              data-toggle="modal"
              href="#"
            >
              Top Up
            </a>
          </div>
        </div>
      </div>
      <div className="mt-3 side-nav-share-button-desktop">
        <div data-controller="share-wardrobe-button-component">
          <input
            className="d-none"
            data-target="share-wardrobe-button-component.profileLink"
            defaultValue="https://www.circular-couturecollective.com/members/shahid-u"
            type="text"
          />
          <button
            className="share-button-component button-hover button primary btn-block"
            data-action="click->share-wardrobe-button-component#copyLink"
            data-target="share-wardrobe-button-component.contentSpan"
          >
            <div className="d-flex justify-content-center gray-6 align-items-center">
              <img
                className="mr-2"
                height="14"
                src="https://res.cloudinary.com/dcaptnlz3/image/asset/link-icon-white-d78c54ba75e0454aec53e874f9d8ac82.svg"
                width="13"
              />
              {' '}SHARE YOUR WARDROBE
            </div>
          </button>
        </div>
        <div
          className="mt-3"
          data-controller="give-get-button-component"
        >
          <a
            className="give-get-button-component give-get-button-hover button primary btn-block"
            href="/referrals.html"
          >
            <div className="d-flex justify-content-center pitch-black align-items-center">
              <img
                className="mr-2"
                src="https://res.cloudinary.com/dcaptnlz3/image/asset/share-icon-055ae36202c20661386b7919901bd106.svg"
              />
              {' '}Give £10, Get £10
            </div>
          </a>
        </div>
      </div>
      <div className="side-nav-share-button-mobile row px-0 mt-2 ">
        <div className="left-button col-6 pl-0 text-right">
          <button
            className="share-button-component button primary button-width py-0 d-none"
            data-action="click->share-wardrobe-button-component#show"
            data-controller="share-wardrobe-button-component"
            data-share-wardrobe-button-component-text-value="Have you seen this wardrobe on CIRCULAR COUTURE? Obsessed! 💘"
            data-share-wardrobe-button-component-title-value="CIRCULAR COUTURE"
            data-share-wardrobe-button-component-url-value="https://www.circular-couturecollective.com/members/shahid-u"
          >
            <div className="d-flex justify-content-center gray-6 align-items-center">
              <img
                alt="An icon of a link icon white"
                className="mr-2 sw-icon"
                height="14"
                src="https://res.cloudinary.com/dcaptnlz3/image/asset/link-icon-white-d78c54ba75e0454aec53e874f9d8ac82.svg"
                width="13"
              />
              {' '}SHARE WARDROBE
            </div>
          </button>
          <div
            className="share-wardrobe-button-copy"
            data-controller="share-wardrobe-button-component"
          >
            <input
              className="d-none"
              data-target="share-wardrobe-button-component.profileLink"
              defaultValue="https://www.circular-couturecollective.com/members/shahid-u"
              readOnly
              type="text"
            />
            <button
              className="share-button-component button-hover button primary button-width"
              data-action="click->share-wardrobe-button-component#copyLink"
              data-target="share-wardrobe-button-component.contentSpan"
            >
              <div className="d-flex justify-content-center gray-6 align-items-center">
                <img
                  className="mr-2"
                  height="14"
                  src="https://res.cloudinary.com/dcaptnlz3/image/asset/link-icon-white-d78c54ba75e0454aec53e874f9d8ac82.svg"
                  width="13"
                />
                {' '}SHARE WARDROBE
              </div>
            </button>
          </div>
        </div>
        <div className="col-6 pr-0 text-left right-button">
          <button
            className="give-get-button-component button primary button-width py-0 d-none"
            data-action="click->give-get-button-component#show"
            data-controller="give-get-button-component"
            data-give-get-button-component-text-value="Psst... join me on CIRCULAR COUTURE and we'll both get £10 off our next order! 💕"
            data-give-get-button-component-title-value="CIRCULAR COUTURE"
            data-give-get-button-component-url-value="https://www.circular-couturecollective.com/r/shahid-u"
          >
            <div className="d-flex justify-content-center pitch-black align-items-center">
              <img
                className="mr-2"
                src="https://res.cloudinary.com/dcaptnlz3/image/asset/share-icon-055ae36202c20661386b7919901bd106.svg"
              />
              {' '}Give £10, Get £10
            </div>
          </button>
          <div className="give-get-button-desktop">
            <a
              className="give-get-button-component give-get-button-hover button primary button-width"
              href="/referrals.html"
            >
              <div className="d-flex justify-content-center pitch-black align-items-center">
                <img
                  className="mr-2"
                  src="https://res.cloudinary.com/dcaptnlz3/image/asset/share-icon-055ae36202c20661386b7919901bd106.svg"
                />
                {' '}Give £10, Get £10
              </div>
            </a>
          </div>
        </div>
      </div>
      <ul
        className="list-unstyled dashboard-menu"
        data-controller="dashboard--sidenav"
        data-dashboard--sidenav-action="index"
        data-dashboard--sidenav-page="account"
      >
        <li className="dashboard-link">
          <a
            className="text-uppercase"
            href="/dashboard"
          >
            Dashboard
          </a>
        </li>
        <li className="renting-link lending-link">
          <a
            className="text-uppercase"
            href="/lending.html"
          >
            <turbo-frame
              complete=""
              id="renting_and_lending_count_frame"
              loading="lazy"
              src="https://www.circular-couturecollective.com/rentals/request_count"
            >
              {' '}Renting & Lending{' '}
            </turbo-frame>
          </a>
        </li>
        <li className="purchases-link">
          <a
            className="text-uppercase"
            href="/purchases?page=buyer"
          >
            <turbo-frame
              complete=""
              id="buying_and_selling_count_frame"
              loading="lazy"
              src="https://www.circular-couturecollective.com/purchase/offer_request_count"
            >
              {' '}Buying & Selling{' '}
            </turbo-frame>
          </a>
        </li>
        <li className="listings-link">
          <a
            className="text-uppercase"
            href="/listings.html"
          >
            Wardrobe
          </a>
        </li>
        <li className="messages-link messages_v2-link">
          <a
            className="text-uppercase"
            href="/messages.html"
          >
            {' '}Messages{' '}
            <span
              className="text-circular-couture-light-red"
              id="unread-messages-count-side-nav"
            />
          </a>
        </li>
        <li className="wishlist-link">
          <a
            className="text-uppercase"
            href="/wishlist.html"
          >
            Wishlists
          </a>
        </li>
        <li className="referrals-link">
          <a
            className="text-uppercase"
            href="/referrals.html"
          >
            Give £10, Get £10
          </a>
        </li>
        <li className="profile-link">
          <a
            className="text-uppercase"
            href="/profile.html"
          >
            Edit My Profile
          </a>
        </li>
        <li
          className="account-link active"
          data-action=""
        >
          <a
            className="text-uppercase"
            href="/account.html"
          >
            My Account
          </a>
        </li>
      </ul>
    </div>
    <div
      aria-hidden="true"
      aria-labelledby="exampleModalCenterTitle"
      className="modal fade default-modal tap-to-close-modal"
      id="top_up_modal"
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
                      {' '}Top Up{' '}
                    </h5>
                  </div>
                  <div className="col-12 text-right">
                    <p className="text-center or-separator px-2 mb-4">
                      {' '}If you have a gift card or code to redeem,{' '}
                      <br />
                      please input it below and click redeem.{' '}
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <form
                      acceptCharset="UTF-8"
                      action="/account_credits"
                      className="default-form"
                      data-action="ajax:success->ios--turbo-native-bridge--credit-balance#fetchCreditBalance"
                      data-controller="ios--turbo-native-bridge--credit-balance"
                      data-ios--turbo-native-bridge--credit-balance-credit-balance-value="0"
                      data-ios--turbo-native-bridge--credit-balance-feature-enabled-value="true"
                      data-remote="true"
                      id="dashboard-top-up"
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
                        defaultValue="z9e8U7Aeqed6D8dztQnY4enDEUonQpCC55PJDFlhXCuqx+xVP6DGgajzXeRmhBhC10orq7Z+2NsNRPvabLcYyg=="
                        name="authenticity_token"
                        type="hidden"
                      />
                      <div className="form-group">
                        <label>
                          Code*
                        </label>
                        <input
                          autoFocus
                          className="form-control mb-2"
                          id="code"
                          name="code"
                          required
                          type="text"
                        />
                        <label
                          className="text-danger mb-0 d-none"
                          id="voucher_error_message"
                        >
                          This code is incorrect or has expired.
                        </label>
                      </div>
                      <div className="form-group">
                        <input
                          className="btn btn-primary btn-block -dark-red mt-3 mb-4"
                          data-disable-with="sending..."
                          name="commit"
                          type="submit"
                          value="Redeem Code"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-12 text-uppercase text-center">
                    <a
                      className="footer-link js-link-sign-in mobile-hide"
                      href="https://shop.circular-couturecollective.com/product/gift-card"
                      target="_blank"
                    >
                      Buy A Gift Card
                    </a>
                    <a
                      className="btn btn-outline-primary btn-block -dark-red mb-4 js-link-sign-in desktop-hide"
                      href="https://shop.circular-couturecollective.com/product/gift-card"
                      target="_blank"
                    >
                      Buy A Gift Card
                    </a>
                    <a
                      className="pb-1 footer-link desktop-hide"
                      data-dismiss="modal"
                      href="#"
                    >
                      {`< return`}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="second-section">
      <div className="dashboard-my-account">
        <div className="dashboard-header">
          <div className="row">
            <div className="col-sm-5">
              <h1>
                My Account
              </h1>
            </div>
            <div className="col-sm-7">
              <div
                className="buttons text-uppercase"
                data-controller="dashboard--scroll-to"
              >
                <a
                  className="default-link mr-4"
                  data-action="dashboard--scroll-to#deliveryDetails"
                  href="#"
                >
                  Delivery Details
                </a>
                <a
                  className="default-link"
                  data-action="dashboard--scroll-to#cardDetails"
                  href="#"
                >
                  Card Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion mt-4"
              id="accordionRequest"
            >
              <div className="card border-0">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    Account Details
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionRequest"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="form-wrapper mb-5">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            Please pick an avatar or upload your own photo that is at least 500px tall by 500px wide.
                          </p>
                        </div>
                        <div className="col-sm-8">
                          <div
                            className="row no-gutters"
                            id="account_avatar"
                          >
                            <div className="col-4 col-md-6">
                              <ul className="list-inline upload-avatar">
                                <li className="list-inline-item">
                                  <img
                                    className="mb-1 rounded-circle"
                                    height="50"
                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/avatar-default-400b291b4806d585a6e1d5449bab9603.png"
                                    width="50"
                                  />
                                </li>
                                <li
                                  className="list-inline-item"
                                  data-controller="dashboard--avatars"
                                >
                                  <a
                                    className="default-link desktop-btn text-uppercase"
                                    data-action="dashboard--avatars#showFilePicker"
                                    href="#"
                                    id="upload_button"
                                  >
                                    Upload My Own
                                  </a>
                                  <a
                                    className="default-link mt- mobile-btn text-uppercase"
                                    data-action="dashboard--avatars#showFilePicker"
                                    href="#"
                                    id="upload_button"
                                  >
                                    Upload
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <form
                              acceptCharset="UTF-8"
                              action="/account/shahid-u/avatars"
                              className="d-none"
                              data-controller="dashboard--avatars"
                              data-remote="true"
                              data-target="dashboard--avatars.imageForm"
                              encType="multipart/form-data"
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
                                defaultValue="FbuBcKqnJK04Ha49WKM/msctmgIRYvLuYwQN745m5ge7zBumumCpfkINfwwRXYyGLnA2YAVG+25kxDkoFpvEIg=="
                                name="authenticity_token"
                                type="hidden"
                              />
                              <input
                                accept="image/*;capture=camera"
                                data-action="dashboard--avatars#photoChanges"
                                id="image_photo"
                                name="image[photo]"
                                type="file"
                              />
                              <input
                                data-disable-with="Upload"
                                data-target="dashboard--avatars.uploadButton"
                                name="commit"
                                type="submit"
                                value="Upload"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-wrapper mb-3">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            We use this information to identify you and communicate with you.
                          </p>
                          <p className="pt-md-5">
                            Please enter a valid phone number only using numeric values.
                          </p>
                        </div>
                        <div
                          className="col-sm-8"
                          id="accout_details_form"
                        >
                          <form
                            acceptCharset="UTF-8"
                            action="/account/shahid-u"
                            className="default-form"
                            data-remote="true"
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
                              defaultValue="Bvdn4dPMYQBkBtCdHARu2EKajw/TqyFjeLGzW6X+4KI+oFMKT73efPCzBwP9HAvrAnx84wBHc90OM8J59tG3lA=="
                              name="authenticity_token"
                              type="hidden"
                            />
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    First Name*
                                  </label>
                                  <input
                                    className="form-control"
                                    defaultValue="shahid"
                                    id="user_firstname"
                                    name="user[firstname]"
                                    pattern="^[-'a-zA-Z ]+$"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Last Name*
                                  </label>
                                  <input
                                    className="form-control"
                                    defaultValue="umar"
                                    id="user_lastname"
                                    name="user[lastname]"
                                    pattern="^[-'a-zA-Z ]+$"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Phone Number*
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_mobile_number"
                                    name="user[mobile_number]"
                                    pattern="^[+]?[(]?[0-9]{3}[)]?[- .]?[0-9]{3}[- .]?[0-9]{4,6}$"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group text-right">
                                  <input
                                    className="btn btn-primary -dark-red py-2 px-5 mt-3"
                                    data-disable-with="Saving..."
                                    name="commit"
                                    type="submit"
                                    value="Save"
                                  />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="form-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            Your new email address will only be active after confirming the email that we sent.
                          </p>
                        </div>
                        <div className="col-sm-4">
                          <form className="default-form">
                            <div className="form-group">
                              <label>
                                Email Address
                              </label>
                              <input
                                className="form-control"
                                defaultValue="shahidumar5@gmail.com"
                                readOnly
                              />
                            </div>
                          </form>
                        </div>
                        <div className="col-sm-4">
                          <a
                            className="default-link text-uppercase"
                            data-target="#email_change_modal"
                            data-toggle="modal"
                            href="#"
                          >
                            Change
                          </a>
                          <div
                            aria-hidden="true"
                            aria-labelledby="exampleModalCenterTitle"
                            className="modal fade default-modal tap-to-close-modal"
                            id="email_change_modal"
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
                                            {' '}Change Email{' '}
                                          </h5>
                                        </div>
                                        <div
                                          className="col-lg-12"
                                          id="account_email_addresses_form"
                                        >
                                          <form
                                            acceptCharset="UTF-8"
                                            action="/account/shahid-u/email_addresses"
                                            className="default-form"
                                            data-remote="true"
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
                                              defaultValue="5fiQjfryV7KvX7OWH48z72kh5LCfMNRCrpHGWpXYpo/8qxXXEucikC6LfIH+9o/e503HcLP/FUcO5ayqKdhISQ=="
                                              name="authenticity_token"
                                              type="hidden"
                                            />
                                            <div className="form-group">
                                              <label>
                                                New Email Address*
                                              </label>
                                              <input
                                                autoComplete="email"
                                                className="form-control"
                                                defaultValue=""
                                                id="user_email"
                                                name="user[email]"
                                                type="email"
                                              />
                                            </div>
                                            <div className="form-group">
                                              <input
                                                className="btn btn-primary btn-block -dark-red mt-3 mb-4"
                                                data-disable-with="sending..."
                                                name="commit"
                                                type="submit"
                                                value="Send Confirmation Email"
                                              />
                                            </div>
                                          </form>
                                        </div>
                                        <div className="col-lg-12 text-uppercase text-center">
                                          <a
                                            className="pb-1 footer-link desktop-hide"
                                            data-dismiss="modal"
                                            href="#"
                                          >
                                            {`< return`}
                                          </a>
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
                            id="email_confirm_modal"
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
                                            {' '}Please check your inbox{' '}
                                          </h5>
                                        </div>
                                        <div className="col-lg-12 text-center">
                                          <p>
                                            You will receive an instruction email on how to activate your new email address.
                                          </p>
                                        </div>
                                        <div className="col-lg-12 text-uppercase text-center">
                                          <a
                                            className="pb-1 footer-link desktop-hide"
                                            data-dismiss="modal"
                                            href="#"
                                          >
                                            {`< return`}
                                          </a>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion"
              id="accordionRequest"
            >
              <div className="card border-0 mt-4">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    Change Password
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionRequest"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="form-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            Passwords need to be at least 8 characters long, contains 1 upper and 1 lower-case letter, 1 number and at least 1 special character (e.g. !"#$%&).
                          </p>
                        </div>
                        <div
                          className="col-sm-8"
                          id="change_password_form"
                        >
                          <form
                            acceptCharset="UTF-8"
                            action="/account/shahid-u/passwords"
                            className="default-form"
                            data-remote="true"
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
                              defaultValue="tlpwaudMdLTLuMgW/0mhAl2UdZTH/m/f27y0E8MUa260kWN6l5C2D6MoNqw6LoYzwmiFpkIIFst+Ux4hI2GOTw=="
                              name="authenticity_token"
                              type="hidden"
                            />
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Current Password
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_current_password"
                                    name="user[current_password]"
                                    type="password"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6" />
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    New Password
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_password"
                                    name="user[password]"
                                    type="password"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Confirm New Password
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_password_confirmation"
                                    name="user[password_confirmation]"
                                    type="password"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group text-right">
                                  <input
                                    className="btn btn-primary -dark-red py-2 px-5 mt-3"
                                    data-disable-with="Saving..."
                                    name="commit"
                                    type="submit"
                                    value="Save"
                                  />
                                </div>
                              </div>
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
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion"
              id="accordionDeliveryDetails"
            >
              <div className="card border-0">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    Delivery Details
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionDeliveryDetails"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="form-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            This is the address where your rented items will be sent to or returned to.
                          </p>
                        </div>
                        <div
                          className="col-sm-8"
                          id="delivery_details_form"
                        >
                          <form
                            acceptCharset="UTF-8"
                            action="/account/shahid-u/addresses"
                            className="default-form"
                            data-remote="true"
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
                              defaultValue="xvPtU9J7w45vS8SAHk/UQCrfktw6SRsAvo9Dt8UiT1vRJmky7fOXsLirZx+x8YJW52+8/1SJqBXdDOPPHqfemg=="
                              name="authenticity_token"
                              type="hidden"
                            />
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    First Name*
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_delivery_first_name"
                                    name="user[delivery_first_name]"
                                    pattern="^[-'a-zA-Z ]+$"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Last Name*
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_delivery_last_name"
                                    name="user[delivery_last_name]"
                                    pattern="^[-'a-zA-Z ]+$"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <div className="form-group">
                                  <label>
                                    Address Line 1*
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_address_line_1"
                                    name="user[address_line_1]"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-9">
                                <div className="form-group">
                                  <label>
                                    Address Line 2
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_address_line_2"
                                    name="user[address_line_2]"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Town/City*
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_city"
                                    name="user[city]"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>
                                    Postcode*
                                  </label>
                                  <input
                                    className="form-control"
                                    id="user_postcode"
                                    name="user[postcode]"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-7">
                                <div className="form-group">
                                  <label>
                                    Country*
                                  </label>
                                  <div className="dropdown form-dropdown">
                                    <button
                                      aria-expanded="false"
                                      aria-haspopup="true"
                                      className="form-control dropdown-toggle py-2"
                                      data-toggle="dropdown"
                                      type="button"
                                    >
                                      {' '}United Kingdom{' '}
                                    </button>
                                    <div className="dropdown-menu w-100">
                                      <a
                                        className="dropdown-item text-uppercase"
                                        href="javascript:void(0);"
                                      >
                                        United Kingdom
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group text-right">
                                  <input
                                    className="btn btn-primary -dark-red py-2 px-5 mt-3"
                                    data-disable-with="Saving..."
                                    name="commit"
                                    type="submit"
                                    value="Save"
                                  />
                                </div>
                              </div>
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
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion"
              id="accordionCardDetails"
            >
              <div className="card border-0">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    Card Details
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionCardDetails"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="form-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            This is the card which we use to charge you for rentals and fees.
                          </p>
                        </div>
                        <div
                          className="col-sm-8"
                          data-controller="dashboard--card-details"
                        >
                          <form
                            acceptCharset="UTF-8"
                            action="/account"
                            className="default-form"
                            data-controller="stripe"
                            data-stripe-cards-url="/account/shahid-u/stripe_cards"
                            data-stripe-client-secret="seti_1OcPBQDTaeNkzzRduFqcGYZ8_secret_PRHk2HburjrBBD7kn3Ph1GcDQ9gHb0w"
                            data-stripe-key="pk_live_R4DlS5JEfDfvGq3kT9anSeuV"
                            data-target="stripe.form dashboard--card-details.form"
                            method="post"
                          >
                            <input
                              autoComplete="off"
                              defaultValue="9WRsennYUXXWhOBLqG2rMPFdtmtBoHaykrsAKdMqJ+Dx7RplzOMrTY8qhvqh7CQHtk4+vKdAT8VGw2DLfmc8zg=="
                              name="authenticity_token"
                              type="hidden"
                            />
                            <div className="row">
                              <div className="col-lg-10">
                                <div className="form-group">
                                  <label
                                    className="text-uppercase"
                                    htmlFor="card-element"
                                  >
                                    Credit / debit card*
                                  </label>
                                  <br />
                                  <div
                                    className="StripeElement StripeElement--empty"
                                    data-target="stripe.cardElement"
                                  >
                                    <div
                                      className="__PrivateStripeElement"
                                      style={{
                                        '--stripeElementWidth': '406.8374938964844px',
                                        background: 'transparent !important',
                                        border: 'none !important',
                                        display: 'block !important',
                                        margin: '0px !important',
                                        opacity: '1 !important',
                                        padding: '0px !important',
                                        position: 'relative !important'
                                      }}
                                    >
                                      <iframe
                                        allow="payment *"
                                        allowtransparency="true"
                                        frameBorder="0"
                                        name="__privateStripeFrame6966"
                                        role="presentation"
                                        scrolling="no"
                                        src="https://js.stripe.com/v3/elements-inner-card-fe6cd940b43c6940ac37946cff597634.html#wait=false&mids[guid]=51e9347d-b17f-40f6-97dc-14159d18f18abbe1f2&mids[muid]=2a0301c2-fabb-4525-a3d3-45548b8d8d4480e375&mids[sid]=4c89d289-571f-49b7-ab0b-c90eae628daad42aa6&style[base][color]=%23241E19&style[base][fontSize]=12px&style[base][letterSpacing]=1.2px&style[base][lineHeight]=17px&style[base][fontFamily]=%22Open+Sans%22%2C+sans-serif&style[base][fontSmoothing]=antialiased&style[base][::placeholder][color]=%23CECECE&style[base][::placeholder][textTransform]=uppercase&style[invalid][color]=%23AA5959&style[invalid][:focus][color]=%23AA5959&rtl=false&componentName=card&keyMode=live&apiKey=pk_live_R4DlS5JEfDfvGq3kT9anSeuV&referrer=https%3A%2F%2Fwww.circular-couturecollective.com%2Faccount&controllerId=__privateStripeController6961"
                                        style={{
                                          border: 'none !important',
                                          colorScheme: 'light only !important',
                                          display: 'block !important',
                                          height: '17px',
                                          marginBottom: '0px !important',
                                          marginLeft: '0px !important',
                                          marginRight: '0px !important',
                                          marginTop: '-4.76e-05px',
                                          minWidth: '100% !important',
                                          overflow: 'hidden !important',
                                          padding: '0px !important',
                                          transform: 'translate(0px) !important',
                                          userSelect: 'none !important',
                                          width: '1px !important'
                                        }}
                                        title="Secure card payment input frame"
                                      />
                                      <input
                                        aria-hidden="true"
                                        aria-label=" "
                                        autoComplete="false"
                                        className="__PrivateStripeElement-input"
                                        maxLength="1"
                                        style={{
                                          background: 'transparent !important',
                                          border: 'none !important',
                                          display: 'block !important',
                                          fontSize: '16px !important',
                                          height: '1px !important',
                                          left: '0px !important',
                                          margin: '0px !important',
                                          opacity: '0 !important',
                                          padding: '0px !important',
                                          pointerEvents: 'none !important',
                                          position: 'absolute !important',
                                          top: '-1px !important',
                                          width: '100% !important'
                                        }}
                                      />
                                      <div
                                        style={{
                                          background: 'none !important',
                                          border: '0px !important',
                                          display: 'block !important',
                                          height: '37px !important',
                                          margin: '-19px 0px 0px !important',
                                          opacity: '1 !important',
                                          overflow: 'hidden !important',
                                          padding: '0px !important',
                                          position: 'absolute !important',
                                          right: '-18px !important',
                                          top: '50% !important',
                                          transition: 'width 0s ease 0.4s !important',
                                          width: '0px !important'
                                        }}
                                      >
                                        <iframe
                                          allowtransparency="true"
                                          frameBorder="0"
                                          name="cardButton6969"
                                          scrolling="no"
                                          src="https://js.stripe.com/v3/elements-inner-link-button-for-card-6fb63941ac80a83eb9b75961fafaafeb.html#locale=en&style[foregroundColor]=%23241E19&frameId=__privateStripeFrame6966&publishableKey=pk_live_R4DlS5JEfDfvGq3kT9anSeuV&stripeJsId=aa63e989-3326-4221-b514-9b6ba3f10f5c&mids[guid]=51e9347d-b17f-40f6-97dc-14159d18f18abbe1f2&mids[muid]=2a0301c2-fabb-4525-a3d3-45548b8d8d4480e375&mids[sid]=4c89d289-571f-49b7-ab0b-c90eae628daad42aa6&component=card"
                                          style={{
                                            border: '0px !important',
                                            colorScheme: 'light only !important',
                                            display: 'block !important',
                                            height: '37px !important',
                                            margin: '0px !important',
                                            opacity: '1 !important',
                                            overflow: 'hidden !important',
                                            padding: '0px !important',
                                            position: 'absolute !important',
                                            right: '0px !important',
                                            top: '0px !important',
                                            transform: 'translate(0px) !important',
                                            transition: 'visibility 0s ease 0.4s !important',
                                            userSelect: 'none !important',
                                            visibility: 'hidden !important',
                                            width: 'calc(var(--stripeElementWidth) + 35.999908447265625px) !important'
                                          }}
                                          tabIndex="-1"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <small
                                    className="text-circular-couture-light-red text-uppercase"
                                    data-target="stripe.cardErrors"
                                    role="alert"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="form-group text-right">
                                  <a
                                    className="btn btn-outline-primary -dark-red py-2 px-5 mt-3 mr-3 d-none"
                                    data-action="dashboard--card-details#hideForm"
                                    data-target="dashboard--card-details.cancelButton"
                                    href="#"
                                  >
                                    Cancel
                                  </a>
                                  <input
                                    className="btn btn-primary -dark-red py-2 px-5 mt-3"
                                    data-disable-with="Saving..."
                                    name="commit"
                                    type="submit"
                                    value="Save"
                                  />
                                </div>
                              </div>
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
          <div className="col-lg-12">
            <div
              className="accordion dashboard-accordion mb-5"
              id="accordionRequest"
            >
              <div className="card border-0">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    Bank Details
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionRequest"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-md-3" />
                      <div className="col-md-6">
                        <div data-controller="stripe-account-connect">
                          <a
                            className="btn btn-primary btn-block -dark-red mt-2"
                            data-action="click->dashboard--connect-bank-account#request"
                            data-connect-bank-url="/payout_providers"
                            data-controller="dashboard--connect-bank-account"
                            data-dashboard--connect-bank-account-clicked="false"
                            href="#"
                          >
                            Connect my bank account
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-5">
            <div
              className="accordion dashboard-accordion mb-5"
              id="accordionRequest"
            >
              <div className="card border-0">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    Notifications
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionRequest"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="form-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            Manage communication preferences.
                          </p>
                        </div>
                        <div className="col-sm-8 text-sm-right text-center">
                          <form
                            acceptCharset="UTF-8"
                            action="/account/239031/notifications"
                            className="default-form"
                            data-controller="account--notification-form"
                            data-remote="true"
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
                              defaultValue="odGpizPc1R0l9PhAkUje1RMDpinI7h3ebIcFqMfq99s7HLfrbTun6XxmkKNMV4OpEZa8zxXEk2Z/O0c6hdJOnQ=="
                              name="authenticity_token"
                              type="hidden"
                            />
                            <div
                              className="form-check p-0 text-left custom-checkout-wrapper remember-me mt-2 mb-0"
                              data-target="orders.billingAddressCheckbox"
                            >
                              <label className="p-0 label">
                                <input
                                  autoComplete="off"
                                  defaultValue="0"
                                  name="user[agreed_to_receive_marketing_emails]"
                                  type="hidden"
                                />
                                <input
                                  className="custom-check-input"
                                  defaultValue="1"
                                  id="user_agreed_to_receive_marketing_emails"
                                  name="user[agreed_to_receive_marketing_emails]"
                                  type="checkbox"
                                />
                                {' '}MARKETING EMAILS{' '}
                              </label>
                            </div>
                            <div
                              className="form-check p-0 text-left custom-checkout-wrapper remember-me mt-2 mb-0"
                              data-target="orders.billingAddressCheckbox"
                            >
                              <label className="p-0 label">
                                <input
                                  autoComplete="off"
                                  defaultValue="0"
                                  name="user[agreed_to_receive_sms_notifications]"
                                  type="hidden"
                                />
                                <input
                                  className="custom-check-input"
                                  data-action="account--notification-form#acceptMobileNotification"
                                  defaultValue="1"
                                  id="user_agreed_to_receive_sms_notifications"
                                  name="user[agreed_to_receive_sms_notifications]"
                                  type="checkbox"
                                />
                                {' '}RENTAL REQUEST SMS NOTIFICATIONS{' '}
                              </label>
                            </div>
                            <div
                              className="col-lg-6 d-none"
                              data-target="account--notification-form.mobileField"
                            >
                              <div className="input-group mb-3 ml-2">
                                <div
                                  className="input-group-prepend"
                                  id="uk-mobile-input"
                                >
                                  <span className="input-group-text">
                                    +44
                                  </span>
                                </div>
                                <input
                                  className="form-control"
                                  id="user_mobile_number"
                                  name="user[mobile_number]"
                                  pattern="[0-9]+"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group text-right">
                                <input
                                  className="btn btn-primary -dark-red py-2 px-5 mt-3"
                                  data-disable-with="Saving..."
                                  name="commit"
                                  type="submit"
                                  value="Save"
                                />
                              </div>
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
          <div className="col-lg-12 mt-5">
            <div
              className="accordion dashboard-accordion mb-5"
              id="accordionRequest"
            >
              <div className="card border-0">
                <div
                  className="card-header border-0 px-0"
                  id="headingRequest"
                >
                  <label className="text-uppercase position-relative -full">
                    Removing Your Account
                  </label>
                </div>
                <div
                  aria-labelledby="headingRequest"
                  className="collapse position-relative show"
                  data-parent="#accordionRequest"
                  id="collapseRequest"
                >
                  <div className="card-body p-0">
                    <div className="form-wrapper">
                      <div className="row">
                        <div className="col-sm-4">
                          <p>
                            Press this button to initiate the account deletion process
                          </p>
                        </div>
                        <div className="col-sm-8 text-sm-right text-center">
                          <button
                            className="btn btn-outline-primary -dark-red py-2 px-5 mt-2"
                            data-target="#request_account_removal_modal"
                            data-toggle="modal"
                            name="button"
                            type="submit"
                          >
                            Delete Account
                          </button>
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
    </div>
  </div>
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalCenterTitle"
    className="modal fade default-modal tap-to-close-modal"
    id="request_account_removal_modal"
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
                    {' '}Removing your account{' '}
                  </h5>
                </div>
                <div className="col-12">
                  <p className="text-center">
                    {' '}In order to delete your account, please press the button below to initiate the account deletion process.{' '}
                    <br />
                    <br />
                    {' '}Please note that this process is irreversible and cannot be carried out if you have any pending rentals, offers, disputes or other legitimate business reasons as determined by CIRCULAR COUTURE.
                  </p>
                </div>
                <div className="col-lg-12 mt-4">
                  <form
                    acceptCharset="UTF-8"
                    action="/account_deletion_request/shahid-u"
                    className="default-form"
                    data-remote="true"
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
                      defaultValue="oT/qk+ORaRFpSOaffIj236eKkW6PbPfXTQusYZ/gsnU+QLAqwE8d1KwYELcO5AYnG9I3WliRS/h5e4kkqiJoxg=="
                      name="authenticity_token"
                      type="hidden"
                    />
                    <div className="form-group">
                      <input
                        className="btn btn-primary -dark-red btn-block mb-4"
                        data-disable-with="Processing..."
                        name="commit"
                        type="submit"
                        value="Delete my account"
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

export default Account;
