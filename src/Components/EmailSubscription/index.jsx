import React from "react";
import { Link } from "react-router-dom";
const EmailSubscription = () =>{

    return (
        <>
        <div className="row  mx-0 mt-5 py-4">
  <div className=" col-lg-8 mx-auto d-flex justify-content-center flex-column guest-list-button">
    <h1 className="mt-2">
      <span>
        guest list
      </span>
    </h1>
    <h5 className="mt-3">
      <span>
        Join our guest list for the latest in trending and fashion                        updates.
      </span>
    </h5>
    <input
      className="mt-5"
      placeholder=" Email"
      type="text"
      required
    />
    <Link to="#">
      {' '}
      <button className="mt-4 mb-4 btn-signup1" type="submit">
        sign up
      </button>
    </Link>
  </div>
</div>
        
        </>
    )
}
export default EmailSubscription;