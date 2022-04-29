import React from "react";
import Partnercircle from "../assets/img/partner.png";
import Faqcircle from "../assets/img/faq.png";
import Footer from "./Footer";

const Faq = () => {
  return (
    <div className="faq-section position-relative pt-5">
      <img
        className="position-absolute faqimg1 start-0  moving_animation "
        src={Partnercircle}
        alt=""
      />
      <img
        className="position-absolute faqimg2 end-0  moving_animation "
        src={Faqcircle}
        alt=""
      />
      <div className="container">
        <h1
          className="fs-xl fw-bold text-brown ff_comicGecko text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          faqs
        </h1>
        <div className="row justify-content-center">
          <div className="col-sm-10">
            <div class="accordion" id="accordionExample">
              <div
                class="accordion-item my-3"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Lorem Ipsum is simply dummy text of the printing ?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse  "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes, your attributes will transfer. Special additional
                    attributes will be added if you're lucky enough in the
                    upgrade process.
                  </div>
                </div>
              </div>
              <div
                class="accordion-item my-3"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Lorem Ipsum is simply dummy text of the printing ?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes, your attributes will transfer. Special additional
                    attributes will be added if you're lucky enough in the
                    upgrade process.
                  </div>
                </div>
              </div>
              <div
                class="accordion-item my-3"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Lorem Ipsum is simply dummy text of the printing ?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes, your attributes will transfer. Special additional
                    attributes will be added if you're lucky enough in the
                    upgrade process.
                  </div>
                </div>
              </div>
              <div
                class="accordion-item my-3"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <h2 class="accordion-header" id="headingfour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapsefour"
                  >
                    Lorem Ipsum is simply dummy text of the printing ?
                  </button>
                </h2>
                <div
                  id="collapsefour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes, your attributes will transfer. Special additional
                    attributes will be added if you're lucky enough in the
                    upgrade process.
                  </div>
                </div>
              </div>
              <div
                class="accordion-item my-3"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h2 class="accordion-header" id="headingfive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive"
                    aria-expanded="false"
                    aria-controls="collapsefive"
                  >
                    Lorem Ipsum is simply dummy text of the printing ?
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes, your attributes will transfer. Special additional
                    attributes will be added if you're lucky enough in the
                    upgrade process.
                  </div>
                </div>
              </div>
              <div
                class="accordion-item my-3"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <h2 class="accordion-header" id="headingsix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsesix"
                    aria-expanded="false"
                    aria-controls="collapsesix"
                  >
                    Lorem Ipsum is simply dummy text of the printing ?
                  </button>
                </h2>
                <div
                  id="collapsesix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingsix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes, your attributes will transfer. Special additional
                    attributes will be added if you're lucky enough in the
                    upgrade process.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
