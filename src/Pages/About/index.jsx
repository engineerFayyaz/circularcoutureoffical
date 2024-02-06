import React from "react";
import TopHeader from "../../Components/TopHeader";
import Footer from "../../Components/Footer";
import EmailSubscription from "../../Components/EmailSubscription";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <>
      <TopHeader/>
      <div className="main-container no-overflow-x pt-0">
  <div className="w-100 text-center">
    <div className="about-us-header">
      <div className="content">
        <h1 className="header mb-0">
          We're giving fashion a{' '}
          <span className="text-circularcouture-off-green">
            green
          </span>
          -over
        </h1>
        {' '}
      </div>
    </div>
    <div className="about-us-intro">
      <p className="text">
        Back in 2017, CEO Victoria Prew was struck by a home truth: fast fashion has created a demand for “newness” that has no place in a sustainable future. Something had to be done to remedy the bad habits of the industry.
      </p>
      <p className="text">
        A solution? Renting not buying. Getting women to rent instead, meant they could still get their kicks from the latest luxury trends and pieces, without burning a hole in their pocket or the planet.
      </p>
      <p className="text">
        From visiting lenders’ homes with camera in hand, to a desk at Google’s Startups Campus, to a pop-up in Selfridges, Victoria took an idea and made it a movement.{' '}
        <span className="circularcouture-font-logo">
          circularcouture
        </span>
        {' '}is now a tech-first platform with thousands of renters and lenders building a smart solution for fashion.
      </p>
      <p className="text">
        Our community of like-minded, entrepreneurial women are sharing more than just their wardrobes. They’re doing good by looking good.
      </p>
    </div>
    <div className="about-us-info-section mb-4">
      <div className="content">
        <div className="row no-gutters">
          <div className="col-12 col-xl-6">
            <div className="about-us-image -top on-left-col" />
          </div>
          <div className="col-12 col-xl-6 align-self-center">
            <div className="marketing-info on-right-col">
              <p className="about">
                about us
              </p>
              <h3 className="title mb-4">
                The fashion rental revolution
              </h3>
              <p className="description mb-0">
                We’re changing the behaviours of fashion-lovers everywhere, and believe everyone should have access to high-quality fashion…{' '}
                <span className="circularcouture-font-logo">
                  circularcouture
                </span>
                {' '}is giving lenders the chance to monetise their pieces, and renters the chance to shine in them for a fraction of their retail price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-us-info-section mb-4">
      <div className="content">
        <div className="row no-gutters">
          <div className="col-12 col-xl-6 align-self-center order-2 order-xl-1">
            <div className="marketing-info on-left-col">
              <p className="about">
                our mission
              </p>
              <h3 className="title mb-0">
                By empowering women to extend the lifespan of their wardrobes, we’re sending fashion round in circles - one rental at a time.
              </h3>
              {' '}
            </div>
          </div>
          <div className="col-12 col-xl-6 order-1 order-xl-2">
            <div className="about-us-image -middle on-right-col" />
          </div>
        </div>
      </div>
    </div>
    <div className="about-us-info-section mb-4">
      <div className="content">
        <div className="row no-gutters">
          <div className="col-12 col-xl-6">
            <div className="about-us-image -bottom on-left-col" />
          </div>
          <div className="col-12 col-xl-6 align-self-center">
            <div className="marketing-info on-right-col">
              <p className="about">
                what’s next
              </p>
              <h3 className="title mb-4">
                Putting the right footprint forward
              </h3>
              <p className="description mb-0">
                We’re proud members of{' '}
                <Link
                  className="text-circularcouture-light-red"
                  to="#"
                  target="_blank"
                >
                  Ecologi
                </Link>
                , who help keep us climate positive here at{' '}
                <span className="circularcouture-font-logo">
                  circularcouture
                </span>
                {' '}HQ. By calculating our footprint and offering up the chance to offset through monetary donations, we’re putting our money where our mouth is and funding projects working to reduce CO
                <sub>
                  2
                </sub>
                {' '}levels in the atmosphere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-us-press">
      <div className="content">
        <p className="about">
          in the press
        </p>
        <h2 className="title my-4">
          “The Airbnb Of Fashion”
        </h2>
        <p className="press mb-5 mb-md-4">
          forbes
        </p>
        {' '}
        <Link
          className="default-link -grey text-uppercase cta"
          to="javascript:void(0)"
        >
          Read more
        </Link>
        {' '}
      </div>
    </div>
  </div>
 
</div>
        <EmailSubscription />
       <Footer/>
        {/* Modal */}
        
      </>
    </>
  );
};
export default About;
