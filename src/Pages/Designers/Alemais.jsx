import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EditFilter from "../../Components/EditFilter";

const Alemais = () => {
    const { designerId, designerName } = useParams();
    const [products, setProducts] = useState([]);

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
        console.log("designerId",products)
    return (
        <>
            <TopHeader />
            <div className="page__content nobp">
                <div className="page__main-content" id="mainContent">
                    {/* plp intro*/}
                    <div className="plp-intro">
                        <div className="container">
                            {/* Render products */}
                            <div className="product-cards">
                                {products.map(product => (
                                  <Link
                                  key={product.id}
                                  to={`/ProductDetail/${product.id}/${encodeURIComponent(product.name)}`}
                                  className="product-card-link"
                              >
                                        <div className="product-card">
                                            <img
                                                src={product.productImages[0].url}
                                                alt={product.name}
                                                className="product-card__image"
                                            />
                                            <div className="product-card__info">
                                                <h2 className="product-card__title">{product.name}</h2>
                                                <p className="product-card__brand">Brand: {product.brand}</p>
                                                <p className="product-card__rent-price">Rent Price: {product.rentPrice4Days}</p>
                                                <p className="product-card__sell-price">Sale Price: {product.sellPrice}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
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
