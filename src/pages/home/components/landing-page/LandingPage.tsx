import { Box, Typography } from "@mui/material";
import "./landing-page.css";
import backgroundSideLarge from "assets/images/home/slide-background1-large.png";
import background1 from "assets/images/carousel/bg_1.jpg";
import background3 from "assets/images/carousel/bg_3.jpg";
import background2 from "assets/images/carousel/bg_2.jpg";
import volunteer1 from "assets/images/volunteer/services-1.jpg";
import volunteer2 from "assets/images/volunteer/services-2.jpg";
import volunteer3 from "assets/images/volunteer/services-3.jpg";
import volunteer4 from "assets/images/volunteer/services-4.jpg";
import treatment from "assets/images/home/treatment.png";
import CustomButton from "components/CustomButton";
import { Carousel } from "antd";

import FormControl from "@mui/material/FormControl";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

const inputHomeDonate = [
  {
    placeHolder: "Full Name",
    field: "fullName",
    type: "INPUT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        fill="#00000033"
      >
        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
      </svg>
    ),
  },
  {
    placeHolder: "Email Address",
    field: "email",
    type: "INPUT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        fill="#00000033"
      >
        <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
      </svg>
    ),
  },

  {
    placeHolder: "Select Causes",
    field: "selectCauses",
    type: "SELECT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        fill="#00000033"
      >
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
      </svg>
    ),
  },
  {
    placeHolder: "Amount",
    field: "amount",
    type: "INPUT",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 576 512"
        fill="#00000033"
      >
        <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zM272 192H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16s7.2-16 16-16zM256 304c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H272c-8.8 0-16-7.2-16-16zM164 152v13.9c7.5 1.2 14.6 2.9 21.1 4.7c10.7 2.8 17 13.8 14.2 24.5s-13.8 17-24.5 14.2c-11-2.9-21.6-5-31.2-5.2c-7.9-.1-16 1.8-21.5 5c-4.8 2.8-6.2 5.6-6.2 9.3c0 1.8 .1 3.5 5.3 6.7c6.3 3.8 15.5 6.7 28.3 10.5l.7 .2c11.2 3.4 25.6 7.7 37.1 15c12.9 8.1 24.3 21.3 24.6 41.6c.3 20.9-10.5 36.1-24.8 45c-7.2 4.5-15.2 7.3-23.2 9V360c0 11-9 20-20 20s-20-9-20-20V345.4c-10.3-2.2-20-5.5-28.2-8.4l0 0 0 0c-2.1-.7-4.1-1.4-6.1-2.1c-10.5-3.5-16.1-14.8-12.6-25.3s14.8-16.1 25.3-12.6c2.5 .8 4.9 1.7 7.2 2.4c13.6 4.6 24 8.1 35.1 8.5c8.6 .3 16.5-1.6 21.4-4.7c4.1-2.5 6-5.5 5.9-10.5c0-2.9-.8-5-5.9-8.2c-6.3-4-15.4-6.9-28-10.7l-1.7-.5c-10.9-3.3-24.6-7.4-35.6-14c-12.7-7.7-24.6-20.5-24.7-40.7c-.1-21.1 11.8-35.7 25.8-43.9c6.9-4.1 14.5-6.8 22.2-8.5V152c0-11 9-20 20-20s20 9 20 20z" />
      </svg>
    ),
  },
];

export const listCauses = [
  {
    field: "",
    value: "",
  },
  {
    field: "houseWashing",
    value: "House Washing",
  },
  {
    field: "roofCleaning",
    value: "Roof Cleaning",
  },
  {
    field: "drivewayCleaning",
    value: "Driveway Cleaning",
  },
  {
    field: "gutterCleaning",
    value: "Gutter Cleaning",
  },
];

