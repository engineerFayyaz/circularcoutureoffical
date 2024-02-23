import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PopularDesignersCarousel = () =>{

    return (
        <>
        <div
      className="mx-16px my-16px popular-designers-container"
      data-app-search--designer-filters-target="container"
    >
      <input
        href="javascript:void(0)"
        className="popular-designers-checkboxes"
        id="The Vampire’s Wife"
        name="filter_designers"
        type="checkbox"
        data-value="The Vampire’s Wife"
        data-filter="designers"
        data-action="app-search--designer-filters#selectPopularDesigners"
        hidden=""
      />
      <label
        htmlFor="The Vampire’s Wife"
        className="popular-designers-button text-nowrap"
      >
        The Vampire’s Wife
      </label>
      <input
        href="javascript:void(0)"
        className="popular-designers-checkboxes"
        id="Cecilie Bahnsen"
        name="filter_designers"
        type="checkbox"
        data-value="Cecilie Bahnsen"
        data-filter="designers"
        data-action="app-search--designer-filters#selectPopularDesigners"
        hidden=""
      />
      <label
        htmlFor="Cecilie Bahnsen"
        className="popular-designers-button text-nowrap"
      >
        Cecilie Bahnsen
      </label>
      <input
        href="javascript:void(0)"
        className="popular-designers-checkboxes"
        id="Self-Portrait"
        name="filter_designers"
        type="checkbox"
        data-value="Self-Portrait"
        data-filter="designers"
        data-action="app-search--designer-filters#selectPopularDesigners"
        hidden=""
      />
      <label
        htmlFor="Self-Portrait"
        className="popular-designers-button text-nowrap"
      >
        Self-Portrait
      </label>
      <input
        href="javascript:void(0)"
        className="popular-designers-checkboxes"
        id="16ARLINGTON"
        name="filter_designers"
        type="checkbox"
        data-value="16ARLINGTON"
        data-filter="designers"
        data-action="app-search--designer-filters#selectPopularDesigners"
        hidden=""
      />
      <label
        htmlFor="16ARLINGTON"
        className="popular-designers-button text-nowrap"
      >
        16ARLINGTON
      </label>
      <input
        href="javascript:void(0)"
        className="popular-designers-checkboxes"
        id="Rat & Boa"
        name="filter_designers"
        type="checkbox"
        data-value="Rat & Boa"
        data-filter="designers"
        data-action="app-search--designer-filters#selectPopularDesigners"
        hidden=""
      />
      <label
        htmlFor="Rat & Boa"
        className="popular-designers-button text-nowrap"
      >
        Rat &amp; Boa
      </label>
      <input
        href="javascript:void(0)"
        className="popular-designers-checkboxes"
        id="Nadine Merabi"
        name="filter_designers"
        type="checkbox"
        data-value="Nadine Merabi"
        data-filter="designers"
        data-action="app-search--designer-filters#selectPopularDesigners"
        hidden=""
      />
      <label
        htmlFor="Nadine Merabi"
        className="popular-designers-button text-nowrap"
      >
        Nadine Merabi
      </label>
      <input
        href="javascript:void(0)"
        className="popular-designers-checkboxes"
        id="Ganni"
        name="filter_designers"
        type="checkbox"
        data-value="Ganni"
        data-filter="designers"
        data-action="app-search--designer-filters#selectPopularDesigners"
        hidden=""
      />
      <label htmlFor="Ganni" className="popular-designers-button text-nowrap">
        Ganni
      </label>
    </div>
        </>
    )
}
export default PopularDesignersCarousel;