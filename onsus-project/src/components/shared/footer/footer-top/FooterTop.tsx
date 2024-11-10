import "./FooterTop.scss";
import mainlogo from "../../../../assets/images/footer/main-logo/main-logo.png";
import paymentcards from "../../../../assets/images/footer/card-logos/cardlogos.png";
import { Link } from "react-router-dom";
import Collapse from "../collapse/Collapse";

const FooterTop = () => {
  return (
    <div className="footer-top-elements">
      <div className="container">
        <div className="top-content">
          <div className="site-logos wrap-component">
            <div className="main-logo">
              <img src={mainlogo} alt="" />
            </div>
            <p className="suggest-title">We accept:</p>
            <div className="payment-cards">
              <img src={paymentcards} alt="" />
            </div>
          </div>
          <div className="all-links  wrap-component">
            <h3 className="title">Get help</h3>
            <ul>
              <li>
                <Link to={""}>Privacy Notice</Link>
              </li>
              <li>
                <Link to={""}>Shopping FAQs</Link>
              </li>
              <li>
                <Link to={""}>Returns & Refunds</Link>
              </li>
              <li>
                <Link to={""}>Delivery Information</Link>
              </li>
              <li>
                <Link to={""}>Sale Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div className="all-links  wrap-component">
            <h3 className="title">Popular categories</h3>
            <ul>
              <li>
                <Link to={""}>Smartwatch</Link>
              </li>
              <li>
                <Link to={""}>Smart Phones</Link>
              </li>
              <li>
                <Link to={""}>Laptop & Tablet</Link>
              </li>
              <li>
                <Link to={""}>Cameras & Video</Link>
              </li>
              <li>
                <Link to={""}>Computer Screen</Link>
              </li>
              <li>
                <Link to={""}>Audio Equipments</Link>
              </li>
              <li>
                <Link to={""}>Gaming Accessories</Link>
              </li>
            </ul>
          </div>
          <div className="all-links wrap-component">
            <h3 className="title">Customer Care</h3>
            <ul>
              <li>
                <Link to={""}>Blog</Link>
              </li>
              <li>
                <Link to={""}>Cart</Link>
              </li>
              <li>
                <Link to={""}>Shop</Link>
              </li>
              <li>
                <Link to={""}>Wishlist</Link>
              </li>
              <li>
                <Link to={""}>Checkout</Link>
              </li>
              <li>
                <Link to={""}>My Account</Link>
              </li>
            </ul>
          </div>

          <div className="all-links-mobile">
            <Collapse />
          </div>

          <div className="contact-section wrap-component">
            <h3 className="title">Contact</h3>
            <div className="contact-info">
              <i className="fa-solid fa-location-dot"></i>
              <a
                className="address"
                href="https://maps.app.goo.gl/evGmvGtFXy63B4qo7"
                target="_blank"
              >
                8500 Lorem Street Chicago, IL 55030 Dolor sit amet
              </a>
            </div>
            <div className="contact-info">
              <i className="fa-solid fa-phone"></i>
              <a className="phone-number" href="tel:+8(800) 123 4567">
                +8(800) 123 4567
              </a>
            </div>
            <div className="contact-info">
              <i className="fa-regular fa-paper-plane"></i>
              <a className="email" href="mailto:onsus@support.com">
                onsus@support.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
