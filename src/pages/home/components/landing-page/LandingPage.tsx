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

import { inputHomeDonate, listCauses, radioPayload } from "./contants";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormControl from "@mui/material/FormControl";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

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
                        <label htmlFor="name">Payment Method</label>
                        <div className="d-lg-flex">
                        
                          <Controller
                            control={control}
                            render={({ field: { onChange, value } }) => (
                              <>
                                <FormControl>
                                  <RadioGroup
                                    onChange={onChange}
                                    value={value}
                                    row
                                    aria-label="gender"
                                    name="account-settings-info-radio"
                                  >
                                    {radioPayload.map((radio) => {
                                      return (
                                        <FormControlLabel
                                          value={radio.field}
                                          label={radio.value}
                                          control={<Radio />}
                                        />
                                      );
                                    })}
                                  </RadioGroup>
                                </FormControl>
                              </>
                            )}
                            name="payload"
                          />
                        </div>
                      </div>
                    </div>

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
