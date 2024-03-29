import React, { useState } from "react";
import { Button, Toast, Form } from "react-bootstrap";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";

const AdminDeleteProducts = () => {
  const [productId, setProductId] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://circularclientapi.azurewebsites.net/api/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setToastMessage("Product deleted successfully");
      } else {
        setToastMessage(data.message || "Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      setToastMessage("An error occurred while deleting product");
    } finally {
      setShowToast(true);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="container-fluid">
        <div
          className="row text-light"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <AdminSideHeader />
          <div className="col-lg-10 p-5">
          <Form.Group controlId="productIdInput">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product ID"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </Form.Group>
          <Button onClick={handleDelete} style={{marginTop:"20px",fontSize:"16px",fontWeight:"600",padding:"15px",borderRadius:"10px"}}>Delete Product</Button>
          <Toast show={showToast} onClose={() => setShowToast(false)}>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AdminDeleteProducts;
