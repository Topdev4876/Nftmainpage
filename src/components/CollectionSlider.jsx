import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrowImg from "../assets/img/prev.png";
import NextArrowImg from "../assets/img/next.png";
import Collectionimg1 from "../assets/img/collectionimg.png";
import Collectionimg2 from "../assets/img/collectionimg1.png";
import Collectionimg3 from "../assets/img/collectionimg3.png";
import Collectionimg4 from "../assets/img/collectionimg4.png";
import RightImg from "../assets/img/collection.png";
const CollectionSlider = () => {
  const slider = React.useRef(null);
  const Data = [
    {
      img: Collectionimg1,
    },
    {
      img: Collectionimg2,
    },
    {
      img: Collectionimg3,
    },
    {
      img: Collectionimg4,
    },
    {
      img: Collectionimg1,
    },
    {
      img: Collectionimg2,
    },
    {
      img: Collectionimg3,
    },
    {
      img: Collectionimg4,
    },
  ];
  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <img src={RightImg} className="position-absolute  moving_animation" alt="" />
      <div className="container position-relative py-5" id="mint-your-dog">
        <h1
          className="text-center main-heading z-10 mb-4 mb-lg-5 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          nft collection
        </h1>

        <div
          className="position-relative"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="d-sm-flex d-none justify-content-between w-100 position-absolute  align-items-center h-100">
            <img
              className="prevarrow"
              onClick={() => slider.current.slickPrev()}
              src={PrevArrowImg}
              alt=""
            />
            <img
              className="nextarrow"
              onClick={() => slider.current.slickNext()}
              src={NextArrowImg}
              alt=""
            />
          </div>
          <Slider ref={slider} {...settings}>
            {Data &&
              Data.map((value, index) => {
                return (
                  <div key={index}>
                    <img
                      className="w-100 social_icons px-3 mx-auto d-block"
                      src={value.img}
                      alt=""
                    />
                  </div>
                );
              })}
          </Slider>
        </div>

        <h1
          className="text-center fs-md  fw-bold ff_comicGecko light-brown py-4"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
        >
          Max supply: 100000000000
        </h1>
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1500"
        >
          <button className="common-btn">Mint Now</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionSlider;
