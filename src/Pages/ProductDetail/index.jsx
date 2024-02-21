import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import TopHeader from "../../Components/TopHeader"

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://localhost:7220/api/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        fetchProduct();

        // Clean up function
        return () => {
            // Any cleanup code here
        };
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const {
        id,
        typeId,
        categoryId,
        designerId,
        editId,
        name,
        size,
        brand,
        isAvailable,
        color,
        condition,
        sellPrice,
        // price,
        rentPrice4Days,
        rentPrice8Days,
        rentPrice16Days,
        rentPrice30Days,
        rrp,
        code,
        details,
        isEbayStore,
        deletedBy,
        modifiedBy,
        createdBy,
        productImages
    } = product;

    return (
        <>
        <TopHeader/>
        <Container className="mt-5">
            <h1>Product Detail</h1>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Brand: {brand}</Card.Subtitle>
                            <Card.Text>ID: {id}</Card.Text>
                            <Card.Text>Type ID: {typeId}</Card.Text>
                            <Card.Text>Category ID: {categoryId}</Card.Text>
                            <Card.Text>Designer ID: {designerId}</Card.Text>
                            <Card.Text>Edit ID: {editId}</Card.Text>
                            <Card.Text>Size: {size}</Card.Text>
                            <Card.Text>Availability: {isAvailable ? 'Available' : 'Not Available'}</Card.Text>
                            <Card.Text>Color: {color}</Card.Text>
                            <Card.Text>Condition: {condition}</Card.Text>
                            <Card.Text>Sell Price: {sellPrice}</Card.Text>
                            {/* <Card.Text>Price: {price}</Card.Text> */}
                            <Card.Text>Rent Price (4 Days): {rentPrice4Days}</Card.Text>
                            <Card.Text>Rent Price (8 Days): {rentPrice8Days}</Card.Text>
                            <Card.Text>Rent Price (16 Days): {rentPrice16Days}</Card.Text>
                            <Card.Text>Rent Price (30 Days): {rentPrice30Days}</Card.Text>
                            <Card.Text>RRP: {rrp}</Card.Text>
                            <Card.Text>Code: {code}</Card.Text>
                            <Card.Text>Details: {details}</Card.Text>
                            <Card.Text>Is eBay Store: {isEbayStore ? 'Yes' : 'No'}</Card.Text>
                            <Card.Text>Deleted By: {deletedBy}</Card.Text>
                            <Card.Text>Modified By: {modifiedBy}</Card.Text>
                            <Card.Text>Created By: {createdBy}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <h2>Product Images</h2>
                    <Row>
                        {productImages.map((image, index) => (
                            <Col key={index} xs={6} md={4} className="mb-3">
                                <Image src={image.url} alt={`Product Image ${index}`} thumbnail />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default ProductDetail;
