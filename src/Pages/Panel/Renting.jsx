import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";
import { Link } from "react-router-dom";
const Renting = () =>{

    return (
        <>
        <TopHeader />
        <div className="main-container -with-cta-banner">
  <div className="dashboard-layout">
    <DashboardSidebar/>
    <div className="second-section">
      <div className="dashboard-header">
        <div className="row">
          <div className="col-12">
            <h1>
              My Rentals
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-right left-button">
            <Link
              className="btn btn-outline-primary -dark-red mb-2 button-width"
              to="/Panel/Lending"
            >
              Lender View
            </Link>
          </div>
          <div className="col-6 text-left right-button">
            <Link
              className="btn btn-primary -dark-red mb-2 button-width"
              to="/renting"
            >
              Renter View
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="dashboard-no-data text-center text-uppercase">
            <h5 className="mb-4">
              Once you start Renting,{' '}
              <br />
              all your orders will be accessible here.{' '}
            </h5>
            <Link
              className="btn btn-primary -dark-red px-5"
              to="/collections/newarrival"
            >
              View New Arrivals
            </Link>
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

export default Renting;
