import React from "react";
import { Link } from "react-router-dom";
import "./NavPc.css";
import clsx from "clsx";
import logo from '../../Images/Nav/logo.png'
import styles from "./NavPc.module.scss";
const NavPc = () => {
  return (
    <div className={styles.navPc}>
      <div className={clsx(styles.container, "c-0 l-12 m-12")}>
        {/* top header */}
        <div className={clsx("grid wide",styles.wide)}>
          <div className="row">
            <div className={clsx("col l-6 m-6", styles.left)}>
              <div className={clsx(styles.envelopContain)}>
                <i class="fa-solid fa-envelope"></i>
                <span>Contact</span>
              </div>
              <div className={clsx(styles.times)}>
                <i class="fa-solid fa-clock"></i>
                <span>GIỜ LÀM VIỆC 8H-18H</span>
              </div>
            </div>
            <div className={clsx("col l-6 m-6", styles.right)}>
              <a href="https://www.facebook.com/DragonExpresssVN">
              
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            
              <Link to="/">
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link to="/">
                <i class="fa-solid fa-envelope"></i>
              </Link>
              <Link to="/">
                <i class="fa-brands fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
        {/* headermaster */}
       <div className={clsx(styles.containerHeaderMaster,'c-0 l-12 m-12')}>
        <div className={clsx('grid wide',styles.wide)}>
        <div className={clsx('row')}>
        <div className={clsx(styles.left,'col m-2 l-2')}>
        <div>
        <Link to="/">
        
        <img src={logo} alt="" />
        </Link>
        </div>
        </div>
        <div className={clsx(styles.right,'col m-10 l-10')}>
         <ul>
             <li>
                 <Link to="/">TRANG CHỦ </Link>
             </li>
            
             <li>
             <Link to="/gioithieu">GIỚI THIỆU </Link>
            
             </li>
             <li>
                 <Link to="/dichvu">DỊCH VỤ</Link>
             </li>
           
             <li>
                 <Link to="/banggia">BẢNG GIÁ 2022</Link>
             </li>
             <li>
                 <Link to="/tracking">TRACKING </Link>
             </li>
             <li>
                 <Link to="/contact">LIÊN HỆ</Link>
             </li>
             <li>
             <i className={clsx('fa-solid fa-magnifying-glass',styles.searchIcon)}></i>
             </li>
        
         </ul>
        </div>
        
        </div>
        </div>
       </div> 
    </div>
  );
};

export default NavPc;
               
                
              
                

               
               
                
                
               
                 
                
