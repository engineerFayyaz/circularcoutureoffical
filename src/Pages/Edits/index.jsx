import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";

const Edits = () => {
    const [edits, setEdits] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchEdits = async () => {
            try {
                const response = await fetch('https://circularclientapi.azurewebsites.net/api/product-edits');
                if (!response.ok) {
                    throw new Error('Failed to fetch edits');
                }
                const data = await response.json();
                setEdits(data.results);
            } catch (error) {
                console.error('Error fetching edits:', error);
            }
        };

        fetchEdits();
    }, []);

    return (
        <>
            <TopHeader />
            <div className="main-container no-overflow-x pt-0 -with-cta-banner">
                <div className="search-page">
                    <div className="row no-gutters">
                        <div
                            className="header-bar col-md-12 text-center mt-0"
                            data-controller="admin--seo--static-page"
                        >
                            <h1 className="title">Rent The Edits</h1>
                            <div className="description">
                                <div className="trix-content">
                                    Our team of stylists have curated an extensive list of edits so that you can quickly and easily find the perfect piece, whatever the occasion.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <div className="row pb-5">
                                {edits.map((edit) => (
                                    <div key={edit.id} className="col-sm-6 col-lg-4 px-2 mt-3 mb-3">
                                        <div className="card edit-page-card rounded-0 border-0">
                                            <div className="card-body p-0">
                                                <Link
                                                    className="image-card edits-one mb-0"
                                                    to={{
                                                        pathname: `/Edits/${edit.name.toLowerCase().replace(/\s+/g, '-')}`,
                                                        search: `?editName=${encodeURIComponent(edit.name)}&editId=${edit.id}`
                                                    }}
                                                    style={{
                                                        backgroundImage: `url(${edit.imageUrl})`,
                                                        backgroundSize: 'cover',
                                                        maxHeight: '272px'
                                                    }}
                                                ></Link>
                                            </div>
                                            <div className="card-footer rounded-0 p-0 border-0">
                                                <Link to={`/Edits/${edit.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                                    <h3>{edit.name}</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EmailSubscription />
            <Footer />
        </>
    );
}

export default Edits;
