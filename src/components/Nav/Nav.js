import React from "react";
import clsx from "clsx";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";
import Logo from "../../Images/Nav/LOGODRAGON.png";
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
            <li className={clsx(styles.item)}>
              <input
                hidden
                type="checkbox"
                id="chuyenphatnhanh"
                name="exampleAccording"
              />

              <Link to="/chuyenphatnhanh">Chuyển Phát Nhanh</Link>
              <label htmlFor="chuyenphatnhanh" className="angleIcon"></label>
              <div className="subMenuParent">
                <div className="subMenuParent__item">
                  <Link to="/chuyenphatnhanhtphcm">
                    Chuyển phát nhanh DHL Tại TPHCM
                  </Link>{" "}
                </div>
                <div className="subMenuChild">
                  <div className="subMenuChild__item">
                    <Link to="/chuyenphatnhanhtaiquan1">
                      Chuyển Phát Nhanh DHL Tại Quận 1
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-2/">
                      Chuyển Phát Nhanh DHL Tại Quận 2
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-3/">
                      Chuyển Phát Nhanh DHL Tại Quận 3
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-4/">
                      Chuyển Phát Nhanh DHL Tại Quận 4
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-5/">
                      Chuyển Phát Nhanh DHL Tại Quận 5
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-6/">
                      Chuyển Phát Nhanh DHL Tại Quận 6
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-7/">
                      Chuyển Phát Nhanh DHL Tại Quận 7
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-8/">
                      Chuyển Phát Nhanh DHL Tại Quận 8
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-9/">
                      Chuyển Phát Nhanh DHL Tại Quận 9
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-10/">
                      Chuyển Phát Nhanh DHL Tại Quận 10
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-11/">
                      Chuyển Phát Nhanh DHL Tại Quận 11
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/chuyen-phat-nhanh-dhl-tai-quan-12/">
                      Chuyển Phát Nhanh DHL Tại Quận 12
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-tan-binh/">
                      Chuyển Phát Nhanh DHL tại Quận Tân Bình
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-binh-thanh/">
                      Chuyển Phát Nhanh DHL Tại Quận Bình Thạnh
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-go-vap/">
                      Chuyển Phát Nhanh DHL Tại Quận Gò Vấp
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-thu-duc/">
                      Chuyển Phát Nhanh DHL Tại Quận Thủ Đức
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-tan-phu/">
                      Chuyển Phát Nhanh DHL Tại Quận Tân Phú
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-binh-tan/">
                      Chuyển Phát Nhanh DHL Tại Quận Bình Tân
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-binh-chanh/">
                      Chuyển Phát Nhanh DHL Tại Quận Bình Chánh
                    </Link>
                  </div>
                </div>
                <div className="subMenuParent__item">
                  <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/">
                    Chuyển phát nhanh DHL tại Hà Nội
                  </Link>{" "}
                </div>
                <div className="subMenuChild">
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                      Chuyển Phát Nhanh DHL Tại Quận Tây Hồ
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/"></Link>Chuyển Phát Nhanh DHL Tại Quận Tây Hồ
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Quận Cầu Giấy</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Đống Đa</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Ba Đình</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Long Biên</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Từ Liêm</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Hoàn Kiếm</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Hoàng Mai </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Thanh Xuân</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Hai Bà Trưng</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Quận Hà Đông</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Huyện Gia Lâm</Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">
                      Chuyển Phát Nhanh DHL Tại Huyện Thanh Trì
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/">Chuyển Phát Nhanh DHL Tại Huyện Đông Anh</Link>
                  </div>
                </div>
                <div className="subMenuParent__item">
                  <Link to="/">Chuyển phát nhanh DHL tại Đồng Nai</Link>
                </div>
                <div className="subMenuChild">
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                      Chuyển Phát Nhanh DHL Tại TP Biên Hòa
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                      Chuyển Phát Nhanh DHL Tại Trảng Bom
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                      Chuyển Phát Nhanh DHL Tại Tam Phước
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                      Chuyển Phát Nhanh DHL Tại Long Thành
                    </Link>
                  </div>
                </div>

                <div className="subMenuParent__item">
                  <Link to="/">Chuyển Phát Nhanh DHL Tại Đà Nẵng</Link>
                </div>
                <div className="subMenuChild">
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                      Chuyển Phát Nhanh DHL Tại TP Đà Nẵng
                    </Link>
                  </div>
                  <div className="subMenuChild__item">
                    <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                      Chuyển Phát Nhanh DHL Tại Quận Hải Châu
                    </Link>
                  </div>
                  <div className="subMenuChild">
                    <div className="subMenuChild__item">
                      <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                        Chuyển Phát Nhanh DHL Tại Quận Liên Chiểu
                      </Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                        Chuyển Phát Nhanh DHL Tại Thanh Khê
                      </Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                        Chuyển Phát Nhanh DHL Tại Cẩm Lệ
                      </Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                        Chuyển Phát Nhanh DHL Tại Sơn Trà
                      </Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-ha-noi/chuyen-phat-nhanh-dhl-tai-quan-tay-ho/">
                        Chuyển Phát Nhanh DHL Tại Ngũ Hành Sơn
                      </Link>
                    </div>
                  </div>

                  {/* binh duong */}
                  <div className="subMenuParent">
                    <Link to="">
                      Chuyển Phát Nhanh DHL Đi Mỹ Tại Bình Dương{" "}
                    </Link>
                  </div>
                  <div className="subMenuChild">
                    <div className="subMenuChild__item">
                      <Link to="/">Chuyển Phát Nhanh DHL Tại Thuận An</Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/">Chuyển Phát Nhanh DHL Tại Bến Cát</Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/">Chuyển Phát Nhanh DHL Tại Tân Uyên </Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/">Chuyển Phát Nhanh DHL Tại Dĩ An</Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/">
                        Chuyển Phát Nhanh DHL Tại TP Thủ Dầu Một
                      </Link>
                    </div>
                  </div>

                  {/* chi nhanh DHL */}
                  <div className="subMenuParent">
                    <Link to="/">CÁC CHI NHÁNH CHÍNH CỦA DHL</Link>
                  </div>
                  <div className="subMenuChild">
                    <div className="subMenuChild__item">
                      <Link to="/">Chuyển Phát Nhanh DHL Tại Long An</Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/"> </Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/">Chuyển Phát Nhanh DHL Tại Cần Thơ </Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/">Chuyển Phát Nhanh DHL Tại Tây Ninh</Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/">Chuyển Phát Nhanh DHL Tại Hải Phòng </Link>
                    </div>
                    <div className="subMenuChild__item">
                      <Link to="/"> Chuyển Phát Nhanh DHL Tại Vũng Tàu</Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            {/* dich vu */}
            <li className={clsx(styles.item)}>
              <input
                hidden
                type="checkbox"
                id="dichvu"
                name="exampleAccording"
              />
              <Link to="/dichvu">Dịch Vụ</Link>
              <label htmlFor="dichvu" className="angleIcon"></label>
              <div className="subMenuParent">
                <div className="subMenuParent__item">
                  <Link to="/">CHUYỂN PHÁT NHANH ĐI CHÂU Á</Link>
                </div>
                <div className="subMenuChild">
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Hồng Kong</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Thái Lan</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Singapore</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Malaysia</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Indonesia</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Myanmar</Link></div>
                <div className="subMenuChild__item"><Link to='/'>
