import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReactImageGallery from "react-image-gallery";
import "react-rater/lib/react-rater.css";
import "../../Pages/ProductLanding/ProductLanding.css";
import ProductLandingMoreInfo from "../../Components/ProductLandingMoreInfo"
import TopHeader from "../../Components/TopHeader";
import NowTrending from "../../Components/NowTrending";
import GetEdits from "../../Components/GetEdits";
import Reviews from "../../Components/Reviews";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserFromLocalStorage } from '../../storage/loggedInUserLocalSt';
const ProductLanding = () => {

  const [showMap, setShowMap] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  function handleRadioChange(event) {
    setShowMap(event.target.checked);
  }

  const [receiveDate, setReceiveDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());

  useEffect(() => {
    // Here you would calculate the return date based on the receive date
    const newReturnDate = new Date(
      receiveDate.getTime() + 4 * 24 * 60 * 60 * 1000
    );

    setReturnDate(newReturnDate);
    setUser(getUserFromLocalStorage());   
  }, [receiveDate]);

  const handleReceiveDateChange = (event) => {
    setReceiveDate(new Date(event.target.value));
  };

  const toggleWishlist = async (productId) => {
    if (!user) {
      toast.error('Please login first');
      return;
    }

    try {
      const response = await fetch('https://localhost:7220/api/wishlist-products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: productId,
          userId: user.id,
          deleted: true,
          createdDate: new Date().toISOString()
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add product to wishlist');
      }

      // Update wishlist state
      setWishlist([...wishlist, productId]);

      toast.success('Product added to wishlist');
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
      toast.error(error.message);
    }
  };

  const { productId, productName } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`https://localhost:7220/api/products/${productId}`);
              if (!response.ok) {
                  throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setProduct(data.results);
              setLoading(false);
          } catch (error) {
              console.error('Error fetching data:', error);
              setLoading(false);
          }
      };

      fetchData();

      // Clean up function
      return () => {
          // Any cleanup code here
      };
  }, [productId]);

  useEffect(() => {
      if (product && product.productImages && product.productImages.length > 0) {
          setMainImage(product.productImages[0].url);
      }
  }, [product]);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (!product) {
      return <div>Product not found</div>;
  }

  const { name, brand, id, typeId, categoryId, size, internationalSize, isAvailable, color, condition, sellPrice, rentPrice4Days, rentPrice8Days, rentPrice16Days, rentPrice30Days, rrp, code, details, isEbayStore, deletedBy, modifiedBy, createdBy, productImages } = product;

  const thumbnails = productImages && productImages.map((image, index) => ({
    original: image.url,
    thumbnail: image.url,
  }));

  const calculateRentForOneDay = (rentPrice) => {
      const rentPerDay = parseFloat(rentPrice.replace("AU$", "")) / 8;
      return rentPerDay.toFixed(2);
  };
 

  const productDetailItem = {
   
    // title: {name},
    // brand: "Nya Dress",
    availability: true,
    brand: "Nya Dress",
    category: "Sofa",
    sku: "BE45VGTRK",
    price: "36,124.69",
    previousPrice: "305,253.59",
    description:
      "‘Per occasion’ rentals are for a period of 5 days. The price above has been set on the basis of you having the item for 5 days before sending back to the Lender. Please message the seller if you wish to request a longer rental period.",
    size: ["AU 10 | ", "M", "| UK 10 ", "| US 6"],
    color: ["Multi-coloured"],
  };

  return (
    <div>
      <TopHeader />
      <section className="container  d-flex flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10 product-landing-detail-section">
        {/* image gallery */}
        <div className="container mx-auto px-4 w-40">
  <ReactImageGallery
    showBullets={false}
    showFullscreenButton={false}
    showPlayButton={false}
    items={thumbnails || []}
    className={"w-auto"}
    onSlide={(index) => setMainImage(productImages[index].url)} // Set main image on slide change
    renderCustomControls={() => (
      <button
        className="wishlist-icon"
        onClick={() => toggleWishlist(product.id)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: "3",
          cursor: "pointer",
          background: "transparent",
          border: "none",
        }}
      >
        {wishlist.includes(product.id) ? (
          <img
            alt="An icon of a heart"
            src="https://res.cloudinary.com/dcaptnlz3/image/asset/shaded-heart-72ef5d386ff6a38664ff1bb60bfdddff.svg"
            style={{ fill: 'red' }}
          />
        ) : (
          <img
            alt="An icon of a heart"
            src="https://res.cloudinary.com/dcaptnlz3/image/asset/heart-7dd5f36c98ccda2c8242b92c95914d6e.svg"
          />
        )}
      </button>
    )}
  />
