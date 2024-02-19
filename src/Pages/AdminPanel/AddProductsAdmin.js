import React, { useState, useEffect } from "react";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import axios from "axios";


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
        productImages: [],
    });

    const [selectedImages, setSelectedImages] = useState([]);

    const [categories, setCategories] = useState([]);
    const [designers, setDesigners] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchCategories();
        fetchDesigners();
        fetchProductTypes();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch("https://localhost:7220/api/product-categories");
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
            setProductTypes(data.results);
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
        setSelectedImages([...selectedImages, ...e.target.files]);
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
            // Cloudinary configuration
            const cloudinaryConfig = {
                cloudName: 'lms-empty',
                apiKey: '465825886714436',
                apiSecret: '_XtyARctyPki8NutUmKpElof_Cw',
                uploadPreset: 'vikings',
                uploadUrl: 'https://api.cloudinary.com/v1_1/lms-empty/image/upload'
            };

            // Upload images to Cloudinary
            const formDataCloudinary = new FormData();
            selectedImages.forEach((image) => {
                formDataCloudinary.append("file", image);
                formDataCloudinary.append("upload_preset", cloudinaryConfig.uploadPreset);
            });
            const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`, formDataCloudinary);

            // Get image URLs from Cloudinary response
            const uploadedImageUrls = cloudinaryResponse.data.resources.map((resource) => resource.secure_url);

            // Prepare data to send to backend API
            const requestData = {
                ...formData,
                productImages: uploadedImageUrls.map((url, index) => ({ url, name: `Image ${index + 1}` })),
            };

            // Send data to backend API
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
  <Container fluid>
    <Row className="text-light" style={{ backgroundColor: "black", color: "white" }}>
      <AdminSideHeader />
      <Col lg={5} className="mt-4">
        <Row className="order-page-admin">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 mt-3 Category-admin">
              <Form.Label><b>Category*</b></Form.Label>
              <Form.Select name="categoryId" value={formData.categoryId} onChange={handleInputChange}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.type}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 mt-3 Category-admin">
              <Form.Label><b>Product Type*</b></Form.Label>
              <Form.Select name="typeId" value={formData.typeId} onChange={handleInputChange}>
                <option value="">Select Product Type</option>
                {productTypes.map((type) => (
                  <option key={type.id} value={type.id}>{type.type}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 mt-3 Category-admin">
              <Form.Label><b>Designer*</b></Form.Label>
              <Form.Control type="text" value={searchTerm} onChange={handleDesignerSearch} />
              <Form.Select name="designerId" value={formData.designerId} onChange={handleDesignerChange}>
                <option value="">Select Designer</option>
                {filteredDesigners.map((designer) => (
                  <option key={designer.id} value={designer.id}>{designer.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 mt-3 brand-admin">
              <Form.Label><b>Brand*</b></Form.Label>
              <Form.Control type="text" name="brand" value={formData.brand} onChange={handleInputChange} />
            </Form.Group>
            <br/>
            <Form.Group className="mb-4 mt-4">
              <Form.Label><b>Code*</b></Form.Label>
              <Form.Control type="text" name="code" value={formData.code} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>Name*</b></Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>Details*</b></Form.Label>
              <Form.Control type="text" name="details" value={formData.details} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3 Category-admin">
              <Form.Label><b>Size*</b></Form.Label>
              <Form.Control type="text" name="size" value={formData.size} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3 Category-admin">
              <Form.Label><b>Color*</b></Form.Label>
              <Form.Control type="text" name="color" value={formData.color} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>Condition*</b></Form.Label>
              <Form.Control type="text" name="condition" value={formData.condition} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>RRP*</b></Form.Label>
              <Form.Control type="text" name="rrp" value={formData.rrp} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>Sell Price*</b></Form.Label>
              <Form.Control type="text" name="sellPrice" value={formData.sellPrice} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>Rent Price 4 Days*</b></Form.Label>
              <Form.Control type="text" name="rentPrice4Days" value={formData.rentPrice4Days} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>Rent Price 8 Days*</b></Form.Label>
              <Form.Control type="text" name="rentPrice8Days" value={formData.rentPrice8Days} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>Rent Price 16 Days*</b></Form.Label>
              <Form.Control type="text" name="rentPrice16Days" value={formData.rentPrice16Days} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3 mt-3">
              <Form.Label><b>Rent Price 30 Days*</b></Form.Label>
              <Form.Control type="text" name="rentPrice30Days" value={formData.rentPrice30Days} onChange={handleInputChange} />
            </Form.Group>
                                  <Form.Group className="mb-3 mt-3 Category-admin">
                                      <Form.Label><b>Images*</b></Form.Label>
                                      <Form.Control type="file" name="image" id="image" accept="image/*" multiple onChange={handleImageChange} />
                                      <div>
                                          {selectedImages.map((image, index) => (
                                              <Image
                                                  key={index}
                                                  src={URL.createObjectURL(image)}
                                                  alt={`Product Image ${index + 1}`}
                                                  style={{ width: "100px", height: "100px", margin: "5px" }}
                                              />
                                          ))}
                                      </div>
                                  </Form.Group>

            <Button type="submit" className="move-step-admin mb-3 mt-3">Submit</Button>
          </Form>
        </Row>
      </Col>
    </Row>
  </Container>
</main>
    </>
  );
};

export default AddProductsAdmin;
