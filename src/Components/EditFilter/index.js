import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import AvaulabilityProducts from "../AvaulabilityProducts";
import DesignerApi from "../DesignerApi";
import CatagoryApi from "../CatogeryApi/Index";
import PriceRange from "../PriceRangeApi/Index";
import FilterColor from "../FilterColor";
import ItemSizeFilter from "../ItemSizeFilter";
import ManageStockFilter from "../ManageStockFilter/Index";
import TopLenderFilter from "../TopLenderFilter/Index";
import AvailableToBuyFilter from "../AvailableToBuyFilter/Index";

const EditFilter = () => {
  return (
    <>
      <div className="col-md-5 col-lg-4 d-none d-md-block p-4 ">
        <div class="filter-number-results-v2">
          <p
            class="text text-uppercase"
            data-app-search--listing-filters-target="totalResults"
          >
            <span class="total-filters-label">FILTERS</span> 200+ Results
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
                      <div>
                        <ItemSizeFilter />
                      </div>
                    </>
                  ),
                  itemId: "/color",
                },
              ],
            },
            {
              title: "color",
              itemId: "/Color",
              elemBefore: () => {},
              subNav: [
                {
                  title: (
                    <>
                      <div>
                        <FilterColor />
                      </div>
                    </>
                  ),
                  itemId: "/color",
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
                  title: <AvaulabilityProducts />,
                },
              ],
            },
            {
              title: (
                <>
                  {/* style = {{display:"flex"}}, */}
                  <ManageStockFilter />
                </>
              ),
            },
            {
              title: (
                <>
                  {/* style = {{display:"flex"}}, */}
                  <TopLenderFilter />
                </>
              ),
            },
            {
              title: (
                <>
                  {/* style = {{display:"flex"}}, */}
                  <AvailableToBuyFilter />
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
                      <div className="card designers-filter ">
                        <CatagoryApi className="p-0 mt-0" />
                      </div>
                    </>
                  ),
                  itemId: "/management/dresses",
                },
              ],
            },

            {
              title: "PriceRange",
              itemId: "/priceRange",
              subNav: [
                {
                  title: (
                    <>
                      <div className="card designers-filter ">
                        <PriceRange className="p-0 mt-0" />
                      </div>
                    </>
                  ),
                  itemId: "/management/priceRange",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};
export default EditFilter;
