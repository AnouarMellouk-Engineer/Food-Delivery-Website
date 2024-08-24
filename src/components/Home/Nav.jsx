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

  const [links, setLinks] = useState([
    { href: "#", name: "Home", active: true },
    { href: "#content", name: "Menu", active: false },
    { href: "#mob", name: "Mobile Us", active: false },
    { href: "#foot", name: "Contact Us", active: false },
  ]);

  function change(e) {
    if (e.target.className !== "active") {
      const copylinks = [...links];
      copylinks.forEach((el) => {
        el.active ? (el.active = false) : undefined;
        el.name === e.target.textContent ? (el.active = true) : undefined;
      });
      console.log(copylinks);
      setLinks(copylinks);
    }
  }

  const list = links.map((e, ind) => {
    return (
      <li key={ind}>
        <a
          href={e.href}
          className={e.active ? "active" : undefined}
          onClick={(e) => change(e)}
        >
          {e.name}
        </a>
      </li>
    );
  });

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
        {isdesk || openmenu ? <ul>{list}</ul> : undefined}
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
