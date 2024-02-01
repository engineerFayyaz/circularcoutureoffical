import React from "react";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EmailSubscription from "../../Components/EmailSubscription";
const Home = () => {
  return (
    <>
      <>
      <TopHeader/>
        <div
          className="main-container no-overflow-x pt-0"
          data-controller="homepage"
        >
          <div className="component-container collage-container g-0">
            <div className="component banner row">
              <div className="col d-flex align-items-center justify-content-center justify-content-md-start">
                <div className="banner-content">
                  <h2 className="title">CIRCULAR COUTURE</h2>
                  <p className="description">Designer cloth with a purpose</p>
                  <div className="button-component">
                    <a
                      className="btn btn-primary -white rounded-0 text-uppercase header-btn"
                      href="how-to-rent.html"
                    >
                      RENT / BUY
                    </a>
                    <a
                      className="btn btn-primary -white rounded-0 text-uppercase header-btn"
                      href="selling-or-renting.html"
                    >
                      BUY / SELL
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product crousel  */}
          <section>
            <div className="container product-section">
              <div className="title d-flex align-items-center justify-content-between pe-5">
                <h4>Now Trending</h4>
                <span>
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </div>
              <div
                id="productCarousel"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner d-flex align-items-center justify-content-between">
                  {/* Product Item 1 */}
                  <div className="carousel-item active">
                    <div className="product-item">
                      <a href="product-details-page.html">
                        <img
                          src="images/product-images/p1.png"
                          className="img-fluid"
                          alt="Product 1"
                        />
                      </a>
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
                  <div className="carousel-item active">
                    <div className="product-item">
                      <a href="product-details-page.html">
                        <img
                          src="images/product-images/p2.png"
                          className="img-fluid"
                          alt="Product 1"
                        />
                      </a>
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
                  <div className="carousel-item active">
                    <div className="product-item">
                      <a href="product-details-page.html">
                        <img
                          src="images/product-images/p3.png"
                          className="img-fluid"
                          alt="Product 1"
                        />
                      </a>
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
                  <div className="carousel-item active">
                    <div className="product-item">
                      <a href="product-details-page.html">
                        {" "}
                        <img
                          src="images/product-images/p4.png"
                          className="img-fluid"
                          alt="Product 1"
                        />
                      </a>
                      <div className="product-description p-2">
                        <h5 className="d-flex align-items-center justify-content-between">
                          ZIMMERMANN
                          <span className="heart-icon">
                            <i className="fa-regular fa-heart" />
                          </span>
                        </h5>
                        <p className="catagory">Two tone sequin top</p>
                        <p className="price">
                          <strike>RRP $350</strike>
                        </p>
                        <p className="rent-buy d-flex align-items-center justify-content-between">
                          RENT $40 <span>BUY $250</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Navigation Buttons */}
                {/* <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> */}
              </div>
            </div>
          </section>
          {/* banner 2 */}
          <section>
            <div className=" component-container-2 mt-5">
              <div className="single-image row">
                <div className="col d-flex align-items-center justify-content-start justify-content-md-start">
                  <div className="single-banner-content text-start px-5">
                    <h2 className="title">
                      SUSTAINABLE <br />
                      FASHION
                    </h2>
                    <p className="description">Our Future Depends On You</p>
                    <div className="button-component">
                      <a
                        className="btn  rounded-0 text-uppercase header-btn"
                        href="how-to-lend.html"
                      >
                        HOW IT WORKS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* collections */}
          <section>
            <div className="container collections">
              <div className="row">
                <div className="col">
                  <div className="collection-item">
                    <img src="images/collections/1.png" alt="" width={250} />
                    <div className="collection-title text-center mt-3">
                      <h4>ZIMMERMANN</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="collection-item">
                    <img src="images/collections/2.png" alt="" width={250} />
                    <div className="collection-title text-center mt-3">
                      <h4>Balmain</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="collection-item">
                    <img src="images/collections/3.png" alt="" width={250} />
                    <div className="collection-title text-center mt-3">
                      <h4>Isabel marant</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="collection-item">
                    <img src="images/collections/4.png" alt="" width={250} />
                    <div className="collection-title text-center mt-3">
                      <h4>emilio pucci</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row text-center my-5 mx-auto d-flex align-items-center justify-content-center">
                <div className="shop-all text-center">
                  <a href="collections/new_arrivals.html">
                    <button className="btn bg-light py-2 px-5">Shop All</button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* collage images */}
          <section>
            <div className="container collage-main my-5">
              <div className="row collage-single d-flex align-items-center justify-content-center">
                <div
                  className="collage-content text-center"
                  style={{ paddingLeft: "35rem !important" }}
                >
                  <h4 className="title">AUTUMN '23</h4>
                  <a href="collections/resale.html">
                    <button className="btn bg-light text-dark">
                      VIEW COLLECTION
                    </button>
                  </a>
                </div>
              </div>
              <div className="row d-flex justify-content-between gap-4 mt-3">
                <div className="col px-0">
                  <a href="#">
                    <img
                      src="images/background-images/collage3.png"
                      alt=""
                      height={400}
                      width="100%"
                    />
                  </a>
                </div>
                <div className="col px-0">
                  <a href="#">
                    <img
                      src="images/background-images/collage2.png"
                      alt=""
                      height={400}
                      width="100%"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* gallerty */}
          <section>
            <div className="container-fluid gallery-main px-0">
              <div className="row gallery-content-top  text-center">
                <div className="title">
                  <h2>INSTA-PIRATIONAL</h2>
                  <p>#CIRCULARCOUTURE</p>
                  <hr />
                </div>
              </div>
              <div className="row d-flex">
                <div className="col">
                  <img src="images/gallery-images/4.png" alt="" width="100%" />
                </div>
                <div className="col">
                  <img src="images/gallery-images/3.png" alt="" width="100%" />
                </div>
                <div className="col">
                  <img src="images/gallery-images/2.png" alt="" width="100%" />
                </div>
                <div className="col">
                  <img src="images/gallery-images/1.png" alt="" width="100%" />
                </div>
                <div className="col">
                  <img src="images/gallery-images/5.png" alt="" width="100%" />
                </div>
              </div>
              <div className="row text-center d-flex align-items-center justify-content-center my-5">
                <div className="follow-us">
                  <button className="bg-light py-2 px-5">Follow US</button>
                  <div className="icons mt-3">
                    <i className="fa-brands fa-facebook-f ms-2" />
                    <i className="fa-brands fa-instagram ms-2" />
                    <i className="fa-brands fa-twitter ms-2" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row  mx-0 mt-5 py-4">
            <div className=" col-lg-8 mx-auto d-flex justify-content-center flex-column guest-list-button">
              <h1 className="mt-2">
                <span>guest list</span>
              </h1>
              <h5 className="mt-3">
                <span>
                  Join our guest list for the latest in trending and fashion
                  updates.
                </span>
              </h5>
              <input className="mt-5" type="text" placeholder=" Email" />
              <a href="list-item-step-two.html">
                {" "}
                <button className="mt-4 mb-4 btn-signup1">sign up</button>
              </a>
            </div>
          </div>
        </div>
        <EmailSubscription />
       <Footer/>
        
      </>
    </>
  );
};
export default Home;
