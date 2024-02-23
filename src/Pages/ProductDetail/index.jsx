import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import TopHeader from "../../Components/TopHeader";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState(null);

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

    useEffect(() => {
        if (product && product.productImages && product.productImages.length > 0) {
            setMainImage(product.productImages[0].url);
        }
    }, [product]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, brand, id, typeId, categoryId, designerId, editId, size, isAvailable, color, condition, sellPrice, rentPrice4Days, rentPrice8Days, rentPrice16Days, rentPrice30Days, rrp, code, details, isEbayStore, deletedBy, modifiedBy, createdBy, productImages } = product;

    return (
        <>
            <TopHeader />
            <Container className="mt-5">
                <h1>Product Detail: {name}</h1> {/* Display product name */}
                <Row>
                <Col md={6}>
                        <h2>Product Images</h2>
                        <Row>
                            <div className='col-6 col-lg-6 px-0'>
                                
                            
                            <Col xs={6}>

                           
                                    {productImages &&
                                        productImages.slice(1).map((image, index) => (
                                            <div className='product-thumbnails -vertical slick-initialized slick-slider slick-vertical'>
                                            
                                                <Image
                                                className='product-thumbnail-image'
                                                    src={image.url}
                                                    alt={`Product Image ${index + 1}`}
                                                    thumbnail
                                                    onClick={() => setMainImage(image.url)
                                                    }
                                                />

                                            
                                            </div>
                                        ))}
                                
                            </Col>
                            <div className='product-gallery'>
                                    <div className='component product-gallery'>
                            {mainImage && (
                                <Col xs={12} className="mb-3">
                                    <Image src={mainImage} alt={`Main Product Image`} className='product-image-item' fluid />
                                </Col>
                            )}
                            </div>
                            </div>
                            </div>
                        </Row>
                    </Col>
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
                   
                </Row>
            </Container>
        </>
    );
};

export default ProductDetail;
