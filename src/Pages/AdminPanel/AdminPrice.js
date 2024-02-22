import React from "react";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css";
import { Link } from "react-router-dom";

const AdminPrice = () => {
  return (
    <>
      <AdminHeader />
      <main>
        <div className="container-fluid">
          <div
            className="row  text-light "
            style={{ backgroundColor: "black", color: "white" }}
          >
            <AdminSideHeader />
            <div className="col-lg-8 mt-4">
              <div className="row">
                <div className="order-page-admin">
                  <ol
                    className="d-flex flex-row justify-content-around"
                    style={{ gap: "10rem" }}
                  >
                    <li>
                      <Link to="/AdminPanel/AddProductsAdmin">
                        {" "}
                        <button className="ml-2"> ITEM </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/AdminPanel/AdminPrice">
                        <button className="ml-2"> Price</button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/AdminPanel/CompleteAdmin">
                        <button className="ml-2"> Complete</button>
                      </Link>
                    </li>
                  </ol>
                </div>
                <div className="p-2" style={{ width: "200px" }}>
                  <h5>
                    <b>Pricing Information</b>
                  </h5>
                </div>
                <hr />
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <div className="input-number-admin  d-flex align-items-center justify-content-evenly ">
                      <label htmlFor="quantity">Retail Price*</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        defaultValue={1}
                        min={1}
                        placeholder="AUS $"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-number-admin  d-flex align-items-center justify-content-evenly">
                      <label htmlFor="quantity">Day Rate*</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        defaultValue={1}
                        min={1}
                        placeholder="AUS $"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-6">
                    <div className="input-number-admin  d-flex align-items-center justify-content-evenly">
                      <label htmlFor="quantity">Dry Cleaning*</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        defaultValue={1}
                        min={1}
                        placeholder="AUS $"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-number-admin  d-flex align-items-center justify-content-evenly">
                      <label htmlFor="quantity"> Delivery*</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        defaultValue={1}
                        min={1}
                        placeholder="AUS $"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3 align-items-center ">
                  <div className="col-lg-6">
                    <div className="input-number-admin  d-flex align-items-center justify-content-evenly">
                      <label htmlFor="quantity">security deposit</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        defaultValue={1}
                        min={1}
                        placeholder="AUS $"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6  ">
                    <span className="mt-4">ADD ?</span>
                  </div>
                </div>
                <div className="row mt-5">
                  <div>
                    <span>
                      <b className="mt-5">PRICES &amp; EARNINGS</b>
                    </span>
                    <hr />
                    <h6 className="text-secondary mt-3">
                      Our pricing algorithm suggests rental prices based on the
                      retail price. The daily rate decreases for longer rentals,
                      making them more appealing to customers and generating
                      higher overall returns for lenders.
                    </h6>
                  </div>
                </div>

                <div className="row">
                  <div style={{ width: "100%" }}>
                    <b>LISTING PRICES</b>
                  </div>
                  <div className="col-lg-3 section-price-admin">
                    <span>4 DAYS</span>
                    <span>AUS $ </span>
                  </div>
                  <div className="col-lg-3 section-price-admin">
                    <span>8 DAYS</span>
                    <span>AUS $ </span>
                  </div>
                  <div className="col-lg-3 section-price-admin">
                    <span>16 DAYS</span>
                    <span>AUS $ </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 section-price-admin">
                    <span>4 DAYS</span>
                    <span>AUS $ </span>
                  </div>
                  <div className="col-lg-3 section-price-admin">
                    <span>8 DAYS</span>
                    <span>AUS $ </span>
                  </div>
                  <div className="col-lg-3 section-price-admin">
                    <span>16 DAYS</span>
                    <span>AUS $ </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="row">
                  <div className="d-flex justify-content-center mt-3">
                    <span>
                      <b>PLEASE ENTER A RETAIL PRICE ABOVE</b>
                    </span>
                  </div>
                  <div className="mt-4">
                    <span>
                      <b style={{ textTransform: "uppercase" }}>Offer to buy</b>
                    </span>
                    <hr />
                    <div className="checkbox-apple p-0 m-0 my-4">
                      <input
                        className="yep"
                        id="check-apple"
                        type="checkbox"
                        onchange="toggleText()"
                      />
                      <label htmlFor="check-apple" />
                    </div>
                    <p id="offerText" >
                      Your returns policy is at your own discretion, we advise
                      you make a note in the item description. Please make sure
                      your images and description are up to date and show any
                      signs of wear or damage, as if an item is not as
                      described, you are legally obliged to offer a return and
                      refund.
                    </p>
                    <div className="size-price">
                      <span>
                        <b>Size</b>
                      </span>
                      <span>
                        <b>Minimum Price</b>
                      </span>
                    </div>
                    <hr />
                    <div className="size-price1">
                      <span>
                        <b>UK 2</b>
                      </span>
                      <input className="number-type" type="number" value={"1"}/>
                    </div>
                    <p />
                  </div>
                </div>
              </div>
              <Link to="/AdminPanel/ViewAdminProducts">
                <button className="move-step-admin mb-3 mt-3">Next Step</button>
              </Link>
            <div className="row mt-4 p-3">
              <span>
                <b>UPLOAD PHOTOS* </b>
              </span>
              <h6>
                Please upload at least 3 photos showing the item's condition.
              </h6>
              <div className="row mt-4 p-3">
                <div className="col-lg-4 d-flex align-items-center flex-column ">
                  <span>
                    <b>MAIN PHOTO*</b>
                  </span>
                  <label
                    htmlFor="fileInput"
                    className="custom-file-input-admin"
                    style={{width:"100%"}}
                  >
                    <div className="custom-file-container-admin">
                      <div className="custom-file-icon-admin">
                        <i className="fas fa-upload" />
                      </div>
                      <div className="custom-file-text-admin">Upload Image</div>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                <div className="col-lg-4 d-flex align-items-center flex-column">
                  <span>
                    <b>2ND PHOTO*</b>
                  </span>
                  <label
                    htmlFor="fileInput"
                    className="custom-file-input-admin"
                    style={{width:"100%"}}
                  >
                    <div className="custom-file-container-admin">
                      <div className="custom-file-icon-admin">
                        <i className="fas fa-upload" />
                      </div>
                      <div className="custom-file-text-admin">Upload Image</div>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                <div className="col-lg-4 d-flex align-items-center flex-column">
                  <span>
                    <b>3RD PHOTO*</b>
                  </span>
                  <label
                    htmlFor="fileInput"
                    className="custom-file-input-admin"
                    style={{width:"100%"}}
                  >
                    <div className="custom-file-container-admin">
                      <div className="custom-file-icon-admin">
                        <i className="fas fa-upload " />
                      </div>
                      <div className="custom-file-text-admin">Upload Image</div>
                    </div>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
              </div>
              <div className="row mt-5">
                <div
                  className="d-flex justify-content-between"
                  id="additionalPhotosSection"
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <b>ADDITIONAL PHOTOS</b>
                  </span>
                  <i
                    id="additionalPhotosIcon"
                    className="fas fa-chevron-down"
                  />
                </div>
                <div
                  className="row"
                  id="additionalPhotosContent"
                  style={{ display: "none" }}
                >
                  <div className=" col-lg-4">
                    <label
                      htmlFor="fileInput1"
                      className="custom-file-input-admin"
                    >
                      <div className="custom-file-container-admin">
                        <div className="custom-file-icon-admin">
                          <i className="fas fa-upload" />
                        </div>
                        <div className="custom-file-text-admin">
                          Upload Image
                        </div>
                      </div>
                      <input
                        type="file"
                        id="fileInput1"
                        accept="image/*"
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default AdminPrice;