</div>
  
        {/* description  */}

        <div className="mx-auto px-5 lg:px-5 w-60 ">
          <h2 className="pt-3 text-2xl font-bold lg:pt-0">
            {name}
          </h2>
          <div className="mt-1">
            <div className="flex items-center">
              <b>{brand}</b>
            </div>
          </div>

          <p className="mt-4" style={{ fontSize: "20px", color: "black" }}>
            <b>
              {sellPrice} <small>/ Occasion</small>
            </b>
          </p>
          <p
            className="text-gray-400 mt-0"
            style={{ fontSize: "17px", lineHeight: "0px" }}
          >
            Retail Price: AU$ {rrp}
          </p>
          <p
            className="pt-3 text-sm leading-5 text-gray-500 "
            style={{ fontSize: "15px", color: "black", textAlign: "justify" }}
          >
            {details}
          </p>
          <div className="mt-6 d-flex gap-3">
            <p className="pb-2 ">Size:</p>
            <div className="d-flex gap-1">
             {size}
            </div>
          </div>
          <div className="mt-6 d-flex gap-3">
            <p className="pb-2">Color:</p>
            <div className="d-flex ">
              {color}
            </div>
          </div>
          <div className="mt-6">
            <div className="product-heading">
              <h4>Delivery Method</h4>
            </div>
            <div className="accordian-box mt-2">
              <div className="radio-wrapper">
                <label className="radio-button">
                  <input name="radio-group" type="radio" />
                  <span className="radio-checkmark" />
                  <span className="radio-label">Shipping: Add Rs0.0</span>
                </label>
              </div>
              <div className="radio-wrapper">
                <label className="radio-button">
                  <input
                    id="option1"
                    name="radio-group"
                    type="radio"
                    onChange={handleRadioChange}
                    checked={showMap}
                  />
                  <span className="radio-checkmark" />
                  <span className="radio-label">
                    Pickup: Hazelwood Park SA 5066, Australia
                  </span>
                  <div style={{ width: "30%" }} className="text-end">
                    <svg
                      width="24px"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0003 13.5455C13.8077 13.5455 15.273 12.0802 15.273 10.2727C15.273 8.46525 13.8077 7 12.0003 7C10.1928 7 8.72754 8.46525 8.72754 10.2727C8.72754 12.0802 10.1928 13.5455 12.0003 13.5455Z"
                        stroke="#222222"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="#222222"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </label>
                {showMap && (
                  <div id="map" style={{ height: "300px", width: "100%" }}>
                    {/* Insert map rendering code here */}
                    {/* For example, you can use Google Maps API */}
                    <iframe
                      title="map"
                      width="100%"
                      height="300"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={`https://www.google.com/maps/embed/v1/place?q=Hazelwood%20Park%20SA%205066%2C%20Australia&key=YOUR_API_KEY`}
                      // allowFullScreen
                    ></iframe>
                  </div>
                )}
                {!showMap && (
                  <div id="map" style={{ display: "none" }}>
                    {/* Insert map rendering code here */}
                    {/* For example, you can use Google Maps API */}
                    <iframe
                      title="map"
                      width="100%"
                      height="300"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={`https://www.google.com/maps/embed/v1/place?q=Hazelwood%20Park%20SA%205066%2C%20Australia&key=YOUR_API_KEY`}
                      // allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-3 delivery-date-box">
              <div className="date-heading">
                <h4>Please select the delivery date.</h4>
              </div>
              <div className="date-box">
                <div className="date d-flex align-items-center justify-content-between">
                  <div className="box">
                    <p className="select-date-title">Receive-by date:</p>
                    <div className="select-date">
                      <input
                        type="date"
                        // value={receiveDate.toISOString().split("T")[0]}
                        onChange={handleReceiveDateChange}
                        placeholder="mm/dd/yyyy"
                      />
                    </div>
                  </div>

                  <div className="box">
                    <p className="select-date-title">Return-by date:</p>
                    <div className="select-date">
                      <input
                        type="text"
                        value={returnDate.toLocaleDateString("en-US")}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div className="note">
                  <p>
                    Note: The Lender will send the item a few days ahead of
                    these dates.
                  </p>
                </div>
              </div>
            </div>

            <div className="detail-page-btns-groups mt-3">
              <button className="MultiButton" tabindex="0" type="submit">
                <span className="MultiButton-label">Rent Now</span>
              </button>
              
              <button
                className="MultiButton mt-3  MultiButton2"
                tabindex="0"
                type="submit"
              >
                <span className="MultiButton-label">Messege</span>
              </button>
            </div>
          </div>
          <div className="mt-2 d-flex align-items-center more-info-box">
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: "black", width: "1.25rem" }}
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="title">Digitally Authenticated</span>
            <button tabIndex={0} type="button">
              <span>More Info</span>
            </button>
          </div>

          <div className="Buyers__Promise-Container">
            <div className="d-flex align-items-center gap-2">
              <span>
                <svg
                  width={"32px"}
                  height={"32px"}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="shield">
                    <path
                      id="Vector"
                      d="M15.9997 29.3337C15.9997 29.3337 26.6663 24.0003 26.6663 16.0003V6.66699L15.9997 2.66699L5.33301 6.66699V16.0003C5.33301 24.0003 15.9997 29.3337 15.9997 29.3337Z"
                      fill="url(#paint0_linear_2913_7931)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_2913_7931"
                      x1="10.6663"
                      y1="5.6097"
                      x2="21.9997"
                      y2="22.943"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5200FF" />
                      <stop offset={1} stopColor="#00A3FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <h4 className=" BuyersPromise__Heading mb-0">
                Our buyer's promise
              </h4>
            </div>
            <div className="BuyersPromise__RowContainer mt-2">
              <div className="BuyersPromise__Row">
                <p className=" BuyersPromise__Title">Payment Protection</p>
                <p className="-1 BuyersPromise__Subtitle">
                  Payments are held in escrow until you receive the item and
                  approve the payment.
                </p>
              </div>
              <div className="BuyersPromise__Row">
                <p className=" BuyersPromise__Title">
                  Authenticity and Condition Guarantee
                </p>
                <p className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__P-sc-ka4vkm- BuyersPromise__Subtitle">
                  If your item isn't what you were expecting, gets lost, or
                  damaged, you'll be refunded the purchase and postage costs.
                </p>
              </div>
              <div className="BuyersPromise__Row">
                <p className=" BuyersPromise__Title">24/7 Customer Service</p>
                <p className=" BuyersPromise__Subtitle">
                  We're here to support you anytime you need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <ProductLandingMoreInfo />
    <NowTrending />
    <div className="title d-flex align-items-center justify-content-between pe-5">
                    <h4>Edits</h4>
                    <span>
                        <i className="fa-solid fa-arrow-right" />
                    </span>
                </div>
    <GetEdits />
    <Reviews />
    </div>
  );
};

export default ProductLanding;
