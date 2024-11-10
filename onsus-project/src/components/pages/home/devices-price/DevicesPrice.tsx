import React from "react";
import "./DevicesPrice.scss";
import dev_img from "../../../../assets/images/home/devices-price/device-img.webp";
import dev1 from "../../../../assets/images/home/devices-price/device-1.webp";
import dev2 from "../../../../assets/images/home/devices-price/dervice-2.webp";
import Button from "../../../shared/Button/CartButton";
import { Link } from "react-router-dom";
const DevicesPrice = () => {
  return (
    <section id="devices-price">
      <div className="container">
        <div className="devices-price">
          <div className="device-picture">
            <img src={dev_img} alt="" />
          </div>
          <div className="about-device">
            <div className="price-title">Price</div>
            <h1 className="device-price">$450</h1>
            <div className="price-subtitle">Let power flow through you</div>
            <div className="device-detail">Dell G5 Gaming Laptop</div>
          </div>
          <div className="other-devices-cards">
            <div className="item-card">
              <div className="item-info">
                <div className="item-picture">
                  <img src={dev1} alt="" />
                </div>
                <div className="item-details">
                  <div className="item-categories">Airpods</div>
                  <div className="item-model">
                    <Link to={""}>
                      {" "}
                      Apple AirPods Max Wireless Over-Ear Headphones – Green
                    </Link>
                  </div>
                  <div className="item-price">$549.00</div>
                </div>
              </div>
              <div className="more-item-info">
                <div className="more-info">
                  <div className="info">
                    <p>Brand</p>
                    <p>Apple</p>
                  </div>
                  <div className="info">
                    <p>Model Name</p>
                    <p>AirPods Max</p>
                  </div>
                  <div className="info">
                    <p>Color</p>
                    <p>Green</p>
                  </div>
                  <div className="info">
                    <p>Form Factor</p>
                    <p>Over Ear</p>
                  </div>
                  <div className="info">
                    <p>Connectivity Technology</p>
                    <p>Bluetooth</p>
                  </div>
                </div>
                <div className="time-delivery">
                  <i className="fa-solid fa-truck"></i>
                  <p className="time">2 day delivery</p>
                </div>
                <div className="add-to-cart-btn">
                  <Button className="cart-btn" type="button">
                    Ad to cart
                  </Button>
                </div>
              </div>
            </div>
            <div className="item-card">
              <div className="item-info">
                <div className="item-picture">
                  <img src={dev2} alt="" />
                </div>
                <div className="item-details">
                  <div className="item-categories">Airpods</div>
                  <div className="item-model">
                    <Link to={""}>
                      {" "}
                      Apple AirPods Max Wireless Over-Ear Headphones – Green
                    </Link>
                  </div>
                  <div className="item-price">$549.00</div>
                </div>
              </div>
              <div className="more-item-info">
                <div className="more-info">
                  <div className="info">
                    <p>Brand</p>
                    <p>Apple</p>
                  </div>
                  <div className="info">
                    <p>Model Name</p>
                    <p>AirPods Max</p>
                  </div>
                  <div className="info">
                    <p>Color</p>
                    <p>Green</p>
                  </div>
                  <div className="info">
                    <p>Form Factor</p>
                    <p>Over Ear</p>
                  </div>
                  <div className="info">
                    <p>Connectivity Technology</p>
                    <p>Bluetooth</p>
                  </div>
                </div>
                <div className="time-delivery">
                  <i className="fa-solid fa-truck"></i>
                  <p className="time">2 day delivery</p>
                </div>
                <div className="add-to-cart-btn">
                  <Button className="cart-btn" type="button">
                    Ad to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevicesPrice;
