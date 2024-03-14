import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryApi = () => {
  const [categories, setCategories] = useState([]);
  const [catogeryId, setcatogeryId] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    // Fetch product categories from the API
    axios.get("https://circularclientapi.azurewebsites.net/api/product-categories")
      .then(response => {
        console.log("Categories response:", response.data.results);
        setCategories(response.data.results);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (catogeryId) {
      // Fetch products based on the selected category ID
      axios.get(`https://circularclientapi.azurewebsites.net/api/products/catogery/${catogeryId}`)
        .then(response => {
          console.log("Products related to category ID", catogeryId, ":", response.data);
          // Assuming response.data is an array of products
          setFilteredProducts(response.data); // Set the fetched products
        })
        .catch(error => {
          console.error("Error fetching products:", error);
        });
    }
  }, [catogeryId]);

  const handleCategoryChange = (categoryId) => {
    setcatogeryId(categoryId);
  };

  return (
    <div style={{backgroundColor:"white !important"}}>
      {/* Render all categories */}
      {categories.slice(0,8).map(category => (
        <div key={category.id}>
          <input
            type="radio"
            name="category"
            id={category.id}
            checked={catogeryId === category.id}
            onChange={() => handleCategoryChange(category.id)}
          />
          <label htmlFor={category.id} className="ml-2" style={{fontSize:"15px"}}>{category.type}</label>
        </div>
      ))}
      
      {/* Display filtered products */}
      {filteredProducts.length > 0 && ( // Check if filteredProducts is not empty
        <div>
          <h2>Filtered Products</h2>
          <ul>
            {filteredProducts.map(product => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryApi;
