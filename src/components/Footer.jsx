import React from "react";
import FooterLogo from "../assets/img/Footer_img.svg";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  OpenSea,
  TelegramIcon,
  TwiiterIcon,
} from "./common/Icon";
import Group28391 from "../assets/img/Group28391.png";
import bulldog from "../assets/img/bulldog.png";
import bulldog2 from "../assets/img/bulldog2.png";
function Footer() {
  return (
    <>
      <section className="position-relative">
        <div className="container mt-5 position-relative">
          <div className="row" data-aos="zoom-in" data-aos-duration="3000">
            <div className="text-center">
              <div>
                <img src={FooterLogo} alt="" />
              </div>
              <div className="my-4">
                {" "}
                <a
                  href="https://opensea.io/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <OpenSea />
                </a>
                <a
                  href="https://twitter.com/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <TwiiterIcon />
                </a>
                <a
                  href="https://discord.com/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <DiscordIcon />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://web.telegram.org/z/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <TelegramIcon />
                </a>
              </div>
              <div>
                <p className="text-center mb-0 pb-4 opacity-06 footer_color">
                  Copyright © 2022 coindogs.com
                </p>
              </div>
            </div>
          </div>
          <div className="position-absolute end-0 bottom-0">
            <img className="w-100 moving_x_animation" src={Group28391} alt="" />
          </div>
        </div>{" "}
        <div className="position-absolute start-0 bottom-0">
          <img className="w-100 moving_animation d-none d-sm-block" src={bulldog} alt="" />
        </div>
        <div className="position-absolute end-0 bottom-0">
          <img className="w-100 moving_animation d-none d-sm-block" src={bulldog2} alt="" />
        </div>
      </section>
    </>
  );
}

export default Footer;
