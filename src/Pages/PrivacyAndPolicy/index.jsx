import React from "react";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";

const PrrivacyAndPolicy =()=>{
    return(
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
                                        <span itemProp="name">Privacy</span>
                                        <meta itemProp="position" content={2} />
                                    </li>
                                </ul>
                            </div>
                            <div className="regular-content">
                                <h1>Privacy</h1>
                                <p>- Updated September, 2021</p>
                                <p>
                                    This following document sets forth the Privacy Policy for the{" "}
                                    <em>All The Dresses</em>
                                    website, <em>https://allthedresses.com.au/</em>.
                                </p>
                                <p>
                                    <em>All The Dresses</em> is committed to providing you with the best
                                    possible customer service experience. <em>All The Dresses</em> is
                                    bound by the Privacy Act 1988 (Cth), which sets out a number of
                                    principles concerning the privacy of individuals.
                                </p>
                                <h3 id="toc-collection-of-your-personal-information">
                                    Collection of your personal information
                                </h3>
                                <p>
                                    There are many aspects of the site which can be viewed without
                                    providing personal information, however, for purchases and access to{" "}
                                    <em>All The Dresses</em> customer support features, you are required
                                    to submit personally identifiable information. This may include but
                                    is not limited to your name, email address, postal address, phone
                                    number and password.
                                </p>
                                <h3 id="toc-sharing-of-your-personal-information">
                                    Sharing of your personal information
                                </h3>
                                <p>
                                    We may occasionally hire other companies to provide services on our
                                    behalf, including but not limited to handling customer support
                                    enquiries, processing transactions or customer freight shipping.
                                    Those companies will be permitted to obtain only the personal
                                    information they need to deliver the service.{" "}
                                    <em>All The Dresses</em> takes reasonable steps to ensure that these
                                    organisations are bound by confidentiality and privacy obligations
                                    in relation to the protection of your personal information.
                                </p>
                                <h3 id="toc-use-of-your-personal-information">
                                    Use of your personal information
                                </h3>
                                <p>
                                    For each visitor to reach the site, we expressively collect the
                                    following non-personally identifiable information, including but not
                                    limited to browser type, version and language, operating system,
                                    pages viewed while browsing the Site, page access times and
                                    referring website address. This collected information is used solely
                                    internally for the purpose of gauging visitor traffic, trends and
                                    delivering personalized content to you while you are at this Site.
                                </p>
                                <p>
                                    From time to time, we may use customer information for new,
                                    unanticipated uses not previously disclosed in our privacy notice.
                                    If our information practices change at some time in the future we
                                    will use for these new purposes only, data collected from the time
                                    of the policy change forward will adhere to our updated practices.
                                </p>
                                <h3 id="toc-changes-to-this-privacy-policy">
                                    Changes to this Privacy Policy
                                </h3>
                                <p>
                                    <em>All The Dresses</em> reserves the right to make amendments to
                                    this Privacy Policy at any time. If you have objections to the
                                    Privacy Policy, you should not access or use the Site.
                                </p>
                                <h3 id="toc-accessing-your-personal-information">
                                    Accessing Your Personal Information
                                </h3>
                                <p>
                                    You have a right to access your personal information, subject to
                                    exceptions allowed by law. If you would like to do so,{" "}
                                    <a href="customer-service.html">please let us know</a>. You may be
                                    required to put your request in writing for security reasons.{" "}
                                    <em>All The Dresses</em> reserves the right to charge a fee for
                                    searching for, and providing access to, your information on a per
                                    request basis.
                                </p>
                                <h3 id="toc-deleting-your-information">
                                    Deleting Your Personal Information
                                </h3>
                                <p>
                                    You may request to have all your personal data deleted by{" "}
                                    <a href="customer-service.html">
                                        contacting our customer service team
                                    </a>
                                    . If you make this request, all personally identifiable data will be
                                    deleted from our systems within 3 business days. All The Dresses
                                    will retain data about orders placed for accounting record-keeping
                                    purposes, but your email address, name, addresses, phone number and
                                    all other personal information will be permanently removed, such
                                    that it is not possible to connect any order data back to you.
                                </p>
                                <p>
                                    Any data obtained from, or linking you to, a social network will
                                    also be removed. This includes any Facebook account details which
                                    have been stored if you used Facebook Login to create and sign in to
                                    your All The Dresses account.
                                </p>
                                <h3 id="toc-contacting-us">Contacting us</h3>
                                <p>
                                    <em>All The Dresses</em> welcomes your comments regarding this
                                    Privacy Policy. If you have any questions about this Privacy Policy
                                    and would like further information, please contact us by any of the
                                    following means.
                                </p>
                                <p>
                                    E-mail: via our <a href="contact.html">Contact</a> page.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="vue-exposed-methods" />
                </div>
                {/* .page__main-content */}
                <div id="vue-search-desktop" />
            </div>

            <Footer />
        </>
    )
};
export default PrrivacyAndPolicy