import React from "react";
import MetaDogImg from "../assets/img/metadog.png";
import SideImg from "../assets/img/sideimg.png";
const BuyTokens = () => {
  const MetaDogData = [
    {
      text: "60% Community (presale/launch)",
      color: "yellow_color",
    },
    {
      text: "10% Presale Whitelist",
      color: "blue_color",
    },
    {
      text: "20% Private Sale ",
      color: "pich_color",
    },
    {
      text: "5% Marketing (locked for 6 months)",
      color: "orange_color",
    },
    {
      text: "5% Team (locked for up to 3 years)",
      color: "green_color",
    },
  ];
  return (
    <div className="position-relative">
      <div className="container d-flex justify-content-center py-5 pt-lg-5 pt-0">
        <div className="row py-5  pt-lg-5 pt-0 w-100 d-flex justify-content-center">
          <div className=" col-lg-6 col-md-9">
            <img
              className="pb-3 w-75 mx-auto d-block"
              src={MetaDogImg}
              alt=""
            />
            {MetaDogData &&
              MetaDogData.map((value, index) => {
                return (
                  <div className="d-flex align-items-center">
                    <div className={`${value.color} me-4`}></div>{" "}
                    <p className="ff_calibri fw-normal py-2 mb-0 fs-md-1 black">
                      {value.text}
                    </p>
                  </div>
                );
              })}
          </div>
          <div className="col-lg-6 col-md-9 col-12 pt-lg-0 pt-5">
            <div className="bg_color h-100">
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="ff_calibri fs-sm fw-bold">Name:</h5>
                  <h6 className="ff_calibri fs-sm fw-bold">
                    Purchase methods accepted:
                  </h6>
                </div>
                <div className="text-end">
                  <p className="mb-0 ff_calibri fs-sm opacity-07">
                    hodlME (HODM)
                  </p>
                  <p className="ff_calibri fs-sm opacity-07">BNB</p>
                </div>
              </div>
              <div className="max-supply-bg">
                <div className="d-flex flex-sm-row flex-column justify-content-between">
                  <div>
                    <p className="ff_calibri fs-sm  mb-1 text-sm-start text-center pt-sm-0 pt-2">
                      Max supply
                    </p>
                    <p className="light-brown text-sm-start text-center pt-sm-0 pt-2 ff_calibri fw-bold fs-xsm">
                      100000000000 HODM
                    </p>
                  </div>
                  <span className="border"></span>
                  <div>
                    <p className="ff_calibri fs-sm opacity-07 mb-1 text-sm-start text-center pt-sm-0 pt-2">
                      Sell tax
                    </p>
                    <p className="light-brown ff_calibri fw-bold fs-xsm text-center">
                      20%
                    </p>
                  </div>
                  <span className="border d-inline"></span>
                  <div>
                    <p className="ff_calibri fs-sm opacity-07 mb-1 text-sm-start text-center pt-sm-0 pt-2">
                      Buytax
                    </p>
                    <p className="green  ff_calibri fw-bold fs-xsm text-center">
                      6%
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between text_border mt-5">
                <p className="mb-0 fs-normal fw-bold ff_calibri black">
                  New Token emissions:
                </p>
                <p className="mb-0 fs-xsm1 ff_calibri">NO</p>
              </div>
              <div className="d-flex justify-content-between text_border mt-3">
                <p className="mb-0 fs-normal fw-bold ff_calibri black ">
                  Presale estimated date:
                </p>
                <p className="mb-0 fs-xsm1 ff_calibri">08/12/2021</p>
              </div>
              <div className="d-flex justify-content-between text_border mt-3">
                <p className="mb-0 fs-normal fw-bold ff_calibri black">
                  Launch date:
                </p>
                <p className="mb-0 fs-xsm1 ff_calibri">19/12/2021</p>
              </div>
              <div className="d-flex justify-content-between text_border mt-3">
                <p className="mb-0 fs-normal fw-bold ff_calibri black">
                  Know Your Customer (KYC):
                </p>
                <p className="mb-0 fs-xsm1 ff_calibri">NO</p>
              </div>
              <div className="d-flex justify-content-between text_border mt-3">
                <p className="mb-0 fs-normal fw-bold ff_calibri black">
                  Min/Max Personals Cap:
                </p>
                <p className="mb-0 fs-xsm1 ff_calibri">5,000,000,000</p>
              </div>
              <div className="d-flex justify-content-between text_border mt-3">
                <p className="mb-0 fs-normal fw-bold ff_calibri black ">
                  Whitelist:
                </p>
                <p className="mb-0 fs-xsm1 ff_calibri">NO</p>
              </div>
              <div className="mt-4 mt-sm-5">
                <button className="buy_token_btn px-md-5 px-4 py-md-3 py-2 fs-sm text-white ff_calibri fw-bold">
                  BUY TOKENS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute end-0 bottom-0">
        <img
          className=" moving_animation d-lg-flex d-none"
          src={SideImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default BuyTokens;
