import React from "react";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";

const Melbourne = () => {

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
                                            <span itemProp="name">Melbourne Dress Hire</span>
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
                                    Melbourne Dress Hire <span className="plp-intro__search-query" />
                                </h1>
                                <div className="plp-intro__wrapper--no-image">
                                    <div className="plp-intro__text js-readmore-container">
                                        <div className="plp-intro__text-wrapper js-readmore">
                                            <div className="js-ellipsize regular-content" data-stop=">769">
                                                <p>
                                                    Melbourne is the undisputed shopping capital of Australia
                                                    and the cosmopolitan lifestyle of the city is mirrored in
                                                    the sophisticated fashion of its residents. Melbourne style
                                                    is distinctly refined and polished. When having a coffee in
                                                    one of the laneways or browsing the boutiques on Chapel
                                                    Street, you'll notice it in the impeccable dress of nearly
                                                    everyone who lives there. Naturally, the{" "}
                                                    <a href="occasion/spring-racing-dresses.html">
                                                        Melbourne Cup
                                                    </a>
                                                    , one of Australia's premier sporting events shares the
                                                    marquee with the annual fashion stakes that take place at
                                                    Flemington.
                                                </p>
                                                <p>
                                                    While the city streets are nothing short of fashion runways
                                                    themselves, the real thing can be seen during a two-week
                                                    event held every March. The Melbourne Fashion Festival is
                                                    where <a href="designers.html">Australian designers</a>{" "}
                                                    unveil their collections for the season, and its mass appeal
                                                    with the naturally stylish Melbournites makes it a highlight
                                                    of the Australian fashion calendar.
                                                </p>
                                                <p>
                                                    The great thing about all the items available for hire on
                                                    All The Dresses is that every one of them can be sent
                                                    Australia-wide!
                                                </p>
                                                <p>
                                                    Browse over 15,000 items and have your rental dress posted
                                                    direct to you in Melbourne.
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
                        <div className="col-md-5 col-lg-4 d-none d-md-block">
                            <div className="sidebar-v2 mt-4 pt-3 sidebar-filters">
                                <div className="filter-number-results-v2">
                                    <p
                                        className="text text-uppercase"
                                        data-app-search--listing-filters-target="totalResults"
                                    >
                                        <span className="total-filters-label">
                                            FILTERS
                                        </span>
                                        {' '}1500+                    Results
                                    </p>
                                </div>
                                <div className="sidebar-scrollable-wrapper">
                                    <div className="sidebar-scrollable">
                                        <div
                                            className="accordion sidebar-filter-accordion-v2"
                                            id="accordionExample"
                                        >


                                            <div className="card designers-filter">
                                                <div
                                                    className="card-header"
                                                    id="headingTwo"
                                                >
                                                    <span
                                                        className="sidebar-filter-clear -disabled"
                                                        data-action="click->plp--filters#clearSelectedFilter"
                                                        data-filter="designers"
                                                        data-original-title="CLEAR?"
                                                        data-placement="left"
                                                        data-toggle="tooltip"
                                                    >
                                                        <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/red-close-icon-9a77dee912ec4d285d927ee23c09f349.svg" />
                                                    </span>
                                                    <h2 className="mb-0">
                                                        <button
                                                            aria-controls="designersFilterCollapse"
                                                            aria-expanded="false"
                                                            className="btn btn-link collapsed sidebar-filter-button"
                                                            data-target="#designersFilterCollapse"
                                                            data-toggle="collapse"
                                                            type="button"
                                                        >
                                                            Designers
                                                            <span data-app-search--filters-count-target="designersCount" />
                                                        </button>
                                                    </h2>
                                                    <span
                                                        className="sidebar-filter-clear -text -disabled"
                                                        data-action="click->plp--filters#clearSelectedFilter"
                                                        data-filter="designers"
                                                    >
                                                        UNSELECT ALL
                                                    </span>
                                                </div>
                                                <div
                                                    aria-labelledby="headingTwo"
                                                    className="collapse designer-header"
                                                    data-controller="app-search--designer-filters"
                                                    data-plp--filters-target="plpFiltersDesignersController"
                                                    id="designersFilterCollapse"
                                                >
                                                    <div className="text-uppercase popular-designer">
                                                        Popular Designers
                                                    </div>
                                                    <div
                                                        className="mx-16px my-16px popular-designers-container"
                                                        data-app-search--designer-filters-target="container"
                                                    >
                                                        <input
                                                            className="popular-designers-checkboxes"
                                                            data-action="app-search--designer-filters#selectPopularDesigners"
                                                            data-filter="designers"
                                                            data-value="The Vampire’s Wife"
                                                            hidden
                                                            to="javascript:void(0)"
                                                            id="The Vampire’s Wife"
                                                            name="filter_designers"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="popular-designers-button text-nowrap"
                                                            htmlFor="The Vampire’s Wife"
                                                        >
                                                            The Vampire’s Wife
                                                        </label>
                                                        <input
                                                            className="popular-designers-checkboxes"
                                                            data-action="app-search--designer-filters#selectPopularDesigners"
                                                            data-filter="designers"
                                                            data-value="Cecilie Bahnsen"
                                                            hidden
                                                            to="javascript:void(0)"
                                                            id="Cecilie Bahnsen"
                                                            name="filter_designers"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="popular-designers-button text-nowrap"
                                                            htmlFor="Cecilie Bahnsen"
                                                        >
                                                            Cecilie Bahnsen
                                                        </label>
                                                        <input
                                                            className="popular-designers-checkboxes"
                                                            data-action="app-search--designer-filters#selectPopularDesigners"
                                                            data-filter="designers"
                                                            data-value="Self-Portrait"
                                                            hidden
                                                            to="javascript:void(0)"
                                                            id="Self-Portrait"
                                                            name="filter_designers"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="popular-designers-button text-nowrap"
                                                            htmlFor="Self-Portrait"
                                                        >
                                                            Self-Portrait
                                                        </label>
                                                        <input
                                                            className="popular-designers-checkboxes"
                                                            data-action="app-search--designer-filters#selectPopularDesigners"
                                                            data-filter="designers"
                                                            data-value="16ARLINGTON"
                                                            hidden
                                                            to="javascript:void(0)"
                                                            id="16ARLINGTON"
                                                            name="filter_designers"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="popular-designers-button text-nowrap"
                                                            htmlFor="16ARLINGTON"
                                                        >
                                                            16ARLINGTON
                                                        </label>
                                                        <input
                                                            className="popular-designers-checkboxes"
                                                            data-action="app-search--designer-filters#selectPopularDesigners"
                                                            data-filter="designers"
                                                            data-value="Rat & Boa"
                                                            hidden
                                                            to="javascript:void(0)"
                                                            id="Rat & Boa"
                                                            name="filter_designers"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="popular-designers-button text-nowrap"
                                                            htmlFor="Rat & Boa"
                                                        >
                                                            Rat & Boa
                                                        </label>
                                                        <input
                                                            className="popular-designers-checkboxes"
                                                            data-action="app-search--designer-filters#selectPopularDesigners"
                                                            data-filter="designers"
                                                            data-value="Nadine Merabi"
                                                            hidden
                                                            to="javascript:void(0)"
                                                            id="Nadine Merabi"
                                                            name="filter_designers"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="popular-designers-button text-nowrap"
                                                            htmlFor="Nadine Merabi"
                                                        >
                                                            Nadine Merabi
                                                        </label>
                                                        <input
                                                            className="popular-designers-checkboxes"
                                                            data-action="app-search--designer-filters#selectPopularDesigners"
                                                            data-filter="designers"
                                                            data-value="Ganni"
                                                            hidden
                                                            to="javascript:void(0)"
                                                            id="Ganni"
                                                            name="filter_designers"
                                                            type="checkbox"
                                                        />
                                                        <label
                                                            className="popular-designers-button text-nowrap"
                                                            htmlFor="Ganni"
                                                        >
                                                            Ganni
                                                        </label>
                                                    </div>
                                                    <div className="card-body">
                                                        <div className="form-wrapper">
                                                            <div className="search-input-wrapper">
                                                                <span className="search-filter-icon">
                                                                    <img
                                                                        alt="Search"
                                                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/search-01eb2b40cffce6cef4917f40854e111d.svg"
                                                                    />
                                                                </span>
                                                                <input
                                                                    autoComplete="off"
                                                                    className="search-filter w-input"
                                                                    data-action="keyup->app-search--designer-filters#search"
                                                                    data-name="Search"
                                                                    maxLength="256"
                                                                    name="search-v2"
                                                                    placeholder="Search designers"
                                                                    type="text"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="menu-wrapper"
                                                            data-app-search--designer-filters-target="designersWrapper"
                                                        >
                                                            <div className="text-center">
                                                                <i
                                                                    aria-hidden="true"
                                                                    className="fa-duotone fa-spinner-third fa-spin"
                                                                />
                                                                Loading...
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div
                                            className="accordion sidebar-filter-accordion-v2"
                                            data-controller="app-search--categories-filter"
                                            id="app-search--categories-filter-controller"
                                        >
                                            <div className="card categories-filter">
                                                <div
                                                    className="card-header"
                                                    id="headingOne"
                                                >
                                                    <h2 className="mb-0">
                                                        <button
                                                            aria-controls="collapseOne"
                                                            aria-expanded="false"
                                                            className="btn btn-link collapsed sidebar-filter-button"
                                                            data-target="#collapseOne"
                                                            data-toggle="collapse"
                                                            type="button"
                                                        >
                                                            Category
                                                            <span data-app-search--filters-count-target="categoryCount" />
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div
                                                    aria-labelledby="headingOne"
                                                    className="collapse"
                                                    id="collapseOne"
                                                >
                                                    <div className="card-body">
                                                        <div className="menu-wrapper">
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="category"
                                                                        data-subcategory="false"
                                                                        data-value="accessories"
                                                                        type="checkbox"
                                                                    />
                                                                    Accessories
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="category"
                                                                        data-subcategory="false"
                                                                        data-value="bags"
                                                                        type="checkbox"
                                                                    />
                                                                    Bags
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="category"
                                                                        data-subcategory="false"
                                                                        data-value="shoes"
                                                                        type="checkbox"
                                                                    />
                                                                    Shoes
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="card dresses-sub-length-filter d-none"
                                                data-app-search--categories-filter-target="dressesSub"
                                            >
                                                <div
                                                    className="card-header"
                                                    id="headingOne"
                                                >
                                                    <h2 className="mb-0">
                                                        <button
                                                            aria-controls="collapseDressesLength"
                                                            aria-expanded="false"
                                                            className="btn btn-link collapsed sidebar-filter-button"
                                                            data-target="#collapseDressesLength"
                                                            data-toggle="collapse"
                                                            type="button"
                                                        >
                                                            Length
                                                            <span data-app-search--filters-count-target="dressesLengthCount" />
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div
                                                    aria-labelledby="headingOne"
                                                    className="collapse"
                                                    id="collapseDressesLength"
                                                >
                                                    <div className="card-body">
                                                        <div className="menu-wrapper">
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_length"
                                                                        data-subcategory="true"
                                                                        data-value="micro"
                                                                        type="checkbox"
                                                                    />
                                                                    Micro
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_length"
                                                                        data-subcategory="true"
                                                                        data-value="mini"
                                                                        type="checkbox"
                                                                    />
                                                                    Mini
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_length"
                                                                        data-subcategory="true"
                                                                        data-value="midi"
                                                                        type="checkbox"
                                                                    />
                                                                    Midi
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_length"
                                                                        data-subcategory="true"
                                                                        data-value="maxi"
                                                                        type="checkbox"
                                                                    />
                                                                    Maxi
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="card-header"
                                                    id="headingOne"
                                                >
                                                    <h2 className="mb-0">
                                                        <button
                                                            aria-controls="collapseDressesFit"
                                                            aria-expanded="false"
                                                            className="btn btn-link collapsed sidebar-filter-button"
                                                            data-target="#collapseDressesFit"
                                                            data-toggle="collapse"
                                                            type="button"
                                                        >
                                                            Fit
                                                            <span data-app-search--filters-count-target="dressesFitCount" />
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div
                                                    aria-labelledby="headingOne"
                                                    className="collapse"
                                                    id="collapseDressesFit"
                                                >
                                                    <div className="card-body">
                                                        <div className="menu-wrapper">
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="fitted"
                                                                        type="checkbox"
                                                                    />
                                                                    Fitted
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="chunky"
                                                                        type="checkbox"
                                                                    />
                                                                    Chunky
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="oversized"
                                                                        type="checkbox"
                                                                    />
                                                                    Oversized
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="skinny-fit"
                                                                        type="checkbox"
                                                                    />
                                                                    Skinny Fit
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="slim-fit"
                                                                        type="checkbox"
                                                                    />
                                                                    Slim Fit
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="regular-fit"
                                                                        type="checkbox"
                                                                    />
                                                                    Regular Fit
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="bandage"
                                                                        type="checkbox"
                                                                    />
                                                                    Bandage
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="bodycon"
                                                                        type="checkbox"
                                                                    />
                                                                    Bodycon
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="boxy"
                                                                        type="checkbox"
                                                                    />
                                                                    Boxy
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="loose-fit"
                                                                        type="checkbox"
                                                                    />
                                                                    Loose Fit
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="slouchy"
                                                                        type="checkbox"
                                                                    />
                                                                    Slouchy
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="maternity"
                                                                        type="checkbox"
                                                                    />
                                                                    Maternity
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="petite"
                                                                        type="checkbox"
                                                                    />
                                                                    Petite
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="plus-size"
                                                                        type="checkbox"
                                                                    />
                                                                    Plus Size
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="card-header"
                                                    id="headingOne"
                                                >
                                                    <h2 className="mb-0">
                                                        <button
                                                            aria-controls="collapseDressesStyle"
                                                            aria-expanded="false"
                                                            className="btn btn-link collapsed sidebar-filter-button"
                                                            data-target="#collapseDressesStyle"
                                                            data-toggle="collapse"
                                                            type="button"
                                                        >
                                                            Style
                                                            <span data-app-search--filters-count-target="dressesStyleCount" />
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div
                                                    aria-labelledby="headingOne"
                                                    className="collapse"
                                                    id="collapseDressesStyle"
                                                >
                                                    <div className="card-body">
                                                        <div className="menu-wrapper">
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="wrap"
                                                                        type="checkbox"
                                                                    />
                                                                    Wrap
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_fit"
                                                                        data-subcategory="true"
                                                                        data-value="bodycon"
                                                                        type="checkbox"
                                                                    />
                                                                    Bodycon
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="shirt"
                                                                        type="checkbox"
                                                                    />
                                                                    Shirt
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="slip"
                                                                        type="checkbox"
                                                                    />
                                                                    Slip
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="tea"
                                                                        type="checkbox"
                                                                    />
                                                                    Tea
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="pencil"
                                                                        type="checkbox"
                                                                    />
                                                                    Pencil
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="evening"
                                                                        type="checkbox"
                                                                    />
                                                                    Evening
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="shift"
                                                                        type="checkbox"
                                                                    />
                                                                    Shift
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="jumper"
                                                                        type="checkbox"
                                                                    />
                                                                    Jumper
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="shealth"
                                                                        type="checkbox"
                                                                    />
                                                                    Shealth
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="blazer"
                                                                        type="checkbox"
                                                                    />
                                                                    Blazer
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="casual"
                                                                        type="checkbox"
                                                                    />
                                                                    Casual
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="smart-casual"
                                                                        type="checkbox"
                                                                    />
                                                                    Smart Casual
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="formal"
                                                                        type="checkbox"
                                                                    />
                                                                    Formal
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="knitted"
                                                                        type="checkbox"
                                                                    />
                                                                    Knitted
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="dresses_style"
                                                                        data-subcategory="true"
                                                                        data-value="sportswear"
                                                                        type="checkbox"
                                                                    />
                                                                    Sportswear
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="card shoes-sub-length-filter d-none"
                                                data-app-search--categories-filter-target="shoesSub"
                                            >
                                                <div
                                                    className="card-header"
                                                    id="headingOne"
                                                >
                                                    <h2 className="mb-0">
                                                        <button
                                                            aria-controls="collapseShoesStyle"
                                                            aria-expanded="false"
                                                            className="btn btn-link collapsed sidebar-filter-button"
                                                            data-target="#collapseShoesStyle"
                                                            data-toggle="collapse"
                                                            type="button"
                                                        >
                                                            Shoes Style
                                                            <span data-app-search--filters-count-target="shoesStyleCount" />
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div
                                                    aria-labelledby="headingOne"
                                                    className="collapse"
                                                    id="collapseShoesStyle"
                                                >
                                                    <div className="card-body">
                                                        <div className="menu-wrapper">
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="platform"
                                                                        type="checkbox"
                                                                    />
                                                                    Platform
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="kitten heels"
                                                                        type="checkbox"
                                                                    />
                                                                    Kitten Heels
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="high-heels"
                                                                        type="checkbox"
                                                                    />
                                                                    High Heels
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="flat"
                                                                        type="checkbox"
                                                                    />
                                                                    Flat
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="strappy"
                                                                        type="checkbox"
                                                                    />
                                                                    Strappy
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="slingback"
                                                                        type="checkbox"
                                                                    />
                                                                    Slingback
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="ankle-strap"
                                                                        type="checkbox"
                                                                    />
                                                                    Ankle Strap
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="chunky-shoe-heel"
                                                                        type="checkbox"
                                                                    />
                                                                    Chunky Shoe Heel
                                                                </label>
                                                            </div>
                                                            <div className="component checkbox category-checkbox">
                                                                <label className="checkbox-label">
                                                                    <input
                                                                        className="checkbox-input"
                                                                        data-action="change->app-search--categories-filter#selectCategory"
                                                                        data-filter="shoes_style"
                                                                        data-subcategory="true"
                                                                        data-value="wedge"
                                                                        type="checkbox"
                                                                    />
                                                                    Wedge
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card prices-filter">
                                                <div
                                                    className="card-header"
                                                    id="headingFive"
                                                >
                                                    <h2 className="mb-0">
                                                        <button
                                                            aria-controls="collapseFive"
                                                            aria-expanded="false"
                                                            className="btn btn-link collapsed sidebar-filter-button"
                                                            data-target="#collapseFive"
                                                            data-toggle="collapse"
                                                            type="button"
                                                        >
                                                            Rental Price
                                                            <span data-app-search--filters-count-target="priceCount" />
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div
                                                    aria-labelledby="headingFive"
                                                    className="collapse"
                                                    id="collapseFive"
                                                >
                                                    <div className="card-body">
                                                        <div
                                                            className="menu-wrapper app-search--rental-price-filters-controller"
                                                            data-controller="app-search--rental-price-filters"
                                                        >
                                                            <div
                                                                className="price-slider"
                                                                data-app-search--rental-price-filters-target="priceSliderWrapper"
                                                            >
                                                                <div className="price-slider-div mt-2 mt-md-auto" />
                                                                <div className="nouislider px-2">
                                                                    <div
                                                                        className="rounded-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                                                                        data-app-search--rental-price-filters-target="rentalPriceSlider"
                                                                        id="js-slider"
                                                                    >
                                                                        <div className="noUi-base">
                                                                            <div className="noUi-connects">
                                                                                <div
                                                                                    className="noUi-connect"
                                                                                    style={{
                                                                                        transform: 'translate(0%, 0px)                                              scale(1, 1)'
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                            <div
                                                                                className="noUi-origin"
                                                                                style={{
                                                                                    transform: 'translate(-100%, 0px)',
                                                                                    zIndex: '5'
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    aria-orientation="horizontal"
                                                                                    aria-valuemax="900.0"
                                                                                    aria-valuemin="15.0"
                                                                                    aria-valuenow="15.0"
                                                                                    aria-valuetext="15.00"
                                                                                    className="noUi-handle noUi-handle-lower"
                                                                                    data-handle="0"
                                                                                    role="slider"
                                                                                    tabIndex="0"
                                                                                >
                                                                                    <div className="noUi-touch-area" />
                                                                                    <div className="noUi-tooltip">
                                                                                        AU$ 15
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="noUi-origin"
                                                                                style={{
                                                                                    transform: 'translate(0%, 0px)',
                                                                                    zIndex: '4'
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    aria-orientation="horizontal"
                                                                                    aria-valuemax="900.0"
                                                                                    aria-valuemin="15.0"
                                                                                    aria-valuenow="900.0"
                                                                                    aria-valuetext="900.00"
                                                                                    className="noUi-handle noUi-handle-upper"
                                                                                    data-handle="1"
                                                                                    role="slider"
                                                                                    tabIndex="0"
                                                                                >
                                                                                    <div className="noUi-touch-area" />
                                                                                    <div className="noUi-tooltip">
                                                                                        AU$ 900
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-5">
                                                                    <div className="row">
                                                                        <div className="col-6">
                                                                            <div className="component input icon -pounds">
                                                                                <input
                                                                                    className="component input default-colour"
                                                                                    data-action="change->app-search--rental-price-filters#setSliderValue"
                                                                                    data-app-search--rental-price-filters-target="minPrice"
                                                                                    defaultValue="15"
                                                                                    id="minPriceRange"
                                                                                    name=""
                                                                                    type="number"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-6">
                                                                            <div className="component input icon -pounds">
                                                                                <input
                                                                                    className="component input default-colour"
                                                                                    data-action="change->app-search--rental-price-filters#setSliderValue"
                                                                                    data-app-search--rental-price-filters-target="maxPrice"
                                                                                    defaultValue="900"
                                                                                    id="maxPriceRange"
                                                                                    name=""
                                                                                    type="number"
                                                                                />
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
                                    </div>
                                </div>
                            </div>
                        </div>


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
                </div>
                {/* .page__main-content */}
                <div id="vue-search-desktop" />
            </div>

            < Footer />
        </>
    );
}
export default Melbourne;