import React from "react";
import CommunityImg from "../assets/img/communityimg.png";
import DogFoot from "../assets/img/foot.png";
const Community = () => {
  return (
    <div className="community-section position-relative">
      <img className="ps-3 moving_animation" src={DogFoot} alt="" />
      <div className="container pt-sm-5 pt-3">
        <div className="row py-5">
          <div
            className="col-lg-6  order-lg-0 order-2"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <p className="fs-xl text-brown ff_comicGecko pt-sm-0 pt-4 z-index-10 position-relative">
              join our community
            </p>
            <p className="fs-sm fw-bold ff_calibri z-index-10 position-relative">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <div className="text-sm-start text-center">
             <a href="https://www.discord.com/">
              <button className="common-btn mt-4 px-4">
                JOIN DISCORD NOW
                </button>
                </a>
            </div>
            <img
              className=" position-absolute dog-foot3 d-sm-flex d-none"
              src={DogFoot}
              alt=""
            />
            <img
              className=" position-absolute dog-foot2 "
              src={DogFoot}
              alt=""
            />
            <img
              className=" position-absolute dog-foot4"
              src={DogFoot}
              alt=""
            />
          </div>
          <div
            className="col-lg-6 my-auto  "
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img
              className="w-100 moving_animation "
              src={CommunityImg}
              alt=""
            />
            <img
              className=" position-absolute end-0 moving_animation "
              src={DogFoot}
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className=" position-absolute dog-foot moving_animation start-0"
        src={DogFoot}
        alt=""
      />
    </div>
  );
};

export default Community;
