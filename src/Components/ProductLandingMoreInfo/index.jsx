import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../../Components/ProductLandingMoreInfo/ProductLandingMoreInfo.css"
import ProductLanding from "../../Pages/ProductLanding";
const ProductLandingMoreInfo = () => {
  const { productId, productName } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`https://circularclientapi.azurewebsites.net/api/products/${productId}`);
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

  const { name, brand,productType, id, typeId, categoryId, size, internationalSize, isAvailable, color, condition, sellPrice, rentPrice4Days, rentPrice8Days, rentPrice16Days, rentPrice30Days, rrp, code, details, isEbayStore, deletedBy, modifiedBy, createdBy, productImages } = product;

  const thumbnails = productImages && productImages.map((image, index) => ({
    original: image.url,
    thumbnail: image.url,
  }));

  const calculateRentForOneDay = (rentPrice) => {
      const rentPerDay = parseFloat(rentPrice.replace("AU$", "")) / 8;
      return rentPerDay.toFixed(2);
  };

  return (
    <>
      <div className="Box__StyledBox-sc-1431ovz-0 hiXaTa ListingPage__Section-sc-1x9psuw-0 cItmdh">
        <div className="MuiPaper-root MuiAccordion-root ListingPage__MoreDetailsAccordion-sc-1x9psuw-4 hrqoGM MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded">
          <div
            className="MuiCollapse-root MuiCollapse-hidden"
            style={{ minHeight: 0 }}
          >
            <div className="MuiCollapse-wrapper">
              <div className="MuiCollapse-wrapperInner">
                <div role="region">
                  <div className="MuiAccordionDetails-root">
                    <div className="Box__StyledBox-sc-1431ovz-0 gqcvcB FlexBox-sc-1bn56fh-0 Description__Container-sc-mzq592-0 Exhoq hjimac">
                      <div className="ProductHeading__Container-sc-e0iuwq-0 bcPGCT">
                        <h4 className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Heading-sc-1mg4rl3-0 Heading__H4-sc-1mg4rl3-4  hLzqqP MuiTypography-h4">
                          Description
                        </h4>
                      </div>
                      <p className="text-justify text-dark p-2 MuiTypography-root  Typography__TypographyBase-sc-ka4vkm-0 Typography__P-sc-ka4vkm-1 Typography__Pre-sc-ka4vkm-6 cxCExC iFqjxM MuiTypography-body1">
                      {details}
                        </p>
                        <p className="text-justify text-dark p-2">
                        Length: 115cm
                        (size 0). Our model is 177.8cm (5’10”) tall with a
                        81.3cm (32”) bust, a 68.6cm (27”) waist and 92.7cm
                        (36.5”) hips. 
                        </p>
                        <p className="text-justify text-dark p-2">
                        - Hand-embroidered floral applique on
                        tulle; lined; opaque <br />
                        - Sweetheart neckline with
                        adjustable straps <br />
                        - Bodycon silhouette with midi hemline
                        and rear venting <br />
                        - Rear concealed zipper closure
                      </p>
                    </div>
                    <div className="Box__StyledBox-sc-1431ovz-0 gqcvcB FlexBox-sc-1bn56fh-0 Details__Container-sc-1vn5vvh-0 Exhoq iISwRU">
                      <div className="ProductHeading__Container-sc-e0iuwq-0 bcPGCT">
                        <h4 className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Heading-sc-1mg4rl3-0 Heading__H4-sc-1mg4rl3-4  hLzqqP MuiTypography-h4">
                          Details
                        </h4>
                      </div>
                      <table className="Details__StyledTable-sc-1vn5vvh-1 cmeWmf ">
                        <tbody >
                          <tr>
                            <td className="title">Product Category{/* */}: </td>
                            <td className="description">{productType}</td>
                          </tr>
                          <tr>
                            <td className="title">Category{/* */}: </td>
                            <td className="description">
                              <span>Womenswear</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">Retail Price{/* */}: </td>
                            <td className="description">{rrp}</td>
                          </tr>
                          <tr>
                            <td className="title">Brand{/* */}: </td>
                            <td className="description">{brand}</td>
                          </tr>
                          <tr>
                            <td className="title">Condition{/* */}: </td>
                            <td className="description">
                              {condition}
                            </td>
                          </tr>
                          <tr>
                            <td className="title">Size Guide{/* */}: </td>
                            <td className="description">
                              <span>{size}</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">
                              Label Size &amp; Fit Notes{/* */}:{" "}
                            </td>
                            <td className="description">2</td>
                          </tr>
                          <tr>
                            <td className="title">Colour{/* */}: </td>
                            <td className="description">
                              <span>{color}</span>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">
                              Try-on availability{/* */}:{" "}
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-colorAction"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              
                              >
                                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                              </svg>
                            </td>
                            <td className="description">
                              <span className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__Span-sc-ka4vkm-2 Details__Value-sc-1vn5vvh-2 bcCjKz cFnHVX MuiTypography-body1">
                                {isAvailable}
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="title">
                              Dry Cleaning{/* */}:{" "}
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-colorAction"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                
                              >
                                <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                              </svg>
                            </td>
                            <td className="description">
                              <span className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__Span-sc-ka4vkm-2 Details__Value-sc-1vn5vvh-2 bcCjKz cFnHVX MuiTypography-body1">
                                By {/* */}lender
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="Box__StyledBox-sc-1431ovz-0 kxbdjt">
                      <div className="Box__StyledBox-sc-1431ovz-0 gqcvcB FlexBox-sc-1bn56fh-0 SellerProfile__Container-sc-gdk9nx-0 Exhoq fSGYPD">
                        <div
                          width="100%"
                          className="Box__StyledBox-sc-1431ovz-0 fdfkWS FlexBox-sc-1bn56fh-0 SellerProfile__FlexBoxStyled-sc-gdk9nx-6 dusmFu jKRbCH"
                        >
                          <div className="Box__StyledBox-sc-1431ovz-0 gqcvcB SellerProfile__AvatarContainer-sc-gdk9nx-1 dAbUFt">
                            <a
                              href="/en/baongan"
                              className="Avatar-module__link___1d8wd"
                            >
                              <div
                                className="Avatar Avatar-module__textAvatar___1qgjG Avatar-module__round___d81Oi"
                                style={{ height: "100%", width: "100%" }}
                                title=""
                              />
                            </a>
                          </div>
                          <div className="Box__StyledBox-sc-1431ovz-0 gqcvcB SellerProfile__BoxStyled-sc-gdk9nx-5 gDzUbb">
                            <div className="Box__StyledBox-sc-1431ovz-0 gqcvcB FlexBox-sc-1bn56fh-0 SellerProfile__BoxPersonName-sc-gdk9nx-8 Exhoq fqYMoH">
                              <a
                                className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__A-sc-ka4vkm-5 SellerProfile__Name-sc-gdk9nx-2 fiaUsk kKONCZ MuiTypography-body1"
                               
                              >
                                Bao Ngan
                              </a>
                            </div>
                            <div className="Box__StyledBox-sc-1431ovz-0 byNHvM">
                              <p className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__P-sc-ka4vkm-1 SellerProfile__Location-sc-gdk9nx-3 cxCExC hSEsJe MuiTypography-body1">
                                Hazelwood Park SA 5066, Australia
                              </p>
                            </div>
                            <div className="Box__StyledBox-sc-1431ovz-0 iZDQzN FlexBox-sc-1bn56fh-0 PersonSummaryBlock__StyledFlexBox-sc-1lnzbe1-0 Exhoq iljpgD">
                              <a className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__A-sc-ka4vkm-5 PersonSummaryItem__LinkBoxStyled-sc-1t7ppcb-2 hZhaUp kWFNRu MuiTypography-body1">
                                <span className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__Span-sc-ka4vkm-2 PersonSummaryItem__SpanNumber-sc-1t7ppcb-0 bcCjKz egyupX MuiTypography-body1">
                                  1
                                </span>
                                <span className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__Span-sc-ka4vkm-2 PersonSummaryItem__SpanText-sc-1t7ppcb-1 bcCjKz clOklP MuiTypography-body1">
                                  Follower
                                </span>
                              </a>
                              <a
                                className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__A-sc-ka4vkm-5 PersonSummaryItem__LinkBoxStyled-sc-1t7ppcb-2 hZhaUp kWFNRu MuiTypography-body1"
                                href=""
                              >
                                <span className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__Span-sc-ka4vkm-2 PersonSummaryItem__SpanNumber-sc-1t7ppcb-0 bcCjKz egyupX MuiTypography-body1">
                                  0
                                </span>
                                <span className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__Span-sc-ka4vkm-2 PersonSummaryItem__SpanText-sc-1t7ppcb-1 bcCjKz clOklP MuiTypography-body1">
                                  Reviews
                                </span>
                              </a>
                              <a
                                className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__A-sc-ka4vkm-5 PersonSummaryItem__LinkBoxStyled-sc-1t7ppcb-2 hZhaUp kWFNRu MuiTypography-body1"
                                href=""
                              >
                                <span className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__Span-sc-ka4vkm-2 PersonSummaryItem__SpanNumber-sc-1t7ppcb-0 bcCjKz egyupX MuiTypography-body1">
                                  0
                                </span>
                                <span className="MuiTypography-root Typography__TypographyBase-sc-ka4vkm-0 Typography__Span-sc-ka4vkm-2 PersonSummaryItem__SpanText-sc-1t7ppcb-1 bcCjKz clOklP MuiTypography-body1">
                                  Collections
                                </span>
                              </a>
                            </div>
                          </div>
                          <div className="d-flex align-items-center gap-3 Box__StyledBox-sc-1431ovz-0 iACsdB FlexBox-sc-1bn56fh-0 SellerProfile__FlexBoxButtons-sc-gdk9nx-7 Exhoq gCqFTI">
                            <button className="ActionButton-module__root___2nE9v FollowButton-module__smallFollowButton___WLRQ7 has-ripple ripple-dark">
                              <span>Follow</span>
                            </button>
                            <a
                              className="MuiButtonBase-root MuiButton-root MuiButton-outlined Button-sc-znx1bk-0 kNqoHl SellerProfile__ContactButton-sc-gdk9nx-4 gtxKXq"
                              tabIndex={0}
                              aria-disabled="false"
                              href=""
                            >
                              <span className="MuiButton-label">Contact</span>
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
    </>
  );
};
export default ProductLandingMoreInfo;
