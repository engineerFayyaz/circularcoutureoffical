import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

const NowTrending = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://localhost:7220/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.results);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <section>
            <div className="container product-section">
                <div className="title d-flex align-items-center justify-content-between pe-5">
                    <h4>Now Trending</h4>
                    <span>
                        <i className="fa-solid fa-arrow-right" />
                    </span>
                </div>
                <div className="container">
                    <Carousel indicators={false} controls={false}>
                        <Carousel.Item>
                            <div className="row">
                                {products.slice(0, 4).map((product, index) => (
                                    <div key={index} className="col-md-3 col-6 col-8">
                                        <div className="product-item">
                                            <Link
                                                to={{
                                                    pathname: `/ProductDetail/${product.id}`,
                                                    state: { productId: product.id }
                                                }}
                                            >
                                                {product.productImages.length > 0 && (
                                                    <img
                                                        src={product.productImages[0].url}
                                                        className="img-fluid"
                                                        alt={`Product ${index + 1}`}
                                                        loading="lazy"
                                                    />
                                                )}
                                            </Link>
                                            <div className="product-description p-2">
                                                <h5 className="d-flex align-items-center justify-content-between">
                                                    {product.brand}
                                                    <span className="heart-icon">
                                                        <i className="fa-regular fa-heart" />
                                                    </span>
                                                </h5>
                                                <p className="catagory">{product.category}</p>
                                                <p className="price">
                                                    <strike>{`RRP ${product.sellPrice}`}</strike>
                                                </p>
                                                <p className="rent-buy d-flex align-items-center justify-content-between">
                                                    {`RENT ${product.rrp}`} <span>{`BUY ${product.sellPrice}`}</span>
                                                </p>
                                            </div>
                                        </div>
        <>
            <section>
                <div className="container product-section">
                    <div className="title d-flex align-items-center justify-content-between pe-5">
                        <h4>Now Trending</h4>
                        <span>
                            <i className="fa-solid fa-arrow-right" />
                        </span>
                    </div>
                    <div className="container">
                        <div className="row">
                            {/* Product Item 1 */}
                            <div className="col-md-3 col-6 col-8 ">
                                <div className="product-item" >
                                    < div onClick={() => setShowPopup(true)} style={{ cursor: 'pointer' }}>
                                        <img
                                            src="/web-images/LIS_023 ZIMMERMANN Violet Floral Linen Flowy Maxi Dres/0D0A0678.jpg"
                                            className="img-fluid"
                                            alt="Product 1"
                                            loading="lazy"
                                            data-target="#productdetail"
                                        />
                                    </div>

                                    {showPopup && <FullWindowPopup show={showPopup} onClose={handleClosePopup} />}
                                    <div />
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
                            <div className="col-md-3 col-6 col-8">
                                <div className="product-item">
                                    <Link to="/ProductDetail">
                                        <img
                                            src="/web-images/LIS_013 ZIMMERMANN Leopard dress/1.jpeg"
                                            className="img-fluid"
                                            alt="Product 1"
                                            loading="lazy"
                                            data-target="#productdetail"
                                        />
                                    </Link>
                                    <FullWindowPopup show={showPopup} onClose={handleClosePopup} />
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

                            <div className="col-md-3 col-6 col-8">

                                <div className="product-item">

                                    <Link to="/ProductDetail">

                                        <img

                                            src="/web-images/LIS_026 _ Rihanna Cutout Printed Washed-silk Midi Dress In Pink/0D0A0633.jpg"

                                            className="img-fluid"

                                            alt="Product 1"

                                            loading="lazy"

                                            data-target="#productdetail"

                                        />

                                    </Link>
                                    <FullWindowPopup show={showPopup} onClose={handleClosePopup} />
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
                            <div className="col-md-3 col-6 col-8">
                                <div className="product-item">
                                    <Link to="/ProductDetail">
                                        <img
                                            src="/web-images/LIS_021 DODO BAR OR Printed Cotton Maxi Dress In Colorful/0D0A0710.jpg"
                                            className="img-fluid"
                                            alt="Product 1"
                                            loading="lazy"
                                            data-target="#"
                                        />
                                    </Link>
                                    <FullWindowPopup show={showPopup} onClose={handleClosePopup} />
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
                                ))}
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default NowTrending;
