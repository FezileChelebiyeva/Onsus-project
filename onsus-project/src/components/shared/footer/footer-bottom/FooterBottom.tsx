import { Link } from "react-router-dom";
import "./FooterBottom.scss";
const FooterBottom = () => {
  return (
    <div className="bottom-elements">
      <div className="container">
        <div className="bottom-content">
          <div className="social-media">
            <a className="media-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="media-icon">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="media-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="media-icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="media-icon">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <ul className="foot-links">
            <ul className="half-links">
              <li className="link-list">
                <Link to={""}>New arrivals</Link>
              </li>
              <li className="link-list">
                <Link to={""}>Best sale</Link>
              </li>
              <li className="link-list">
                <Link to={""}>Value of the day</Link>
              </li>
            </ul>
            <ul  className="half-links">
              <li className="link-list">
                <Link to={""}>Top 100 offers</Link>
              </li>
              <li className="link-list">
                <Link to={""}>Blog</Link>
              </li>
            </ul>
          </ul>
          <div className="copyright">
            Onsus.© 2023. All right reserved – Designed by{" "}
            <a href="">Themesflat</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
