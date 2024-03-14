import React, { useState } from "react";
import {
  faInfoCircle,
  faToggleOn,
  faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from "react-bootstrap";
import "../../Components/ManageStockFilter/ManageStockFIlter.css";

const ManageStockFilter = () => {
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
          <span>Managed Stock</span>
          <div className="info-icon" onClick={handleIconClick}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
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
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        fullscreen="xl-down"
        centered
        dialogClassName="custom-fade-modal-show"
      >
        <Modal.Header closeButton>
          <Modal.Title>What is Managed Stock?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Managed items are pieces HURR looks after on our brands’ behalf. You
            can easily recognize them from their MANAGED tag. They are
            professionally cleaned by Oxwash, include free return shipping and
            are available for next day shipping if you book by midday.
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

export default ManageStockFilter;
