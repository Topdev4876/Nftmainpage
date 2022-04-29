import React from "react";
import SekltonImg from "../assets/img/Frame28269.png";
import ShadowImg from "../assets/img/Group28355.png";
import CircleImg from "../assets/img/Group28288.png";
import CircleImg2 from "../assets/img/Group28359.png";
import CircleImg3 from "../assets/img/Group28360.png";
import CircleImg4 from "../assets/img/Group28289.png";
import WorksImg from "../assets/img/works_img.png";

function HowWorks() {
  return (
    <>
      <section className="py-5  my-lg-5 position-relative" id="how-it-works">
        <div className="container position-relative z_index_100">
          <div className="position-absolute  w-50    top-0 start-0">
            <img
              className="moving_animation  how-work-img top-96 position-absolute"
              src={CircleImg}
              alt=""
            />
          </div>
          <h1
            className="text-center main-heading mb-5 pb-4 pb-lg-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            how it works ?
          </h1>
          <div className="row justify-content-center justify-content-lg-center align-items-center ">
            <div
              className="col-11 col-sm-9 col-lg-6 mb-5 mb-lg-0"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="position-relative">
                <img
                  className="w-100 moving_animation p-lg-5"
                  src={WorksImg}
                  alt=""
                />
              </div>
            </div>
            <div
              className="col-md-10 col-lg-5 "
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="mb-4 mb-lg-5 Sekltonsection p-3 p-lg-4 box-shadow-style box-shadow-style">
                <div className="">
                  <h2 className="small-heading ">
                    Buy the Metadog token (MDOG)
                  </h2>
                  <p className="para fs-normal mb-0  ">
                    To buy the metadog token you can use pancakeswap.
                  </p>
                </div>
              </div>
              <div className="mb-4 mb-lg-5 Sekltonsection p-3 p-lg-4 box-shadow-style">
                <div className="">
                  <h2 className="small-heading ">
                    Decide what type of investor are you
                  </h2>
                  <p className="para fs-normal mb-0  ">
                    You can only invest in the token, only invest in the Nft or
                    do both.
                  </p>
                </div>
              </div>
              <div className="mb-4 mb-lg-5 Sekltonsection p-3 p-lg-4 box-shadow-style">
                <div className="">
                  <h2 className="small-heading "> Buy/Stake/Trade/HOLD/PLAY</h2>
                  <p className="para fs-normal mb-0  ">
                    No matter what you decide you have plenty of options to
                    multiply your investment.
                  </p>
                </div>
              </div>
              <div className="mb-4 mb-lg-5 Sekltonsection p-3 p-lg-4 box-shadow-style">
                <div className="">
                  <h2 className="small-heading "> Enjoy our earnings</h2>
                  <p className="para fs-normal mb-0 ">
                    Token section (former whitelist).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowWorks;
