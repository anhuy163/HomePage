import "boxicons";
import React from "react";
import ReactDOM from "react-dom";
import "./NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { MdOutlineNightsStay } from "react-icons/md";
import Notification from "./Notification";

const NavBar = () => {
  const [isActive1, setActive1] = React.useState("true");
  const [isActive2, setActive2] = React.useState("false");
  const [isActive3, setActive3] = React.useState("false");
  const [isActive4, setActive4] = React.useState("false");
  const [text, setText] = React.useState("sidebar");
  const [text1, setText1] = React.useState("homepage");
  const [text2, setText2] = React.useState("homewallpaper");
  const [text3, setText3] = React.useState("elements");
  const [text4, setText4] = React.useState("main");
  const [text5, setText5] = React.useState("hide_noti");
  const clickHandler = () => {
    if (text === "sidebar") {
      setText("sidebar open");
      if (text1 === "homepage") setText1("homepage open");
      setText2("homewallpaper open");
      setText3("elements open");
      if (text5 === "notifications") setText5("notifications open");
    } else {
      setText("sidebar");
      if (text1 === "homepage open") setText1("homepage");
      setText2("homewallpaper");
      setText3("elements");
      if (text5 === "notifications open") setText5("notifications");
    }
  };
  const activeLi1 = () => {
    setActive1("true");
    setActive2("false");
    setActive3("false");
  };
  const activeLi2 = () => {
    setActive2("true");
    setActive1("false");
    setActive3("false");
  };
  const activeLi3 = () => {
    setActive3("true");
    setActive2("false");
    setActive1("false");
  };
  const activeLi4 = () => {
    if (isActive4 === "true") {
      setActive4("false");
    } else {
      setActive4("true");
    }
  };
  const setNightMode = () => {
    if (text4 === "main") {
      setText4("main_nightmode");
    } else {
      setText4("main");
    }
  };
  const showNoti = () => {
    if (text5 === "hide_noti" && text === "sidebar") {
      setText5("notifications");
      setText1("hide_homepage");
    } else if (text5 === "hide_noti" && text === "sidebar open") {
      setText5("notifications open");
      setText1("hide_homepage");
    }
  };
  const showHomepage = () => {
    if (text1 === "hide_homepage" && text === "sidebar") {
      setText1("homepage");
      setText5("hide_noti");
    } else if (text1 === "hide_homepage" && text === "sidebar open") {
      setText1("homepage open");
      setText5("hide_noti");
    }
  };
  return (
    <section className='body'>
      <div className={text}>
        <div className='logo-details'>
          <div className='logo_name'>AN HUY</div>
          <div id='btn' onClick={clickHandler}>
            <box-icon name='menu' color='#ffffff'></box-icon>
          </div>
        </div>
        <ul className='nav-list'>
          <li>
            <a
              className={isActive1 === "true" ? "home" : ""}
              onClick={() => {
                activeLi1();
                showHomepage();
              }}>
              <div className='icon'>
                <AiOutlineHome />
              </div>
              <span className='links_name'>Trang chu</span>
            </a>
            <span className='tooltip'>Trang chu</span>
          </li>
          <li>
            <a
              className={isActive2 === "true" ? "home" : ""}
              onClick={() => {
                activeLi2();
                showNoti();
              }}>
              <div className='icon'>
                <IoMdNotificationsOutline />
              </div>
              <span className='links_name'>Thong Bao</span>
            </a>
            <span className='tooltip'>Thong Bao</span>
          </li>
          <li>
            <a
              className={isActive3 === "true" ? "home" : ""}
              onClick={() => {
                activeLi3();
              }}>
              <div className='icon'>
                <BsClipboardData />
              </div>
              <span className='links_name'>Bang Diem</span>
            </a>
            <span className='tooltip'>Bang Diem</span>
          </li>
          <li className='night_mode'>
            <a
              className={isActive4 === "true" ? "home1" : ""}
              onClick={() => {
                activeLi4();
                setNightMode();
              }}>
              <div className='icon'>
                <MdOutlineNightsStay />
              </div>
              <span className='links_name'>Night mode</span>
            </a>
            <span className='tooltip'>Night mode</span>
          </li>
          <li className='logout'>
            <a>
              <div className='icon'>
                <BiLogOut />
              </div>
              <span className='links_name'>Dang xuat</span>
            </a>
            <span className='tooltip'>Dang xuat</span>
          </li>
          <li></li>
        </ul>
      </div>
      <div id={text4}>
        <div className={text1}>
          <p className={text3} id='title'>
            QUẢN LÝ <span id='student'>SINH VIÊN</span>
          </p>
          <hr className={text3} id='homehr' />
          <img
            className={text2}
            src='https://images4.alphacoders.com/861/thumb-1920-861900.png'></img>
        </div>
        <div className={text5}>
          <Notification />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
