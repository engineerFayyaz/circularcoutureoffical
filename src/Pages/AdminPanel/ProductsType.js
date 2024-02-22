import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import axios from "axios";

function ProductsType() {
  const [type, setType] = useState(""); // Changed state variable name to 'type'
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7220/api/product-types",
        {
          type: type, // Sending 'type' data
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Product Type added successfully!"); // Adjusted success message
        setType(""); // Resetting the 'type' state variable
        setError(null);
      } else {
        setError("Failed to add Product type. Please try again later."); // Adjusted error message
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
                <Form.Label>Product Type</Form.Label>
                <Form.Control type="text" value={type} onChange={(e) => setType(e.target.value)} placeholder="Product type " required />
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

export default ProductsType;
