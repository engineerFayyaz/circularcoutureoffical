import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import TopHeader from "../../Components/TopHeader";
import { Link } from "react-router-dom";

const ProductDetail = () => {
    const { productId, productName } = useParams();


    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://localhost:7220/api/products/${productId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProduct(data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();

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

    const { name, brand, id, typeId, categoryId, size, isAvailable, color, condition, sellPrice, rentPrice4Days, rentPrice8Days, rentPrice16Days, rentPrice30Days, rrp, code, details, isEbayStore, deletedBy, modifiedBy, createdBy, productImages } = product;

    return (
        <>
            <TopHeader />
            {/* <Container className="mt-5" style={{marginTop:"10rem !important"}}>
                <h1>Product Detail: {name}</h1>
                <Row>
                    <Col md={6}>
                        <h2>Product Images</h2>
                        <Row>
                            <div className='col-6 col-lg-6 px-0'>
                                <Col xs={6}>
                                    {productImages &&
                                        productImages.slice(1).map((image, index) => (
                                            <div className='product-thumbnails -vertical slick-initialized slick-slider slick-vertical' key={index}>
                                                <Image
                                                    className='product-thumbnail-image'
                                                    src={image.url}
                                                    alt={`Product Image ${index + 1}`}
                                                    thumbnail
                                                    onClick={() => setMainImage(image.url)}
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
            </Container> */}

            <div className="product-display row" style={{ marginTop: "10rem" }}>
                <div className="col-12 col-lg-6 px-0">
                    <div className="product-gallery">
                        <div
                            className="component product-gallery"
                            data-controller="product-gallery-component"
                        >
                            <div
                                className="product-thumbnails -vertical slick-initialized slick-slider slick-vertical"
                                data-product-gallery-component-target="thumbnailsVertical"
                                id="productThumbnails"
                            >
                                <div
                                    className="slick-list draggable"
                                    style={{
                                        height: '768px'
                                    }}
                                >
                                    <div
                                        className="slick-track"
                                        style={{
                                            height: '512px',
                                            opacity: '1',
                                            transform: 'translate3d(0px, 0px, 0px)'
                                        }}
                                    >
                                        <div
                                            aria-hidden="false"
                                            className="slick-slide slick-current slick-active"
                                            data-slick-index="0"
                                            style={{
                                                width: '78px'
                                            }}
                                        >
                                            <div>
                                                {productImages &&
                                                    productImages.slice(1).map((image, index) => (
                                                        <div className='product-thumbnails -vertical slick-initialized slick-slider slick-vertical' key={index} 
                                                        style={{height:"110px"}}
                                                        >
                                                            <Image
                                                                className='product-thumbnail-image'
                                                                src={image.url}
                                                                alt={`Product Image ${index + 1}`}
                                                                style={{height:"100%"}}
                                                                thumbnail
                                                                onClick={() => setMainImage(image.url)}
                                                            />
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product-image-wrapper">
                                <div
                                    className="carousel slick-initialized slick-slider"
                                    data-product-gallery-component-target="mainImage"
                                    id="mainSlick"
                                >
                                    <div className="slick-list draggable">
                                        <div
                                            className="slick-track"
                                            style={{
                                                opacity: '1',
                                                width: '2376px'
                                            }}
                                        >
                                            <div
                                                aria-hidden="false"
                                                className="slick-slide slick-current slick-active"
                                                data-slick-index="0"
                                                style={{
                                                    left: '0px',
                                                    opacity: '1',
                                                    position: 'relative',
                                                    top: '0px',
                                                    width: '594px',
                                                    zIndex: '999',
                                                    height:"760px"
                                                }}
                                            >
                                                <div>
                                                    {mainImage && (
                                                        <Col xs={12} className="mb-3">
                                                            <Image src={mainImage} alt={`Main Product Image`} className='product-image-item' style={{height:"100%"}} fluid />
                                                        </Col>
                                                    )}
                                                </div>
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                className="slick-slide"
                                                data-slick-index="1"
                                                style={{
                                                    left: '-594px',
                                                    opacity: '0',
                                                    position: 'relative',
                                                    top: '0px',
                                                    width: '594px',
                                                    zIndex: '998'
                                                }}
                                                tabIndex="-1"
                                            >
                                                <div>
                                                    <img
                                                        alt="Rent The Mini Night Tremors sequin - The Vampire’s Wife | CIRCULAR COUTURE"
                                                        className="product-image-item"
                                                        data-product-gallery-component-target="image"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_900,q_auto:best,w_600/fihg58jwp2dikkw89y5k1pi6x02v"
                                                        style={{
                                                            display: 'inline-block',
                                                            opacity: '1',
                                                            width: '100%'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                className="slick-slide"
                                                data-slick-index="2"
                                                style={{
                                                    left: '-1188px',
                                                    opacity: '0',
                                                    position: 'relative',
                                                    top: '0px',
                                                    width: '594px',
                                                    zIndex: '998'
                                                }}
                                                tabIndex="-1"
                                            >
                                                <div>
                                                    <img
                                                        alt="Rent The Mini Night Tremors sequin - The Vampire’s Wife | CIRCULAR COUTURE"
                                                        className="product-image-item"
                                                        data-product-gallery-component-target="image"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_900,q_auto:best,w_600/tcjb09injav1h2e8g7y3qsgi3xej"
                                                        style={{
                                                            display: 'inline-block',
                                                            opacity: '1',
                                                            width: '100%'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-hidden="true"
                                                className="slick-slide"
                                                data-slick-index="3"
                                                style={{
                                                    left: '-1782px',
                                                    opacity: '0',
                                                    position: 'relative',
                                                    top: '0px',
                                                    width: '594px',
                                                    zIndex: '998'
                                                }}
                                                tabIndex="-1"
                                            >
                                                <div>
                                                    <img
                                                        alt="Rent The Mini Night Tremors sequin - The Vampire’s Wife | CIRCULAR COUTURE"
                                                        className="product-image-item"
                                                        data-lazy="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_900,q_auto:best,w_600/32p6dt7wdj7k37umetejcxlo50rm"
                                                        data-product-gallery-component-target="image"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/product-lazy-template-c7212d0edfbabccebcb34e85c5e002f9"
                                                        style={{
                                                            display: 'inline-block',
                                                            width: '100%'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <turbo-frame class="wishlist_button_component_8813361">
                                    <button
                                        className="component wishlist-button"
                                        data-action="wishlist-button-component#toggleWishlist"
                                        data-controller="wishlist-button-component"
                                        data-wishlist-button-component-authenticated-value="false"
                                        data-wishlist-button-component-current-page-path-value="/listings/the-mini-night-tremors-sequinn-9887"
                                        data-wishlist-button-component-url-value="/wishlist_toggle/8813361"
                                        data-wishlist-count="49"
                                        target="_top"
                                    >
                                        {' '}
                                        <img
                                            alt="An icon of a heart"
                                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/heart-7dd5f36c98ccda2c8242b92c95914d6e.svg"
                                        />
                                    </button>
                                </turbo-frame>
                                <button
                                    className="component listing-share-button d-none"
                                    data-action="click->listing-share-button-component#show"
                                    data-controller="listing-share-button-component"
                                    data-listing-share-button-component-text-value="Rent this The Mini Night Tremors Sequin dress from The Vampire’s Wife, available now on CIRCULAR COUTURE — Europe's leading fashion rental destination."
                                    data-listing-share-button-component-title-value="CIRCULAR COUTURE"
                                    data-listing-share-button-component-url-value="https://www.circular-couturecollective.com/listings/the-mini-night-tremors-sequinn-9887"
                                >
                                    {' '}
                                    <img
                                        alt="An icon of a share listing icon"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/share-listing-icon-2fd44a33fc576364c29cac2253b3b5b6.svg"
                                    />
                                </button>
                                <button
                                    className="next slick-arrow"
                                    data-product-gallery-component-target="nextArrow"
                                    style={{}}
                                >
                                    <img
                                        alt="An icon of a chevron right"
                                        height="24"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/chevron-right-4d9dc1896a4765e272ce510a3e1d363f.svg"
                                        width="24"
                                    />
                                </button>
                                <button
                                    className="prev slick-arrow"
                                    data-product-gallery-component-target="prevArrow"
                                    style={{}}
                                >
                                    <img
                                        alt="An icon of a chevron left"
                                        height="14"
                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/chevron-left-218bf512919cbc55739cb2f87ee19df1.svg"
                                        width="18"
                                    />
                                </button>
                                <div
                                    className="product-thumbnails -horizontal slick-initialized slick-slider"
                                    data-product-gallery-component-target="thumbnailsHorizontal"
                                    id="productThumbnails"
                                    style={{}}
                                >
                                    <div className="slick-list draggable">
                                        <div
                                            className="slick-track"
                                            style={{
                                                opacity: '1',
                                                transform: 'translate3d(0px, 0px, 0px)',
                                                width: '0px'
                                            }}
                                        >
                                            <div
                                                aria-hidden="false"
                                                className="slick-slide slick-current slick-active"
                                                data-slick-index="0"
                                                style={{
                                                    width: '0px'
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="Image 1 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                                                        className="product-thumbnail-image"
                                                        data-product-gallery-component-target="image"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/ztu45631fl6i688u8ucuy4wt1sy3"
                                                        style={{
                                                            display: 'inline-block',
                                                            opacity: '1',
                                                            width: '100%'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-hidden="false"
                                                className="slick-slide slick-active"
                                                data-slick-index="1"
                                                style={{
                                                    width: '0px'
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="Image 2 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                                                        className="product-thumbnail-image"
                                                        data-product-gallery-component-target="image"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/fihg58jwp2dikkw89y5k1pi6x02v"
                                                        style={{
                                                            display: 'inline-block',
                                                            opacity: '1',
                                                            width: '100%'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-hidden="false"
                                                className="slick-slide slick-active"
                                                data-slick-index="2"
                                                style={{
                                                    width: '0px'
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="Image 3 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                                                        className="product-thumbnail-image"
                                                        data-product-gallery-component-target="image"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/tcjb09injav1h2e8g7y3qsgi3xej"
                                                        style={{
                                                            display: 'inline-block',
                                                            opacity: '1',
                                                            width: '100%'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                aria-hidden="false"
                                                className="slick-slide slick-active"
                                                data-slick-index="3"
                                                style={{
                                                    width: '0px'
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="Image 4 of the black The Mini Night Tremors sequin by The Vampire’s Wife"
                                                        className="product-thumbnail-image"
                                                        data-product-gallery-component-target="image"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/upload/c_crop,h_2665,w_1777,x_111,y_0/c_fill,f_webp,h_320,q_auto:best,w_200/32p6dt7wdj7k37umetejcxlo50rm"
                                                        style={{
                                                            display: 'inline-block',
                                                            opacity: '1',
                                                            width: '100%'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 px-0">
                    <div className="product-details ml-0 ml-lg-auto">
                        <div className="component product-header">
                            <div className="listed-by">
                                {' '}Listed by{' '}
                                <Link to="/members/circular-couture-hu-49619">
                                    MATCHES
                                </Link>
                            </div>
                            <div className="product-title">
                                <Link to="/designers/the-vampire-s-wife">
                                    <h1 className="brand-name">
                                        {name}
                                    </h1>
                                </Link>
                                <h1 className="item-name">
                                    Rent The {name}
                                </h1>
                            </div>
                            <div className="reviews">
                                <div className="badge-section">
                                    {' '}
                                    <span className="badge p-0">
                                        <div
                                            className="component badge primary large"
                                            data-target="#managed-by-circular-couture"
                                            data-toggle="modal"
                                        >
                                            Managed by{' '}
                                            <span className="logo">
                                                CIRCULAR COUTURE
                                            </span>
                                            {' '}
                                            <img
                                                alt="An icon of a info"
                                                height="17"
                                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                                                width="17"
                                            />
                                        </div>
                                    </span>
                                    <div
                                        className="component modal managed-by-circular-couture fade"
                                        data-controller="modal-component"
                                        data-modal-component-state-value="hide"
                                        id="managed-by-circular-couture"
                                    >
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                {' '}
                                                <span
                                                    className="close-modal"
                                                    data-action="click->modal-component#hideModal"
                                                >
                                                    <img
                                                        alt="An icon of a close"
                                                        height="24"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                                                        width="24"
                                                    />
                                                </span>
                                                <h3 className="text-center">
                                                    what are managed items?
                                                </h3>
                                                <p>
                                                    {' '}Managed items are pieces CIRCULAR COUTURE looks after on our brands’                                                        behalf. You can easily recognise them from their MANAGED tag.{' '}
                                                </p>
                                                <p>
                                                    They are professionally cleaned by Oxwash, include free return shipping                                                        and are available for next day shipping if you book by midday.
                                                </p>
                                                <p>
                                                    <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/4419475865105-What-does-MANAGED-mean-">
                                                        Click                                                            here to learn more
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="component modal top-lender fade"
                                        data-controller="modal-component"
                                        data-modal-component-state-value="hide"
                                        id="top-lender"
                                    >
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                {' '}
                                                <span
                                                    className="close-modal"
                                                    data-action="click->modal-component#hideModal"
                                                >
                                                    <img
                                                        alt="An icon of a close"
                                                        height="24"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                                                        width="24"
                                                    />
                                                </span>
                                                <h3 className="text-center">
                                                    what are TOP LENDERS?
                                                </h3>
                                                <p>
                                                    {' '}Top Lenders are a group of some of the most trusted and best performing                                                        members of the CIRCULAR COUTURE marketplace. You can easily recognise                                                        them by looking for the badge on item and profile pages. You can also                                                        filter the marketplace to only show items from Top Lender wardrobes.
                                                </p>
                                                <p>
                                                    <Link to="https://help.circular-couturecollective.com/hc/en-us/articles/5136087908753-What-is-a-Top-Lender-">
                                                        Click                                                            here to learn more
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="accordion"
                            id="productOptionAccordion"
                        >
                            <div
                                className="component product-rent"
                                data-controller="product-rent-component"
                                data-product-rent-component-current-frame-url="https://www.circular-couturecollective.com/listings/the-mini-night-tremors-sequinn-9887"
                                data-product-rent-component-current-path-value="https://www.circular-couturecollective.com/listings/the-mini-night-tremors-sequinn-9887"
                            >
                                <label
                                    className="header"
                                    htmlFor="product_rent"
                                >
                                    <h5 className="title">
                                        Rent
                                        <div className="sub-title">
                                            {' '}From {rentPrice4Days} / 4 days{' '}
                                        </div>
                                        <div className="retail">
                                            <span className="price">
                                                Retail {rrp}
                                            </span>
                                            <span className="saves">
                                                Save {(rrp - rentPrice4Days)}
                                            </span>
                                        </div>
                                    </h5>
                                </label>
                                <div

                                >
                                    <form className="content collapse show" >
                                        <div className="sizes">
                                            <div className="titles">
                                                <div
                                                    className="size-title"
                                                    id="size-section"
                                                >
                                                    Size *
                                                </div>
                                                <div>
                                                    {' '}
                                                    <Link
                                                        className="size-detail"
                                                        data-target="#size-detail"
                                                        data-toggle="modal"
                                                        to="#"
                                                    >
                                                        Size details
                                                    </Link>
                                                    {' '}
                                                    <Link
                                                        className="size-guide"
                                                        data-target="#size-guide"
                                                        data-toggle="modal"
                                                        to="#"
                                                    >
                                                        Size guide
                                                    </Link>
                                                    {' '}
                                                </div>
                                            </div>
                                            <select
                                                className="component dropdown js-product-rent-unit-id"
                                                style={{
                                                    color: 'inherit'
                                                }}
                                            >
                                                <option
                                                    disabled
                                                    selected
                                                    value=""
                                                >
                                                    Select Size
                                                </option>
                                                <option value="29708b35-6b0b-4b55-aafe-62e103ff91bc">
                                                    {size}
                                                </option>
                                            </select>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="badge-section">
                                                <div
                                                    className="component badge neutral small"
                                                >
                                                    Worried about fit?
                                                    <img
                                                        alt="An icon of a info"
                                                        height="17"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                                                        width="17"
                                                        className='m-0'
                                                    />
                                                </div>
                                            </div>
                                            <div className="sizes">

                                                <Link
                                                    className="size-detail"
                                                    data-target="#size-detail"
                                                    data-toggle="modal"
                                                    to="#"
                                                >
                                                    Size details
                                                </Link>

                                                <Link
                                                    className="size-guide"
                                                    data-target="#size-guide"
                                                    data-toggle="modal"
                                                    to="#"
                                                >
                                                    Size guide
                                                </Link>

                                            </div>
                                        </div>
                                        <div
                                            className="rental-period-section"
                                            data-product-rent-component-target="rentalPeriodSection"
                                            id="rental-period-section"
                                        >
                                            <div className="title">
                                                Rental period *
                                            </div>
                                            <div className="rental-rates-description">
                                                <div className="icon d-md-flex align-items-md-center">
                                                    {/* <img
                            alt="An icon of a tag"
                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/tag-bfe411d6a970aecf12dae86f548ae4f9.svg"
                          /> */}
                                                </div>
                                                {' '}Longer rentals mean lower daily rates and bigger savings.
                                            </div>
                                            <div className="period-boxes row">
                                                <input
                                                    autoComplete="off"
                                                    className="rental-period-field js-number-of-day-rental"
                                                    hidden
                                                    name="rental[number_of_day_rental]"
                                                    id="number_of_day_rental1"
                                                    type="radio"
                                                />
                                                <label
                                                    className="col-6 period-box-column m-0 px-0 pr-2 pb-3"
                                                    htmlFor="number_of_day_rental1"
                                                >
                                                    <div
                                                        className="period-box"
                                                        data-product-rent-component-target="rentalPeriodBox"
                                                    >
                                                        <div className="days-2">
                                                            4 days
                                                        </div>
                                                        <div className="price-2">
                                                            {rentPrice4Days}
                                                        </div>
                                                        <div className="price-2">
                                                            {' '}
                                                            <span className="cost-per-day">
                                                                {rentPrice4Days / 4}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </label>
                                                <input
                                                    autoComplete="off"
                                                    className="rental-period-field js-number-of-day-rental"

                                                    data-duration-price={rentPrice8Days}
                                                    defaultValue="8"
                                                    hidden
                                                    id="number_of_day_rental2"
                                                    name="rental[number_of_day_rental]"
                                                    type="radio"
                                                />
                                                <label
                                                    className="col-6 period-box-column m-0 px-0 pl-2"
                                                    htmlFor="number_of_day_rental2"
                                                >
                                                    <div
                                                        className="period-box"
                                                        data-product-rent-component-target="rentalPeriodBox"
                                                    >
                                                        <div className="days-2">
                                                            8 days
                                                        </div>
                                                        <div className="price-2">
                                                            {rentPrice8Days}
                                                        </div>
                                                        <div className="price-2">
                                                            {' '}
                                                            <span className="cost-per-day">
                                                                {rentPrice8Days / 8}/day
                                                            </span>
                                                            <span className="discount-percentage">
                                                                {' '}Save 25%
                                                            </span>
                                                            {' '}
                                                        </div>
                                                    </div>
                                                </label>
                                                <input
                                                    autoComplete="off"
                                                    className="rental-period-field js-number-of-day-rental"

                                                    data-duration-price={rentPrice16Days}
                                                    defaultValue="16"
                                                    hidden
                                                    id="number_of_day_rental5"
                                                    name="rental[number_of_day_rental]"
                                                    type="radio"
                                                />
                                                <label
                                                    className="col-6 period-box-column m-0 px-0 pr-2 pb-3"
                                                    htmlFor="number_of_day_rental5"
                                                >
                                                    <div
                                                        className="period-box"
                                                        data-product-rent-component-target="rentalPeriodBox"
                                                    >
                                                        <div className="days-2">
                                                            16 days
                                                        </div>
                                                        <div className="price-2">
                                                            {rentPrice16Days}
                                                        </div>
                                                        <div className="price-2">
                                                            {' '}
                                                            <span className="cost-per-day">
                                                                {rentPrice16Days / 16}/day
                                                            </span>
                                                            <span className="discount-percentage">
                                                                {' '}Save 34%
                                                            </span>
                                                            {' '}
                                                        </div>
                                                    </div>
                                                </label>
                                                <input
                                                    autoComplete="off"
                                                    className="rental-period-field js-number-of-day-rental"
                                                    data-duration-price={rentPrice30Days}
                                                    defaultValue="30"
                                                    hidden
                                                    id="number_of_day_rental6"
                                                    name="rental[number_of_day_rental]"
                                                    type="radio"
                                                />
                                                <label
                                                    className="col-6 period-box-column m-0 px-0 pl-2"
                                                    htmlFor="number_of_day_rental6"
                                                >
                                                    <div
                                                        className="period-box"
                                                        data-product-rent-component-target="rentalPeriodBox"
                                                    >
                                                        <div className="days-2">
                                                            30 days
                                                        </div>
                                                        <div className="price-2">
                                                            {rentPrice30Days}
                                                        </div>
                                                        <div className="price-2">
                                                            {' '}
                                                            <span className="cost-per-day">
                                                                {rentPrice30Days / 30}/day
                                                            </span>
                                                            <span className="discount-percentage">
                                                                {' '}Save 56%
                                                            </span>
                                                            {' '}
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="badge-section">
                                                <div
                                                    className="component badge neutral small"
                                                    data-target="#how-does-pricing-work"
                                                    data-toggle="modal"
                                                >
                                                    {' '}How does pricing work{' '}
                                                    <img
                                                        alt="An icon of a info"
                                                        height="17"
                                                        src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                                                        width="17"
                                                        className='m-0'
                                                    />
                                                </div>
                                                <div
                                                    className="component modal how-does-pricing-work fade"
                                                    data-controller="modal-component"
                                                    data-modal-component-state-value="hide"
                                                    id="how-does-pricing-work"
                                                >
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            {' '}
                                                            <span
                                                                className="close-modal"
                                                                data-action="click->modal-component#hideModal"
                                                            >
                                                                <img
                                                                    alt="An icon of a close"
                                                                    height="24"
                                                                    src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                                                                    width="24"
                                                                />
                                                            </span>
                                                            <h3 className="text-center">
                                                                How does pricing work?
                                                            </h3>
                                                            <p>
                                                                The rental price of an item is determined by a combination of                                                                    both the item’s recommended retail price (RRP) and a day                                                                    rate which is calculated by our algorithms. The higher the                                                                    item’s RRP, the more competitive the day rate becomes. This                                                                    keeps rental prices fair and accessible on more expensive                                                                    items. It also means that longer rental periods become                                                                    better value options to our customers without compromising                                                                    on payouts to our Lender community.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <input
                                            autoComplete="off"
                                            className="js-product-rent-pickup-date"
                                            data-action="change->product-rent-component#updateAddToBagDate"
                                            data-product-rent-component-target="pickupDate"
                                            id="pickupDate"
                                            name="rental[pickup_date]"
                                            type="hidden"
                                        />
                                        <input
                                            autoComplete="off"
                                            className="js-product-rent-return-date"
                                            data-product-rent-component-target="returnDate"
                                            id="returnDate"
                                            name="rental[return_date]"
                                            type="hidden"
                                        />
                                        <div
                                            className="rental-dates-section d-none"
                                            data-product-rent-component-target="rentalDatesSection"
                                            id="pick-up-date-section"
                                        >
                                            <div className="title">
                                                Dates *
                                            </div>
                                            <p>
                                                Tap to select Start Date, preferably 1-2 days before you plan to wear it.
                                            </p>
                                            <turbo-frame
                                                complete=""
                                                id="rental_dates_calendar_component_frame"
                                                src="https://www.circular-couturecollective.com/component_loader/pdp_sections/rental_dates_calendar_component_frame?listing_id=74496"
                                                target="_top"
                                            >
                                                <div
                                                    className="component rental-dates-calendar flex-column"
                                                    data-controller="rental-dates-calendar-component"
                                                    data-rental-dates-calendar-component-blocked-dates-for-start-date-value="[]"
                                                    data-rental-dates-calendar-component-duration-value="4"
                                                    data-rental-dates-calendar-component-end-date-target-field-value="#returnDate"
                                                    data-rental-dates-calendar-component-open-in-connect-value="false"
                                                    data-rental-dates-calendar-component-price-value="0"
                                                    data-rental-dates-calendar-component-start-date-target-field-value="#pickupDate"
                                                    data-rental-dates-calendar-component-unavailable-dates-value="[]"
                                                >
                                                    <div
                                                        className="date-range-wrapper"
                                                        data-rental-dates-calendar-component-target="calendarWrapper"
                                                    >
                                                        <input
                                                            className="d-none"
                                                            data-rental-dates-calendar-component-target="field"
                                                            defaultValue=""
                                                            readOnly
                                                            type="text"
                                                        />
                                                        <div className="daterangepicker ltr show-calendar opensleft">
                                                            <div className="ranges" />
                                                            <div className="drp-calendar left">
                                                                <div className="calendar-table" />
                                                                <div
                                                                    className="calendar-time"
                                                                    style={{
                                                                        display: 'none'
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="drp-calendar right">
                                                                <div className="calendar-table" />
                                                                <div
                                                                    className="calendar-time"
                                                                    style={{
                                                                        display: 'none'
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="drp-buttons">
                                                                <span className="drp-selected" />
                                                                <button
                                                                    className="cancelBtn btn btn-sm btn-default"
                                                                    type="button"
                                                                >
                                                                    Cancel
                                                                </button>
                                                                <button
                                                                    className="applyBtn btn btn-sm btn-primary"
                                                                    disabled
                                                                    type="button"
                                                                >
                                                                    Apply
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="badge-section mt-3">
                                                        <div
                                                            className="component badge neutral small"
                                                            data-target="#what-these-dates-mean"
                                                            data-toggle="modal"
                                                        >
                                                            {' '}
                                                            <img
                                                                alt="An icon of a info"
                                                                height="17"
                                                                src="https://res.cloudinary.com/dcaptnlz3/image/asset/info-fdd04def8949c7d9ad7c87895d8399a7.svg"
                                                                width="17"
                                                            />
                                                            What these dates mean?{' '}
                                                        </div>
                                                        <div
                                                            className="component modal what-these-dates-mean fade"
                                                            data-controller="modal-component"
                                                            data-modal-component-state-value="hide"
                                                            id="what-these-dates-mean"
                                                        >
                                                            <div className="modal-dialog modal-dialog-centered">
                                                                <div className="modal-content">
                                                                    {' '}
                                                                    <span
                                                                        className="close-modal"
                                                                        data-action="click->modal-component#hideModal"
                                                                    >
                                                                        <img
                                                                            alt="An icon of a close"
                                                                            height="24"
                                                                            src="https://res.cloudinary.com/dcaptnlz3/image/asset/close-fec2062f4c7f143606f4dbba3b18c362.svg"
                                                                            width="24"
                                                                        />
                                                                    </span>
                                                                    <h3 className="text-center">
                                                                        WHAT THESE DATES MEAN?
                                                                    </h3>
                                                                    <p>
                                                                        The Start Date is the date on which you can expect                                                                            your item to arrive, although it could get to you                                                                            sooner. If you are renting for an event, we                                                                            recommend setting the Start Date a few days before.
                                                                    </p>
                                                                    <p>
                                                                        The End Date is the date by which you should have                                                                            sent the item back in the post to its owner. If this                                                                            is a Sunday, then you should send the item back on                                                                            the Saturday or Monday and let the Lender know.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="rental-arrivals mt-4 d-none"
                                                        data-rental-dates-calendar-component-target="rentalArrivalDetails"
                                                    >
                                                        <div>
                                                            {' '}
                                                            <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/calendar-start-7742e6ccc0cab85129683829feabd3d1.svg" />
                                                            Arrives by{' '}
                                                            <span data-rental-dates-calendar-component-target="arrivalDate">
                                                                Monday, 26th September{' '}
                                                            </span>
                                                            {' '}
                                                        </div>
                                                        <div>
                                                            {' '}
                                                            <img src="https://res.cloudinary.com/dcaptnlz3/image/asset/calendar-end-a386fb60addd1db6f73cacbf7cfb7729.svg" />
                                                            Return by{' '}
                                                            <span data-rental-dates-calendar-component-target="returningDate">
                                                                Monday, 3rd October{' '}
                                                            </span>
                                                            {' '}
                                                        </div>
                                                    </div>
                                                    <div className="total-price-wrapper">
                                                        {' '}Total:{' '}
                                                        <span data-rental-dates-calendar-component-target="totalPrice">
                                                            AU$0.00
                                                        </span>
                                                        {' '}
                                                    </div>
                                                </div>
                                            </turbo-frame>
                                        </div>
                                        <div className="actions">
                                            <button
                                                className="w-100 js-product-rent-submit-button component button primary "
                                                data-action="product-rent-component#validate"
                                                name="button"
                                                target="_top"
                                                type="submit"
                                            >
                                                <div className="title ">
                                                    {' '}Rent Now{' '}
                                                </div>
                                            </button>
                                            <turbo-frame
                                                complete=""
                                                id="add_to_bag_button_component_frame"
                                                src="https://www.circular-couturecollective.com/component_loader/pdp_sections/add_to_bag_button_component_frame?listing_id=74496&unit_id="
                                                target="_top"
                                            >
                                                <button
                                                    className="w-100 js-add-to-bag-button component button tertiary "
                                                    data-action="product-rent-component#validate"
                                                    name="button"
                                                    target="_top"
                                                    type="button"
                                                >
                                                    <div className="title ">
                                                        {' '}
                                                        <span>
                                                            Add To Bag
                                                        </span>
                                                        {' '}
                                                    </div>
                                                </button>
                                            </turbo-frame>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
