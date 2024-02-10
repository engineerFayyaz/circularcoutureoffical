import React from "react";
import AdminHeader from "../../Components/AdminHeader";
import AdminSideHeader from "../../Components/AdminSideHeader";
import "../../css/admin-header.css"

const AdminCategory=()=>{
    return(
        <>
        <AdminHeader/>
        <main>
  <div className="container-fluid">
    <div
      className="row  text-light "
      style={{ backgroundColor: "black", color: "white" }}
    >
        <AdminSideHeader/>
      <div className="col-lg-10 ">
        <h2 className="text-center text-light">Create Product Category</h2>
        <hr />
        <form className="">
          <div className="row mt-2">
            {/* Category Name */}
            <div className="form-group-admin col-lg-6 ">
              <label htmlFor="categoryName">Category Name:</label>
              <input
                type="text"
                className="form-control"
                id="categoryName"
                placeholder="Enter category name"
              />
            </div>
            {/* Parent Category */}
            <div className="form-group-admin col-lg-6">
              <label htmlFor="parentCategory">Parent Category:</label>
              <select className="form-control" id="parentCategory">
                <option>Select parent category</option>
                {/* Populate options dynamically if applicable */}
              </select>
            </div>
          </div>
          <div className="row mt-4">
            {/* Category Image */}
            <div className="form-group-admin col-lg-6 ">
              <label htmlFor="categoryImage">Category Image:</label>
              <div className="custom-file-wrapper-admin text-light" style={{backgroundColor:"white"}}>
                <input 
                  type="file" 
                  className="custom-file-input-field"
                  id="categoryImage"
                />
                <label
                  className="custom-file-input-label"
                  htmlFor="categoryImage"
                >
                  Choose file
                </label>
              </div>
            </div>
            {/* Category Slug/URL */}
            <div className="form-group-admin col-lg-6">
              <label htmlFor="categorySlug">Category Slug/URL:</label>
              <input
                type="text"
                className="form-control"
                id="categorySlug"
                placeholder="Enter category slug/URL"
              />
            </div>
          </div>
          <div className="row mt-4">
            {/* Visibility */}
            <div className="form-group-admin col-lg-6">
              <label htmlFor="visibility">Visibility:</label>
              <select className="form-control" id="visibility">
                <option value="visible">Visible</option>
                <option value="hidden">Hidden</option>
              </select>
            </div>
            {/* Status */}
            <div className="form-group-admin col-lg-6">
              <label htmlFor="status">Status:</label>
              <select className="form-control" id="status">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            {/* Category Description */}
            <div className="form-group-admin col-lg-12 mt-4">
              <label htmlFor="categoryDescription">Category Description:</label>
              <textarea
                className="form-control"
                id="categoryDescription"
                rows={3}
                placeholder="Enter category description"
                defaultValue={""}
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="form-group-admin col-lg-12 text-center mt-4 mb-3">
            <button type="submit" className="btn btn-light category-btn">
              Create Category
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</main>

        </>
    )
};
export default AdminCategory;
