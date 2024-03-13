import React from "react";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EmailSubscription from "../../Components/EmailSubscription";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
// import Calendar from "react-calendar";
import DateCalendar from "../../Components/Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck, faInfoCircle, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import PopularDesignersCarousel from "../../Components/PopularDesignersCarousel";
import Designer from "../../Pages/Designer";
import DesignerApi from "../DesignerApi";

const EditFilter =()=>{
    return(
        <>
        <div className="col-md-5 col-lg-4 d-none d-md-block p-4 ">
                <div class="filter-number-results-v2">
                  <p
                    class="text text-uppercase"
                    data-app-search--listing-filters-target="totalResults"
                  >
                    <span class="total-filters-label">FILTERS</span> 200+
                    Results
                  </p>
                </div>
                <Navigation
                  // you can use your own router's api to get pathname
                  activeItemId="/management/members"
                  onSelect={({ itemId }) => {
                    // maybe push to the route
                  }}
                  items={[
                    {
                      title: "Size",
                      itemId: "/Size",
                      elemBefore: () => {},
                      subNav: [
                        {
                          title: (
                            <>
                              <div
                                className="card sizes-filter"
                                data-controller="app-search--sizes-filter"
                              >
                                <div
                                  id="collapseThree"
                                  className="collapse show"
                                  aria-labelledby="headingThree"
                                  style={{}}
                                >
                                  <div className="card-body ml-3">
                                    <div className="menu-wrapper">
                                      <div className="sizes-wrapper-v2">
                                        <ul
                                          className="nav nav-pills mb-3 sizes-dropdown-tabs"
                                          id="pills-tab"
                                          role="tablist"
                                        >
                                          <li className="nav-item">
                                            <button
                                              className="nav-link btn-tab active"
                                              id="desktop-pills-clothing-tab"
                                              data-toggle="pill"
                                              href="#desktop-pills-clothing"
                                              role="tab"
                                              aria-controls="desktop-pills-clothing"
                                              aria-selected="true"
                                            >
                                              Clothing
                                            </button>
                                          </li>
                                          <li className="nav-item">
                                            <button
                                              className="nav-link btn-tab"
                                              id="desktop-pills-shoes-tab"
                                              data-toggle="pill"
                                              href="#desktop-pills-shoes"
                                              role="tab"
                                              aria-controls="desktop-pills-shoes"
                                              aria-selected="false"
                                            >
                                              Shoes
                                            </button>
                                          </li>
                                        </ul>
                                        <div
                                          className="tab-content"
                                          id="pills-tabContent"
                                        >
                                          <div
                                            className="tab-pane fade show active sizes-tab-pane"
                                            id="desktop-pills-clothing"
                                            role="tabpanel"
                                            aria-labelledby="desktop-pills-clothing-tab"
                                          >
                                            <div className="menu-wrapper">
                                              <p>
                                                Please select all applicable
                                                sizes
                                              </p>
                                              <div className="clothing-sizes-wrapper-v2">
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="One-Size_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="One-Size"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="One-Size_desktop"
                                                    data-action=""
                                                  >
                                                    One-Size
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 2_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 2"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 2_desktop"
                                                    data-action=""
                                                  >
                                                    UK 2
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 4_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 4"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 4_desktop"
                                                    data-action=""
                                                  >
                                                    UK 4
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 6_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 6"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 6_desktop"
                                                    data-action=""
                                                  >
                                                    UK 6
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 8_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 8"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 8_desktop"
                                                    data-action=""
                                                  >
                                                    UK 8
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 10_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 10"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 10_desktop"
                                                    data-action=""
                                                  >
                                                    UK 10
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 12_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 12"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 12_desktop"
                                                    data-action=""
                                                  >
                                                    UK 12
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 14_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 14"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 14_desktop"
                                                    data-action=""
                                                  >
                                                    UK 14
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 16_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 16"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 16_desktop"
                                                    data-action=""
                                                  >
                                                    UK 16
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 18_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 18"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 18_desktop"
                                                    data-action=""
                                                  >
                                                    UK 18
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 20_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 20"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 20_desktop"
                                                    data-action=""
                                                  >
                                                    UK 20
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 22_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 22"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 22_desktop"
                                                    data-action=""
                                                  >
                                                    UK 22
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 24_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 24"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 24_desktop"
                                                    data-action=""
                                                  >
                                                    UK 24
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 26_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 26"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 26_desktop"
                                                    data-action=""
                                                  >
                                                    UK 26
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 28_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 28"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 28_desktop"
                                                    data-action=""
                                                  >
                                                    UK 28
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 30_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 30"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 30_desktop"
                                                    data-action=""
                                                  >
                                                    UK 30
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 32_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 32"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 32_desktop"
                                                    data-action=""
                                                  >
                                                    UK 32
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="tab-pane fade sizes-tab-pane"
                                            id="desktop-pills-shoes"
                                            role="tabpanel"
                                            aria-labelledby="desktop-pills-shoes-tab"
                                          >
                                            <div className="menu-wrapper">
                                              <p>
                                                Please select all applicable
                                                sizes
                                              </p>
                                              <div className="shoes-sizes-wrapper-v2">
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 2 / EU 35_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 2 / EU 35"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 2 / EU 35_desktop"
                                                    data-action=""
                                                  >
                                                    UK 2 / EU 35
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 2.5 / EU 35.5_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 2.5 / EU 35.5"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 2.5 / EU 35.5_desktop"
                                                    data-action=""
                                                  >
                                                    UK 2.5 / EU 35.5
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 3 / EU 36_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 3 / EU 36"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 3 / EU 36_desktop"
                                                    data-action=""
                                                  >
                                                    UK 3 / EU 36
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 3.5 / EU 36.5_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 3.5 / EU 36.5"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 3.5 / EU 36.5_desktop"
                                                    data-action=""
                                                  >
                                                    UK 3.5 / EU 36.5
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 4 / EU 37_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 4 / EU 37"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 4 / EU 37_desktop"
                                                    data-action=""
                                                  >
                                                    UK 4 / EU 37
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 4.5 / EU 37.5_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 4.5 / EU 37.5"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 4.5 / EU 37.5_desktop"
                                                    data-action=""
                                                  >
                                                    UK 4.5 / EU 37.5
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 5 / EU 38_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 5 / EU 38"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 5 / EU 38_desktop"
                                                    data-action=""
                                                  >
                                                    UK 5 / EU 38
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 5.5 / EU 38.5_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 5.5 / EU 38.5"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 5.5 / EU 38.5_desktop"
                                                    data-action=""
                                                  >
                                                    UK 5.5 / EU 38.5
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 6 / EU 39_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 6 / EU 39"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 6 / EU 39_desktop"
                                                    data-action=""
                                                  >
                                                    UK 6 / EU 39
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 6.5 / EU 39.5_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 6.5 / EU 39.5"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 6.5 / EU 39.5_desktop"
                                                    data-action=""
                                                  >
                                                    UK 6.5 / EU 39.5
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 7 / EU 40_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 7 / EU 40"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 7 / EU 40_desktop"
                                                    data-action=""
                                                  >
                                                    UK 7 / EU 40
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 7.5 / EU 40.5_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 7.5 / EU 40.5"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 7.5 / EU 40.5_desktop"
                                                    data-action=""
                                                  >
                                                    UK 7.5 / EU 40.5
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 8 / EU 41_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 8 / EU 41"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 8 / EU 41_desktop"
                                                    data-action=""
                                                  >
                                                    UK 8 / EU 41
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 8.5 / EU 41.5_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 8.5 / EU 41.5"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 8.5 / EU 41.5_desktop"
                                                    data-action=""
                                                  >
                                                    UK 8.5 / EU 41.5
                                                  </label>
                                                </div>
                                                <div className="component checkbox">
                                                  <input
                                                    className="checkbox-input sizes-checkboxes"
                                                    id="UK 9 / EU 42_desktop"
                                                    name="filter_sizes"
                                                    type="checkbox"
                                                    data-value="UK 9 / EU 42"
                                                    data-action="change->app-search--sizes-filter#selectedSize"
                                                    hidden=""
                                                  />
                                                  <label
                                                    className="checkbox-label"
                                                    htmlFor="UK 9 / EU 42_desktop"
                                                    data-action=""
                                                  >
                                                    UK 9 / EU 42
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ),
                          itemId: "/Size/clothing",
                        },
                        // {
                        //   title: "Shoes",
                        //   itemId: "/Size/Shoes",
                        // },
                      ],
                    },
                    {
                      title: "Colour",
                      itemId: "/colour",
                      subNav: [
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircle}
                                style={{
                                  color: "transparent",
                                  background: "#DFD9CD",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Beige</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "black",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Black</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#2E79BE",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Blue</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#754F34",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Brown</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#B08875",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Copper</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#EFEADA",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Cream</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#EDDDB5",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Gold</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#9CC07A",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Green</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#ADADAD",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Grey</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background:
                                    "conic-gradient(from 180deg at 50% 50%, #9747FF 0deg, #43688B 61.87deg, #4AAAEC 118.12deg, #9CC07A 181.87deg, #FFEE00 247.5deg, #C99014 301.88deg, #8C272B 360deg)",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Multi</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#43688B",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Navy</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#E7C343",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Orange</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#E0AEB0",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Pink</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#8482A5",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Purple</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#8C272B",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Red</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#E7C343",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Orange</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#DEDEDE",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Silver</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#CEA079",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Tan</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#fff",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">White</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#F4D271",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Yellow</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                        {
                          title: (
                            <>
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{
                                  color: "transparent",
                                  background: "#6E686F",
                                  borderRadius: "50%",
                                }}
                              />
                              <span className="ml-2">Panthom</span>
                            </>
                          ),
                          itemId: "/management/black",
                        },
                      ],
                    },
                    {
                      title: "Designers",
                      itemId: "/Designers",
                      elemBefore: () => {},
                      subNav: [
                        {
                          title: (
                            <>
                              <div className="card designers-filter ">
                               <DesignerApi className="p-0 mt-0" />
                              </div>
                            </>
                          ),
                          itemId: "/Designers/POPULAR DESIGNERS",
                        },
                      ],
                    },
                    {
                      title: "Availability",
                      itemId: "/Availability",
                      subNav: [
                        {
                          title: <DateCalendar />,
                        },
                      ],
                    },
                    {
                      title: (
                        <>
                          {/* style = {{display:"flex"}}, */}
                          <div className="d-flex align-items-center justify-content-between">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span>Managed Stock</span>
                              <FontAwesomeIcon
                                icon={faInfoCircle}
                                style={{ marginLeft: "5px", fontSize: "14px" }}
                              />
                            </div>
                            <FontAwesomeIcon
                              icon={faToggleOff}
                              style={{ fontSize: "27px", color: "grey" }}
                            />
                          </div>
                        </>
                      ),
                    },
                    {
                      title: (
                        <>
                          {/* style = {{display:"flex"}}, */}
                          <div className="d-flex align-items-center justify-content-between">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span>Top Lenders</span>
                              <FontAwesomeIcon
                                icon={faInfoCircle}
                                style={{ marginLeft: "5px", fontSize: "14px" }}
                              />
                            </div>
                            <FontAwesomeIcon
                              icon={faToggleOff}
                              style={{ fontSize: "27px", color: "grey" }}
                            />
                          </div>
                        </>
                      ),
                    },
                    {
                      title: (
                        <>
                          {/* style = {{display:"flex"}}, */}
                          <div className="d-flex align-items-center justify-content-between">
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span>Available To Buy</span>
                            </div>
                            <FontAwesomeIcon
                              icon={faToggleOff}
                              style={{ fontSize: "27px", color: "grey" }}
                            />
                          </div>
                        </>
                      ),
                    },
                    {
                      title: "Catagory",
                      itemId: "/Catagory",
                      subNav: [
                        {
                          title: (
                            <>
                              <input type="checkbox" />
                              <span className="ml-2">Dresses</span>
                            </>
                          ),
                          itemId: "/management/dresses",
                        },
                        {
                          title: (
                            <>
                              <input type="checkbox" />
                              <span className="ml-2">Tops</span>
                            </>
                          ),
                          itemId: "/management/Tops",
                        },
                        {
                          title: (
                            <>
                              <input type="checkbox" />
                              <span className="ml-2">Bottoms</span>
                            </>
                          ),
                          itemId: "/management/bottoms",
                        },
                        {
                          title: (
                            <>
                              <input type="checkbox" />
                              <span className="ml-2">OuterWear</span>
                            </>
                          ),
                          itemId: "/management/outerwear",
                        },
                        {
                          title: (
                            <>
                              <input type="checkbox" />
                              <span className="ml-2">Accessories</span>
                            </>
                          ),
                          itemId: "/management/accessories",
                        },
                        {
                          title: (
                            <>
                              <input type="checkbox" />
                              <span className="ml-2">Bags</span>
                            </>
                          ),
                          itemId: "/management/bags",
                        },
                        {
                          title: (
                            <>
                              <input type="checkbox" />
                              <span className="ml-2">Shoes</span>
                            </>
                          ),
                          itemId: "/management/shoes",
                        },
                        {
                          title: (
                            <>
                              <input type="checkbox" />
                              <span className="ml-2">Jumpsuits</span>
                            </>
                          ),
                          itemId: "/management/jumpsuits",
                        },
                      ],
                    },
                    {
                      title: "Rental Price (1)",
                      itemId: "/management/rentalprice",

                      subNav: [
                        {
                          title: (
                            <>
                              <div
                                className="price-slider"
                                data-app-search--rental-price-filters-target="priceSliderWrapper"
                              >
                                <div className="price-slider-div mt-2 mt-md-auto"></div>
                                <div className="nouislider px-2">
                                  <div
                                    className="rounded-slider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                                    data-app-search--rental-price-filters-target="rentalPriceSlider"
                                    id="js-slider"
                                  >
                                    <div className="noUi-base">
                                      <div className="noUi-connects">
                                        <div
                                          className="noUi-connect"
                                          style={{
                                            transform:
                                              "translate(0.225989%, 0px) scale(0.99774, 1)",
                                          }}
                                        />
                                      </div>
                                      <div
                                        className="noUi-origin"
                                        style={{
                                          transform: "translate(-99.774%, 0px)",
                                          zIndex: "5",
                                        }}
                                      >
                                        <div
                                          aria-orientation="horizontal"
                                          aria-valuemax="900.0"
                                          aria-valuemin="15.0"
                                          aria-valuenow="17.0"
                                          aria-valuetext="17.00"
                                          className="noUi-handle noUi-handle-lower"
                                          data-handle="0"
                                          role="slider"
                                          tabIndex="0"
                                        >
                                          <div className="noUi-touch-area" />
                                          <div className="noUi-tooltip">
                                            £ 17
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="noUi-origin"
                                        style={{
                                          transform: "translate(0%, 0px)",
                                          zIndex: "4",
                                        }}
                                      >
                                        <div
                                          aria-orientation="horizontal"
                                          aria-valuemax="900.0"
                                          aria-valuemin="17.0"
                                          aria-valuenow="900.0"
                                          aria-valuetext="900.00"
                                          className="noUi-handle noUi-handle-upper"
                                          data-handle="1"
                                          role="slider"
                                          tabIndex="0"
                                        >
                                          <div className="noUi-touch-area" />
                                          <div className="noUi-tooltip">
                                            £ 900
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="mt-5">
                                  <div className="row">
                                    <div className="col-6">
                                      <div className="component input icon -pounds">
                                        <input
                                          className="component input"
                                          data-action="change->app-search--rental-price-filters#setSliderValue"
                                          data-app-search--rental-price-filters-target="minPrice"
                                          defaultValue="15"
                                          id="minPriceRange"
                                          name=""
                                          type="number"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-6">
                                      <div className="component input icon -pounds">
                                        <input
                                          className="component input default-colour"
                                          data-action="change->app-search--rental-price-filters#setSliderValue"
                                          data-app-search--rental-price-filters-target="maxPrice"
                                          defaultValue="900"
                                          id="maxPriceRange"
                                          name=""
                                          type="number"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ),
                        },
                      ],
                    },
                  ]}
                />
              </div>
        </>
    );
}
export default EditFilter;