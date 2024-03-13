import React from "react";
import TopHeader from "../../Components/TopHeader";
import EmailSubscription from "../../Components/EmailSubscription";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

const FAQ = () =>{
    return (
        <>
    <div>
  <div className="fixed-header contact-navbar">
    <div className="navbar p-4 px-5 d-flex align-items-center justify-content-between">
      <div className="logo">
        <Link to={'/'} >
        <img
          alt=""
          src="images/CC TM Logo.png"
          width="350"
        />
        </Link>
      </div>
      <div className="link">
        <Link to="#">
          Contact Us
        </Link>
      </div>
    </div>
  </div>
  <div className="faq-main">
    <div className="conatiner-fluid single-banner d-flex align-items-center justify-content-center">
      <div className="search-box">
        <i className="fa-solid fa-search" />
        <input
          placeholder="search here"
          type="search"
        />
      </div>
    </div>
  </div>
  <div className="container mt-5">
    <section className="section knowledge-base">
      <h2 className="visibility-hidden">
        Categories
      </h2>
      <section className="categories blocks">
        <ul className="blocks-list">
          <li className="blocks-item">
            <Link
              className="blocks-item-link"
              to="/hc/en-us/categories/15208780411665-Renting"
            >
              <span className="blocks-item-title">
                Renting
              </span>
              <span className="blocks-item-description" />
            </Link>
          </li>
          <li className="blocks-item">
            <Link
              className="blocks-item-link"
              to="/hc/en-us/categories/15208780997777-Lending"
            >
              <span className="blocks-item-title">
                Lending
              </span>
              <span className="blocks-item-description" />
            </Link>
          </li>
          <li className="blocks-item">
            <Link
              className="blocks-item-link"
              to="/hc/en-us/categories/15208798271761-My-Account"
            >
              <span className="blocks-item-title">
                My Account
              </span>
              <span className="blocks-item-description" />
            </Link>
          </li>
          <li className="blocks-item">
            <Link
              className="blocks-item-link"
              to="/hc/en-us/categories/15208798971793-Fees-Payments"
            >
              <span className="blocks-item-title">
                Fees & Payments
              </span>
              <span className="blocks-item-description" />
            </Link>
          </li>
          <li className="blocks-item">
            <Link
              className="blocks-item-link"
              to="/hc/en-us/categories/15208869787665-Damage-Safety-Security"
            >
              <span className="blocks-item-title">
                Damage, Safety & Security{' '}
              </span>
              <span className="blocks-item-description" />
            </Link>
          </li>
          <li className="blocks-item">
            <Link
              className="blocks-item-link"
              to="/hc/en-us/categories/15208770260625-Resale"
            >
              <span className="blocks-item-title">
                Resale
              </span>
              <span className="blocks-item-description" />
            </Link>
          </li>
          <li className="blocks-item">
            <Link
              className="blocks-item-link"
              to="/hc/en-us/categories/15208896840209-Work-at-HURR"
            >
              <span className="blocks-item-title">
                Work at HURR!
              </span>
              <span className="blocks-item-description" />
            </Link>
          </li>
        </ul>
      </section>
      <section className="articles">
        <h2>
          Promoted articles
        </h2>
        <ul className="article-list promoted-articles">
          <li className="promoted-articles-item">
            <Link to="/hc/en-us/articles/15230860001425-Why-have-my-listings-changed-in-pricing">
              Why have my listings changed in pricing?
            </Link>
          </li>
          <li className="promoted-articles-item">
            <Link to="/hc/en-us/articles/4419759781521-Is-HURR-International">
              Is HURR International?
            </Link>
          </li>
          <li className="promoted-articles-item">
            <Link to="/hc/en-us/articles/12089882359185-Newsletter-Sign-Up-Competition-Ts-Cs">
              Newsletter Sign Up Competition Ts&Cs
            </Link>
          </li>
          <li className="promoted-articles-item">
            <Link to="/hc/en-us/articles/19473777153937-Protection-from-fraudsters-phishing-attacks-and-scams">
              Protection from fraudsters, phishing attacks and scams
            </Link>
          </li>
          <li className="promoted-articles-item">
            <Link to="/hc/en-us/articles/16960441249425-Customer-Support-Exec-Full-time-Perm">
              Customer Support Exec (Full time/Perm)
            </Link>
          </li>
        </ul>
      </section>
    </section>
  </div>
</div>
<div className="contact-footer p-3 px-5">
    <Link to="/Home">
      CIRCULAR
    </Link>
  </div>
        
        </>
    )
}
export default FAQ;