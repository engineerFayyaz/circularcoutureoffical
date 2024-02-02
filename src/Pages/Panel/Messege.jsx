import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const Messege = () =>{

    return (
        <>
        <TopHeader />
        <div
  className="main-container -with-cta-banner"
  data-controller="messages-v2--main"
  data-current-user-id="239031"
>
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
      data-dashboard--mobile-header-page="messages_v2"
    >
      <label
        className="text-uppercase mb-0"
        data-target="dashboard--mobile-header.title"
      >
        Messages
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
                  href="/Panel/Dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="renting-index-item lending-index-item">
                <a
                  className="text-uppercase"
                  href="/Panel/lending"
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
                  href="#"
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
                  href="/Panel/listing"
                >
                  Wardrobe
                </a>
              </li>
              <li className="messages_v2-index-item messages_v2-show-item active">
                <a
                  className="text-uppercase"
                  href="/Panel/Messege"
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
                  href="/Panel/Wishlist"
                >
                  Wishlists
                </a>
              </li>
              <li className="referrals-index-item">
                <a
                  className="text-uppercase"
                  href="/Panel/Referral"
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
                  href="/Panel/Profile"
                >
                  Edit My Profile
                </a>
              </li>
              <li className="account-index-item">
                <a
                  className="text-uppercase"
                  href="/Panel/Account"
                >
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div data-controller="messages-v2--side-nav">
      <div
        className="first-section message-v2-side-nav-wrapper"
        data-target="messages-v2--side-nav.sideNav"
      >
        <div className="media dashboard-users-media">
          <a
            className="edit-account-btn"
            href="/Panel/Account"
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
              href="/Panel/Referral"
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
                href="/Panel/Referral"
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
          data-dashboard--sidenav-page="messages_v2"
        >
          <li className="dashboard-link">
            <a
              className="text-uppercase"
              href="/Panel/Dashboard"
            >
              Dashboard
            </a>
          </li>
          <li className="renting-link lending-link">
            <a
              className="text-uppercase"
              href="/Panel/lending"
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
              href="#"
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
              href="/Panel/listing"
            >
              Wardrobe
            </a>
          </li>
          <li className="messages-link messages_v2-link active">
            <a
              className="text-uppercase"
              href="/Panel/Messege"
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
              href="/Panel/Wishlist"
            >
              Wishlists
            </a>
          </li>
          <li className="referrals-link">
            <a
              className="text-uppercase"
              href="/Panel/Referral"
            >
              Give £10, Get £10
            </a>
          </li>
          <li className="profile-link">
            <a
              className="text-uppercase"
              href="/Panel/Profile"
            >
              Edit My Profile
            </a>
          </li>
          <li
            className="account-link"
            data-action=""
          >
            <a
              className="text-uppercase"
              href="/Panel/Account"
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
                          defaultValue="sveJZC7DiaqclewxfAuPMH9qwMv+xhEFgKglucBvWSONqYi3j1nqvLzUW6xsTjnu4vnahdeWx8i+PEHVHY9B8Q=="
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
      <div
        className="col-sm-8 mobile-px-0px d-none"
        data-target="messages-v2--side-nav.backToMessages"
      >
        <div className="mobile-only px-30px py-15px">
          <a
            className="default-link -md"
            href="/Panel/Messege"
            target="_top"
          >
            {`< BACK TO MESSAGES`}
          </a>
        </div>
      </div>
    </div>
    <div
      className="second-section -responsive bg-circular-couture-white pt-0 px-0px mobile-px-0px"
      data-controller="messages-v2--chatbox"
    >
      <div className="dashboard-header">
        <div className="row no-gutters">
          <div
            className="col-sm-4 message-preview-main-container"
            data-target="messages-v2--chatbox.messagePreviewWrapper"
          >
            <div className="message-nav pt-36px mobile-px-20px">
              <div className="header px-20px mobile-px-0px">
                <h1>
                  Messages
                </h1>
                <div className="divider -grey my-22px" />
              </div>
              <turbo-cable-stream-source
                channel="Turbo::StreamsChannel"
                connected=""
                signed-stream-name="Im1lc3NhZ2VfcHJldmlld18yMzkwMzEi--cff062a67b3b9f6fd868b472dae1175c251ab60122b85fc86a03ca4c7a8c8ed2"
              />
              <turbo-frame
                data-messages-v2--main-target="messagePreviewFrame"
                id="message_preview_239031"
              />
            </div>
          </div>
          <div className="col-sm-8 mobile-px-0px">
            <div className="chat-box bg-circular-couture-off-white px-30px py-30px mobile-px-20px d-flex align-items-center">
              <div className="chatbox-placeholder text-center w-100">
                <p className="mx-auto">
                  {' '}WHEN YOU FIND AN ITEM YOU LOVE, SEND THE LENDER A MESSAGE WITH ANY QUESTIONS YOU HAVE.{' '}
                </p>
                <a
                  className="btn btn-primary -dark-red d-block mx-auto"
                  href="/collections/newarrival"
                >
                  FIND AN ITEM
                </a>
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

export default Messege;
