import React from "react";
import { Link } from "react-router-dom";
const NowTrending = () => {
    return (
        <>
            <section>
                <div className="container product-section">
                    <div className="title d-flex align-items-center justify-content-between pe-5">
                        <h4>Now Trending</h4>
                        <span>
                            <i className="fa-solid fa-arrow-right" />
                        </span>
                    </div>
                    <div
                        id="productCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner d-flex align-items-center justify-content-between">
                            {/* Product Item 1 */}
                            <div className="carousel-item active">
                                <div className="product-item">
                                    <Link to="/ProductDetail">
                                        <img
                                            src="/web-images/LIS_002 _ ZIMMERMANN ANNEKE RUFFLE MINI DRESS/LIS_002.1.jpg"
                                            className="img-fluid"
                                            alt="Product 1"
                                            loading="lazy"

                                        />
                                    </Link>
                                    <div className="product-description p-2">
                                        <h5 className="d-flex align-items-center justify-content-between">
                                            ZIMMERMANN
                                            <span className="heart-icon">
                                                <i className="fa-regular fa-heart" />
                                            </span>
                                        </h5>
                                        <p className="catagory">Gold bee clutchbag</p>
                                        <p className="price">
                                            <strike>RRP $350</strike>
                                        </p>
                                        <p className="rent-buy d-flex align-items-center justify-content-between">
                                            RENT $40 <span>BUY $250</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Product Item 2 */}
                            <div className="carousel-item active">
                                <div className="product-item">
                                    <Link to="/ProductDetail">
                                        <img
                                            src="/web-images/LIS_003 _ Zimmermann Bells Paisley-print Linen Mini Dress/LIS_003.3.jpg"
                                            className="img-fluid"
                                            alt="Product 1" style={{ background: "none" }}
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className="product-description p-2">
                                        <h5 className="d-flex align-items-center justify-content-between">
                                            Botega Venega
                                            <span className="heart-icon">
                                                <i className="fa-regular fa-heart" />
                                            </span>
                                        </h5>
                                        <p className="catagory">Sunglasses</p>
                                        <p className="price">
                                            <strike>RRP $350</strike>
                                        </p>
                                        <p className="rent-buy d-flex align-items-center justify-content-between">
                                            RENT $40 <span>BUY $250</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Product Item 3 */}
                            <div className="carousel-item active">
                                <div className="product-item">
                                    <Link to="/ProductDetail">
                                        <img
                                            src="/web-images/LIS_004 _ Missoni multi coloured dress/0D0A0720.jpg"
                                            className="img-fluid"
                                            alt="Product 1"
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className="product-description p-2">
                                        <h5 className="d-flex align-items-center justify-content-between">
                                            ZIMMERMANN
                                            <span className="heart-icon">
                                                <i className="fa-regular fa-heart" />
                                            </span>
                                        </h5>
                                        <p className="catagory">
                                            White shorts with gold buttons
                                        </p>
                                        <p className="price">
                                            <strike>RRP $350</strike>
                                        </p>
                                        <p className="rent-buy d-flex align-items-center justify-content-between">
                                            RENT $40 <span>BUY $250</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Product Item 4 */}
                            <div className="carousel-item active">
                                <div className="product-item">
                                    <Link to="/ProductDetail">
                                        {" "}
                                        <img
                                            src="/web-images/LIS_005 _ Zimmermann VERITY PANELLED LINEAR DRESS/1.jpeg"
                                            className="img-fluid"
                                            alt="Product 1"
                                            loading="lazy"
                                        />
                                    </Link>
                                    <div className="product-description p-2">
                                        <h5 className="d-flex align-items-center justify-content-between">
                                            ZIMMERMANN
                                            <span className="heart-icon">
                                                <i className="fa-regular fa-heart" />
                                            </span>
                                        </h5>
                                        <p className="catagory">Two tone sequin top</p>
                                        <p className="price">
                                            <strike>RRP $350</strike>
                                        </p>
                                        <p className="rent-buy d-flex align-items-center justify-content-between">
                                            RENT $40 <span>BUY $250</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        {/* <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> */}
                    </div>
                </div>
            </section>
        </>
    );
};
export default NowTrending;