import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const ListingNew = () =>{
    return (
        <>
        <TopHeader/>
        <div className="rental-process-section-wrapper -listing-process">
  <div className="first-section">
    <div className="rental-steps mobile-pt-10px mobile-pb-13px w-100">
      <h3 className="mobile-only text-circular-couture-black mb-3 h5">
        LIST AN ITEM
      </h3>
      <ul className="list-inline text-uppercase mobile-mb-0px">
        <li className="list-inline-item active">
          1. Item
        </li>
        <li className="list-inline-item">
          2. Price
        </li>
        <li className="list-inline-item">
          3. Complete
        </li>
      </ul>
    </div>
    <div className="mobile-x-margin form-container">
      <h3 className="header -sub -with-broder-bottom">
        PRODUCT INFORMATION
      </h3>
      <div className="row">
        <div className="col-12">
          <form
            acceptCharset="UTF-8"
            action="/listings/new/listing_creation/details"
            className="listing-details-form default-form mobile-px-0 mobile-pb-5"
            data-action="ajax:success->listing-creation-details#processFormSuccess"
            data-controller="listing-creation-details unit-with-offer-single-size-selector units-with-offer-removal units-with-rental-removal listing-units-with-offer-and-rental"
            data-listing-creation-details-action="new"
            data-listing-creation-details-collected-size-with-pending-or-active-offer=""
            data-listing-creation-details-collected-size-with-pending-or-active-rental=""
            data-listing-creation-details-collected-sizes=""
            data-listing-units-with-offer-and-rental-collected-size-with-pending-or-active-offer=""
            data-listing-units-with-offer-and-rental-collected-size-with-pending-or-active-rental=""
            data-listing-units-with-offer-and-rental-collected-sizes=""
            data-remote="true"
            data-target="listing-creation-details.form unit-with-offer-single-size-selector.form units-with-offer-removal.form units-with-rental-removal.form listing-units-with-offer-and-rental.form"
            data-unit-with-offer-single-size-selector-collected-size-with-pending-or-active-offer=""
            data-unit-with-offer-single-size-selector-collected-size-with-pending-or-active-rental=""
            data-unit-with-offer-single-size-selector-collected-sizes=""
            data-units-with-offer-removal-collected-size-with-pending-or-active-offer=""
            data-units-with-offer-removal-collected-sizes=""
            data-units-with-rental-removal-collected-size-with-pending-or-active-rental=""
            data-units-with-rental-removal-collected-sizes=""
            local="false"
            method="post"
          >
            <input
              autoComplete="off"
              defaultValue="tvLidtYZmzBDSYWMRNVt2k5WQIRbK9PO1WOvYsrfuViJrOOld4P4JmMIMhFUkNsE08VaynJ7BQPr98sOFz+hig=="
              name="authenticity_token"
              type="hidden"
            />
            <div data-target="listing-creation-details.productInfoWrapper">
              <div className="form-row">
                <div
                  className="form-group short-field col-md-6 col-lg-5 mb-3"
                  data-controller="form-dropdown"
                >
                  <label>
                    Category*
                  </label>
                  <div className="dropdown form-dropdown desktop-only">
                    <button
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="form-control dropdown-toggle"
                      data-target="form-dropdown.dropdownBtn"
                      data-toggle="dropdown"
                      type="button"
                    >
                      SELECT CATEGORY
                    </button>
                    <div
                      className="dropdown-menu"
                      style={{}}
                    >
                      <a
                        className="dropdown-item"
                        data-action="form-dropdown#selectChanges listing-creation-details#updateSelectedCategory"
                        data-value="1"
                        href="#"
                      >
                        DRESSES
                      </a>
                      <a
                        className="dropdown-item"
                        data-action="form-dropdown#selectChanges listing-creation-details#updateSelectedCategory"
                        data-value="2"
                        href="#"
                      >
                        TOPS
                      </a>
                      <a
                        className="dropdown-item"
                        data-action="form-dropdown#selectChanges listing-creation-details#updateSelectedCategory"
                        data-value="3"
                        href="#"
                      >
                        BOTTOMS
                      </a>
                      <a
                        className="dropdown-item"
                        data-action="form-dropdown#selectChanges listing-creation-details#updateSelectedCategory"
                        data-value="5"
                        href="#"
                      >
                        ACCESSORIES
                      </a>
                      <a
                        className="dropdown-item"
                        data-action="form-dropdown#selectChanges listing-creation-details#updateSelectedCategory"
                        data-value="6"
                        href="#"
                      >
                        BAGS
                      </a>
                      <a
                        className="dropdown-item"
                        data-action="form-dropdown#selectChanges listing-creation-details#updateSelectedCategory"
                        data-value="7"
                        href="#"
                      >
                        SHOES
                      </a>
                      <a
                        className="dropdown-item"
                        data-action="form-dropdown#selectChanges listing-creation-details#updateSelectedCategory"
                        data-value="8"
                        href="#"
                      >
                        JUMPSUITS
                      </a>
                      <a
                        className="dropdown-item"
                        data-action="form-dropdown#selectChanges listing-creation-details#updateSelectedCategory"
                        data-value="4"
                        href="#"
                      >
                        OUTERWEAR
                      </a>
                    </div>
                  </div>
                  <div className="mobile-native-dropdown-container mobile-only">
                    <select
                      className="form-control mobile-native-dropdown text-uppercase mb-0"
                      data-action="listing-creation-details#updateSelectedCategory"
                      data-target="form-dropdown.selectTag listing-creation-details.listingCategorySelect"
                      id="listing_category_id"
                      name="listing[category_id]"
                    >
                      <option value="">
                        SELECT CATEGORY
                      </option>
                      <option value="1">
                        DRESSES
                      </option>
                      <option value="2">
                        TOPS
                      </option>
                      <option value="3">
                        BOTTOMS
                      </option>
                      <option value="5">
                        ACCESSORIES
                      </option>
                      <option value="6">
                        BAGS
                      </option>
                      <option value="7">
                        SHOES
                      </option>
                      <option value="8">
                        JUMPSUITS
                      </option>
                      <option value="4">
                        OUTERWEAR
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row -disabled">
                <div className="form-group short-field short-field col-md-10 col-lg-6 col-xl-5 mb-3 awesomeplete-form-group">
                  <label>
                    Brand*
                  </label>
                  <div className="awesomplete">
                    <input
                      aria-expanded="false"
                      aria-owns="awesomplete_list_1"
                      autoComplete="off"
                      className="form-control mb-0"
                      data-action="keyup->listing-creation-details#showRequestDesignerDiv"
                      data-list=".designer-brand-list"
                      data-target="listing-creation-details.brandInput"
                      id="listing_designer_brand"
                      name="listing[designer_brand]"
                      placeholder="Type to search..."
                      role="combobox"
                      type="text"
                    />
                    <ul
                      hidden
                      id="awesomplete_list_1"
                      role="listbox"
                    />
                    <span
                      aria-atomic="true"
                      aria-live="assertive"
                      className="visually-hidden"
                      role="status"
                    >
                      Type 2 or more characters for results.
                    </span>
                  </div>
                  <ul className="designer-brand-list d-none">
                    <li>
                      Cat Turner
                    </li>
                    <li>
                      Cinta the label
                    </li>
                    <li>
                      Radley
                    </li>
                    <li>
                      Strena
                    </li>
                    <li>
                      Bodgar
                    </li>
                    <li>
                      Bogdar
                    </li>
                    <li>
                      Radish
                    </li>
                    <li>
                      Romance Was Born
                    </li>
                    <li>
                      SORU
                    </li>
                    <li>
                      Giuseppe di Morabito
                    </li>
                    <li>
                      Deborah Lyons
                    </li>
                    <li>
                      & Other Stories
                    </li>
                    <li>
                      Haider Ackermann
                    </li>
                    <li>
                      Kate Ford
                    </li>
                    <li>
                      Mira Mikati
                    </li>
                    <li>
                      Daniel Pollitt
                    </li>
                    <li>
                      YS
                    </li>
                    <li>
                      Collina Strada
                    </li>
                    <li>
                      Maygel Coronel
                    </li>
                    <li>
                      Rhié
                    </li>
                    <li>
                      Coco Fennell
                    </li>
                    <li>
                      alexandre vauthier
                    </li>
                    <li>
                      Fal-ash
                    </li>
                    <li>
                      Ellme
                    </li>
                    <li>
                      Area
                    </li>
                    <li>
                      Strathberry
                    </li>
                    <li>
                      Ridley London
                    </li>
                    <li>
                      L'Academie
                    </li>
                    <li>
                      Ilmio
                    </li>
                    <li>
                      Notes Du Nord
                    </li>
                    <li>
                      Maticevski
                    </li>
                    <li>
                      TFP by Tamara Falco
                    </li>
                    <li>
                      MRUNALINI RAO
                    </li>
                    <li>
                      Evi Grintela
                    </li>
                    <li>
                      Tara Jarmon
                    </li>
                    <li>
                      Pedro Garcia
                    </li>
                    <li>
                      Masscob
                    </li>
                    <li>
                      BOYY
                    </li>
                    <li>
                      MULMUL
                    </li>
                    <li>
                      Dress the Population
                    </li>
                    <li>
                      L'Agence
                    </li>
                    <li>
                      Arcina Ori
                    </li>
                    <li>
                      Deeba London{' '}
                    </li>
                    <li>
                      Isabel Marant Étoile{' '}
                    </li>
                    <li>
                      Marella
                    </li>
                    <li>
                      Pitusa
                    </li>
                    <li>
                      Song of Style
                    </li>
                    <li>
                      Jennifer Behr
                    </li>
                    <li>
                      Cooper & Ella
                    </li>
                    <li>
                      Cloe Cassandro
                    </li>
                    <li>
                      Ivy & Oak
                    </li>
                    <li>
                      Panache
                    </li>
                    <li>
                      Filly Boo
                    </li>
                    <li>
                      Justin Alexander
                    </li>
                    <li>
                      Brøgger{' '}
                    </li>
                    <li>
                      Lili Radu
                    </li>
                    <li>
                      Maryam Nassir Zadeh
                    </li>
                    <li>
                      Petites Beechers Brook
                    </li>
                    <li>
                      Pushbutton
                    </li>
                    <li>
                      Eywasouls Malibu
                    </li>
                    <li>
                      Carrie Jenkinson
                    </li>
                    <li>
                      MONSE
                    </li>
                    <li>
                      Farm Rio
                    </li>
                    <li>
                      Zhivago
                    </li>
                    <li>
                      Intropia
                    </li>
                    <li>
                      Maison Boinet
                    </li>
                    <li>
                      Yuzefi
                    </li>
                    <li>
                      Raey
                    </li>
                    <li>
                      Ports 1961
                    </li>
                    <li>
                      Paris Texas
                    </li>
                    <li>
                      Made With Love
                    </li>
                    <li>
                      EGLE
                    </li>
                    <li>
                      Jane & Tash Bespoke
                    </li>
                    <li>
                      EPHEMERA
                    </li>
                    <li>
                      Alexander White
                    </li>
                    <li>
                      Mes Desmoiselles
                    </li>
                    <li>
                      Tabitha Simmons
                    </li>
                    <li>
                      B Fleurs
                    </li>
                    <li>
                      Nicholas Kirkwood X Erdem
                    </li>
                    <li>
                      Angel Jackson
                    </li>
                    <li>
                      Repossi{' '}
                    </li>
                    <li>
                      Forever Unique
                    </li>
                    <li>
                      KALITA{' '}
                    </li>
                    <li>
                      LUISA BECCARIA{' '}
                    </li>
                    <li>
                      Dagny
                    </li>
                    <li>
                      Collado Garcia{' '}
                    </li>
                    <li>
                      Piazza Sempione
                    </li>
                    <li>
                      Gerard Deral
                    </li>
                    <li>
                      Vanina
                    </li>
                    <li>
                      The Fold
                    </li>
                    <li>
                      Butler & Wilson
                    </li>
                    <li>
                      Aubin & Wills
                    </li>
                    <li>
                      Protest Ski
                    </li>
                    <li>
                      Emma Cook
                    </li>
                    <li>
                      Ainea
                    </li>
                    <li>
                      Caravana
                    </li>
                    <li>
                      Derek Lam
                    </li>
                    <li>
                      Zizanie
                    </li>
                    <li>
                      ANISSA KERMICHE
                    </li>
                    <li>
                      Akris Punto
                    </li>
                    <li>
                      Hellessy
                    </li>
                    <li>
                      RAVN
                    </li>
                    <li>
                      Dsquared2{' '}
                    </li>
                    <li>
                      Maria Grazia Severi
                    </li>
                    <li>
                      Pangaia
                    </li>
                    <li>
                      Maia Bergman
                    </li>
                    <li>
                      L'ALINGI
                    </li>
                    <li>
                      Aya
                    </li>
                    <li>
                      Three Graces
                    </li>
                    <li>
                      Manuri
                    </li>
                    <li>
                      Bernadette
                    </li>
                    <li>
                      Art Dealer
                    </li>
                    <li>
                      Phaedo
                    </li>
                    <li>
                      Paris Georgia
                    </li>
                    <li>
                      In The Mood For Love
                    </li>
                    <li>
                      Misa Los Angeles
                    </li>
                    <li>
                      Anita Dongre
                    </li>
                    <li>
                      Avavav
                    </li>
                    <li>
                      Tyler Ellis
                    </li>
                    <li>
                      Carolina K
                    </li>
                    <li>
                      Hayley Menzies
                    </li>
                    <li>
                      Batsheva
                    </li>
                    <li>
                      Hill & Friends
                    </li>
                    <li>
                      1017 ALYX 9SM{' '}
                    </li>
                    <li>
                      Liberty In Love
                    </li>
                    <li>
                      ELLERY
                    </li>
                    <li>
                      Stella Jean
                    </li>
                    <li>
                      Rokh
                    </li>
                    <li>
                      Oliva Rubin{' '}
                    </li>
                    <li>
                      NASON
                    </li>
                    <li>
                      Shaun Leane{' '}
                    </li>
                    <li>
                      Rebecca Vallance
                    </li>
                    <li>
                      Bronx and Banco
                    </li>
                    <li>
                      Maison Alma
                    </li>
                    <li>
                      Anthony Vaccarello
                    </li>
                    <li>
                      Preen Line
                    </li>
                    <li>
                      Marco de Vincenzo
                    </li>
                    <li>
                      Forte Couture
                    </li>
                    <li>
                      Barbara Casasola
                    </li>
                    <li>
                      Rachel Gilbert
                    </li>
                    <li>
                      Alameda Turquesa
                    </li>
                    <li>
                      Saylor
                    </li>
                    <li>
                      She Made Me
                    </li>
                    <li>
                      OSMAN
                    </li>
                    <li>
                      IBEN
                    </li>
                    <li>
                      Ashish
                    </li>
                    <li>
                      Nadri
                    </li>
                    <li>
                      Jennifer Hope
                    </li>
                    <li>
                      Résumé
                    </li>
                    <li>
                      Grlfrnd
                    </li>
                    <li>
                      Flynn Skye{' '}
                    </li>
                    <li>
                      JUST
                    </li>
                    <li>
                      Rinascimento
                    </li>
                    <li>
                      Andersson Bell
                    </li>
                    <li>
                      Giesswein
                    </li>
                    <li>
                      Hallhuber
                    </li>
                    <li>
                      Frankie
                    </li>
                    <li>
                      TwentyFall
                    </li>
                    <li>
                      WAYF
                    </li>
                    <li>
                      By the Way
                    </li>
                    <li>
                      Yolke
                    </li>
                    <li>
                      Petar Petrov
                    </li>
                    <li>
                      SKIIM
                    </li>
                    <li>
                      Story mfg.
                    </li>
                    <li>
                      Marina Raphael
                    </li>
                    <li>
                      PHOEBE GRACE
                    </li>
                    <li>
                      Flook The Label
                    </li>
                    <li>
                      SKIIM PARIS
                    </li>
                    <li>
                      Celia B
                    </li>
                    <li>
                      F.ilkk
                    </li>
                    <li>
                      Olivia Annabelle
                    </li>
                    <li>
                      Lora Gene
                    </li>
                    <li>
                      Dima Ayad
                    </li>
                    <li>
                      Retold.
                    </li>
                    <li>
                      The Hour
                    </li>
                    <li>
                      Paloma Wool
                    </li>
                    <li>
                      Dylan Lex
                    </li>
                    <li>
                      Prarie Finnai
                    </li>
                    <li>
                      Maria De La Orden
                    </li>
                    <li>
                      Fresha London
                    </li>
                    <li>
                      Damselfly
                    </li>
                    <li>
                      Meadows
                    </li>
                    <li>
                      Lug Von Siga
                    </li>
                    <li>
                      Hester Bly
                    </li>
                    <li>
                      Àcheval Pampa
                    </li>
                    <li>
                      Horror Vacui
                    </li>
                    <li>
                      Vivetta
                    </li>
                    <li>
                      Fuz Not Fur
                    </li>
                    <li>
                      Lolly’s Laundry
                    </li>
                    <li>
                      Trace Collective
                    </li>
                    <li>
                      Holiday The Label
                    </li>
                    <li>
                      Fanfare Label
                    </li>
                    <li>
                      Lærke Andersen
                    </li>
                    <li>
                      Benjamin Fox
                    </li>
                    <li>
                      Dyspnea
                    </li>
                    <li>
                      Fairy Tong
                    </li>
                    <li>
                      Cro-Che
                    </li>
                    <li>
                      Alex Perry
                    </li>
                    <li>
                      EDIT The Brand
                    </li>
                    <li>
                      CLOTHSURGEON
                    </li>
                    <li>
                      OFF-WHITE C/O VIRGIL ABLOH
                    </li>
                    <li>
                      FOG Essentials
                    </li>
                    <li>
                      AMIRI
                    </li>
                    <li>
                      DAILY PAPER
                    </li>
                    <li>
                      All Things Mochi
                    </li>
                    <li>
                      Megan Crosby
                    </li>
                    <li>
                      Harmur
                    </li>
                    <li>
                      Ami Amalia
                    </li>
                    <li>
                      Evarae
                    </li>
                    <li>
                      Alexandra De Curtis
                    </li>
                    <li>
                      Johanna Sands
                    </li>
                    <li>
                      Camila Coelha
                    </li>
                    <li>
                      Perseverance
                    </li>
                    <li>
                      Sabyasachi
                    </li>
                    <li>
                      Kai Collective
                    </li>
                    <li>
                      La Veste
                    </li>
                    <li>
                      PUNIT BALANA
                    </li>
                    <li>
                      Bukky Baldwin
                    </li>
                    <li>
                      Naya Rea
                    </li>
                    <li>
                      Bacall
                    </li>
                    <li>
                      Trouva
                    </li>
                    <li>
                      Sophia Kah
                    </li>
                    <li>
                      Jane and Marilyn
                    </li>
                    <li>
                      LOUD BODIES
                    </li>
                    <li>
                      We Are KIN
                    </li>
                    <li>
                      Assembly
                    </li>
                    <li>
                      Usisi Sister
                    </li>
                    <li>
                      NEOUS
                    </li>
                    <li>
                      Starlet Bridal
                    </li>
                    <li>
                      Gypsetters
                    </li>
                    <li>
                      Mr Larkin
                    </li>
                    <li>
                      Orseund Iris
                    </li>
                    <li>
                      Erin Snow
                    </li>
                    <li>
                      Warm & Wonderful
                    </li>
                    <li>
                      Studio Amelia
                    </li>
                    <li>
                      Save The Queen
                    </li>
                    <li>
                      House of Harlow
                    </li>
                    <li>
                      Totême
                    </li>
                    <li>
                      Vjera V
                    </li>
                    <li>
                      Verheyen London
                    </li>
                    <li>
                      Plahta
                    </li>
                    <li>
                      Heyami
                    </li>
                    <li>
                      McHugh
                    </li>
                    <li>
                      Daydress
                    </li>
                    <li>
                      Alexandra Miro
                    </li>
                    <li>
                      Le Superbe
                    </li>
                    <li>
                      O Pioneers
                    </li>
                    <li>
                      Sies Marjan
                    </li>
                    <li>
                      Isla Risa
                    </li>
                    <li>
                      Asandra Studios
                    </li>
                    <li>
                      Sigrid Maria
                    </li>
                    <li>
                      Posse
                    </li>
                    <li>
                      Faible and Failure{' '}
                    </li>
                    <li>
                      Rebecca J Mills
                    </li>
                    <li>
                      Justine Tabak
                    </li>
                    <li>
                      Karen Mabon
                    </li>
                    <li>
                      Hunting Season
                    </li>
                    <li>
                      Simone Rocha x H&M
                    </li>
                    <li>
                      Damson Madder
                    </li>
                    <li>
                      Mae Cassidy
                    </li>
                    <li>
                      Charlie Brear
                    </li>
                    <li>
                      I.AM.GIA
                    </li>
                    <li>
                      BILLIONAIRE BOYS CLUB
                    </li>
                    <li>
                      MJB - MARC JACQUES BURTON
                    </li>
                    <li>
                      ESSE Studios
                    </li>
                    <li>
                      Alessandra Giovanna
                    </li>
                    <li>
                      GANT
                    </li>
                    <li>
                      Good Squish
                    </li>
                    <li>
                      Virgos lounge
                    </li>
                    <li>
                      10th Floor
                    </li>
                    <li>
                      By Abisola
                    </li>
                    <li>
                      Vespertine
                    </li>
                    <li>
                      Isa Boulder
                    </li>
                    <li>
                      Significant Other
                    </li>
                    <li>
                      Wales Bonner
                    </li>
                    <li>
                      Studio Saina
                    </li>
                    <li>
                      Bellville Sassoon
                    </li>
                    <li>
                      DAI
                    </li>
                    <li>
                      Carterier
                    </li>
                    <li>
                      Fil De Vie
                    </li>
                    <li>
                      Browns
                    </li>
                    <li>
                      Adam Lippes
                    </li>
                    <li>
                      Ethan Koh
                    </li>
                    <li>
                      Eyevan 7285
                    </li>
                    <li>
                      Marle
                    </li>
                    <li>
                      GIAMBATTISTA VALLI x H&M
                    </li>
                    <li>
                      Grace Loves Lace
                    </li>
                    <li>
                      Bella Freud
                    </li>
                    <li>
                      Alexis
                    </li>
                    <li>
                      Camilla Rose
                    </li>
                    <li>
                      Robert Rodriguez
                    </li>
                    <li>
                      Wicker Wings
                    </li>
                    <li>
                      Olivia Rose The Label
                    </li>
                    <li>
                      Emilio De La Morena
                    </li>
                    <li>
                      Thierry Colson
                    </li>
                    <li>
                      Florence Bridge
                    </li>
                    <li>
                      Kotys
                    </li>
                    <li>
                      Amuse Society{' '}
                    </li>
                    <li>
                      Georgy Collection
                    </li>
                    <li>
                      Frank Lyman
                    </li>
                    <li>
                      Isabelle Fox
                    </li>
                    <li>
                      Biba
                    </li>
                    <li>
                      Gareth Pugh
                    </li>
                    <li>
                      Push Button{' '}
                    </li>
                    <li>
                      The Vampire’s Wife x H&M
                    </li>
                    <li>
                      Tallulah & Hope
                    </li>
                    <li>
                      Payal Singhal
                    </li>
                    <li>
                      CHARKHEE
                    </li>
                    <li>
                      Gisaw
                    </li>
                    <li>
                      Les Petits Joueurs
                    </li>
                    <li>
                      Pepper Row
                    </li>
                    <li>
                      Bauken
                    </li>
                    <li>
                      Sessun
                    </li>
                    <li>
                      SEA
                    </li>
                    <li>
                      Meli Melo{' '}
                    </li>
                    <li>
                      Huishan Zhang
                    </li>
                    <li>
                      Deeba London
                    </li>
                    <li>
                      Coccinelle
                    </li>
                    <li>
                      Carel Paris
                    </li>
                    <li>
                      Wandler
                    </li>
                    <li>
                      Berta
                    </li>
                    <li>
                      Something Borrowed
                    </li>
                    <li>
                      Racil
                    </li>
                    <li>
                      Neve & Noor
                    </li>
                    <li>
                      WE11 DONE
                    </li>
                    <li>
                      Ottolinger
                    </li>
                    <li>
                      Charles Jeffrey Loverboy
                    </li>
                    <li>
                      SIR The Label
                    </li>
                    <li>
                      Kemi Telford
                    </li>
                    <li>
                      Andrea Lyamah
                    </li>
                    <li>
                      We Are Leone
                    </li>
                    <li>
                      Kaneshka
                    </li>
                    <li>
                      Amur
                    </li>
                    <li>
                      Anaak
                    </li>
                    <li>
                      Gucci
                    </li>
                    <li>
                      BAISE GABA
                    </li>
                    <li>
                      Asceno
                    </li>
                    <li>
                      Asilio
                    </li>
                    <li>
                      Rowen Rose
                    </li>
                    <li>
                      Del Duca
                    </li>
                    <li>
                      The Own Studio
                    </li>
                    <li>
                      Shibumi
                    </li>
                    <li>
                      Fumbalinas
                    </li>
                    <li>
                      Borgo De Nor
                    </li>
                    <li>
                      BETHANY WILLIAMS
                    </li>
                    <li>
                      Cafune
                    </li>
                    <li>
                      Tresspass
                    </li>
                    <li>
                      St Agni
                    </li>
                    <li>
                      E.Stott
                    </li>
                    <li>
                      Neil Cunningham
                    </li>
                    <li>
                      House of Foxy
                    </li>
                    <li>
                      NALÈ
                    </li>
                    <li>
                      Charo Ruiz Ibiza
                    </li>
                    <li>
                      Mon Renn
                    </li>
                    <li>
                      CASABLANCA
                    </li>
                    <li>
                      Kivari
                    </li>
                    <li>
                      Cinzie Rocca
                    </li>
                    <li>
                      Complet
                    </li>
                    <li>
                      Esthe
                    </li>
                    <li>
                      Foxiedox
                    </li>
                    <li>
                      Gül Hürgel
                    </li>
                    <li>
                      Hemant & Nandita
                    </li>
                    <li>
                      Herculie
                    </li>
                    <li>
                      Kayu
                    </li>
                    <li>
                      Lautem
                    </li>
                    <li>
                      MÍE
                    </li>
                    <li>
                      LOÉIL
                    </li>
                    <li>
                      Lost Property of London
                    </li>
                    <li>
                      Noel and Jean
                    </li>
                    <li>
                      Majorelle
                    </li>
                    <li>
                      March11
                    </li>
                    <li>
                      Mercedes Salazar
                    </li>
                    <li>
                      Freya Simonne
                    </li>
                    <li>
                      Ming Ray
                    </li>
                    <li>
                      Misha
                    </li>
                    <li>
                      Miss Crab
                    </li>
                    <li>
                      Aeyde
                    </li>
                    <li>
                      Mother Of Pearl
                    </li>
                    <li>
                      Marcia
                    </li>
                    <li>
                      Musier Paris
                    </li>
                    <li>
                      Nynne
                    </li>
                    <li>
                      Nannacay
                    </li>
                    <li>
                      Nanushka
                    </li>
                    <li>
                      Nicholas
                    </li>
                    <li>
                      Nita Suri
                    </li>
                    <li>
                      Dear Curves
                    </li>
                    <li>
                      Paper London
                    </li>
                    <li>
                      Phase Eight
                    </li>
                    <li>
                      Ghospell
                    </li>
                    <li>
                      Philosophy di Lorenzo Serafini
                    </li>
                    <li>
                      Pink City Prints
                    </li>
                    <li>
                      Yasmina Q
                    </li>
                    <li>
                      Privacy Please
                    </li>
                    <li>
                      Lisou
                    </li>
                    <li>
                      RITA ROW
                    </li>
                    <li>
                      Raquel Diniz
                    </li>
                    <li>
                      Rejina Pyo
                    </li>
                    <li>
                      Rhode Resort
                    </li>
                    <li>
                      Roksanda
                    </li>
                    <li>
                      Essentials
                    </li>
                    <li>
                      Rouje
                    </li>
                    <li>
                      Ruby
                    </li>
                    <li>
                      Mestiza
                    </li>
                    <li>
                      Saks Potts
                    </li>
                    <li>
                      Loulou
                    </li>
                    <li>
                      SEREN LONDON
                    </li>
                    <li>
                      Serpui
                    </li>
                    <li>
                      KALISTA
                    </li>
                    <li>
                      KITH
                    </li>
                    <li>
                      Sophia Alexia
                    </li>
                    <li>
                      MCM
                    </li>
                    <li>
                      Spell & The Gypsy
                    </li>
                    <li>
                      Staud
                    </li>
                    <li>
                      Stevie May
                    </li>
                    <li>
                      Stine Goya
                    </li>
                    <li>
                      EKAYA
                    </li>
                    <li>
                      Tamara Mellon
                    </li>
                    <li>
                      Cult Form
                    </li>
                    <li>
                      The Jetset Diaries
                    </li>
                    <li>
                      Chiara Boni
                    </li>
                    <li>
                      John Wind
                    </li>
                    <li>
                      Yoen
                    </li>
                    <li>
                      Yosuzi
                    </li>
                    <li>
                      DÔEN
                    </li>
                    <li>
                      Wynn Hamlyn
                    </li>
                    <li>
                      ATOIR
                    </li>
                    <li>
                      A.W.A.K.E.
                    </li>
                    <li>
                      Bora Aksu
                    </li>
                    <li>
                      Blaze Milano
                    </li>
                    <li>
                      Brock Collection
                    </li>
                    <li>
                      By Far
                    </li>
                    <li>
                      3x1
                    </li>
                    <li>
                      A.L.C
                    </li>
                    <li>
                      Anna October
                    </li>
                    <li>
                      By Malina
                    </li>
                    <li>
                      By JOHNNY.
                    </li>
                    <li>
                      Cami NYC
                    </li>
                    <li>
                      Camilla and Marc
                    </li>
                    <li>
                      Camilla
                    </li>
                    <li>
                      Catherine Deane
                    </li>
                    <li>
                      Cecilie Copenhagen
                    </li>
                    <li>
                      Warehouse
                    </li>
                    <li>
                      Hope Macaulay
                    </li>
                    <li>
                      Cinq à Sept
                    </li>
                    <li>
                      Worme
                    </li>
                    <li>
                      Claudie Pierlot
                    </li>
                    <li>
                      Clover Canyon
                    </li>
                    <li>
                      Cordova
                    </li>
                    <li>
                      Cushnie
                    </li>
                    <li>
                      Damsel in a Dress
                    </li>
                    <li>
                      Danse Lente
                    </li>
                    <li>
                      Delphi Collective
                    </li>
                    <li>
                      Anna Scholz
                    </li>
                    <li>
                      Emilia Wickstead
                    </li>
                    <li>
                      Estelle London
                    </li>
                    <li>
                      Être Cécile
                    </li>
                    <li>
                      Eudon Choi
                    </li>
                    <li>
                      Fausto Puglisi
                    </li>
                    <li>
                      Figue
                    </li>
                    <li>
                      Finery London
                    </li>
                    <li>
                      WRAY
                    </li>
                    <li>
                      F.R.S For Restless Sleepers
                    </li>
                    <li>
                      FRANKS London
                    </li>
                    <li>
                      GEORGIA ALICE
                    </li>
                    <li>
                      Georgia Hardinge
                    </li>
                    <li>
                      Gestuz
                    </li>
                    <li>
                      h:ours
                    </li>
                    <li>
                      Halfpenny London
                    </li>
                    <li>
                      Hansen & Gretel
                    </li>
                    <li>
                      HASAN HEJAZI
                    </li>
                    <li>
                      Henry Holland
                    </li>
                    <li>
                      Volon
                    </li>
                    <li>
                      Honorine
                    </li>
                    <li>
                      HOSBJERG
                    </li>
                    <li>
                      House of Fluff
                    </li>
                    <li>
                      House of Hackney
                    </li>
                    <li>
                      House of Sunny
                    </li>
                    <li>
                      Harley Viera-Newton
                    </li>
                    <li>
                      ISA ARFEN
                    </li>
                    <li>
                      Jakke
                    </li>
                    <li>
                      Johanna Ortiz
                    </li>
                    <li>
                      Jonathan Saunders
                    </li>
                    <li>
                      Khaite
                    </li>
                    <li>
                      Kirsteen Stewart
                    </li>
                    <li>
                      KITX
                    </li>
                    <li>
                      La DoubleJ
                    </li>
                    <li>
                      Lainey Loves
                    </li>
                    <li>
                      Lee Matthews
                    </li>
                    <li>
                      Les Rêveries
                    </li>
                    <li>
                      Lilliput and Felix
                    </li>
                    <li>
                      Lily and Lionel
                    </li>
                    <li>
                      Lisa Marie Fernandez
                    </li>
                    <li>
                      London Velvet
                    </li>
                    <li>
                      LoveSam
                    </li>
                    <li>
                      LoveShackFancy
                    </li>
                    <li>
                      LPA
                    </li>
                    <li>
                      Madderson London
                    </li>
                    <li>
                      Madeleine Thompson
                    </li>
                    <li>
                      Maggie Marilyn
                    </li>
                    <li>
                      MaisonClèo
                    </li>
                    <li>
                      Manning Cartell
                    </li>
                    <li>
                      Manoush
                    </li>
                    <li>
                      La Semaine Paris
                    </li>
                    <li>
                      Marina London
                    </li>
                    <li>
                      Marios Schwab
                    </li>
                    <li>
                      Rotate
                    </li>
                    <li>
                      POMCHA JAIPUR
                    </li>
                    <li>
                      Martin Grant
                    </li>
                    <li>
                      Marysia
                    </li>
                    <li>
                      Matériel
                    </li>
                    <li>
                      Maurie & Eve
                    </li>
                    <li>
                      Mawi
                    </li>
                    <li>
                      Kaleidoscope
                    </li>
                    <li>
                      ME+EM
                    </li>
                    <li>
                      Medea
                    </li>
                    <li>
                      Grainne Morton
                    </li>
                    <li>
                      Miista
                    </li>
                    <li>
                      Mikael Aghal
                    </li>
                    <li>
                      Missoma
                    </li>
                    <li>
                      Molly Goddard
                    </li>
                    <li>
                      Montunas
                    </li>
                    <li>
                      Mossman
                    </li>
                    <li>
                      MOTHER ROSE MATERNITY
                    </li>
                    <li>
                      N / Nicholas
                    </li>
                    <li>
                      Natalia Picariello
                    </li>
                    <li>
                      NBD
                    </li>
                    <li>
                      N E U L
                    </li>
                    <li>
                      Omi Na-Na
                    </li>
                    <li>
                      Oramai
                    </li>
                    <li>
                      Outline
                    </li>
                    <li>
                      Paige
                    </li>
                    <li>
                      Palones
                    </li>
                    <li>
                      PARADISE ROW
                    </li>
                    <li>
                      Paul & Joe
                    </li>
                    <li>
                      Pinko
                    </li>
                    <li>
                      Rachel Zoe
                    </li>
                    <li>
                      Ranjana Khan
                    </li>
                    <li>
                      Repainted
                    </li>
                    <li>
                      Rime Arodaky
                    </li>
                    <li>
                      Hanna Fiedler
                    </li>
                    <li>
                      Finders Keepers
                    </li>
                    <li>
                      Jay Godfrey
                    </li>
                    <li>
                      Rodebjer
                    </li>
                    <li>
                      Ronny Kobo
                    </li>
                    <li>
                      Seraphina
                    </li>
                    <li>
                      SET
                    </li>
                    <li>
                      Sid Neigum
                    </li>
                    <li>
                      Simon Miller
                    </li>
                    <li>
                      Sister Jane
                    </li>
                    <li>
                      Sofia The Label
                    </li>
                    <li>
                      Sportmax
                    </li>
                    <li>
                      Stand Studio
                    </li>
                    <li>
                      Steele
                    </li>
                    <li>
                      Stone Cold Fox
                    </li>
                    <li>
                      Stylestalker
                    </li>
                    <li>
                      Suryo
                    </li>
                    <li>
                      Talitha{' '}
                    </li>
                    <li>
                      Tara Zadeh
                    </li>
                    <li>
                      TEIJA
                    </li>
                    <li>
                      Terry de Havilland
                    </li>
                    <li>
                      TH&TH
                    </li>
                    <li>
                      Three Floor
                    </li>
                    <li>
                      Thurley
                    </li>
                    <li>
                      TOVE
                    </li>
                    <li>
                      Tularosa
                    </li>
                    <li>
                      Veronica Beard
                    </li>
                    <li>
                      Vilshenko
                    </li>
                    <li>
                      We are Kindred
                    </li>
                    <li>
                      Zanellato
                    </li>
                    <li>
                      Zena Presley
                    </li>
                    <li>
                      TWENTY 8 TWELVE
                    </li>
                    <li>
                      Wald Berlin
                    </li>
                    <li>
                      Athena Procopiou
                    </li>
                    <li>
                      BL-NK London
                    </li>
                    <li>
                      Kat Maconie
                    </li>
                    <li>
                      Munthe
                    </li>
                    <li>
                      Intermix
                    </li>
                    <li>
                      Minna Parikka
                    </li>
                    <li>
                      Mark Cross
                    </li>
                    <li>
                      Tete by Odette
                    </li>
                    <li>
                      Parker NY
                    </li>
                    <li>
                      byTiMo
                    </li>
                    <li>
                      Perseverance{' '}
                    </li>
                    <li>
                      Jonathan Simkhai
                    </li>
                    <li>
                      David Koma
                    </li>
                    <li>
                      Marge Sherwood
                    </li>
                    <li>
                      Anna Mason{' '}
                    </li>
                    <li>
                      Forte forte{' '}
                    </li>
                    <li>
                      Sheri Bodell
                    </li>
                    <li>
                      Sara Battaglia
                    </li>
                    <li>
                      The Attico
                    </li>
                    <li>
                      CatBird
                    </li>
                    <li>
                      Véstire
                    </li>
                    <li>
                      Gussy and Lou
                    </li>
                    <li>
                      Ksubi
                    </li>
                    <li>
                      Serena Bute
                    </li>
                    <li>
                      Palmer Harding{' '}
                    </li>
                    <li>
                      Chylak
                    </li>
                    <li>
                      Frankie Shop
                    </li>
                    <li>
                      Alba Conde{' '}
                    </li>
                    <li>
                      JAYANTI REDDY
                    </li>
                    <li>
                      Amanda Wakeley
                    </li>
                    <li>
                      Pole exclusive{' '}
                    </li>
                    <li>
                      Cecilia Prado
                    </li>
                    <li>
                      Joie
                    </li>
                    <li>
                      Tallulah & Hope{' '}
                    </li>
                    <li>
                      VACLAV
                    </li>
                    <li>
                      Unreal Fur
                    </li>
                    <li>
                      Crās
                    </li>
                    <li>
                      Rhode
                    </li>
                    <li>
                      Stella Nova
                    </li>
                    <li>
                      Pura Utz
                    </li>
                    <li>
                      No21
                    </li>
                    <li>
                      Clare V.
                    </li>
                    <li>
                      Ulyana Sergeenko{' '}
                    </li>
                    <li>
                      Piers Atkinson
                    </li>
                    <li>
                      Band of Outsiders
                    </li>
                    <li>
                      Alex Monroe
                    </li>
                    <li>
                      Brics
                    </li>
                    <li>
                      aggi
                    </li>
                    <li>
                      American Vintage
                    </li>
                    <li>
                      Ader Error
                    </li>
                    <li>
                      SANYUKTA SHRESTHA
                    </li>
                    <li>
                      N-DUO
                    </li>
                    <li>
                      OOAK
                    </li>
                    <li>
                      Kloto
                    </li>
                    <li>
                      Traffic People
                    </li>
                    <li>
                      Holland Cooper
                    </li>
                    <li>
                      Isolda
                    </li>
                    <li>
                      Shaina Mote
                    </li>
                    <li>
                      Richard Quinn
                    </li>
                    <li>
                      Dhela
                    </li>
                    <li>
                      Libélula Studio
                    </li>
                    <li>
                      S/W/F
                    </li>
                    <li>
                      Aspiga
                    </li>
                    <li>
                      ROOP
                    </li>
                    <li>
                      FOR THE AGES
                    </li>
                    <li>
                      STAND
                    </li>
                    <li>
                      Acler
                    </li>
                    <li>
                      Natalie & Alanna
                    </li>
                    <li>
                      Jess Collett Milliner
                    </li>
                    <li>
                      JOSE BARRERA
                    </li>
                    <li>
                      D'ORLAN
                    </li>
                    <li>
                      NAPIER
                    </li>
                    <li>
                      LES BERNARD
                    </li>
                    <li>
                      ALEXIS KIRK
                    </li>
                    <li>
                      Fenn Wright Manson
                    </li>
                    <li>
                      GUARDI
                    </li>
                    <li>
                      made by SJP
                    </li>
                    <li>
                      Ministry of Style
                    </li>
                    <li>
                      Matteau
                    </li>
                    <li>
                      Kaminee
                    </li>
                    <li>
                      Dolls House Fashion
                    </li>
                    <li>
                      Susan Caplan x CIRCULAR COUTURE
                    </li>
                    <li>
                      Seven Wonders
                    </li>
                    <li>
                      Clover London
                    </li>
                    <li>
                      Magpie Vintage
                    </li>
                    <li>
                      Vivien Sheriff
                    </li>
                    <li>
                      MIRAE
                    </li>
                    <li>
                      Jane Taylor
                    </li>
                    <li>
                      Lazy Oaf
                    </li>
                    <li>
                      Clio Peppiatt
                    </li>
                    <li>
                      Cleobella
                    </li>
                    <li>
                      Safiyaa
                    </li>
                    <li>
                      Revive
                    </li>
                    <li>
                      Saluto London
                    </li>
                    <li>
                      Aligne
                    </li>
                    <li>
                      Narrations Ldn Vintage
                    </li>
                    <li>
                      Stefania Vaidani
                    </li>
                    <li>
                      YAS
                    </li>
                    <li>
                      Olivia Wilde x H&M
                    </li>
                    <li>
                      Natalie Rolt
                    </li>
                    <li>
                      DeMellier
                    </li>
                    <li>
                      Stolen Stores
                    </li>
                    <li>
                      Becca London
                    </li>
                    <li>
                      Lack of Color
                    </li>
                    <li>
                      Day6
                    </li>
                    <li>
                      Popski
                    </li>
                    <li>
                      Camilla Elphick
                    </li>
                    <li>
                      Found & Curated Vintage
                    </li>
                    <li>
                      IORANE
                    </li>
                    <li>
                      Freda
                    </li>
                    <li>
                      M2MALLETIER
                    </li>
                    <li>
                      Brian Atwood
                    </li>
                    <li>
                      Alice Early
                    </li>
                    <li>
                      Charlotte Knowles
                    </li>
                    <li>
                      Miaou
                    </li>
                    <li>
                      King & Tuckfield
                    </li>
                    <li>
                      The East Order
                    </li>
                    <li>
                      Endless Summer
                    </li>
                    <li>
                      Shotof
                    </li>
                    <li>
                      Caroline Castigliano
                    </li>
                    <li>
                      Golden Goose
                    </li>
                    <li>
                      Loretta Caponi
                    </li>
                    <li>
                      Vanessa Cocchiaro
                    </li>
                    <li>
                      Alexander Vauthier
                    </li>
                    <li>
                      Peachy Den
                    </li>
                    <li>
                      Wolf and Badger
                    </li>
                    <li>
                      Oh Polly
                    </li>
                    <li>
                      Alice Temperley
                    </li>
                    <li>
                      HOFMANN COPENHAGEN
                    </li>
                    <li>
                      Doone
                    </li>
                    <li>
                      Blake Ida Bridal
                    </li>
                    <li>
                      CompletedWorks
                    </li>
                    <li>
                      Auguste
                    </li>
                    <li>
                      Zeus + Dione
                    </li>
                    <li>
                      Vita Grace
                    </li>
                    <li>
                      Christine Lingerie
                    </li>
                    <li>
                      Isabelle Quinn
                    </li>
                    <li>
                      D'ASCOLI
                    </li>
                    <li>
                      Gaâla
                    </li>
                    <li>
                      Christie Nicole
                    </li>
                    <li>
                      SABBYLOU KNIT
                    </li>
                    <li>
                      Teuta Matoshi
                    </li>
                    <li>
                      Bardot
                    </li>
                    <li>
                      Henne
                    </li>
                    <li>
                      Gauge81
                    </li>
                    <li>
                      Hanne Bloch
                    </li>
                    <li>
                      Roxanne Assoulin
                    </li>
                    <li>
                      Ashley Williams
                    </li>
                    <li>
                      Gioia
                    </li>
                    <li>
                      Dissh
                    </li>
                    <li>
                      Turquoise Lane
                    </li>
                    <li>
                      valle & vik
                    </li>
                    <li>
                      Agua by agua bendita
                    </li>
                    <li>
                      Kaspar Studio
                    </li>
                    <li>
                      Resa
                    </li>
                    <li>
                      Cosel
                    </li>
                    <li>
                      Joslin
                    </li>
                    <li>
                      Alexandra Grecco
                    </li>
                    <li>
                      Kilentar
                    </li>
                    <li>
                      Voyager London
                    </li>
                    <li>
                      Capulet
                    </li>
                    <li>
                      Over The Sea
                    </li>
                    <li>
                      Gimaguas
                    </li>
                    <li>
                      Wolinska London
                    </li>
                    <li>
                      Annie’s Ibiza
                    </li>
                    <li>
                      Kristen Mallison
                    </li>
                    <li>
                      Yevu
                    </li>
                    <li>
                      Kika Vargas
                    </li>
                    <li>
                      Farai London
                    </li>
                    <li>
                      Tanya Taylor
                    </li>
                    <li>
                      Pelago
                    </li>
                    <li>
                      REMAIN Birger Christensen
                    </li>
                    <li>
                      Costarellos
                    </li>
                    <li>
                      NENSI DOJAKA
                    </li>
                    <li>
                      GCDS
                    </li>
                    <li>
                      MARICI
                    </li>
                    <li>
                      3AM ETERNAL
                    </li>
                    <li>
                      SAN SLOANE
                    </li>
                    <li>
                      L'ALINGLI
                    </li>
                    <li>
                      KARA
                    </li>
                    <li>
                      UNCOMMON MATTERS
                    </li>
                    <li>
                      COMPLETED WORKS
                    </li>
                    <li>
                      BENEDETTA
                    </li>
                    <li>
                      Amy Jane London
                    </li>
                    <li>
                      Disaya
                    </li>
                    <li>
                      KALMANOVICH
                    </li>
                    <li>
                      MOTHER OF ALL
                    </li>
                    <li>
                      AUNE COLLECTIONS
                    </li>
                    <li>
                      Susamusa
                    </li>
                    <li>
                      Sika
                    </li>
                    <li>
                      VICTORIA VICTORIA BECKHAM
                    </li>
                    <li>
                      GEDEBE
                    </li>
                    <li>
                      CHLOE
                    </li>
                    <li>
                      Lace & Beads
                    </li>
                    <li>
                      Lace&Beads
                    </li>
                    <li>
                      Syndical Chamber
                    </li>
                    <li>
                      THEVCLOUNGE{' '}
                    </li>
                    <li>
                      Sovere
                    </li>
                    <li>
                      Silkfred{' '}
                    </li>
                    <li>
                      Dune
                    </li>
                    <li>
                      Sussanah london
                    </li>
                    <li>
                      Comptoir de cotonniers
                    </li>
                    <li>
                      Inuikii
                    </li>
                    <li>
                      66 North
                    </li>
                    <li>
                      And
                    </li>
                    <li>
                      ERL
                    </li>
                    <li>
                      Aspinal of London
                    </li>
                    <li>
                      Givenchy
                    </li>
                    <li>
                      Isabel Marant
                    </li>
                    <li>
                      Balmain
                    </li>
                    <li>
                      Beulah London
                    </li>
                    <li>
                      BIMBA Y Lola
                    </li>
                    <li>
                      Bottega Veneta
                    </li>
                    <li>
                      Burberry
                    </li>
                    <li>
                      C/MEO Collective
                    </li>
                    <li>
                      Dolce & Gabbana
                    </li>
                    <li>
                      Fendi
                    </li>
                    <li>
                      Mulberry
                    </li>
                    <li>
                      Cefinn
                    </li>
                    <li>
                      Chanel
                    </li>
                    <li>
                      Charlotte Simone
                    </li>
                    <li>
                      Diane Von Furstenberg
                    </li>
                    <li>
                      Hope and Ivy
                    </li>
                    <li>
                      Kate Spade
                    </li>
                    <li>
                      Keepsake The Label
                    </li>
                    <li>
                      Louis Vuitton
                    </li>
                    <li>
                      Massimo Dutti
                    </li>
                    <li>
                      Moschino
                    </li>
                    <li>
                      Ray Ban
                    </li>
                    <li>
                      Christian Louboutin
                    </li>
                    <li>
                      Coach
                    </li>
                    <li>
                      Coast
                    </li>
                    <li>
                      Dodo Bar Or
                    </li>
                    <li>
                      Equipment
                    </li>
                    <li>
                      Essential Antwerp
                    </li>
                    <li>
                      For Love and Lemons
                    </li>
                    <li>
                      Iro
                    </li>
                    <li>
                      Preen by Thornton Bregazzi
                    </li>
                    <li>
                      Elisabetta Franchi
                    </li>
                    <li>
                      Escada
                    </li>
                    <li>
                      FRAME
                    </li>
                    <li>
                      Matthew Williamson
                    </li>
                    <li>
                      Giuseppe Zanotti
                    </li>
                    <li>
                      J.Crew
                    </li>
                    <li>
                      Lover The Label
                    </li>
                    <li>
                      Halpern
                    </li>
                    <li>
                      Michael Lo Sordo
                    </li>
                    <li>
                      Halston Heritage
                    </li>
                    <li>
                      Innika Choo
                    </li>
                    <li>
                      Iris & Ink
                    </li>
                    <li>
                      Jenny Packham
                    </li>
                    <li>
                      Joseph
                    </li>
                    <li>
                      Lovers + Friends
                    </li>
                    <li>
                      Malone Souliers
                    </li>
                    <li>
                      Mara Hoffman
                    </li>
                    <li>
                      Millie Mackintosh
                    </li>
                    <li>
                      Marchesa Notte
                    </li>
                    <li>
                      Maria Lucia Hohan
                    </li>
                    <li>
                      Frances O
                    </li>
                    <li>
                      B.Fleurs
                    </li>
                    <li>
                      Virago Barcelona
                    </li>
                    <li>
                      Spirit & Grace
                    </li>
                    <li>
                      Eliza the label
                    </li>
                    <li>
                      Zhivago{' '}
                    </li>
                    <li>
                      V Chapman
                    </li>
                    <li>
                      Dandelie
                    </li>
                    <li>
                      Mimi Wade
                    </li>
                    <li>
                      Waimari
                    </li>
                    <li>
                      {' '}Aroop Shop
                    </li>
                    <li>
                      Fillipa K
                    </li>
                    <li>
                      Yumi Kim{' '}
                    </li>
                    <li>
                      Masha Popova
                    </li>
                    <li>
                      Sinéad O'Dwyer
                    </li>
                    <li>
                      Alfred Sung{' '}
                    </li>
                    <li>
                      {' '}Loeil{' '}
                    </li>
                    <li>
                      Envelope 1976{' '}
                    </li>
                    <li>
                      BBXBRAND
                    </li>
                    <li>
                      Abyss by Abby{' '}
                    </li>
                    <li>
                      The Great{' '}
                    </li>
                    <li>
                      Moncrief{' '}
                    </li>
                    <li>
                      Yulia Prokhorova{' '}
                    </li>
                    <li>
                      A&N LUXE LABEL{' '}
                    </li>
                    <li>
                      {' '}Sundress{' '}
                    </li>
                    <li>
                      Andres Otalora{' '}
                    </li>
                    <li>
                      Realisation Par
                    </li>
                    <li>
                      Ruben singer{' '}
                    </li>
                    <li>
                      {' '}SLA the label{' '}
                    </li>
                    <li>
                      Russell & Bromley{' '}
                    </li>
                    <li>
                      Selkie
                    </li>
                    <li>
                      Sau Lee
                    </li>
                    <li>
                      Aje
                    </li>
                    <li>
                      Bec & Bridge
                    </li>
                    <li>
                      Lirika Matoshi
                    </li>
                    <li>
                      BA&SH
                    </li>
                    <li>
                      Alaïa
                    </li>
                    <li>
                      Alice + Olivia
                    </li>
                    <li>
                      Altuzarra
                    </li>
                    <li>
                      Balenciaga
                    </li>
                    <li>
                      Hobbs
                    </li>
                    <li>
                      Revolve
                    </li>
                    <li>
                      Jimmy Choo
                    </li>
                    <li>
                      Prada
                    </li>
                    <li>
                      Bvlgari
                    </li>
                    <li>
                      Calvin Klein
                    </li>
                    <li>
                      Chloé
                    </li>
                    <li>
                      Dior
                    </li>
                    <li>
                      Emilio Pucci
                    </li>
                    <li>
                      Faithfull The Brand
                    </li>
                    <li>
                      Frock and Frill
                    </li>
                    <li>
                      Helmut Lang
                    </li>
                    <li>
                      Lanvin
                    </li>
                    <li>
                      Marc Jacobs
                    </li>
                    <li>
                      Melissa Odabash
                    </li>
                    <li>
                      Moncler
                    </li>
                    <li>
                      Ralph Lauren
                    </li>
                    <li>
                      Roberto Cavalli
                    </li>
                    <li>
                      Temperley London
                    </li>
                    <li>
                      Tibi
                    </li>
                    <li>
                      Ulla Johnson
                    </li>
                    <li>
                      Victoria Beckham
                    </li>
                    <li>
                      Alberta Ferretti
                    </li>
                    <li>
                      The Arrivals
                    </li>
                    <li>
                      héxié
                    </li>
                    <li>
                      Monika The Label
                    </li>
                    <li>
                      Anya Hindmarch
                    </li>
                    <li>
                      Carven
                    </li>
                    <li>
                      Loewe
                    </li>
                    <li>
                      Needle & Thread
                    </li>
                    <li>
                      RIXO
                    </li>
                    <li>
                      Christian Dior
                    </li>
                    <li>
                      Dion Lee
                    </li>
                    <li>
                      Erdem
                    </li>
                    <li>
                      Goat
                    </li>
                    <li>
                      Issa
                    </li>
                    <li>
                      Loeffler Randall
                    </li>
                    <li>
                      Maison Margiela
                    </li>
                    <li>
                      Markus Lupfer
                    </li>
                    <li>
                      Michelle Mason
                    </li>
                    <li>
                      Shrimps
                    </li>
                    <li>
                      House of CB
                    </li>
                    <li>
                      With Jéan
                    </li>
                    <li>
                      Nadine Merabi
                    </li>
                    <li>
                      Nookie
                    </li>
                    <li>
                      ROTATE BIRGER CHRISTENSEN
                    </li>
                    <li>
                      Sabina Musayev
                    </li>
                    <li>
                      Molby the Label
                    </li>
                    <li>
                      Host and Var
                    </li>
                    <li>
                      Leilayca
                    </li>
                    <li>
                      Susan Carys
                    </li>
                    <li>
                      Birdsong
                    </li>
                    <li>
                      & For Love
                    </li>
                    <li>
                      Jillian Boustred
                    </li>
                    <li>
                      Kiki McDonough
                    </li>
                    <li>
                      Markarian
                    </li>
                    <li>
                      Stephanie Pratt
                    </li>
                    <li>
                      Barrus London
                    </li>
                    <li>
                      Sandy Liang
                    </li>
                    <li>
                      Happy X Nature
                    </li>
                    <li>
                      Nana Jacqueline
                    </li>
                    <li>
                      NUÉ
                    </li>
                    <li>
                      Narces
                    </li>
                    <li>
                      RASARIO
                    </li>
                    <li>
                      Vicky Gill
                    </li>
                    <li>
                      Angelika Józefczyk
                    </li>
                    <li>
                      ALEMAIS
                    </li>
                    <li>
                      Alchemy
                    </li>
                    <li>
                      Wiggy Kit
                    </li>
                    <li>
                      Kurt Geiger{' '}
                    </li>
                    <li>
                      Mach & Mach
                    </li>
                    <li>
                      Sachin & Babi
                    </li>
                    <li>
                      Dolly Rocket
                    </li>
                    <li>
                      Shoreditch Ski Club
                    </li>
                    <li>
                      Toni Sallier
                    </li>
                    <li>
                      JETSET
                    </li>
                    <li>
                      Andrew Gn
                    </li>
                    <li>
                      Sezane{' '}
                    </li>
                    <li>
                      Louisa Ballou
                    </li>
                    <li>
                      Terre Amoure
                    </li>
                    <li>
                      My Sunday Ski
                    </li>
                    <li>
                      Toga Associates
                    </li>
                    <li>
                      Ottad’ame
                    </li>
                    <li>
                      Peony
                    </li>
                    <li>
                      The Fall Bride
                    </li>
                    <li>
                      Lydia Jackson
                    </li>
                    <li>
                      Sugar Sand
                    </li>
                    <li>
                      Canda Goose
                    </li>
                    <li>
                      Poster Girl
                    </li>
                    <li>
                      Khanum's
                    </li>
                    <li>
                      Onesta
                    </li>
                    <li>
                      The Dyas
                    </li>
                    <li>
                      Nobody's Child
                    </li>
                    <li>
                      Isabel Moore
                    </li>
                    <li>
                      The Archivia
                    </li>
                    <li>
                      Edeline Lee
                    </li>
                    <li>
                      Christie Nicolaides
                    </li>
                    <li>
                      Winona
                    </li>
                    <li>
                      Andrea Iyamah
                    </li>
                    <li>
                      Santa Brands
                    </li>
                    <li>
                      ReevBridal
                    </li>
                    <li>
                      {' '}Chopova Lowena
                    </li>
                    <li>
                      Rowley Hesselballe
                    </li>
                    <li>
                      Christopher Esber
                    </li>
                    <li>
                      Maximilian
                    </li>
                    <li>
                      Natasha Zinko
                    </li>
                    <li>
                      Oséree
                    </li>
                    <li>
                      LAMARQUE
                    </li>
                    <li>
                      PatBO
                    </li>
                    <li>
                      1017 ALYX 9SM
                    </li>
                    <li>
                      Paolita
                    </li>
                    <li>
                      Rayane Bacha
                    </li>
                    <li>
                      Camila Coelho
                    </li>
                    <li>
                      Sabina Sommer{' '}
                    </li>
                    <li>
                      tyler mcgillivary
                    </li>
                    <li>
                      True Decadence
                    </li>
                    <li>
                      Lucianna balderamma
                    </li>
                    <li>
                      Alchemy London
                    </li>
                    <li>
                      Eliya the Label{' '}
                    </li>
                    <li>
                      {' '}V Chapman
                    </li>
                    <li>
                      Kamperett
                    </li>
                    <li>
                      Blanc de Chine
                    </li>
                    <li>
                      Millie Modelli
                    </li>
                    <li>
                      Hanifa
                    </li>
                    <li>
                      Silvia Astore
                    </li>
                    <li>
                      Sio Studio
                    </li>
                    <li>
                      Octavia Banks
                    </li>
                    <li>
                      Jean Paul Gaultier{' '}
                    </li>
                    <li>
                      Meshki{' '}
                    </li>
                    <li>
                      Wardrobe NYC
                    </li>
                    <li>
                      The Coolslaw
                    </li>
                    <li>
                      White Fox
                    </li>
                    <li>
                      Havre Studio
                    </li>
                    <li>
                      La Ligne
                    </li>
                    <li>
                      BrideWalk Couture
                    </li>
                    <li>
                      Victoria Millesime
                    </li>
                    <li>
                      Alamour the label
                    </li>
                    <li>
                      Moñot
                    </li>
                    <li>
                      OVERTHESEA
                    </li>
                    <li>
                      Olivia Reign
                    </li>
                    <li>
                      Runaway the Label
                    </li>
                    <li>
                      Polène
                    </li>
                    <li>
                      Maison Femalien
                    </li>
                    <li>
                      Bondi Born
                    </li>
                    <li>
                      Tach Clothing
                    </li>
                    <li>
                      My812
                    </li>
                    <li>
                      Catherine Quin
                    </li>
                    <li>
                      NDLQ Millinery
                    </li>
                    <li>
                      Eponine
                    </li>
                    <li>
                      Djerf Avenue
                    </li>
                    <li>
                      KJINSEN
                    </li>
                    <li>
                      Mirror Palais
                    </li>
                    <li>
                      Leslie Amon
                    </li>
                    <li>
                      Julita London
                    </li>
                    <li>
                      Cosheroom
                    </li>
                    <li>
                      OMNES
                    </li>
                    <li>
                      Kim Shui
                    </li>
                    <li>
                      Twinset
                    </li>
                    <li>
                      Scanlan Theodore
                    </li>
                    <li>
                      Joostricot
                    </li>
                    <li>
                      Aya Muse
                    </li>
                    <li>
                      Maisie Willen
                    </li>
                    <li>
                      Olivia Rubin
                    </li>
                    <li>
                      LEXI
                    </li>
                    <li>
                      Rezek Studio
                    </li>
                    <li>
                      New Arrivals
                    </li>
                    <li>
                      Roberta Einer{' '}
                    </li>
                    <li>
                      Brogger
                    </li>
                    <li>
                      De Loreta
                    </li>
                    <li>
                      LA COLLECTION{' '}
                    </li>
                    <li>
                      Lavaand{' '}
                    </li>
                    <li>
                      La Maison Talulah
                    </li>
                    <li>
                      Sonya Moda
                    </li>
                    <li>
                      Elle Zeitoune
                    </li>
                    <li>
                      Nimiiny
                    </li>
                    <li>
                      SHIN'S LETTERS
                    </li>
                    <li>
                      Furb
                    </li>
                    <li>
                      Hands
                    </li>
                    <li>
                      Ro&Zo
                    </li>
                    <li>
                      Ozevlat
                    </li>
                    <li>
                      Ioannes{' '}
                    </li>
                    <li>
                      SELEZZA
                    </li>
                    <li>
                      Benedetta Bruzziches
                    </li>
                    <li>
                      Erica Davies
                    </li>
                    <li>
                      Chopova Lowena
                    </li>
                    <li>
                      A.Cloud
                    </li>
                    <li>
                      MASHU
                    </li>
                    <li>
                      Philip Lim{' '}
                    </li>
                    <li>
                      SHUSHUTONG
                    </li>
                    <li>
                      MINJU KIM
                    </li>
                    <li>
                      Alexsandre Akhalkatsishvili
                    </li>
                    <li>
                      A CLOUD
                    </li>
                    <li>
                      CARPE LUNA
                    </li>
                    <li>
                      Muun{' '}
                    </li>
                    <li>
                      Hamalie
                    </li>
                    <li>
                      ARE YOU AM I
                    </li>
                    <li>
                      Maisie Wilen
                    </li>
                    <li>
                      HUTCH
                    </li>
                    <li>
                      Revelation
                    </li>
                    <li>
                      Iris Apfel
                    </li>
                    <li>
                      Joey The Label
                    </li>
                    <li>
                      Somerset
                    </li>
                    <li>
                      Reveligion
                    </li>
                    <li>
                      Fanm Mon
                    </li>
                    <li>
                      NU London
                    </li>
                    <li>
                      Deiji Studios
                    </li>
                    <li>
                      Feben
                    </li>
                    <li>
                      Autumn Adeigbo
                    </li>
                    <li>
                      T-Label
                    </li>
                    <li>
                      KidSuper
                    </li>
                    <li>
                      DELFI Collective
                    </li>
                    <li>
                      Yuhan Wang
                    </li>
                    <li>
                      L’Agence{' '}
                    </li>
                    <li>
                      Elizabeth An’Marie
                    </li>
                    <li>
                      Elsie & Fred
                    </li>
                    <li>
                      NERVI
                    </li>
                    <li>
                      Supriya lele
                    </li>
                    <li>
                      Anouki{' '}
                    </li>
                    <li>
                      HERVANR
                    </li>
                    <li>
                      Vaquera{' '}
                    </li>
                    <li>
                      Yali{' '}
                    </li>
                    <li>
                      Vintagw{' '}
                    </li>
                    <li>
                      A Star is Born
                    </li>
                    <li>
                      Lvir{' '}
                    </li>
                    <li>
                      Coucoo
                    </li>
                    <li>
                      Rococo Sand{' '}
                    </li>
                    <li>
                      Sanda Simona{' '}
                    </li>
                    <li>
                      Club L London{' '}
                    </li>
                    <li>
                      Roserry{' '}
                    </li>
                    <li>
                      Jovani{' '}
                    </li>
                    <li>
                      Y/Project{' '}
                    </li>
                    <li>
                      Mc2 Saint Barth{' '}
                    </li>
                    <li>
                      Poivre blanc{' '}
                    </li>
                    <li>
                      Ruched & Ready{' '}
                    </li>
                    <li>
                      GIARITÉ
                    </li>
                    <li>
                      Anna Quan
                    </li>
                    <li>
                      Molini London
                    </li>
                    <li>
                      ASTR The Label
                    </li>
                    <li>
                      The Line by K
                    </li>
                    <li>
                      Mac Duggal{' '}
                    </li>
                    <li>
                      Sofi Milo{' '}
                    </li>
                    <li>
                      Porte and Paire
                    </li>
                    <li>
                      Gillian Million
                    </li>
                    <li>
                      Silk Fred{' '}
                    </li>
                    <li>
                      Instant Funk{' '}
                    </li>
                    <li>
                      Savannah Morrow{' '}
                    </li>
                    <li>
                      {' '}Elbeth Gillis
                    </li>
                    <li>
                      James Steward{' '}
                    </li>
                    <li>
                      BOSS
                    </li>
                    <li>
                      Wyse{' '}
                    </li>
                    <li>
                      Twisted wunder{' '}
                    </li>
                    <li>
                      &forlove{' '}
                    </li>
                    <li>
                      Goyard{' '}
                    </li>
                    <li>
                      Dreaming Eli{' '}
                    </li>
                    <li>
                      Michaela Louisa
                    </li>
                    <li>
                      Liu Jo{' '}
                    </li>
                    <li>
                      Lipsy{' '}
                    </li>
                    <li>
                      49Winters{' '}
                    </li>
                    <li>
                      Purdey{' '}
                    </li>
                    <li>
                      Oysho{' '}
                    </li>
                    <li>
                      Martine Rose{' '}
                    </li>
                    <li>
                      Dolce and Gabbana{' '}
                    </li>
                    <li>
                      Issy{' '}
                    </li>
                    <li>
                      Strobe
                    </li>
                    <li>
                      Halo and co{' '}
                    </li>
                    <li>
                      Marcéla{' '}
                    </li>
                    <li>
                      Nodaleto{' '}
                    </li>
                    <li>
                      Third Form
                    </li>
                    <li>
                      Nicolerenée Couture{' '}
                    </li>
                    <li>
                      Dimaz{' '}
                    </li>
                    <li>
                      {' '}Atom{' '}
                    </li>
                    <li>
                      {' '}Sistaglam
                    </li>
                    <li>
                      OOSC
                    </li>
                    <li>
                      Liberty{' '}
                    </li>
                    <li>
                      By Iris{' '}
                    </li>
                    <li>
                      Aijek{' '}
                    </li>
                    <li>
                      After Six{' '}
                    </li>
                    <li>
                      Zeynep Arcay{' '}
                    </li>
                    <li>
                      UN-NYE{' '}
                    </li>
                    <li>
                      Parajumper{' '}
                    </li>
                    <li>
                      Kookai{' '}
                    </li>
                    <li>
                      Country Road{' '}
                    </li>
                    <li>
                      Effie Kats{' '}
                    </li>
                    <li>
                      Devotion Twins{' '}
                    </li>
                    <li>
                      {' '}Hunza G{' '}
                    </li>
                    <li>
                      Maliha London{' '}
                    </li>
                    <li>
                      Demetrios
                    </li>
                    <li>
                      Ciao Lucia
                    </li>
                    <li>
                      Emily Lovelock
                    </li>
                    <li>
                      Mithridate
                    </li>
                    <li>
                      Live The Process
                    </li>
                    <li>
                      Siedrés
                    </li>
                    <li>
                      Maya Deluxe
                    </li>
                    <li>
                      Bianca Spender
                    </li>
                    <li>
                      FOR ART'S SAKE
                    </li>
                    <li>
                      Yazbukey
                    </li>
                    <li>
                      Subdued
                    </li>
                    <li>
                      BIJOUTIER London
                    </li>
                    <li>
                      Walter Baker
                    </li>
                    <li>
                      Olga Berg
                    </li>
                    <li>
                      lidee
                    </li>
                    <li>
                      Luisa Beccaria
                    </li>
                    <li>
                      MOYA London
                    </li>
                    <li>
                      high tech
                    </li>
                    <li>
                      Edward Crutchley
                    </li>
                    <li>
                      Khrisjoy
                    </li>
                    <li>
                      Portia and Scarlett
                    </li>
                    <li>
                      The Pretty Dress Company
                    </li>
                    <li>
                      Plan C
                    </li>
                    <li>
                      Anne Louise Boutique
                    </li>
                    <li>
                      Because of Alice
                    </li>
                    <li>
                      Odd Muse
                    </li>
                    <li>
                      Britten Weddings
                    </li>
                    <li>
                      monot
                    </li>
                    <li>
                      Fabienne Chapot
                    </li>
                    <li>
                      OAKWOOD
                    </li>
                    <li>
                      Columbia
                    </li>
                    <li>
                      Liberty London
                    </li>
                    <li>
                      Urania Gazelli
                    </li>
                    <li>
                      Laagam
                    </li>
                    <li>
                      Sundarbay
                    </li>
                    <li>
                      Gatsbylady
                    </li>
                    <li>
                      Danielle Guizio
                    </li>
                    <li>
                      Calle del Mar
                    </li>
                    <li>
                      Percy Langley
                    </li>
                    <li>
                      Into Gaia
                    </li>
                    <li>
                      Pretty Lavish{' '}
                    </li>
                    <li>
                      Rewritten
                    </li>
                    <li>
                      Jovonna
                    </li>
                    <li>
                      Des Phemmes
                    </li>
                    <li>
                      Christopher John Rogers{' '}
                    </li>
                    <li>
                      Clary and Peg
                    </li>
                    <li>
                      tesoro
                    </li>
                    <li>
                      Yagi world
                    </li>
                    <li>
                      Prima Diva
                    </li>
                    <li>
                      Paria Farzaneh
                    </li>
                    <li>
                      Susan Fang
                    </li>
                    <li>
                      Tony Bianco
                    </li>
                    <li>
                      White Sand
                    </li>
                    <li>
                      LIKELY
                    </li>
                    <li>
                      Re/Done
                    </li>
                    <li>
                      Sentenced
                    </li>
                    <li>
                      ALOHAS
                    </li>
                    <li>
                      Maids to Measure
                    </li>
                    <li>
                      Me and Thee
                    </li>
                    <li>
                      Romani Official
                    </li>
                    <li>
                      Sleep Over Sleep
                    </li>
                    <li>
                      GODDIVA
                    </li>
                    <li>
                      Holzweiler
                    </li>
                    <li>
                      Nafsika Skourti
                    </li>
                    <li>
                      Rabbit
                    </li>
                    <li>
                      Poivre Blanc
                    </li>
                    <li>
                      Holden
                    </li>
                    <li>
                      Baserange
                    </li>
                    <li>
                      SEMSEM
                    </li>
                    <li>
                      Minkie
                    </li>
                    <li>
                      Dare 2B
                    </li>
                    <li>
                      Mixedgals
                    </li>
                    <li>
                      Kalita
                    </li>
                    <li>
                      Mea culpa
                    </li>
                    <li>
                      La Llama
                    </li>
                    <li>
                      Killy
                    </li>
                    <li>
                      Fanci Club
                    </li>
                    <li>
                      Eliya the label
                    </li>
                    <li>
                      Sarvin
                    </li>
                    <li>
                      Six Stories
                    </li>
                    <li>
                      Ophelia & Langley
                    </li>
                    <li>
                      Seraphine
                    </li>
                    <li>
                      Amy Lynn
                    </li>
                    <li>
                      Merlette
                    </li>
                    <li>
                      Expired girl
                    </li>
                    <li>
                      Loren Stewart
                    </li>
                    <li>
                      Juliet Dunn
                    </li>
                    <li>
                      L’academie
                    </li>
                    <li>
                      Atlein
                    </li>
                    <li>
                      Faisworth Hat Studio
                    </li>
                    <li>
                      tesoro bridal
                    </li>
                    <li>
                      Kate Fearnley - Bridal
                    </li>
                    <li>
                      Cecilie Bahnsen
                    </li>
                    <li>
                      GOLDBERGH
                    </li>
                    <li>
                      Yeezy
                    </li>
                    <li>
                      Good American
                    </li>
                    <li>
                      Yaura
                    </li>
                    <li>
                      Fashion To Figure
                    </li>
                    <li>
                      Bump & Milk
                    </li>
                    <li>
                      Georgina Boyce
                    </li>
                    <li>
                      Silk Maison
                    </li>
                    <li>
                      Ottod'Ame
                    </li>
                    <li>
                      Dope
                    </li>
                    <li>
                      MATERIEL
                    </li>
                    <li>
                      Sassi Holford
                    </li>
                    <li>
                      Suzanne Neville
                    </li>
                    <li>
                      Michael Costello
                    </li>
                    <li>
                      Piferi
                    </li>
                    <li>
                      April Banbury
                    </li>
                    <li>
                      Ami Paris
                    </li>
                    <li>
                      Saffiyyah Paul
                    </li>
                    <li>
                      Ossie Clark
                    </li>
                    <li>
                      House Bridal Designs
                    </li>
                    <li>
                      Comino couture
                    </li>
                    <li>
                      ESTEBAN CORTAZAR
                    </li>
                    <li>
                      Deadly Ponies
                    </li>
                    <li>
                      Suboo
                    </li>
                    <li>
                      Florence & Fortitude
                    </li>
                    <li>
                      Sndys Label
                    </li>
                    <li>
                      Johnathan Saunders
                    </li>
                    <li>
                      Scala USA BG Haute
                    </li>
                    <li>
                      Little liffner
                    </li>
                    <li>
                      Dare2be
                    </li>
                    <li>
                      Rat & Boa
                    </li>
                    <li>
                      The Vampire’s Wife
                    </li>
                    <li>
                      16 ARLINGTON
                    </li>
                    <li>
                      16ARLINGTON
                    </li>
                    <li>
                      Primrose Park
                    </li>
                    <li>
                      Nine The Label
                    </li>
                    <li>
                      Pretty Lavish
                    </li>
                    <li>
                      ManéMané
                    </li>
                    <li>
                      Andreeva
                    </li>
                    <li>
                      Auné
                    </li>
                    <li>
                      Farmrio
                    </li>
                    <li>
                      Y/Project
                    </li>
                    <li>
                      Otiumberg
                    </li>
                    <li>
                      Henri Duvillard
                    </li>
                    <li>
                      Lou Lou Studio
                    </li>
                    <li>
                      Skims
                    </li>
                    <li>
                      Morton Mac
                    </li>
                    <li>
                      Maria Grachvogel
                    </li>
                    <li>
                      Superdown
                    </li>
                    <li>
                      Krisa
                    </li>
                    <li>
                      Pallas Couture
                    </li>
                    <li>
                      Rogue Matilda
                    </li>
                    <li>
                      N.Peal
                    </li>
                    <li>
                      Hayze Bridal
                    </li>
                    <li>
                      Laksen
                    </li>
                    <li>
                      Pia Michi
                    </li>
                    <li>
                      Hill House Home
                    </li>
                    <li>
                      12 storeez
                    </li>
                    <li>
                      Hyphen Store
                    </li>
                    <li>
                      Aura bridal
                    </li>
                    <li>
                      Fabulous Agillitá
                    </li>
                    <li>
                      Piece of White
                    </li>
                    <li>
                      Millanova
                    </li>
                    <li>
                      Sinbono
                    </li>
                    <li>
                      Anna Karin Karlsson
                    </li>
                    <li>
                      RODRIGO OTAZU
                    </li>
                    <li>
                      Loudbrand studios
                    </li>
                    <li>
                      Pinar Ozevlat
                    </li>
                    <li>
                      Milou
                    </li>
                    <li>
                      Gimagus
                    </li>
                    <li>
                      Celeste Starre
                    </li>
                    <li>
                      IAMGIA
                    </li>
                    <li>
                      Florian London
                    </li>
                    <li>
                      Dixie
                    </li>
                    <li>
                      L. F. Markey
                    </li>
                    <li>
                      The Bar
                    </li>
                    <li>
                      Jean Paul Gaultier x Y/Project
                    </li>
                    <li>
                      Tongoro
                    </li>
                    <li>
                      L'IDÉE
                    </li>
                    <li>
                      CRAS
                    </li>
                    <li>
                      One Piece
                    </li>
                    <li>
                      Marcela London
                    </li>
                    <li>
                      Namelazz
                    </li>
                    <li>
                      Cabbages & Roses
                    </li>
                    <li>
                      Linda Farrow
                    </li>
                    <li>
                      Soallure
                    </li>
                    <li>
                      Mohikini
                    </li>
                    <li>
                      Antony Price
                    </li>
                    <li>
                      Dizingof
                    </li>
                    <li>
                      Park & Fifth
                    </li>
                    <li>
                      Kiko Kostadinov
                    </li>
                    <li>
                      Hours
                    </li>
                    <li>
                      Indah
                    </li>
                    <li>
                      The Dolls House
                    </li>
                    <li>
                      Little Mistress
                    </li>
                    <li>
                      Paper Dolls
                    </li>
                    <li>
                      Hermione De Paula
                    </li>
                    <li>
                      LESET
                    </li>
                    <li>
                      ADAM JONES STUDIO
                    </li>
                    <li>
                      Paris & J Crew
                    </li>
                    <li>
                      Cooke & Kin
                    </li>
                    <li>
                      Spell
                    </li>
                    <li>
                      Leonard Paris
                    </li>
                    <li>
                      HVN
                    </li>
                    <li>
                      Palava
                    </li>
                    <li>
                      Annele
                    </li>
                    <li>
                      Zoe Vine
                    </li>
                    <li>
                      Reformation
                    </li>
                    <li>
                      Betsey Johnson
                    </li>
                    <li>
                      THE VAMPIRE'S WIFE
                    </li>
                    <li>
                      Pin Up Girl Clothing
                    </li>
                    <li>
                      Sarsparilly
                    </li>
                    <li>
                      LF Markey
                    </li>
                    <li>
                      Katakomb
                    </li>
                    <li>
                      Chic and Holland
                    </li>
                    <li>
                      Richard Designs
                    </li>
                    <li>
                      Stop Staring
                    </li>
                    <li>
                      Glamour Bunny
                    </li>
                    <li>
                      Les Nereides
                    </li>
                    <li>
                      William Wilde
                    </li>
                    <li>
                      Olana
                    </li>
                    <li>
                      Pixie Market
                    </li>
                    <li>
                      Vixen Millinery
                    </li>
                    <li>
                      Magali Pascal
                    </li>
                    <li>
                      Matt & Nat
                    </li>
                    <li>
                      Lexy London
                    </li>
                    <li>
                      Heidi Klein
                    </li>
                    <li>
                      Donna Ida
                    </li>
                    <li>
                      ILA
                    </li>
                    <li>
                      Michael Michaud
                    </li>
                    <li>
                      Wolf and Moon
                    </li>
                    <li>
                      Jayley
                    </li>
                    <li>
                      Conner Ives
                    </li>
                    <li>
                      Cornelia James
                    </li>
                    <li>
                      Club L London
                    </li>
                    <li>
                      MIMINE AG
                    </li>
                    <li>
                      And Daughter
                    </li>
                    <li>
                      The Wellworn
                    </li>
                    <li>
                      By Iris
                    </li>
                    <li>
                      Maison Bent
                    </li>
                    <li>
                      Un-Nye
                    </li>
                    <li>
                      Bariano
                    </li>
                    <li>
                      Winser London
                    </li>
                    <li>
                      ATSU
                    </li>
                    <li>
                      MISBHV
                    </li>
                    <li>
                      Haute Hippie
                    </li>
                    <li>
                      Anjuna
                    </li>
                    <li>
                      Icons
                    </li>
                    <li>
                      Lolita Jaca
                    </li>
                    <li>
                      Foberini
                    </li>
                    <li>
                      Cara Cara NYC
                    </li>
                    <li>
                      Solid & Striped
                    </li>
                    <li>
                      LaQuan Smith
                    </li>
                    <li>
                      Vivienne of Holloway
                    </li>
                    <li>
                      Miguelina
                    </li>
                    <li>
                      Puppets and Puppets
                    </li>
                    <li>
                      LeQuan Smith
                    </li>
                    <li>
                      Lado Bokuchava
                    </li>
                    <li>
                      Constanca Entrudo
                    </li>
                    <li>
                      Mother of the bride Irresistible
                    </li>
                    <li>
                      Shauna Fay
                    </li>
                    <li>
                      Chillie London
                    </li>
                    <li>
                      Self-Portrait
                    </li>
                    <li>
                      Isla De Gar
                    </li>
                    <li>
                      Isla Del Gar
                    </li>
                    <li>
                      Sosandar
                    </li>
                    <li>
                      Sylvia Toledano
                    </li>
                    <li>
                      Hermione Harbutt
                    </li>
                    <li>
                      Hunter Bell
                    </li>
                    <li>
                      Brora
                    </li>
                    <li>
                      Asta Resort
                    </li>
                    <li>
                      No Pise La Grama
                    </li>
                    <li>
                      Jacquemus
                    </li>
                    <li>
                      Maje
                    </li>
                    <li>
                      Cult Gaia
                    </li>
                    <li>
                      Sleeper
                    </li>
                    <li>
                      Zimmermann
                    </li>
                    <li>
                      De La Vali
                    </li>
                    <li>
                      Kitri
                    </li>
                    <li>
                      Saloni
                    </li>
                    <li>
                      Reiss
                    </li>
                    <li>
                      Ghost
                    </li>
                    <li>
                      Solace London
                    </li>
                    <li>
                      ILTA
                    </li>
                    <li>
                      Shona Joy
                    </li>
                    <li>
                      Norma Kamali
                    </li>
                    <li>
                      Yves Saint Laurent
                    </li>
                    <li>
                      Perfect Moment
                    </li>
                    <li>
                      Perfect Moment{' '}
                    </li>
                    <li>
                      Miscreants London
                    </li>
                    <li>
                      Saint Laurent
                    </li>
                    <li>
                      Elliatt
                    </li>
                    <li>
                      Whistles
                    </li>
                    <li>
                      Galvan
                    </li>
                    <li>
                      Never Fully Dressed
                    </li>
                    <li>
                      Moon Boot
                    </li>
                    <li>
                      Queens of Archive
                    </li>
                    <li>
                      Taller Marmo
                    </li>
                    <li>
                      Oceanus
                    </li>
                    <li>
                      3.1 Phillip Lim
                    </li>
                    <li>
                      Acne Studios
                    </li>
                    <li>
                      Alexa Chung
                    </li>
                    <li>
                      Alexander McQueen
                    </li>
                    <li>
                      Alexander Wang
                    </li>
                    <li>
                      alice McCALL
                    </li>
                    <li>
                      AllSaints
                    </li>
                    <li>
                      Anine Bing
                    </li>
                    <li>
                      Anna Sui
                    </li>
                    <li>
                      Free People
                    </li>
                    <li>
                      French Connection
                    </li>
                    <li>
                      Gianvito Rossi
                    </li>
                    <li>
                      Giorgio Armani
                    </li>
                    <li>
                      Hermès
                    </li>
                    <li>
                      Hervé Léger
                    </li>
                    <li>
                      Jarlo
                    </li>
                    <li>
                      JW Anderson
                    </li>
                    <li>
                      Karen Millen
                    </li>
                    <li>
                      Mango
                    </li>
                    <li>
                      Manolo Blahnik
                    </li>
                    <li>
                      Mary Katrantzou
                    </li>
                    <li>
                      Max Mara
                    </li>
                    <li>
                      Michael Kors
                    </li>
                    <li>
                      Missoni
                    </li>
                    <li>
                      Paloma Blue
                    </li>
                    <li>
                      Jigsaw
                    </li>
                    <li>
                      Miu Miu
                    </li>
                    <li>
                      Madseventies
                    </li>
                    <li>
                      Eiko Ai
                    </li>
                    <li>
                      Little Joe
                    </li>
                    <li>
                      Rumer
                    </li>
                    <li>
                      Pyrus
                    </li>
                    <li>
                      RED Valentino
                    </li>
                    <li>
                      Salvatore Ferragamo
                    </li>
                    <li>
                      Sandro
                    </li>
                    <li>
                      Sophia Webster
                    </li>
                    <li>
                      Stella McCartney
                    </li>
                    <li>
                      The Kooples
                    </li>
                    <li>
                      Theory
                    </li>
                    <li>
                      Tiffany & Co
                    </li>
                    <li>
                      Tom Ford
                    </li>
                    <li>
                      Tory Burch
                    </li>
                    <li>
                      Valentino
                    </li>
                    <li>
                      Veja
                    </li>
                    <li>
                      Versace
                    </li>
                    <li>
                      Vince
                    </li>
                    <li>
                      Vintage
                    </li>
                    <li>
                      Vivienne Westwood
                    </li>
                    <li>
                      Zadig & Voltaire
                    </li>
                    <li>
                      Alessandra Rich
                    </li>
                    <li>
                      Alighieri
                    </li>
                    <li>
                      Antonio Berardi
                    </li>
                    <li>
                      Aquazzura
                    </li>
                    <li>
                      Caroline Constas
                    </li>
                    <li>
                      Castañer
                    </li>
                    <li>
                      Celine
                    </li>
                    <li>
                      Charlotte Olympia
                    </li>
                    <li>
                      Christopher Kane
                    </li>
                    <li>
                      Delpozo
                    </li>
                    <li>
                      Dundas
                    </li>
                    <li>
                      Edie Parker
                    </li>
                    <li>
                      Milly
                    </li>
                    <li>
                      Pearls and Swine
                    </li>
                    <li>
                      Anni Lu
                    </li>
                    <li>
                      Rosie Assoulin
                    </li>
                    <li>
                      Brandon Maxwell
                    </li>
                    <li>
                      Les Reveries
                    </li>
                    <li>
                      Balmain x H&M
                    </li>
                    <li>
                      Simone Rocha
                    </li>
                    <li>
                      SANTE
                    </li>
                    <li>
                      Rosa Bloom
                    </li>
                    <li>
                      Katrina & Re
                    </li>
                    <li>
                      Devotion Twins
                    </li>
                    <li>
                      Swarovski
                    </li>
                    <li>
                      Brandon Blackwood
                    </li>
                    <li>
                      Anna Mason
                    </li>
                    <li>
                      Toit Volant
                    </li>
                    <li>
                      Hugo Boss
                    </li>
                    <li>
                      Rodo Firenze
                    </li>
                    <li>
                      Rat Betty
                    </li>
                    <li>
                      Adrianna Papell
                    </li>
                    <li>
                      AG Jeans
                    </li>
                    <li>
                      Agent Provocateur
                    </li>
                    <li>
                      AGOLDE
                    </li>
                    <li>
                      Alanui
                    </li>
                    <li>
                      Anthropologie
                    </li>
                    <li>
                      Antik Batik
                    </li>
                    <li>
                      Badgley Mischka
                    </li>
                    <li>
                      Bally
                    </li>
                    <li>
                      Barbour
                    </li>
                    <li>
                      Baum und Pferdgarten
                    </li>
                    <li>
                      Belstaff
                    </li>
                    <li>
                      BHLDN
                    </li>
                    <li>
                      Bogner
                    </li>
                    <li>
                      Chi Chi London
                    </li>
                    <li>
                      Cubic
                    </li>
                    <li>
                      ED HARDY
                    </li>
                    <li>
                      ERDEM x H&M
                    </li>
                    <li>
                      Gabriela Hearst
                    </li>
                    <li>
                      Halston
                    </li>
                    <li>
                      Jenny Yoo
                    </li>
                    <li>
                      Jill Stuart
                    </li>
                    <li>
                      Just Cavalli
                    </li>
                    <li>
                      Kenzo
                    </li>
                    <li>
                      Lavish Alice
                    </li>
                    <li>
                      Yves Salomon
                    </li>
                    <li>
                      Loro Piana
                    </li>
                    <li>
                      La Perla
                    </li>
                    <li>
                      Olivia von Halle
                    </li>
                    <li>
                      ML MONIQUE LHUILLIER
                    </li>
                    <li>
                      Monica Vinader
                    </li>
                    <li>
                      Next
                    </li>
                    <li>
                      Nike
                    </li>
                    <li>
                      Nina Ricci
                    </li>
                    <li>
                      Opening Ceremony
                    </li>
                    <li>
                      Oscar de la Renta
                    </li>
                    <li>
                      Philipp Plein
                    </li>
                    <li>
                      Pierre Hardy
                    </li>
                    <li>
                      Reem Acra
                    </li>
                    <li>
                      A.P.C.
                    </li>
                    <li>
                      Abercrombie & Fitch
                    </li>
                    <li>
                      Armani Exchange
                    </li>
                    <li>
                      A Bathing Ape
                    </li>
                    <li>
                      Blumarine
                    </li>
                    <li>
                      Canada Goose
                    </li>
                    <li>
                      Carolina Herrera
                    </li>
                    <li>
                      Christian Lacroix
                    </li>
                    <li>
                      COMME DES GARCONS HOMME PLUS
                    </li>
                    <li>
                      COMME DES GARCONS
                    </li>
                    <li>
                      COMME DES GARCONS SHIRT
                    </li>
                    <li>
                      Converse
                    </li>
                    <li>
                      RONALD JOYCE
                    </li>
                    <li>
                      Current/Elliott
                    </li>
                    <li>
                      Sarah's Bag
                    </li>
                    <li>
                      Diesel
                    </li>
                    <li>
                      DKNY
                    </li>
                    <li>
                      Dries van Noten
                    </li>
                    <li>
                      Dsquared2
                    </li>
                    <li>
                      Elie Saab
                    </li>
                    <li>
                      Emporio Armani
                    </li>
                    <li>
                      Etro
                    </li>
                    <li>
                      Fusalp
                    </li>
                    <li>
                      Guess
                    </li>
                    <li>
                      Isabel Marant Etoile
                    </li>
                    <li>
                      Furla
                    </li>
                    <li>
                      Rosantica
                    </li>
                    <li>
                      Casadei
                    </li>
                    <li>
                      TOGA PULLA
                    </li>
                    <li>
                      J BRAND
                    </li>
                    <li>
                      Jil Sander
                    </li>
                    <li>
                      John Galliano
                    </li>
                    <li>
                      JUICY COUTURE
                    </li>
                    <li>
                      Junya Watanabe
                    </li>
                    <li>
                      Karl Lagerfeld
                    </li>
                    <li>
                      Levi's
                    </li>
                    <li>
                      Longchamp
                    </li>
                    <li>
                      Love Moschino
                    </li>
                    <li>
                      Lulu Guinness
                    </li>
                    <li>
                      Rebecca Minkoff
                    </li>
                    <li>
                      Mackage
                    </li>
                    <li>
                      M.i.h Jeans
                    </li>
                    <li>
                      Maison Michel
                    </li>
                    <li>
                      Mansur Gavriel
                    </li>
                    <li>
                      Marni
                    </li>
                    <li>
                      McQ by Alexander McQueen
                    </li>
                    <li>
                      Michael Kors Collection
                    </li>
                    <li>
                      Miss Sixty
                    </li>
                    <li>
                      Mother Denim
                    </li>
                    <li>
                      MSGM
                    </li>
                    <li>
                      NAPAPIJRI
                    </li>
                    <li>
                      Off-White
                    </li>
                    <li>
                      Olympia Le-Tan
                    </li>
                    <li>
                      PALM ANGELS
                    </li>
                    <li>
                      Paul Smith
                    </li>
                    <li>
                      Pepe Jeans
                    </li>
                    <li>
                      Chopard
                    </li>
                    <li>
                      Proenza Schouler
                    </li>
                    <li>
                      RAF SIMONS
                    </li>
                    <li>
                      RICK OWENS
                    </li>
                    <li>
                      Roger Vivier
                    </li>
                    <li>
                      Sacai
                    </li>
                    <li>
                      Schott
                    </li>
                    <li>
                      See by Chloe
                    </li>
                    <li>
                      Sergio Rossi
                    </li>
                    <li>
                      Stone Island
                    </li>
                    <li>
                      Stussy
                    </li>
                    <li>
                      Supreme
                    </li>
                    <li>
                      Telfar
                    </li>
                    <li>
                      The North Face
                    </li>
                    <li>
                      Thierry Mugler
                    </li>
                    <li>
                      THOM BROWNE
                    </li>
                    <li>
                      Tod's
                    </li>
                    <li>
                      Tommy Hilfiger
                    </li>
                    <li>
                      UGG
                    </li>
                    <li>
                      VALENTINO GARAVANI
                    </li>
                    <li>
                      Van cleef & Arpels
                    </li>
                    <li>
                      Rochas
                    </li>
                    <li>
                      Rowing Blazers
                    </li>
                    <li>
                      Marine Serre
                    </li>
                    <li>
                      Coperni
                    </li>
                    <li>
                      HOMME PLISSE ISSEY MIYAKE
                    </li>
                    <li>
                      H&M X Mugler
                    </li>
                    <li>
                      Bruuns Bazaar
                    </li>
                    <li>
                      Club Monaco
                    </li>
                    <li>
                      Rag & Bone
                    </li>
                    <li>
                      LK Bennett
                    </li>
                    <li>
                      Ted Baker
                    </li>
                    <li>
                      Uterqüe
                    </li>
                    <li>
                      BCBGMAXAZRIA
                    </li>
                    <li>
                      Rachel Roy
                    </li>
                    <li>
                      Rebecca Taylor
                    </li>
                    <li>
                      paule Ka
                    </li>
                    <li>
                      Vanessa Bruno
                    </li>
                    <li>
                      Nicole Miller
                    </li>
                    <li>
                      Sass & Bide
                    </li>
                    <li>
                      Marc Cain
                    </li>
                    <li>
                      FOREVER NEW
                    </li>
                    <li>
                      Aidan Mattox
                    </li>
                    <li>
                      Stuart Weitzman
                    </li>
                    <li>
                      Pronovias
                    </li>
                    <li>
                      Martina Liana
                    </li>
                    <li>
                      Rachel Comey
                    </li>
                    <li>
                      Nicole Farhi
                    </li>
                    <li>
                      Retrofête
                    </li>
                    <li>
                      H&M Studio
                    </li>
                    <li>
                      Salomon
                    </li>
                    <li>
                      Courrèges
                    </li>
                    <li>
                      DVF
                    </li>
                    <li>
                      Dr. Martens
                    </li>
                    <li>
                      Vionnet
                    </li>
                    <li>
                      Roland Mouret
                    </li>
                    <li>
                      Herve Leger
                    </li>
                    <li>
                      Fiorucci
                    </li>
                    <li>
                      Issey Miyake
                    </li>
                    <li>
                      Monique Lhuillier
                    </li>
                    <li>
                      Jean Paul Gaultier
                    </li>
                    <li>
                      Kenneth Jay Lane
                    </li>
                    <li>
                      Paco Rabanne
                    </li>
                    <li>
                      MUGLER
                    </li>
                    <li>
                      Sonia Rykiel
                    </li>
                    <li>
                      CHINTI & PARKER
                    </li>
                    <li>
                      Ralph & Russo
                    </li>
                    <li>
                      By Malene Birger
                    </li>
                    <li>
                      Jason Wu
                    </li>
                    <li>
                      Rodarte
                    </li>
                    <li>
                      Galia Lahav
                    </li>
                    <li>
                      Talbot Runhof
                    </li>
                    <li>
                      ZUHAIR MURAD
                    </li>
                    <li>
                      Zac Posen
                    </li>
                    <li>
                      Giambattista Valli
                    </li>
                    <li>
                      Amina Muaddi
                    </li>
                    <li>
                      Nicholas Kirkwood
                    </li>
                    <li>
                      Rosetta Getty
                    </li>
                    <li>
                      The Row
                    </li>
                    <li>
                      BOGNER FIRE+ICE
                    </li>
                    <li>
                      Vetements
                    </li>
                    <li>
                      Catherine Malandrino
                    </li>
                    <li>
                      Peter Pilotto
                    </li>
                    <li>
                      Magda Butrym
                    </li>
                    <li>
                      Marques Almeida
                    </li>
                    <li>
                      Marques'Almeida
                    </li>
                    <li>
                      House of Holland
                    </li>
                    <li>
                      Oysho
                    </li>
                    <li>
                      Sorel
                    </li>
                    <li>
                      Alo Yoga
                    </li>
                    <li>
                      Ganni
                    </li>
                    <li>
                      MAX&Co.
                    </li>
                    <li>
                      ASOS Curve
                    </li>
                    <li>
                      BCBGeneration
                    </li>
                    <li>
                      Amanda Uprichard
                    </li>
                    <li>
                      Sezane
                    </li>
                    <li>
                      Sézane
                    </li>
                    <li>
                      Steve Madden
                    </li>
                    <li>
                      Claire Pettibone
                    </li>
                    <li>
                      Rossignol
                    </li>
                    <li>
                      Samsoe Samsoe
                    </li>
                    <li>
                      Sophie Hulme
                    </li>
                    <li>
                      Christy Dawn
                    </li>
                    <li>
                      Timberland
                    </li>
                    <li>
                      Toast
                    </li>
                    <li>
                      Urban Outfitters 
                    </li>
                    <li>
                      Vera Wang
                    </li>
                    <li>
                      Wolford
                    </li>
                  </ul>
                  <div
                    className="awesomplete-placeholder text-center bg-white p-3 d-none"
                    data-target="listing-creation-details.requestDesignerDiv"
                  >
                    <p>
                      Whoops! It looks like we don't have that designer yet...
                    </p>
                    <a
                      className="btn btn-primary -dark-red rounded-0 form-control"
                      data-target="#request-designer-modal"
                      data-toggle="modal"
                      href="#"
                    >
                      Request a designer
                    </a>
                  </div>
                </div>
                <div className="form-group short-field col-md-10 col-lg-6 col-xl-5 mb-3">
                  <label>
                    Item Name*
                  </label>
                  <input
                    className="form-control mb-0"
                    data-action="listing-creation-details#setNextButtonState keyup->listing-creation-details#setNextButtonState paste->listing-creation-details#setNextButtonState"
                    data-target="listing-creation-details.listingItemNameInput"
                    id="listing_item_name"
                    maxLength="30"
                    name="listing[item_name]"
                    placeholder="e.g The Alexandra Dress"
                    size="30"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-row -disabled">
                <div className="form-group short-field col-md-10 col-lg-6 col-xl-5 mb-0">
                  <label>
                    Size*
                  </label>
                  <a
                    className="size-guide"
                    data-target="#size-guide"
                    data-toggle="modal"
                    href="#"
                  >
                    Size guide
                  </a>
                  <div data-controller="form-dropdown">
                    <div className="dropdown form-dropdown desktop-only">
                      <button
                        aria-expanded="false"
                        aria-haspopup="true"
                        className="form-control dropdown-toggle"
                        data-action="unit-with-offer-single-size-selector#withOffer units-with-rental-removal#withRental"
                        data-target="form-dropdown.dropdownBtn listing-creation-details.dropdownSize"
                        data-toggle="dropdown"
                      >
                        Select size
                      </button>
                      <div
                        className="dropdown-menu"
                        data-target="listing-creation-details.sizeDropdownMenu unit-with-offer-single-size-selector.sizeDropdownMenu units-with-offer-removal.sizeDropdownMenu units-with-rental-removal.sizeDropdownMenu listing-units-with-offer-and-rental.sizeDropdownMenu"
                      />
                    </div>
                    <div className="mobile-native-dropdown-container mobile-only">
                      <select
                        className="form-control mobile-native-dropdown text-uppercase mb-3"
                        data-action="listing-creation-details#collectSizes click->unit-with-offer-single-size-selector#withOffer click->units-with-rental-removal#withRental"
                        data-target="form-dropdown.selectTag listing-creation-details.sizeSelectMenu unit-with-offer-single-size-selector.sizeSelectMenu units-with-offer-removal.sizeSelectMenu units-with-rental-removal.sizeSelectMenu listing-units-with-offer-and-rental.sizeSelectMenu"
                        name="sizes[]"
                      />
                    </div>
                  </div>
                  <div className="form__select-wrapper listing-size-selector-wrapper">
                    <div>
                      <div
                        aria-labelledby="size_filter_button"
                        className="multi-size-menu mb-3 d-none"
                        data-target="listing-creation-details.mutlipleSizesOptions"
                      />
                      <div
                        aria-hidden="true"
                        aria-labelledby="exampleModalCenterTitle"
                        className="modal fade default-modal tap-to-close-modal"
                        id="unit-with-offer-removal-modal"
                        role="dialog"
                        style={{
                          zIndex: '1060'
                        }}
                        tabIndex="-1"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <span
                            className="tap-to-close desktop-hide"
                            data-dismiss="modal"
                          >
                            Tap to close
                          </span>
                          <div className="modal-content rounded-0">
                            <div className="modal-header border-bottom-0 pb-0">
                              <button
                                aria-label="Close"
                                className="close mobile-hide"
                                data-dismiss="modal"
                                type="button"
                              >
                                <span aria-hidden="true">
                                  X
                                </span>
                              </button>
                            </div>
                            <div className="modal-body pb-md-5 pb-4">
                              <div className="row">
                                <div className="col-12 col-md-9 mx-auto">
                                  <div className="row">
                                    <div className="col-12 text-center mb-2">
                                      <h5 className="modal-title text-capitalize mb-2 pending-requests-title">
                                        Pending Requests
                                      </h5>
                                    </div>
                                    <div className="col-12 text-center mb-4">
                                      <p className="pending-requests-content">
                                        {' '}It looks like you have a pending offer request on this item so you won't be able to remove it. If you would like to continue, please decline the offer request and try again.{' '}
                                      </p>
                                    </div>
                                    <div className="col-lg-12 text-uppercase text-center">
                                      <a
                                        className="btn btn-primary btn-block -dark-red"
                                        data-dismiss="modal"
                                        href="#"
                                      >
                                        Close
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        aria-labelledby="exampleModalCenterTitle"
                        className="modal fade default-modal tap-to-close-modal"
                        id="unit-with-rental-removal-modal"
                        role="dialog"
                        style={{
                          zIndex: '1060'
                        }}
                        tabIndex="-1"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <span
                            className="tap-to-close desktop-hide"
                            data-dismiss="modal"
                          >
                            Tap to close
                          </span>
                          <div className="modal-content rounded-0">
                            <div className="modal-header border-bottom-0 pb-0">
                              <button
                                aria-label="Close"
                                className="close mobile-hide"
                                data-dismiss="modal"
                                type="button"
                              >
                                <span aria-hidden="true">
                                  X
                                </span>
                              </button>
                            </div>
                            <div className="modal-body pb-md-5 pb-4">
                              <div className="row">
                                <div className="col-12 col-md-9 mx-auto">
                                  <div className="row">
                                    <div className="col-12 text-center mb-2">
                                      <h5 className="modal-title text-capitalize mb-2 pending-requests-title">
                                        Pending Requests
                                      </h5>
                                    </div>
                                    <div className="col-12 text-center mb-4">
                                      <p className="pending-requests-content">
                                        {' '}It looks like you have a pending rental request on this item so you won't be able to remove it. If you would like to continue, please decline the rental request and try again.{' '}
                                      </p>
                                    </div>
                                    <div className="col-lg-12 text-uppercase text-center">
                                      <a
                                        className="btn btn-primary btn-block -dark-red"
                                        data-dismiss="modal"
                                        href="#"
                                      >
                                        Close
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        aria-labelledby="exampleModalCenterTitle"
                        className="modal fade default-modal tap-to-close-modal"
                        id="unit-with-rental-and-offer-removal-modal"
                        role="dialog"
                        style={{
                          zIndex: '1060'
                        }}
                        tabIndex="-1"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <span
                            className="tap-to-close desktop-hide"
                            data-dismiss="modal"
                          >
                            Tap to close
                          </span>
                          <div className="modal-content rounded-0">
                            <div className="modal-header border-bottom-0 pb-0">
                              <button
                                aria-label="Close"
                                className="close mobile-hide"
                                data-dismiss="modal"
                                type="button"
                              >
                                <span aria-hidden="true">
                                  X
                                </span>
                              </button>
                            </div>
                            <div className="modal-body pb-md-5 pb-4">
                              <div className="row">
                                <div className="col-12 col-md-9 mx-auto">
                                  <div className="row">
                                    <div className="col-12 text-center mb-2">
                                      <h5 className="modal-title text-capitalize mb-2 pending-requests-title">
                                        Pending Requests
                                      </h5>
                                    </div>
                                    <div className="col-12 text-center mb-4">
                                      <p className="pending-requests-content">
                                        {' '}It looks like you have a pending offer and rental request on this items so you won't be able to remove it. If you would like to continue, please decline the offer and rental request and try again.{' '}
                                      </p>
                                    </div>
                                    <div className="col-lg-12 text-uppercase text-center">
                                      <a
                                        className="btn btn-primary btn-block -dark-red"
                                        data-dismiss="modal"
                                        href="#"
                                      >
                                        Close
                                      </a>
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
                <div
                  className="form-group short-field col-md-10 col-lg-6 col-xl-5 mb-0"
                  data-controller="form-dropdown"
                >
                  <label>
                    Colour*
                  </label>
                  <div className="dropdown form-dropdown desktop-only">
                    <button
                      aria-expanded="false"
                      aria-haspopup="true"
                      className="form-control dropdown-toggle"
                      data-target="form-dropdown.dropdownBtn"
                      data-toggle="dropdown"
                      type="button"
                    >
                      beige
                    </button>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="beige"
                        href="#"
                      >
                        beige
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="black"
                        href="#"
                      >
                        black
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="blue"
                        href="#"
                      >
                        blue
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="brown"
                        href="#"
                      >
                        brown
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="copper"
                        href="#"
                      >
                        copper
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="cream"
                        href="#"
                      >
                        cream
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="gold"
                        href="#"
                      >
                        gold
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="green"
                        href="#"
                      >
                        green
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="grey"
                        href="#"
                      >
                        grey
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="multi"
                        href="#"
                      >
                        multi
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="navy"
                        href="#"
                      >
                        navy
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="orange"
                        href="#"
                      >
                        orange
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="pink"
                        href="#"
                      >
                        pink
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="purple"
                        href="#"
                      >
                        purple
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="red"
                        href="#"
                      >
                        red
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="silver"
                        href="#"
                      >
                        silver
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="tan"
                        href="#"
                      >
                        tan
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="white"
                        href="#"
                      >
                        white
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="yellow"
                        href="#"
                      >
                        yellow
                      </a>
                      <a
                        className="dropdown-item text-uppercase"
                        data-action="form-dropdown#selectChanges"
                        data-value="phantom"
                        href="#"
                      >
                        phantom
                      </a>
                    </div>
                  </div>
                  <div className="mobile-native-dropdown-container mobile-only">
                    <select
                      className="form-control mobile-native-dropdown text-uppercase mb-3"
                      data-action="listing-creation-details#setNextButtonState"
                      data-target="form-dropdown.selectTag listing-creation-details.listingColourCategoryInput"
                      id="listing_colour_category"
                      name="listing[colour_category]"
                    >
                      <option value="beige">
                        beige
                      </option>
                      <option value="black">
                        black
                      </option>
                      <option value="blue">
                        blue
                      </option>
                      <option value="brown">
                        brown
                      </option>
                      <option value="copper">
                        copper
                      </option>
                      <option value="cream">
                        cream
                      </option>
                      <option value="gold">
                        gold
                      </option>
                      <option value="green">
                        green
                      </option>
                      <option value="grey">
                        grey
                      </option>
                      <option value="multi">
                        multi
                      </option>
                      <option value="navy">
                        navy
                      </option>
                      <option value="orange">
                        orange
                      </option>
                      <option value="pink">
                        pink
                      </option>
                      <option value="purple">
                        purple
                      </option>
                      <option value="red">
                        red
                      </option>
                      <option value="silver">
                        silver
                      </option>
                      <option value="tan">
                        tan
                      </option>
                      <option value="white">
                        white
                      </option>
                      <option value="yellow">
                        yellow
                      </option>
                      <option value="phantom">
                        phantom
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row -disabled">
                <div className="form-group col-md-12 col-lg-3 mb-0">
                  <hr className="mx-0 border-circular-couture-grey custom-hr" />
                </div>
              </div>
              <div className="form-row -disabled">
                <div className="form-group col-md-10 item-description required-form-group">
                  <label className="required">
                    Item Description*
                  </label>
                  <small className="d-block text-circular-couture-grey description">
                    Please write more than 50 characters.
                  </small>
                  <textarea
                    className="form-control mobile-mb-0px"
                    data-action="listing-creation-details#setNextButtonState keyup->listing-creation-details#setNextButtonState paste->listing-creation-details#setNextButtonState"
                    data-target="listing-creation-details.listingDetailsStyleNotesInput"
                    id="listing_details_style_notes"
                    minLength="50"
                    name="listing[details_style_notes]"
                    pattern=".{50,}"
                    placeholder="Eg. This navy maxi dress has a full A-line skirt, lace panelling from the elbow and a cutout back detail. Pair with a chunky platform or sleek mid-heel to keep it modern."
                    required
                    title="Please write more than 50 characters"
                  />
                </div>
              </div>
              <div className="form-row -disabled">
                <div className="form-group col-md-10 mb-2">
                  <label>
                    Fit Notes*
                  </label>
                  <textarea
                    className="form-control"
                    data-action="listing-creation-details#setNextButtonState keyup->listing-creation-details#setNextButtonState paste->listing-creation-details#setNextButtonState"
                    data-flipper-status="true"
                    data-target="listing-creation-details.listingDetailsSizeFitNotesInput"
                    id="listing_size_fit_notes"
                    name="listing[size_fit_notes]"
                    placeholder="Eg. I am 5ft6 and item comes up small, true to size, length (shoulder to hem) is 120cm."
                    required
                  />
                </div>
              </div>
            </div>
            <div className="next-step-btn-wrapper">
              <div className="form-row">
                <div className="form-group col-md-5 ml-auto">
                  <button
                    className="form-control btn-primary -dark-red listing-new-section__desktop-btn mt-0 mt-md-3 details-next-buttons -disabled-grey ml-auto"
                    data-action="click->listing-creation-details#submitDetailsForm"
                    data-original-title=""
                    id="details_next_button"
                    title=""
                  >
                    NEXT STEP
                  </button>
                </div>
              </div>
            </div>
            <p className="note text-uppercase mb-0 position-relative mt-4 mt-md-5">
              * indicates a required field
            </p>
            <div className="listing-creation-sizing-guide">
              <div
                className="component modal size-guide fade"
                data-controller="modal-component"
                data-modal-component-state-value="hide"
                id="size-guide"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <span
                      className="close-modal"
                      data-action="click->modal-component#hideModal"
                    >
                      <img
                        alt="An icon of a close"
                        height="24"
                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                        width="24"
                      />
                    </span>
                    <div className="row no-gutters">
                      <div className="col-12">
                        <div className="modal-title-wrapper">
                          <h3 id="sizing-guide-category-name-modal">
                            {' '}Ready-to-wear size guide{' '}
                          </h3>
                        </div>
                      </div>
                      <div className="col-12">
                        <div
                          className="sizing-table-wrapper"
                          id="sizing-guide-modal"
                        >
                          <table className="table sizing-table sticky-left mb-0">
                            <tbody>
                              <tr className="trow">
                                <th scope="row">
                                  UK
                                </th>
                              </tr>
                              <tr className="trow">
                                <th scope="row">
                                  US
                                </th>
                              </tr>
                              <tr className="trow">
                                <th scope="row">
                                  IT
                                </th>
                              </tr>
                              <tr className="trow">
                                <th scope="row">
                                  FR
                                </th>
                              </tr>
                              <tr className="trow">
                                <th scope="row">
                                  DN
                                </th>
                              </tr>
                              <tr className="trow">
                                <th scope="row">
                                  RU
                                </th>
                              </tr>
                              <tr className="trow">
                                <th scope="row">
                                  GER
                                </th>
                              </tr>
                              <tr className="trow">
                                <th scope="row">
                                  AUS
                                </th>
                              </tr>
                              <tr className="trow">
                                <th scope="row" />
                              </tr>
                            </tbody>
                          </table>
                          <table className="table sizing-table text-center mb-0">
                            <tbody>
                              <tr className="trow">
                                <td>
                                  4
                                </td>
                                <td>
                                  6
                                </td>
                                <td>
                                  8
                                </td>
                                <td>
                                  10
                                </td>
                                <td>
                                  12
                                </td>
                                <td>
                                  14
                                </td>
                                <td>
                                  16
                                </td>
                                <td>
                                  18
                                </td>
                                <td>
                                  20
                                </td>
                                <td>
                                  22
                                </td>
                                <td>
                                  24
                                </td>
                                <td>
                                  26
                                </td>
                                <td>
                                  28
                                </td>
                                <td>
                                  30
                                </td>
                                <td>
                                  32
                                </td>
                              </tr>
                              <tr className="trow">
                                <td>
                                  00
                                </td>
                                <td>
                                  0
                                </td>
                                <td>
                                  2-4
                                </td>
                                <td>
                                  4-6
                                </td>
                                <td>
                                  8
                                </td>
                                <td>
                                  10
                                </td>
                                <td>
                                  12
                                </td>
                                <td>
                                  14
                                </td>
                                <td>
                                  16
                                </td>
                                <td>
                                  18
                                </td>
                                <td>
                                  20
                                </td>
                                <td>
                                  22
                                </td>
                                <td>
                                  24
                                </td>
                                <td>
                                  26
                                </td>
                                <td>
                                  28
                                </td>
                              </tr>
                              <tr className="trow">
                                <td>
                                  36
                                </td>
                                <td>
                                  38
                                </td>
                                <td>
                                  40
                                </td>
                                <td>
                                  42
                                </td>
                                <td>
                                  44
                                </td>
                                <td>
                                  46
                                </td>
                                <td>
                                  48
                                </td>
                                <td>
                                  50
                                </td>
                                <td>
                                  52
                                </td>
                                <td>
                                  54
                                </td>
                                <td>
                                  56
                                </td>
                                <td>
                                  58
                                </td>
                                <td>
                                  60
                                </td>
                                <td>
                                  62
                                </td>
                                <td>
                                  64
                                </td>
                              </tr>
                              <tr className="trow">
                                <td>
                                  32
                                </td>
                                <td>
                                  34
                                </td>
                                <td>
                                  36
                                </td>
                                <td>
                                  38
                                </td>
                                <td>
                                  40
                                </td>
                                <td>
                                  42
                                </td>
                                <td>
                                  44
                                </td>
                                <td>
                                  46
                                </td>
                                <td>
                                  48
                                </td>
                                <td>
                                  50
                                </td>
                                <td>
                                  52
                                </td>
                                <td>
                                  54
                                </td>
                                <td>
                                  56
                                </td>
                                <td>
                                  58
                                </td>
                                <td>
                                  60
                                </td>
                              </tr>
                              <tr className="trow">
                                <td>
                                  30
                                </td>
                                <td>
                                  32
                                </td>
                                <td>
                                  34
                                </td>
                                <td>
                                  36
                                </td>
                                <td>
                                  38
                                </td>
                                <td>
                                  40
                                </td>
                                <td>
                                  42
                                </td>
                                <td>
                                  44
                                </td>
                                <td>
                                  46
                                </td>
                                <td>
                                  48
                                </td>
                                <td>
                                  50
                                </td>
                                <td>
                                  52
                                </td>
                                <td>
                                  54
                                </td>
                                <td>
                                  56
                                </td>
                                <td>
                                  58
                                </td>
                              </tr>
                              <tr className="trow">
                                <td>
                                  38
                                </td>
                                <td>
                                  40
                                </td>
                                <td>
                                  42
                                </td>
                                <td>
                                  44
                                </td>
                                <td>
                                  46
                                </td>
                                <td>
                                  48
                                </td>
                                <td>
                                  50
                                </td>
                                <td>
                                  52
                                </td>
                                <td>
                                  54
                                </td>
                                <td>
                                  56
                                </td>
                                <td>
                                  58
                                </td>
                                <td>
                                  60
                                </td>
                                <td>
                                  62
                                </td>
                                <td>
                                  64
                                </td>
                                <td>
                                  66
                                </td>
                              </tr>
                              <tr className="trow">
                                <td>
                                  30
                                </td>
                                <td>
                                  32
                                </td>
                                <td>
                                  34
                                </td>
                                <td>
                                  36
                                </td>
                                <td>
                                  38
                                </td>
                                <td>
                                  40
                                </td>
                                <td>
                                  42
                                </td>
                                <td>
                                  44
                                </td>
                                <td>
                                  46
                                </td>
                                <td>
                                  48
                                </td>
                                <td>
                                  50
                                </td>
                                <td>
                                  52
                                </td>
                                <td>
                                  54
                                </td>
                                <td>
                                  56
                                </td>
                                <td>
                                  58
                                </td>
                              </tr>
                              <tr className="trow">
                                <td>
                                  4
                                </td>
                                <td>
                                  6
                                </td>
                                <td>
                                  8
                                </td>
                                <td>
                                  10
                                </td>
                                <td>
                                  12
                                </td>
                                <td>
                                  14
                                </td>
                                <td>
                                  16
                                </td>
                                <td>
                                  18
                                </td>
                                <td>
                                  20
                                </td>
                                <td>
                                  22
                                </td>
                                <td>
                                  24
                                </td>
                                <td>
                                  26
                                </td>
                                <td>
                                  28
                                </td>
                                <td>
                                  30
                                </td>
                                <td>
                                  32
                                </td>
                              </tr>
                              <tr className="trow">
                                <td>
                                  XXS
                                </td>
                                <td>
                                  XS
                                </td>
                                <td>
                                  S
                                </td>
                                <td>
                                  M
                                </td>
                                <td>
                                  M-L
                                </td>
                                <td>
                                  L
                                </td>
                                <td>
                                  XL
                                </td>
                                <td>
                                  XXL
                                </td>
                                <td>
                                  2XL
                                </td>
                                <td>
                                  3XL
                                </td>
                                <td>
                                  4XL
                                </td>
                                <td>
                                  5XL
                                </td>
                                <td>
                                  6XL
                                </td>
                                <td>
                                  7XL
                                </td>
                                <td>
                                  8XL
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-12 desktop-hide">
                        <div className="swipe-info text-center my-4">
                          <p className="text text-uppercase">
                            Swipe to see more sizes
                          </p>
                          <img
                            alt="swipe"
                            className="swipe-image"
                            loading="lazy"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/swipe-0820428dff947f6bc2f3832aed4f79ef.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div
    className="second-section bg-white p-md-0 p-lg-0 p-xl-0 photos-section"
    data-controller="listing-creation-photos"
  >
    <div className="row mb-5 bg-circular-couture-off-white mobile-bg-circular-couture-white inner-wrapper">
      <div className="col-12 px-0">
        <h2 className="header text-uppercase">
          UPLOAD PHOTOS*
        </h2>
        <p className="text-dark description">
          Please upload at least 3 photos showing the item's condition.
        </p>
        <form
          acceptCharset="UTF-8"
          action="/orphan_images.json"
          className="d-none"
          data-action="ajax:success->listing-creation-photos#processPhotoUploadSuccess"
          data-remote="true"
          encType="multipart/form-data"
          id="create-images-form"
          method="post"
        >
          <input
            autoComplete="off"
            defaultValue="tvLidtYZmzBDSYWMRNVt2k5WQIRbK9PO1WOvYsrfuViJrOOld4P4JmMIMhFUkNsE08VaynJ7BQPr98sOFz+hig=="
            name="authenticity_token"
            type="hidden"
          />
          <input
            className="d-none"
            data-action="change->listing-creation-photos#uploadFileFieldPhoto"
            id="photos-section__file-field"
            multiple
            name="image[photo][]"
            type="file"
          />
          <input
            autoComplete="off"
            id="image_crop_x"
            name="image[crop_x]"
            type="hidden"
          />
          <input
            className="d-none"
            data-disable-with="submit"
            id="save-attach-files"
            name="commit"
            type="submit"
            value="submit"
          />
        </form>
        <div
          className="row"
          id="images-section-wrapper"
        >
          <div className="col-12 images-container">
            <div className="form-row images-section mb-5">
              <div
                className="col-6 col-md-4 mobile-mb-5 image-placeholder-box"
                data-action="drop->listing-creation-photos#uploadDroppedPhoto dragenter->listing-creation-photos#preventDefaultEvents dragover->listing-creation-photos#preventDefaultEvents"
              >
                <label className="sortable-photo-label">
                  MAIN PHOTO*
                </label>
                <div className="d-flex align-items-center position-relative image-box mobile-bg-circular-couture-off-white">
                  <a
                    className="d-block mx-auto upload-link"
                    data-action="click->listing-creation-photos#showFileFieldSelector"
                    href="#"
                  >
                    UPLOAD
                  </a>
                </div>
              </div>
              <div
                className="col-6 col-md-4 mobile-mb-5 image-placeholder-box"
                data-action="drop->listing-creation-photos#uploadDroppedPhoto dragenter->listing-creation-photos#preventDefaultEvents dragover->listing-creation-photos#preventDefaultEvents"
              >
                <label className="sortable-photo-label">
                  2{' '}
                  <sup>
                    ND
                  </sup>
                  {' '}PHOTO*{' '}
                </label>
                <div className="d-flex align-items-center position-relative image-box mobile-bg-circular-couture-off-white">
                  <a
                    className="d-block mx-auto upload-link"
                    data-action="click->listing-creation-photos#showFileFieldSelector"
                    href="#"
                  >
                    UPLOAD
                  </a>
                </div>
              </div>
              <div
                className="col-6 col-md-4 mobile-mb-5 image-placeholder-box"
                data-action="drop->listing-creation-photos#uploadDroppedPhoto dragenter->listing-creation-photos#preventDefaultEvents dragover->listing-creation-photos#preventDefaultEvents"
              >
                <label className="sortable-photo-label">
                  3{' '}
                  <sup>
                    RD
                  </sup>
                  {' '}PHOTO*{' '}
                </label>
                <div className="d-flex align-items-center position-relative image-box mobile-bg-circular-couture-off-white">
                  <a
                    className="d-block mx-auto upload-link"
                    data-action="click->listing-creation-photos#showFileFieldSelector"
                    href="#"
                  >
                    UPLOAD
                  </a>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-12">
                <button
                  aria-controls="additionalPhotosCollapse"
                  aria-expanded="false"
                  className="btn btn-link custom-accordion-link collapsed px-0 w-100 text-left mobile-pt-0 pt-0 -with-arrow"
                  data-toggle="collapse"
                  href="#additionalPhotosCollapse"
                  role="button"
                >
                  {' '}ADDITIONAL PHOTOS{' '}
                </button>
              </div>
              <div className="col-12">
                <div
                  className="collapse custom-accordion-collapse "
                  id="additionalPhotosCollapse"
                >
                  <div className="form-row additional-images-section">
                    <div
                      className="col-6 col-md-4 mobile-mb-5 image-placeholder-box"
                      data-action="drop->listing-creation-photos#uploadDroppedPhoto dragenter->listing-creation-photos#preventDefaultEvents dragover->listing-creation-photos#preventDefaultEvents"
                    >
                      <div className="d-flex align-items-center position-relative image-box mobile-bg-circular-couture-off-white">
                        <a
                          className="d-block mx-auto upload-link"
                          data-action="click->listing-creation-photos#showFileFieldSelector"
                          href="#"
                        >
                          UPLOAD
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-6 col-md-4 mobile-mb-5 image-placeholder-box"
                      data-action="drop->listing-creation-photos#uploadDroppedPhoto dragenter->listing-creation-photos#preventDefaultEvents dragover->listing-creation-photos#preventDefaultEvents"
                    >
                      <div className="d-flex align-items-center position-relative image-box mobile-bg-circular-couture-off-white">
                        <a
                          className="d-block mx-auto upload-link"
                          data-action="click->listing-creation-photos#showFileFieldSelector"
                          href="#"
                        >
                          UPLOAD
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-6 col-md-4 mobile-mb-5 image-placeholder-box"
                      data-action="drop->listing-creation-photos#uploadDroppedPhoto dragenter->listing-creation-photos#preventDefaultEvents dragover->listing-creation-photos#preventDefaultEvents"
                    >
                      <div className="d-flex align-items-center position-relative image-box mobile-bg-circular-couture-off-white">
                        <a
                          className="d-block mx-auto upload-link"
                          data-action="click->listing-creation-photos#showFileFieldSelector"
                          href="#"
                        >
                          UPLOAD
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row mobile-only mb-5">
              <div className="col-12">
                <button
                  aria-controls="photoTipsCollapse"
                  aria-expanded="false"
                  className="btn btn-link custom-accordion-link collapsed photo-tips-collapse-trigger px-0 w-100 text-left mobile-pt-0 pt-0 -with-arrow"
                  data-toggle="collapse"
                  href="#photoTipsCollapse"
                  role="button"
                >
                  {' '}PHOTO TIPS{' '}
                </button>
              </div>
              <div className="col-12 mobile-photo-tips-wrapper">
                <div
                  className="collapse custom-accordion-collapse"
                  id="photoTipsCollapse"
                >
                  <h4 className="list-an-item-page__h4 mb-3 text-circular-couture-black desktop-only photo-tips-title">
                    PHOTO TIPS
                  </h4>
                  <div
                    className="photo-tips"
                    data-controller="listing-process--photo-tips-carousel"
                  >
                    <div
                      className="carousel-container photo-tips-carousel default-carousel -with-arrows"
                      id="carouselExampleFade"
                    >
                      <div className="carousel slick-initialized slick-slider slick-dotted">
                        <div
                          className="slick-list draggable"
                          style={{
                            height: '0px'
                          }}
                        >
                          <div
                            className="slick-track"
                            style={{
                              opacity: '1',
                              transform: 'translate3d(0px, 0px, 0px)',
                              width: '0px'
                            }}
                          >
                            <div
                              aria-hidden="true"
                              className="slick-slide slick-cloned"
                              data-slick-index="-1"
                              id=""
                              style={{
                                width: '0px'
                              }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/4-15fc0f73755b759be8fa8744e33b387e.jpg"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          4. Keep It Simple
                                        </h5>
                                        <p className="description text-dark">
                                          Just the item please!
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-describedby="slick-slide-control10"
                              aria-hidden="true"
                              className="slick-slide"
                              data-slick-index="0"
                              id="slick-slide10"
                              role="tabpanel"
                              style={{
                                width: '0px'
                              }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/1-4125f397404c7f680296892050f22d59.jpg"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          1. White Background
                                        </h5>
                                        <p className="description text-dark">
                                          Choose a neutral background to allow the item stand out.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-describedby="slick-slide-control11"
                              aria-hidden="true"
                              className="slick-slide"
                              data-slick-index="1"
                              id="slick-slide11"
                              role="tabpanel"
                              style={{
                                width: '0px'
                              }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/2-e77453153cb16671f5d6dea02eab5e45.png"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          2. All The Angles
                                        </h5>
                                        <p className="description text-dark">
                                          Show off all sides of the item with a selection of pictures.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-describedby="slick-slide-control12"
                              aria-hidden="true"
                              className="slick-slide"
                              data-slick-index="2"
                              id="slick-slide12"
                              role="tabpanel"
                              style={{
                                width: '0px'
                              }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/5-5bdffd1605026f9d6f89b1742759a43d.png"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          3. On A Hanger
                                        </h5>
                                        <p className="description text-dark">
                                          Ensure that it's properly positioned on the hanger.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-describedby="slick-slide-control13"
                              aria-hidden="false"
                              className="slick-slide slick-current slick-active"
                              data-slick-index="3"
                              id="slick-slide13"
                              role="tabpanel"
                              style={{
                                width: '0px'
                              }}
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/4-15fc0f73755b759be8fa8744e33b387e.jpg"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          4. Keep It Simple
                                        </h5>
                                        <p className="description text-dark">
                                          Just the item please!
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-hidden="true"
                              className="slick-slide slick-cloned"
                              data-slick-index="4"
                              id=""
                              style={{
                                width: '0px'
                              }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/1-4125f397404c7f680296892050f22d59.jpg"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          1. White Background
                                        </h5>
                                        <p className="description text-dark">
                                          Choose a neutral background to allow the item stand out.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-hidden="true"
                              className="slick-slide slick-cloned"
                              data-slick-index="5"
                              id=""
                              style={{
                                width: '0px'
                              }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/2-e77453153cb16671f5d6dea02eab5e45.png"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          2. All The Angles
                                        </h5>
                                        <p className="description text-dark">
                                          Show off all sides of the item with a selection of pictures.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-hidden="true"
                              className="slick-slide slick-cloned"
                              data-slick-index="6"
                              id=""
                              style={{
                                width: '0px'
                              }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/5-5bdffd1605026f9d6f89b1742759a43d.png"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          3. On A Hanger
                                        </h5>
                                        <p className="description text-dark">
                                          Ensure that it's properly positioned on the hanger.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              aria-hidden="true"
                              className="slick-slide slick-cloned"
                              data-slick-index="7"
                              id=""
                              style={{
                                width: '0px'
                              }}
                              tabIndex="-1"
                            >
                              <div>
                                <div
                                  className=""
                                  style={{
                                    display: 'inline-block',
                                    width: '100%'
                                  }}
                                >
                                  <div className="row">
                                    <div className="col-12 col-md-5 mobile-mt-58px">
                                      <img
                                        className="d-block w-100 p-2"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/4-15fc0f73755b759be8fa8744e33b387e.jpg"
                                      />
                                    </div>
                                    <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                                      <div className="w-100">
                                        <h5 className="title">
                                          4. Keep It Simple
                                        </h5>
                                        <p className="description text-dark">
                                          Just the item please!
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul
                          className="slick-dots"
                          role="tablist"
                          style={{
                            display: 'block'
                          }}
                        >
                          <li
                            className=""
                            role="presentation"
                          >
                            <button
                              aria-controls="slick-slide10"
                              aria-label="1 of 4"
                              id="slick-slide-control10"
                              role="tab"
                              tabIndex="-1"
                              type="button"
                            >
                              1
                            </button>
                          </li>
                          <li
                            className=""
                            role="presentation"
                          >
                            <button
                              aria-controls="slick-slide11"
                              aria-label="2 of 4"
                              id="slick-slide-control11"
                              role="tab"
                              tabIndex="-1"
                              type="button"
                            >
                              2
                            </button>
                          </li>
                          <li
                            className=""
                            role="presentation"
                          >
                            <button
                              aria-controls="slick-slide12"
                              aria-label="3 of 4"
                              id="slick-slide-control12"
                              role="tab"
                              tabIndex="-1"
                              type="button"
                            >
                              3
                            </button>
                          </li>
                          <li
                            className="slick-active"
                            role="presentation"
                          >
                            <button
                              aria-controls="slick-slide13"
                              aria-label="4 of 4"
                              aria-selected="true"
                              id="slick-slide-control13"
                              role="tab"
                              tabIndex="0"
                              type="button"
                            >
                              4
                            </button>
                          </li>
                        </ul>
                      </div>
                      <button
                        className="prev-button arrow arrow-left no-shadows slick-arrow"
                        style={{}}
                      >
                        <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/right-arrow-black-0dbc4fe0f7ae07aff835b6ad2b0df60a" />
                      </button>
                      <button
                        className="next-button arrow arrow-right no-shadows slick-arrow"
                        style={{}}
                      >
                        <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/right-arrow-black-0dbc4fe0f7ae07aff835b6ad2b0df60a" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mobile-only">
            <p className="note text-uppercase mb-0 position-relative mt-4">
              * indicates a required field
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="row mb-2 p-4 bg-circular-couture-off-white desktop-only">
      <div className="col-md-12 desktop-photo-tips-wrapper">
        <h4 className="list-an-item-page__h4 mb-3 text-circular-couture-black desktop-only photo-tips-title">
          PHOTO TIPS
        </h4>
        <div
          className="photo-tips"
          data-controller="listing-process--photo-tips-carousel"
        >
          <div
            className="carousel-container photo-tips-carousel default-carousel -with-arrows"
            id="carouselExampleFade"
          >
            <div className="carousel slick-initialized slick-slider slick-dotted">
              <div
                className="slick-list draggable"
                style={{
                  height: '136.4px'
                }}
              >
                <div
                  className="slick-track"
                  style={{
                    opacity: '1',
                    transform: 'translate3d(-1792px, 0px, 0px)',
                    width: '4032px'
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="slick-slide slick-cloned"
                    data-slick-index="-1"
                    id=""
                    style={{
                      width: '448px'
                    }}
                    tabIndex="-1"
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/4-15fc0f73755b759be8fa8744e33b387e.jpg"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                4. Keep It Simple
                              </h5>
                              <p className="description text-dark">
                                Just the item please!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-describedby="slick-slide-control00"
                    aria-hidden="true"
                    className="slick-slide"
                    data-slick-index="0"
                    id="slick-slide00"
                    role="tabpanel"
                    style={{
                      width: '448px'
                    }}
                    tabIndex="-1"
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/1-4125f397404c7f680296892050f22d59.jpg"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                1. White Background
                              </h5>
                              <p className="description text-dark">
                                Choose a neutral background to allow the item stand out.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-describedby="slick-slide-control01"
                    aria-hidden="true"
                    className="slick-slide"
                    data-slick-index="1"
                    id="slick-slide01"
                    role="tabpanel"
                    style={{
                      width: '448px'
                    }}
                    tabIndex="-1"
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/2-e77453153cb16671f5d6dea02eab5e45.png"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                2. All The Angles
                              </h5>
                              <p className="description text-dark">
                                Show off all sides of the item with a selection of pictures.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-describedby="slick-slide-control02"
                    aria-hidden="true"
                    className="slick-slide"
                    data-slick-index="2"
                    id="slick-slide02"
                    role="tabpanel"
                    style={{
                      width: '448px'
                    }}
                    tabIndex="-1"
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/5-5bdffd1605026f9d6f89b1742759a43d.png"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                3. On A Hanger
                              </h5>
                              <p className="description text-dark">
                                Ensure that it's properly positioned on the hanger.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-describedby="slick-slide-control03"
                    aria-hidden="false"
                    className="slick-slide slick-current slick-active"
                    data-slick-index="3"
                    id="slick-slide03"
                    role="tabpanel"
                    style={{
                      width: '448px'
                    }}
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/4-15fc0f73755b759be8fa8744e33b387e.jpg"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                4. Keep It Simple
                              </h5>
                              <p className="description text-dark">
                                Just the item please!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="slick-slide slick-cloned"
                    data-slick-index="4"
                    id=""
                    style={{
                      width: '448px'
                    }}
                    tabIndex="-1"
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/1-4125f397404c7f680296892050f22d59.jpg"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                1. White Background
                              </h5>
                              <p className="description text-dark">
                                Choose a neutral background to allow the item stand out.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="slick-slide slick-cloned"
                    data-slick-index="5"
                    id=""
                    style={{
                      width: '448px'
                    }}
                    tabIndex="-1"
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/2-e77453153cb16671f5d6dea02eab5e45.png"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                2. All The Angles
                              </h5>
                              <p className="description text-dark">
                                Show off all sides of the item with a selection of pictures.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="slick-slide slick-cloned"
                    data-slick-index="6"
                    id=""
                    style={{
                      width: '448px'
                    }}
                    tabIndex="-1"
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/5-5bdffd1605026f9d6f89b1742759a43d.png"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                3. On A Hanger
                              </h5>
                              <p className="description text-dark">
                                Ensure that it's properly positioned on the hanger.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="slick-slide slick-cloned"
                    data-slick-index="7"
                    id=""
                    style={{
                      width: '448px'
                    }}
                    tabIndex="-1"
                  >
                    <div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          width: '100%'
                        }}
                      >
                        <div className="row">
                          <div className="col-12 col-md-5 mobile-mt-58px">
                            <img
                              className="d-block w-100 p-2"
                              src="https://res.cloudinary.com/dcaptnlz3/image/asset/f_auto,q_auto/4-15fc0f73755b759be8fa8744e33b387e.jpg"
                            />
                          </div>
                          <div className="col-12 col-md-7 d-flex align-items-center text-center text-md-left">
                            <div className="w-100">
                              <h5 className="title">
                                4. Keep It Simple
                              </h5>
                              <p className="description text-dark">
                                Just the item please!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul
                className="slick-dots"
                role="tablist"
                style={{
                  display: 'block'
                }}
              >
                <li
                  className=""
                  role="presentation"
                >
                  <button
                    aria-controls="slick-slide00"
                    aria-label="1 of 4"
                    id="slick-slide-control00"
                    role="tab"
                    tabIndex="-1"
                    type="button"
                  >
                    1
                  </button>
                </li>
                <li
                  className=""
                  role="presentation"
                >
                  <button
                    aria-controls="slick-slide01"
                    aria-label="2 of 4"
                    id="slick-slide-control01"
                    role="tab"
                    tabIndex="-1"
                    type="button"
                  >
                    2
                  </button>
                </li>
                <li
                  className=""
                  role="presentation"
                >
                  <button
                    aria-controls="slick-slide02"
                    aria-label="3 of 4"
                    id="slick-slide-control02"
                    role="tab"
                    tabIndex="-1"
                    type="button"
                  >
                    3
                  </button>
                </li>
                <li
                  className="slick-active"
                  role="presentation"
                >
                  <button
                    aria-controls="slick-slide03"
                    aria-label="4 of 4"
                    aria-selected="true"
                    id="slick-slide-control03"
                    role="tab"
                    tabIndex="0"
                    type="button"
                  >
                    4
                  </button>
                </li>
              </ul>
            </div>
            <button
              className="prev-button arrow arrow-left no-shadows slick-arrow"
              style={{}}
            >
              <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/right-arrow-black-0dbc4fe0f7ae07aff835b6ad2b0df60a" />
            </button>
            <button
              className="next-button arrow arrow-right no-shadows slick-arrow"
              style={{}}
            >
              <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/right-arrow-black-0dbc4fe0f7ae07aff835b6ad2b0df60a" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade default-modal mobile-no-scrolls"
    data-controller="cropper-modal"
    data-target="cropper-modal.modal"
    id="cropperImageModal"
    role="dialog"
    tabIndex="-1"
  >
    <div
      className="modal-dialog rounded-0 modal-dialog-centered"
      role="document"
    >
      <div className="modal-content p-5 rounded-0 mobile-px-4">
        <div className="modal-header border-0 d-block pt-0">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
          >
            X
          </button>
          <div className="row">
            <div className="col-12">
              <h3 className="modal-title text-center">
                Crop Image
              </h3>
            </div>
          </div>
        </div>
        <div
          className="modal-body py-4 px-5 mobile-px-0"
          style={{
            minHeight: '320px'
          }}
        >
          <div className="mx-auto d-block">
            <input
              data-target="cropper-modal.imageId"
              id="image-id"
              type="hidden"
            />
            <input
              data-target="cropper-modal.imageCropX"
              id="image-crop-x"
              type="hidden"
            />
            <input
              data-target="cropper-modal.imageCropY"
              id="image-crop-y"
              type="hidden"
            />
            <input
              data-target="cropper-modal.imageCropW"
              id="image-crop-w"
              type="hidden"
            />
            <input
              data-target="cropper-modal.imageCropH"
              id="image-crop-h"
              type="hidden"
            />
            <div className="position-absolute cropper-zoom-buttons-container">
              <div className="w-100">
                <button
                  className="zoom-button btn-zoom-in no-decorations"
                  data-action="cropper-modal#cropperZoomIn"
                  id="cropper_zoom_in"
                  type="button"
                >
                  <svg
                    height="60"
                    viewBox="0 0 60 60"
                    width="60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '                                .a {                                  fill: #592530;                                }                                      .b {                                  fill: none;                                  stroke: #f9f8f6;                                  stroke-linecap: round;                                  stroke-linejoin: round;                                  stroke-width: 2px;                                }                              '
                        }}
                       />
                    </defs>
                    <g transform="translate(-1087 -475)">
                      <path
                        className="a"
                        d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0Z"
                        transform="translate(1087 475)"
                      />
                      <g transform="translate(1102.789 490.789)">
                        <path
                          className="b"
                          d="M29.763,17.132A12.632,12.632,0,1,1,17.132,4.5,12.632,12.632,0,0,1,29.763,17.132Z"
                          transform="translate(-4.5 -4.5)"
                        />
                        <path
                          className="b"
                          d="M31.843,31.843l-6.868-6.868"
                          transform="translate(-3.422 -3.422)"
                        />
                        <path
                          className="b"
                          d="M16.5,12v9.474"
                          transform="translate(-3.868 -4.105)"
                        />
                        <path
                          className="b"
                          d="M12,16.5h9.474"
                          transform="translate(-4.105 -3.868)"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
                <br />
                <button
                  className="zoom-button btn-zoom-out no-decorations"
                  data-action="cropper-modal#cropperZoomOut"
                  id="cropper_zoom_out"
                  type="button"
                >
                  <svg
                    height="60"
                    viewBox="0 0 60 60"
                    width="60"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: '                                .a {                                  fill: #592530;                                }                                      .b {                                  fill: none;                                  stroke: #f9f8f6;                                  stroke-linecap: round;                                  stroke-linejoin: round;                                  stroke-width: 2px;                                }                              '
                        }}
                       />
                    </defs>
                    <g transform="translate(-1087 -531)">
                      <circle
                        className="a"
                        cx="30"
                        cy="30"
                        r="30"
                        transform="translate(1087 531)"
                      />
                      <g transform="translate(1102.821 546.821)">
                        <path
                          className="b"
                          d="M29.946,17.223A12.723,12.723,0,1,1,17.223,4.5,12.723,12.723,0,0,1,29.946,17.223Z"
                          transform="translate(-4.5 -4.5)"
                        />
                        <path
                          className="b"
                          d="M31.567,31.567l-6.592-6.592"
                          transform="translate(-3.09 -3.09)"
                        />
                        <path
                          className="b"
                          d="M12,16.5h9.093"
                          transform="translate(-3.923 -3.843)"
                        />
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <img
              className="d-none cropper-image"
              src=""
              style={{
                maxWidth: '100% !important'
              }}
            />
          </div>
        </div>
        <div className="modal-footer border-0 px-0 mobile-pb-0 mobile-pt-5">
          <button
            className="btn btn-primary -dark-red form-control rounded-0 px-0 mobile-mt-4"
            data-action="cropper-modal#saveCroppedImage"
            id="cropped-image-save"
            type="button"
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade default-modal -mobile-centered mobile-no-scrolls"
    data-controller="request-designers"
    id="request-designer-modal"
    role="dialog"
    tabIndex="-1"
  >
    <div
      className="modal-dialog rounded-0"
      role="document"
    >
      <div className="modal-content p-4 pt-5 rounded-0">
        <div className="modal-header border-0 d-block py-0">
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
          >
            X
          </button>
          <div className="row">
            <div className="col-12">
              <h3 className="modal-title text-center">
                Request A Designer
              </h3>
            </div>
          </div>
        </div>
        <div className="modal-body pb-4 mobile-px-0">
          <div
            className="form-container"
            data-target="request-designers.formContainer"
          >
            <form
              acceptCharset="UTF-8"
              action="/request_designers.json"
              className="default-form"
              data-action="ajax:success->request-designers#processFormSuccess"
              data-remote="true"
              method="post"
            >
              <input
                autoComplete="off"
                defaultValue="tvLidtYZmzBDSYWMRNVt2k5WQIRbK9PO1WOvYsrfuViJrOOld4P4JmMIMhFUkNsE08VaynJ7BQPr98sOFz+hig=="
                name="authenticity_token"
                type="hidden"
              />
              <div className="form-row">
                <div className="form-group col-12">
                  <label>
                    DESIGNER NAME*
                  </label>
                  <input
                    className="form-control"
                    data-target="request-designers.designerBrandName"
                    id="designer_brand_name"
                    name="designer_brand_name"
                    type="text"
                  />
                </div>
                <div className="form-group col-12">
                  <input
                    className="btn btn-primary -dark-red form-control"
                    data-disable-with="SUBMIT MY REQUEST"
                    name="commit"
                    type="submit"
                    value="SUBMIT MY REQUEST"
                  />
                </div>
              </div>
            </form>
            <div className="modal-footer text-center border-0 pt-0 mobile-only">
              <a
                className="text-circular-couture-dark-red border-bottom border-circular-couture-dark-red mx-auto"
                data-dismiss="modal"
                href="#"
              >
                {`< GO BACK`}
              </a>
            </div>
          </div>
          <div
            className="success-message-container d-none row"
            data-target="request-designers.successMessageContainer"
          >
            <div className="col-12 col-md-10 mx-auto text-center mb-4">
              {' '}Thanks for requesting a new designer! A member of our team will be in touch to let you know if it's approved.{' '}
            </div>
            <div className="col-12 col-md-10 mx-auto text-center mb-5">
              {' '}Feel free to try and list another item from a different designer in the meantime!{' '}
            </div>
            <div className="col-12 col-md-10 mx-auto text-center">
              <button
                className="btn btn-primary -dark-red form-control"
                data-action="request-designers#resetDesignerRequestForm"
              >
                LIST ANOTHER ITEM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <EmailSubscription/>
        <Footer/>
        </>
    )
}
export default ListingNew;