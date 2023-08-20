import React from "react";
import { Box, Container } from "@mui/material";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import about from "assets/images/background/about-3.jpg";
import "./css.css";

const HelpCentrePage = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{
          backgroundImage: `url(  ${bg})`,
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-end">
            <div className="col-md-9  pb-5">
              <p className="breadcrumbs mb-2">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Help centre <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Help centre</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" style={{ paddingBottom: 20 }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3
                        className="mb-4"
                        style={{ color: "black", fontWeight: 700 }}
                      >
                        What Is Give-AID ?
                      </h3>
                      <p style={{ color: "white" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                      <>
                        <details>
                          <summary>FAQ 1</summary>
                          <div className="faq__content">
                            <p>Answer 1</p>
                          </div>
                        </details>
                        <details>
                          <summary>FAQ 2</summary>
                          <div className="faq__content">
                            <p>Answer 2</p>
                          </div>
                        </details>
                        <details>
                          <summary>FAQ 3</summary>
                          <div className="faq__content">
                            <p>Answer 3</p>
                          </div>
                        </details>
                      </>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div
                      className="info-wrap w-100 p-5 img"
                      style={{
                        backgroundImage: `url(  ${about})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section"
        style={{
          paddingTop: 20,
          backgroundColor: "#faf8f2",
          paddingBottom: 20,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div
                      className="info-wrap w-100 p-5 img"
                      style={{
                        backgroundImage: `url(  ${about})`,
                      }}
                    ></div>
                  </div>
                  <div className="col-md-7">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3
                        className="mb-4"
                        style={{ color: "black", fontWeight: 700 }}
                      >
                        My donation secure?
                      </h3>
                      <p style={{ color: "white" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                      <>
                        <details>
                          <summary>FAQ 1</summary>
                          <div className="faq__content">
                            <p>Answer 1</p>
                          </div>
                        </details>
                        <details>
                          <summary>FAQ 2</summary>
                          <div className="faq__content">
                            <p>Answer 2</p>
                          </div>
                        </details>
                        <details>
                          <summary>FAQ 3</summary>
                          <div className="faq__content">
                            <p>Answer 3</p>
                          </div>
                        </details>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section"
        style={{
          paddingTop: 20,
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div>
                    <div
                      style={{ width: "100%" }}
                      className="contact-wrap w-100 p-md-5 p-4"
                    >
                      <h3 className="mb-4">Contact Us</h3>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label">Full Name</label>
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label">Email Address</label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label">Subject</label>
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label">Message</label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCentrePage;
