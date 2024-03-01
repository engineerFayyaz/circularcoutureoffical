import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EmailSubscription from "../../Components/EmailSubscription";
import EditFilter from "../../Components/EditFilter";
import GetEdits from "../../Components/GetEdits";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
      const fetchProducts = async () => {
          try {
              const response = await fetch(`https://localhost:7220/api/products`, {
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
  }, []);

  console.log("products new arrrival ", products)

  return (
    <>
      <TopHeader />

      <div className="page__content nobp ">
        <div className="page__main-content" id="mainContent">
          <div className="container pl-5 pb-5 mt-0">
            <div>
              <h1 className="title">
                <i>New Arrivals</i>
              </h1>
              <div
                className="description mt-2 transition collapsed"
                data-target="plp--description.content"
              >
                <div className="trix-content">
                  Consider this your one-stop shop for event dressing. From floor-length gowns to fitted midis from New Arrivals, 16Arlington, Taller Marmo and more.
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
                      className="row d-flex flex-row position-relative wishlist-heart-33216"
                      data-controller="wishlisting"
                      data-target="wishlisting.heartMainContainer"
                    >
                      {products.map(product => (
                        <div key={product.id} className="col-md-3 mb-4">
                          <Link to={`/ProductDetail/${product.id}/${encodeURIComponent(product.name)}`} className="card-link">
                            <div className="">
                              {product.productImages.length > 0 && <img src={product.productImages[0].url} className="card-img-top" alt={product.name} width={100} height={250} style={{objectFit:"contain"}}/>}
                  
                              <div className="product-card__info p-2">
                                <p className="brand mb-1">{product.name}</p>
                                <p className="product-card__brand">Brand: <b style={{ fontSize: "11px !important" }}>{product.brand}</b></p>
                                <p className="break my-2" />
                                <p className="start-price mb-1">Sell Price: {product.sellPrice}</p>
                                <p className="retail-price mb-1 pb-3"><b>R-Price (4 days):{product.rentPrice4Days}</b></p>
                              </div>
                            </div>
                          </Link>
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

export default NewArrival;
