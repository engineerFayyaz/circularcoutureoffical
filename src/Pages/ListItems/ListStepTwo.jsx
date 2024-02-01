import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const ListStepTwo = () =>{
    return (
        <>
        <TopHeader />
        <main>
  <section>
    <div className="container-fluid bg-light">
      <div className="row mx-auto mt-5 py-5">
        <div className="col-lg-4 mx-auto pt-5">
          <div className="d-flex justify-content-center text-center flex-column list-an-item pt-5">
            <h1>
              <span className="text-uppercase ">
                list an item
              </span>
            </h1>
            <p>
              <span className="text-dark">
                Share the love and list of your faves
              </span>
            </p>
          </div>
          <div className="d-flex flex-row justify-content-center text-capitalize text-center three-btn-step">
            <a href="/ListItems/ListStepOne">
              <button className="btn btn-light ">
                step one
              </button>
            </a>
            <a href="/ListItems/ListStepTwo">
              <button className="btn btn-light active">
                step two
              </button>
            </a>
            <a href="/ListItems/ListStepThree">
              <button className="btn btn-light">
                step three
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="row mx-0  mt-5">
        <div className="col-lg-11 step-one d-flex flex-column justify-content-between">
          <h3>
            {' '}
            <span>
              STEP TWO
            </span>
          </h3>
          <div className="dropdown dropstart d-flex justify-content-end mr-2">
            <button
              aria-expanded="false"
              aria-haspopup="true"
              className="question-mark"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              type="button"
            >
              <span>
                <i className="far fa-question-circle" />
              </span>
            </button>
            <div
              aria-labelledby="dropdownMenuButton"
              className="dropdown-menu dropdown-menu-right"
            >
              <h3>
                <span>
                  NEED HELP?
                </span>
              </h3>
              <div className="d-flex justify-content-between">
                <input
                  className="search-input-field1"
                  type="text"
                />
                <i
                  className="fas fa-search mt-5"
                  style={{
                    color: '#000000'
                  }}
                />
              </div>
              <div className="mt-5">
                <h4>
                  Helpful Questions
                </h4>
                <ol>
                  <li>
                    <span>
                      How to upload an item
                    </span>
                  </li>
                  <li>
                    <span>
                      How to take a good photo
                    </span>
                  </li>
                  <li>
                    <span>
                      How to list an item
                    </span>
                  </li>
                  <li>
                    <span>
                      How to make your advert sound good
                    </span>
                  </li>
                  <li>
                    <span>
                      Things I need to know about selling
                    </span>
                  </li>
                  <li>
                    <span>
                      Should I take out additional insurance
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <h6>
            <span>
              Pricing Information*
            </span>
          </h6>
        </div>
      </div>
      <div className="row mx-0 mt-4">
        <div className="col-lg-5 d-flex flex-column justify-content-start step-one-section">
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="inputGroupSelect02"
            >
              <option selected>
                Catagory
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>
          </div>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="inputGroupSelect02"
            >
              <option selected>
                Size
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>
          </div>
        </div>
        <div className="col-lg-5 d-flex flex-column justify-content-start step-one-section">
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="inputGroupSelect02"
            >
              <option selected>
                Brand
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>
          </div>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="inputGroupSelect02"
            >
              <option selected>
                Size
              </option>
              <option value="1">
                One
              </option>
              <option value="2">
                Two
              </option>
              <option value="3">
                Three
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mx-0  mt-5">
        <div className="col-lg-11 step-one d-flex flex-column justify-content-evenly">
          <h3>
            {' '}
            <span>
              Prices*
            </span>
          </h3>
          <h6>
            <span>
              Our pricing alogorithm suggest rental prices based on the retail price.
            </span>
          </h6>
        </div>
      </div>
      <div className="row label-text-full justify-content-center d-flex align-items-evenly ">
        <label htmlFor="#">
          longer rentails man lower daily rates and bigger saving{' '}
        </label>
      </div>
      <div className="row  g-0 mt-5">
        <div className="col-lg-3 d-flex  align-items-end  flex-column">
          <div className="border-define d-flex flex-column ">
            <h6>
              <span>
                4 day
              </span>
            </h6>
            <span>
              $35
            </span>
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-center ">
          <div className="border-define d-flex flex-column">
            <h6>
              <span>
                8 day
              </span>
            </h6>
            <span>
              $60
            </span>
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-center">
          <div className="border-define d-flex flex-column">
            <h6>
              <span>
                16 day
              </span>
            </h6>
            <span>
              $90
            </span>
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-start ">
          <div className="border-define d-flex flex-column">
            <h6>
              <span>
                32 day
              </span>
            </h6>
            <span>
              $130
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mt-5 ml-5">
          <span>
            <h4>
              Sell your item
            </h4>
          </span>
          <div className="cl-toggle-switch">
            <label className="cl-switch">
              <input type="checkbox" />
              <span>
                Selet the offer member to buy your item.
              </span>
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 Next-Step">
        <a href="/ListItems/ListStepTwoNext">
          {' '}
          <button className="active ">
            Next Step
          </button>
        </a>
      </div>
      <span className="text-secondary ml-5">
        * Required Field
      </span>
    </div>
  </section>
</main>
        <EmailSubscription />
        <Footer />
        </>
    )
}
export default ListStepTwo;