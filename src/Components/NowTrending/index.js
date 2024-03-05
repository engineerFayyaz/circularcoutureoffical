import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserFromLocalStorage } from '../../storage/loggedInUserLocalSt';
import "../../Components/NowTrending/NowTrending.css";

const NowTrending = () => {
    const [products, setProducts] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchProducts();
        setUser(getUserFromLocalStorage());
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://localhost:7220/api/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.results.map(product => ({
                ...product,
                hovered: false
            })));
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const toggleWishlist = async (productId) => {
        if (!user) {
            toast.error('Please login first');
            return;
        }
    
        try {
            const response = await fetch('https://localhost:7220/api/wishlist-products', {
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
        <section>
            <div className="container product-section">
                <div className="title d-flex align-items-center justify-content-between pe-5">
                    <h4>Now Trending</h4>
                    <span>
                        <i className="fa-solid fa-arrow-right" />
                    </span>
                </div>
                <div className="container p-3">
                    <Carousel indicators={false} controls={false} interval={3000} pause={false} nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />} prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />}>
                        <Carousel.Item>
                            <div className="row">
                                {products.slice(0, 4).map((product, index) => (
                                    <div 
                                        key={index} 
                                        className="col-md-3 col-6 col-8"
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div className="product-item">
                                            <Link
                                                to={{
                                                    pathname: `/ProductLanding/${product.id}/${product.name}`,
                                                    state: { productId: product.id }
                                                }}
                                            >
                                                <img
                                                    src={product.productImages[0].url}
                                                    className="img-fluid main-image"
                                                    alt={`Product ${index + 1}`}
                                                    loading="lazy"
                                                />
                                                {hoveredIndex === index && (
                                                    <img
                                                        src={product.productImages[1].url}
                                                        className="img-fluid second-image"
                                                        alt={`Second Product ${index + 1}`}
                                                        loading="lazy"
                                                    />
                                                )}
                                            </Link>
                                            <div className="product-description p-2">
                                                <h5 className="d-flex align-items-center justify-content-between">
                                                    {product.brand}
                                                    <span 
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
