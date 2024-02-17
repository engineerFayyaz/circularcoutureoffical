import React from "react";
import "../../css/footer-pages.css";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import Link from "react-dom";

const SiteMap = () => {
    return (
        <>
            <TopHeader />
            <div className="page__main-content" id="mainContent">
                {/* plp intro*/}
                <div className="basic-page">
                    <div className="container">
                        {/* BREADCRUMBS*/}
                        <div className="breadcrumbs">
                            <ul
                                itemScope=""
                                itemType="http://schema.org/BreadcrumbList"
                                className="breadcrumbs__list"
                            >
                                <li
                                    itemProp="itemListElement"
                                    itemScope=""
                                    itemType="http://schema.org/ListItem"
                                >
                                    <a href="/" itemProp="item">
                                        <span itemProp="name">Home</span>
                                    </a>
                                    <meta itemProp="position" content={1} />
                                </li>
                                <li
                                    itemProp="itemListElement"
                                    itemScope=""
                                    itemType="http://schema.org/ListItem"
                                >
                                    <span itemProp="name">Site Map</span>
                                    <meta itemProp="position" content={2} />
                                </li>{" "}
                            </ul>
                        </div>{" "}
                        <div>
                            <h1 className="h2-title">Site Map</h1>
                            <p className="p-main">
                                Easily find your way around the All The Dresses website with our Site
                                Map.
                            </p>
                            <div className="site-map__separator" />
                            <div className="site-map__list site-map__list--triple">
                                <h2 className="h3-title">Browse By Category</h2>
                                <ul>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Bags">
                                            Bags
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Belts">
                                            Belts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Clutches">
                                            Clutches
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Dresses">
                                            Dresses
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Collections/NewArrival"
                                            title="Browse Fashion Solutions"
                                        >
                                            Fashion Solutions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Gowns">
                                            Gowns
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Headwear">
                                            Headwear
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Collections/NewArrival"
                                            title="Browse Jackets & Coats"
                                        >
                                            Jackets &amp; Coats
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Jewellery">
                                            Jewellery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Jumpsuits">
                                            Jumpsuits
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Kids">
                                            Kids
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Playsuits">
                                            Playsuits
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Sets">
                                            Sets
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Skirts">
                                            Skirts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/NewArrival" title="Browse Tops">
                                            Tops
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-map__separator" />
                            <div className="site-map__list site-map__list--single">
                                <h2 className="h3-title">Browse By Dress Length</h2>
                                <ul>
                                    <li>
                                        <a
                                            href="/Collections/clothing"
                                            title="Browse Full Length Dresses"
                                        >
                                            Full Length
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/clothing" title="Browse Maxi Dresses">
                                            Maxis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/clothing" title="Browse Midi Dresses">
                                            Midis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Collections/clothing" title="Browse Mini Dresses">
                                            Minis
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Collections/clothing"
                                            title="Browse Train Dresses"
                                        >
                                            Train
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-map__separator" />
                            <div className="site-map__list site-map__list--triple">
                                <h2 className="h3-title">Browse By Designer</h2>
                                <ul>
                                    <li>
                                        <a
                                            href="/Designers/Alemais"
                                            title="Browse Acler Dresses & Accessories"
                                        >
                                            Acler
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/Designers/Alemais" title="Browse Aje Dresses & Accessories">
                                            Aje
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Designers/Alemais"
                                            title="Browse Alemais Dresses & Accessories"
                                        >
                                            Alemais
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Designers/Alemais"
                                            title="Browse Arcina Ori Dresses & Accessories"
                                        >
                                            Arcina Ori
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Designers/Alemais"
                                            title="Browse By Johnny Dresses & Accessories"
                                        >
                                            By Johnny
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Designers/Alemais"
                                            title="Browse By Nicola Dresses & Accessories"
                                        >
                                            By Nicola
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Designers/Alemais"
                                            title="Browse Chanel Dresses & Accessories"
                                        >
                                            Chanel
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/dion-lee"
                                            title="Browse Dion Lee Dresses & Accessories"
                                        >
                                            Dion Lee
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/dior"
                                            title="Browse Dior Dresses & Accessories"
                                        >
                                            Dior
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/effie-kats"
                                            title="Browse Effie Kats Dresses & Accessories"
                                        >
                                            Effie Kats
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/eliya-the-label"
                                            title="Browse Eliya The Label Dresses & Accessories"
                                        >
                                            Eliya The Label
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/elle-zeitoune"
                                            title="Browse Elle Zeitoune Dresses & Accessories"
                                        >
                                            Elle Zeitoune
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/elliatt"
                                            title="Browse Elliatt Dresses & Accessories"
                                        >
                                            Elliatt
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/for-love-and-lemons"
                                            title="Browse For Love And Lemons Dresses & Accessories"
                                        >
                                            For Love And Lemons
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/gucci"
                                            title="Browse Gucci Dresses & Accessories"
                                        >
                                            Gucci
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/house-of-cb"
                                            title="Browse House of CB Dresses & Accessories"
                                        >
                                            House of CB
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/lidee"
                                            title="Browse L'idée Dresses & Accessories"
                                        >
                                            L'idée
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/leo-lin"
                                            title="Browse Leo Lin Dresses & Accessories"
                                        >
                                            Leo Lin
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/lexi"
                                            title="Browse Lexi Dresses & Accessories"
                                        >
                                            Lexi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/lia-stublla"
                                            title="Browse Lia Stublla Dresses & Accessories"
                                        >
                                            Lia Stublla
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/louis-vuitton"
                                            title="Browse Louis Vuitton Dresses & Accessories"
                                        >
                                            Louis Vuitton
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/mackenzie-mode"
                                            title="Browse Mackenzie Mode Dresses & Accessories"
                                        >
                                            Mackenzie Mode
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/mossman"
                                            title="Browse Mossman Dresses & Accessories"
                                        >
                                            Mossman
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/nicola-finetti"
                                            title="Browse Nicola Finetti Dresses & Accessories"
                                        >
                                            Nicola Finetti
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/nookie"
                                            title="Browse Nookie Dresses & Accessories"
                                        >
                                            Nookie
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/paris-georgia"
                                            title="Browse Paris Georgia Dresses & Accessories"
                                        >
                                            Paris Georgia
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/rebecca-vallance"
                                            title="Browse Rebecca Vallance Dresses & Accessories"
                                        >
                                            Rebecca Vallance
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/saint-laurent"
                                            title="Browse Saint Laurent Dresses & Accessories"
                                        >
                                            Saint Laurent
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/shona-joy"
                                            title="Browse Shona Joy Dresses & Accessories"
                                        >
                                            Shona Joy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/significant-other"
                                            title="Browse Significant Other Dresses & Accessories"
                                        >
                                            Significant Other
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/sir-the-label"
                                            title="Browse Sir the Label Dresses & Accessories"
                                        >
                                            Sir the Label
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/sofia-the-label"
                                            title="Browse Sofia The Label Dresses & Accessories"
                                        >
                                            Sofia The Label
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/sonya"
                                            title="Browse Sonya Dresses & Accessories"
                                        >
                                            Sonya
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/suboo"
                                            title="Browse Suboo Dresses & Accessories"
                                        >
                                            Suboo
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/talulah"
                                            title="Browse Talulah Dresses & Accessories"
                                        >
                                            Talulah
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/winona"
                                            title="Browse Winona Dresses & Accessories"
                                        >
                                            Winona
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/designer/zimmermann"
                                            title="Browse Zimmermann Dresses & Accessories"
                                        >
                                            Zimmermann
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p className="p-main mt-50">
                                We have items from <strong>over 300 designers</strong> available for
                                hire on All The Dresses.
                            </p>
                            <p className="p-main">
                                <a href="/designers" title="The full list of Designers">
                                    Click here for the full list
                                </a>
                            </p>
                            <a href="/designers" title="The full list of Designers">
                                <div className="site-map__separator" />
                            </a>
                            <div className="site-map__list">
                                <a href="/designers" title="The full list of Designers">
                                    <h2 className="h3-title">Browse By Colour</h2>
                                </a>
                                <ul>
                                    <a href="/designers" title="The full list of Designers"></a>
                                    <li>
                                        <a href="/designers" title="The full list of Designers"></a>
                                        <a
                                            href="/colour/black-dresses"
                                            title="Browse Black Dresses & Accessories"
                                        >
                                            Black
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/blue-dresses"
                                            title="Browse Blue Dresses & Accessories"
                                        >
                                            Blue
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/brown-dresses"
                                            title="Browse Brown Dresses & Accessories"
                                        >
                                            Brown
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/cream-dresses"
                                            title="Browse Cream Dresses & Accessories"
                                        >
                                            Cream
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/gold-dresses"
                                            title="Browse Gold Dresses & Accessories"
                                        >
                                            Gold
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/green-dresses"
                                            title="Browse Green Dresses & Accessories"
                                        >
                                            Green
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/grey-dresses"
                                            title="Browse Grey Dresses & Accessories"
                                        >
                                            Grey
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/multi-dresses"
                                            title="Browse Multi Dresses & Accessories"
                                        >
                                            Multi
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/navy-dresses"
                                            title="Browse Navy Dresses & Accessories"
                                        >
                                            Navy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/orange-dresses"
                                            title="Browse Orange Dresses & Accessories"
                                        >
                                            Orange
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/pink-dresses"
                                            title="Browse Pink Dresses & Accessories"
                                        >
                                            Pink
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/purple-dresses"
                                            title="Browse Purple Dresses & Accessories"
                                        >
                                            Purple
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/red-dresses"
                                            title="Browse Red Dresses & Accessories"
                                        >
                                            Red
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/silver-dresses"
                                            title="Browse Silver Dresses & Accessories"
                                        >
                                            Silver
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/tan-dresses"
                                            title="Browse Tan Dresses & Accessories"
                                        >
                                            Tan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/white-dresses"
                                            title="Browse White Dresses & Accessories"
                                        >
                                            White
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/colour/yellow-dresses"
                                            title="Browse Yellow Dresses & Accessories"
                                        >
                                            Yellow
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-map__separator" />
                            <div className="site-map__list site-map__list--triple">
                                <h2 className="h3-title">Browse By Occasion</h2>
                                <ul>
                                    <li>
                                        <a
                                            href="/occasion/baby-shower-dresses"
                                            title="Browse Baby Shower Dresses & Accessories"
                                        >
                                            Baby Shower
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/black-tie-dresses"
                                            title="Browse Black Tie Dresses & Accessories"
                                        >
                                            Black Tie
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/bridal-shower-dresses"
                                            title="Browse Bridal Shower Dresses & Accessories"
                                        >
                                            Bridal Shower
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/casual-bbq-dresses"
                                            title="Browse Casual BBQ Dresses & Accessories"
                                        >
                                            Casual BBQ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/christening-dresses"
                                            title="Browse Christening Dresses & Accessories"
                                        >
                                            Christening
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/cocktail-party-dresses"
                                            title="Browse Cocktail Party Dresses & Accessories"
                                        >
                                            Cocktail Party
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/date-night-dresses"
                                            title="Browse Date Night Dresses & Accessories"
                                        >
                                            Date Night
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/derby-day-dresses"
                                            title="Browse Derby Day Dresses & Accessories"
                                        >
                                            Derby Day
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/engagement-dresses"
                                            title="Browse Engagement Dresses & Accessories"
                                        >
                                            Engagement
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/festival-dresses"
                                            title="Browse Festival Dresses & Accessories"
                                        >
                                            Festival
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/garden-party-dresses"
                                            title="Browse Garden Party Dresses & Accessories"
                                        >
                                            Garden Party
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/girls-lunching-dresses"
                                            title="Browse Girls Lunching Dresses & Accessories"
                                        >
                                            Girls Lunching
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/hens-party-dresses"
                                            title="Browse Hens Party Dresses & Accessories"
                                        >
                                            Hens Party
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/high-tea-dresses"
                                            title="Browse High Tea Dresses & Accessories"
                                        >
                                            High Tea
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/maternity-photo-shoot-dresses"
                                            title="Browse Maternity Shoot Dresses & Accessories"
                                        >
                                            Maternity Shoot
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/new-years-eve-dresses"
                                            title="Browse New Year's Eve Dresses & Accessories"
                                        >
                                            New Year's Eve
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/night-out-dresses"
                                            title="Browse Night Out Dresses & Accessories"
                                        >
                                            Night Out
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/party-dresses"
                                            title="Browse Party Dresses & Accessories"
                                        >
                                            Party
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/red-carpet-gala-dresses"
                                            title="Browse Red Carpet/Gala Dresses & Accessories"
                                        >
                                            Red Carpet/Gala
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/school-formal-dresses"
                                            title="Browse School Formal Dresses & Accessories"
                                        >
                                            School Formal
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/spring-racing-dresses"
                                            title="Browse Spring Racing Dresses & Accessories"
                                        >
                                            Spring Racing
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/wedding-dress-hire"
                                            title="Browse Wedding (Bride) Dresses & Accessories"
                                        >
                                            Wedding (Bride)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/summer-wedding-dresses"
                                            title="Browse Wedding (Spring/Summer) Dresses & Accessories"
                                        >
                                            Wedding (Spring/Summer)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/winter-wedding-dresses"
                                            title="Browse Wedding (Winter) Dresses & Accessories"
                                        >
                                            Wedding (Winter)
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/occasion/work-function-dresses"
                                            title="Browse Work Function Dresses & Accessories"
                                        >
                                            Work Function
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-map__separator" />
                            <div className="site-map__list site-map__list--triple">
                                <h2 className="h3-title">Browse By Dress Feature</h2>
                                <ul>
                                    <li>
                                        <a
                                            href="/feature/backless-dresses"
                                            title="Browse Backless Dresses"
                                        >
                                            Backless
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/bump-friendly-maternity-dresses"
                                            title="Browse Bump-Friendly Dresses"
                                        >
                                            Bump-Friendly
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/cut-out-dresses"
                                            title="Browse Cut-Outs Dresses"
                                        >
                                            Cut-Outs
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/feature-split-dresses"
                                            title="Browse Feature Split Dresses"
                                        >
                                            Feature Split
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feature/floral-dresses" title="Browse Floral Dresses">
                                            Floral
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feature/fringed-dresses" title="Browse Fringed Dresses">
                                            Fringed
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feature/halter-dresses" title="Browse Halter Dresses">
                                            Halter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/high-neck-dresses"
                                            title="Browse High Neck Dresses"
                                        >
                                            High Neck
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feature/lace-dresses" title="Browse Lace Dresses">
                                            Lace
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/long-sleeve-dresses"
                                            title="Browse Long Sleeve Dresses"
                                        >
                                            Long Sleeve
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/metallic-dresses"
                                            title="Browse Metallic Dresses"
                                        >
                                            Metallic
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/off-the-shoulder-dresses"
                                            title="Browse Off the Shoulder Dresses"
                                        >
                                            Off the Shoulder
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/one-shoulder-dresses"
                                            title="Browse One Shoulder Dresses"
                                        >
                                            One Shoulder
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/one-sleeve-dresses"
                                            title="Browse One Sleeve Dresses"
                                        >
                                            One Sleeve
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/polka-dot-dresses"
                                            title="Browse Polka Dot Dresses"
                                        >
                                            Polka Dot
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feature/print-dresses" title="Browse Print Dresses">
                                            Print
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feature/ruffle-dresses" title="Browse Ruffle Dresses">
                                            Ruffle
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feature/sequin-dresses" title="Browse Sequin Dresses">
                                            Sequin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/feature/silky-dresses" title="Browse Silky Dresses">
                                            Silky
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/feature/strapless-dresses"
                                            title="Browse Strapless Dresses"
                                        >
                                            Strapless
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-map__separator" />
                            <div className="site-map__list">
                                <h2 className="h3-title">Around Australia</h2>
                                <ul>
                                    <li>
                                        <a href="/dress-hire-adelaide" title="Dress Hire Adelaide">
                                            Adelaide
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-brisbane" title="Dress Hire Brisbane">
                                            Brisbane
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-cairns" title="Dress Hire Cairns">
                                            Cairns
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-canberra" title="Dress Hire Canberra">
                                            Canberra
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-darwin" title="Dress Hire Darwin">
                                            Darwin
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-gold-coast" title="Dress Hire Gold Coast">
                                            Gold Coast
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-melbourne" title="Dress Hire Melbourne">
                                            Melbourne
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-mosman" title="Dress Hire Mosman">
                                            Mosman
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-newcastle" title="Dress Hire Newcastle">
                                            Newcastle
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/dress-hire-north-sydney"
                                            title="Dress Hire North Sydney"
                                        >
                                            North Sydney
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-perth" title="Dress Hire Perth">
                                            Perth
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dress-hire-sydney" title="Dress Hire Sydney">
                                            Sydney
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-map__separator" />
                            <div className="site-map__list site-map__list--single">
                                <h2 className="h3-title">Other</h2>
                                <ul>
                                    <li>
                                        <a href="/blog">The ATD Blog</a>
                                    </li>
                                    <li>
                                        <a href="/gift-voucher">Gift Vouchers</a>
                                    </li>
                                    <li>
                                        <a href="/insta-shop">Shop our Instagram</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-map__separator" />
                            <div className="site-map__list">
                                <h2 className="h3-title">Help &amp; Information</h2>
                                <ul>
                                    <li>
                                        <a href="/About">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/Privacy-Policy">ATD Rewards</a>
                                    </li>
                                    <li>
                                        <a href="/Contact">Contact</a>
                                    </li>
                                    <li>
                                        <a href="/FAQ">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="/HowToLend">How It Works</a>
                                    </li>
                                    <li>
                                        <a href="/Privacy-Policy">Privacy Policy</a>
                                    </li>
                                    
                                    <li>
                                        <a href="/Return">Returns &amp; Refunds</a>
                                    </li>
                                    <li>
                                        <a href="/RentalArguments">Rental Agreement</a>
                                    </li>
                                    <li>
                                        <a href="/Sustainability">Sustainability</a>
                                    </li>
                                    <li>
                                        <a href="/TermsOfService">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-map__separator" />
                            <div className="site-map__list site-map__list--single">
                                <h2 className="h3-title">Your ATD</h2>
                                <ul>
                                    <li>
                                        <a href="/Signin">Login</a>
                                    </li>
                                    <li>
                                        <a href="#">Your Shopping Bag</a>
                                    </li>
                                    <li>
                                        <a href="/Panel/Account">Your Account (must be logged in)</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-3eb17432="" className="exposed-methods-container" />
            </div>
        <Footer/>
        </>
    );
}
export default SiteMap;