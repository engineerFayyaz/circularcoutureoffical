import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const ReferFriend = () =>{
    return (
        <>
        <TopHeader />
        <div className="main-container no-overflow-x pt-0 -with-cta-banner">
  <div className="w-100">
    <div className="careers-page">
      <div className="marketing-grid">
        <div className="column align-self-center">
          <div className="careers-header text-center">
            <h1 className="header mb-2 mb-md-5">
            Refer A Friend,<br />
              <span className="circular-couture-font-logo">
              Share AU$10 Credit
              </span>
            </h1>
           
            <p className="description mb-2">
            We love it when women lift each other up. Refer a friend to put a tenner in their CIRCULAR pocket. When they make their first rental, the favour will be returned.
            </p>
           
            {' '}
            <a
              className="btn btn-primary -dark-red cta"
              href="/Panel/Referral"
            >
              My REFERRALS
            </a>
            {' '}
          </div>
        </div>
        <div className="column">
          <div className="refer-a-friend-image">
            {' '}
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
export default ReferFriend;