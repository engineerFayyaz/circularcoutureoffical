import React from "react";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import EditFilter from "../../Components/EditFilter";

const Alemais = () => {
    return (
        <>
            <TopHeader />
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
                                            <a href="../index.html" itemProp="item">
                                                <span itemProp="name">Home</span>
                                            </a>
                                            <meta itemProp="position" content={1} />
                                        </li>
                                        <li
                                            itemProp="itemListElement"
                                            itemScope=""
                                            itemType="http://schema.org/ListItem"
                                        >
                                            <a href="../designers.html" itemProp="item">
                                                <span itemProp="name">Designers</span>
                                            </a>
                                            <meta itemProp="position" content={2} />
                                        </li>
                                        <li
                                            itemProp="itemListElement"
                                            itemScope=""
                                            itemType="http://schema.org/ListItem"
                                        >
                                            <span itemProp="name">Alemais</span>
                                            <meta itemProp="position" content={3} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="plp-intro__container">
                                <h1
                                    className="h2-title plp-intro__title no-image js-results-title"
                                    data-titletype="Designer"
                                >
                                    Alemais <span className="plp-intro__search-query" />
                                </h1>
                                <div className="plp-intro__wrapper--no-image">
                                    <div className="plp-intro__text js-readmore-container">
                                        <div className="plp-intro__text-wrapper js-readmore">
                                            <div className="js-ellipsize regular-content" data-stop=">769">
                                                <p>
                                                    Alemais crafts beautifully detail-infused designs into their
                                                    collection of artisanal sundresses, shirting and skirts. The
                                                    eclectic Australian brand is the brainchild of Fine Arts
                                                    graduate Lesleigh Jermanus who is a 20-year veteran of the
                                                    fashion and design community. At the heart of Alemais'
                                                    designs is a respect for traditional garment-making
                                                    techniques. The skill and artistry of the past are honored
                                                    by infusing them into current collections in fresh ways. The
                                                    vibrant colours and prints of Alemais have been donned by
                                                    Australian media personalities like Kate Waterhouse and Zoe
                                                    Foster as well as international stars like Gwyneth Paltrow.
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
                   <EditFilter/>
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

            <Footer />
        </>
    );
}
export default Alemais;