import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
const ListStepOneNext = () =>{
    return (
        <>
        <TopHeader />

        <main>
  <section>
    <div className="container-fluid bg-light">
      <div className="row mx-auto mt-5 pt-5">
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
            <Link to="/ListItems/ListStepOne">
              <button className="btn btn-light  active">
                step one
              </button>
            </Link>
            <Link to="/ListItems/ListStepTwo">
              <button className="btn btn-light ">
                step two
              </button>
            </Link>
            <Link to="/ListItems/ListStepThree">
              <button className="btn btn-light">
                step three
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row mx-0  mt-5">
        <div className="col-lg-11 step-one d-flex flex-column justify-content-between">
          <h3>
            {' '}
            <span>
              STEP ONE
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
                  className="fas fa-search mt-4"
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
              Product Information
            </span>
          </h6>
          <input
            className="mt-4 fs-4"
            id=""
            name=""
            placeholder="ITEM TITLE"
            type="text"
          />
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
        <div className="col-lg-11 step-one d-flex flex-column justify-content-between">
          <h3>
            {' '}
            <span>
              Upload Photos*
            </span>
          </h3>
          <h6>
            <span>
              Please Upload at least 3 Photos.
            </span>
          </h6>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3 d-flex justify-content-end">
          <div className="">
            <img
              alt=""
              height="270"
              src="images/product-images/l1.png"
              width="270"
            />
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-end">
          <div className="">
            <img
              alt=""
              height="270"
              src="images/product-images/l2.png"
              width="270"
            />
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-end">
          <div className="">
            <img
              alt=""
              height="270"
              src="images/product-images/l3.png"
              width="270"
            />
          </div>
        </div>
        <div className="col-lg-3 d-flex justify-content-center">
          <div className="upload-image1 ml-">
            <i
              className="fa-solid fa-plus mt-5  ml-5 "
              style={{
                fontSize: '100px'
              }}
            />
            <div className="text-center fs-4">
              <span>
                ADD PHOTOS
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0  mt-5">
        <div className="col-lg-11 step-one d-flex flex-column justify-content-between">
          <h3>
            {' '}
            <span>
              Item Description*
            </span>
          </h3>
          <textarea
            cols="30"
            id=""
            name=""
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati, atque adipisci delectus recusandae voluptates odit necessitatibus vel tempora quia numquam, amet impedit? Laboriosam, aut sit exercitationem sequi modi incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati, atque adipisci delectus recusandae voluptates odit necessitatibus vel tempora quia numquam, amet impedit? Laboriosam, aut sit exercitationem sequi modi incidunt?"
            rows="10"
          />
        </div>
      </div>
      <div className="row mx-0  mt-5">
        <div className="col-lg-11 step-one d-flex flex-column justify-content-between">
          <h3>
            {' '}
            <span>
              Style & fit note*
            </span>
          </h3>
          <textarea
            cols="30"
            id=""
            name=""
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati, atque adipisci delectus recusandae voluptates odit necessitatibus vel tempora quia numquam, amet impedit? Laboriosam, aut sit exercitationem sequi modi incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati, atque adipisci delectus recusandae voluptates odit necessitatibus vel tempora quia numquam, amet impedit? Laboriosam, aut sit exercitationem sequi modi incidunt?"
            rows="10"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5 Next-Step">
        <Link to="/ListItems/ListStepTwo">
          <button className="bg-dark text-light ">
            Next Step
          </button>
        </Link>
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
export default ListStepOneNext;