Chuyển Phát Nhanh DHL đi Philippines</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Brunei</Link></div>
                <div className="subMenuChild__item"><Link to='/'>
Chuyển Phát Nhanh DHL đi New Zealand</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Úc(Australia)</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Nhật Bản(Japan)</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Hàn Quốc(Korea)</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Đài Loan(Taiwan)</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Trung Quốc(China) </Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Ấn Độ(India)</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Lào(Laos)</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Campuchia(Cambodia)</Link></div>
                <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Mông Cổ(Mônglia)</Link></div>
                </div>
              <div className="subMenuParent__item">
                <Link to="/">CHUYỂN PHÁT NHANH ĐI CHÂU ÂU </Link>
              </div>
              <div className="subMenuChild">
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Anh(United Kingdom)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Pháp (France)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>
Chuyển Phát Nhanh DHL đi Đức(Germany)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Ý(Italia)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Bỉ(Belgium)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Na Uy(Norway)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Thụy Điển(Sweden)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Đan Mạch(Denmark)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Hà Lan(Netherlands)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Ba Lan(Poland)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Phần Lan(Finland)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Nga(Russian)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Bồ Đào Nha(Portugal)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Tây Ban Nha(Spain)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Cộng Hòa Séc(Czech Republic)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Thổ Nhĩ Kỳ(Turkey)</Link></div>
              <div className="subMenuChild__item"> <Link to='/'>Chuyển Phát Nhanh DHL đi Áo(Australia)
