import React from "react";
import "./Features.scss";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="features">
          <div className="feature">
            <div className="icon">
              <i className="fa-solid fa-truck"></i>
            </div>
            <div className="about-feature">
              <h3 className="feature-title">Free delivery</h3>
              <p className="feature-subtitle">
                Velit ullamco elit et aliqua magna
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <i className="fa-solid fa-business-time"></i>
            </div>
            <div className="about-feature">
              <h3 className="feature-title">Support 24/7</h3>
              <p className="feature-subtitle">
                Velit ullamco elit et aliqua magna
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <i className="fa-regular fa-credit-card"></i>
            </div>
            <div className="about-feature">
              <h3 className="feature-title">Payment</h3>
              <p className="feature-subtitle">
                Velit ullamco elit et aliqua magna
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <i className="fa-regular fa-thumbs-up"></i>
            </div>
            <div className="about-feature">
              <h3 className="feature-title">Reliable</h3>
              <p className="feature-subtitle">
                Velit ullamco elit et aliqua magna
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="icon">
              <i className="fa-regular fa-square-check"></i>{" "}
            </div>
            <div className="about-feature">
              <h3 className="feature-title">Guarantee</h3>
              <p className="feature-subtitle">
                Velit ullamco elit et aliqua magna
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
