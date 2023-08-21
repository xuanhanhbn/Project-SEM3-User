import React from "react";
import "./gird.css";
import bg from "assets/images/gallery/page-title-bg-1.jpg";
import pn1 from "assets/images/partners/12ea69e9-8c54-4579-aa09-0e65dae025a9.jpg";
import pn2 from "assets/images/partners/attachment_26167826.jpg";
import pn3 from "assets/images/partners/attachment_75185576.png";
import pn4 from "assets/images/partners/attachment_87659723.png";
import pn5 from "assets/images/partners/attachment_89020120.jpg";
import pn6 from "assets/images/partners/attachment_91622765.jpg";
import pn7 from "assets/images/partners/attachment_96110917.jpg";
import pn8 from "assets/images/partners/attachment_96429374.png";
import pn9 from "assets/images/partners/attachment_101285985.jpg";
import pn10 from "assets/images/partners/attachment_109729989.png";
import pn11 from "assets/images/partners/attachment_113975607.jpg";
import pn12 from "assets/images/partners/attachment_129000522.jpg";

const partnerList = [
  {
    name: "partners 1",
    path: pn12,
  },
  {
    name: "partners 2",
    path: pn11,
  },
  {
    name: "partners 3",
    path: pn3,
  },
  {
    name: "partners 4",
    path: pn4,
  },
  {
    name: "partners 5",
    path: pn5,
  },
  {
    name: "partners 6",
    path: pn6,
  },
  {
    name: "partners 7",
    path: pn7,
  },
  {
    name: "partners 8",
    path: pn8,
  },
  {
    name: "partners 9",
    path: pn9,
  },
  {
    name: "partners 10",
    path: pn10,
  },
  {
    name: "partners 11",
    path: pn11,
  },
  {
    name: "partners 12",
    path: pn12,
  },
];

function OurPartnerPage() {
  return (
    <div>
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
                  Our partners <i className="ion-ios-arrow-forward"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Our partners</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row">
                  {partnerList.map((list) => {
                    return (
                      <div key={list.name} className="column">
                        <div className="card">
                          <img
                            style={{ maxHeight: "125px", marginBottom: 10 }}
                            src={list.path}
                            alt=""
                          />
                          <p>Our {list.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurPartnerPage;
