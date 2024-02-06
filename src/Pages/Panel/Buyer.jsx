import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";
import { Link } from "react-router-dom";
const Buyer = () =>{

    return (
        <>
        <TopHeader />
    
        <div>
  <div className="main-container -with-cta-banner">
    <div className="dashboard-layout">
      <DashboardSidebar/>
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
          {' '}
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
                {' '}
                <span aria-hidden="true">
                  X
                </span>
                {' '}
              </button>
            </div>
            <div className="modal-body pb-5">
              <div className="row">
                <div className="col-12 col-md-9 mx-auto">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="modal-title text-center mb-3 text-capitalize">
                        Top Up
                      </h5>
                      {' '}
                    </div>
                    <div className="col-12 text-right">
                      <p className="text-center or-separator px-2 mb-4">
                        {' '}If you have a gift card or code to redeem,
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
                          defaultValue="J1V5nfp1ACxeWfO7GcW2gVqJM48W86eyhIZiJU0xvxTkLwGG3y7q69terIKdja49cNIP/cl4Mx3jby6g4j9vHA=="
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
                          {' '}
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-12 text-uppercase text-center">
                      {' '}
                      <Link
                        className="footer-link js-link-sign-in mobile-hide"
                        to="https://shop.hurrcollective.com/product/gift-card"
                        target="_blank"
                      >
                        Buy A Gift Card
                      </Link>
                      {' '}
                      <Link
                        className="btn btn-outline-primary btn-block -dark-red mb-4 js-link-sign-in desktop-hide"
                        to="https://shop.hurrcollective.com/product/gift-card"
                        target="_blank"
                      >
                        Buy A Gift Card
                      </Link>
                      {' '}
                      <Link
                        className="pb-1 footer-link desktop-hide"
                        data-dismiss="modal"
                        to="#"
                      >
                        {`< return`}
                      </Link>
                      {' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="dashboard-header">
          <div className="row">
            <div className="col-sm-5">
              <h1>
                My Orders
              </h1>
            </div>
            <div className="col-sm-7">
              <div className="buttons">
                {' '}
                <Link
                  className="btn btn-primary -dark-red py-2 mb-2 mr-3 active rounded"
                  to="#"
                >
                  Buying
                </Link>
                {' '}
                <Link
                  className="btn btn-outline-primary -dark-red py-2 mb-2 ml-2 inactive rounded"
                  to="/Panel/Seller"
                >
                  Selling
                </Link>
                {' '}
              </div>
            </div>
          </div>
        </div>
        <div className="row rental-timeline">
          <div className="col-lg-12">
            <div className="dashboard-no-data text-center text-uppercase">
              <h5 className="mb-4">
                Once you start making purchases,
                <br />
                They will be accessible here.
              </h5>
              {' '}
              <Link
                className="btn btn-primary -dark-red px-5"
                to="/collections/newarrivals"
              >
                View New Arrivals
              </Link>
              {' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    aria-labelledby="exampleModalCenterTitle"
    className="modal default-modal tap-to-close-modal fade connect-bank-account"
    data-controller="tap-to-close-modal"
    id="connect-my-bank-account"
    role="dialog"
    tabIndex="-1"
  >
    <div
      className="modal-dialog modal-dialog-centered"
      role="document"
    >
      {' '}
      <span
        className="tap-to-close desktop-hide"
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
            {' '}
            <span aria-hidden="true">
              X
            </span>
            {' '}
          </button>
        </div>
        <div className="modal-body pb-5 px-md-5 mx-sm-0 mx-md-4">
          <h5 className="modal-title text-center mb-3 text-capitalize">
            Connect Your Bank Account
          </h5>
          <p className="text-center or-separator px-2 mb-4">
            In order to proceed, please securely connect your bank account by pressing the button below. The process shouldn't take longer than a few minutes.
          </p>
          {' '}
          <Link
            className="btn btn-primary btn-block -dark-red mt-2"
            data-action="click->dashboard--connect-bank-account#request"
            data-connect-bank-url="/payout_providers"
            data-controller="dashboard--connect-bank-account"
            data-dashboard--connect-bank-account-clicked="false"
            to="#"
          >
            Connect my bank account
          </Link>
          {' '}
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

export default Buyer;
