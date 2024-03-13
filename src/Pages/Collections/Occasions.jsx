

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EmailSubscription from "../../Components/EmailSubscription";
import EditFilter from "../../Components/EditFilter";
import GetEdits from "../../Components/GetEdits";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserFromLocalStorage } from '../../storage/loggedInUserLocalSt';

const Occasions = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await fetch(`https://circularclientapi.azurewebsites.net/api/products/catogery-Gen/9`, {
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
  return (
    <>
      <TopHeader />

      <div className="page__content nobp ">
        <div className="page__main-content" id="mainContent">
          <div className="container pl-5 pb-5 mt-0">
            <div>
              <h1 className="title">
                <i>Occasions</i>
              </h1>
              <div
                className="description mt-2 transition collapsed"
                data-target="plp--description.content"
              >
                <div className="trix-content">
                Elevate every moment with Circular's occasions collection. From weddings to parties, find sustainable elegance in every piece. Make lasting memories in fashion that's as conscious as it is captivating.
                </div>
              </div>
            </div>
          </div>
          <GetEdits/>
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
                              {product.productImages.length > 0 && <img src={product.productImages[0].url} className="card-img-top" alt={product.name.length > 20 ? `${product.name.substring(0, 20)}...` : product.name} width={100} height={250} style={{objectFit:"contain"}}/>}
                  
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
        </div>
      </div>

      <EmailSubscription />
      <Footer />
    </>
  )
};

export default Occasions;
