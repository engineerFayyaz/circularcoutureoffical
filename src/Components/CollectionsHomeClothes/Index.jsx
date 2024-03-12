import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserFromLocalStorage } from '../../storage/loggedInUserLocalSt';


const CollectionsHomeClothes =()=>{
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [wishlist, setWishlist] = useState([]);
    const [user, setUser] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch(`https://circularclientapi.azurewebsites.net/api/products/catogery-Gen/4`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json'
              }
            });
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data.results);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
        setUser(getUserFromLocalStorage());
      }, []);
    
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

      const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Show 4 products per slide
        slidesToScroll: 1, // Scroll 1 product at a time
        // autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Show 2 products per slide on smaller screens
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3, // Show 3 products per slide on medium screens
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4, // Show 4 products per slide on larger screens
                },
            },
        ],
    };


    return(
        <>
         <section>
            <div className="container collections">
              <div className="row">
              <Slider {...sliderSettings}>
              {products.map((product,index) => (
                        <div key={product.id} className="product-item"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <Link to={`/ProductLanding/${product.id}/${encodeURIComponent(product.name)}`} className="card-link">
                            <div className="img-fluid main-image">
                              {product.productImages.length > 0 && <img src={product.productImages[0].url} className="card-img-top" alt={product.name} width={100} height={250} style={{ objectFit: "contain" }} />}
                              {hoveredIndex === index && (
                                        <img
                                            src={product.productImages[1].url}
                                            className="img-fluid second-image"
                                            alt={`Second Product ${index + 1}`}
                                            loading="lazy"
                                        />
                                    )}

                              <div className="product-card__info p-2">
                                {/* <p className="brand mb-1">{product.name}</p> */}
                                <p className="product-card__brand"> <b style={{ fontSize: "11px !important" }}>{product.brand}</b></p>
                                {/* <p className="break my-2" /> */}
                                {/* <p className="start-price mb-1">Sell Price: {product.sellPrice}</p> */}
                                {/* <p className="retail-price mb-1 pb-3"><b>R-Price (4 days):{product.rentPrice4Days}</b></p> */}
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
            </Slider>
              </div>
              <div className="row text-center  mx-auto d-flex align-items-center justify-content-center">
                <div className="shop-all text-center ">
                  <Link to="/Collections/NewArrival">
                    <button className="btn bg-light py-2 px-5">Shop All</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}
export default CollectionsHomeClothes;