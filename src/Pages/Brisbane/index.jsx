import React from "react";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import EditFilter from "../../Components/EditFilter";

const Brisbane = () => {
    return (
        <>
            < TopHeader />
            <div className="page__content nobp">
                <div className="page__main-content" id="mainContent">
                    {/* plp intro*/}
                    <div className="plp-intro">
                        <div className="container">
                            <div className="plp-intro__breadcrumbs">
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
                                            <span itemProp="name">Brisbane Dress Hire</span>
                                            <meta itemProp="position" content={2} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="plp-intro__container">
                                <h1
                                    className="h2-title plp-intro__title no-image js-results-title"
                                    data-titletype="city"
                                >
                                    Brisbane Dress Hire <span className="plp-intro__search-query" />
                                </h1>
                                <div className="plp-intro__wrapper--no-image">
                                    <div className="plp-intro__text js-readmore-container">
                                        <div className="plp-intro__text-wrapper js-readmore">
                                            <div className="js-ellipsize regular-content" data-stop=">769">
                                                <p>
                                                    Being the capital of the Sunshine State, Brisbane enjoys
                                                    warm weather and a burgeoning metropolitan feel from the
                                                    CBD. Whether you're on the hunt for arts and culture at
                                                    QAGOMA or browsing the shop windows that line James Street,
                                                    you'll notice the Brisbane locals have a knack for
                                                    pulling-off the perfect mix of casual-chic. A tough
                                                    assignment when you consider what it takes to look put
                                                    together while navigating the Queensland heat.
                                                </p>
                                                <p>
                                                    The Brisbane fashion scene is newer than its counterparts
                                                    down south, but this also allows for fresh perspectives to
                                                    break through. The Young Designers Market is held regularly
                                                    in South Bank and showcases promising talent while The
                                                    Mercedes Benz Fashion Festival in Brisbane, usually held in
                                                    August each year, is known for being where new collections
                                                    of some of Australia's premier designers are revealed.
                                                </p>
                                                <p>
                                                    The great thing about all the items available for hire on
                                                    All The Dresses is that every one of them can be sent
                                                    Australia-wide!
                                                </p>
                                                <p>
                                                    Browse over 15,000 items and have your rental dress posted
                                                    direct to you in Brisbane.
                                                </p>
                                            </div>
                                        </div>
                                        <a className="plp-intro__text-link js-readmore-button" href="#">
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* .plp-intro__container */}
                        </div>
                    </div>
                    {/* plp results*/}
                    <div className="row no-gutters">
                      <EditFilter className="p-3" />


                        <div className="col-sm-12 col-md-7 col-lg-8">
                            <div className="filter-button-mobile">
                                <button
                                    className="filter-button w-100 m-0 component button tertiary"
                                    data-target="#filter_mobile_modal"
                                    data-toggle="modal"
                                    name="button"
                                    target="_top"
                                    type="submit"
                                >
                                    <div className="title">
                                        <i
                                            aria-hidden="true"
                                            className="fa-regular fa-sliders mr-2"
                                        />
                                        Filter & Sort
                                        <span data-app-search--listing-filters-target="filterAndSortCount" />
                                    </div>
                                </button>
                            </div>
                            <div
                                className="filter-bar filter-box-desktop -no-border"
                                data-controller="app-search--filter-box"
                                id="app-search--filter-box-controller"
                            >
                                <div
                                    className="row filter-boxes-wrapper m-0"
                                    data-app-search--filter-box-target="wrapper"
                                >
                                    <div className="text-right clear-all-wrapper">
                                        <Link
                                            className="clear-all d-none"
                                            data-action="click->app-search--filter-box#resetFilters"
                                            data-app-search--filter-box-target="clearAllBtn"
                                            to="#"
                                        >
                                            Clear all
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="filter-bar ml-auto"
                                    data-controller="app-search--sort-filters"
                                >
                                    <select
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                        className="dropdown-select"
                                        data-action="change->app-search--sort-filters#filterSortByPrice change->app-search--sort-filters#applyFilterChanges"
                                        id="sortFilter"
                                    >
                                        <option
                                            selected
                                            value="recently_added"
                                        >
                                            Newest
                                        </option>
                                        <option value="rental_price_low_to_high">
                                            Rental Price: Low to High
                                        </option>
                                        <option value="rental_price_high_to_low">
                                            Rental Price: High to Low
                                        </option>
                                        <option value="purchase_price_low_to_high">
                                            Buy now: Low to High
                                        </option>
                                        <option value="purchase_price_high_to_low">
                                            Buy now: High to Low
                                        </option>
                                        <option value="highest_buy_now_discount">
                                            Highest Buy Now Discount
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="container filter-result-container px-0">
                                <div
                                    className="row no-gutters mx-0"
                                    data-app-search--listing-filters-target="filterResultContainer promoSpotController"
                                    data-app-search--promo-spot-amount-value="AU$10"
                                    data-app-search--promo-spot-promo-body-value="Discover over 60,000 luxury pieces and try something you love. Minimum order value of AU$45 applies."
                                    data-app-search--promo-spot-promo-title-value="Get 15% off your first rental"
                                    data-app-search--promo-spot-user-signed-in-value="false"
                                    data-app-search--promo-spot-user-successful-rental-value="true"
                                    data-controller="app-search--promo-spot"
                                    id="filter-result-container"
                                    style={{
                                        opacity: '1',
                                        pointerEvents: 'auto'
                                    }}
                                >
                                    <div
                                        className="col-6 col-md-12 col-lg-6 col-xl-4 mb-4 mb-xl-3 item-container"
                                        data-app-search--listing-filters-target="item"
                                    >
                                        <div
                                            className="item-card2"
                                            data-action="click->app-search--listing-filters#clickThroughTracking"
                                            id="33216"
                                        >
                                            <div
                                                className="position-relative wishlist-heart-33216"
                                                data-controller="wishlisting"
                                                data-target="wishlisting.heartMainContainer"
                                            >
                                                <div className="heart-button-wrapper text-center">
                                                    <ul className="heart-button-position">
                                                        <li>
                                                            <div className="heart-counter mr-0 mr-md-2 mt-1 mt-md-0">
                                                                152
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="heart-button"
                                                                data-target="#signup-modal"
                                                                data-toggle="modal"
                                                                to="#"
                                                            >
                                                                <img
                                                                    alt="Filled Heart Button"
                                                                    className="heart-icon d-none filled-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                                                />
                                                                <img
                                                                    alt="Empty Heart Button"
                                                                    className="heart-icon empty-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/empty-heart-icon-d56bf5bf6cbfd87ebc3a94c9c7f06461.svg"
                                                                />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link
                                                className="item-link"
                                                data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                                                data-controller="google-tag-manager--enhanced-ecommerce item-card"
                                                data-google-tag-manager--enhanced-ecommerce-item-brand="Cult Gaia"
                                                data-google-tag-manager--enhanced-ecommerce-item-categories="bags"
                                                data-google-tag-manager--enhanced-ecommerce-item-colour="gold"
                                                data-google-tag-manager--enhanced-ecommerce-item-name="Nala Clutch"
                                                data-google-tag-manager--enhanced-ecommerce-item-price="40"
                                                data-google-tag-manager--enhanced-ecommerce-item-uid="6215099"
                                                to="/listings/nala-clutch"
                                                target="_blank"
                                            >
                                                <div
                                                    className="mx-auto image-wrapper position-relative"
                                                    data-action="mouseenter->item-card#showSecondImage mouseleave->item-card#showMainImage"
                                                >
                                                    <div
                                                        className="image"
                                                        data-target="item-card.firstImage"
                                                        style={{
                                                            backgroundImage: 'url(\'https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_628,w_418,x_70,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/n3xm2k4rnqpzgqhisi8mqty4cfpq\')',
                                                            opacity: '1'
                                                        }}
                                                    />
                                                    <div
                                                        className="image"
                                                        data-target="item-card.secondImage"
                                                        style={{
                                                            backgroundImage: 'url(\'https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2360,w_1573,x_6,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/1yesd00604bqczgn0910vze1oayo\')',
                                                            opacity: '0'
                                                        }}
                                                    />
                                                </div>
                                                <div className="item-details position-relative text-uppercase">
                                                    <div className="managed-tag-wrapper">
                                                        <span
                                                            className="managed-item-tag-2"
                                                            data-html="true"
                                                            data-original-title="Top Lenders are amongst our<br>best performing members."
                                                            data-placement="top"
                                                            data-toggle="tooltip"
                                                        >
                                                            Managed
                                                        </span>
                                                    </div>
                                                    <p className="brand mb-1">
                                                        Cult Gaia
                                                    </p>
                                                    <p className="size mb-0">
                                                        OS
                                                    </p>
                                                    <p className="break my-2" />
                                                    <p className="start-price mb-1">
                                                        Rent from AU$40
                                                    </p>
                                                    <p className="retail-price mb-0 pb-3">
                                                        <s>
                                                            RRP AU$310
                                                        </s>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-12 col-lg-6 col-xl-4 mb-4 mb-xl-3 item-container"
                                        data-app-search--listing-filters-target="item"
                                    >
                                        <div
                                            className="item-card2"
                                            data-action="click->app-search--listing-filters#clickThroughTracking"
                                            id="28399"
                                        >
                                            <div
                                                className="position-relative wishlist-heart-28399"
                                                data-controller="wishlisting"
                                                data-target="wishlisting.heartMainContainer"
                                            >
                                                <div className="heart-button-wrapper text-center">
                                                    <ul className="heart-button-position">
                                                        <li>
                                                            <div className="heart-counter mr-0 mr-md-2 mt-1 mt-md-0">
                                                                174
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="heart-button"
                                                                data-target="#signup-modal"
                                                                data-toggle="modal"
                                                                to="#"
                                                            >
                                                                <img
                                                                    alt="Filled Heart Button"
                                                                    className="heart-icon d-none filled-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                                                />
                                                                <img
                                                                    alt="Empty Heart Button"
                                                                    className="heart-icon empty-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/empty-heart-icon-d56bf5bf6cbfd87ebc3a94c9c7f06461.svg"
                                                                />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link
                                                className="item-link"
                                                data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                                                data-controller="google-tag-manager--enhanced-ecommerce item-card"
                                                data-google-tag-manager--enhanced-ecommerce-item-brand="Cult Gaia"
                                                data-google-tag-manager--enhanced-ecommerce-item-categories="bags"
                                                data-google-tag-manager--enhanced-ecommerce-item-colour="silver"
                                                data-google-tag-manager--enhanced-ecommerce-item-name="Hera nano sparkle bag"
                                                data-google-tag-manager--enhanced-ecommerce-item-price="33"
                                                data-google-tag-manager--enhanced-ecommerce-item-uid="1954194"
                                                to="/listings/hera-nano-sparkle-bag"
                                                target="_blank"
                                            >
                                                <div
                                                    className="mx-auto image-wrapper position-relative"
                                                    data-action="mouseenter->item-card#showSecondImage mouseleave->item-card#showMainImage"
                                                >
                                                    <div
                                                        className="image"
                                                        data-target="item-card.firstImage"
                                                        style={{
                                                            backgroundImage: 'url(\'https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_872,w_581,x_57,y_2/c_fill,f_webp,h_634,q_auto:best,w_424/yql850c80zn0gx62a0qez8zy4nkk\')',
                                                            opacity: '1'
                                                        }}
                                                    />
                                                    <div
                                                        className="image"
                                                        data-target="item-card.secondImage"
                                                        style={{
                                                            backgroundImage: 'url(\'https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1136,w_757,x_35,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/2mrzmg3fx5enpg974wdqkghbax2f\')',
                                                            opacity: '0'
                                                        }}
                                                    />
                                                </div>
                                                <div className="item-details position-relative text-uppercase">
                                                    <div className="managed-tag-wrapper">
                                                        <span
                                                            className="managed-item-tag-2"
                                                            data-html="true"
                                                            data-original-title="Top Lenders are amongst our<br>best performing members."
                                                            data-placement="top"
                                                            data-toggle="tooltip"
                                                        >
                                                            Managed
                                                        </span>
                                                    </div>
                                                    <p className="brand mb-1">
                                                        Cult Gaia
                                                    </p>
                                                    <p className="size mb-0">
                                                        OS
                                                    </p>
                                                    <p className="break my-2" />
                                                    <p className="start-price mb-1">
                                                        Rent from AU$33
                                                    </p>
                                                    <p className="retail-price mb-0 pb-3">
                                                        <s>
                                                            RRP AU$475
                                                        </s>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-12 col-lg-6 col-xl-4 mb-4 mb-xl-3 item-container"
                                        data-app-search--listing-filters-target="item"
                                    >
                                        <div
                                            className="item-card2"
                                            data-action="click->app-search--listing-filters#clickThroughTracking"
                                            id="27827"
                                        >
                                            <div
                                                className="position-relative wishlist-heart-27827"
                                                data-controller="wishlisting"
                                                data-target="wishlisting.heartMainContainer"
                                            >
                                                <div className="heart-button-wrapper text-center">
                                                    <ul className="heart-button-position">
                                                        <li>
                                                            <div className="heart-counter mr-0 mr-md-2 mt-1 mt-md-0">
                                                                252
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="heart-button"
                                                                data-target="#signup-modal"
                                                                data-toggle="modal"
                                                                to="#"
                                                            >
                                                                <img
                                                                    alt="Filled Heart Button"
                                                                    className="heart-icon d-none filled-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                                                />
                                                                <img
                                                                    alt="Empty Heart Button"
                                                                    className="heart-icon empty-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/empty-heart-icon-d56bf5bf6cbfd87ebc3a94c9c7f06461.svg"
                                                                />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link
                                                className="item-link"
                                                data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                                                data-controller="google-tag-manager--enhanced-ecommerce item-card"
                                                data-google-tag-manager--enhanced-ecommerce-item-brand="Cult Gaia"
                                                data-google-tag-manager--enhanced-ecommerce-item-categories="bags"
                                                data-google-tag-manager--enhanced-ecommerce-item-colour="gold"
                                                data-google-tag-manager--enhanced-ecommerce-item-name="Nala Mini Clutch in Gold"
                                                data-google-tag-manager--enhanced-ecommerce-item-price="41"
                                                data-google-tag-manager--enhanced-ecommerce-item-uid="1803617"
                                                to="/listings/nala-mini-clutch-in-gold"
                                                target="_blank"
                                            >
                                                <div
                                                    className="mx-auto image-wrapper position-relative"
                                                    data-action="mouseenter->item-card#showSecondImage mouseleave->item-card#showMainImage"
                                                >
                                                    <div
                                                        className="image"
                                                        data-target="item-card.firstImage"
                                                        style={{
                                                            backgroundImage: 'url(\'https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1265,w_843,x_257,y_293/c_fill,f_webp,h_634,q_auto:best,w_424/stzkqlrfsivnaibjlmoygwc21zgp\')',
                                                            opacity: '1'
                                                        }}
                                                    />
                                                    <div
                                                        className="image"
                                                        data-target="item-card.secondImage"
                                                        style={{
                                                            backgroundImage: 'url(\'https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1672,w_1114,x_67,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/c31qcal4a1x2mboiyz8af7gfixax\')',
                                                            opacity: '0'
                                                        }}
                                                    />
                                                </div>
                                                <div className="item-details position-relative text-uppercase">
                                                    <div className="managed-tag-wrapper">
                                                        <span
                                                            className="managed-item-tag-2"
                                                            data-html="true"
                                                            data-original-title="Top Lenders are amongst our<br>best performing members."
                                                            data-placement="top"
                                                            data-toggle="tooltip"
                                                        >
                                                            Managed
                                                        </span>
                                                    </div>
                                                    <p className="brand mb-1">
                                                        Cult Gaia
                                                    </p>
                                                    <p className="size mb-0">
                                                        OS
                                                    </p>
                                                    <p className="break my-2" />
                                                    <p className="start-price mb-1">
                                                        Rent from AU$41
                                                    </p>
                                                    <p className="retail-price mb-0 pb-3">
                                                        <s>
                                                            RRP AU$310
                                                        </s>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-12 col-lg-6 col-xl-4 mb-4 mb-xl-3 item-container"
                                        data-app-search--listing-filters-target="item"
                                    >
                                        <div
                                            className="item-card2"
                                            data-action="click->app-search--listing-filters#clickThroughTracking"
                                            id="62189"
                                        >
                                            <div
                                                className="position-relative wishlist-heart-62189"
                                                data-controller="wishlisting"
                                                data-target="wishlisting.heartMainContainer"
                                            >
                                                <div className="heart-button-wrapper text-center">
                                                    <ul className="heart-button-position">
                                                        <li>
                                                            <div className="heart-counter mr-0 mr-md-2 mt-1 mt-md-0">
                                                                162
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="heart-button"
                                                                data-target="#signup-modal"
                                                                data-toggle="modal"
                                                                to="#"
                                                            >
                                                                <img
                                                                    alt="Filled Heart Button"
                                                                    className="heart-icon d-none filled-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                                                />
                                                                <img
                                                                    alt="Empty Heart Button"
                                                                    className="heart-icon empty-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/empty-heart-icon-d56bf5bf6cbfd87ebc3a94c9c7f06461.svg"
                                                                />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link
                                                className="item-link"
                                                data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                                                data-controller="google-tag-manager--enhanced-ecommerce item-card"
                                                data-google-tag-manager--enhanced-ecommerce-item-brand="Cult Gaia"
                                                data-google-tag-manager--enhanced-ecommerce-item-categories="bags"
                                                data-google-tag-manager--enhanced-ecommerce-item-colour="beige"
                                                data-google-tag-manager--enhanced-ecommerce-item-name="EOS clutch bag"
                                                data-google-tag-manager--enhanced-ecommerce-item-price="38"
                                                data-google-tag-manager--enhanced-ecommerce-item-uid="2994310"
                                                to="/listings/eos-clutch-bag"
                                                target="_blank"
                                            >
                                                <div
                                                    className="mx-auto image-wrapper position-relative"
                                                    data-action="mouseenter->item-card#showSecondImage mouseleave->item-card#showMainImage"
                                                >
                                                    <div
                                                        className="image"
                                                        data-target="item-card.firstImage"
                                                        style={{
                                                            backgroundImage: 'url(https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1542,w_1028,x_48,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/lfdhge16ag1klq4myeyaik5lm1ja)',
                                                            opacity: '1'
                                                        }}
                                                    />
                                                    <div
                                                        className="image"
                                                        data-target="item-card.secondImage"
                                                        style={{
                                                            backgroundImage: 'url(https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1549,w_1032,x_67,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/xw790wf4zz9mix2moiixtpthz3hn)',
                                                            opacity: '0'
                                                        }}
                                                    />
                                                </div>
                                                <div className="item-details position-relative text-uppercase">
                                                    <div className="managed-tag-wrapper">
                                                        <span
                                                            className="managed-item-tag-2"
                                                            data-html="true"
                                                            data-original-title="Top Lenders are amongst our<br>best performing members."
                                                            data-placement="top"
                                                            data-toggle="tooltip"
                                                        >
                                                            Managed
                                                        </span>
                                                    </div>
                                                    <p className="brand mb-1">
                                                        Cult Gaia
                                                    </p>
                                                    <p className="size mb-0">
                                                        OS
                                                    </p>
                                                    <p className="break my-2" />
                                                    <p className="start-price mb-1">
                                                        Rent from AU$38
                                                    </p>
                                                    <p className="retail-price mb-0 pb-3">
                                                        <s>
                                                            RRP AU$350
                                                        </s>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-12 col-lg-6 col-xl-4 mb-4 mb-xl-3 item-container"
                                        data-app-search--listing-filters-target="item"
                                    >
                                        <div
                                            className="item-card2"
                                            data-action="click->app-search--listing-filters#clickThroughTracking"
                                            id="62189"
                                        >
                                            <div
                                                className="position-relative wishlist-heart-62189"
                                                data-controller="wishlisting"
                                                data-target="wishlisting.heartMainContainer"
                                            >
                                                <div className="heart-button-wrapper text-center">
                                                    <ul className="heart-button-position">
                                                        <li>
                                                            <div className="heart-counter mr-0 mr-md-2 mt-1 mt-md-0">
                                                                162
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="heart-button"
                                                                data-target="#signup-modal"
                                                                data-toggle="modal"
                                                                to="#"
                                                            >
                                                                <img
                                                                    alt="Filled Heart Button"
                                                                    className="heart-icon d-none filled-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                                                />
                                                                <img
                                                                    alt="Empty Heart Button"
                                                                    className="heart-icon empty-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/empty-heart-icon-d56bf5bf6cbfd87ebc3a94c9c7f06461.svg"
                                                                />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link
                                                className="item-link"
                                                data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                                                data-controller="google-tag-manager--enhanced-ecommerce item-card"
                                                data-google-tag-manager--enhanced-ecommerce-item-brand="Cult Gaia"
                                                data-google-tag-manager--enhanced-ecommerce-item-categories="bags"
                                                data-google-tag-manager--enhanced-ecommerce-item-colour="beige"
                                                data-google-tag-manager--enhanced-ecommerce-item-name="EOS clutch bag"
                                                data-google-tag-manager--enhanced-ecommerce-item-price="38"
                                                data-google-tag-manager--enhanced-ecommerce-item-uid="2994310"
                                                to="/listings/eos-clutch-bag"
                                                target="_blank"
                                            >
                                                <div
                                                    className="mx-auto image-wrapper position-relative"
                                                    data-action="mouseenter->item-card#showSecondImage mouseleave->item-card#showMainImage"
                                                >
                                                    <div
                                                        className="image"
                                                        data-target="item-card.firstImage"
                                                        style={{
                                                            backgroundImage: 'url(https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1542,w_1028,x_48,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/lfdhge16ag1klq4myeyaik5lm1ja)',
                                                            opacity: '1'
                                                        }}
                                                    />
                                                    <div
                                                        className="image"
                                                        data-target="item-card.secondImage"
                                                        style={{
                                                            backgroundImage: 'url(https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_1549,w_1032,x_67,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/xw790wf4zz9mix2moiixtpthz3hn)',
                                                            opacity: '0'
                                                        }}
                                                    />
                                                </div>
                                                <div className="item-details position-relative text-uppercase">
                                                    <div className="managed-tag-wrapper">
                                                        <span
                                                            className="managed-item-tag-2"
                                                            data-html="true"
                                                            data-original-title="Top Lenders are amongst our<br>best performing members."
                                                            data-placement="top"
                                                            data-toggle="tooltip"
                                                        >
                                                            Managed
                                                        </span>
                                                    </div>
                                                    <p className="brand mb-1">
                                                        Cult Gaia
                                                    </p>
                                                    <p className="size mb-0">
                                                        OS
                                                    </p>
                                                    <p className="break my-2" />
                                                    <p className="start-price mb-1">
                                                        Rent from AU$38
                                                    </p>
                                                    <p className="retail-price mb-0 pb-3">
                                                        <s>
                                                            RRP AU$350
                                                        </s>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div
                                        className="col-6 col-md-12 col-lg-6 col-xl-4 mb-4 mb-xl-3 item-container"
                                        data-app-search--listing-filters-target="item"
                                    >
                                        <div
                                            className="item-card2"
                                            data-action="click->app-search--listing-filters#clickThroughTracking"
                                            id="33216"
                                        >
                                            <div
                                                className="position-relative wishlist-heart-33216"
                                                data-controller="wishlisting"
                                                data-target="wishlisting.heartMainContainer"
                                            >
                                                <div className="heart-button-wrapper text-center">
                                                    <ul className="heart-button-position">
                                                        <li>
                                                            <div className="heart-counter mr-0 mr-md-2 mt-1 mt-md-0">
                                                                152
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="heart-button"
                                                                data-target="#signup-modal"
                                                                data-toggle="modal"
                                                                to="#"
                                                            >
                                                                <img
                                                                    alt="Filled Heart Button"
                                                                    className="heart-icon d-none filled-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/filled-heart-icon-a8423184c157efec16d266396a600a9f.svg"
                                                                />
                                                                <img
                                                                    alt="Empty Heart Button"
                                                                    className="heart-icon empty-wishlist-icon"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/empty-heart-icon-d56bf5bf6cbfd87ebc3a94c9c7f06461.svg"
                                                                />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <Link
                                                className="item-link"
                                                data-action="google-tag-manager--enhanced-ecommerce#productClicks"
                                                data-controller="google-tag-manager--enhanced-ecommerce item-card"
                                                data-google-tag-manager--enhanced-ecommerce-item-brand="Cult Gaia"
                                                data-google-tag-manager--enhanced-ecommerce-item-categories="bags"
                                                data-google-tag-manager--enhanced-ecommerce-item-colour="gold"
                                                data-google-tag-manager--enhanced-ecommerce-item-name="Nala Clutch"
                                                data-google-tag-manager--enhanced-ecommerce-item-price="40"
                                                data-google-tag-manager--enhanced-ecommerce-item-uid="6215099"
                                                to="/listings/nala-clutch"
                                                target="_blank"
                                            >
                                                <div
                                                    className="mx-auto image-wrapper position-relative"
                                                    data-action="mouseenter->item-card#showSecondImage mouseleave->item-card#showMainImage"
                                                >
                                                    <div
                                                        className="image"
                                                        data-target="item-card.firstImage"
                                                        style={{
                                                            backgroundImage: 'url(\'https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_628,w_418,x_70,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/n3xm2k4rnqpzgqhisi8mqty4cfpq\')',
                                                            opacity: '1'
                                                        }}
                                                    />
                                                    <div
                                                        className="image"
                                                        data-target="item-card.secondImage"
                                                        style={{
                                                            backgroundImage: 'url(\'https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2360,w_1573,x_6,y_0/c_fill,f_webp,h_634,q_auto:best,w_424/1yesd00604bqczgn0910vze1oayo\')',
                                                            opacity: '0'
                                                        }}
                                                    />
                                                </div>
                                                <div className="item-details position-relative text-uppercase">
                                                    <div className="managed-tag-wrapper">
                                                        <span
                                                            className="managed-item-tag-2"
                                                            data-html="true"
                                                            data-original-title="Top Lenders are amongst our<br>best performing members."
                                                            data-placement="top"
                                                            data-toggle="tooltip"
                                                        >
                                                            Managed
                                                        </span>
                                                    </div>
                                                    <p className="brand mb-1">
                                                        Cult Gaia
                                                    </p>
                                                    <p className="size mb-0">
                                                        OS
                                                    </p>
                                                    <p className="break my-2" />
                                                    <p className="start-price mb-1">
                                                        Rent from AU$40
                                                    </p>
                                                    <p className="retail-price mb-0 pb-3">
                                                        <s>
                                                            RRP AU$310
                                                        </s>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* subscribe*/}
                    <div className="subscribe bg-nude">
                        <div className="container">
                            <div className="subscribe__head">
                                <h2 className="h2-title">Stay In Touch</h2>
                            </div>
                            <div className="subscribe__body">
                                <div className="subscribe__intro">
                                    <p className="p-main">
                                        Keep on top of our weekly arrivals and get{" "}
                                        <strong>10% off your first order</strong> by subscribing below
                                    </p>
                                </div>
                                <form
                                    className="subscribe__form js-validate"
                                    action="#"
                                    data-success-function="subscribeFormSuccess"
                                >
                                    <div className="ui-group">
                                        <input
                                            className="ui-input"
                                            type="email"
                                            name="email"
                                            placeholder="enter email"
                                        />
                                    </div>
                                    <button className="btn btn-primary btn--block" type="submit">
                                        Sign me up
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="vue-exposed-methods" />
                </div>
                {/* .page__main-content */}
                <div id="vue-search-desktop" />
            </div>
            < Footer />
        </>
    );
}
export default Brisbane;