import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

// Directly define Cloudinary configuration variables
const cloudinaryConfig = {
    cloudName: 'lms-empty',
    apiKey: '465825886714436',
    apiSecret: '_XtyARctyPki8NutUmKpElof_Cw',
    uploadPreset: 'vikings',
    uploadUrl: 'https://api.cloudinary.com/v1_1/lms-empty/image/upload'
};

function AddEdits() {
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", cloudinaryConfig.uploadPreset);

                const response = await axios.post(cloudinaryConfig.uploadUrl, formData);
                if (response.status === 200) {
                    setImageUrl(response.data.secure_url);
                } else {
                    setError("Failed to upload image. Please try again later.");
                }
            } catch (error) {
                console.error("Error:", error);
                setError("An error occurred while uploading image. Please try again later.");
            }

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://localhost:7220/api/product-edits",
                {
                    name: name,
                    detail: detail,
                    imageUrl: imageUrl
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "accept": "*/*"
                    }
                }
            );

            if (response.status === 200) {
                setSuccessMessage("Product Edit added successfully!");
                setName("");
                setDetail("");
                setImageUrl("");
                setError(null);
            } else {
                setError("Failed to add Product Edit. Please try again later.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("An error occurred while adding Product Edit. Please try again later.");
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
                                <Form.Label>Edit Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product type" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Edit Details</Form.Label>
                                <Form.Control type="text" value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Product details" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Edit Image</Form.Label>
                                <div className="input-group">
                                    <Form.Control type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" required />
                                    <input id="file-input" type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
                                    <Button variant="outline-secondary" onClick={() => document.getElementById("file-input").click()}>
                                        <FontAwesomeIcon icon={faCamera} size="lg" />
                                    </Button>
                                </div>
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

export default AddEdits;
