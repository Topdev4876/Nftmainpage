import React from "react";
import aboutImag from "../assets/img/aboutImag.png";

const About = () => {
  return (
    <div className="about-wapper" id="about">
      <div className="container py-sm-5 py-4">
        <div className="row mx-0 about-card box-shadow-style overflow-hidden">
          <div
            className="col-lg-3 p-4 text-center d-flex flex-column justify-content-center"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <img className="w-100 about-img " src={aboutImag} alt="about" />
          </div>
          <div
            className="col-lg-9 d-flex flex-column justify-content-center mt-sm-5 mt-4 mt-lg-0"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h2 className="main-heading text-brown">ABOUT METADOG</h2>
            <p className="para mb-0">
              Metadog is BEP-20 token for people who love dogs, our vision is to
              make one of the fastest growing token in the history of
              blockchain. Metadog is a highly deflation token, every tax for
              mint, breed, games etc will be automatically send to the dead
              adress permanently reducing the total number of circulating
              supply.
            </p>
            <p className="para mb-0">Max supply: 100000000000 mdog</p>
            <p className="para mb-0">
              Buy&Sell tax : 10% (5% autoliquidity – 5% product development and
              Marketing)
            </p>
            <p className="para mb-0">
              To ensure our investors our contract is completely audited by
              Solidproof and will have full kyc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
