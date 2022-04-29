import React from "react";
import PartnerImg from "../assets/img/bga.png";
import Partnercircle from "../assets/img/partner.png";
const Partners = () => {
  const Data = [
    {
      img: PartnerImg,
    },
    {
      img: PartnerImg,
    },
    {
      img: PartnerImg,
    },
    {
      img: PartnerImg,
    },
  ];
  return (
    <div className="partners-section py-5 position-relative">
      <img
        className="position-absolute start-0 moving_animation "
        src={Partnercircle}
        alt=""
      />
      <h1
        className="fs-xl fw-bold text-brown ff_comicGecko text-center"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        Partners
      </h1>
      <div className="container py-sm-5 py-3">
        <div className="row">
          {Data &&
            Data.map((value, index) => {
              return (
                <div
                  className="col-lg-3 col-sm-6 col-12 mt-sm-5 mt-3"
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="partner-card py-4">
                    <img className="mx-auto d-block " src={value.img} alt="" />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
