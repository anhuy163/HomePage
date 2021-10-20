import "boxicons";
import react from "react";
import React from "react";
import "./NavBar.css";

const Notification = () => {
  return (
    <div>
      <p>THONG BAO</p>
      <hr></hr>
      <div className='alert'>
        <span className='notiCloseBtn'>x</span>
        <strong>From Teacher</strong>
        An Huy rat la dep trai
      </div>
    </div>
  );
};

export default Notification;
