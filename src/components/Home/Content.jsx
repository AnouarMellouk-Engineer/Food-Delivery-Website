// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faMagnifyingGlass,
//   faCartShopping,
// } from "@fortawesome/free-solid-svg-icons";
import "./content.css";
import { menu_list, food_list } from "../../assets/images/assets";
import { useState } from "react";
import { assets } from "../../assets/images/assets";

const Content = () => {
  const [cate, setCate] = useState("all");
  const cartList = menu_list.map((e, index) => {
    return (
      <div
        className={e.menu_name === cate ? " cart selected" : "cart"}
        key={index}
      >
        <div
          className="imagess"
          onClick={() => {
            cate === e.menu_name ? setCate("all") : setCate(e.menu_name);
          }}
        >
          <img src={e.menu_image} alt="" />
        </div>
        <div
          className="name"
          onClick={() => {
            cate === e.menu_name ? setCate("all") : setCate(e.menu_name);
          }}
        >
          {e.menu_name}
        </div>
      </div>
    );
  });

  const dishes = food_list.map((e, ind) => {
    if (cate === "all") {
      return (
        <div className="dish" key={e._id}>
          <div className="phot">
            <img src={e.image} alt={e.name} />
            <div className="plus">+</div>
          </div>
          <div className="more">
            <div className="title">{e.name}</div>

            <p>{e.description}</p>
            <span>${e.price}</span>
          </div>
        </div>
      );
    } else if (e.category === cate) {
      return (
        <div className="dish" key={ind}>
          <div className="phot">
            <img src={e.image} alt={e.name} />
            <div className="plus">+</div>
          </div>
          <div className="more">
            <div className="infoo">
              <div className="title">{e.name}</div>
              <div className="taqim"></div>
            </div>
            <p>{e.description}</p>
            <span>{e.price}</span>
          </div>
        </div>
      );
    }
  });
  return (
    <div className="content container " id="content">
      <div className="landing-image">
        <div className="text">
          <h1>
            Order your <br />
            favourit food here{" "}
          </h1>
          <p>
            shoose from a deverse menu featering a delectable array of deshes
            arafted with the finens ingridients and culinary expertise,our
            mission is to satesfy your crafings and elevates ,your dinning
            experience.
          </p>
          <button>
            {" "}
            <a href="#menu">view mune </a>
          </button>
        </div>
      </div>

      <div className="explore-menu" id="menu">
        <div className="categories">
          <div className="info">
            <h2>Explore our menu</h2>
            <p>
              shose from a deferse menu fetearing a delectable array of
              dishes.our mission is to satesfy your crafings and elevates ,your
              dinning experience.{" "}
            </p>
          </div>
          <div className="cat">{cartList}</div>
        </div>
        <div className="cart-content">
          <h3>Top dishes near you </h3>
          <div className="dishes">{dishes}</div>
        </div>
      </div>

      <div className="tomato-app" id="mob">
        <div className="cont">
          <div className="p">For Better Experience Download tomato app </div>
          <div className="links">
            <div className="immage">
              <img src={assets.app_store} alt="App Stor" />
            </div>
            <div className="immage">
              <img src={assets.play_store} alt="Play Stor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
