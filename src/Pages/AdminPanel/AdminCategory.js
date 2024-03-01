import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css";

const AdminCategory = () => {
  const [categoryData, setCategoryData] = useState({
    type: "",
    deleted: false,
  });
  const [categories, setCategories] = useState([]);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("https://localhost:7220/api/product-categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        return response.json();
      })
      .then((data) => {
        if (data && Array.isArray(data.results)) {
          setCategories(data.results);
        } else {
          throw new Error("Categories data format is not recognized");
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        toast.error("Failed to fetch categories. Please try again later.");
      });
  };
  


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!categoryData.type) {
      toast.error("Please enter a category type");
      return;
    }
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
        setCategoryData({ type: "", deleted: false });
        fetchCategories();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Sorry, an issue occurred");
      });
  };

  const handleEdit = (categoryId) => {
    setEditingCategoryId(categoryId);
    const categoryToEdit = categories.find((category) => category.id === categoryId);
    if (categoryToEdit) {
      setCategoryData(categoryToEdit);
    }
  };
  const handleUpdate = (categoryId) => {
    console.log("Updating category with ID:", categoryId);
    fetch(`https://localhost:7220/api/product-categories/${categoryId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    })
      .then((response) => {
        console.log("PUT response:", response);
        if (!response.ok) {
          throw new Error("An issue occurred during the update");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        toast.success("Category updated successfully");
        setEditingCategoryId(null);
        fetchCategories();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Sorry, an issue occurred during the update");
      });
  };
 
  const handleDelete = (categoryId) => {
    fetch(`https://localhost:7220/api/product-categories/${categoryId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("An issue occurred");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        toast.success("Category deleted successfully");
        fetchCategories();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Sorry, an issue occurred");
      });
  };

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
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
            <div className="col-lg-10 p-3">
              <h2 className="text-center text-light">Manage Product Category</h2>
              <hr />
              <form onSubmit={handleSubmit}>
                <div className="row mt-2">
                  <div className="form-group-admin col-lg-6">
                    <label htmlFor="type">Type:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      placeholder="Enter type"
                      value={categoryData.type}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <div className="form-group-admin col-lg-6">
                    <label htmlFor="deleted">Deleted:</label>
                    <input
                      type="checkbox"
                      className="form-control"
                      id="deleted"
                      checked={categoryData.deleted}
                      onChange={handleChange}
                    />
                  </div> */}
                </div>
                <div className="form-group-admin col-lg-12 text-center mt-4 mb-3">
                  <button type="submit" className="btn btn-light category-btn">
                    Create Category
                  </button>
                </div>
              </form>
              <div>
                <h2 className="text-center text-light">All Categories</h2>
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Category Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <tr key={category.id}>
                        <td>{index + 1}</td>
                        <td>
                          {editingCategoryId === category.id ? (
                            <input
                              type="text"
                              className="form-control"
                              value={categoryData.type}
                              onChange={(e) => setCategoryData({ ...categoryData, type: e.target.value })}
                            />
                          ) : (
                            category.type
                          )}
                        </td>
                        <td>
                          {editingCategoryId === category.id ? (
                            <button
                              className="btn btn-sm btn-success mr-2"
                              onClick={() => handleUpdate(category.id)}
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              className="btn btn-sm btn-primary mr-2"
                              onClick={() => handleEdit(category.id)}
                            >
                              Edit
                            </button>
                          )}
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(category.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default AdminCategory;
