import React from "react";
import {
  FaBars,
  FaTimes,
  FaRegUserCircle,
  FaShoppingBag,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../store";
import NavbarProdustDetail from "../smallcomponent/NavbarProdustDetail";
function Divbar() {
  // const Divbar=()=>{
  const [showCarIcon, setShowCarIcon] = useState(false);
  console.log(showCarIcon);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/Loginpage");
  };

  const [state] = useContext(CartContext);
  const MoveNav = useRef(null);
  const MoveOut = () => {
    MoveNav.current.classList.toggle("c-n-Move");
  };
  return (
    <div className="b-nav">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FaBars />
      </label>
      <label className="logo">
        <Link to="/">
          <img
            src="./img/logo.svg"
            alt="黑碟"
            style={{ width: "60px", paddingbottom: "10px" }}
          />
        </Link>
      </label>
      <ul>
        <input type="b-checkbox" id="check" />
        <li>
          {" "}
          <label htmlFor="check" className="checkbtn1">
            <FaTimes />
          </label>
        </li>
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/Customization">客製化</Link>
        </li>
        <li>
          <Link to="/ProductHome">黑膠唱片</Link>
        </li>
        <li>
          <Link to="/CartProcess">購物車</Link>
        </li>
        <li>
          <Link to="/">關於我們</Link>
        </li>
        <li>
          <Link to="/MEdit">會員</Link>
        </li>
        <li>
          {auth ? (
            <Link onClick={logout} to="/Loginpage">
              登出 <FaRegUserCircle />
            </Link>
          ) : (
            <Link to="/Loginpage">
              會員登入 <FaRegUserCircle />
            </Link>
          )}
        </li>
        <li>
          <i className="c-n-btn" type="submit">
            <FaShoppingBag
              size={30}
              onClick={() => {
                MoveOut();
              }}
            />
            <span className="badge text-bg-danger position-absolute top-0 start-100 translate-middle">
              {state.cartList.length}
            </span>
          </i>
        </li>
      </ul>
      <div className="c-NavbarCartLayer ">
        <div className="c-NavbarCart c-NavbarZ bg-dark" ref={MoveNav}>
          <div className="c-NavbarCartText bg-dark">
            <h2>購物車</h2>
            <i>
              <FaTimes
                size={20}
                onClick={() => {
                  MoveOut();
                }}
              />
            </i>
          </div>
          <NavbarProdustDetail />
          <div className="c-NavbarCartbtn">
            <button>
              <h3>
                <Link to="/CartProcess">訂單結帳</Link>
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Divbar;
