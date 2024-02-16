import React, { useState, useEffect } from "react";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddProductsAdmin = () => {
  const [formData, setFormData] = useState({
    categoryId: "",
    typeId: 1, // Default value
    designerId: "",
    name: "",
    size: "",
    brand: "",
    color: "",
    condition: "",
    sellPrice: "",
    rentPrice4Days: "",
    rentPrice8Days: "",
    rentPrice16Days: "",
    rentPrice30Days: "",
    rrp: "",
    code: "",
    details: "",
    isEbayStore: true,
    deletedBy: 0,
    modifiedBy: 0,
    createdBy: 0,
    productImages: [{ name: "", url: "", details: "" }],
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [designers, setDesigners] = useState([]);
  const [productTypes, setProductTypes] = useState([]); // State for product types
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchDesigners();
    fetchProductTypes(); // Fetch product types on component mount
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://localhost:7220/api/product-categories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data.results);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Error fetching categories");
    }
  };

  const fetchDesigners = async () => {
    try {
      const response = await fetch(
        "https://localhost:7220/api/product-designers"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch designers");
      }
      const data = await response.json();
      setDesigners(data.results);
    } catch (error) {
      console.error("Error fetching designers:", error);
      toast.error("Error fetching designers");
    }
  };

  const fetchProductTypes = async () => {
    try {
      const response = await fetch("https://localhost:7220/api/product-types");
      if (!response.ok) {
        throw new Error("Failed to fetch product types");
      }
      const data = await response.json();
      setProductTypes(data.results); // Set product types to the results array
    } catch (error) {
      console.error("Error fetching product types:", error);
      toast.error("Error fetching product types");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    setSelectedImages(Array.from(files));
  };

  const handleDesignerChange = (e) => {
    const designerId = e.target.value;
    setFormData({
      ...formData,
      designerId,
    });
  };

  const handleDesignerSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredDesigners = designers.filter((designer) =>
    designer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const images = selectedImages.map((image) => ({
        name: image.name,
        url: URL.createObjectURL(image),
        details: "",
      }));
      const firstImage = images[0];

      const requestData = {
        ...formData,
        productImages: images,
        ImageUrl: firstImage.url,
      };

      const response = await fetch("https://localhost:7220/api/products", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error adding product");
      }

      const data = await response.json();
      console.log("Product added successfully:", data);
      toast.success("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product");
    }
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
            <div className="col-lg-5 mt-4">
              <div className="row order-page-admin">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 mt-3 Category-admin">
                    <label htmlFor="category" className="form-label">
                      <b>Category*</b>
                    </label>
                    <br />
                    <select
                      name="categoryId"
                      value={formData.categoryId}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 mt-3 Category-admin">
                    <label htmlFor="type" className="form-label">
                      <b>Product Type*</b>
                    </label>
                    <br />
                    <select
                      name="typeId"
                      value={formData.typeId}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Product Type</option>
                      {productTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 mt-3 Category-admin">
                    <label htmlFor="designer" className="form-label">
                      <b>Designer*</b>
                    </label>
                    <br />
                    <input
                      type="text"
                      placeholder="Search Designer"
                      value={searchTerm}
                      onChange={handleDesignerSearch}
                    />
                    <select
                      name="designerId"
                      value={formData.designerId}
                      onChange={handleDesignerChange}
                    >
                      <option value="">Select Designer</option>
                      {filteredDesigners.map((designer) => (
                        <option key={designer.id} value={designer.id}>
                          {designer.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3 mt-3 brand-admin">
                    <h5>
                      <span>
                        <b>Brand*</b>
                      </span>
                    </h5>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3 brand-admin">
                    <h5>
                      <span>
                        <b>Name*</b>
                      </span>
                    </h5>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3 Category-admin">
                    <label htmlFor="size" className="form-label">
                      <b>Size*</b>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3 Category-admin">
                    <label htmlFor="color" className="form-label">
                      <b>Color*</b>
                    </label>
                    <br />
                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>Condition*</b>
                    </h5>
                    <input
                      type="text"
                      name="condition"
                      value={formData.condition}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>Sell Price*</b>
                    </h5>
                    <input
                      type="text"
                      name="sellPrice"
                      value={formData.sellPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>Rent Price 4 Days*</b>
                    </h5>
                    <input
                      type="text"
                      name="rentPrice4Days"
                      value={formData.rentPrice4Days}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>Rent Price 8 Days*</b>
                    </h5>
                    <input
                      type="text"
                      name="rentPrice8Days"
                      value={formData.rentPrice8Days}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>Rent Price 16 Days*</b>
                    </h5>
                    <input
                      type="text"
                      name="rentPrice16Days"
                      value={formData.rentPrice16Days}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>Rent Price 30 Days*</b>
                    </h5>
                    <input
                      type="text"
                      name="rentPrice30Days"
                      value={formData.rentPrice30Days}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>RRP*</b>
                    </h5>
                    <input
                      type="text"
                      name="rrp"
                      value={formData.rrp}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>Code*</b>
                    </h5>
                    <input
                      type="text"
                      name="code"
                      value={formData.code}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3">
                    <h5>
                      <b>Details*</b>
                    </h5>
                    <input
                      type="text"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 mt-3 Category-admin">
                    <label htmlFor="image" className="form-label">
                      <b>Images*</b>
                    </label>
                    <br />
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                    />
                    <div>
                      {selectedImages &&
                        selectedImages.map((image, index) => (
                          <img
                            key={index}
                            src={URL.createObjectURL(image)}
                            alt={`Product Image ${index + 1}`}
                            style={{
                              width: "100px",
                              height: "100px",
                              margin: "5px",
                            }}
                          />
                        ))}
                    </div>
                  </div>
                  <button type="submit" className="move-step-admin mb-3 mt-3">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddProductsAdmin;
