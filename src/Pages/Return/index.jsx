import React from "react";
// import '../../../src/stylesheet.css';
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";


const Return = () => {
    return (
        <>
            <TopHeader />
            <>
                {/* Hello world */}
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
                                        <a href="/" itemProp="item">
                                            <span itemProp="name">Home</span>
                                        </a>
                                        <meta itemProp="position" content={1} />
                                    </li>
                                    <li
                                        itemProp="itemListElement"
                                        itemScope=""
                                        itemType="http://schema.org/ListItem"
                                    >
                                        <span itemProp="name">Returns &amp; Refunds</span>
                                        <meta itemProp="position" content={2} />
                                    </li>{" "}
                                </ul>
                            </div>{" "}
                            <h1>Returns and Refunds</h1>
                            <div className="regular-content">
                                <p>
                                    Select one of the links below to jump to that section on the page:
                                </p>
                                <ul>
                                    <li>
                                        <a href="#rentals">Rentals</a>
                                        <ul>
                                            <li>
                                                <a href="#refunds">Refunds</a>
                                            </li>
                                            <li>
                                                <a href="#returns">Returns</a>
                                            </li>
                                            <li>
                                                <a href="#cancellations">Cancellations</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#purchases-new">Purchases (New Items)</a>
                                        <ul>
                                            <li>
                                                <a href="#faulty">Faulty or damaged items</a>
                                            </li>
                                            <li>
                                                <a href="#change-of-mind">Change of mind</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#ex-rentals">Purchases (Ex-Rentals)</a>
                                    </li>
                                </ul>
                                <p />
                                <p>&nbsp;</p>
                                <hr />
                                <a name="rentals" />
                                <h2>Rentals</h2>
                                <a name="refunds" />
                                <h3>Refunds</h3>
                                <p>
                                    You will be entitled to a full refund, including the cost of
                                    postage, in any of the following circumstances:
                                </p>
                                <ul>
                                    <li>
                                        The item arrives in a condition that is not considered acceptable.
                                    </li>
                                    <li>The incorrect item is sent to you.</li>
                                    <li>
                                        The item sent to you is vastly different to the item described on
                                        our website.
                                    </li>
                                    <li>
                                        The item arrives too late for you to wear it to your planned
                                        occasion<sup style={{ color: "red", fontWeight: 600 }}>[1]</sup>{" "}
                                        <strong>(conditions apply, see below)</strong>.
                                    </li>
                                </ul>
                                <p />
                                <p>
                                    In all of the above circumstances, you forfeit your right to a
                                    refund if the item(s) are worn (try-ons are fine!). If the item(s)
                                    are worn, but you still feel one of the above reasons has caused
                                    significant inconvenience, a partial refund will be at the
                                    discretion of All The Dresses.
                                </p>
                                <p>
                                    Please let us know ASAP if you'd like to request a refund for one of
                                    the reasons listed above. Requests for a refund should be received
                                    within 24 hours after the package was delivered to you to be
                                    considered.
                                </p>
                                <p>
                                    You may need to wait until the item is returned back to All The
                                    Dresses or the relevant rental partner before a refund can be
                                    approved. This especially applies to issues with condition, such as
                                    faults, damage or stains. The item will need to be assessed prior to
                                    the refund being approved and processed.
                                </p>
                                <p>
                                    <strong>
                                        <sup style={{ color: "red", fontWeight: 600 }}>[1]</sup> Last
                                        Minute Orders
                                    </strong>
                                </p>
                                <p>
                                    If you placed your booking less than 3 full business days prior to
                                    your selected delivery date, your order will be considered a{" "}
                                    <strong>"last-minute order"</strong>. In this case, instead of a
                                    full refund, you will be given the option of either:
                                </p>
                                <ul>
                                    <li>
                                        a full credit note which can be used for items provided by the
                                        same ATD rental partner; or
                                    </li>
                                    <li>
                                        a refund for the full amount paid minus $30 to cover two-way
                                        express postage expenses.
                                    </li>
                                </ul>
                                <p>
                                    To determine whether it is a last-minute order, a cut-off time of
                                    12pm Sydney/Melbourne time is used. For example, if you are choosing
                                    a Friday delivery date, your order would be considered a last-minute
                                    order if it is placed anytime after 12pm on Tuesday. You will be
                                    advised if your order is considered a last-minute order in the terms
                                    popup displayed before checkout, as well as in your order
                                    confirmation email.
                                </p>
                                <p>
                                    Our rental partners are challenged with Australia Post's lack of
                                    delivery guarantees at the moment, but they do an incredible job of
                                    making sure things arrive on time. It is however made a lot more
                                    difficult if bookings are made at very short notice, which is why
                                    this condition exists.
                                </p>
                                <p>
                                    If we don't believe there is a high likelihood of the item arriving
                                    in time, it either won't be sent or we will be in touch with you to
                                    give you the option of accepting the risk. If it isn't sent, you
                                    will get a full refund.
                                </p>
                                <br />
                                <a name="returns" />
                                <h3>Returns</h3>
                                <p>
                                    <strong>Unless specified</strong> in the Terms &amp; Conditions
                                    offered by the particular All The Dresses rental company partner
                                    providing an item,{" "}
                                    <strong>
                                        returns for change of mind or an unsuitable size/fit are not
                                        offered
                                    </strong>
                                    .
                                </p>
                                <p>
                                    <a href="#rental-partner-terms-info" js-popup="">
                                        How do I find out the Terms &amp; Conditions for a particular
                                        item/ATD rental partner?
                                    </a>
                                </p>
                                <p>
                                    It is your responsibility to ensure you are booking the correct size
                                    and style, though we will always try to help with guidance if you
                                    want to get in touch with us before booking.
                                </p>
                                <p>
                                    In cases where the rental partner you have chosen to book from does
                                    allow a return for change of mind or unsuitable fit:
                                </p>
                                <ul>
                                    <li>
                                        Contact us as soon as possible (preferably the same day as
                                        receiving the item)
                                    </li>
                                    <li>
                                        Return the item(s) in the provided postage-paid satchel at
                                        earliest convenience
                                    </li>
                                    <li>
                                        Item(s) must be returned in similar condition to how you received
                                        it. Do NOT attempt to wash or clean it after trying it on - minor
                                        marks are OK!
                                    </li>
                                </ul>
                                <p>
                                    Unless there are exceptional circumstances, requests for a return
                                    that are received more than 24 hours after an item is delivered to
                                    you will not be considered.
                                </p>
                                <p>
                                    If you've done all the right things, we'll send you a credit note
                                    that can be used on our website. The amount of credit will be
                                    specified in the rental partner's terms. For example, the amount may
                                    be reduced by an admin or cancellation fee, which is usually to
                                    cover the cost of two-way postage, cleaning if required and other
                                    costs associated with fulfilling the order.
                                </p>
                                <p>
                                    The rental partner's terms may also specify that the credit note can
                                    only be used on items provided by the same rental partner.
                                </p>
                                <p>
                                    The credit note is not redeemable for cash and will expire after 6
                                    months. After using the credit note on an order, any amount
                                    remaining can still be used on a future order(s).
                                </p>
                                <br />
                                <a name="cancellations" />
                                <h3>Cancellations</h3>
                                <p>
                                    For cancellations on all rented items, you will be entitled to a
                                    full refund if:
                                </p>
                                <ul>
                                    <li>
                                        Your cancellation request is received in the{" "}
                                        <strong>first 24 hours after placing your order</strong>, as long
                                        as it is still more than 72 hours from your booking start date and
                                        your package hasn't yet been dispatched, OR
                                    </li>
                                    <li>
                                        Your cancellation request is received{" "}
                                        <strong>21 or more days prior</strong> to your booking start date.
                                    </li>
                                </ul>
                                <p>
                                    If your cancellation request is received 14 or more days prior to
                                    your booking start date (but less than 21 days as per above), you
                                    will be entitled to a credit note for the full amount paid including
                                    postage. The credit note can be used to rent or buy any item on the
                                    All The Dresses website and will have a 6 month expiry.
                                </p>
                                <p>
                                    For cancellations outside these conditions, please refer to the{" "}
                                    <a href="#rental-partner-terms-info" js-popup="">
                                        terms of the rental partner offering the item
                                    </a>
                                    . Some may allow cancellations at shorter notice, and some will
                                    allow a cancellation right up until dispatch of your package.
                                </p>
                                <p>
                                    In these cases, a credit note will be offered, but the amount may be
                                    reduced by a cancellation fee. Any fees will be specified in the
                                    rental partner terms. The rental partner's terms may also specify
                                    that the credit note can only be used on items provided by that
                                    rental partner only.
                                </p>
                                <p>&nbsp;</p>
                                <p>
                                    For detailed information about all terms &amp; conditions that apply
                                    to rentals on All The Dresses, check out our{" "}
                                    <a href="/rental-agreement">Rental Agreement</a>.
                                </p>
                                <hr style={{ marginTop: 80, marginBottom: 20 }} />
                                <a name="purchases-new" />
                                <h2>Purchases (New Items)</h2>
                                <p>
                                    Our policy for return of purchased items lasts 14 days. If 14 days
                                    have passed since the date you received your item(s), unfortunately
                                    we can’t offer you a refund or exchange.
                                </p>
                                <br />
                                <a name="faulty" />
                                <h3>Faulty or damaged items</h3>
                                <p>
                                    If an item purchased via All The Dresses is faulty or damaged,
                                    please take a photo, send it to us for review and let us know
                                    whether you would prefer a refund or replacement. In some cases we
                                    will ask for you to post the item back to us for inspection.
                                </p>
                                <p>
                                    If your return is approved, a refund would be for the full amount of
                                    the item(s), including the original postage cost. If we've requested
                                    that the item be posted from you back to us, we will also reimburse
                                    that cost.
                                </p>
                                <p>
                                    We can't guarantee that a replacement will be available, so if this
                                    is your preference and we aren't able to fulfill it, a full refund
                                    will be given.
                                </p>
                                <br />
                                <a name="change-of-mind" />
                                <h3>Change of mind</h3>
                                <p>
                                    A refund or exchange is offered on all purchases through the All The
                                    Dresses website, except for the following item types:
                                </p>
                                <ul>
                                    <li>Intimate products</li>
                                    <li>Gift vouchers</li>
                                </ul>
                                <p>
                                    If you are returning an item because of a change of mind, or any
                                    other reason, please get in touch with us for approval and
                                    instructions on how to post back the item. Postage to return the
                                    item back to us will be at your expense.
                                </p>
                                <p>
                                    We require a receipt or proof of purchase. Your item must be unused
                                    and in the same condition that you received it and must also be in
                                    the original packaging.
                                </p>
                                <p>
                                    Refunds won't be processed until the items have made their way back
                                    to us. It may then take up to 3 business days to process the refund
                                    and then 1-3 days before the refund can be seen in your bank
                                    statement.
                                </p>
                                <p>
                                    The refund amount will be for the item cost only. If you paid a
                                    postage fee on your original order for the item, this will not be
                                    refunded.
                                </p>
                                <hr style={{ marginTop: 80, marginBottom: 20 }} />
                                <a name="ex-rentals" />
                                <h2>Purchases (Ex-Rentals)</h2>
                                <p>
                                    No returns or refunds are offered for ex-rental or 2nd-hand items
                                    purchased on All The Dresses.
                                </p>
                                <p>
                                    If you feel the item is significantly different to what was
                                    described, please <a href="">let us know</a> within 24 hours of
                                    delivery and we will take it under consideration. No returns are
                                    offered for issues with size or fit.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div data-v-3eb17432="" className="exposed-methods-container" />
                </div>
            </>

            <Footer />
        </>

    );


}
export default Return;