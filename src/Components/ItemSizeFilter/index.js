import React from "react";

const ItemSizeFilter = () => {
  return (
    <>
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
                
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade sizes-tab-pane active show"
                  id="desktop-pills-clothing"
                  role="tabpanel"
                  aria-labelledby="desktop-pills-clothing-tab"
                >
                  <div className="menu-wrapper">
                    <p>Please select all applicable sizes</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ItemSizeFilter;
