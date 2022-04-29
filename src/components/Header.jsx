import React from "react";
import { useScreenFixedProvider } from "./contexts/ScreenFixedProvider";
import { useMediaQuery } from "react-responsive";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  OpenSea,
  TelegramIcon,
  TwiiterIcon,
} from "./common/Icon";
import { withRouter } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = ({ history }) => {
  const { showOverlay, setShowOverlay } = useScreenFixedProvider();

  const BeforeDesktop = ({ children }) => {
    const isBeforeDesktop = useMediaQuery({ maxWidth: 991.98 });
    return isBeforeDesktop ? children : null;
  };
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };
  React.useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("overflow_hidden");
    } else {
      document.body.classList.remove("overflow_hidden");
    }
  }, [showOverlay]);

  const scrollValue = () => {
    history.push("/");
    setShowOverlay(false);
  };
  return (
    <>
      <section className="d-flex w-100 navbar-wrapper justify-content-center">
        <div className="container">
          <Desktop>
            <div className="d-flex w-100 align-items-center justify-content-between list-unstyled doodle-nav">
              <div>
                <a className="visiblity_hidden" href="#">
                  <img className="nav-logo" src={logo} alt="" />
                </a>
              </div>
              <div>
                <li className=" nav-list-items mx-3 d-inline-block">
                  <a
                    href="#about"
                    className="nav-link px-0   text-black text-decoration-none hoverline"
                  >
                    About
                  </a>
                </li>
                <li className=" nav-list-items mx-3 d-inline-block">
                  <a
                    href="#Token"
                    className="nav-link px-0   text-black text-decoration-none hoverline"
                  >
                    Token
                  </a>
                </li>
                <li className=" nav-list-items mx-3 d-inline-block">
                  <a
                    href="#how-it-works"
                    className="nav-link px-0   text-black text-decoration-none hoverline"
                  >
                    How it works?
                  </a>
                </li>
                <li className=" nav-list-items ms-3 d-inline-block">
                  <a
                    href="#mint-your-dog"
                    className="nav-link px-0   text-black text-decoration-none hoverline"
                  >
                    Mint your Dog
                  </a>
                </li>
              </div>
              <li className="nav-link   text-black text-decoration-none">
                <a
                  href="https//:opensea.io/"
                  className="text-decoration-none px-1 "
                  target="_blank"
                >
                  <OpenSea />
                </a>
                <a
                  href="https:twitter.com/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <TwiiterIcon />
                </a>

                <a
                  href="https//:discord.com/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <DiscordIcon />
                </a>
                <a
                  href="https//:www.instagram.com/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https//:www.facebook.com"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https//:web.telegram.org/z/"
                  className="text-decoration-none px-1"
                  target="_blank"
                >
                  <TelegramIcon />
                </a>
              </li>
            </div>
          </Desktop>
          {/* OVERLAY HERE  THIS CODE RUN BEFORE 992PX*/}
          <BeforeDesktop>
            <div
              className={`${showOverlay ? "overlay-active" : ""} overlay-nav`}
            >
              <div className="nav-bg-light h-screen d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column text-center ">
                  <ul className="p-0">
                    <li className=" transition-0_3sEase overflow-hidden">
                      <span
                        onClick={() => scrollValue()}
                        className="py-2 py-sm-4 d-inline-block cursor-pointer"
                      >
                        <a
                          className="nav-link text-black text-decoration-none hoverline"
                          href="#about"
                        >
                          About
                        </a>
                      </span>
                    </li>
                    <li className=" transition-0_3sEase overflow-hidden">
                      <span className="py-2 py-sm-4 d-inline-block cursor-pointer">
                        <a
                          href="#how-it-works"
                          className="nav-link   text-black text-decoration-none hoverline"
                          onClick={() => scrollValue(false)}
                        >
                          How it works?
                        </a>
                      </span>
                    </li>
                    <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                      <span className="py-2 py-sm-4 d-inline-block cursor-pointer">
                        <a
                          href="#mint-your-dog"
                          className="nav-link   text-black text-decoration-none hoverline"
                          onClick={() => scrollValue(false)}
                        >
                          Mint your Dog
                        </a>
                      </span>
                    </li>
                    <li className="nav-item btn-img mt-3 mt-lg-1  transition-0_3sEase overflow-hidden">
                      <div>
                        <a
                          href="https//:opensea.io/"
                          className="text-decoration-none px-1 "
                          target="_blank"
                        >
                          <OpenSea />
                        </a>
                        <a
                          href="https:twitter.com/"
                          className="text-decoration-none px-1"
                          target="_blank"
                        >
                          <TwiiterIcon />
                        </a>
                        <a
                          href="https//:discord.com/"
                          className="text-decoration-none px-1"
                          target="_blank"
                        >
                          <DiscordIcon />
                        </a>
                        <a
                          href="https//:www.instagram.com/"
                          className="text-decoration-none px-1"
                          target="_blank"
                        >
                          <InstagramIcon />
                        </a>
                        <a
                          href="https//:www.facebook.com"
                          className="text-decoration-none px-1"
                          target="_blank"
                        >
                          <FacebookIcon />
                        </a>
                        <a
                          href="https//:web.telegram.org/z/"
                          className="text-decoration-none px-1"
                          target="_blank"
                        >
                          <TelegramIcon />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <nav className="navbar h-86 navbar-expand-lg navbar-light p-3 w-100">
              <div className="d-flex justify-content-between w-100 align-items-center">
                <a href="#">
                  <img className="nav-logo" src={logo} alt="" />
                </a>

                <div
                  className={`${
                    showOverlay ? "animate" : ""
                  } position-relative navbarwrapper  hamburger-icon d-flex flex-column d-lg-none`}
                  onClick={() => setShowOverlay(!showOverlay)}
                >
                  <span className="first d-inline-block"></span>
                  <span className="second d-inline-block"></span>
                  <span className="third d-inline-block"></span>
                </div>
              </div>
            </nav>
          </BeforeDesktop>
        </div>
      </section>
    </>
  );
};

export default withRouter(Header);
