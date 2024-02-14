import React from "react";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
// import Return from "../Return";


const ATDReward = () => {
    return(
        <>
            <TopHeader />
            <div className="page__content ">
                <div className="page__main-content" id="mainContent">
                    <div className="loyalty-earn mb-50">
                        <div className="container container--940">
                            {/* BREADCRUMBS*/}
                            <div className="breadcrumbs">
                                <ul className="breadcrumbs__list">
                                    <li>
                                        <a href="#" itemProp="item">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <span>ATD Rewards</span>
                                    </li>
                                </ul>
                            </div>
                            <h2 className="h2-title">ATD Rewards</h2>
                            <div className="loyalty__hero">
                                <img
                                    src="https://res.cloudinary.com/allthedresses/image/upload/ar_1:1,c_fill,f_auto,h_460,w_460/v1/misc/atd-rewards-4-1_txyqq4"
                                    srcSet="https://res.cloudinary.com/allthedresses/ar_1:1,c_fill,h_360,w_360/v1/misc/atd-rewards-4-1_txyqq4 360w, https://res.cloudinary.com/allthedresses/ar_1:1,c_fill,h_460,w_460/v1/misc/atd-rewards-4-1_txyqq4 460w, https://res.cloudinary.com/allthedresses/ar_1:1,c_fill,h_720,w_720/v1/misc/atd-rewards-4-1_txyqq4 720w, https://res.cloudinary.com/allthedresses/ar_1:1,c_fill,h_920,w_920/v1/misc/atd-rewards-4-1_txyqq4 920w"
                                />
                            </div>
                            <div className="mb-50">
                                <p className="p-main">
                                    Earn points for every dollar you spend at All The Dresses, then use
                                    those points to claim gift vouchers &amp; discounts!
                                </p>
                                <p className="p-main">
                                    As you reach certain points totals, you'll also move up in status
                                    tier, which gets you exclusives, special gifts and more points per
                                    dollar spent.
                                </p>
                                <p className="p-main">
                                    ATD Rewards points go to one total, no matter which ATD rental
                                    partner you book from, meaning you can earn enough to redeem for
                                    something worthwhile faster! And when it comes to redeeming for free
                                    or discounted rentals, you aren't limited - you can rent from any of
                                    the 40+ rental company partners on our website (over 15,000 items).
                                </p>
                                <p className="p-main">
                                    With hire fees guaranteed to be the same or cheaper than booking
                                    direct, why would you hire your outfit anywhere else?
                                </p>
                            </div>
                            <div className="loyalty-earn__options mb-30">
                                <div className="loyalty-earn__options__option">
                                    <div className="inner">
                                        <h3>Rent</h3>
                                        <p className="p-main">
                                            Rent items and receive 1 point for each dollar spent. As you go
                                            up in status tier, you'll earn even more points per dollar
                                            spent!
                                        </p>
                                        <div className="points">Up to 2 points per $</div>
                                        <a href="all-hire.html" className="btn btn-primary btn--block">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                                <div className="loyalty-earn__options__option">
                                    <div className="inner">
                                        <h3>Birthday</h3>
                                        <p className="p-main">
                                            Save your birthday against your profile and we'll give you free
                                            points as well as sending you a discount code to use that month
                                        </p>
                                        <div className="points">50 points</div>
                                        <a href="login40aa.html" className="btn btn-primary btn--block">
                                            Go To My Account
                                        </a>
                                    </div>
                                </div>
                                <div className="loyalty-earn__options__option">
                                    <div className="inner">
                                        <h3>Follow Us</h3>
                                        <p className="p-main">Follow ATD on Instagram or Facebook</p>
                                        <div className="points "  style={{marginTop:"97px"}}>30 points</div>
                                        <a
                                            className="btn btn-primary btn--block"
                                            href="#followUs"
                                            js-popup=""
                                        >
                                            More Info
                                        </a>
                                    </div>
                                </div>
                                <div className="loyalty-earn__options__option">
                                    <div className="inner">
                                        <h3>Tag Us</h3>
                                        <p className="p-main">
                                            Tag Us in your Instagram photos (public accounts only)
                                        </p>
                                        <div className="points" style={{marginTop:"48px"}}>50 points</div>
                                        <a
                                            className="btn btn-primary btn--block"
                                            href="#tagUs"
                                            js-popup=""
                                        >
                                            Let Us Know
                                        </a>
                                    </div>
                                </div>
                                <div className="loyalty-earn__options__option">
                                    <div className="inner">
                                        <h3>Share Photos</h3>
                                        <p className="p-main">
                                            Share your photos with us to help the ATD community with more
                                            imagery and size selection
                                        </p>
                                        <div className="points">50 points</div>
                                        <a
                                            className="btn btn-primary btn--block"
                                            href="#sharePhotos"
                                            js-popup=""
                                        >
                                            Share Now
                                        </a>
                                    </div>
                                </div>
                                <div className="loyalty-earn__options__option">
                                    {/* class: coming-soon */}
                                    <div className="inner">
                                        <h3>Refer A Friend</h3>
                                        <p className="p-main">
                                            Refer a friend and get points the first time they make a
                                            booking. They'll also get a 10% discount on the order!
                                        </p>
                                        <div className="points">125 points</div>
                                        <a
                                            className="btn btn-primary btn--block"
                                            href="#referFriend"
                                            js-popup=""
                                        >
                                            Share Now
                                        </a>
                                        {/*<span class="btn btn-primary btn--block" disabled="disabled"><strong>Coming Soon</strong></span>*/}
                                    </div>
                                </div>
                            </div>
                            <p className="p-main">
                                Points can be redeemed for gift vouchers, discounts and products
                                within the My Account section. Some of the current redemptions on
                                offer include:
                            </p>
                            <div className="regular-content">
                                <ul>
                                    <li>
                                        <strong>5% site-wide discount code</strong> - 250 points
                                    </li>
                                    <li>
                                        <strong>10% site-wide discount code</strong> - 500 points
                                    </li>
                                    <li>
                                        <strong>$20 ATD Gift Voucher</strong> - 550 points
                                    </li>
                                    <li>
                                        <strong>$50 ATD Gift Voucher</strong> - 1100 points
                                    </li>
                                    <li>
                                        <strong>Boob Tape, Lift-Ups or Invisilifts</strong> - 500 points
                                        (coming soon)
                                    </li>
                                </ul>
                            </div>
                            <p />
                            <p className="p-small">
                                *The redemptions on offer and the points required to redeem them is
                                subject to change at any time.
                            </p>
                        </div>
                    </div>
                    <div className="loyalty-tiers bg-gray c-black">
                        <div className="container container--940">
                            <h2 className="h2-title">Reward Status Tiers</h2>
                            <p className="p-main">
                                As you earn more ATD Rewards points you can move up a status tier. The
                                biggest advantage to this is that higher tiers earn more points per
                                dollar spent, meaning you can earn enough to use on rewards faster!
                            </p>
                            <p className="p-main">
                                Your tier is based on the number of points <strong>earned</strong> in
                                the previous 12 months, so you won't drop a tier by redeeming any of
                                your points!
                            </p>
                            <div className="loyalty__tiers">
                                <div className="loyalty__tier">
                                    <div className="inner bronze">
                                        <h3>Bronze</h3>
                                        <p>0-500 points earned</p>
                                        <div className="loyalty__tier__features">
                                            <ul>
                                                <li>Earn 1 point per dollar spent</li>
                                                <li>
                                                    Redeem your points for gift vouchers, discounts and products
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="loyalty__tier">
                                    <div className="inner silver">
                                        <h3>Silver</h3>
                                        <p>500+ points earned</p>
                                        <div className="loyalty__tier__features">
                                            <ul>
                                                <li>Earn 1.5 points per dollar spent</li>
                                                <li>Priority access to new arrivals</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="loyalty__tier">
                                    <div className="inner gold">
                                        <h3>Gold</h3>
                                        <p>1000+ points earned</p>
                                        <div className="loyalty__tier__features">
                                            <ul>
                                                <li>Earn 2 points per dollar spent</li>
                                                <li>
                                                    5% discount on <strong>every</strong> order
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="loyalty-faq mb-20">
                        <div className="container container--940">
                            <h2 className="h2-title">ATD Rewards FAQ</h2>
                            <p className="p-main mb-30">
                                Find answers to some of the most common questions about our rewards
                                program below. If it's not answered here, please just{" "}
                                <a href="customer-service.html">get in touch!</a>
                            </p>
                            <div className="faq">
                                <div className="accordion js-accordion">
                                    <div className="accordion__element">
                                        <div className="accordion__toggler">
                                            <div className="accordion__title">
                                                How do I register for ATD Rewards?
                                            </div>
                                        </div>
                                        <div className="accordion__content regular-content">
                                            <p>
                                                Creating an account on the All The Dresses website
                                                automatically registers you for ATD Rewards. If you don't have
                                                an account yet, sign up by{" "}
                                                <a href="#usersignup" js-popup="">
                                                    clicking here
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion__element">
                                        <div className="accordion__toggler">
                                            <div className="accordion__title">How do I claim points?</div>
                                        </div>
                                        <div className="accordion__content regular-content">
                                            <p>
                                                Points are automatically applied to your account when you
                                                place a new order. Even if you hadn't registered an account at
                                                the time you made your booking, the points for previous orders
                                                will automatically get added to your account when you
                                                register, provided you use the same e-mail address.
                                            </p>
                                            <p>
                                                All other claims, such as for following us on social channels
                                                or sharing photos with us, can be claimed on this page by
                                                clicking on the relevant claim box above.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion__element">
                                        <div className="accordion__toggler">
                                            <div className="accordion__title">
                                                How do I redeem points for rewards?
                                            </div>
                                        </div>
                                        <div className="accordion__content regular-content">
                                            <p>
                                                You can use any points that have an Approved status. Once
                                                logged in, if you go to the{" "}
                                                <a target="_blank" href="login40aa.html">
                                                    My Account
                                                </a>{" "}
                                                area, then go to{" "}
                                                <a target="_blank" href="login40aa.html">
                                                    ATD Rewards
                                                </a>
                                                , a list of rewards will be displayed and can be redeemed
                                                instantly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion__element">
                                        <div className="accordion__toggler">
                                            <div className="accordion__title">
                                                When are points 'Approved'?
                                            </div>
                                        </div>
                                        <div className="accordion__content regular-content">
                                            <p>
                                                Most points claims will get added to your points total with a
                                                'Pending' status to begin with. This means something else
                                                needs to occur before they are 'Approved', meaning they can be
                                                used to redeem rewards.
                                            </p>
                                            <p>
                                                Points that have been claimed as a result of placing an order
                                                won't update to an Approved status until the booking has taken
                                                place and completed successfully. We can't approve points or
                                                allow them to be redeemed before this because the booking may
                                                be cancelled, meaning the points for that order will also get
                                                cancelled.
                                            </p>
                                            <p>
                                                Other points claims, such as for following our social
                                                channels, may need a manual verification by one of our
                                                customer service team members before they can be approved.
                                                This will usually take between 1 and 5 business days.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion__element">
                                        <div className="accordion__toggler">
                                            <div className="accordion__title">
                                                Could redeeming rewards with my points make me drop to a lower
                                                status tier?
                                            </div>
                                        </div>
                                        <div className="accordion__content regular-content">
                                            <p>
                                                No! Your status tier is based on points earned only.
                                                Redemptions do not affect this. Note that status tier is
                                                determined by points earned in the previous 12 months.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="accordion__element">
                                        <div className="accordion__toggler">
                                            <div className="accordion__title">
                                                Can I transfer my points to another account?
                                            </div>
                                        </div>
                                        <div className="accordion__content regular-content">
                                            <p>
                                                No, you can't transfer points to another account (e.g. a
                                                friend or family member).
                                            </p>
                                            <p>
                                                If you've changed e-mail address and have needed to create a
                                                new ATD account, we will consider transferring your points to
                                                the new account, provided adequate evidence of you owning the
                                                old account is supplied.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="regular-content mt-50">
                                    <p className="p-small" style={{ fontStyle: "italic" }}>
                                        ATD Reward points have no monetary value and can't be exchanged
                                        for cash. All The Dresses reserves the right to change the number
                                        of points required to redeem offers, the number of points awarded
                                        for different events, the tier structure and bands, and any other
                                        details related to ATD Rewards, without notice or approval. The
                                        program can also be closed at any time, which may mean that
                                        customers are unable to use any points earned. There is no
                                        recourse for any loss of value.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal" id="followUs">
                        <div className="popup-dialog popup-dialog--550">
                            <div className="popup-dialog__close">
                                <svg className="ico ico-mono-close">
                                    <use xlinkHref="img/sprite-mono.svg#ico-mono-close" />
                                </svg>
                            </div>
                            <div className="popup-dialog__h100">
                                <div className="popup-dialog__head">
                                    <div className="popup-dialog__title">Follow Us</div>
                                </div>
                                <div className="popup-dialog__scroller">
                                    <p className="p-main">
                                        Follow us on either{" "}
                                        <a href="https://instagram.com/allthedressesau">Instagram</a> OR{" "}
                                        <a href="https://facebook.com/allthedressesau">Facebook</a> (or
                                        both), then complete the form below to let us know. Once we've
                                        verified, the points will be approved!
                                    </p>
                                    <div className="mt-30 mb-30">
                                        <p className="p-main" style={{ textAlign: "center" }}>
                                            You need to{" "}
                                            <a href="#userlogin" js-popup="">
                                                Log In
                                            </a>{" "}
                                            before making a claim for points.
                                            <br />
                                            After logging in, refresh this page.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n                    #platformGroups-error {\n                        color: red;\n                    }\n                "
                        }}
                    />
                    <div className="modal" id="tagUs">
                        <div className="popup-dialog popup-dialog--550">
                            <div className="popup-dialog__close">
                                <svg className="ico ico-mono-close">
                                    <use xlinkHref="img/sprite-mono.svg#ico-mono-close" />
                                </svg>
                            </div>
                            <div className="popup-dialog__h100">
                                <div className="popup-dialog__head">
                                    <div className="popup-dialog__title">Tag Us</div>
                                </div>
                                <div className="popup-dialog__scroller">
                                    <p className="p-main">
                                        Post a photo on your Instagram feed and tag @allthedressesau
                                    </p>
                                    <p className="p-main">
                                        Provide a link to the post below and your points will be confirmed
                                        once we've verified it. Unfortunately this is only available if
                                        your Instagram profile is set to public.
                                    </p>
                                    <div className="mt-30 mb-30">
                                        <p className="p-main" style={{ textAlign: "center" }}>
                                            You need to{" "}
                                            <a href="#userlogin" js-popup="">
                                                Log In
                                            </a>{" "}
                                            before making a claim for points.
                                            <br />
                                            After logging in, refresh this page.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal" id="sharePhotos">
                        <div className="popup-dialog popup-dialog--550">
                            <div className="popup-dialog__close">
                                <svg className="ico ico-mono-close">
                                    <use xlinkHref="img/sprite-mono.svg#ico-mono-close" />
                                </svg>
                            </div>
                            <div className="popup-dialog__h100">
                                <div className="popup-dialog__head">
                                    <div className="popup-dialog__title">Share Photos</div>
                                </div>
                                <div className="popup-dialog__scroller">
                                    <p className="p-main">
                                        Send us some high-res photos of you wearing items hired from All
                                        The Dresses and we'll add 50 points to your ATD Rewards total. You
                                        can make a new claim for each order placed.
                                    </p>
                                    <p className="p-main">
                                        Your photos may be displayed in the Customer Photos list on the
                                        product page of the item you hired. This helps the ATD community
                                        by showing how the item fits on different body types as well as
                                        giving ideas on how to style it.
                                    </p>
                                    <p className="p-main">
                                        We might post them on our Instagram too. If you'd like to be
                                        tagged, just let us know your Instagram handle. If you'd rather we
                                        don't share them on Instagram just let us know as well.
                                    </p>
                                    <p className="p-main">
                                        Email your photos to
                                        <strong>customerphotos@allthedresses.com.au</strong> and{" "}
                                        <strong>reference your ATD order number</strong> in the email.
                                    </p>
                                    <p className="p-main mb-30">
                                        Please send your photos as <strong>attachments</strong> on the
                                        email, rather than embedding them into the email message body.
                                        Photos should be high-resolution (i.e. original quality), not
                                        screenshots from Instagram or another social platform. In those
                                        cases it's better to just tag @allthedressesau and submit a 'Tag
                                        Us' points claim.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal" id="referFriend">
                        <div className="popup-dialog popup-dialog--550">
                            <div className="popup-dialog__close">
                                <svg className="ico ico-mono-close">
                                    <use xlinkHref="img/sprite-mono.svg#ico-mono-close" />
                                </svg>
                            </div>
                            <div className="popup-dialog__h100">
                                <div className="popup-dialog__head">
                                    <div className="popup-dialog__title">Refer a Friend</div>
                                </div>
                                <div className="popup-dialog__scroller">
                                    <p className="p-main">
                                        Refer a friend to All The Dresses and you'll receive 125 points
                                        when they make their first booking. Not only that, they'll get 10%
                                        off their first order!
                                    </p>
                                    <p className="p-main">
                                        You can either provide them your referral link below or the
                                        referral code for them to apply at checkout. You'll earn points
                                        once they place their first order, and they'll be Approved and
                                        available for you to use once that booking has been completed. It
                                        must be their first order with All The Dresses to qualify.
                                    </p>
                                    <div className="mt-30 mb-30">
                                        <p className="p-main" style={{ textAlign: "center" }}>
                                            You need to{" "}
                                            <a href="#userlogin" js-popup="">
                                                Log In
                                            </a>{" "}
                                            to be provided your referral link &amp; code.
                                            <br />
                                            After logging in, refresh this page.
                                        </p>
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
export default ATDReward;