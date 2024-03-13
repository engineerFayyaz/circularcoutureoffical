import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EditFilter from "../../Components/EditFilter";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserFromLocalStorage } from '../../storage/loggedInUserLocalSt';

const Alemais = () => {
    const { designerId, designerName } = useParams();
    const [products, setProducts] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch data from the API endpoint using the designerId
        fetch(`https://circularclientapi.azurewebsites.net/api/products/designer/${designerId}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched products
                setProducts(data.results);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
            setUser(getUserFromLocalStorage());
    }, [designerId]); // Add designerId as a dependency to re-fetch data when it changes

    // Function to handle adding/removing products from wishlist
    const toggleWishlist = async (productId) => {
        if (!user) {
            toast.error('Please login first');
            return;
        }
    
        try {
            const response = await fetch('https://circularclientapi.azurewebsites.net/api/wishlist-products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId: productId,
                    userId: user.id,
                    deleted: true,
                    createdDate: new Date().toISOString()
                })
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to add product to wishlist');
            }

            // Update wishlist state
            setWishlist([...wishlist, productId]);

            toast.success('Product added to wishlist');
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
            toast.error(error.message);
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
                                            className="row d-flex flex-row position-relative wishlist-heart-33216 justify-content-between"
                                            data-controller="wishlisting"
                                            data-target="wishlisting.heartMainContainer"
                                        >
                                             {products.map(product => (
                        <div key={product.id} className="col-5 col-lg-3 col-md-3 mb-4">
                          <Link to={`/ProductLanding/${product.id}/${encodeURIComponent(product.name)}`} className="card-link">
                            <div className="">
                              {product.productImages.length > 0 && <img src={product.productImages[0].url} className="card-img-top" alt={product.name} width={100} height={250} style={{ objectFit: "contain" }} />}

                              <div className="product-card__info p-2">
                              <p className="brand mb-1">{product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name}</p>
                                <p className="product-card__brand">Brand: <b style={{ fontSize: "11px !important" }}>{product.brand}</b></p>
                                <p className="break my-2" />
                                <p className="start-price mb-1">Sell Price: {product.sellPrice}</p>
                                <p className="retail-price mb-1 pb-3"><b>R-Price (4 days):{product.rentPrice4Days}</b></p>
                              </div>
                            </div>

                          </Link>
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
                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/shaded-heart-72ef5d386ff6a38664ff1bb60bfdddff.svg"
                                style={{ fill: 'red' }}
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
