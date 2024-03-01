import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const HomePopup=()=>{
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const hasClosedPopup = localStorage.getItem("hasClosedPopup");
        if (!hasClosedPopup) {
            setIsOpen(true);
        }
    }, []); // Run only once on component mount
    const handleClose = () => {
        // Logic to close the popup
        setIsOpen(false);
        localStorage.setItem("hasClosedPopup", "true");
    };
    return(
        <>
        {isOpen && ( 
            <div>
  <div className="needsclick  kl-private-reset-css-Xuajs1">
    <div
      className="needsclick go1272136950 kl-private-reset-css-Xuajs1"
      style={{ display: "none" }}
    />
    <div
      className="needsclick  kl-private-reset-css-Xuajs1"
      style={{
        display: "flex",
        zIndex: 90000,
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        backgroundColor: "rgba(20, 20, 20, 0.6)",
        animationTimingFunction: "ease",
        animationPlayState: "running",
        animationIterationCount: 1,
        animationFillMode: "forwards",
        animationDelay: "0s",
        animationDuration: "0.35s",
        animationName: "klaviyo-fadein"
      }}
    >
      <div
        aria-describedby="rich-text-102543890 rich-text-102543891"
        role="dialog"
        aria-label="POPUP Form"
        aria-modal="true"
        aria-live="assertive"
        className="needsclick  kl-private-reset-css-Xuajs1"
        style={{
          overflow: "visible",
          transform: "scale(1)",
          transformOrigin: "center center",
          maxHeight: "100%",
          borderRadius: 4,
          position: "relative",
          outline: 0,
          display: "flex",
          justifyContent: "center",
          flex: "0 0 auto",
          alignSelf: "center"
        }}
      >
        <div
          data-testid="POPUP"
          className="needsclick  kl-private-reset-css-Xuajs1"
          style={{ flex: "1 1 0%" }}
        >
          <div
            className="needsclick go3241907364 kl-private-reset-css-Xuajs1"
            style={{
              position: "relative",
              flexDirection: "column",
              display: "flex",
              marginLeft: 20,
              marginRight: 20,
              flex: "1 1 0%",
              alignSelf: "stretch"
            }}
          >
            <div className="needsclick  kl-private-reset-css-Xuajs1">
              <div
                className="needsclick  kl-private-reset-css-Xuajs1"
                style={{
                  position: "relative",
                  display: "flex",
                  flex: "1 1 0%",
                  alignSelf: "stretch",
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 30px",
                  borderRadius: 4
                }}
              >
              
              <button
                            className=""
                            aria-label=""
                            onClick={handleClose}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
              
                <form
                  className="needsclick klaviyo-form klaviyo-form-version-cid_1 kl-private-reset-css-Xuajs1"
                  data-testid="klaviyo-form-WqGevM"
                  noValidate=""
                  tabIndex={-1}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    boxSizing: "border-box",
                    width: 780,
                    minWidth: 200,
                    maxWidth: 1000,
                    borderRadius: 4,
                    borderStyle: "none",
                    borderWidth: 0,
                    borderColor: "rgb(0, 0, 0)",
                    backgroundColor: "rgb(255, 255, 255)",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionY: "50%",
                    padding: "20px 15px",
                    flex: "1 1 0%"
                  }}
                >
                  <div
                    className="needsclick  kl-private-reset-css-Xuajs1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      margin: 0,
                      padding: "0px 15px 0px 0px",
                      minHeight: 500,
                      justifyContent: "center"
                    }}
                  >
                    <div
                      data-testid="form-row"
                      className="needsclick  kl-private-reset-css-Xuajs1"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        position: "relative"
                      }}
                    >
                      <div
                        component="[object Object]"
                        data-testid="form-component"
                        className="needsclick  kl-private-reset-css-Xuajs1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "10px 6px",
                          position: "relative",
                          flex: "0 1 auto",
                          margin: "0px auto"
                        }}
                      >
                        <div
                          className="needsclick  kl-private-reset-css-Xuajs1"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: "auto"
                          }}
                        >
                          <div
                            className="needsclick  kl-private-reset-css-Xuajs1"
                            style={{
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              width: "100%",
                              height: "auto"
                            }}
                          >
                            <img
                              src="/images/CC TM Logo.png"
                              tabIndex={-1}
                              alt="Circular Logo"
                              className="needsclick  kl-private-reset-css-Xuajs1"
                              style={{
                                maxWidth: "100%",
                                width: "500px",
                                height:"60px",
                                
                                cursor: "initial"
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-testid="form-row"
                      className="needsclick  kl-private-reset-css-Xuajs1"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        position: "relative"
                      }}
                    >
                      <div
                        component="[object Object]"
                        data-testid="form-component"
                        className="needsclick  kl-private-reset-css-Xuajs1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "10px 6px 0px 0px",
                          position: "relative",
                          flex: "1 0 0px"
                        }}
                      >
                        <div
                          className="kl-private-reset-css-Xuajs1 go3176171171"
                          id="rich-text-102543890"
                          style={{ width: "100%" }}
                        >
                          <p
                            style={{
                              textAlign: "center",
                              fontSize: 14,
                              fontFamily:
                                'Arial, "Helvetica Neue", Helvetica, sans-serif',
                              fontWeight: 400
                            }}
                          >
                            <span style={{ color: "rgb(0, 0, 0)" }}>
                              <span
                                className="ql-font-poppins"
                                style={{
                                  fontSize: 36,
                                  fontFamily:
                                    'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                                  fontWeight: "bold",
                                  fontStyle: "normal"
                                }}
                              >
                                UNLOCK{" "}
                              </span>
                              <span
                                className="ql-font-poppins"
                                style={{
                                  fontSize: 36,
                                  fontFamily:
                                    'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                                  fontWeight: "bold",
                                  fontStyle: "normal"
                                }}
                              >
                                AU$ 20 OFF
                              </span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-testid="form-row"
                      className="needsclick  kl-private-reset-css-Xuajs1"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        position: "relative"
                      }}
                    >
                      <div
                        component="[object Object]"
                        data-testid="form-component"
                        className="needsclick  kl-private-reset-css-Xuajs1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "10px 6px",
                          position: "relative",
                          flex: "1 0 0px"
                        }}
                      >
                        <div
                          className="kl-private-reset-css-Xuajs1 go3176171171"
                          id="rich-text-102543891"
                          style={{ width: "100%" }}
                        >
                          <div>
                            <div style={{ textAlign: "center" }}>
                              <span
                                style={{
                                  fontSize: 14,
                                  fontFamily:
                                    'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                                  fontWeight: 400,
                                  fontStyle: "normal"
                                }}
                              >
                                Get a little Circular delivered to you, be the first
                                to see new styles and&nbsp;
                                <span style={{ fontWeight: "bold" }}>
                                  enjoy AU$20 off your first rental
                                </span>{" "}
                                by subscribing to our marketing below👇
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-testid="form-row"
                      className="needsclick  kl-private-reset-css-Xuajs1"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        position: "relative"
                      }}
                    >
                      <div
                        component="[object Object]"
                        data-testid="form-component"
                        className="needsclick  kl-private-reset-css-Xuajs1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "10px 6px 0px",
                          position: "relative",
                          flex: "1 0 0px"
                        }}
                      >
                        <div
                          className="needsclick  kl-private-reset-css-Xuajs1"
                          style={{
                            display: "flex",
                            flexGrow: 1,
                            flexDirection: "column",
                            alignSelf: "flex-end"
                          }}
                        >
                          <input
                            id="email_102543892"
                            className="needsclick go1230389731 kl-private-reset-css-Xuajs1"
                            type="email"
                            autoComplete="email"
                            name="email"
                            tabIndex={0}
                            placeholder="Email address"
                            aria-label="Email address"
                            aria-invalid="true"
                            options="[object Object]"
                            aria-describedby="klaviyo_ariaid_3"
                            style={{
                              boxSizing: "border-box",
                              borderRadius: 4,
                              padding: "0px 0px 0px 16px",
                              height: 50,
                              textAlign: "left",
                              color: "rgb(0, 0, 0)",
                              fontFamily:
                                'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                              fontSize: 16,
                              fontWeight: 400,
                              letterSpacing: 0,
                              backgroundColor: "rgb(255, 255, 255)",
                              border: "1px solid rgb(208, 51, 31)"
                            }}
                          />
                          <div
                            className="needsclick  kl-private-reset-css-Xuajs1"
                            style={{ width: "100%", position: "relative" }}
                          >
                            <div
                              className="needsclick  kl-private-reset-css-Xuajs1"
                              style={{
                                backgroundColor: "white",
                                position: "absolute",
                                zIndex: 1,
                                right: 0,
                                borderRadius: 4,
                                animation:
                                  "0.4s ease 0s 1 normal none running klaviyo-fadein",
                                top: 9
                              }}
                            >
                              <div
                                className="needsclick go3298969293 kl-private-reset-css-Xuajs1"
                                style={{
                                  borderRadius: 4,
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.26) 1px 1px 4px 0px",
                                  border: "1px solid rgb(208, 51, 31)",
                                  backgroundColor: "rgb(255, 244, 240)"
                                }}
                              >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-testid="form-row"
                      className="needsclick  kl-private-reset-css-Xuajs1"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "stretch",
                        position: "relative"
                      }}
                    >
                      <div
                        component="[object Object]"
                        data-testid="form-component"
                        className="needsclick  kl-private-reset-css-Xuajs1"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "10px 6px",
                          position: "relative",
                          backgroundColor: "rgba(255, 255, 255, 0)",
                          flex: "1 0 0px"
                        }}
                      >
                        <button
                          className="needsclick go952291206 kl-private-reset-css-Xuajs1"
                          type="button"
                          tabIndex={0}
                          style={{
                            background: "rgb(33, 29, 28)",
                            borderRadius: 6,
                            borderStyle: "none",
                            borderColor: "rgb(33, 29, 28)",
                            borderWidth: 3,
                            color: "rgb(255, 255, 255)",
                            fontFamily:
                              'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                            fontSize: 18,
                            fontWeight: 700,
                            letterSpacing: 0,
                            lineHeight: 1,
                            whiteSpace: "normal",
                            paddingTop: 0,
                            paddingBottom: 0,
                            textAlign: "center",
                            wordBreak: "break-word",
                            alignSelf: "flex-end",
                            cursor: "pointer",
                            height: 54,
                            width: "100%"
                          }}
                        >
                          UNLOCK MY OFFER
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="needsclick  kl-private-reset-css-Xuajs1"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: 390,
                      margin: "-20px -15px -20px 0px",
                      padding: 0,
                      borderTop: "0px solid transparent",
                      borderRight: "0px solid transparent",
                      borderBottom: "0px solid transparent",
                      borderLeft: 0,
                      borderBottomRightRadius: 4,
                      borderTopRightRadius: 4,
                      overflow: "hidden",
                      minWidth: 390,
                      minHeight: 500
                    }}
                  >
                    <div
                      className="needsclick  kl-private-reset-css-Xuajs1"
                      style={{
                        backgroundImage:
                          'url("/images/background-images/show.jpeg")',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                        width: "100%",
                        height: "100%",
                        display: "block"
                      }}
                    />
                  </div>
                  <input
                    type="submit"
                    tabIndex={-1}
                    defaultValue="Submit"
                    style={{ display: "none" }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        )}
        </>
       
        
    )
};
export default HomePopup;