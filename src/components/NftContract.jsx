import React from "react";
import nftContract from "../assets/img/nftContract.png";

const NftContract = () => {
  return (
    <div className="nft-contract-section position-relative">
      <div className="container pt-sm-5 pt-3">
        <div className="row py-5">
          <div
            className="col-lg-6  order-lg-0 order-2"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <p className="fs-xl text-brown ff_comicGecko pt-sm-0 pt-4 z-index-10 position-relative">
              nft contract
            </p>
            <p className="fs-md fw-normal ff_calibri z-index-10 position-relative">
              30 nft dogs types each has different abilityes :
            </p>
            <ul>
              <li className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
                Level
              </li>
              <li className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
                Speed
              </li>
              <li className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
                Beauty
              </li>
              <li className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
                Strength
              </li>
            </ul>
            <p className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
              Righ now we will only use the LEVEL ability but is important to
              put the speed beauty and Strength so we can use them for future
              games{" "}
            </p>
            <p className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
              The stake (breeding) of the dogs works like this: you need to have
              2 nft dogs from the same type (2 bulldog, 2 Golden Retriever etc)
              and you put them to stake for a period of time (each has diferent
              times) you pay the staking tax (in mdog) and you wait for them to
              breed, when you time has come you will receve 3 nft from that same
              type of dog ,the third nft you riceve will have the level of the
              lowest nft ex:{" "}
            </p>
            <p className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
              I have 2 bulldog and i put them to breeding one is level 3 and one
              is level 10 after the breeding period I receve 3 nft: 2 level 3
              and one level 10{" "}
            </p>
            <p className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
              The bigger the level the less time to breeding you have, you will
              save one day for every level that dog has : if I have 2 bulldog
              one level 3 and one level 10 I will save 13 days from the breeding
              total time (stake time){" "}
            </p>
            <p className="fs-sm fw-normal ff_calibri z-index-10 position-relative">
              The bigger the level the less time to breeding you have, you will
              save one day for every level that dog has : if I have 2 bulldog
              one level 3 and one level 10 I will save 13 days from the breeding
              total time (stake time){" "}
            </p>
          </div>
          <div
            className="col-lg-6 my-auto "
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img className="w-100 moving_animation " src={nftContract} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftContract;
