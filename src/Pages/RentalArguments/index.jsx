import React from "react";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";



const RentalArguments = () => {
    return (
        <>
            <TopHeader />
            <div className="page__content ">
                <div className="page__main-content" id="mainContent">
                    <div className="faq">
                        <div className="container container--940">
                            <div className="faq__breadcrumbs">
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
                                            <span itemProp="name">Rental Agreement</span>
                                            <meta itemProp="position" content={2} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="faq__wrapper">
                                <div className="faq__sidebar">
                                    <div
                                        className="faq__sidebar-wrapper js-sticky"
                                        data-offset-top={190}
                                        data-stop="<769"
                                    >
                                        <div className="faq__sidebar-nav c-black regular-content">
                                            <h3>Jump to:</h3>
                                            <ul>
                                                <li>
                                                    <a href="#contract">Contract</a>
                                                </li>
                                                <li>
                                                    <a href="#payment">Payment</a>
                                                </li>
                                                <li>
                                                    <a href="#identification">Identification</a>
                                                </li>
                                                <li>
                                                    <a href="#title">Title to Rental Items</a>
                                                </li>
                                                <li>
                                                    <a href="#booking-period">Booking Period</a>
                                                </li>
                                                <li>
                                                    <a href="#delivery">Delivery</a>
                                                </li>
                                                <li>
                                                    <a href="#incorrect-items">Incorrect or Faulty Items</a>
                                                </li>
                                                <li>
                                                    <a href="#fit-issues">Issues with Fit or Appearance</a>
                                                </li>
                                                <li>
                                                    <a href="#customer-cancellations">Customer Cancellations</a>
                                                </li>
                                                <li>
                                                    <a href="#atd-cancellations">
                                                        Cancellations by All The Dresses
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#return-of-items">Return of Items</a>
                                                </li>
                                                <li>
                                                    <a href="#cleaning">Cleaning</a>
                                                </li>
                                                <li>
                                                    <a href="#damages">Damage or Loss</a>
                                                </li>
                                                <li>
                                                    <a href="#late-return">Late Return</a>
                                                </li>
                                                <li>
                                                    <a href="#liability">Limitation of Liability</a>
                                                </li>
                                                <li>
                                                    <a href="#refund-definition">Definition of Refund</a>
                                                </li>
                                                <li>
                                                    <a href="#covid">COVID-19 Policy</a>
                                                </li>
                                                <li>
                                                    <a href="#changes-to-agreement">Changes to Agreement</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq__main">
                                    <h1 className="h2-title">Rental Agreement</h1>
                                    <div className="regular-content">
                                        <p>
                                            Below is our Rental Agreement. This applies to all rental items
                                            booked through the All The Dresses website, unless otherwise
                                            specified.
                                        </p>
                                        <p>
                                            The majority of items available for rent through All The Dresses
                                            are provided and fulfilled by one of our rental partners. Our
                                            rental partners are specialist designer clothing hire businesses
                                            across Australia.
                                        </p>
                                        <p>
                                            <strong>
                                                In some cases, the rental partner will have{" "}
                                                <a href="#rental-partner-terms-info" js-popup="">
                                                    specific terms
                                                </a>{" "}
                                                that add to what is described below.
                                            </strong>{" "}
                                            These terms are displayed when viewing any item on our website,
                                            as well as on our Bag and Checkout pages. You will always be
                                            asked to read and accept these before proceeding through to
                                            Checkout.
                                        </p>
                                        <div className="faq__nav--mobile">
                                            <h3>Jump to:</h3>
                                            <ul>
                                                <li>
                                                    <a href="#contract">Contract</a>
                                                </li>
                                                <li>
                                                    <a href="#payment">Payment</a>
                                                </li>
                                                <li>
                                                    <a href="#identification">Identification</a>
                                                </li>
                                                <li>
                                                    <a href="#title">Title to Rental Items</a>
                                                </li>
                                                <li>
                                                    <a href="#booking-period">Booking Period</a>
                                                </li>
                                                <li>
                                                    <a href="#delivery">Delivery</a>
                                                </li>
                                                <li>
                                                    <a href="#incorrect-items">Incorrect or Faulty Items</a>
                                                </li>
                                                <li>
                                                    <a href="#fit-issues">Issues with Fit or Appearance</a>
                                                </li>
                                                <li>
                                                    <a href="#customer-cancellations">Customer Cancellations</a>
                                                </li>
                                                <li>
                                                    <a href="#atd-cancellations">
                                                        Cancellations by All The Dresses
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#return-of-items">Return of Items</a>
                                                </li>
                                                <li>
                                                    <a href="#cleaning">Cleaning</a>
                                                </li>
                                                <li>
                                                    <a href="#damages">Damage or Loss</a>
                                                </li>
                                                <li>
                                                    <a href="#late-return">Late Return</a>
                                                </li>
                                                <li>
                                                    <a href="#liability">Limitation of Liability</a>
                                                </li>
                                                <li>
                                                    <a href="#refund-definition">Definition of Refund</a>
                                                </li>
                                                <li>
                                                    <a href="#covid">COVID-19 Policy</a>
                                                </li>
                                                <li>
                                                    <a href="#changes-to-agreement">Changes to Agreement</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <a name="contract" />
                                        <h2>Contract</h2>
                                        <p>
                                            By placing an order on the All The Dresses website that contains
                                            any items that are for rent, you are entering a legally binding
                                            contract between yourself, All The Dresses and the All The
                                            Dresses rental partners that provide the items within your
                                            order.
                                        </p>
                                        <p>
                                            The terms on this page are specific to the rental of an item
                                            from one of our rental partners through the All The Dresses
                                            website. For more generic terms that apply to the use of the All
                                            The Dresses website, please see our{" "}
                                            <a href="terms.html">Website Terms of Use</a> page.
                                        </p>
                                        <a name="payment" />
                                        <h2>Payment</h2>
                                        <p>
                                            By entering this agreement, you authorise All The Dresses to
                                            charge the selected payment method according to the terms
                                            outlined in this agreement. You certify that you are authorised
                                            to use this credit card/account and you agree not to dispute the
                                            payment with your provider if All The Dresses fulfils its
                                            responsibilities in providing the rental item(s).
                                        </p>
                                        <p>
                                            You also authorise All The Dresses to charge the supplied
                                            payment method for any additional fees as outlined in this
                                            agreement (such as damages or late return fees). If a charge
                                            against the supplied payment method cannot be made, we will
                                            provide you with an invoice for the fees which you agree to pay
                                            within 5 working days.
                                        </p>
                                        <p>
                                            If for some reason, your payment for an order is reversed or
                                            rejected, you agree to pay the outstanding amount within 48
                                            hours of demand. Failure to do this will result in immediate
                                            cancellation of the booking. If the item(s) have already been
                                            dispatched you will still be liable for the full amount.
                                        </p>
                                        <p>
                                            All The Dresses reserves the right to take all steps necessary
                                            to recoup any amounts owing as per this agreement, including the
                                            use of debt collection agencies and taking legal action. This
                                            may increase the amount owed by the customer, to cover the costs
                                            of these services.
                                        </p>
                                        <a name="identification" />
                                        <h2>Identification</h2>
                                        <p>
                                            In some cases, after you've placed an order via our website, you
                                            may be asked for a passport, driver's license or other forms of
                                            identification. If this isn't provided, All The Dresses and the
                                            rental partner reserves the right to refuse the booking.
                                        </p>
                                        <a name="title" />
                                        <h2>Title to Rental Items</h2>
                                        <p>
                                            At all times, the rental items are and remain the property of
                                            the rental partner. The rental partner (or All The Dresses on
                                            their behalf) reserves the right to retrieve the item at any
                                            time. No modifications or alterations can be made to items
                                            without the explicit approval of All The Dresses or the rental
                                            partner that has provided you with the item.
                                        </p>
                                        <a name="booking-period" />
                                        <h2>Booking Period</h2>
                                        <p>
                                            The rental period you have selected for your rental is
                                            'inclusive'. For example, a 4-day rental period can mean that
                                            your item will arrive by Friday and you will post it back on
                                            Monday. In this example, both the Friday and the Monday are
                                            included in the 4-day period.
                                        </p>
                                        <a name="delivery" />
                                        <h2>Delivery</h2>
                                        <p>
                                            When booking an item on All The Dresses, you are asked to select
                                            a<strong>"Delivery Date"</strong>. You should select a Delivery
                                            Date which is 1 or 2 days <strong>before</strong> the day you
                                            intend to wear the item(s).
                                        </p>
                                        <p>
                                            The item(s) will be sent in order to arrive to the address
                                            provided on or before your chosen Delivery Date (sometimes
                                            referred to as the "<em>Arrives by</em>" date). All items are
                                            shipped express.{" "}
                                        </p>
                                        <p>
                                            You will receive a tracking number to your supplied email
                                            address when the items have been dispatched. If you haven't
                                            received this 1 day prior to your selected Delivery Date, feel
                                            free to <a href="customer-service.html">get in touch</a>.
                                        </p>
                                        <p>
                                            You may request that an item be left in a safe place without
                                            signature on delivery, but it is up to the specific rental
                                            partner whether this is done. It is their valuable stock and
                                            they may not want it left for someone to steal, so there is no
                                            promise that this request will be passed on to Australia Post or
                                            any other providers used.
                                        </p>
                                        <p>
                                            Even if this request is passed on to Australia Post, it is still
                                            not a guarantee that it will be left without signature.
                                            Australia Post makes this decision at the time based on whether
                                            they believe it is safe to do so, and this is completely out of
                                            All The Dresses and our rental partners' control.
                                        </p>
                                        <p>
                                            In the vast majority of cases, your item(s) will arrive on or
                                            before your Delivery Date. Due to unforeseen circumstances and
                                            factors outside our control, usually related to issues with
                                            Australia Post, it may arrive late.
                                        </p>
                                        <p>
                                            If the item arrives too late for you to wear it to your event,
                                            and it is returned unworn, you will be provided with a refund or
                                            credit note per below:
                                        </p>
                                        <ul>
                                            <li>
                                                If your order was placed 3 or more full business days prior to
                                                your chosen delivery date, it will be a full refund (please
                                                see <a href="#refund-definition">Definition of Refund</a>{" "}
                                                section below).
                                            </li>
                                            <li>
                                                Otherwise it will be considered a{" "}
                                                <strong>"last-minute order"</strong> and you will have the
                                                option of a full credit note or a refund minus $30 to cover
                                                two-way express postage costs.
                                            </li>
                                        </ul>
                                        <p>
                                            You will be advised if your order is considered a "last-minute
                                            order" in the terms popup displayed before checkout, as well as
                                            in your order confirmation email.
                                        </p>
                                        <p>
                                            View our{" "}
                                            <a target="_blank" href="returns.html">
                                                Returns &amp; Refunds
                                            </a>{" "}
                                            page for more detailed information.
                                        </p>
                                        <p>
                                            No refund or credit will be provided if the delivery is slightly
                                            late, but you are still able to wear it to your event.
                                        </p>
                                        <p>
                                            If your delivery fails because you have provided an incorrect or
                                            incomplete address, you will not be entitled to a refund or
                                            credit. It is your responsibility to ensure that the address you
                                            enter is accurate and complete according to Australia Post and
                                            in some cases, other postage providers. This includes providing
                                            a valid apartment/unit number, company name or any other
                                            information required for postage providers to deliver to you.
                                        </p>
                                        <a name="incorrect-items" />
                                        <h2>Incorrect or Faulty Items</h2>
                                        <p>
                                            If you open your delivered parcel to find that you have been
                                            sent the incorrect item, please{" "}
                                            <a href="customer-service.html">let us know</a>
                                            immediately. If there's enough time, we will do our best to get
                                            you a replacement so you still have something to wear.
                                        </p>
                                        <p>
                                            If you find that the item is correct, but has other issues (e.g.
                                            damage, faults or noticeable stains), please let us know within
                                            24 hours of receiving the item, and definitely prior to wearing
                                            the item.
                                        </p>
                                        <p>
                                            If you don't let us know within this timeframe, we reserve the
                                            right to refuse a refund as it will not be clear when the damage
                                            was caused or by who. You should do this even if you believe you
                                            will still wear the item, as you may be offered a discount. More
                                            importantly, it will mean you won't be blamed for the damage or
                                            charged damage fees.
                                        </p>
                                        <p>
                                            You acknowledge that the items being sent to you are not brand
                                            new and may have some signs of wear &amp; tear. A refund may not
                                            be granted if the issue is considered minor or insignificant.
                                        </p>
                                        <p>
                                            In most cases, you will need to wait for the item to be returned
                                            to the rental partner and assessed, prior to a refund being
                                            approved and processed. If approved, you will receive a full
                                            refund including any amount paid for postage.
                                        </p>
                                        <a name="fit-issues" />
                                        <h2>Issues with Fit or Appearance</h2>
                                        <p>
                                            We try to provide as much information as we can regarding the
                                            fit of the items available for hire on our website. We take no
                                            responsibility if you choose a size or item which does not fit
                                            you or does not suit you. If in doubt, please{" "}
                                            <a href="contact.html">get in touch!</a>
                                        </p>
                                        <p>
                                            <a href="#rental-partner-terms-info" js-popup="">
                                                Unless specified in the rental partner's terms
                                            </a>{" "}
                                            there will be no refund or credit offered in this circumstance.
                                            Some rental partners offer more flexible terms with regard to
                                            this, so please take note of these terms when viewing items on
                                            our website and when accepting the terms before entering
                                            Checkout.
                                        </p>
                                        <p>
                                            When you have booked from an ATD rental partner that allows a
                                            credit note for this, the offer does not apply if you have taken
                                            advantage of our{" "}
                                            <a href="backup-dress.html">Backup Dress offer</a>, unless you
                                            are returning <strong>both</strong> dresses unworn. In this
                                            case, the credit would only apply to the main dress (the more
                                            expensive one to hire) and not the discounted backup dress (the
                                            cheaper one to hire).
                                        </p>
                                        <p>
                                            If your booking entitles you to a credit note, it will be issued
                                            with a 6 month expiry. Requests to extend up to a 1 year expiry
                                            will be considered, but can't be guaranteed.
                                        </p>
                                        <a name="customer-cancellations" />
                                        <h2>Customer Cancellations</h2>
                                        <p>
                                            Cancellations are allowed in the first 24 hours after an order
                                            was first placed on All The Dresses, unless the item(s) have
                                            already been dispatched to you, or unless the cancellation
                                            request was received less than 72 hours prior to your booking
                                            start date. You will be eligible for full refund.
                                        </p>
                                        <p>
                                            Cancellations are also allowed if a cancellation request is
                                            received 21 or more days prior to your booking start date. In
                                            these cases you will be given a full refund equal to the amount
                                            paid for the booking and postage costs.
                                        </p>
                                        <p>
                                            For cancellation requests received between 14 and 21 days prior
                                            to your booking start date, you will be entitled to a credit
                                            note for the full amount paid including postage, but not a
                                            refund. The credit note can be used to rent any items on the All
                                            The Dresses website.
                                        </p>
                                        <p>
                                            Most of our rental partners will offer more flexible
                                            cancellation terms. The{" "}
                                            <a href="#rental-partner-terms-info" js-popup="">
                                                terms of the rental partner
                                            </a>
                                            which differ from the All The Dresses Rental Agreement are
                                            displayed on the product page and before entering the Checkout
                                            area of our website. You will always be asked to read the rental
                                            partner terms and click a button to accept them prior to
                                            entering the Checkout area.
                                        </p>
                                        <p>
                                            In exceptional circumstances we will consider a cancellation
                                            outside the allowances above, but reserve the right to decide.
                                            Please <a href="customer-service.html">get in touch</a> to
                                            explain your situation for our consideration.
                                        </p>
                                        <p>
                                            Unless otherwise specified, if you are entitled to a credit note
                                            for your cancellation, it will be issued with a 6 month expiry.
                                            Requests to extend up to a 1 year expiry will be considered, but
                                            can't be guaranteed.
                                        </p>
                                        <a name="atd-cancellations" />
                                        <h2>Cancellations by All The Dresses</h2>
                                        <p>
                                            All The Dresses or the rental partner providing the item may
                                            cancel your booking, for any reason. The compensation to you
                                            will be limited to the amount you paid to All The Dresses for
                                            the booking and postage. All The Dresses will not be responsible
                                            for any consequential damages that result from cancellation of
                                            the booking.
                                        </p>
                                        <p>
                                            Reasons All The Dresses may cancel your booking include, but are
                                            not limited to:
                                        </p>
                                        <ul>
                                            <li>
                                                The item is damaged by a customer that has rented the item
                                                prior to you.
                                            </li>
                                            <li>
                                                The item is lost or stolen by a customer that rented the item
                                                prior to you.
                                            </li>
                                            <li>
                                                It is deemed that it is not possible to deliver the item to
                                                you in time for your booking, due to previous late return by a
                                                customer, or for any other reason, such as postage network
                                                delays (particularly during periods of COVID-19 restrictions).
                                            </li>
                                        </ul>
                                        <p>In all cases above, you will be entitled to a full refund.</p>
                                        <a name="return-of-items" />
                                        <h2>Return of Items</h2>
                                        <p>
                                            All items rented via All The Dresses will be delivered with a
                                            prepaid Australia Post Express Post satchel for returning the
                                            item back to the rental partner. If you don't receive this,
                                            please <a href="customer-service.html">let us know</a> ASAP.
                                        </p>
                                        <p>
                                            If you lose the prepaid satchel, you will need to pay for one
                                            yourself. This must be an Australia Post{" "}
                                            <strong>Express Post</strong>
                                            satchel. <a href="customer-service.html">Get in touch</a> to let
                                            us know you've done this and include the tracking number.
                                        </p>
                                        <p>
                                            If you have rented multiple items over the same dates, from
                                            multiple ATD rental partners, please ensure that you return each
                                            item to the
                                            <strong>correct rental partner</strong>. If you send items back
                                            to the wrong location, you will be charged late fees as it can
                                            result in our rental partner having to cancel and refund the
                                            next customer's booking.
                                        </p>
                                        <p>
                                            Items should be returned over the counter at an Australia Post
                                            store or depot, on or before the specified booking return date.
                                            This will be labelled the "<strong>Return on</strong>" date
                                            during checkout and in your order confirmation email.
                                        </p>
                                        <p>
                                            If your "<strong>Return on</strong>" date falls on a Sunday or a
                                            public holiday, you may post the item on the next working day
                                            before 3pm. No late fees will apply in this instance.
                                        </p>
                                        <p>
                                            If for any reason you aren't able to attend an Australia Post
                                            store or depot to post back the item over-the-counter on the
                                            "Return on" date, you may return the parcel via a
                                            <strong>yellow</strong> Australia Post Express Post street
                                            postbox. This is at your own risk. If the{" "}
                                            <a href="#damage-or-loss" title="Lost Items Policy">
                                                parcel is lost
                                            </a>{" "}
                                            and is never scanned by Australia Post, you may be{" "}
                                            <a href="#damages" title="Lost Items Policy">
                                                liable for replacement
                                            </a>
                                            . Similarly, if the item arrives back much later than expected,
                                            the date of the first scan on the tracking may be used as the
                                            date it was posted back when calculating late fees.
                                        </p>
                                        <a name="cleaning" />
                                        <h2>Cleaning</h2>
                                        <p>
                                            We know small accidents happen, and our rental partners
                                            dry-clean all garments when they are returned after your rental.
                                            There will be no fees charged as long as stains can be removed.
                                        </p>
                                        <p>
                                            You agree that under no circumstances will you attempt to clean
                                            the rental item(s) yourself, or have them cleaned by anyone
                                            else.
                                        </p>
                                        <p>
                                            If you attempt to clean a garment and cause damage, or cause a
                                            stain to be permanent, All The Dresses reserves the right to
                                            bill you a fee up to, but not more than 120% of the full RRP of
                                            the garment. The garments available for rent on our website are
                                            often sold out in all retail stores and no longer available from
                                            the designer, which is why a charge above the RRP may apply.
                                            This fee will be on top of any amount already paid for rental or
                                            postage.
                                        </p>
                                        <p>
                                            Use of fake tan is at your discretion. If it causes permanent
                                            staining that won't come out when dry-cleaned, the damage policy
                                            below will apply.
                                        </p>
                                        <a name="damages" />
                                        <h2>Damage or Loss</h2>
                                        <p>
                                            If damage (stains, rips, etc) is observed when your garment
                                            arrives, please take photos of this and
                                            <a href="customer-service.html" target="_blank">
                                                let us know
                                            </a>{" "}
                                            right away. If you don't do this and there was no known damage
                                            prior to delivery, it may be assumed that the damage was caused
                                            by you.
                                        </p>
                                        <p>
                                            If you damage a rental item, do not attempt to repair it. If it
                                            can be easily repaired (e.g. sewing on a button, re-stitching)
                                            it will be taken care of with no additional cost to you. It's
                                            also not a problem if the garment is stained, as long as it
                                            comes out when it is dry-cleaned after you've returned the
                                            garment.
                                        </p>
                                        <p>
                                            You agree that under no circumstances will you attempt to
                                            clean/repair the rental item(s) yourself, or have them
                                            cleaned/repaired by anyone else. Do not cut, alter, iron or hem
                                            tape any item booked via All The Dresses.
                                        </p>
                                        <p>
                                            <a href="#rental-partner-terms-info" js-popup="">
                                                Unless specified by the rental partner's specific terms
                                            </a>
                                            , no damage insurance is included in the booking fee. Some
                                            partners may have an allowance for this (e.g. up to $100).
                                        </p>
                                        <p>
                                            If an item is damaged and is not covered by minor repairs as
                                            mentioned above, or insurance, you will be liable for the cost
                                            of restoring or replacing the garment. In the case the garment
                                            cannot be restored to a suitable condition, the fee charged may
                                            be up to, but not more than, 120% of the original RRP of the
                                            garment. This fee will be on top of any amount already paid for
                                            rental or postage, and the item will still need to be returned
                                            to the rental partner, regardless of the amount of damage.
                                        </p>
                                        <p>
                                            If you've lost or not returned an item, you will be liable for
                                            up to 200% of the RRP of the item.
                                        </p>
                                        <p>
                                            {" "}
                                            The items available for rent on our website are often sold out
                                            in all retail stores and no longer available from the designer.
                                            This has led to some people renting an item and not returning
                                            it, or saying it is lost, so that they are able to obtain
                                            something they want to keep. This, along with loss of earnings
                                            from potential future rentals, is why there is a fee of up to
                                            200% of RRP for lost and unreturned items.
                                        </p>
                                        <p>
                                            If an item is lost by Australia Post, then there will be no fees
                                            charged to you. This is why it is important that you return the
                                            item by posting it over-the-counter at an Australia Post office
                                            or depot.
                                        </p>
                                        <p>
                                            By doing this, the item will be scanned and there will be a
                                            record of you posting the item in their tracking system. This
                                            will not happen when you put it into a street post box, as a
                                            system record won't be created until it reaches a scanning
                                            depot, and there will be no evidence of you having posted the
                                            item, meaning you would be liable for the loss.
                                        </p>
                                        <p>
                                            By accepting this agreement, you give permission for All The
                                            Dresses to charge fees for damages or loss of an item to the
                                            payment method you used when placing your order. You will be
                                            given the option of using an alternative payment method before
                                            the charge is made.
                                        </p>
                                        <a name="late-return" />
                                        <h2>Late Return</h2>
                                        <p>
                                            If for any reason you post back the rental item(s) on a day
                                            after the “Return On” specified, late fees may apply. We will
                                            often allow a grace period of 1-2 days for this, but only if it
                                            doesn't affect a future booking for another customer. If it does
                                            affect this, late fees will almost certainly be enforced.
                                        </p>
                                        <p>
                                            The fee charged for each day late will be your rental price
                                            divided by the number of days you've rented for, up to 120% of
                                            the original RRP of the item. For example, if you selected a
                                            4-day hire and the rental fee was $100, late fees would be
                                            charged at $25 for each day late.
                                        </p>
                                        <p>
                                            By accepting this agreement, you give permission for All The
                                            Dresses to charge late fees to the payment method you used when
                                            placing your order. You will be given the option of using an
                                            alternative payment method before the charge is made.
                                        </p>
                                        <a name="liability" />
                                        <h2>Limitation of Liability</h2>
                                        <p>
                                            By accepting the rental agreement, you agree that All The
                                            Dresses and its' rental partners will not be liable for any
                                            loss, damage, costs or expenses of an indirect or consequential
                                            nature incurred or suffered by you as a result of:
                                        </p>
                                        <ul>
                                            <li>Cancellation of a rental booking</li>
                                            <li>Late delivery of a rental item</li>
                                            <li>Non-delivery of a rental item</li>
                                            <li>An issue with the quality of a delivered rental item</li>
                                        </ul>
                                        <p>
                                            This includes but is not limited to economic loss, loss of
                                            goodwill, emotional suffering, loss of opportunity or other loss
                                            of turnover, profits or business.
                                        </p>
                                        <p>
                                            All The Dresses' liability will be limited to any amount paid by
                                            the customer to All The Dresses.
                                        </p>
                                        <a name="refund-definition" />
                                        <h2>Definition of "Refund"</h2>
                                        <p>
                                            For the purposes of this agreement, a refund for an order is
                                            defined as returning back to you the initial form of payment
                                            used to place that order. If you paid for the order by
                                            credit/debit card, the funds will be returned to that card. If
                                            you paid for the order using a credit note, then you will be
                                            re-issued that credit note, with a fresh expiry date. For orders
                                            placed using a combination of multiple forms of payment, you
                                            will receive back those forms of payment in line with the
                                            amounts used to pay for the order.
                                        </p>
                                        <a name="covid" />
                                        <h2>COVID-19 Policy</h2>
                                        <p>
                                            If your event is affected by a COVID-19 lockdown, restrictions
                                            or infection, you will be eligible for a credit note to use on
                                            items from the same ATD rental partner. If we receive a
                                            cancellation request prior to any items being dispatched, the
                                            credit note will be for the full amount paid. If the item is
                                            dispatched to you, an amount will be deducted from the credit
                                            note to cover our rental partner's two-way postage expenses.
                                        </p>
                                        <p>
                                            Unfortunately, we aren't able to offer a refund unless it falls
                                            within our{" "}
                                            <a href="#customer-cancellations">
                                                standard terms for a refund
                                            </a>
                                            . Our rental partners are small businesses that have really been
                                            hit hard by COVID for most of 2020 and are now being
                                            significantly hit again. We're sure they would love to give
                                            refunds to everyone if they could but for some of our partners
                                            they would struggle to stay afloat.
                                        </p>
                                        <a name="changes-to-agreement" />
                                        <h2>Changes to the Rental Agreement</h2>
                                        <p>
                                            All The Dresses reserves the right to change the Rental
                                            Agreement and/or rental partners' terms at any time, so it is
                                            important you review and accept them each time you place an
                                            order with All The Dresses.
                                        </p>
                                        <p>
                                            The terms that apply to an order will be in accordance with the
                                            Rental Agreement and rental partner's terms as they stood on the
                                            date the order was placed.
                                        </p>
                                        {/* Last updated 17 April 2021 */}
                                    </div>
                                </div>
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
    );
}
export default RentalArguments;