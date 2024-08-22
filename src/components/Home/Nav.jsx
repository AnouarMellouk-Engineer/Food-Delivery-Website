import { assets } from "../../assets/images/assets";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Nav = () => {
  const [isdesk, setIsdesk] = useState(window.innerWidth > 786);
  const [openmenu, setOpen] = useState(false);

  function handelclicck() {
    if (openmenu) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  window.onresize = () => {
    if (window.innerWidth > 786) {
      setIsdesk(true);
    } else {
      setIsdesk(false);
    }
  };
  return (
    <div className="nav">
      <div className="container">
        <div className="logo-nav">
          <img src={assets.logo} alt="" />
        </div>
        {isdesk || openmenu ? (
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Mobile App</a>
            </li>
            <li>
              <a href="#">Contanct Us</a>
            </li>
          </ul>
        ) : undefined}
        <div className="others">
          <div
            className={openmenu ? "mune-icon open" : "mune-icon"}
            onClick={handelclicck}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="search-nav image">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div className="basket-nav image">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <p>sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
