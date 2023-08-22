import React from "react";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import about from "assets/images/background/about-3.jpg";

import { inputHomeDonate, listCauses, radioPayload } from "./contants";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormControl from "@mui/material/FormControl";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

function DonationPage() {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

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
            <div className="pb-5 col-md-9">
              <p className="mb-2 breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="ion-ios-arrow-forward"></i>
                  </a>
                </span>
                <span>
                  Donation <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Donation</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div
                  className="mb-4"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div style={{ maxWidth: "500px", textAlign: "center" }}>
                    <h4
                      style={{
                        fontSize: 46,
                        fontWeight: 700,
                        color: "black",
                        fontFamily: '"Poppins",sans-serif',
                      }}
                    >
                      Make a donation to help us
                    </h4>
                  </div>
                </div>

                <div className="mt-4 row no-gutters">
                  <div className="col-md-7">
                    <div className="p-4 contact-wrap w-100 p-md-5">
                      <h3 className="mb-4">Donator Details</h3>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="appointment"
                      >
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
                                            <div className="icon">
                                              {input.icon}
                                            </div>
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
                                          <label htmlFor="name">
                                            Select Causes
                                          </label>
                                          <div className="form-field">
                                            <div className="select-wrap">
                                              <div className="icon">
                                                {input.icon}
                                              </div>
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
                                                key={radio.field}
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
                                className="px-4 py-3 btn btn-secondary"
                              />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch">
                    <div
                      className="p-5 info-wrap w-100 img"
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
    </>
  );
}

export default DonationPage;
