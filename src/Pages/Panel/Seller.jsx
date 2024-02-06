import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";
import { Link } from "react-router-dom";
const Seller = () =>{

    return (
        <>
        <TopHeader />
    
        <div>
  <div className="main-container -with-cta-banner">
    <div className="dashboard-layout">
      <DashboardSidebar/>
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
                  className="btn btn-outline-primary -dark-red py-2 mb-2 mr-3  rounded"
                  to="/Panel/Buyer"
                >
                  Buying
                </Link>
                {' '}
                <Link
                  className="btn btn-primary -dark-red py-2 mb-2 ml-2  rounded"
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

export default Seller;
