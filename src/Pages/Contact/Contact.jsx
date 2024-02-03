import React from "react";

const Contact = () =>{

    return (
        <>
        <div>
  <div className="fixed-header contact-navbar">
    <div className="navbar p-4 px-5 d-flex align-items-center justify-content-between">
      <div className="logo">
        <a href="/"><img
          alt=""
          src="images/CC TM Logo.png"
          width="350"
        /></a>
      </div>
      <div className="link">
        <a href="/Contact">
          Contact Us
        </a>
      </div>
    </div>
  </div>
  <div className="contact-main p-4 px-5 no-overflow-x pt-0">
    <div className="contact-search d-flex align-items-center justify-content-between">
      <div className="breadcrumb">
        <a href="/">
          CIRCULAR{' '}
        </a>
        <span>
          {`>`}
        </span>
        <span>
          Contact Us
        </span>
      </div>
      <div className="search">
        <i className="fa-solid fa-search" />
        <input
          placeholder="search"
          type="search"
        />
      </div>
    </div>
    <div className="contact-info">
      <div className="content">
        <h3>
          Contact us
        </h3>
        <p>
          👋 Need a hand? Our team are online and active between 9am and 6pm Monday to Friday.
        </p>
        <p>
          📩 You can reach us via the form below. Please include your order number if you have one!
        </p>
      </div>
      <form action="">
        <div className="email-input">
          <label htmlFor="">
            Your email address
          </label>
          <br />
          <input
            required
            type="email"
          />
        </div>
        <div className="order-selection mt-4">
          <label htmlFor="">
            What kind of order is this?
          </label>
          <br />
          <select
            className="form-select"
            required
          >
            <option>
              -
            </option>
            <option value="1">
              Managed
            </option>
            <option value="2">
              Peer-to-Peer
            </option>
            <option value="3">
              Net-a-Porter
            </option>
            <option value="4">
              None of the above
            </option>
          </select>
          <p>
            A Managed rental is one sent from CIRCULAR directly. A Peer-To-Peer rental is arranged with another member of the CIRCULAR site.
          </p>
        </div>
        <div className="order-selection mt-4">
          <label htmlFor="">
            Tell us what this is about?
          </label>
          <br />
          <select
            className="form-select "
            required
          >
            <option>
              -
            </option>
            <option value="1">
              My rental doesn't fit
            </option>
            <option value="2">
              I have a payment query
            </option>
            <option value="3">
              I have a general enquiry
            </option>
            <option value="4">
              My rental hasn't arrived
            </option>
            <option value="5">
              My item hasn't been returned
            </option>
            <option value="6">
              My rental has arrived with a problem
            </option>
            <option value="7">
              My item has been returned with a problem
            </option>
            <option value="8">
              Other
            </option>
          </select>
        </div>
        <div className="address-input mt-4">
          <label htmlFor="">
            How can we help? Please include an order number if you have one.
          </label>
          <br />
          <textarea
            cols="30"
            id=""
            name=""
            required
            rows="5"
          />
        </div>
        <div className="attach-file mt-4">
          <label htmlFor="">
            Attachments{' '}
            <span>
              (optionals)
            </span>
          </label>
          <input
            title="add a file"
            type="file"
          />
        </div>
        <div className="submit-btn mt-4">
          <button
            className="btn btn-dark px-5 py-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  <div className="contact-footer p-3 px-5">
    <a href="/Home">
      CIRCULAR
    </a>
  </div>
</div>
        
        </>
    )
}
export default Contact;