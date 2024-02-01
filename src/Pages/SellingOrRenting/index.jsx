import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const SellingOrRenting = () =>{
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
        backgroundImage: 'url(images/background-images/membership.jpeg)',
        backgroundSize: 'cover'
      }}
    >
      <div className="col d-flex align-items-center justify-content-center justify-content-md-start">
        <div className="banner-content">
          <h2 className="title">
            SELLING OR RENTING
          </h2>
          <p className="description">
            Switching up fashion
          </p>
          <div className="">
            <a
              className="btn btn-primary -white rounded-0 text-uppercase "
              href="#"
            >
              EXPLORE PLANS
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div className="container collections">
      <div className="row d-block align-items-center justify-content-center mb-5">
        <div className="title text-center">
          <h2>
            HOW IT WORKS
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, accusamus.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="collection-item">
            <img
              alt=""
              src="images/icons/correct.png"
              width="60"
            />
            <div className="collection-title text-center mt-5">
              <h4>
                Select
              </h4>
              <p>
                select a plan that suits you.{' '}
                <br />
                pause or cancel anytime.
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
                Choose
              </h4>
              <p>
                Browse our suits and choose your first 5 items
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
                Recieve
              </h4>
              <p>
                You want wait long.{' '}
                <br />
                Recieve in 1 - 3 business days.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collection-item">
            <img
              alt=""
              src="images/icons/hangers.png"
              width="60"
            />
            <div className="collection-title text-center mt-5">
              <h4>
                Swap
              </h4>
              <p>
                Return what you want,
                <br />
                hold onto items you love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className=" component-container-2 mt-5">
      <div
        className="single-image row"
        style={{
          backgroundImage: 'url(images/background-images/show.jpeg) !important',
          backgroundPosition: 'center !important',
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
                Free 1-3 day shipping
              </li>
              <li className="mb-3 ">
                25% off one time rentals
              </li>
              <li className="mb-3 ">
                Keep items what you want
              </li>
              <li className="mb-3 ">
                pause or cancel anytime
              </li>
              <li className="mb-5 ">
                Dry cleaning & reasonable repairs
              </li>
            </ul>
            <div className="button-component">
              <a
                className="btn rounded-0 text-uppercase header-btn ml-4"
                href="#"
              >
                JOIN NOW
              </a>
            </div>
          </div>
        </div>
        \`
      </div>
    </div>
  </section>
  <section
    className="mt-5"
    id="pricing-section"
  >
    <div className="container pricing-main">
      <div className="row d-block align-items-center justify-content-center mb-5">
        <div className="title text-center">
          <h2>
            CHOOSE A PLAN
          </h2>
          <p>
            Choose a plan based on how many shipment you want per month
          </p>
        </div>
      </div>
      <div className="row pricing-plans">
        <div className="col plan text-center">
          <div className="header">
            <h1>
              5
            </h1>
            <span>
              ITEMS / MONTH
            </span>
            <hr className="mx-5" />
            <span className="price">
              $95
            </span>
          </div>
          <div className="description mt-3">
            <ul className="px-0">
              <li>
                5 items at a time
              </li>
              <li>
                1 shipment/month
              </li>
              <li>
                Limited Closet access
              </li>
            </ul>
          </div>
          <div className="pricing-footer mt-4">
            <a
              className="btn btn-primary text-light  -black px-5"
              href="membership.html"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="col plan text-center">
          <div className="header">
            <h1>
              10
            </h1>
            <span>
              ITEMS / MONTH
            </span>
            <hr className="mx-5" />
            <span className="price">
              $115
            </span>
          </div>
          <div className="description mt-3">
            <ul className="px-0">
              <li>
                5 items at a time
              </li>
              <li>
                2 shipment/month
              </li>
              <li>
                Complete CLoset access
              </li>
            </ul>
          </div>
          <div className="pricing-footer mt-4">
            <a
              className="btn btn-primary text-light  -black px-5"
              href="membership.html"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="col plan text-center">
          <div className="header">
            <h1>
              15
            </h1>
            <span>
              ITEMS / MONTH
            </span>
            <hr className="mx-5" />
            <span className="price">
              $150
            </span>
          </div>
          <div className="description mt-3">
            <ul className="px-0">
              <li>
                5 items at a time
              </li>
              <li>
                3 shipment/month
              </li>
              <li>
                Complete Closet access
              </li>
            </ul>
          </div>
          <div className="pricing-footer mt-4">
            <a
              className="btn btn-primary text-light  -black px-5"
              href="membership.html"
            >
              Get Started
            </a>
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
          <button className="btn bg-light text-dark">
            VIEW COLLECTION
          </button>
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
              How many items do I get each month.                    ?
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
              How long does shipping take?
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
              How long can I keep the items?
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
              Can I keep or purchase the clothing?
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
              What types of items are included in a subscription?
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
            id="accordion-button-1"
          >
            <span className="accordion-title">
              How do I send back my returns?
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
              What happens il I lose or damage an item.
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
              How are the clothes cleaned.
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
              Can I switch my plan?
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
export default SellingOrRenting;