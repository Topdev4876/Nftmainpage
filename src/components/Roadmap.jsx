import React from "react";
import RoadmapCricleImg1 from "../assets/img/roadmap-circle-img2.svg";
import RightImg from "../assets/img/roadmap_side_img.png";
import LeftImg from "../assets/img/roadmap_side_img2.png";
import LineImg from "../assets/img/Line2.svg";
function Roadmap() {
  return (
    <>
      <section
        className="roadmap_bg position-relative pb-5 margin-top-5"
        id="Roadmap"
      >
        <h1
          className="text-center main-heading z-10 mb-4 mb-lg-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          roadmap
        </h1>
        <div className="container z-10 py-5 position-relative">
          <div
            className="row justify-content-center z_index_100 py-4 py-lg-5"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="col-5 d-none d-lg-block"></div>
            <div className="col-auto  ">
              <div className="small_img_line">
                <img className="mt-4 " src={RoadmapCricleImg1} alt="" />
              </div>
            </div>
            <div className="col-8 col-sm-9 col-lg-5 z_index_100">
              <div className="roadmap_box py-4 px-3 box-shadow-style box-shadow-style">
                <div>
                  <h1 className="small-heading">April – 2022</h1>
                  <p className="fs-normal ff_calibri mb-2">
                    Token and NFT contract
                  </p>
                  <p className="fs-normal ff_calibri mb-2">
                    Token website created
                  </p>
                  <p className="fs-normal ff_calibri mb-2">
                    NFT Dapp created and tested
                  </p>
                  <p className="fs-normal ff_calibri mb-2">Token launch</p>
                  <p className="fs-normal ff_calibri mb-2">Nft Mint</p>
                  <p className="fs-normal ff_calibri mb-2">Breeding launch</p>
                  <p className="fs-normal ff_calibri mb-2">
                    Marketplace launch
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center z_index_100 py-4 py-lg-5"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="col-8 col-sm-9 col-lg-5 z_index_100 order-2 order-lg-0">
              <div className="roadmap_box py-4 px-3 box-shadow-style">
                <div className="text-lg-end">
                  <h1 className="small-heading">May – 2022</h1>
                  <p className="fs-normal ff_calibri mb-2">Minigames Launch</p>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="small_img_line2">
                <img className="mt-4" src={RoadmapCricleImg1} alt="" />
              </div>
            </div>
            <div className="col-5 d-none d-lg-block "></div>
          </div>
          <div
            className="row justify-content-center z_index_100 py-4 py-lg-5"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="col-5 d-none d-lg-block "></div>
            <div className="col-auto ">
              <div className="small_img_line">
                <img className="mt-4" src={RoadmapCricleImg1} alt="" />
              </div>
            </div>
            <div className="col-8 col-sm-9 col-lg-5 z_index_100">
              <div className="roadmap_box py-4 px-3 box-shadow-style">
                <div>
                  <h1 className="small-heading">July – 2022</h1>
                  <p className="fs-normal ff_calibri mb-2">More minigames</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center z_index_100 py-4 py-lg-5"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="col-8 col-sm-9 col-lg-5 z_index_100 order-2 order-lg-0">
              <div className="roadmap_box py-4 px-3 box-shadow-style">
                <div className="text-lg-end">
                  <h1 className="small-heading">August – 2022</h1>
                  <p className="fs-normal ff_calibri mb-2">
                    First look of the MetaDog game
                  </p>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="small_img_line2">
                <img className="mt-4" src={RoadmapCricleImg1} alt="" />
              </div>
            </div>
            <div className="col-5 d-none d-lg-block "></div>
          </div>
          <div
            className="row justify-content-center z_index_100 py-4 py-lg-5"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="col-5 d-none d-lg-block "></div>
            <div className="col-auto ">
              <div className="small_img_line">
                <img className="mt-4" src={RoadmapCricleImg1} alt="" />
              </div>
            </div>
            <div className="col-8 col-sm-9 col-lg-5 z_index_100">
              <div className="roadmap_box py-4 px-3 box-shadow-style">
                <div>
                  <h1 className="small-heading">October – 2022</h1>
                  <p className="fs-normal ff_calibri mb-2">
                    Beta test MetaDog game
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center z_index_100 py-4 py-lg-5"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="col-8 col-sm-9 col-lg-5 z_index_100 order-2 order-lg-0">
              <div className="roadmap_box py-4 px-3 box-shadow-style">
                <div className="text-lg-end">
                  <h1 className="small-heading">December – 2022</h1>
                  <p className="fs-normal ff_calibri mb-2">
                    Metadog game launch
                  </p>
                </div>
              </div>
            </div>
            <div className="col-auto ">
              <div className="small_img_line2">
                <img className="mt-4" src={RoadmapCricleImg1} alt="" />
              </div>
            </div>
            <div className="col-5 d-none d-lg-block "></div>
          </div>

          <div className="position-absolute line_img   text-lg-center w-100 ">
            <img className="h-100 margin-top-49" src={LineImg} alt="" />
          </div>
        </div>
        <div className="position-absolute top-0 start-0  ">
          <img className="w-100 moving_animation" src={RightImg} alt="" />
        </div>
        <div className="position-absolute bottom-0 end-0  ">
          <img className="w-100 moving_animation" src={LeftImg} alt="" />
        </div>
      </section>
    </>
  );
}

export default Roadmap;
