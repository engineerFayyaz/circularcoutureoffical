import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";
import { Link } from "react-router-dom";
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
      <DashboardSidebar/>
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
                <Link
                  className="btn btn-primary -dark-red d-block mx-auto"
                  to="/collections/newarrival"
                >
                  FIND AN ITEM
                </Link>
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
