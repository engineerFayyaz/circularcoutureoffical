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
