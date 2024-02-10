import React from "react";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css";
import { Link } from "react-router-dom";
const ViewAdminProducts = () => {
  return (

    <div>
        <AdminHeader/>
      <main>
        <div className="container-fluid">
          <div
            className="row  text-light "
            style={{ backgroundColor: "black", color: "white" }}
          >
            <AdminSideHeader/>
            <div className="col-lg-10">
              <div className="product-view">
                <h2 className="product-heading">Product Details :</h2>
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name:</th>
                      <th>Description:</th>
                      <th>Category:</th>
                      <th>Price:</th>
                      <th>Stock:</th>
                      <th>Images:</th>
                      <th>Status:</th>
                      <th>Created:</th>
                      <th>Last Updated:</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Product Name</td>
                      <td>Product Description</td>
                      <td>Product Category</td>
                      <td>Product Price</td>
                      <td>Product Stock</td>
                      <td> image</td>
                      <td>Active</td>
                      <td>01/01/2023</td>
                      <td>02/01/2023</td>
                      <td>
                        {" "}
                        <Link to="/AdminPanel/AddProductsAdmin">
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    {/* 2nd product */}
                    <tr>
                      <td>2</td>
                      <td>Product Name</td>
                      <td>Product Description</td>
                      <td>Product Category</td>
                      <td>Product Price</td>
                      <td>Product Stock</td>
                      <td> image</td>
                      <td>Active</td>
                      <td>01/01/2023</td>
                      <td>02/01/2023</td>
                      <td>
                        {" "}
                        <Link to="/AdminPanel/AddProductsAdmin">
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    {/* 3rd product */}
                    <tr>
                      <td>3</td>
                      <td>Product Name</td>
                      <td>Product Description</td>
                      <td>Product Category</td>
                      <td>Product Price</td>
                      <td>Product Stock</td>
                      <td> image</td>
                      <td>Active</td>
                      <td>01/01/2023</td>
                      <td>02/01/2023</td>
                      <td>
                        {" "}
                        <Link to="/AdminPanel/AddProductsAdmin">
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    {/* 4th product */}
                    <tr>
                      <td>4</td>
                      <td>Product Name</td>
                      <td>Product Description</td>
                      <td>Product Category</td>
                      <td>Product Price</td>
                      <td>Product Stock</td>
                      <td> image</td>
                      <td>Active</td>
                      <td>01/01/2023</td>
                      <td>02/01/2023</td>
                      <td>
                        {" "}
                        <Link to="/AdminPanel/AddProductsAdmin">
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    {/* 5th  */}
                    <tr>
                      <td>5</td>
                      <td>Product Name</td>
                      <td>Product Description</td>
                      <td>Product Category</td>
                      <td>Product Price</td>
                      <td>Product Stock</td>
                      <td> image</td>
                      <td>Active</td>
                      <td>01/01/2023</td>
                      <td>02/01/2023</td>
                      <td>
                        {" "}
                        <Link to="/AdminPanel/AddProductsAdmin">
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    {/* 6th */}
                    <tr>
                      <td>6</td>
                      <td>Product Name</td>
                      <td>Product Description</td>
                      <td>Product Category</td>
                      <td>Product Price</td>
                      <td>Product Stock</td>
                      <td> image</td>
                      <td>Active</td>
                      <td>01/01/2023</td>
                      <td>02/01/2023</td>
                      <td>
                        {" "}
                        <Link to="/AdminPanel/AddProductsAdmin">
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                    {/* 7th */}
                    <tr>
                      <td>7</td>
                      <td>Product Name</td>
                      <td>Product Description</td>
                      <td>Product Category</td>
                      <td>Product Price</td>
                      <td>Product Stock</td>
                      <td> image</td>
                      <td>Active</td>
                      <td>01/01/2023</td>
                      <td>02/01/2023</td>
                      <td>
                        {" "}
                        <Link to="/AdminPanel/AddProductsAdmin">
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        {" "}
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ViewAdminProducts;