</Link></div>
              
              </div>
              <div className="subMenuParent__item">
                <Link to="/">CHUYỂN PHÁT NHANH ĐI CHÂU MỸ </Link>
              </div>
              <div className="subMenuChild">
              <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Mỹ</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Canada</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Chuyển Phát Nhanh DHL đi Mexico</Link></div>
              
              </div>
              <div className="subMenuParent__item">
                <Link to="/">CHUYỂN PHÁT NHANH ĐI CHÂU PHI</Link>
              </div>
              <div className="subMenuChild">
              <div className="subMenuChild__item"><Link to='/aicap'>Chuyển Phát Nhanh DHL đi Ai Cập(Egypt)</Link></div>
              <div className="subMenuChild__item"><Link to='/angola'>Chuyển Phát Nhanh DHL đi Angola</Link></div>
              <div className="subMenuChild__item"><Link to='/nigeria'>Chuyển Phát Nhanh DHL đi Nigeria</Link></div>
              <div className="subMenuChild__item"><Link to='/algeria'>Chuyển Phát Nhanh DHL đi Algeria</Link></div>
              <div className="subMenuChild__item"><Link to='/cameroon'>Chuyển Phát Nhanh DHL đi Cameroon</Link></div>
              <div className="subMenuChild__item"><Link to='/somalia'>Chuyển Phát Nhanh DHL đi Somalia</Link></div>
              <div className="subMenuChild__item"><Link to='/zambia'>Chuyển Phát Nhanh DHL đi Zambia</Link></div>
              <div className="subMenuChild__item"><Link to='/moroco'>Chuyển Phát Nhanh DHL đi Morocco</Link></div>
              <div className="subMenuChild__item"><Link to='/ghana'>Chuyển Phát Nhanh DHL đi Ghana</Link></div>
              <div className="subMenuChild__item"><Link to='/congo'>Chuyển Phát Nhanh DHL đi Congo</Link></div>
              <div className="subMenuChild__item"><Link to='/sudan'>Chuyển Phát Nhanh DHL đi Sudan</Link></div>
              <div className="subMenuChild__item"><Link to='/uganda'>Chuyển Phát Nhanh DHL đi Uganda</Link></div>
              <div className="subMenuChild__item"><Link to='/tanzania'>Chuyển Phát Nhanh DHL đi Tanzania</Link></div>
              <div className="subMenuChild__item"><Link to='/africa'>Chuyển Phát Nhanh DHL đi South Africa</Link></div>
              </div>
              </div>
            </li>
            {/*gui hang di my  */}
            <li className={clsx(styles.item)}>
            <input
                hidden
                type="checkbox"
                id="guihangdimy"
                name="exampleAccording"
              />
              <Link to="/guihangdimy">Giử Hàng Đi Mỹ</Link>
              <label htmlFor="guihangdimy" className="angleIcon"></label>
              <div className="subMenuParent">
              <div className="subMenuParent__item"><Link to='/'>
GỬI HÀNG ĐI MỸ TAỊ TPHCM</Link></div>
              <div className="subMenuChild">
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 1</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 2</Link></div>
              <div className="subMenuChild__item"><Link to='/'>
Gửi hàng đi Mỹ tại Quận 3</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 4 </Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 5</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 6</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 7</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 8</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 9</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 10</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 11</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận 12</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận Tân Bình</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận Bình Tân</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận Bình Thạnh</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận Gò Vấp</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận Phú Nhuận</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Quận Bình Chánh</Link></div>
              <div className="subMenuChild__item"><Link to='/'>[Bảng Giá] Gửi hàng đi Mỹ giá rẻ nhất tại Hà Nội năm 2022</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Đà Nẵng</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Cần Thơ</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Hải Phòng</Link></div>
              <div className="subMenuChild__item"><Link to='/'>Gửi hàng đi Mỹ tại Nha Trang</Link></div>
              </div>
              </div>
            </li>
            {/* bang gia */}
            <li className={clsx(styles.item)}>
            <input
                hidden
                type="checkbox"
                id="dichvuCheck"
                name="exampleAccording"
              /> 
              <Link to="/banggia">Bảng Giá</Link>
              <label htmlFor="dichvuCheck" className="angleIcon"></label>
            <div className="subMenuParent">
            <div className="subMenuParent__item">
            <Link to='/'>
Bảng Giá</Link>
            <div className="subMenuChild">
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ </Link></div>
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ Hồ Chí Minh</Link></div>
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ Hà Nội</Link></div>
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ Đà Nẵng</Link></div>
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ Bình Dương</Link></div>
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ Đồng Nai</Link></div>
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ Hải Phòng</Link></div>
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ Nha Trang</Link></div>
            <div className="subMenuChild__item"><Link to='/'>Giá Gửi Hàng Đi Mỹ Cần Thơ</Link></div>
          
            </div>
            </div>
            </div>
            
            
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
        <div className={clsx("col c-4 m-4 l-4",styles.logoContainer)}>
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
  
      

