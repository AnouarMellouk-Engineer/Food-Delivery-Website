import { assets } from "../../assets/images/assets";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer" id="foot">
      <div className="container">
        <div className="first">
          <div className="logoo">
            <img src={assets.logo} alt="tomato" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            perferendis accusamus rerum dolorum voluptates sunt reiciendis
            sapiente iure necessitatibus expedita!
          </p>
          <div className="social-links">
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="second">
          <p>Company</p>
          <p>home</p>
          <p>about us</p>
          <p>delivery</p>
          <p>privacy policy</p>
        </div>
        <div className="third">
          <p>Get in touch</p>
          <p>+1-212-4560-7890</p>
          <p>contact@greatstack.dev</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
