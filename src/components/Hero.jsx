import React from "react";
import hero from "../assets/img/hero-img.png";
import Header from "../components/Header";

const Hero = () => {
  return (
    <>
      <section className="hero_section d-flex flex-column ">
        <Header />
        <div className=" pt-sm-5 pt-4 position-relative d-flex flex-column flex-grow-1 justify-content-center align-items-center open_overlay_sections_none ">
          <div className="container my-xxl-4 z-positive-1 position-relative">
            <div className="row justify-content-center">
              <div className=" col-lg-8 col-xl-7 text-center">
                <div className="" data-aos="zoom-in" data-aos-duration="3000">
                  <img className="w-100" src={hero} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
