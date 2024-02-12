import React, { useState } from "react";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css";
import { toast } from "react-toastify";

const AddProductsAdmin = () => {
    const [formData, setFormData] = useState({
        category: "",
        brand: "",
        Name: "", // Changed itemName to Name
        size: "",
        color: "",
        condition: "",
        sellPrice: "",
        rentPrice4Days: "",
        rentPrice8Days: "",
        rentPrice16Days: "",
        rentPrice30Days: "",
        rrp: "", // Added rrp field
        code: "", // Added code field
        details: "" // Added details field
    });

    const [selectedImages, setSelectedImages] = useState([]);

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const images = selectedImages.map((image) => ({
                name: image.name,
                url: URL.createObjectURL(image)
            }));

            const requestData = {
                ...formData,
                ProductImages: images, // Changed Images to ProductImages
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
                                {/* Form */}
                                <form onSubmit={handleSubmit}>
                                    {/* Rest of the form fields */}
                                    {/* Category */}
                                    <div className="mb-3 mt-3 Category-admin">
                                        <label htmlFor="category" className="form-label">
                                            <b>Category*</b>
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    {/* Brand */}
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
                                    {/* Item Name */}
                                    <div className="mb-3 mt-3 brand-admin">
                                        <h5>
                                            <span>
                                                <b>Item Name*</b>
                                            </span>
                                        </h5>
                                        <input
                                            type="text"
                                            name="Name" // Changed itemName to Name
                                            value={formData.Name} // Changed itemName to Name
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    {/* Size */}
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
                                    {/* Color */}
                                    <div className="mb-3 mt-3 Category-admin">
                                        <label htmlFor="color" className="form-label">
                                            <b>Colour*</b>
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="color"
                                            value={formData.color}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    {/* Condition */}
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
                                    {/* Sell Price */}
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
                                    {/* Rent Prices */}
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
                                    {/* Additional Fields */}
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
                                    {/* Image Upload */}
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
                                                Array.from(selectedImages).map((image, index) => (
                                                    <img
                                                        key={index}
                                                        src={URL.createObjectURL(image)}
                                                        alt={`Product Image ${index + 1}`}
                                                        style={{ width: "100px", height: "100px", margin: "5px" }}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        className="move-step-admin mb-3 mt-3"
                                    >
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
