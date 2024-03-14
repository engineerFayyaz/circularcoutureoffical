import React, { useState } from "react";
import {
  faInfoCircle,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";

const TopLenderFilter = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>Top Lenders</span>
          <FontAwesomeIcon
            icon={faInfoCircle}
            onClick={handleIconClick}
            style={{ marginLeft: "5px", fontSize: "14px" }}
          />
        </div>
        <div onClick={handleToggle}>
          <FontAwesomeIcon
            icon={isToggleOn ? faToggleOn : faToggleOff}
            style={{
              fontSize: "28px",
              color: isToggleOn ? "green" : "grey",
              cursor: "pointer",
            }}
          />
        </div>
        {/* <FontAwesomeIcon
          icon={faToggleOff}
          style={{ fontSize: "27px", color: "grey" }}
        /> */}
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        fullscreen="xl-down"
        centered
        dialogClassName="custom-fade-modal-show"
      >
        <Modal.Header closeButton>
          <Modal.Title>WHAT ARE TOP LENDERS?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Top Lenders are a group of some of the most trusted and best
            performing members of the Circular marketplace. You can easily recognise
            them by looking for the badge on item and profile pages. You can
            also filter the marketplace to only show items from Top Lender
            wardrobes.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TopLenderFilter;
