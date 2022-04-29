import React from "react";
import { CardList } from "./common/Data";

const WhatCanYouDo = () => {
  return (
    <div>
      <div className="container py-sm-5 py-4 mt-lg-4">
        <h2
          className="main-heading text-brown text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          WHAT CAN YOU DO WITH THE metaDOGS?
        </h2>
        <div className="row">
          {CardList.map((obj, index) => (
            <div
              key={index}
              className="col-lg-3 col-sm-6 col-12 mt-sm-5 mt-4"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <div className="metadog-card text-center h-100">
                <div className="p-2 ">
                  <img className="w-100 p-1" src={obj.imgUrl} alt="card-img" />
                </div>
                <h4 className="sub-heading text-brown ff-comic ">
                  {obj.heading}
                </h4>
                <p className="para fs-normal mb-0">{obj.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatCanYouDo;
