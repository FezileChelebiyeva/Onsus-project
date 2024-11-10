import FooterBottom from "../../components/shared/footer/footer-bottom/FooterBottom";
import FooterMiddle from "../../components/shared/footer/footer-middle/FooterMiddle";
import FooterTop from "../../components/shared/footer/footer-top/FooterTop";
import "./Footer.scss";
const Footer = () => {
  return (
    <section id="footer">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </section>
  );
};

export default Footer;
