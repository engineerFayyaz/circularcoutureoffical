import React, { useState, useEffect } from "react";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import UserHeader from "../../Components/UserHeader";
import MainHeader from "../MainHeader";
import MainHeaderAdmin from "../MainHeaderAdmin";
import { getUserFromLocalStorage } from "../../storage/loggedInUserLocalSt";
import axios from "axios";

const TopHeader = () => {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [products, setProducts] = useState({ results: [] }); // Initialize products state with an empty results array
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let u = getUserFromLocalStorage();

    axios
      .get("https://localhost:7220/api/products")
      .then((response) => {
        // console.log("response data",response.data)
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filtered products with all products
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });

    setLoggedInUser(u);
    fetchDesigners();
  }, [filteredProducts]);

  const [dropdownTimeoutId1, setDropdownTimeoutId1] = useState(null);
  const [dropdownTimeoutId2, setDropdownTimeoutId2] = useState(null);
  const [dropdownTimeoutId3, setDropdownTimeoutId3] = useState(null);
  const [designers, setDesigners] = useState([]);

  const fetchDesigners = async () => {
    try {
      const response = await fetch(
        "https://circularclientapi.azurewebsites.net/api/product-designers"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch designers");
      }
      const data = await response.json();
      setDesigners(data.results.sort((a, b) => a.name.localeCompare(b.name))); // Sort designers by name
    } catch (error) {
      console.error("Error fetching designers:", error);
    }
  };

  const handleDropdownOpen1 = () => {
    clearTimeout(dropdownTimeoutId1);
    setIsDropdownOpen1(true);
  };

  const handleDropdownClose1 = () => {
    setDropdownTimeoutId1(
      setTimeout(() => {
        setIsDropdownOpen1(false);
      }, 500)
    );
  };

  const handleDropdownOpen2 = () => {
    clearTimeout(dropdownTimeoutId2);
    setIsDropdownOpen2(true);
  };

  const handleDropdownClose2 = () => {
    setDropdownTimeoutId2(
      setTimeout(() => {
        setIsDropdownOpen2(false);
      }, 500)
    );
  };

  const handleDropdownOpen3 = () => {
    clearTimeout(dropdownTimeoutId3);
    setIsDropdownOpen3(true);
  };

  const handleDropdownClose3 = () => {
    setDropdownTimeoutId3(
      setTimeout(() => {
        setIsDropdownOpen3(false);
      }, 500)
    );
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    filterProducts(searchTerm);
  };

  // Inside filterProducts function
  // Inside filterProducts function
  const filterProducts = (searchTerm) => {
    const filtered = products.results.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filtered); // Update filtered products directly with the filtered array
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trigger filtering logic when Enter key is pressed
      filterProducts(searchTerm);
    }
  };

  return (
    <>
      <div
        className="fixed-top header scroll-down pt-2"
        data-controller="header"
        data-target="header.container"
        data-action="scroll@window->header#hideAnnouncementBanner"
      >
        <UserHeader />
        {/* <MainHeader /> */}
        {loggedInUser ? <MainHeaderAdmin /> : <MainHeader />}{" "}
        {/* Conditional rendering based on authentication state */}
        <div className="container-fluid main-mobile-header-section">
          <div className="row h-100 align-items-center m-sm-0">
            <div className="col-2 col-lg-2 col-md-2">
              <Link
                to="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
              >
                <FontAwesomeIcon icon={faBars} className="mb-1" />
              </Link>
              <span style={{ marginLeft: 10 }}>
                <turbo-frame id="account_credit_balance_header" />
              </span>
            </div>
            <div className="col-7 col-lg-7 col-md-7 text-sm-start text-center">
              <Link to="/">
                <img
                  alt="CIRCULAR COUTURE Logo"
                  width={200}
                  height={21}
                  className="img img-responsive circular-couture-logo"
                  src="/images/CC TM Logo.png"
                />
              </Link>
            </div>
            <div className="col-3 col-lg-3 col-md-3 text-right">
              <div >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="search-image"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo"
                />
              </div>
              
              {/* <ul>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <li key={product.id}>{product.name}</li>
                  ))
                ) : (
                  <li>No products found</li>
                )}
              </ul> */}
            </div>
          </div>
          <div id="demo" class="row collapse"
          style={{
            position: "absolute",
            left: "0",
            padding: "0px",
            margin: "0px ",
            width: "100%",
            top: "9rem",
          }}>
                  <input
                    type="text"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={handleSearch} // Ensure that handleSearch is correctly bound
                    className="search-input py-2"
                    onKeyPress={handleKeyPress} // Add this event listener
                    style={{
                      border: "1px solid black",
                      filter: "drop-shadow(2px 4px 6px black)",
                    }}
                  />
                </div>
        </div>
        <nav
          className="navbar navbar-menu-section border-bottom border-1 border-secondary"
          data-controller="mega-menu-contents"
        >
          <div className="row no-gutters fixed-container p-0 flex-nowrap">
            <div className="links-wrapper text-uppercase">
              <div className="top-header-width-set-main col-12 row no-gutters p-0 justify-content-between align-items-center mr-3">
                <Link
                  to="/Collections/NewArrival"
                  className="nav-link with-mega-menu-content"

                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  New In
                </Link>

                <Link
                  target="_top"
                  className="nav-link with-mega-menu-content"
                  to="/Designer"
                  onMouseEnter={handleDropdownOpen3}
                  onMouseLeave={handleDropdownClose3}
                >
                  Designers
                </Link>

                <Link
                  target="_top"
                  className="nav-link with-mega-menu-content new-menu-hover"
                  to="/Collections/clothing"
                  onMouseEnter={handleDropdownOpen1}
                  onMouseLeave={handleDropdownClose1}
                >
                  Clothing
                </Link>
                <Link
                  target="_top"
                  className="nav-link with-mega-menu-content accessories-menu-hover"
                  to="/Collections/Accessories"
                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  Accessories
                </Link>
                <Link
                  target="_top"
                  className="nav-link "
                  to="/Collections/Resale"
                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  Resale
                </Link>
                <Link
                  target="_top"
                  className="nav-link "
                  to="/Collections/Separates"
                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  SEPARATES
                </Link>
                <Link
                  target="_top"
                  className="nav-link "
                  to="/Collections/Occasions"
                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  OCCASIONS
                </Link>
                <Link
                  target="_top"
                  className="nav-link "
                  to="/Kids"
                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  KIDS
                </Link>

                <Link
                  target="_top"
                  className="nav-link "
                  to="/Collections/Resale"
                  onMouseEnter={handleDropdownOpen2}
                  onMouseLeave={handleDropdownClose2}
                >
                  HELP & INFO
                </Link>
                <Link
                  target="_top"
                  className="nav-link"
                  to="/Edits"
                  // onMouseEnter={handleDropdownOpen}
                  // onMouseLeave={handleDropdownClose}
                >
                  Edits
                </Link>
                {/* <Link
                  data-action="mouseover->mega-menu-contents#hideMenu"
                  target="_top"
                  className="nav-link List-By-Wardrobe"
                  to="/ListItems/ListStepOne"
                 
                >
                  List By Wardrobe
                </Link> */}
                <Link className="" style={{ width: "fit-content" }}>
                  <FontAwesomeIcon
                    className="search-icon-main-nav"
                    icon={faSearch}
                    style={{ marginRight: "5px" }}
                  />
                  <input
                    type="search"
                    placeholder="search..."
                    className="nav-link"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="links-content-wrapper"
            onMouseEnter={handleDropdownOpen1}
            onMouseLeave={handleDropdownClose1}
            // Add some styling for visualization
          >
            <div
              className={`dropdown-content ${isDropdownOpen1 ? "active" : ""}`}
              style={{ display: isDropdownOpen1 ? "block" : "none" }}
            >
              <div className="link-content -just-in">
                <turbo-frame
                  loading="lazy"
                  id="just_in"
                  src="https://www.circular-couturecollective.com/mega_menu_contents/just_in"
                  complete=""
                >
                  <div className="row d-flex justify-content-around">
                    <div className="col-md-2 col-xl-2">
                      <div className="links">
                        <div className="header">
                          <h6 className="text-dark">COLOTHING</h6>
                        </div>
                        <div className="body">
                          <Link target="_top" to="/Collections/Clothing">
                            All Clothing
                          </Link>
                          <Link target="_top " to="/Collections/Dresses">
                            Dresses
                          </Link>
                          <Link target="_top " to="/Collections/Tops">
                            Tops
                          </Link>
                          <Link target="_top" to="/Collections/Skirts">
                            Skirts
                          </Link>
                          <Link target="_top" to="/Collections/Trousers">
                            Trousers
                          </Link>
                          <Link target="_top" to="/Collections/Sweaters">
                            Sweaters
                          </Link>
                          <Link target="_top" to="/Collections/OuterWear">
                            Outerwear
                          </Link>
                          <Link target="_top" to="/Collections/JumpSuit">
                            Jumpsuits
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-xl-3">
                      <div className="links">
                        <div className="header">
                          <h6 className="text-dark">DRESSES</h6>
                        </div>
                        <div className="body">
                          <Link target="_top" to="/Collections/NewArrival">
                            All Dresses
                          </Link>
                          <Link target="_top " to="/Collections/DressMini">
                            Mini
                          </Link>
                          <Link
                            target="_top "
                            to="/Collections/DressKneeLength"
                          >
                            Kee Length
                          </Link>
                          <Link target="_top" to="/Collections/DressMidi">
                            Midi
                          </Link>
                          <Link target="_top" to="/Collections/DressMaxi">
                            Maxi
                          </Link>
                          <Link target="_top" to="/Collections/DressGowns">
                            Gowns
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex justify-content-end">
                        <img
                          src="/images/background-images/collage(1).png"
                          alt=""
                          width={350}
                        />
                      </div>
                      <div className="autumn-button d-flex justify-content-start">
                        <h1>
                          <span>AUTUMN '23</span>
                        </h1>
                        <button className="btn"> view collection</button>
                      </div>
                    </div>
                  </div>
                </turbo-frame>
              </div>
            </div>
          </div>

          {/* 2nd dropdown */}

          <div
            className="links-content-wrapper"
            onMouseEnter={handleDropdownOpen2}
            onMouseLeave={handleDropdownClose2}
            // Add some styling for visualization
          >
            <div
              className={`dropdown-content ${isDropdownOpen2 ? "active" : ""}`}
              style={{ display: isDropdownOpen2 ? "block" : "none" }}
            >
              <div className="link-content -just-in">
                <turbo-frame
                  loading="lazy"
                  id="just_in"
                  src="https://www.circular-couturecollective.com/mega_menu_contents/just_in"
                  complete=""
                >
                  <div className="row d-flex justify-content-around">
                    <div className="col-md-3 col-xl-3">
                      <div className="links">
                        <div className="header">
                          <h6 className="text-dark">Customer Service</h6>
                        </div>
                        <div className="body">
                          <Link target="_top" to="/howtolend">
                            How It Works
                          </Link>
                          <Link target="_top " to="/FAQ">
                            FAQ
                          </Link>
                          <Link target="_top " to="/Return">
                            Return & Refunds
                          </Link>
                          <Link target="_top" to="/RentalArguments">
                            Rental Agreemant
                          </Link>
                          <Link target="_top" to="/ATDREward">
                            ATD Rewards
                          </Link>
                          <Link target="_top" to="/MakeEnquiry">
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-xl-3">
                      <div className="links">
                        <div className="header">
                          <h6 className="text-dark">ABOUT ATD</h6>
                        </div>
                        <div className="body">
                          <Link target="_top" to="/About">
                            About Us
                          </Link>
                          <Link target="_top " to="/Sustainability">
                            Sustainability
                          </Link>
                          <Link target="_top " to="/TermsofService">
                            Terms of Service
                          </Link>
                          <Link target="_top" to="/Privacy-Policy">
                            Privacy Policy
                          </Link>
                          <Link target="_top" to="/Contact">
                            Contact
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex flex-column justify-content-end">
                        <h6 className="text-dark">ABOUT US</h6>
                        <img
                          src="/images/gallery-images/Help1.jpg"
                          alt=""
                          width={250}
                        />
                        <p className="pt-2">Read our story</p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex flex-column">
                        <h6 className="text-dark">FAQ's</h6>

                        <img
                          src="/images/gallery-images/Help2.jpg"
                          alt=""
                          width={250}
                        />
                        <p className="pt-2">All your questions answered</p>
                      </div>
                    </div>
                  </div>
                </turbo-frame>
              </div>
            </div>
          </div>

          {/* 2nd dropdown ends */}

          {/* 3rd dropdowns starts */}

          <div
            className="links-content-wrapper"
            onMouseEnter={handleDropdownOpen3}
            onMouseLeave={handleDropdownClose3}
          >
            <div
              className={`dropdown-content ${isDropdownOpen3 ? "active" : ""}`}
              style={{ display: isDropdownOpen3 ? "block" : "none" }}
            >
              <div className="link-content -designers ">
                <turbo-frame loading="lazy" id="designers" complete="">
                  <div className="row">
                    <div className="col-md-4 col-xl-3">
                      <div className="links">
                        <div className="header">
                          <Link target="_top" to="/designer">
                            RENT ALL DESIGNERS
                          </Link>
                        </div>
                        <div className="body">
                          {designers.slice(0, 5).map((designer, index) => (
                            <li
                              key={index}
                              className="footer__menu-list"
                              style={{ alignItems: "center", fontSize: "15px" }}
                            >
                              <Link
                                to={`/designers/${
                                  designer.id
                                }/${encodeURIComponent(designer.name)}`}
                              >
                                {designer.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                        <div className="footer">
                          <Link target="_top" to="/designer">
                            VIEW ALL
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-xl-9">
                      <div className="content">
                        <div className="header">
                          <Link target="_top" to="/designer">
                            FEATURED DESIGNERS
                          </Link>
                        </div>
                        <div className="body">
                          <div className="row">
                            <div className="col-md-6 col-xl-4">
                              <Link
                                className="photo-link"
                                target="_top"
                                to="/Designer"
                              >
                                <div className="title">SS24</div>
                                <img
                                  width={534}
                                  height={330}
                                  className="-sm mt-0"
                                  target="_top"
                                  src="/images/gallery-images/designer-dropdown-1.webp"
                                />
                                <div className="sub-title">SAU LEE</div>
                              </Link>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <Link
                                className="photo-link"
                                target="_top"
                                to="/Designer"
                              >
                                <div className="title">NEW IN</div>
                                <img
                                  width={534}
                                  height={330}
                                  className="-sm mt-0"
                                  target="_top"
                                  src="/images/gallery-images/designer-dropdown-2.webp"
                                />
                                <div className="sub-title">NET-A-PORTER</div>
                              </Link>
                            </div>
                            <div className="col-md-6 col-xl-4">
                              <Link
                                className="photo-link"
                                target="_top"
                                to="/Designer"
                              >
                                <div className="title">JUST ARRIVED</div>
                                <img
                                  width={534}
                                  height={330}
                                  className="-sm mt-0"
                                  target="_top"
                                  src="/images/gallery-images/designer-dropdown-3.webp"
                                />
                                <div className="sub-title">ACLER</div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </turbo-frame>
              </div>
            </div>
          </div>

          {/* 3rd dropdowns ends*/}
        </nav>
      </div>

      <div
        className="offcanvas offcanvas-start w-60"
        tabIndex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header">
          <h6 className="offcanvas-title d-sm-block" id="offcanvas">
            <Link
              to={"/Signin"}
              style={{ fontSize: "11px !important", cursor: "pointer" }}
              data-toggle="modal"
              data-target="#signin-modal"
            >
              <b>SIGN IN/ REGISTER</b>
            </Link>
          </h6>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body px-0">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start"
            id="menu"
          >
            <li className="nav-item">
              <Link
                to="/Collections/NewArrival"
                className="nav-link text-truncate"
              >
                <span className="ms-1  d-md-inline">New In</span>
              </Link>
            </li>
            <li className="dropdown w-100">
              <Link
                to="/Designer"
                className="nav-link dropdown-toggle text-truncate"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="ms-1  d-md-inline">Designer</span>
              </Link>
              <ul
                className="dropdown-menu w-100 text-small shadow"
                aria-labelledby="dropdown"
              >
                <li className="w-100">
                  <Link className="dropdown-item" to="/Designer">
                    <b>Rent All Designer</b>
                  </Link>
                </li>
                <li className="w-100">
                  <Link className="dropdown-item" to="/Designers/Alemais">
                    THE VAMPIRES WIFE
                  </Link>
                </li>
                <li className="w-100">
                  <Link className="dropdown-item" to="/Designers/Alemais">
                    RIXO
                  </Link>
                </li>
                <li className="w-100">
                  <Link className="dropdown-item" to="/Designers/Alemais">
                    SELF-PORTRAIT
                  </Link>
                </li>
                <li className="w-100">
                  <Link className="dropdown-item" to="/Designers/Alemais">
                    SALONI
                  </Link>
                </li>
                <li className="w-100">
                  <Link className="dropdown-item" to="/Designers/Alemais">
                    16ARLINGTON
                  </Link>
                </li>
                <li className="w-100">
                  <Link className="dropdown-item view-all" to="/Designer">
                    VIEW ALL
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item w-100">
              <Link
                to="/Collections/Accessories"
                className="nav-link text-truncate"
              >
                <span className="ms-1  d-md-inline">Accessories</span>
              </Link>
            </li>
            <li className="dropdown w-100">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-truncate"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="ms-1 d-md-inline">Clothing</span>
              </Link>
              <ul
                className="dropdown-menu w-100 text-small shadow"
                aria-labelledby="dropdown"
              >
                <li className="dropdown w-100">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle text-truncate"
                    id="dropdown1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="ms-1 d-md-inline">
                      <b>CLOTHINGS</b>
                    </span>
                  </Link>
                  <ul
                    className="dropdown-menu w-100 text-small shadow"
                    aria-labelledby="dropdown1"
                  >
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/Clothing"
                      >
                        ALL CLOTHINGS
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Collections/Dresses">
                        DRESSES
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Collections/Tops">
                        TOPS
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Collections/Skirts">
                        SKIRTS
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/Trousers"
                      >
                        TROUSERS
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/Sweaters"
                      >
                        SWEATERS
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/OuterWear"
                      >
                        OUTERWEAR
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/Jumpsuits"
                      >
                        JUMPSUITS
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown w-100">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle text-truncate"
                    id="dropdown2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="ms-1 d-md-inline">
                      <b>DRESSES</b>
                    </span>
                  </Link>
                  <ul
                    className="dropdown-menu w-100 text-small shadow"
                    aria-labelledby="dropdown2"
                  >
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Collections/Dresses">
                        ALL DRESSES
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/DressMini"
                      >
                        MINI
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/Dresskneelength"
                      >
                        KNEE LENGTH
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/DressMaxi"
                      >
                        MAXI
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/DressMidi"
                      >
                        MIDI
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        className="dropdown-item"
                        to="/Collections/DressGowns"
                      >
                        GOWNS
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item w-100">
              <Link to="/Collections/Resale" className="nav-link text-truncate">
                <span className="ms-1  d-md-inline">RESALE</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link
                to="/Collections/Separates"
                className="nav-link text-truncate"
              >
                <span className="ms-1  d-md-inline">SEPARATES</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link
                to="/Collections/Occassion"
                className="nav-link text-truncate"
              >
                <span className="ms-1  d-md-inline">OCCASIONS</span>
              </Link>
            </li>
            <li className="nav-item w-100">
              <Link to="/Kids" className="nav-link text-truncate">
                <span className="ms-1  d-md-inline">KIDS</span>
              </Link>
            </li>
            <li className="dropdown w-100">
              <Link
                to="#"
                className="nav-link dropdown-toggle text-truncate"
                id="dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="ms-1 d-md-inline">HELP & INFO</span>
              </Link>
              <ul
                className="dropdown-menu w-100 text-small shadow"
                aria-labelledby="dropdown"
              >
                <li className="dropdown w-100">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle text-truncate"
                    id="dropdown1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="ms-1 d-md-inline">
                      <b>CUSTOMER SERVICES</b>
                    </span>
                  </Link>
                  <ul
                    className="dropdown-menu w-100 text-small shadow"
                    aria-labelledby="dropdown1"
                  >
                    <li className="w-100">
                      <Link className="dropdown-item" to="/HowToLend">
                        HOW IT WORKS
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Return">
                        RETURN & REFUNDS
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/RentalArguments">
                        RENTAL AGREEMANT
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/ATDReward">
                        ATD REWARD
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Enquiry">
                        MAKE AN INQUIRY
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown w-100">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle text-truncate"
                    id="dropdown2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="ms-1 d-md-inline">
                      <b>ABOUT ATD</b>
                    </span>
                  </Link>
                  <ul
                    className="dropdown-menu w-100 text-small shadow"
                    aria-labelledby="dropdown2"
                  >
                    <li className="w-100">
                      <Link className="dropdown-item" to="/About">
                        ABOUT US
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Sustainability">
                        SUSTAINABILITY
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/TermsOfService">
                        TERMS OF SEFRVICES
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Privacy-Policy">
                        PRIVACY POLICY
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link className="dropdown-item" to="/Contact">
                        CONTACT
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item w-100">
              <Link to="/Edits" className="nav-link text-truncate">
                <span className="ms-1  d-md-inline">Edits</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default TopHeader;
