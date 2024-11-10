import { Collapse } from "antd";
import "./Collapse.scss";
import { Link } from "react-router-dom";
const FooterCollapse = () => {
  const Panel = Collapse.Panel;
  return (
    <Collapse accordion>
      <Panel
        key={"1"}
        header={
          <div className="nav-header">
            <h3 className="link-title">Get help</h3>
            <div className="open-btn">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        }
      >
        <ul className="collapse-links">
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
      </Panel>

      <Panel
        key={"2"}
        header={
          <div className="nav-header">
            <h3 className="link-title">Popular categories</h3>
            <div className="open-btn">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        }
      >
        <ul className="collapse-links">
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
      </Panel>
      <Panel
        key={"3"}
        header={
          <div className="nav-header">
            <h3 className="link-title">Customer Care</h3>
            <div className="open-btn">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        }
      >
        <ul className="collapse-links">
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
      </Panel>
    </Collapse>
  );
};

export default FooterCollapse;
