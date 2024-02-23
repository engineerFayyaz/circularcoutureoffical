import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EmailSubscription from "../../Components/EmailSubscription";
import EditFilter from "../../Components/EditFilter";

const BlackTie = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const editId = queryParams.get('editId');
    const editName = queryParams.get('editName');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (editId) {
                    const response = await fetch(`https://localhost:7220/api/products/edit/${editId}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch products');
                    }
                    const data = await response.json();
                    setProducts(data.results);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [editId]); 

    return (
        <>
            <TopHeader />
            <div className="main-container collection-search overflow-auto">
                <div className="search-page">
                    <div className="static-page-header-bar">
                        <div className="filter-container mx-auto">
                            <div
                                className="header-contents d-flex"
                                data-controller="plp--description"
                            >
                                <div>
                                    <h1 className="title">
                                        <i>{editName}</i> 
                                    </h1>
                                    <div
                                        className="description mt-2 transition collapsed"
                                        data-target="plp--description.content"
                                    >
                                        <div className="trix-content">
                                            Consider this your one-stop shop for event dressing. From floor-length gowns to fitted midis from New Arrivals, 16Arlington, Taller Marmo and more.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <EditFilter />
                    <div className="row">
                        {products.map(product => (
                            <div key={product.id} className="col-md-4 mb-4">
                                <div className="card h-100">
                                    {product.productImages.length > 0 && <img src={product.productImages[0].url} className="card-img-top" alt={product.name} />}
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.details}</p>
                                        <p className="card-text">Sale Price: {product.sellPrice}</p>
                                        <p className="card-text">Rent Price (4 Days): {product.rentPrice4Days}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <EmailSubscription />
            <Footer />
        </>
    );
};

export default BlackTie;
