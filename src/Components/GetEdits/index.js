import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const GetEdits = () => {
  const [edits, setEdits] = useState([]);
  const location = useLocation();
  const editContainerRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const fetchEdits = async () => {
      try {
        const response = await fetch('https://localhost:7220/api/product-edits');
        if (!response.ok) {
          throw new Error('Failed to fetch edits');
        }
        const data = await response.json();

        // Sort edits by upload date (assuming there is a 'createdAt' field)
        const sortedEdits = data.results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Limit to the latest 7 edits
        const latestEdits = sortedEdits.slice(0, 6);

        setEdits(latestEdits);

        // Start scrolling automatically
        startScrolling();
      } catch (error) {
        console.error('Error fetching edits:', error);
      }
    };

    fetchEdits();

    // Cleanup function to stop scrolling when component unmounts
    return () => {
      stopScrolling();
    };
  }, []);

  // Function to start automatic scrolling
  const startScrolling = () => {
    scrollInterval.current = setInterval(() => {
      if (editContainerRef.current) {
        editContainerRef.current.scrollLeft += editContainerRef.current.offsetWidth; // Scroll one edit width
      }
    }, 5000); // Adjust scroll interval as needed (e.g., every 5 seconds)
  };

  // Function to stop automatic scrolling
  const stopScrolling = () => {
    clearInterval(scrollInterval.current);
  };

  return (
    <div className="edit_nav_cards">
      <div className="edits-nav-cards filter-container">
        <div className="row" style={{ overflowX: "auto" }} ref={editContainerRef}>
          {edits.map((edit) => (
            <div key={edit.id} className="col-md-2 col-sm-4 col-6">
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
                      height: '300px', // Adjust edit height as needed
                      display: 'block',
                      width:"250px"
                    }}
                  ></Link>
                </div>
                <div className="card-footer rounded-0 p-3 border-0">
                  <Link to={`/Edits/${edit.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <h6 className="text-center">{edit.name}</h6>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetEdits;
