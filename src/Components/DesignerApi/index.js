import React, { useState, useEffect } from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const DesignerApi = () => {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    fetchDesigners();
  }, []);

  const fetchDesigners = async () => {
    try {
      const response = await fetch("https://circularclientapi.azurewebsites.net/api/product-designers");
      if (!response.ok) {
        throw new Error("Failed to fetch designers");
      }
      const data = await response.json();
      setDesigners(data.results.sort((a, b) => a.name.localeCompare(b.name))); // Sort designers by name
    } catch (error) {
      console.error("Error fetching designers:", error);
    }
  };

  // Group designers by the first letter of their name
  const groupedDesigners = designers.reduce((acc, designer) => {
    const firstLetter = designer.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(designer);
    return acc;
  }, {});

  return (
    <>
      <div className="designers-section" data-controller="designers-letter-bar">
        <div className="container mt-5">
          {/* Render designers grouped by first letter */}
          {Object.entries(groupedDesigners).map(([letter, designers]) => (
            <div key={letter} className="mt-3">
              <h3 className="fw-bold">{letter}</h3>
              <ul className="list-unstyled" style={{display:"grid"}}>
                {designers.slice(0,2).map((designer) => (
                  <li key={designer.id}>
                    <Link to={`/designers/${designer.id}/${encodeURIComponent(designer.name)}`}>
                      {designer.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DesignerApi;
