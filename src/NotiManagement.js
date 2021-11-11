import React from "react";
import { Component } from "react";
import { ReactDOM } from "react";
import "./NavBar.css";

class NotiManagement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p id='add-noti-title'>THÊM THÔNG BÁO</p>
        <textarea id='notiText' placeholder='Nhap thong bao...'></textarea>
        <br />
        <button id='add-noti-btn'>GỬI</button>
      </div>
    );
  }
}

export default NotiManagement;
