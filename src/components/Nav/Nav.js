import React from "react";
import clsx from "clsx";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../Images/Nav/logo.png";
import "./Nav.css";
const Nav = () => {
  return (
    <div className={clsx("grid  m-0 l-0", styles.nav)}>
      {/*  overlay + closeBtn */}
      <input type="checkbox" hidden id="navMenu" />
      <label htmlFor="navMenu" id="overlay">
        <label className="navCloseBtn" htmlFor="navMenu">
          <i class="fa-solid fa-xmark"></i>
        </label>
      </label>

      <div id="sideMenu" className={clsx(styles.navMenu)}>
        {/* menu */}
        <div className={clsx(styles.sideMenuContainer)}>
          <ul className={clsx(styles.list)}>
            {/* trang chu */}
            <li className={clsx(styles.item)}>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            {/* gioi thieu */}
            <li className={clsx(styles.item)}>
              <Link to="/gioithieu">Giới thiệu</Link>
            </li>
            {/* chuyen phat nhanh */}
          
            {/* dich vu */}
            <li className={clsx(styles.item)}>
              <Link to="/dichvu">Dịch Vụ</Link>
            </li>
            {/*gui hang di my  */}
            <li className={clsx(styles.item)}>
              <Link to="/guihangdimy">Giử Hàng Đi Mỹ</Link>
            </li>
            {/* bang gia */}
            <li className={clsx(styles.item)}>
              <Link to="/">Bảng Giá 2022</Link>
            </li>
            {/* tracking */}
            <li className={clsx(styles.item)}>
              <Link to="/tracking">TRACKING</Link>
            </li>
            {/* lien he */}
            <li className={clsx(styles.item)}>
              <Link className={clsx(styles.links)} to="/contact">
                Liên Hệ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={clsx("row", styles.topNav)}>
        <div className={clsx("col c-4 m-4 l-4")}>
          <label htmlFor="navMenu">
            <i className={clsx("fa-solid fa-bars", styles.bars)}></i>
          </label>
        </div>
        <div className={clsx("col c-4 m-4 l-4", styles.logoContainer)}>
          <Link to="/">
            <img className={clsx(styles.logo)} src={Logo} alt="" />
          </Link>
        </div>
        <div className={clsx("col c-4 m-4 l-4", styles.bangGia)}>
          <div>
            <button className={clsx(styles.bangGiaBtn)}>
              <Link to="/banggia">BẢNG GIÁ</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
