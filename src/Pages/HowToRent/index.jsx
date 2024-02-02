import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const HowToRent = () =>{
    return (
        <>
        <TopHeader />

        <div
  className="main-container no-overflow-x pt-0"
  data-controller="homepage"
>
  <div className="component-container collage-container g-0">
    <div
      className="component banner row"
      style={{
        backgroundImage: 'url(images/background-images/how-it-works.jpeg)',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover'
      }}
    >
      <div className="col d-flex align-items-center justify-content-center justify-content-md-start">
        <div className="banner-content">
          <h2 className="title">
            HOW IT WORKS
          </h2>
          <p className="description">
            Get the best from fashion
          </p>
          <div className="">
            <a
              className="btn btn-primary -white rounded-0 text-uppercase "
              href="#"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div className="btns">
      <div className="start-lending text-center my-5">
        <span>
          <a href="/SellingOrRenting">
            <button className="px-4 bg-light text-dark py-1">
              {' '}HOW TO SELL
            </button>
          </a>
          <a href="/HowToLend" className="pl-1">
            <button className="px-4 bg-light text-light py-1 ">
              {' '}HOW TO LEND
            </button>
            {' '}
          </a>
          <a href="/HowToRent">
            <button className="px-4 bg-light text-dark py-1 active">
              HOW TO RENT
            </button>
            {' '}
          </a>
          <a href="#">
            <button className="px-4 bg-light text-dark py-1">
              {' '}HOW TO BUY
            </button>
          </a>
        </span>
      </div>
    </div>
  </section>
  <section>
    <div className="container collections">
      <div className="row d-block align-items-center justify-content-center mb-5">
        <div className="title text-center">
          <h2>
            HOW TO RENT
          </h2>
          <p>
            4 steps to your perefect outfit
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="collection-item">
            <img
              alt=""
              src="images/icons/heart.png"
              width="60"
            />
            <div className="collection-title text-center mt-5">
              <h4>
                CHOOSE
              </h4>
              <p>
                Sign into your account.
                <br />
                Not a member?Register{' '}
                <br />
                to join.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collection-item">
            <img
              alt=""
              src="images/icons/2023.png"
              width="60"
            />
            <div className="collection-title text-center mt-5">
              <h4>
                SELECT
              </h4>
              <p>
                Upload your item{' '}
                <br />
                using your phone{' '}
                <br />
                or computer
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collection-item">
            <img
              alt=""
              src="images/icons/paper-bag.png"
              width="60"
            />
            <div className="collection-title text-center mt-5">
              <h4>
                RECIEVE
              </h4>
              <p>
                Accept requests within{' '}
                <br />
                48 hours, and send your item{' '}
                <br />
                on its way.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collection-item">
            <img
              alt=""
              src="images/icons/dummy.png"
              width="60"
            />
            <div className="collection-title text-center mt-5">
              <h4>
                WEAR
              </h4>
              <p>
                Get paid once your
                <br />
                rental is returned{' '}
                <br />
                safe and sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="start-lending text-center my-5">
    <button className="px-4 bg-light text-dark py-1">
      {' '}START RENTING
    </button>
  </div>
  <section>
    <div className=" component-container-2 mt-5">
      <div
        className="single-image row"
        style={{
          backgroundImage: 'url(images/background-images/how-to-rent.png) !important',
          backgroundPosition: 'top !important',
          backgroundSize: 'cover'
        }}
      >
        <div className="col d-flex align-items-center justify-content-start justify-content-md-start">
          <div className="single-banner-content text-start px-5">
            <h2 className="title mb-4">
              THE PERKS
            </h2>
            <ul
              className="text-light mt-0 pt-0"
              style={{
                listStyle: 'none'
              }}
            >
              <li className="mb-3 mt-4 ">
                Wear high end fashion at modest prices
              </li>
              <li className="mb-3 ">
                Reduce your fashion footprint
              </li>
              <li className="mb-3 ">
                Descover new designers
              </li>
              <li className="mb-3 ">
                Experiment wuth style
              </li>
              <li className="mb-5 ">
                Designer outfit without the investment
              </li>
            </ul>
            <div className="button-component ">
              <a
                className="btn rounded-0 text-uppercase header-btn ml-4"
                href="#"
              >
                START RENTING
              </a>
            </div>
          </div>
        </div>
        \`
      </div>
    </div>
  </section>
  <section>
    <div className="start-lending text-center pt-5">
      <h1>
        START RENTING
      </h1>
      <p>
        Choose a stunning outfit without the expensive price tag
      </p>
    </div>
  </section>
  <section>
    <div className="container product-section">
      <div className="title d-flex align-items-center justify-content-between pe-5">
      </div>
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="productCarousel"
      >
        <div className="carousel-inner d-flex align-items-center justify-content-between">
          <div className="carousel-item active">
            <div className="product-item">
              <a href="/ProductDetail">
                <img
                  alt="Product 1"
                  className="img-fluid"
                  src="images/product-images/pic1.png"
                  width="100%"
                />
              </a>
              <div className="product-description p-2">
                <h5 className="d-flex align-items-center justify-content-between">
                  NEDA
                  <span className="heart-icon">
                    <i className="fa-regular fa-heart" />
                  </span>
                </h5>
                <p className="catagory">
                  Anna Cut-Out Maxi Dress{' '}
                  <br />
                  Size 12
                </p>
                <p className="price">
                  <strike>
                    RRP $350
                  </strike>
                </p>
                <p className="rent-buy d-flex align-items-center justify-content-between">
                  RENT $40{' '}
                  <span>
                    BUY $250
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="product-item">
              <a href="/ProductDetail">
                <img
                  alt="Product 1"
                  className="img-fluid"
                  src="images/product-images/pic2.png"
                  width="100%"
                />
              </a>
              <div className="product-description p-2">
                <h5 className="d-flex align-items-center justify-content-between">
                  NOA
                  <span className="heart-icon">
                    <i className="fa-regular fa-heart" />
                  </span>
                </h5>
                <p className="catagory">
                  Cocktail dress
                  <br />
                  Size 12
                </p>
                <p className="price">
                  <strike>
                    RRP $350
                  </strike>
                </p>
                <p className="rent-buy d-flex align-items-center justify-content-between">
                  RENT $40{' '}
                  <span>
                    BUY $250
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="product-item">
              <a href="/ProductDetail">
                <img
                  alt="Product 1"
                  className="img-fluid"
                  src="images/product-images/pic3.png"
                  width="100%"
                />
              </a>
              <div className="product-description p-2">
                <h5 className="d-flex align-items-center justify-content-between">
                  VIDA
                  <span className="heart-icon">
                    <i className="fa-regular fa-heart" />
                  </span>
                </h5>
                <p className="catagory">
                  Zebra Print Maxi Dress{' '}
                  <br />
                  Size 12
                </p>
                <p className="price">
                  <strike>
                    RRP $350
                  </strike>
                </p>
                <p className="rent-buy d-flex align-items-center justify-content-between">
                  RENT $40{' '}
                  <span>
                    BUY $250
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <div className="product-item">
              <a href="/ProductDetail">
                <img
                  alt="Product 1"
                  className="img-fluid"
                  src="images/product-images/pic4.png"
                  width="100%"
                />
              </a>
              <div className="product-description p-2">
                <h5 className="d-flex align-items-center justify-content-between">
                  GIANA
                  <span className="heart-icon">
                    <i className="fa-regular fa-heart" />
                  </span>
                </h5>
                <p className="catagory">
                  High Neck Draped Midi Dress{' '}
                  <br />
                  Size 12
                </p>
                <p className="price">
                  <strike>
                    RRP $350
                  </strike>
                </p>
                <p className="rent-buy d-flex align-items-center justify-content-between">
                  RENT $40{' '}
                  <span>
                    BUY $250
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container collage-main my-5">
      <div
        className="row collage-single d-flex align-items-end justify-content-end align-items-md-center"
        style={{
          backgroundColor: '#15172f',
          backgroundImage: 'url(images/background-images/f12a250d4c.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '50% 100%'
        }}
      >
        <div className="collage-content text-end p-5 ps-0 ">
          <h4 className="title text-light">
            Fashion With{' '}
            <br />
            A Purpose
          </h4>
          <a href="/About">
            <button className="btn bg-light text-dark">
              LEARN MORE
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container accordian-main px-5 py-5">
      <h2 className="text-center">
        FAQS
      </h2>
      <div className="accordion">
        <div className="accordion-item">
          <button
            aria-expanded="false"
            id="accordion-button-1"
          >
            <span className="accordion-title">
              What happens if my item is damaged during a rental?
            </span>
            <span
              aria-hidden="true"
              className="icon"
            />
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            aria-expanded="false"
            id="accordion-button-2"
          >
            <span className="accordion-title">
              What are the top 10 designers to list?
            </span>
            <span
              aria-hidden="true"
              className="icon"
            />
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            aria-expanded="false"
            id="accordion-button-3"
          >
            <span className="accordion-title">
              How do I know my wardrobe is safe?
            </span>
            <span
              aria-hidden="true"
              className="icon"
            />
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            aria-expanded="false"
            id="accordion-button-4"
          >
            <span className="accordion-title">
              How do I prove the condition of an item before and after lending?
            </span>
            <span
              aria-hidden="true"
              className="icon"
            />
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            aria-expanded="false"
            id="accordion-button-5"
          >
            <span className="accordion-title">
              When will I get paid?
            </span>
            <span
              aria-hidden="true"
              className="icon"
            />
          </button>
          <div className="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
        <EmailSubscription />
        <Footer />
        </>
    )
}

export default HowToRent;