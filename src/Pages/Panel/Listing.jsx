import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";
import { Link } from "react-router-dom";
const Listing = () =>{

    return (
        <>
        <TopHeader />
        <div className="main-container -with-cta-banner">
  <div className="dashboard-layout">
    <DashboardSidebar/>
    <div
      className="second-section"
      data-controller="wardrobe"
    >
      <div className="dashboard-header">
        <div className="row">
          <div className="col-5 col-sm-3">
            <h1>
              Wardrobe
            </h1>
          </div>
          <div className="col-7 col-sm-9">
            <div
              className="buttons"
              id="wardrobe_buttons"
            >
              <Link
                className="btn btn-primary -dark-red py-2 mb-2 ml-2 desktop-only"
                to="/ListingNew"
              >
                List a new item
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="accordion dashboard-accordion "
            id="accordionItems"
          >
            <div className="card border-0 bg-circular-couture-transparent">
              <div
                aria-labelledby="headingItems"
                className="collapse position-relative show bg-circular-couture-transparent"
                data-parent="#accordionItems"
                id="collapseItems"
              >
                <div className="card-body p-0">
                  <div className="dashboard-no-data text-center text-uppercase">
                    <h5 className="mb-4">
                      Listing your item couldn't be easier...{' '}
                      <br />
                      Why not try it out?{' '}
                    </h5>
                    <Link
                      className="btn btn-primary -dark-red px-5"
                      to="/ListingNew"
                    >
                      LIST A NEW ITEM
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
  <div id="pause_wardrobe_dates_modal_wrapper" />
  <div
    aria-hidden="true"
    aria-labelledby="exampleModalCenterTitle"
    className="modal fade default-modal tap-to-close-modal"
    id="paused_wardrobe_modal"
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
                    {' '}Pause Wardrobe{' '}
                  </h5>
                </div>
                <div className="col-12 text-right">
                  <p className="text-center or-separator px-2 mb-4">
                    {' '}You have set dates on when to put your wardrobe on hold. This means that other members are unable to rent any of your listings. You can resume your wardrobe at any time by clicking on 'RESUME MY WARDROBE' in your wardrobe. Please note that active or pending rental requests are not affected by this, so you will still need to fulfil, approve or deny them!{' '}
                  </p>
                </div>
                <div className="col-lg-12 text-uppercase text-center">
                  <Link
                    className="pb-1 footer-link"
                    data-dismiss="modal"
                    to="#"
                  >
                    Close
                  </Link>
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
    id="resumed_wardrobe_modal"
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
                    {' '}Resume Wardrobe{' '}
                  </h5>
                </div>
                <div className="col-12 text-right">
                  <p className="text-center or-separator px-2 mb-4">
                    {' '}We have resumed your wardrobe. This means that other members are now able to rent any of your listings. You can pause your wardrobe at any time by clicking on 'PAUSE MY WARDROBE' in your wardrobe.{' '}
                  </p>
                </div>
                <div className="col-lg-12 text-uppercase text-center">
                  <Link
                    className="pb-1 footer-link"
                    data-dismiss="modal"
                    to="#"
                  >
                    Close
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
        <EmailSubscription />
        <Footer />
        </>
    )
}

export default Listing;
