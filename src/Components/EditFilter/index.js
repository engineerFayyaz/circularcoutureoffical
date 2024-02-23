import React from "react";

const EditFilter =()=>{
    return(
        <>
        <div
            className="filter-container mx-auto app-search--listing-filters-controller app-search--filters-count-controller"
            data-app-search--listing-filters-active-merchandising-value="false"
            data-app-search--listing-filters-brand-name-value=""
            data-app-search--listing-filters-collection-value="bags"
            data-app-search--listing-filters-current-user-slug-value=""
            data-app-search--listing-filters-default-designer-value=""
            data-app-search--listing-filters-endpoint-base-value="https://circular-couture-eu.ent.eu-west-2.aws.cloud.es.io"
            data-app-search--listing-filters-featured-value=""
            data-app-search--listing-filters-listing-engine-name-value="search-production-circular-couture-listings"
            data-app-search--listing-filters-merchandising-identifier-value="51613098860"
            data-app-search--listing-filters-relevance-tuning-value="true"
            data-app-search--listing-filters-search-for-value=""
            data-app-search--listing-filters-search-key-value="search-kms28ixa6p378p4d4fvm53r3"
            data-app-search--listing-filters-user-id-value=""
            data-controller="app-search--listing-filters app-search--filters-count"
            id="app-search--listing-filters-controller"
          >
            <div className="row no-gutters">
              <div className="col-md-5 col-lg-4 d-none d-md-block">
                <div className="sidebar-v2 mt-4 pt-3 sidebar-filters">
                  <div className="filter-number-results-v2">
                    <p
                      className="text text-uppercase"
                      data-app-search--listing-filters-target="totalResults"
                    >
                      <span className="total-filters-label">
                        FILTERS
                      </span>
                      {' '}1500+                    Results
                    </p>
                  </div>
                  <div className="sidebar-scrollable-wrapper">
                    <div className="sidebar-scrollable">
                      <div
                        className="accordion sidebar-filter-accordion-v2"
                        id="accordionExample"
                      >
                        <div
                          className="card sizes-filter"
                          data-controller="app-search--sizes-filter"
                        >
                          <div
                            className="card-header"
                            id="headingThree"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseThree"
                                aria-expanded="false"
                                className="btn btn-link sidebar-filter-button collapsed"
                                data-target="#collapseThree"
                                data-toggle="collapse"
                                type="button"
                              >
                                Size
                                <span data-app-search--filters-count-target="sizesCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingThree"
                            className="collapse"
                            id="collapseThree"
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
                                        aria-controls="desktop-pills-clothing"
                                        aria-selected="true"
                                        className="nav-link btn-tab active"
                                        data-toggle="pill"
                                        href="#desktop-pills-clothing"
                                        id="desktop-pills-clothing-tab"
                                        role="tab"
                                      >
                                        Clothing
                                      </button>
                                    </li>
                                    <li className="nav-item">
                                      <button
                                        aria-controls="desktop-pills-shoes"
                                        aria-selected="false"
                                        className="nav-link btn-tab"
                                        data-toggle="pill"
                                        href="#desktop-pills-shoes"
                                        id="desktop-pills-shoes-tab"
                                        role="tab"
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
                                      aria-labelledby="desktop-pills-clothing-tab"
                                      className="tab-pane fade show active sizes-tab-pane"
                                      id="desktop-pills-clothing"
                                      role="tabpanel"
                                    >
                                      <div className="menu-wrapper">
                                        <p>
                                          Please select all applicable sizes
                                        </p>
                                        <div className="clothing-sizes-wrapper-v2">
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="One-Size"
                                              hidden
                                              id="One-Size_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="One-Size_desktop"
                                            >
                                              One-Size
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 2"
                                              hidden
                                              id="UK 2_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 2_desktop"
                                            >
                                              UK 2
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 4"
                                              hidden
                                              id="UK 4_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 4_desktop"
                                            >
                                              UK 4
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 6"
                                              hidden
                                              id="UK 6_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 6_desktop"
                                            >
                                              UK 6
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 8"
                                              hidden
                                              id="UK 8_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 8_desktop"
                                            >
                                              UK 8
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 10"
                                              hidden
                                              id="UK 10_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 10_desktop"
                                            >
                                              UK 10
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 12"
                                              hidden
                                              id="UK 12_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 12_desktop"
                                            >
                                              UK 12
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 14"
                                              hidden
                                              id="UK 14_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 14_desktop"
                                            >
                                              UK 14
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 16"
                                              hidden
                                              id="UK 16_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 16_desktop"
                                            >
                                              UK 16
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 18"
                                              hidden
                                              id="UK 18_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 18_desktop"
                                            >
                                              UK 18
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 20"
                                              hidden
                                              id="UK 20_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 20_desktop"
                                            >
                                              UK 20
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 22"
                                              hidden
                                              id="UK 22_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 22_desktop"
                                            >
                                              UK 22
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 24"
                                              hidden
                                              id="UK 24_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 24_desktop"
                                            >
                                              UK 24
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 26"
                                              hidden
                                              id="UK 26_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 26_desktop"
                                            >
                                              UK 26
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 28"
                                              hidden
                                              id="UK 28_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 28_desktop"
                                            >
                                              UK 28
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 30"
                                              hidden
                                              id="UK 30_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 30_desktop"
                                            >
                                              UK 30
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 32"
                                              hidden
                                              id="UK 32_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 32_desktop"
                                            >
                                              UK 32
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      aria-labelledby="desktop-pills-shoes-tab"
                                      className="tab-pane fade sizes-tab-pane"
                                      id="desktop-pills-shoes"
                                      role="tabpanel"
                                    >
                                      <div className="menu-wrapper">
                                        <p>
                                          Please select all applicable sizes
                                        </p>
                                        <div className="shoes-sizes-wrapper-v2">
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 2 / EU 35"
                                              hidden
                                              id="UK 2 / EU 35_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 2 / EU 35_desktop"
                                            >
                                              UK 2 / EU 35
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 2.5 / EU 35.5"
                                              hidden
                                              id="UK 2.5 / EU 35.5_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 2.5 / EU 35.5_desktop"
                                            >
                                              UK 2.5 / EU 35.5
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 3 / EU 36"
                                              hidden
                                              id="UK 3 / EU 36_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 3 / EU 36_desktop"
                                            >
                                              UK 3 / EU 36
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 3.5 / EU 36.5"
                                              hidden
                                              id="UK 3.5 / EU 36.5_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 3.5 / EU 36.5_desktop"
                                            >
                                              UK 3.5 / EU 36.5
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 4 / EU 37"
                                              hidden
                                              id="UK 4 / EU 37_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 4 / EU 37_desktop"
                                            >
                                              UK 4 / EU 37
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 4.5 / EU 37.5"
                                              hidden
                                              id="UK 4.5 / EU 37.5_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 4.5 / EU 37.5_desktop"
                                            >
                                              UK 4.5 / EU 37.5
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 5 / EU 38"
                                              hidden
                                              id="UK 5 / EU 38_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 5 / EU 38_desktop"
                                            >
                                              UK 5 / EU 38
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 5.5 / EU 38.5"
                                              hidden
                                              id="UK 5.5 / EU 38.5_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 5.5 / EU 38.5_desktop"
                                            >
                                              UK 5.5 / EU 38.5
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 6 / EU 39"
                                              hidden
                                              id="UK 6 / EU 39_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 6 / EU 39_desktop"
                                            >
                                              UK 6 / EU 39
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 6.5 / EU 39.5"
                                              hidden
                                              id="UK 6.5 / EU 39.5_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 6.5 / EU 39.5_desktop"
                                            >
                                              UK 6.5 / EU 39.5
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 7 / EU 40"
                                              hidden
                                              id="UK 7 / EU 40_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 7 / EU 40_desktop"
                                            >
                                              UK 7 / EU 40
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 7.5 / EU 40.5"
                                              hidden
                                              id="UK 7.5 / EU 40.5_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 7.5 / EU 40.5_desktop"
                                            >
                                              UK 7.5 / EU 40.5
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 8 / EU 41"
                                              hidden
                                              id="UK 8 / EU 41_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 8 / EU 41_desktop"
                                            >
                                              UK 8 / EU 41
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 8.5 / EU 41.5"
                                              hidden
                                              id="UK 8.5 / EU 41.5_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 8.5 / EU 41.5_desktop"
                                            >
                                              UK 8.5 / EU 41.5
                                            </label>
                                          </div>
                                          <div className="component checkbox">
                                            <input
                                              className="checkbox-input sizes-checkboxes"
                                              data-action="change->app-search--sizes-filter#selectedSize"
                                              data-value="UK 9 / EU 42"
                                              hidden
                                              id="UK 9 / EU 42_desktop"
                                              name="filter_sizes"
                                              type="checkbox"
                                            />
                                            <label
                                              className="checkbox-label"
                                              data-action=""
                                              htmlFor="UK 9 / EU 42_desktop"
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
                        <div
                          className="card colours-filter"
                          data-controller="app-search--colours-filter"
                        >
                          <div
                            className="card-header"
                            id="headingFour"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseFour"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#collapseFour"
                                data-toggle="collapse"
                                type="button"
                              >
                                Colour
                                <span data-app-search--filters-count-target="colourCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingFour"
                            className="collapse"
                            id="collapseFour"
                          >
                            <div className="card-body">
                              <div className="menu-wrapper">
                                <div className="colours-wrapper-v2">
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="beige"
                                      hidden
                                      id="Beige-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Beige-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#dfd9cd',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Beige
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="black"
                                      hidden
                                      id="Black-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Black-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#000000',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Black
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="blue"
                                      hidden
                                      id="Blue-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Blue-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#2e79be',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Blue
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="brown"
                                      hidden
                                      id="Brown-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Brown-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#754f34',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Brown
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="copper"
                                      hidden
                                      id="Copper-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Copper-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#b08875',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Copper
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="cream"
                                      hidden
                                      id="Cream-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Cream-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#efeada',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Cream
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="gold"
                                      hidden
                                      id="Gold-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Gold-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#edddb5',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Gold
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="green"
                                      hidden
                                      id="Green-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Green-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#9cc07a',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Green
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="grey"
                                      hidden
                                      id="Grey-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Grey-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#adadad',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Grey
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="multi"
                                      hidden
                                      id="Multi-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Multi-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: 'conic-gradient(                                            from 180deg at 50% 50%,                                            #9747ff 0deg,                                            #43688b 61.87deg,                                            #4aaaec 118.12deg,                                            #9cc07a 181.87deg,                                            #ffee00 247.5deg,                                            #c99014 301.88deg,                                            #8c272b 360deg                                          )',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Multi
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="navy"
                                      hidden
                                      id="Navy-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Navy-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#43688b',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Navy
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="orange"
                                      hidden
                                      id="Orange-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Orange-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#e7c343',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Orange
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="pink"
                                      hidden
                                      id="Pink-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Pink-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#e0aeb0',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Pink
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="purple"
                                      hidden
                                      id="Purple-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Purple-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#8482a5',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Purple
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="red"
                                      hidden
                                      id="Red-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Red-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#8c272b',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Red
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="silver"
                                      hidden
                                      id="Silver-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Silver-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#dedede',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Silver
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="tan"
                                      hidden
                                      id="Tan-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Tan-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#cea079',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Tan
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="white"
                                      hidden
                                      id="White-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="White-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#ffffff',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      White
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="yellow"
                                      hidden
                                      id="Yellow-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Yellow-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#f4d271',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Yellow
                                    </label>
                                  </div>
                                  <div className="component checkbox">
                                    <input
                                      className="checkbox-input colours-checkboxes"
                                      data-action="app-search--colours-filter#selectedColourFilter"
                                      data-filter="colours"
                                      data-value="phantom"
                                      hidden
                                      id="Phantom-desktop"
                                      name="filter_colours"
                                      type="checkbox"
                                    />
                                    <label
                                      className="checkbox-label"
                                      htmlFor="Phantom-desktop"
                                    >
                                      <span className="">
                                        <i
                                          aria-hidden="true"
                                          className="fa-solid fa-circle --fa-border"
                                          style={{
                                            background: '#6e686f',
                                            color: 'transparent'
                                          }}
                                        />
                                      </span>
                                      Phantom
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card designers-filter">
                          <div
                            className="card-header"
                            id="headingTwo"
                          >
                            <span
                              className="sidebar-filter-clear -disabled"
                              data-action="click->plp--filters#clearSelectedFilter"
                              data-filter="designers"
                              data-original-title="CLEAR?"
                              data-placement="left"
                              data-toggle="tooltip"
                            >
                              <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/red-close-icon-9a77dee912ec4d285d927ee23c09f349.svg" />
                            </span>
                            <h2 className="mb-0">
                              <button
                                aria-controls="designersFilterCollapse"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#designersFilterCollapse"
                                data-toggle="collapse"
                                type="button"
                              >
                                Designers
                                <span data-app-search--filters-count-target="designersCount" />
                              </button>
                            </h2>
                            <span
                              className="sidebar-filter-clear -text -disabled"
                              data-action="click->plp--filters#clearSelectedFilter"
                              data-filter="designers"
                            >
                              UNSELECT ALL
                            </span>
                          </div>
                          <div
                            aria-labelledby="headingTwo"
                            className="collapse designer-header"
                            data-controller="app-search--designer-filters"
                            data-plp--filters-target="plpFiltersDesignersController"
                            id="designersFilterCollapse"
                          >
                            <div className="text-uppercase popular-designer">
                              Popular Designers
                            </div>
                            <div
                              className="mx-16px my-16px popular-designers-container"
                              data-app-search--designer-filters-target="container"
                            >
                              <input
                                className="popular-designers-checkboxes"
                                data-action="app-search--designer-filters#selectPopularDesigners"
                                data-filter="designers"
                                data-value="The Vampire’s Wife"
                                hidden
                                href="javascript:void(0)"
                                id="The Vampire’s Wife"
                                name="filter_designers"
                                type="checkbox"
                              />
                              <label
                                className="popular-designers-button text-nowrap"
                                htmlFor="The Vampire’s Wife"
                              >
                                The Vampire’s Wife
                              </label>
                              <input
                                className="popular-designers-checkboxes"
                                data-action="app-search--designer-filters#selectPopularDesigners"
                                data-filter="designers"
                                data-value="Cecilie Bahnsen"
                                hidden
                                href="javascript:void(0)"
                                id="Cecilie Bahnsen"
                                name="filter_designers"
                                type="checkbox"
                              />
                              <label
                                className="popular-designers-button text-nowrap"
                                htmlFor="Cecilie Bahnsen"
                              >
                                Cecilie Bahnsen
                              </label>
                              <input
                                className="popular-designers-checkboxes"
                                data-action="app-search--designer-filters#selectPopularDesigners"
                                data-filter="designers"
                                data-value="Self-Portrait"
                                hidden
                                href="javascript:void(0)"
                                id="Self-Portrait"
                                name="filter_designers"
                                type="checkbox"
                              />
                              <label
                                className="popular-designers-button text-nowrap"
                                htmlFor="Self-Portrait"
                              >
                                Self-Portrait
                              </label>
                              <input
                                className="popular-designers-checkboxes"
                                data-action="app-search--designer-filters#selectPopularDesigners"
                                data-filter="designers"
                                data-value="16ARLINGTON"
                                hidden
                                href="javascript:void(0)"
                                id="16ARLINGTON"
                                name="filter_designers"
                                type="checkbox"
                              />
                              <label
                                className="popular-designers-button text-nowrap"
                                htmlFor="16ARLINGTON"
                              >
                                16ARLINGTON
                              </label>
                              <input
                                className="popular-designers-checkboxes"
                                data-action="app-search--designer-filters#selectPopularDesigners"
                                data-filter="designers"
                                data-value="Rat & Boa"
                                hidden
                                href="javascript:void(0)"
                                id="Rat & Boa"
                                name="filter_designers"
                                type="checkbox"
                              />
                              <label
                                className="popular-designers-button text-nowrap"
                                htmlFor="Rat & Boa"
                              >
                                Rat & Boa
                              </label>
                              <input
                                className="popular-designers-checkboxes"
                                data-action="app-search--designer-filters#selectPopularDesigners"
                                data-filter="designers"
                                data-value="Nadine Merabi"
                                hidden
                                href="javascript:void(0)"
                                id="Nadine Merabi"
                                name="filter_designers"
                                type="checkbox"
                              />
                              <label
                                className="popular-designers-button text-nowrap"
                                htmlFor="Nadine Merabi"
                              >
                                Nadine Merabi
                              </label>
                              <input
                                className="popular-designers-checkboxes"
                                data-action="app-search--designer-filters#selectPopularDesigners"
                                data-filter="designers"
                                data-value="Ganni"
                                hidden
                                href="javascript:void(0)"
                                id="Ganni"
                                name="filter_designers"
                                type="checkbox"
                              />
                              <label
                                className="popular-designers-button text-nowrap"
                                htmlFor="Ganni"
                              >
                                Ganni
                              </label>
                            </div>
                            <div className="card-body">
                              <div className="form-wrapper">
                                <div className="search-input-wrapper">
                                  <span className="search-filter-icon">
                                    <img
                                      alt="Search"
                                      src="https://res.cloudinary.com/dcaptnlz3/image/asset/search-01eb2b40cffce6cef4917f40854e111d.svg"
                                    />
                                  </span>
                                  <input
                                    autoComplete="off"
                                    className="search-filter w-input"
                                    data-action="keyup->app-search--designer-filters#search"
                                    data-name="Search"
                                    maxLength="256"
                                    name="search-v2"
                                    placeholder="Search designers"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div
                                className="menu-wrapper"
                                data-app-search--designer-filters-target="designersWrapper"
                              >
                                <div className="text-center">
                                  <i
                                    aria-hidden="true"
                                    className="fa-duotone fa-spinner-third fa-spin"
                                  />
                                  Loading...
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="card availability-filter"
                          data-controller="app-search--availability-filters"
                          id="app-search--availability-filters-controller"
                        >
                          <div
                            className="card-header"
                            id="headingSix"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseSix"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#collapseSix"
                                data-toggle="collapse"
                                type="button"
                              >
                                Availability
                                <span data-app-search--filters-count-target="availabilityCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingSix"
                            className="collapse"
                            id="collapseSix"
                          >
                            <div className="card-body sidebar-daterangepicker-wrapper-v2 custom-daterangepicker-wrapper-v2 -hide-right">
                              <input
                                className="d-none"
                                data-app-search--availability-filters-target="calendarField"
                                id="desktop_availability_filter"
                                name="daterange"
                                readOnly
                                style={{}}
                                type="text"
                              />
                              <div
                                className="custom-desktop-daterangepicker-v2 position-relative"
                                data-app-search--availability-filters-target="calendarWrapper"
                              >
                                <div
                                  className="daterangepicker ltr auto-apply show-calendar opensright m-0"
                                  style={{
                                    left: '0px',
                                    right: 'auto',
                                    top: '0px'
                                  }}
                                >
                                  <div className="ranges" />
                                  <div className="drp-calendar left">
                                    <div className="calendar-table">
                                      <table className="table-condensed">
                                        <thead>
                                          <tr>
                                            <th />
                                            <th
                                              className="month"
                                              colSpan="5"
                                            >
                                              January 2024
                                            </th>
                                            <th className="next available">
                                              <span />
                                            </th>
                                          </tr>
                                          <tr>
                                            <th>
                                              Mo
                                            </th>
                                            <th>
                                              Tu
                                            </th>
                                            <th>
                                              We
                                            </th>
                                            <th>
                                              Th
                                            </th>
                                            <th>
                                              Fr
                                            </th>
                                            <th>
                                              Sa
                                            </th>
                                            <th>
                                              Su
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td
                                              className="off ends off disabled"
                                              data-title="r0c0"
                                            >
                                              25
                                            </td>
                                            <td
                                              className="off ends off disabled"
                                              data-title="r0c1"
                                            >
                                              26
                                            </td>
                                            <td
                                              className="off ends off disabled"
                                              data-title="r0c2"
                                            >
                                              27
                                            </td>
                                            <td
                                              className="off ends off disabled"
                                              data-title="r0c3"
                                            >
                                              28
                                            </td>
                                            <td
                                              className="off ends off disabled"
                                              data-title="r0c4"
                                            >
                                              29
                                            </td>
                                            <td
                                              className="weekend off ends off disabled"
                                              data-title="r0c5"
                                            >
                                              30
                                            </td>
                                            <td
                                              className="weekend off ends off disabled"
                                              data-title="r0c6"
                                            >
                                              31
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="off disabled"
                                              data-title="r1c0"
                                            >
                                              1
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r1c1"
                                            >
                                              2
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r1c2"
                                            >
                                              3
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r1c3"
                                            >
                                              4
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r1c4"
                                            >
                                              5
                                            </td>
                                            <td
                                              className="weekend off disabled"
                                              data-title="r1c5"
                                            >
                                              6
                                            </td>
                                            <td
                                              className="weekend off disabled"
                                              data-title="r1c6"
                                            >
                                              7
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="off disabled"
                                              data-title="r2c0"
                                            >
                                              8
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r2c1"
                                            >
                                              9
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r2c2"
                                            >
                                              10
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r2c3"
                                            >
                                              11
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r2c4"
                                            >
                                              12
                                            </td>
                                            <td
                                              className="weekend off disabled"
                                              data-title="r2c5"
                                            >
                                              13
                                            </td>
                                            <td
                                              className="weekend off disabled"
                                              data-title="r2c6"
                                            >
                                              14
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="off disabled"
                                              data-title="r3c0"
                                            >
                                              15
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r3c1"
                                            >
                                              16
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r3c2"
                                            >
                                              17
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r3c3"
                                            >
                                              18
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r3c4"
                                            >
                                              19
                                            </td>
                                            <td
                                              className="weekend off disabled"
                                              data-title="r3c5"
                                            >
                                              20
                                            </td>
                                            <td
                                              className="weekend off disabled"
                                              data-title="r3c6"
                                            >
                                              21
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="off disabled"
                                              data-title="r4c0"
                                            >
                                              22
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r4c1"
                                            >
                                              23
                                            </td>
                                            <td
                                              className="today off disabled"
                                              data-title="r4c2"
                                            >
                                              24
                                            </td>
                                            <td
                                              className="off disabled"
                                              data-title="r4c3"
                                            >
                                              25
                                            </td>
                                            <td
                                              className="active start-date available"
                                              data-title="r4c4"
                                            >
                                              26
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r4c5"
                                            >
                                              27
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r4c6"
                                            >
                                              28
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="available"
                                              data-title="r5c0"
                                            >
                                              29
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r5c1"
                                            >
                                              30
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r5c2"
                                            >
                                              31
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r5c3"
                                            >
                                              1
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r5c4"
                                            >
                                              2
                                            </td>
                                            <td
                                              className="weekend off ends available"
                                              data-title="r5c5"
                                            >
                                              3
                                            </td>
                                            <td
                                              className="weekend off ends available"
                                              data-title="r5c6"
                                            >
                                              4
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div
                                      className="calendar-time"
                                      style={{
                                        display: 'none'
                                      }}
                                    />
                                  </div>
                                  <div className="drp-calendar right">
                                    <div className="calendar-table">
                                      <table className="table-condensed">
                                        <thead>
                                          <tr>
                                            <th className="prev available">
                                              <span />
                                            </th>
                                            <th
                                              className="month"
                                              colSpan="5"
                                            >
                                              February 2024
                                            </th>
                                            <th className="next available">
                                              <span />
                                            </th>
                                          </tr>
                                          <tr>
                                            <th>
                                              Mo
                                            </th>
                                            <th>
                                              Tu
                                            </th>
                                            <th>
                                              We
                                            </th>
                                            <th>
                                              Th
                                            </th>
                                            <th>
                                              Fr
                                            </th>
                                            <th>
                                              Sa
                                            </th>
                                            <th>
                                              Su
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td
                                              className="off ends available"
                                              data-title="r0c0"
                                            >
                                              29
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r0c1"
                                            >
                                              30
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r0c2"
                                            >
                                              31
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r0c3"
                                            >
                                              1
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r0c4"
                                            >
                                              2
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r0c5"
                                            >
                                              3
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r0c6"
                                            >
                                              4
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="available"
                                              data-title="r1c0"
                                            >
                                              5
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r1c1"
                                            >
                                              6
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r1c2"
                                            >
                                              7
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r1c3"
                                            >
                                              8
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r1c4"
                                            >
                                              9
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r1c5"
                                            >
                                              10
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r1c6"
                                            >
                                              11
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="available"
                                              data-title="r2c0"
                                            >
                                              12
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r2c1"
                                            >
                                              13
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r2c2"
                                            >
                                              14
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r2c3"
                                            >
                                              15
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r2c4"
                                            >
                                              16
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r2c5"
                                            >
                                              17
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r2c6"
                                            >
                                              18
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="available"
                                              data-title="r3c0"
                                            >
                                              19
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r3c1"
                                            >
                                              20
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r3c2"
                                            >
                                              21
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r3c3"
                                            >
                                              22
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r3c4"
                                            >
                                              23
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r3c5"
                                            >
                                              24
                                            </td>
                                            <td
                                              className="weekend available"
                                              data-title="r3c6"
                                            >
                                              25
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="available"
                                              data-title="r4c0"
                                            >
                                              26
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r4c1"
                                            >
                                              27
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r4c2"
                                            >
                                              28
                                            </td>
                                            <td
                                              className="available"
                                              data-title="r4c3"
                                            >
                                              29
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r4c4"
                                            >
                                              1
                                            </td>
                                            <td
                                              className="weekend off ends available"
                                              data-title="r4c5"
                                            >
                                              2
                                            </td>
                                            <td
                                              className="weekend off ends available"
                                              data-title="r4c6"
                                            >
                                              3
                                            </td>
                                          </tr>
                                          <tr>
                                            <td
                                              className="off ends available"
                                              data-title="r5c0"
                                            >
                                              4
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r5c1"
                                            >
                                              5
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r5c2"
                                            >
                                              6
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r5c3"
                                            >
                                              7
                                            </td>
                                            <td
                                              className="off ends available"
                                              data-title="r5c4"
                                            >
                                              8
                                            </td>
                                            <td
                                              className="weekend off ends available"
                                              data-title="r5c5"
                                            >
                                              9
                                            </td>
                                            <td
                                              className="weekend off ends available"
                                              data-title="r5c6"
                                            >
                                              10
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                    <div
                                      className="calendar-time"
                                      style={{
                                        display: 'none'
                                      }}
                                    />
                                  </div>
                                  <div className="drp-buttons">
                                    <span className="drp-selected">
                                      01/26/2024 - 01/24/2024
                                    </span>
                                    <button
                                      className="cancelBtn btn btn-sm btn-default"
                                      type="button"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      className="applyBtn btn btn-sm btn-primary"
                                      disabled
                                      type="button"
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="pt-2"
                        data-controller="app-search--managed-filter"
                      >
                        <div
                          className="sidebar-filter-button sidebar-managed-stock-filter-v2 px-0 border-0"
                          data-action="click->app-search--managed-filter#toggleFilter mouseover->app-search--managed-filter#toggleHover"
                          id="managedStockElement"
                        >
                          <label className="mouseover-pointer">
                            {' '}Managed stock{' '}
                          </label>
                          <a
                            className="filter-icon"
                            data-target="#managed-stock-modal"
                            data-toggle="modal"
                            href="#"
                          >
                            <img
                              alt="An icon of a info"
                              height="17"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                              width="17"
                            />
                          </a>
                          <div className="managed-stock-desktop-toggle">
                            <img
                              alt="An icon of a default accordion toggle"
                              className="accordion-toggle-button image -on"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/default-0317f07b9a310e6c7f6023b058f4fc20.svg"
                            />
                            <img
                              alt="An icon of a selected accordion toggle"
                              className="accordion-toggle-button image -off"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/selected-fc40a35469454baf22df4d5ef54aec6d.svg"
                              style={{}}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="pt-2"
                        data-controller="app-search--top-lenders-filter"
                      >
                        <div
                          className="sidebar-filter-button sidebar-top-lender-filter-v2 px-0 border-0"
                          data-action="click->app-search--top-lenders-filter#toggleFilter mouseover->app-search--top-lenders-filter#toggleHover"
                          id="topLenderElement"
                        >
                          <label className="mouseover-pointer">
                            {' '}Top Lenders{' '}
                          </label>
                          <a
                            className="filter-icon"
                            data-target="#top-lenders-modal"
                            data-toggle="modal"
                            href="#"
                          >
                            <img
                              alt="An icon of a info"
                              height="17"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                              width="17"
                            />
                          </a>
                          <div className="top-lenders-desktop-toggle">
                            <img
                              alt="An icon of a default accordion toggle"
                              className="accordion-toggle-button image -on"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/default-0317f07b9a310e6c7f6023b058f4fc20.svg"
                            />
                            <img
                              alt="An icon of a selected accordion toggle"
                              className="accordion-toggle-button image -off"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/selected-fc40a35469454baf22df4d5ef54aec6d.svg"
                              style={{}}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="pt-2"
                        data-controller="app-search--available-to-buy-filter"
                      >
                        <div
                          className="sidebar-filter-button sidebar-available-to-buy-filter-v2 px-0 border-0"
                          data-action="click->app-search--available-to-buy-filter#toggleFilter mouseover->app-search--available-to-buy-filter#toggleHover"
                          id="availableToBuyNowElement"
                        >
                          <label className="mouseover-pointer">
                            Available to buy
                          </label>
                          <div className="available-to-buy-desktop-toggle">
                            <img
                              alt="An icon of a default accordion toggle"
                              className="accordion-toggle-button image -on"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/default-0317f07b9a310e6c7f6023b058f4fc20.svg"
                            />
                            <img
                              alt="An icon of a selected accordion toggle"
                              className="accordion-toggle-button image -off"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/selected-fc40a35469454baf22df4d5ef54aec6d.svg"
                              style={{}}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion sidebar-filter-accordion-v2"
                        data-controller="app-search--categories-filter"
                        id="app-search--categories-filter-controller"
                      >
                        <div className="card categories-filter">
                          <div
                            className="card-header"
                            id="headingOne"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseOne"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#collapseOne"
                                data-toggle="collapse"
                                type="button"
                              >
                                Category
                                <span data-app-search--filters-count-target="categoryCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingOne"
                            className="collapse"
                            id="collapseOne"
                          >
                            <div className="card-body">
                              <div className="menu-wrapper">
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="category"
                                      data-subcategory="false"
                                      data-value="accessories"
                                      type="checkbox"
                                    />
                                    Accessories
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="category"
                                      data-subcategory="false"
                                      data-value="bags"
                                      type="checkbox"
                                    />
                                    Bags
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="category"
                                      data-subcategory="false"
                                      data-value="shoes"
                                      type="checkbox"
                                    />
                                    Shoes
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="card dresses-sub-length-filter d-none"
                          data-app-search--categories-filter-target="dressesSub"
                        >
                          <div
                            className="card-header"
                            id="headingOne"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseDressesLength"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#collapseDressesLength"
                                data-toggle="collapse"
                                type="button"
                              >
                                Length
                                <span data-app-search--filters-count-target="dressesLengthCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingOne"
                            className="collapse"
                            id="collapseDressesLength"
                          >
                            <div className="card-body">
                              <div className="menu-wrapper">
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_length"
                                      data-subcategory="true"
                                      data-value="micro"
                                      type="checkbox"
                                    />
                                    Micro
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_length"
                                      data-subcategory="true"
                                      data-value="mini"
                                      type="checkbox"
                                    />
                                    Mini
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_length"
                                      data-subcategory="true"
                                      data-value="midi"
                                      type="checkbox"
                                    />
                                    Midi
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_length"
                                      data-subcategory="true"
                                      data-value="maxi"
                                      type="checkbox"
                                    />
                                    Maxi
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="card-header"
                            id="headingOne"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseDressesFit"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#collapseDressesFit"
                                data-toggle="collapse"
                                type="button"
                              >
                                Fit
                                <span data-app-search--filters-count-target="dressesFitCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingOne"
                            className="collapse"
                            id="collapseDressesFit"
                          >
                            <div className="card-body">
                              <div className="menu-wrapper">
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="fitted"
                                      type="checkbox"
                                    />
                                    Fitted
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="chunky"
                                      type="checkbox"
                                    />
                                    Chunky
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="oversized"
                                      type="checkbox"
                                    />
                                    Oversized
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="skinny-fit"
                                      type="checkbox"
                                    />
                                    Skinny Fit
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="slim-fit"
                                      type="checkbox"
                                    />
                                    Slim Fit
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="regular-fit"
                                      type="checkbox"
                                    />
                                    Regular Fit
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="bandage"
                                      type="checkbox"
                                    />
                                    Bandage
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="bodycon"
                                      type="checkbox"
                                    />
                                    Bodycon
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="boxy"
                                      type="checkbox"
                                    />
                                    Boxy
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="loose-fit"
                                      type="checkbox"
                                    />
                                    Loose Fit
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="slouchy"
                                      type="checkbox"
                                    />
                                    Slouchy
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="maternity"
                                      type="checkbox"
                                    />
                                    Maternity
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="petite"
                                      type="checkbox"
                                    />
                                    Petite
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="plus-size"
                                      type="checkbox"
                                    />
                                    Plus Size
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="card-header"
                            id="headingOne"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseDressesStyle"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#collapseDressesStyle"
                                data-toggle="collapse"
                                type="button"
                              >
                                Style
                                <span data-app-search--filters-count-target="dressesStyleCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingOne"
                            className="collapse"
                            id="collapseDressesStyle"
                          >
                            <div className="card-body">
                              <div className="menu-wrapper">
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="wrap"
                                      type="checkbox"
                                    />
                                    Wrap
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_fit"
                                      data-subcategory="true"
                                      data-value="bodycon"
                                      type="checkbox"
                                    />
                                    Bodycon
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="shirt"
                                      type="checkbox"
                                    />
                                    Shirt
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="slip"
                                      type="checkbox"
                                    />
                                    Slip
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="tea"
                                      type="checkbox"
                                    />
                                    Tea
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="pencil"
                                      type="checkbox"
                                    />
                                    Pencil
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="evening"
                                      type="checkbox"
                                    />
                                    Evening
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="shift"
                                      type="checkbox"
                                    />
                                    Shift
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="jumper"
                                      type="checkbox"
                                    />
                                    Jumper
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="shealth"
                                      type="checkbox"
                                    />
                                    Shealth
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="blazer"
                                      type="checkbox"
                                    />
                                    Blazer
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="casual"
                                      type="checkbox"
                                    />
                                    Casual
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="smart-casual"
                                      type="checkbox"
                                    />
                                    Smart Casual
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="formal"
                                      type="checkbox"
                                    />
                                    Formal
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="knitted"
                                      type="checkbox"
                                    />
                                    Knitted
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="dresses_style"
                                      data-subcategory="true"
                                      data-value="sportswear"
                                      type="checkbox"
                                    />
                                    Sportswear
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="card shoes-sub-length-filter d-none"
                          data-app-search--categories-filter-target="shoesSub"
                        >
                          <div
                            className="card-header"
                            id="headingOne"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseShoesStyle"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#collapseShoesStyle"
                                data-toggle="collapse"
                                type="button"
                              >
                                Shoes Style
                                <span data-app-search--filters-count-target="shoesStyleCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingOne"
                            className="collapse"
                            id="collapseShoesStyle"
                          >
                            <div className="card-body">
                              <div className="menu-wrapper">
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="platform"
                                      type="checkbox"
                                    />
                                    Platform
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="kitten heels"
                                      type="checkbox"
                                    />
                                    Kitten Heels
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="high-heels"
                                      type="checkbox"
                                    />
                                    High Heels
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="flat"
                                      type="checkbox"
                                    />
                                    Flat
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="strappy"
                                      type="checkbox"
                                    />
                                    Strappy
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="slingback"
                                      type="checkbox"
                                    />
                                    Slingback
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="ankle-strap"
                                      type="checkbox"
                                    />
                                    Ankle Strap
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="chunky-shoe-heel"
                                      type="checkbox"
                                    />
                                    Chunky Shoe Heel
                                  </label>
                                </div>
                                <div className="component checkbox category-checkbox">
                                  <label className="checkbox-label">
                                    <input
                                      className="checkbox-input"
                                      data-action="change->app-search--categories-filter#selectCategory"
                                      data-filter="shoes_style"
                                      data-subcategory="true"
                                      data-value="wedge"
                                      type="checkbox"
                                    />
                                    Wedge
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card prices-filter">
                          <div
                            className="card-header"
                            id="headingFive"
                          >
                            <h2 className="mb-0">
                              <button
                                aria-controls="collapseFive"
                                aria-expanded="false"
                                className="btn btn-link collapsed sidebar-filter-button"
                                data-target="#collapseFive"
                                data-toggle="collapse"
                                type="button"
                              >
                                Rental Price
                                <span data-app-search--filters-count-target="priceCount" />
                              </button>
                            </h2>
                          </div>
                          <div
                            aria-labelledby="headingFive"
                            className="collapse"
                            id="collapseFive"
                          >
                            <div className="card-body">
                              <div
                                className="menu-wrapper app-search--rental-price-filters-controller"
                                data-controller="app-search--rental-price-filters"
                              >
                                <div
                                  className="price-slider"
                                  data-app-search--rental-price-filters-target="priceSliderWrapper"
                                >
                                  <div className="price-slider-div mt-2 mt-md-auto" />
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
                                              transform: 'translate(0%, 0px)                                              scale(1, 1)'
                                            }}
                                          />
                                        </div>
                                        <div
                                          className="noUi-origin"
                                          style={{
                                            transform: 'translate(-100%, 0px)',
                                            zIndex: '5'
                                          }}
                                        >
                                          <div
                                            aria-orientation="horizontal"
                                            aria-valuemax="900.0"
                                            aria-valuemin="15.0"
                                            aria-valuenow="15.0"
                                            aria-valuetext="15.00"
                                            className="noUi-handle noUi-handle-lower"
                                            data-handle="0"
                                            role="slider"
                                            tabIndex="0"
                                          >
                                            <div className="noUi-touch-area" />
                                            <div className="noUi-tooltip">
                                              AU$ 15
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="noUi-origin"
                                          style={{
                                            transform: 'translate(0%, 0px)',
                                            zIndex: '4'
                                          }}
                                        >
                                          <div
                                            aria-orientation="horizontal"
                                            aria-valuemax="900.0"
                                            aria-valuemin="15.0"
                                            aria-valuenow="900.0"
                                            aria-valuetext="900.00"
                                            className="noUi-handle noUi-handle-upper"
                                            data-handle="1"
                                            role="slider"
                                            tabIndex="0"
                                          >
                                            <div className="noUi-touch-area" />
                                            <div className="noUi-tooltip">
                                              AU$ 900
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
                                            className="component input default-colour"
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

                                          

          </div>
        </>
    );
}
export default EditFilter;