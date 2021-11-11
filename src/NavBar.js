import "boxicons";
import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import "./NavBar.css";
import logo from "./weblogo3.png";
import NotiManagement from "./NotiManagement";
import { AiOutlineHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { MdOutlineNightsStay } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

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
  const [text6, setText6] = React.useState("alert");
  const [text7, setText7] = React.useState("hide_board");
  const [text8, setText8] = React.useState("hiddenNotiDetailBtn");
  const [text9, setText9] = React.useState("hiddenNotiDetail");
  const [text10, setText10] = React.useState("notiDetail");
  const clickHandler = () => {
    if (text === "sidebar") {
      setText("sidebar open");
      if (text1 === "homepage") setText1("homepage open");
      setText2("homewallpaper open");
      setText3("elements open");
      if (text5 === "notifications") setText5("notifications open");
      if (text7 === "scoreboard") setText7("scoreboard open");
    } else {
      setText("sidebar");
      if (text1 === "homepage open") setText1("homepage");
      setText2("homewallpaper");
      setText3("elements");
      if (text5 === "notifications open") setText5("notifications");
      if (text7 === "scoreboard open") setText7("scoreboard");
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
      setText7("hide_board");
    } else if (text5 === "hide_noti" && text === "sidebar open") {
      setText5("notifications open");
      setText1("hide_homepage");
      setText7("hide_board");
    }
  };
  const showHomepage = () => {
    if (text1 === "hide_homepage" && text === "sidebar") {
      setText1("homepage");
      setText5("hide_noti");
      setText7("hide_board");
    } else if (text1 === "hide_homepage" && text === "sidebar open") {
      setText1("homepage open");
      setText5("hide_noti");
      setText7("hide_board");
    }
  };
  const showBoard = () => {
    if (text7 === "hide_board" && text === "sidebar") {
      setText7("scoreboard");
      setText1("hide_homepage");
      setText5("hide_noti");
    } else if (text7 === "hide_board" && text === "sidebar open") {
      setText7("scoreboard open");
      setText1("hide_homepage");
      setText5("hide_noti");
    }
  };
  const notiDetail = () => {
    if (text9 === "hiddenNotiDetail") {
      setText8("hiddenNotiDetailBtn open");
      setText9("showNotiDetail");
    }
  };
  const hiddenNotiDetail = () => {
    setText8("hiddenNotiDetailBtn");
    setText9("hiddenNotiDetail");
  };
  return (
    <section className='body'>
      {/* PHAN THANH MENU */}

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
                showBoard();
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

      {/* PHAN TRANG CHU */}

      <div id={text4}>
        {/* TRANG CHU */}

        <div className={text1}>
          <p className={text3} id='title'>
            Classe <span id='student'>369</span>
          </p>
          <hr className={text3} id='homehr' />
          <div className='introduction'>
            <h1 className='manage'>
              Everything
              <div id='_manage'>you need to manage your</div> educational
              institution
            </h1>
            <div className='manage_1'>
              <img id='logo' src={logo} />
            </div>
            <p id='_intro1'>
              Classe369 là 1 phần mềm tiện ích giúp quản lý sinh viên một cách
              ngắn gọn và đầy đủ nhất thông qua những thống kê xác thực nhất và
              nhanh nhất
            </p>
            <img
              className={text2}
              src='https://i.pinimg.com/originals/a5/f4/fb/a5f4fb117b65e2a5b624ef09395c4228.png'></img>
            <div className='footer1'>
              <h1 id='_footer1'>
                No More Data Silos - Just Unified School Management Software
              </h1>
              <p id='_footer2'>
                Hàng ngàn tổ chức giáo dục ngày nay sử dụng hệ thống quản lý
                trường học phân mảnh và nền tảng phần mềm để quản lý các hoạt
                động hành chính và học tập của họ. Classe369 cung cấp một giải
                pháp hợp nhất tất cả trong một nền tảng đơn giản và đẹp mắt.
              </p>
            </div>

            {/* FOOTER CHUC NANG */}

            <div className='footer2'>
              <h1 id='_footer1'>Classe 369 features</h1>
              <hr className={text3} id='homehr' />
              <div className='footer_icons'>
                <BsChatDots />
              </div>
              <div className='footer_icons'>
                <BsFillBarChartLineFill />
              </div>
              <div className='footer_icons'>
                <BsClipboardData />
              </div>
              <div className='footer_icons'>
                <IoMdNotificationsOutline />
              </div>
              <br />

              <div className='footer_fn' id='footer_fn1'>
                He thong chat
              </div>
              <div className='footer_fn' id='footer_fn2'>
                Bang thong ke
              </div>
              <div className='footer_fn' id='footer_fn3'>
                Bang diem
              </div>
              <div className='footer_fn' id='footer_fn4'>
                Thong bao
              </div>
            </div>
          </div>
        </div>

        {/* BANG DIEM */}

        <div className={text7}></div>

        {/* THONG BAO */}

        <div className={text5}>
          <p className={text3}>
            THÔNG<span id='noti'> BÁO</span>
          </p>
          <div className='notiManagement'>
            <NotiManagement />
          </div>
          <div className={text6} onClick={notiDetail}>
            <div
              className={text8}
              id='notiHiddenBtn'
              onClick={hiddenNotiDetail}>
              <IoIosCloseCircleOutline></IoIosCloseCircleOutline>
            </div>
            <div style={{ marginLeft: "30px" }}>An Huy rat la dep trai</div>
            <span id='notiCloseBtn'>
              <MdOutlineDelete></MdOutlineDelete>
            </span>
          </div>
          <div className={text10} id={text9}>
            an huy 123
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
