import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const ListHeader = () =>{
    return (
        <>
        <div className="main-header-section p-4">
  <div className="fixed-container">
    <div className="row no-gutters">
      <div className="col-md-4">
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <FontAwesomeIcon icon={faPlus} className="fa-lg mr-2"/>
            <span className="default-link -md link text-uppercase">
              LIST AN ITEM
            </span>
          </li>
        </ul>
      </div>
      <div className="col-md-4 text-center">
        <a className="nav-link mx-0 p-0 d-inline-block logo" href="/">
          <img
            width={320}
            className="header-logo"
            alt="CIRCULAR logo"
            src="/images/CC TM Logo.png"
          />
        </a>{" "}
      </div>
      <div className="col-md-4">
        <ul className="list-inline mb-0 text-right">
          <li className="list-inline-item">
            <a
              className="default-link -md link text-uppercase"
              data-action="rental-process#toggleZendesk"
              href="#"
            >
              Need Help?
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default ListHeader;