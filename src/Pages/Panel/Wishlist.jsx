import React, { useState, useEffect } from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import DashboardSidebar from "../../Components/DashboardSidebar";
import { Link } from "react-router-dom";
import { getUserFromLocalStorage } from "../../storage/loggedInUserLocalSt";
// import "../../Pages/Panel/wishlist.css"

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const userFromLocalStorage = getUserFromLocalStorage();
    setUser(userFromLocalStorage);
    if (userFromLocalStorage) {
      fetchWishlistProducts(userFromLocalStorage.id);
    }
  }, []);

  useEffect(() => {
    if (wishlistProducts.length > 0) {
      fetchProductsDetails();
    }
  }, [wishlistProducts]);

  const fetchWishlistProducts = async (userId) => {
    try {
      const response = await fetch(
        `https://localhost:7220/api/wishlist-products/user/${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch wishlist products");
      }
      const data = await response.json();
      setWishlistProducts(data.results);
    } catch (error) {
      console.error("Error fetching wishlist products:", error);
    }
  };

  const fetchProductsDetails = async () => {
    try {
      const promises = wishlistProducts.map(async (wishlistProduct) => {
        const response = await fetch(
          `https://localhost:7220/api/products/${wishlistProduct.productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        return response.json();
      });
      const productsDetails = await Promise.all(promises);
      setProductsData(productsDetails);
    } catch (error) {
      console.error("Error fetching products details:", error);
    }
  };

  return (
    <>
      <TopHeader />
      <div className="main-container -with-cta-banner" data-controller="wishlists--page">
        <div className="dashboard-layout -wishlist">
          <DashboardSidebar />
          <div className="second-section -responsive mobile-px-0px mb-10 pb-0">
            <div className="dashboard-header mobile-px-20px">
              <div className="row mobile-no-gutters">
                <div className="col-sm-5">
                  <h1>Wishlists</h1>
                </div>
              </div>
            </div>
            <div
              id="collapseItems"
              className="collapse position-relative show bg-hurr-transparent"
              aria-labelledby="headingItems"
              data-parent="#accordionItems"
            >
              <div className="card-body mb-5 mobile-mb-0px">
                {/* Render wishlist products here */}
                <div className="container px-0">
                <turbo-frame className="row no-gutters mx-0" id="wishlist_result_frame">
                <div
          className="item-card-container col-12 col-sm-6 col-md-4 col-lg-4 js-wishlist-listing-card px-15px"
          id="listing-85698"
        >
          <div className="item-card -wishlist w-100 mt-4 mb-0 mx-auto position-relative d-block bg-white py-3">
                  {productsData.map((productData, index) => (
                    <div key={index}>
                      <div className="item-card-container js-wishlist-listing-card">
                        <div className="item-card -wishlist bg-white py-3">
                          <Link className="item-link" to={`/ProductLanding/${productData.results.id}/${encodeURIComponent(productData.results.name)}`}>
                            <div className="text-center">
                              {/* Check if productImages array exists and is not empty */}
                              {productData.results.productImages && productData.results.productImages.length > 0 ? (
                                <div className="image-container">
                                  {productData.results.productImages.slice(0, 1).map((image, i) => (
                                    <img
                                      key={i}
                                      alt={`Image ${i + 1} of ${productData.results.name}`}
                                      className="item-image"
                                      src={image.url} /* Use the URL of the image */
                                    />
                                  ))}
                                </div>
                              ) : (
                                <div className="placeholder-image">Image not available</div>
                              )}
                              <div className="position-relative text-uppercase">
                                {/* <span className="listing-tag -collections">Managed</span> */}
                              </div>
                              {/* Update with actual product name from API response */}
                              <div className="item-name">{productData.results.name}</div>
                              <p className="item-size mb-0">Size: {productData.results.size}</p> {/* Update with actual size from API response */}
                              <div className="separator mx-auto" />
                              {/* Update with actual rent price from API response */}
                              <div className="item-price">RENT FROM AU${productData.results.rentPrice4Days}</div>
                              {/* Update with actual retail price from API response */}
                              <p className="item-rrp text-uppercase mb-0">Retail AU${productData.results.sellPrice}</p>
                              {/* Add product description */}
                              {/* <p className="item-description">{productData.results.details}</p> */}
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                   </div>
                   </turbo-frame>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EmailSubscription />
      <Footer />
    </>
  );

};

export default Wishlist;
