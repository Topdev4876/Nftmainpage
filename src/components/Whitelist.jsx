import React from "react";
import WhiteListImg from "../assets/img/whitelist.png";

const Whitelist = () => {
  return (
    <>
      <section className="bg_whitelist">
        <div className="container py-5" id="Token">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-5 justify-content-center align-items-center"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <div className="text-center">
                <img className="w-100" src={WhiteListImg} alt="" />
              </div>
            </div>
            <div
              className="col-lg-7 justify-content-center align-items-center"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div>
                <h2 className="main-heading fs-xl text-brown mb-3">Token</h2>
                <p className="para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whitelist;
