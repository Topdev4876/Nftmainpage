import React from "react";
import ReactPlayer from "react-player";
import gameVideo from "../assets/img/gameVideo.mp4";
import gameImage from "../assets/img/gameImage.png";
import CircleImg from "../assets/img/Group28288.png";
import LeftImg from "../assets/img/earnimg.png";
const GamePlay = () => {
  return (
    <div className="position-relative">
      <div className="container my-5 position-relative">
        <img
          className="position-absolute moving_x_animation"
          src={CircleImg}
          alt=""
        />
        <h1
          className="text-center mt-5 main-heading z-10 mb-4 mb-lg-2"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          gameplay
        </h1>
        <h1
          className="text-center fs-lg light-brown z-10 mb-4 mb-lg-5 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Earn and Burn
        </h1>
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="400"
        >
          <div className="col-lg-10 col-xl-9">
            {" "}
            <div className="text-center">
              <img
                src={gameImage}
                alt="gameplay"
                className="w-100 cursor-pointer "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="600"
        >
          <div className="col-12 col-lg-7 col-sm-10 text-center">
            <p className="fs-sm fw-normal ff_calibri   z-index-10 position-relative text-center mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>{" "}
        </div>
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="800"
        >
          <div className="justify-content-center align-items-center d-flex flex-coloum">
            <div className="text-lg-center">
              <ul className="ps-3">
                <li className="fs-sm fw-normal ff_calibri   z-index-10 position-relative text-center ">
                  Lorem Ipsum is simply dummy text
                </li>
                <li className="fs-sm fw-normal ff_calibri   z-index-10 position-relative text-center ">
                  Lorem Ipsum is simply dummy text
                </li>
                <li className="fs-sm fw-normal ff_calibri   z-index-10 position-relative text-center ">
                  Lorem Ipsum is simply dummy text
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {" "}
              <ReactPlayer
                url={gameVideo}
                controls={true}
                isPlaying={true}
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="position-absolute bottom-0 end-0 moving_animation d-sm-flex d-none"
        src={LeftImg}
        alt=""
      />
    </div>
  );
};

export default GamePlay;
