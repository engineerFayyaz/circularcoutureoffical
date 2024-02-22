import React from "react";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EmailSubscription from "../../Components/EmailSubscription";
import { Link } from "react-router-dom";
import NowTrending from "../../Components/NowTrending/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <>
      <>
        <TopHeader />
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
                    <Link
                      className="btn btn-primary -white rounded-0 text-uppercase header-btn"
                      to="/HowToLend"
                    >
                      RENT / BUY
                    </Link>
                    <Link
                      className="btn btn-primary -white rounded-0 text-uppercase header-btn"
                      to="/SellingOrRenting"
                    >
                      BUY / SELL
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* product crousel  */}
          <NowTrending />
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
                      <Link
                        className="btn  rounded-0 text-uppercase header-btn"
                        to="/HowToLend"
                      >
                        HOW IT WORKS
                      </Link>
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
                  <div className="img-fluid">
                    <img
                      src="/web-images/LIS_028 _. _DIVINITY WHEEL_ RUFFLE EMBROIDERED COTTON DRESS IN WHITE/0D0A0584.jpg"
                      alt=""
                      width={250}
                      loading="lazy"
                    />
                    <div className="collection-title text-center mt-3">
                      <h4>ZIMMERMANN</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img-fluid">
                    <img
                      src="/web-images/LIS_008 _ REBECCA VALLENCE Dominique Puff-sleeves Mini Dress In Pink_black/0D0A0619.jpg"
                      alt=""
                      width={250}
                      loading="lazy"
                    />
                    <div className="collection-title text-center mt-3">
                      <h4>Rebecca</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img-fluid">
                    <img
                      src="/web-images/LIS_006 _ Rebecca Vallance Low bow dress/0D0A0651.jpg"
                      alt=""
                      width={250}
                      loading="lazy"
                    />
                    <div className="collection-title text-center mt-3">
                      <h4>Isabel marant</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="img-fluid">
                    <img
                      src="/web-images/LIS_07 _ ISABEL MARANT Getya short dress/0D0A0599.jpg"
                      alt=""
                      width={250}
                      loading="lazy"
                    />
                    <div className="collection-title text-center mt-3">
                      <h4>emilio pucci</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row text-center my-5 mx-auto d-flex align-items-center justify-content-center">
                <div className="shop-all text-center">
                  <Link to="/Collections/NewArrival">
                    <button className="btn bg-light py-2 px-5">Shop All</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* collage images */}
          <section>
            <div className="container collage-main my-5">
              <div className="row collage-single d-flex align-items-center justify-content-center">
                <div
                  className="collage-content collage-content-home text-center"
                  style={{ paddingLeft: "35rem !important" }}
                >
                  <h4 className="title">AUTUMN '23</h4>
                  <Link to="/Collections/Resale">
                    <button className="btn bg-light text-dark">
                      VIEW COLLECTION
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row d-flex justify-content-between gap-4 mt-3">
                <div className="col px-0">
                  <Link to="#">
                    <img
                      src="images/background-images/collage3.png"
                      alt=""
                      height={400}
                      width="100%"
                    />
                  </Link>
                </div>
                <div className="col px-0">
                  <Link to="#">
                    <img
                      src="images/background-images/collage2.png"
                      alt=""
                      height={400}
                      width="100%"
                      loading="lazy"
                    />
                  </Link>
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
                  <img
                    src="images/gallery-images/4.png"
                    alt=""
                    width="100%"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/gallery-images/3.png"
                    alt=""
                    width="100%"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/gallery-images/2.png"
                    alt=""
                    width="100%"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/gallery-images/1.png"
                    alt=""
                    width="100%"
                    loading="lazy"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/gallery-images/5.png"
                    alt=""
                    width="100%"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="row text-center d-flex align-items-center justify-content-center my-5">
                <div className="follow-us">
                  <button className="bg-light py-2 px-5">Follow US</button>
                  <div className="icons mt-3">
                  <FontAwesomeIcon icon={faFacebook} className={"ms-2"}/>
                  <FontAwesomeIcon icon={faInstagram} className={"ms-2"}/>
                  <FontAwesomeIcon icon={faTwitter} className={"ms-2"}/>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <EmailSubscription />
        <Footer />
      </>
    </>
  );
};
export default Home;
