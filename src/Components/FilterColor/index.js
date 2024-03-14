import React from "react";

const FilterColor = () => {
  return (
    <>
      <div
        data-controller="app-search--colours-filter"
        className="card colours-filter"
      >
        
        <div
          id="collapseFour"
          className="collapse show"
          aria-labelledby="headingFour"
          style={{}}
        >
          <div className="card-body">
            <div className="menu-wrapper">
              <div className="colours-wrapper-v2">
                <div className="component checkbox" style={{display:"flex"}}>
                  <input
                    className="checkbox-input colours-checkboxes"
                    id="Beige-desktop"
                    name="filter_colours"
                    type="checkbox"
                    data-value="beige"
                    data-filter="colours"
                    data-action="app-search--colours-filter#selectedColourFilter"
                    hidden=""
                  />
                  <label className="checkbox-label" htmlFor="Beige-desktop">
                    <span className="">
                      <i
                        className="fa-solid fa-circle --fa-border"
                        style={{ color: "transparent", background: "#DFD9CD" }}
                        aria-hidden="true"
                      />
                    </span>
                    Beige
                  </label>
                </div>
                <div className="component checkbox" style={{display:"flex"}}>
                  <input
                    className="checkbox-input colours-checkboxes"
                    id="Black-desktop"
                    name="filter_colours"
                    type="checkbox"
                    data-value="black"
                    data-filter="colours"
                    data-action="app-search--colours-filter#selectedColourFilter"
                    hidden=""
                  />
                  <label className="checkbox-label" htmlFor="Black-desktop">
                    <span className="">
                      <i
                        className="fa-solid fa-circle --fa-border"
                        style={{ color: "transparent", background: "#000000" }}
                        aria-hidden="true"
                      />
                    </span>
                    Black
                  </label>
                </div>
                <div className="component checkbox" style={{display:"flex"}}>
                  <input
                    className="checkbox-input colours-checkboxes"
                    id="Blue-desktop"
                    name="filter_colours"
                    type="checkbox"
                    data-value="blue"
                    data-filter="colours"
                    data-action="app-search--colours-filter#selectedColourFilter"
                    hidden=""
                  />
                  <label className="checkbox-label" htmlFor="Blue-desktop">
                    <span className="">
                      <i
                        className="fa-solid fa-circle --fa-border"
                        style={{ color: "transparent", background: "#2E79BE" }}
                        aria-hidden="true"
                      />
                    </span>
                    Blue
                  </label>
                </div>
                <div className="component checkbox" style={{display:"flex"}}>
                  <input
                    className="checkbox-input colours-checkboxes"
                    id="Brown-desktop"
                    name="filter_colours"
                    type="checkbox"
                    data-value="brown"
                    data-filter="colours"
                    data-action="app-search--colours-filter#selectedColourFilter"
                    hidden=""
                  />
                  <label className="checkbox-label" htmlFor="Brown-desktop">
                    <span className="">
                      <i
                        className="fa-solid fa-circle --fa-border"
                        style={{ color: "transparent", background: "#754F34" }}
                        aria-hidden="true"
                      />
                    </span>
                    Brown
                  </label>
                </div>
                <div className="component checkbox" style={{display:"flex"}}>
                  <input
                    className="checkbox-input colours-checkboxes"
                    id="Copper-desktop"
                    name="filter_colours"
                    type="checkbox"
                    data-value="copper"
                    data-filter="colours"
                    data-action="app-search--colours-filter#selectedColourFilter"
                    hidden=""
                  />
                  <label className="checkbox-label" htmlFor="Copper-desktop">
                    <span className="">
                      <i
                        className="fa-solid fa-circle --fa-border"
                        style={{ color: "transparent", background: "#B08875" }}
                        aria-hidden="true"
                      />
                    </span>
                    Copper
                  </label>
                </div>
                <div className="component checkbox" style={{display:"flex"}}>
                  <input
                    className="checkbox-input colours-checkboxes"
                    id="Cream-desktop"
                    name="filter_colours"
                    type="checkbox"
                    data-value="cream"
                    data-filter="colours"
                    data-action="app-search--colours-filter#selectedColourFilter"
                    hidden=""
                  />
                  <label className="checkbox-label" htmlFor="Cream-desktop">
                    <span className="">
                      <i
                        className="fa-solid fa-circle --fa-border"
                        style={{ color: "transparent", background: "#EFEADA" }}
                        aria-hidden="true"
                      />
                    </span>
                    Cream
                  </label>
                </div>
                <div className="component checkbox" style={{display:"flex"}}>
                  <input
                    className="checkbox-input colours-checkboxes"
                    id="Gold-desktop"
                    name="filter_colours"
                    type="checkbox"
                    data-value="gold"
                    data-filter="colours"
                    data-action="app-search--colours-filter#selectedColourFilter"
                    hidden=""
                  />
                  <label className="checkbox-label" htmlFor="Gold-desktop">
                    <span className="">
                      <i
                        className="fa-solid fa-circle --fa-border"
                        style={{ color: "transparent", background: "#EDDDB5" }}
                        aria-hidden="true"
                      />
                    </span>
                    Gold
                  </label>
                </div>
                <div className="component checkbox" style={{display:"flex"}}>
                  <input
                    className="checkbox-input colours-checkboxes"
                    id="Green-desktop"
                    name="filter_colours"
                    type="checkbox"
                    data-value="green"
                    data-filter="colours"
                    data-action="app-search--colours-filter#selectedColourFilter"
                    hidden=""
                  />
                  <label className="checkbox-label" htmlFor="Green-desktop">
                    <span className="">
                      <i
                        className="fa-solid fa-circle --fa-border"
                        style={{ color: "transparent", background: "#9CC07A" }}
                        aria-hidden="true"
                      />
                    </span>
                    Green
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FilterColor;
