import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css";

const AdminCategory = () => {
  const [categoryData, setCategoryData] = useState({
    type: "string",
    deleted: true,
    createdDate: "2024-02-11T11:56:10.388Z",
    modifiedDate: "2024-02-11T11:56:10.388Z",
    deletedDate: "2024-02-11T11:56:10.388Z",
    deletedBy: 0,
    modifiedBy: 0,
    createdBy: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:7220/api/product-categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("An issue occurred");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        toast.success("Category created successfully");
        // Handle success, maybe show a success message or redirect
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Sorry, an issue occurred");
        // Handle errors, maybe show an error message
      });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      <AdminHeader />
      <main>
        <div className="container-fluid">
          <div
            className="row  text-light "
            style={{ backgroundColor: "black", color: "white" }}
          >
            <AdminSideHeader />
            <div className="col-lg-10 ">
              <h2 className="text-center text-light">Create Product Category</h2>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="row mt-2">
                  {/* Type */}
                  <div className="form-group-admin col-lg-6 ">
                    <label htmlFor="type">Type:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      placeholder="Enter type"
                      value={categoryData.type}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Deleted */}
                  <div className="form-group-admin col-lg-6">
                    <label htmlFor="deleted">Deleted:</label>
                    <input
                      type="checkbox"
                      className="form-control"
                      id="deleted"
                      checked={categoryData.deleted}
                      onChange={() =>
                        setCategoryData((prevData) => ({
                          ...prevData,
                          deleted: !prevData.deleted,
                        }))
                      }
                    />
                  </div>
                </div>
                {/* Additional fields can be added similarly */}
                <div className="form-group-admin col-lg-12 text-center mt-4 mb-3">
                  <button type="submit" className="btn btn-light category-btn">
                    Create Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};
export default AdminCategory;
