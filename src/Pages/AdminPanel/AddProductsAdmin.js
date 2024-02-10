import React from "react";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css";
import { Link } from "react-router-dom";

const AddProductsAdmin = () => {
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
            <div className="col-lg-5 mt-4">
              <div className="row">
                <div className=" row order-page-admin">
                  <ol
                    className="d-flex flex-row justify-content-between"
                    style={{ gap: "30px" }}
                  >
                    <li>
                      <Link to="/AdminPanel/AddProductsAdmin">
                        <button> ITEM </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/AdminPanel/AdminPrice">
                        {" "}
                        <button> Price</button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/AdminPanel/CompleteAdmin">
                        <button> Complete</button>
                      </Link>
                    </li>
                  </ol>
                </div>

                <div className="row">
                  <h5  style={{marginLeft:"15px"}}>
                    <b>PRODUCT INFORMATION</b>
                  </h5>
                  <hr />
                  <div className="col-lg-6 brand-admin">
                    <label htmlFor="" className="form-label">
                      <b>Category*</b>
                    </label>
                    <br />
                    <select
                      className="form-select "
                      name=""
                      id=""
                      style={{
                        width: "197px",
                        padding: "6px",
                        marginTop: "10px",
                      }}
                    >
                      <option selected="">Dresses</option>
                      <option value="">TOPS</option>
                      <option value="">BOTTOMS</option>
                      <option value="">Jakarta</option>
                    </select>
                  </div>
                </div>

                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-lg-6 brand-admin">
                    <h5>
                      <span>
                        <b>Brand*</b>
                      </span>
                    </h5>
                    <input type="text" defaultValue="" />
                  </div>
                  <div className="col-lg-6 brand-admin">
                    <h5>
                      <span>
                        <b>Item Name*</b>
                      </span>
                    </h5>
                    <input type="text" defaultValue="" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3 mt-3 Category-admin">
                      <label htmlFor="" className="form-label">
                        <b>Size*</b>
                      </label>
                      <br />
                      <select
                        className="form-select "
                        name=""
                        id=""
                        style={{
                          width: "197px",
                          padding: "6px",
                          marginTop: "10px",
                        }}
                      >
                        <option selected="">ONE-SIZE</option>
                        <option value="">TWO-SIZE</option>
                        <option value="">THREE-SIZE</option>
                        <option value="">FOURE-SIZE</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3 mt-3 Category-admin">
                      <label htmlFor="" className="form-label">
                        <b>Colour*</b>
                      </label>
                      <br />
                      <select
                        className="form-select "
                        name=""
                        id=""
                        style={{
                          width: "197px",
                          padding: "6px",
                          marginTop: "10px",
                        }}
                      >
                        <option selected="">BLACK</option>
                        <option value="">WHITE</option>
                        <option value="">BLUE</option>
                        <option value="">GREEN</option>
                        <option value="">RED</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="row "
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="col-lg-12">
                    <h5>
                      <b>Item Description*</b>
                    </h5>
                    
                    <textarea style={{width:"427px"}}
                      name=""
                      id=""
                      cols={40}
                      rows={4}
                     
                    />
                  </div>
                </div>
                <br />
                <div
                  className="row "
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div className="col-lg-12">
                    <h5>
                      <b>Fit Note*</b>
                    </h5>
                    <textarea style={{width:"427px"}}
                      name=""
                      id=""
                      cols={40}
                      rows={4}
                     
                    />
                  </div>
                </div>
              </div>
              <Link to="/AdminPanel/AdminPrice">
                <button className="move-step-admin mb-3 mt-3">Next Step</button>
              </Link>
            </div>
            <div className="col-lg-5 mt-4">
              <span>
                <b>UPLOAD PHOTOS* </b>
              </span>
              <h6>
                Please upload at least 3 photos showing the item's condition.
              </h6>
              <div className="row mt-4">
                <div className="col-lg-4">
                  <span>
                    <b>MAIN PHOTO*</b>
                  </span>
                  <label
                    htmlFor="fileInput"
                    className="custom-file-input-admin"
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
                <div className="col-lg-4">
                  <span>
                    <b>2ND PHOTO*</b>
                  </span>
                  <label
                    htmlFor="fileInput"
                    className="custom-file-input-admin"
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
                <div className="col-lg-4">
                  <span>
                    <b>3RD PHOTO*</b>
                  </span>
                  <label
                    htmlFor="fileInput"
                    className="custom-file-input-admin"
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
      </main>
    </>
  );
};
export default AddProductsAdmin;
