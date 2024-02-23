import { useState } from 'react';
import { Button, Modal, Accordion } from 'react-bootstrap';

function FullWindowPopup() {
    const [show, setShow] = useState(false);


    return (
        <>
            {/* <Button variant="primary" onClick={() => setShow(true)}>
                Custom Width Modal
            </Button> */}

            <Button variant="primary" onClick={() => setShow(true)}>
                Product Detail
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                centered
                size="lg"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: 9999,
                    overflow: 'hidden'
                }}
                contentClassName="modal-content-fullscreen"
            >
                <Modal.Header closeButton>

                </Modal.Header>
                <Modal.Body style={{ maxHeight: 'calc(102vh  - 78px)', overflowY: 'auto', overflowX: 'hidden' }}>


                    <div className="row">
                        <div className="col-lg-2 scroll-four-img">
                            <img src="/images/img/2.jpeg" width={100} alt="" />
                            <img src="/images/img/4.jpeg" width={100} alt="" />
                            <img src="/images/img/6.jpeg" width={100} alt="" />
                            <img src="/images/img/7.webp" width={100} alt="" />
                        </div>
                        <div className="col-lg-5 scroll-four-img1">
                            <img src="/images/img/3.png" alt="" />
                        </div>
                        <div className="col-lg-4 Bottega-Veneta-width">
                            <h2>Bottega Veneta</h2>
                            <h6>Mini Knotted Leather Tote (green)</h6>
                            <h6 style={{ display: "ruby-base" }} className="mt-4">
                                Rent for $180 – for 4 days{" "}
                                <p style={{ fontSize: 10, marginLeft: 10 }}>Retail $2,130</p>
                            </h6>
                            <div className="four-survey-icon">
                                <p>
                                    Item provided by <b>Front Row Style</b>
                                </p>{" "}
                                &nbsp; &nbsp;
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                                <i className="fa-solid fa-star" />
                            </div>
                            <span style={{ color: "rgb(185, 60, 60)" }}>
                                Earn 119 ATD Rewards points
                            </span>
                            <br />
                            <span>Postage: $19.95</span>
                            <div className="mt-4 ml-1 boxesthree">
                                <span>SIZE :</span>
                                <div className="box-three">
                                    <span>6</span>
                                    <span>8</span>
                                    <span>10</span>
                                    <p className="mt-3 ml-2">Size guide</p>
                                </div>
                            </div>
                            <div className="mt-4 ml-1  RENTAL-PERIOD">
                                <span>RENTAL PERIOD :</span>
                                <div className="box-three">
                                    <span>6</span>
                                </div>
                            </div>
                            <div className="mt-4 ml-1  RENTAL-PERIOD">
                                <span>DELIVERY DATE :</span>
                                <select className="custom-select" id="inputGroupSelect02">
                                    <option selected="">Select...</option>
                                    <option value={1}>One Day</option>
                                    <option value={2}>Two Day</option>
                                    <option value={3}>Three Day</option>
                                </select>
                            </div>
                            <div className="btn-BOOK-NOW">
                                <button type="button">BOOK NOW</button>
                                <i className="fa-regular fa-heart" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <h2>STYLE NOTES</h2>
                            <p>
                                <strong>RRP:</strong>$390.00
                            </p>
                            <p>
                                <strong>COLOUR :</strong>Viola Print
                            </p>
                            <h6>
                                <strong>DESCRIPTION:</strong>
                            </h6>
                            <p>
                                The Eleanora Tie Shoulder Dress is a repeat of our best selling Bettina
                                Off Shoulder Dress. Crafted from a linen fabric in the SIR exclusive
                                Viola print, drawing inspiration from palazzo wallpapers and intricate
                                filigree florals. Featuring ruching through the waist for a flattering
                                look, a side split and tie detail at the shoulder.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>RETURNS & REFUNDS</Accordion.Header>
                                    <Accordion.Body>
                                        Cancellations for a full refund are allowed 21 or more days prior to your rental start date.
                                        Cancellations for a full credit note are allowed 14 or more days prior to your rental start date.
                                        For cancellations at shorter notice, or returns due to an issue with fit, please read the “Haute Kids” Terms below to see what is offered by this All The Dresses rental partner.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>“HAUTE KIDS” TERMS</Accordion.Header>
                                    <Accordion.Body>
                                        Cancellations 21 or more days prior to your booking start date will be refunded in full as per the All The Dresses Rental Agreement.
                                        Cancellations 7 or more days prior to your booking start date will be entitled to a credit note for the full amount paid including postage as per the All The Dresses Rental Agreement.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default FullWindowPopup;
