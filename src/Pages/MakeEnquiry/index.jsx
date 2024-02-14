import React from "react";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";


const MakeEnquiry = () => {
  return (

    <>
      <TopHeader />
      <div className="page__content ">
        <div className="page__main-content" id="mainContent">
          <div className="basic-page">
            <div className="container">
              {/* BREADCRUMBS*/}
              <div className="breadcrumbs">
                <ul
                  itemScope=""
                  itemType="http://schema.org/BreadcrumbList"
                  className="breadcrumbs__list"
                >
                  <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                  >
                    <a href="index.html" itemProp="item">
                      <span itemProp="name">Home</span>
                    </a>
                    <meta itemProp="position" content={1} />
                  </li>
                  <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                  >
                    <span itemProp="name">Customer Service</span>
                    <meta itemProp="position" content={2} />
                  </li>
                </ul>
              </div>
              <h1>Customer Service</h1>
              <div className="regular-content" style={{ marginBottom: 45 }}>
                <p>Please choose from one of the options below:</p>
                <ul>
                  <li>
                    <a href="return-request.html">
                      Return for an issue with fit or suitability
                    </a>
                  </li>
                  <li>
                    <a href="return-request.html">
                      Return for items that have been delivered to you but could not
                      be worn due to a snap COVID-19 lockdown
                    </a>
                  </li>
                  <li>
                    <a href="#enquiry">
                      Cancellations due to events cancelled/postponed because of
                      COVID-19 lockdowns or restrictions
                    </a>{" "}
                    (use the form below)
                  </li>
                  <li>
                    <a href="#enquiry">All other enquiries</a> (use the form below)
                  </li>
                </ul>
              </div>
              <div className="regular-content">
                <a name="enquiry" />
                <h2>Product or Order Enquiry</h2>
                <p>
                  Got an enquiry about an existing order, or a new order you're
                  wanting to place? Fill in the form below and we'll get back to you
                  as soon as we can!
                </p>
                <p>
                  <strong>
                    IMPORTANT: Enquiries with an existing order number are
                    prioritised, so please make sure it is entered and entered
                    correctly if your enquiry relates to an existing order. Enter the
                    number without any text before or after it, e.g. Don't enter
                    "Order #IUH3829SH92K", enter just "#IUH3829SH92K".
                  </strong>
                </p>
                <p>&nbsp;</p>
              </div>
              <div
                id="vue-customer-service"
                data-value-binding='{"customerName":"","emailAddress":"","orderNumber":"","productId":"","subject":"","message":"","reason":"","enquiryType":"pre-order"}'
              ></div>
              <br />
              <br />
              <p className="p-small regular-text">
                This page can also be found via{" "}
                <a href="https://bit.ly/atdhelp">bit.ly/atdhelp</a>.
              </p>
            </div>
          </div>
        </div>
        <div id="vue-exposed-methods" />
      </div>

      <Footer />
    </>
  );
}

export default MakeEnquiry;