const LandingPage = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      {/* carousel */}
      <section className="hero-wrap js-fullheight">
        <div className="home-slider js-fullheight owl-carousel">
          <Carousel effect="fade" autoplay>
            <div>
              <div
                className="slider-item js-fullheight"
                style={{
                  backgroundImage: `url(  ${background1})`,
                }}
              >
                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="overlay-3"></div>
                <div className="overlay-4"></div>
                <div className="container">
                  <div className="row no-gutters slider-text js-fullheight align-items-center">
                    <div className="col-md-10 col-lg-7 ">
                      <div className="text w-100">
                        <h2>Help the poor in need</h2>
                        <h1 className="mb-3">
                          Lend the helping hand get involved
                        </h1>
                        <div className="d-flex meta">
                          <div className="">
                            <p className="mb-0">
                              <a
                                href=""
                                className="btn btn-secondary py-3 px-2 px-md-4"
                              >
                                Become A Volunteer
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="slider-item js-fullheight"
                style={{
                  backgroundImage: `url(  ${background2})`,
                  display: "flex",
                }}
              >
                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="overlay-3"></div>
                <div className="overlay-4"></div>
                <div className="container">
                  <div className="row no-gutters slider-text js-fullheight align-items-center">
                    <div className="col-md-10 col-lg-7 ">
                      <div className="text w-100">
                        <h2>Raising Hope</h2>
                        <h1 className="mb-3">
                          Discover Non-Profit Charity Platform
                        </h1>
                        <div className="d-flex meta">
                          <div className="">
                            <p className="mb-0">
                              <a
                                href=""
                                className="btn btn-secondary py-3 px-2 px-md-4"
                              >
                                Become A Volunteer
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="slider-item js-fullheight"
                style={{
                  backgroundImage: `url(  ${background3})`,
                }}
              >
                <div className="overlay-1"></div>
                <div className="overlay-2"></div>
                <div className="overlay-3"></div>
                <div className="overlay-4"></div>
                <div className="container">
                  <div className="row no-gutters slider-text js-fullheight align-items-center">
                    <div className="col-md-10 col-lg-7">
                      <div className="text w-100">
                        <h2>Raising Hope</h2>
                        <h1 className="mb-3">
                          Giving Hope to the Homeless People
                        </h1>
                        <div className="d-flex meta">
                          <div className="">
                            <p className="mb-0">
                              <a
                                href=""
                                className="btn btn-secondary py-3 px-2 px-md-4"
                              >
                                Become A Volunteer
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* donate form */}
      <section className="ftco-appointment ftco-section ftco-no-pt ftco-no-pb img">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 order-md-last d-flex align-items-stretch">
              <div className="donation-wrap">
                <div className="total-donate d-flex align-items-center">
                  <span className="fa flaticon-cleaning"></span>
                  <h4>
                    Donation Campaign <br />
                    are running
                  </h4>
                  <p className="d-flex align-items-center">
                    <span>$</span>
                    <span className="number" data-number="24781">
                      0
                    </span>
                  </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="appointment">
                  <div className="row">
                    {inputHomeDonate.map((input) => {
                      if (input.type == "INPUT") {
                        return (
                          <Controller
                            key={input.field}
                            control={control}
                            render={({ field: { onChange, value } }) => {
                              return (
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="name">
                                      {input.placeHolder}
                                    </label>
                                    <div className="input-wrap">
                                      <div className="icon">{input.icon}</div>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name={input.field}
                                        onChange={onChange}
                                        value={value}
                                      />
                                    </div>
                                  </div>
                                </div>
                              );
                            }}
                            name={input.field}
                          />
                        );
                      }

                      if (input.type == "SELECT") {
                        return (
                          <Controller
                            key={input.field}
                            control={control}
                            render={({ field: { onChange, value } }) => {
                              return (
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label htmlFor="name">Select Causes</label>
                                    <div className="form-field">
                                      <div className="select-wrap">
                                        <div className="icon">{input.icon}</div>
                                        <select
                                          name={input.field}
                                          onChange={onChange}
                                          value={value}
                                          className="form-control"
                                        >
                                          {listCauses.map((list) => {
                                            return (
                                              <option
                                                key={list.field}
                                                value={list.field}
                                              >
                                                {list.value}
                                              </option>
                                            );
                                          })}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            }}
                            name={input.field}
                          />
                        );
                      }
                    })}

                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Donate Now"
                          className="btn btn-secondary py-3 px-4"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-7 wrap-about py-5">
              <div className="heading-section pr-md-5 pt-md-5">
                <span className="subheading">Welcome to unicare</span>
                <h2 className="mb-4">We are here to help everyone in need</h2>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. But nothing the
                  copy said could convince her and so it didn’t take long until
                  a few insidious Copy Writers ambushed her, made her drunk with
                  Longe and Parole and dragged her into their agency, where they
                  abused her for their.
                </p>
              </div>
              <div className="row my-md-5">
                <div className="col-md-6 d-flex counter-wrap">
                  <div className="block-18 d-flex">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-volunteer"></span>
                    </div>
                    <div className="desc">
                      <div className="text">
                        <strong className="number" data-number="50">
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Volunteers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex counter-wrap">
                  <div className="block-18 d-flex">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-piggy-bank"></span>
                    </div>
                    <div className="desc">
                      <div className="text">
                        <strong className="number" data-number="24400">
                          0
                        </strong>
                      </div>
                      <div className="text">
                        <span>Trusted Funds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                <a href="#" className="btn btn-secondary btn-outline-secondary">
                  Become A Volunteer
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* volunteer */}
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services">
                <div className="text text-center bg-secondary">
                  <h3>
                    Become a <br />
                    Volunteer
                  </h3>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few
                  </p>
                </div>
                <div
                  className="img border-2"
                  style={{
                    backgroundImage: `url(  ${volunteer1})`,
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-volunteer"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services">
                <div className="text text-center bg-tertiary">
                  <h3>
                    Quick <br />
                    Fundraising
                  </h3>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few
                  </p>
                </div>
                <div
                  className="img border-3"
                  style={{
                    backgroundImage: `url(  ${volunteer2})`,
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-piggy-bank"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services">
                <div className="text text-center bg-primary">
                  <h3>
                    Start <br />
                    Donating
                  </h3>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few
                  </p>
                </div>
                <div
                  className="img border-1"
                  style={{
                    backgroundImage: `url(  ${volunteer3})`,
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-donation"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-stretch">
              <div className="services">
                <div className="text text-center bg-quarternary">
                  <h3>
                    Get <br />
                    Involved
                  </h3>
                  <p>
                    But nothing the copy said could convince her and so it
                    didn’t take long until a few
                  </p>
                </div>
                <div
                  className="img border-4"
                  style={{
                    backgroundImage: `url(  ${volunteer4})`,
                  }}
                >
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="flaticon-ecological"></span>
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

export default LandingPage;
