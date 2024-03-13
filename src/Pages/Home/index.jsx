import React from "react";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EmailSubscription from "../../Components/EmailSubscription";
import { Link } from "react-router-dom";
import NowTrending from "../../Components/NowTrending/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { PopupProvider } from "../../PopupContext";
import CollectionsHomeClothes from "../../Components/CollectionsHomeClothes/Index";

const Home = () => {
  return (
    <PopupProvider>
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
         <CollectionsHomeClothes/>
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
              <div className="row d-flex justify-content-between mt-3">
                <div className="col-md-6 px-0" style={{height:"380px"}}>
                  <Link to="#">
                    <img
                      src="images/background-images/collage3.png"
                      alt=""
                      style={{
                        height:"100%"
                      }}
                      className="w-100 h-lg-60 h-60 h-md-60 object-fit-fill"
                    />
                  </Link>
                </div>
                <div className="col-md-6 px-0" style={{height:"380px"}}>
                  <Link to="#">
                    <img
                      src="images/background-images/collage2.png"
                      alt=""
                      loading="lazy"
                      className="w-100 h-lg-60  h-md-60 object-fit-fill"
                      style={{
                        height:"100%"
                      }}
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
                  <FontAwesomeIcon icon={faFacebook} className={"ms-2 icon-social"}/>
                  <FontAwesomeIcon icon={faInstagram} className={"ms-2 icon-social"}/>
                  <FontAwesomeIcon icon={faTwitter} className={"ms-2 icon-social"}/>

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
    </PopupProvider>
  );
};
export default Home;
