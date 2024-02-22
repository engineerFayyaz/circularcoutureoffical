import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import axios from "axios";

function AddDesigner() {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7220/api/product-designers",
        {
          name: name,
          detail: detail
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Designer added successfully!");
        setName("");
        setDetail("");
        setError(null);
      } else {
        setError("Failed to add designer. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="container-fluid">
        <div className="row text-light" style={{ backgroundColor: "black", color: "white" }}>
          <AdminSideHeader />
          <div className="col-lg-10 mt-4">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Designer name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Designer Details</Form.Label>
                <Form.Control as="textarea" rows={4} value={detail} onChange={(e) => setDetail(e.target.value)} required />
              </Form.Group>
              <Button type="submit">Submit</Button>
              {error && <p style={{ color: "red" }}>{error}</p>}
              {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDesigner;
