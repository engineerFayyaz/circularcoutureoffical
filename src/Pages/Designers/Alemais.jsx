import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EditFilter from "../../Components/EditFilter";

const Alemais = () => {
    const { designerId, designerName } = useParams();
    const [products, setProducts] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint using the designerId
        fetch(`https://localhost:7220/api/products/designer/${designerId}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched products
                setProducts(data.results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [designerId]); // Add designerId as a dependency to re-fetch data when it changes

    // Function to handle adding/removing products from wishlist
    const toggleWishlist = (productId) => {
        if (wishlist.includes(productId)) {
            // If product already in wishlist, remove it
            setWishlist(wishlist.filter(id => id !== productId));
        } else {
            // If product not in wishlist, add it
            setWishlist([...wishlist, productId]);
        }
    };

    return (
        <>
            <TopHeader />
            <div className="page__content nobp">
                <div className="page__main-content" id="mainContent">
                    <div className="container-fluid d-flex flex-row  justify-content-between">
                        {/* plp intro*/}
                        <EditFilter />
                        <div className="container filter-result-container px-0">
                            <div className="row no-gutters mx-0"
                                id="filter-result-container"
                                style={{
                                    opacity: '1',
                                    pointerEvents: 'auto'
                                }}
                            >
                                <div
                                    className="col-12 col-md-12 col-lg-12 col-xl-12 mb-4 mb-xl-3 item-container"
                                    data-app-search--listing-filters-target="item"
                                >
                                    <div
                                        className="item-card2"
                                        data-action="click->app-search--listing-filters#clickThroughTracking"
                                        id="33216"
                                    >
                                        <div
                                            className="row d-flex flex-row position-relative wishlist-heart-33216"
                                            data-controller="wishlisting"
                                            data-target="wishlisting.heartMainContainer"
                                        >
                                            {products.map((product, index) => (
                                                <div key={product.id} className="col-md-3 mb-4">
                                                    <Link
                                                        to={`/ProductLanding/${product.id}/${encodeURIComponent(product.name)}`}
                                                        className="product-card-link"
                                                        onMouseEnter={() => setHoveredIndex(index)}
                                                        onMouseLeave={() => setHoveredIndex(null)}
                                                    >
                                                        {hoveredIndex === index ? (
                                                            <img
                                                                src={product.productImages[1].url}
                                                                alt={product.name}
                                                                className="product-card__image"
                                                            />
                                                        ) : (
                                                            <img
                                                                src={product.productImages[0].url}
                                                                alt={product.name}
                                                                className="product-card__image"
                                                            />
                                                        )}
                                                    </Link>
                                                    <div className="product-card__info">
                                                        <p className="brand mb-1">{product.name}</p>
                                                        <p className="product-card__brand">Brand: <b style={{ fontSize: "11px !important" }}>{product.brand}</b></p>
                                                        <p className="break my-2" />
                                                        <p className="start-price mb-1">Rent Price: {product.rentPrice4Days}</p>
                                                        <p className="retail-price mb-1 pb-3"><del>RRP:{product.rrp}</del></p>
                                                    </div>
                                                    <button
                                                        className="wishlist-icon"
                                                        onClick={() => toggleWishlist(product.id)}
                                                        style={{
                                                            position: "absolute",
                                                            top: "10px",
                                                            right: "10px",
                                                            zIndex: "3",
                                                            cursor: "pointer",
                                                            background: "transparent",
                                                            border: "none",
                                                        }}
                                                    >
                                                        {wishlist.includes(product.id) ? (
                                                            <img
                                                                alt="An icon of a heart"
                                                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/heart-filled.svg"
                                                            />
                                                        ) : (
                                                            <img
                                                                alt="An icon of a heart"
                                                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/heart-7dd5f36c98ccda2c8242b92c95914d6e.svg"
                                                            />
                                                        )}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* plp results*/}
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
            <Footer />
        </>
    );
}

export default Alemais;
