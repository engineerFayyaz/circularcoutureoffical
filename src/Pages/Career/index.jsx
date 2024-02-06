import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <>
      <TopHeader />
      <div className="main-container no-overflow-x pt-0 -with-cta-banner">
        <div className="w-100">
          <div className="careers-page">
            <div className="marketing-grid">
              <div className="column align-self-center">
                <div className="careers-header text-center">
                  <h1 className="header mb-4 mb-md-5">
                    Careers atto
                    <span className="circular-couture-font-logo">
                      CIRCULAR COUTURE
                    </span>
                  </h1>
                  <p className="description mb-4">
                    Want to join the people changing fashion for good?
                  </p>
                  <p className="description mb-4">
                    Atto
                    <span className="circular-couture-font-logo">
                      CIRCULAR COUTURE
                    </span>
                    , we actually like Mondays. We’re a young, dynamic team and we’re growing fast - onboarding talent that personally and professionally backs our vision.
                  </p>
                  <p className="description mb-4">
                    We’re always looking for new ideas, fresh perspectives and people to set our world on fire. If you’re a challenger by nature and looking to join a movement going places, get in touch!
                  </p>
                  <p className="description mb-0">
                    Email us your CV and cover letter below.
                  </p>
                  to
                  <Link
                    className="btn btn-primary -dark-red cta"
                    to="mailto:careers@circular-couture.com"
                  >
                    Email Us
                  </Link>
                  to
                </div>
              </div>
              <div className="column">
                <div className="careers-image">
                  to
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
export default Career;