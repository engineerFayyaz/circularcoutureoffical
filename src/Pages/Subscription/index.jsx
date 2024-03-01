import React from "react";

const SubscriptionForm = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(238, 238, 238)",
          display: "flex",
          justifyContent: "center",
          minHeight: "100%",
          paddingTop: 40,
          paddingBottom: 40,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <form style={{ maxWidth: "100%" }}>
          <div
            style={{
              height: "fit-content",
              width: 558,
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid rgb(204, 204, 204)",
              borderRadius: 0,
              padding: 60,
              maxWidth: "100%",
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 6px",
                  backgroundColor: "rgb(255, 255, 255)",
                  position: "relative",
                  flex: "1 1 0%",
                }}
              >
                <img
                  src="/images/CC TM LOGO.png"
                  alt="CIRCULAR logo"
                  style={{ maxWidth: "100%", width: 350, margin: "0px auto" }}
                />
              </div>
            </div>
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 0,
                  position: "relative",
                  flex: "1 1 0%",
                }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html: "* {\n    margin-block: unset;\n  }",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    fontFamily: '"Helvetica Neue", Arial',
                    color: "rgb(34, 34, 34)",
                  }}
                >
                  <h1
                    style={{
                      textAlign: "center",
                      fontFamily: '"Helvetica Neue", Arial',
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#222",
                    }}
                  >
                    <span
                      style={{
                        fontFamily:
                          'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                        fontWeight: "bold",
                        fontStyle: "normal",
                      }}
                    >
                      UNLOCK $20 OFF
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 6px 20px",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  position: "relative",
                  flex: "1 1 0%",
                }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html: "* {\n    margin-block: unset;\n  }",
                  }}
                />
                <div
                  style={{
                    width: "100%",
                    fontFamily: '"Helvetica Neue", Arial',
                    color: "rgb(34, 34, 34)",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontFamily:
                          'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      Get a little CIRCULAR delivered to you, be the first to see
                      new styles and enjoy 20 off your first rental by
                      subscribing to our marketing below👇
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 6px",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  position: "relative",
                  flex: "1 1 0%",
                }}
              >
                <input
                  name="$email"
                  type="hidden"
                  defaultValue=""
                  style={{
                    backgroundImage: 'url("data:image/png',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: 20,
                    backgroundPosition: "97% center",
                    cursor: "auto",
                  }}
                  data-temp-mail-org={0}
                />
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <label
                    htmlFor="kl-consent-page-7dabe254cbdb4597b760ac125ca10f81"
                    style={{
                      fontFamily:
                        'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                      fontSize: 16,
                      fontWeight: 700,
                      color: "rgb(34, 34, 34)",
                      marginBottom: 8,
                    }}
                  >
                    Email address
                    <span style={{ color: "rgb(231, 76, 60)" }}>*</span>
                  </label>
                  <div style={{ display: "flex" }}>
                    <input
                      className="go4230038822"
                      id="kl-consent-page-7dabe254cbdb4597b760ac125ca10f81"
                      placeholder=""
                      aria-required="true"
                      defaultValue=""
                      style={{
                        color: "rgb(34, 34, 34)",
                        fontFamily:
                          'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                        fontSize: 16,
                        fontWeight: 400,
                        width: "100%",
                        height: 50,
                        paddingLeft: 16,
                        border: "1px solid rgb(204, 204, 204)",
                        borderRadius: 0,
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 6px",
                  backgroundColor: "rgb(255, 255, 255)",
                  position: "relative",
                  flex: "1 1 0%",
                }}
              >
                <input
                  name="$phone_number"
                  type="hidden"
                  defaultValue=""
                  style={{ display: "none" }}
                />
                <input
                  name="sms_consent"
                  type="hidden"
                  defaultValue="True"
                  style={{ display: "none" }}
                />
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <label
                    htmlFor="kl-consent-page-be38996369054515903290526a9bd79d"
                    style={{
                      fontFamily:
                        'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                      fontSize: 16,
                      fontWeight: 700,
                      color: "rgb(34, 34, 34)",
                      marginBottom: 8,
                    }}
                  >
                    Phone Number
                    <span style={{ color: "rgb(231, 76, 60)" }}>*</span>
                  </label>
                  <div style={{ display: "flex" }}>
                    <div
                      className=" go646180588}"
                      role="combobox"
                      aria-haspopup="listbox"
                      aria-owns="downshift-0-menu"
                      aria-expanded="false"
                      style={{ position: "relative", flex: "1 1 0%" }}
                    >
                      <input
                        placeholder=""
                        type="hidden"
                        id="downshift-0-input"
                        aria-autocomplete="list"
                        aria-controls="downshift-0-menu"
                        aria-labelledby="downshift-0-label"
                        autoComplete="off"
                        tabIndex={0}
                        defaultValue=""
                        style={{
                          width: "100%",
                          flex: "1 1 0%",
                          display: "none",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          boxSizing: "border-box",
                          padding: "0px 8px 0px 16px",
                          border: "1px solid rgb(204, 204, 204)",
                          height: 50,
                          cursor: "pointer",
                          borderRadius: 0,
                          color: "rgb(180, 187, 195)",
                          fontFamily:
                            'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                          fontSize: 16,
                          fontWeight: 400,
                        }}
                      />
                      <button
                        id="downshift-0-toggle-button"
                        tabIndex={0}
                        type="button"
                        aria-label="United Kingdom selected open dropdown"
                        style={{
                          width: "100%",
                          flex: "1 1 0%",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          boxSizing: "border-box",
                          padding: "0px 8px 0px 16px",
                          borderTop: "1px solid rgb(204, 204, 204)",
                          borderRight: "none",
                          borderBottom: "1px solid rgb(204, 204, 204)",
                          borderLeft: "1px solid rgb(204, 204, 204)",
                          borderImage: "initial",
                          height: 50,
                          cursor: "pointer",
                          borderRadius: 0,
                          color: "rgb(180, 187, 195)",
                          fontFamily:
                            'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                          fontSize: 16,
                          fontWeight: 400,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            aria-label="United Kingdom"
                            title="United Kingdom"
                            src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.4/flags/4x3/gb.svg"
                            style={{
                              display: "inline-block",
                              width: "1em",
                              height: "1em",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <svg
                          height={20}
                          width={20}
                          aria-hidden="true"
                          transform=""
                        >
                          <path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163s-.436-1.17 0-1.615z" />
                        </svg>
                      </button>
                      <div
                        id="downshift-0-menu"
                        role="listbox"
                        style={{
                          backgroundColor: "rgb(255, 255, 255)",
                          boxSizing: "border-box",
                          width: "100%",
                          borderBottomColor: "rgb(204, 204, 204)",
                          borderLeftColor: "rgb(204, 204, 204)",
                          borderRightColor: "rgb(204, 204, 204)",
                          borderStyle: "none",
                          borderTopWidth: "initial",
                          borderTopColor: "initial",
                          top: "100%",
                          overflow: "auto",
                          borderBottomRightRadius: 0,
                          borderBottomLeftRadius: 0,
                          position: "absolute",
                          maxHeight: 400,
                          zIndex: 1,
                        }}
                      />
                    </div>
                    <input
                      className="go4230038822"
                      id="kl-consent-page-be38996369054515903290526a9bd79d"
                      placeholder=""
                      aria-required="true"
                      defaultValue=""
                      style={{
                        color: "rgb(34, 34, 34)",
                        fontFamily:
                          'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                        fontSize: 16,
                        fontWeight: 400,
                        width: "100%",
                        height: 50,
                        paddingLeft: 16,
                        borderTop: "1px solid rgb(204, 204, 204)",
                        borderRight: "1px solid rgb(204, 204, 204)",
                        borderBottom: "1px solid rgb(204, 204, 204)",
                        borderLeft: "none",
                        borderImage: "initial",
                        borderRadius: 0,
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 6px",
                  backgroundColor: "rgb(255, 255, 255)",
                  position: "relative",
                  flex: "1 1 0%",
                }}
              >
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n      .kl_sms_disclosure_component_2acce4e3f1cb402ab89cd1bab63c06e5 :not(a) {\n        color: #222222;\n        font-family: 'europa', Arial, 'Helvetica Neue', Helvetica, sans-serif;\n        font-size: 10px;\n      }\n      .kl_sms_disclosure_component_2acce4e3f1cb402ab89cd1bab63c06e5 a {\n        color: #222222;\n        font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\n        font-size: 10px;\n      }\n  * {\n    margin-block: unset;\n  }",
                  }}
                />
                <div
                  className="kl_sms_disclosure_component_2acce4e3f1cb402ab89cd1bab63c06e5"
                  style={{
                    width: "100%",
                    fontFamily: '"Helvetica Neue", Arial',
                    color: "rgb(34, 34, 34)",
                  }}
                >
                  <p>
                    By submitting this form and signing up for texts, you
                    consent to receive marketing text messages (e.g. promos,
                    cart reminders) from CIRCULAR at the number provided, including
                    messages sent by autodialer. Consent is not a condition of
                    purchase. Msg &amp; data rates may apply. Msg frequency
                    varies. Unsubscribe at any time by replying STOP or clicking
                    the unsubscribe link (where available).{" "}
                    <a href="/privacy-policy">
                      Privacy Policy
                    </a>{" "}
                    &amp;{" "}
                    <a href="/termsofservice">
                      Terms
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 6px",
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  position: "relative",
                  flex: "1 1 0%",
                }}
              >
                <button
                  type="submit"
                  className="go662533613"
                  style={{
                    fontFamily:
                      'europa, Arial, "Helvetica Neue", Helvetica, sans-serif',
                    fontSize: 18,
                    fontWeight: 700,
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgb(34, 34, 34)",
                    borderRadius: 2,
                    border: "0px solid rgb(34, 34, 34)",
                    height: 50,
                    width: "100%",
                    padding: 0,
                    margin: "0px auto",
                    cursor: "pointer",
                  }}
                >
                  UNLOCK MY OFFER
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default SubscriptionForm;
