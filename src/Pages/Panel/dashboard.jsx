import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";

const Dashboard = () =>{

    return (
        <>
        <TopHeader />
        <div className="main-container -with-cta-banner">
  <div className="dashboard-layout">
    <DashboardSidebar/>
    <div className="second-section dashboard-page">
      <div
        className="dashboard-header"
        data-controller="user-dashboard"
      >
        <div className="mobile-only">
          <div className="row px-1 mb-3">
            <div className="col-4">
              <span className="xl-span">
                {' '}Dashboard{' '}
              </span>
            </div>
          </div>
        </div>
        <div className="row mx-1">
          <div className="col-12 bg-white p-3">
            <div className="row">
              <div className="col-12">
                <span className="large-span">
                  Welcome back, shahid 👋
                </span>
              </div>
              <div className="col-12 text-uppercase">
                <div className="row current-user-stats mt-2">
                  <div className="col-12">
                    <span>
                      Member Since 2024
                    </span>
                    <br className="d-sm-none" />
                  </div>
                  <div className="col-12 mt-4">
                    <span className="user-actions">
                      {' '}There’s nothing to catch up on today so why not{' '}
                      <a
                        className="span-link"
                        href="collections/new_arrivals"
                      >
                        find your next rental
                      </a>
                      ?{' '}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 mx-1">
          <div className="col-lg-6 p-0 pr-lg-3">
            <div className="bg-white p-4">
              <turbo-frame
                complete=""
                id="lending_statistics_empty_state_copy"
                loading="lazy"
                src="https://www.circular-couturecollective.com/dashboard/statistics/lending_statistics_empty_state_copy"
              >
                <div
                  className="position-absolute text-uppercase my-5 mx-auto blur-content text-center"
                  data-user-dashboard-target="lenderStatisticsEmptyStateCopy"
                >
                  <span>
                    {' '}Start lending by listing{' '}
                    <br />
                    your wardrobe{' '}
                    <a
                      className="blur-content-link"
                      href="/Panel/listing"
                      target="_top"
                    >
                      here
                    </a>
                  </span>
                </div>
              </turbo-frame>
              <div className="row">
                <div className="col-12">
                  <span className="large-span">
                    Lending Statistics
                  </span>
                </div>
              </div>
              <div className="row text-uppercase my-4">
                <turbo-frame
                  class="col-6"
                  complete=""
                  id="lender_rating"
                  loading="lazy"
                  src="https://www.circular-couturecollective.com/dashboard/statistics/lender_rating"
                >
                  <div className="row">
                    <div
                      className="col-12 blur"
                      data-empty-state="true"
                      data-statistic-section="lending"
                      data-user-dashboard-target="tooltipMessage"
                    >
                      <span className="large-span">
                        <img
                          className="star-dimension"
                          src="https://res.cloudinary.com/dcaptnlz3/image/asset/icon-star-98fb9f2b8eeb7209a81bc30d414fec87"
                        />
                        {' '}0.0{' '}
                      </span>
                      <br />
                      <span className="gray-span">
                        Lender Rating
                      </span>
                    </div>
                  </div>
                </turbo-frame>
                <turbo-frame
                  class="col-6"
                  complete=""
                  id="response_rate"
                  loading="lazy"
                  src="https://www.circular-couturecollective.com/dashboard/statistics/response_rate"
                >
                  <div className="row">
                    <div
                      className="col-12 blur"
                      data-empty-state="true"
                      data-statistic-section="lending"
                      data-user-dashboard-target="tooltipMessage"
                    >
                      <span className="large-span">
                        {' '}0%{' '}
                        <img
                          className="question-mark-dimension"
                          src="https://res.cloudinary.com/dcaptnlz3/image/asset/question-mark-dasboard-52437c4a2cab9daadf2b29311feae461"
                        />
                      </span>
                      <br />
                      <span className="gray-span">
                        Response Rate
                      </span>
                    </div>
                  </div>
                </turbo-frame>
              </div>
              <div className="row text-uppercase">
                <turbo-frame
                  class="col-6"
                  complete=""
                  id="total_earnings"
                  loading="lazy"
                  src="https://www.circular-couturecollective.com/dashboard/statistics/total_earnings"
                >
                  <div className="row">
                    <div
                      className="col-12 blur"
                      data-empty-state="true"
                      data-statistic-section="lending"
                      data-user-dashboard-target="tooltipMessage"
                    >
                      <span className="large-span">
                        AU$0.00
                      </span>
                      <br />
                      <span className="gray-span">
                        Total Earnings
                      </span>
                    </div>
                  </div>
                </turbo-frame>
                <turbo-frame
                  class="col-6"
                  complete=""
                  id="total_completed_rental_as_lender"
                  loading="lazy"
                  src="https://www.circular-couturecollective.com/dashboard/statistics/total_completed_rental_as_lender"
                >
                  <div className="row">
                    <div
                      className="col-12 blur"
                      data-empty-state="true"
                      data-statistic-section="lending"
                      data-user-dashboard-target="tooltipMessage"
                    >
                      <span className="large-span">
                        0
                      </span>
                      <br />
                      <span className="gray-span">
                        Total Rentals
                      </span>
                    </div>
                  </div>
                </turbo-frame>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-0 pl-lg-3 mt-4 mt-lg-0">
            <div className="bg-white p-4">
              <turbo-frame
                complete=""
                id="renting_statistics_empty_state_copy"
                loading="lazy"
                src="https://www.circular-couturecollective.com/dashboard/statistics/renting_statistics_empty_state_copy"
              >
                <div
                  className="position-absolute text-uppercase my-5 mx-auto blur-content text-center"
                  data-user-dashboard-target="renterStatisticsEmptyStateCopy"
                >
                  <span>
                    {' '}Start renting by browsing{' '}
                    <br />
                    our new arrivals{' '}
                    <a
                      className="blur-content-link"
                      href="collections/new_arrivals"
                      target="_top"
                    >
                      here
                    </a>
                  </span>
                </div>
              </turbo-frame>
              <div className="row">
                <div className="col-12">
                  <span className="large-span">
                    Renting Statistics
                  </span>
                </div>
              </div>
              <div className="row text-uppercase my-4">
                <turbo-frame
                  class="col-6"
                  complete=""
                  id="renter_rating"
                  loading="lazy"
                  src="https://www.circular-couturecollective.com/dashboard/statistics/renter_rating"
                >
                  <div className="row">
                    <div
                      className="col-12 blur"
                      data-empty-state="true"
                      data-statistic-section="renting"
                      data-user-dashboard-target="tooltipMessage"
                    >
                      <span className="large-span">
                        <img
                          className="star-dimension"
                          src="https://res.cloudinary.com/dcaptnlz3/image/asset/icon-star-98fb9f2b8eeb7209a81bc30d414fec87"
                        />
                        {' '}0.0{' '}
                      </span>
                      <br />
                      <span className="gray-span">
                        Renter Rating
                      </span>
                    </div>
                  </div>
                </turbo-frame>
                <turbo-frame
                  class="col-6"
                  complete=""
                  id="total_renter_reviews"
                  loading="lazy"
                  src="https://www.circular-couturecollective.com/dashboard/statistics/total_renter_reviews"
                >
                  <div className="row">
                    <div
                      className="col-12 blur"
                      data-empty-state="true"
                      data-statistic-section="renting"
                      data-user-dashboard-target="tooltipMessage"
                    >
                      <span className="large-span">
                        0
                      </span>
                      <br />
                      <span className="gray-span">
                        Total Reviews
                      </span>
                    </div>
                  </div>
                </turbo-frame>
              </div>
              <div className="row text-uppercase">
                <turbo-frame
                  class="col-6"
                  complete=""
                  id="money_saved"
                  loading="lazy"
                  src="https://www.circular-couturecollective.com/dashboard/statistics/money_saved"
                >
                  <div className="row">
                    <div
                      className="col-12 blur"
                      data-empty-state="true"
                      data-statistic-section="renting"
                      data-user-dashboard-target="tooltipMessage"
                    >
                      <span className="large-span">
                        {' '}AU$0.00{' '}
                        <img
                          className="question-mark-dimension ml-1"
                          src="https://res.cloudinary.com/dcaptnlz3/image/asset/question-mark-dasboard-52437c4a2cab9daadf2b29311feae461"
                        />
                      </span>
                      <br />
                      <span className="gray-span">
                        Money Saved
                      </span>
                    </div>
                  </div>
                </turbo-frame>
                <turbo-frame
                  class="col-6"
                  complete=""
                  id="total_kg_of_co2e_saved"
                  loading="lazy"
                  src="https://www.circular-couturecollective.com/dashboard/statistics/total_kg_of_co2e_saved"
                >
                  <div className="row">
                    <div
                      className="col-12 blur"
                      data-empty-state="true"
                      data-statistic-section="renting"
                      data-user-dashboard-target="tooltipMessage"
                    >
                      <span className="large-span">
                        <img
                          className="star-dimension"
                          src="https://res.cloudinary.com/dcaptnlz3/image/asset/icon-feather-sun-20c42f9baa29ec1b9770639930b52ff5"
                        />
                        {' '}0.0{' '}
                        <img
                          className="question-mark-dimension ml-1"
                          src="https://res.cloudinary.com/dcaptnlz3/image/asset/question-mark-dasboard-52437c4a2cab9daadf2b29311feae461"
                        />
                      </span>
                      <br />
                      <span className="gray-span text-nowrap">
                        KG OF CO{' '}
                        <sub>
                          2
                        </sub>
                        <span className="text-lowercase">
                          e
                        </span>
                        {' '}SAVED{' '}
                      </span>
                    </div>
                  </div>
                </turbo-frame>
              </div>
            </div>
          </div>
        </div>
        <turbo-frame
          complete=""
          id="stripe_total_paid_out_to_date"
          loading="lazy"
          src="https://www.circular-couturecollective.com/dashboard/statistics/stripe_total_paid_out_to_date"
        />
        <div className="row mt-4 mx-1">
          <div className="col-12 p-0">
            <div className="bg-white p-4">
              <div className="row">
                <div className="col-12">
                  <span className="large-span">
                    Give AU$10, Get AU$10 🤑
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mt-3">
                  <p className="referral-description">
                    {' '}Invite friends and get AU$10 off selected pieces when each friend{' '}
                    <br />
                    completes their first rental. Your friend also gets AU$10 off!{' '}
                  </p>
                </div>
              </div>
              <div
                className="row desktop-referral"
                data-controller="copy-text"
                data-copy-text-amount-value="AU$10"
              >
                <div className="form-group col-md-7 col-xl-6 referrals-form">
                  <input
                    className="form-control input input-icon -link referral-link"
                    data-target="copy-text.inputTag"
                    defaultValue="https://www.circular-couturecollective.com/r/shahid-u"
                    readOnly
                  />
                </div>
                <div className="form-group col-md-2 align-self-end text-right text-md-left">
                  <button
                    className="btn btn-primary copy-btn mb-1"
                    data-action="copy-text#copyReferralLink"
                    data-target="copy-text.button"
                    type="submit"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  className="mobile-referral component referral-share-button button primary d-none"
                  data-action="click->referral-share-button-component#show"
                  data-controller="referral-share-button-component"
                  data-referral-share-button-component-text-value="Psst... join me on circular-couture and we'll both get AU$10 off our next order! 💕 "
                  data-referral-share-button-component-title-value="circular-couture"
                  data-referral-share-button-component-url-value="https://www.circular-couturecollective.com/r/shahid-u"
                >
                  <div className="share-button d-flex align-items-center">
                    <div className="title">
                      REFER NOW
                    </div>
                  </div>
                </button>
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

export default Dashboard;
