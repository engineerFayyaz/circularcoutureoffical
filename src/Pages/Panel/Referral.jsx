import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";

const Referral = () =>{

    return (
        <>
        <TopHeader />
        <div className="main-container -with-cta-banner">
  <div className="dashboard-layout">
   <DashboardSidebar/>
    <div className="second-section referrals-page">
      <div className="dashboard-header">
        <h1>
          Give AU$10, Get AU$10
        </h1>
        <div className="row">
          <div className="col-md-10 col-lg-8">
            <p className="description mb-4">
              Introduce a friend to{' '}
              <span className="circular-couture-font-logo">
                CIRCULAR COUTURE
              </span>
              {' '}and they’ll get AU$10 off their first rental. Once they’ve transacted, you’ll get AU$10 to spend on your next rental too!{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="desktop-referral referrals-form-section w-100">
        <form
          className="referrals-form mt-md-4"
          data-controller="copy-text"
          data-copy-text-amount-value="AU$10"
        >
          <div
            className="form-row"
            id="referral_desktop"
          >
            <div className="form-group col-md-7 col-xl-6 pr-md-3">
              <label
                className="form-label"
                htmlFor=""
              >
                Share your link
              </label>
              <input
                className="form-control input input-icon -link"
                data-target="copy-text.inputTag"
                defaultValue="https://www.circular-couturecollective.com/r/shahid-u"
                id=""
                readOnly
              />
            </div>
            <div className="form-group col-md-2 align-self-end text-right text-md-left">
              <button
                className="btn btn-primary -dark-red button"
                data-action="copy-text#copyReferralLink"
                data-target="copy-text.button"
                type="submit"
              >
                Copy
              </button>
            </div>
            <div className="col-md-10 col-lg-8">
              <ul className="list-inline mt-1 mb-0 mb-md-1">
                <li className="list-inline-item mr-4">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.circular-couturecollective.com/r/shahid-u"
                    target="_blank"
                  >
                    <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/fb-circle-logo-169974ddc71180805838f926bf9f4f99.svg" />
                  </a>
                </li>
                <li className="list-inline-item mr-4">
                  <a
                    href="https://twitter.com/intent/tweet?text=Psst...%20join%20me%20on%20CIRCULAR COUTURE%20and%20we%27ll%20both%20get%20AU$10%20off%20our%20next%20order!%20%F0%9F%92%95%20https://www.circular-couturecollective.com/r/shahid-u"
                    target="_blank"
                  >
                    <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/twitter-circle-logo-c84c28f9787c1f04fc53c10833c338d5.svg" />
                  </a>
                </li>
                <li className="list-inline-item mr-4">
                  <a
                    href="https://api.whatsapp.com/send?text=Psst...%20join%20me%20on%20CIRCULAR COUTURE%20and%20we'll%20both%20get%20AU$10%20off%20our%20next%20order!%20%F0%9F%92%95%20%23%7Broot_url%7Dr%2F%23%7Bcurrent_user.slug%7D"
                    target="_blank"
                  >
                    <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/watsapp-circle-logo-c69876ffc3e6f321f7672cc16158ae37.svg" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.circular-couturecollective.com/r/shahid-u"
                    target="_blank"
                  >
                    <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/linkedin-circle-logo-466bf26e29e6d42e753aa85ee55358fc.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </form>
        <div
          data-controller="referrals"
          data-target="referrals.referralInvitationForm"
        >
          <form
            acceptCharset="UTF-8"
            action="/referrals/shahid-u?referrer_id=shahid-u"
            className="referrals-form mt-4"
            data-action="ajax:success->referrals#successfulSentInvitationEmail"
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
              defaultValue="YGIT2M1b1bONexmcUJ1TsczQpkvugwYK83DAJkJoZIH7tqjjVcMy/OkkV5fV2haXjJnIEmyszi2WUoq+JIgCWw=="
              name="authenticity_token"
              type="hidden"
            />
            <div className="form-row">
              <div className="form-group col-md-7 col-xl-6 pr-md-3">
                <label
                  className="form-label"
                  htmlFor="user_referral_email"
                >
                  Other sharing options
                </label>
                <input
                  autoComplete="email"
                  className="form-control input"
                  id="user_referral_email"
                  name="user[referral_email]"
                  placeholder="Enter an email…"
                  type="email"
                />
              </div>
              <div className="form-group col-md-2 align-self-end text-right text-md-left">
                <input
                  className="btn btn-primary -dark-red button"
                  data-disable-with="Invite"
                  name="commit"
                  type="submit"
                  value="Invite"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-md-2 align-self-end text-right text-md-left ">
        <button
          className="mobile-referral component referral-share-button button primary d-none"
          data-action="click->referral-share-button-component#show"
          data-controller="referral-share-button-component"
          data-referral-share-button-component-text-value="Psst... join me on CIRCULAR COUTURE and we'll both get AU$10 off our next order! 💕 "
          data-referral-share-button-component-title-value="CIRCULAR COUTURE"
          data-referral-share-button-component-url-value="https://www.circular-couturecollective.com/r/shahid-u"
        >
          <div className="share-button d-flex align-items-center">
            <div className="title">
              REFER NOW
            </div>
          </div>
        </button>
      </div>
      <div className="referrals-numbers w-100">
        <h2 className="second-header mt-4 mb-3">
          Referral Numbers
        </h2>
        <div className="row">
          <div className="col-md-9 col-xl-11">
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="card referrals-card">
                  <div className="card-body body text-center">
                    <h5 className="card-title title mb-3">
                      friends referred
                    </h5>
                    <p className="value mb-0">
                      0
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card referrals-card">
                  <div className="card-body body text-center">
                    <h5 className="card-title title mb-3">
                      Friends who rented
                    </h5>
                    <p className="value mb-0">
                      0
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card referrals-card">
                  <div className="card-body body text-center">
                    <h5 className="card-title title mb-3">
                      Credit earned
                    </h5>
                    <p className="value mb-0">
                      AU$0
                    </p>
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
        <EmailSubscription />
        <Footer />
        </>
    )
}

export default Referral;
