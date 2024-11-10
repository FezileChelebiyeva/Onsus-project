import './FooterMiddle.scss'
const FooterMiddle = () => {
  return (
    <div className="middle-elements">
      <div className="container">
        <div className="middle-content">
          <div className="register-payment">
            <div className="payment">
              <span className="email-icon">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <span>Join our newsletter for $10 offs</span>
            </div>
            <div className="register-info">
              Register now to get latest updates on promotions & coupons.
            </div>
          </div>
          <form className="subscription">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email address"
            />
            <button className="subscription-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
