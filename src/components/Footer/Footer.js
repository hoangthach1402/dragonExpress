import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
const Footer = () => {
  return (
    <div className={clsx(styles.footer)}>
      <div className={styles.wrapperTop}>
        <div className="grid wide">
          <div className={clsx(styles.footerTop)}>
            <div className={styles.list}>
              <h3>Gửi Hàng ĐI Mỹ Khu Vực</h3>
              <div class={styles.divided}></div>
              <p>
                {" "}
                ▸&nbsp;<Link to="/">Gửi hàng đi Mỹ</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Gui hàng đi Mỹ tại Hà Nội</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Gừi hàng đi Mỹ tại Đà Nẵng</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Gừi hàng đi Mỹ tại Hải Phòng</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Gừi hàng đi Mỹ tại Nha Trang</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Gừi hàng đi Mỹ tại Cần Thơ</Link>
              </p>
            </div>
            <div className={styles.list}>
              <h3>Bảng Giá Gửi Hàng Đi Mỹ</h3>
              <div class={styles.divided}></div>

              <p>
                ▸&nbsp;<Link to="/">Bảng giá gửi hàng </Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/"> Bảng giá gửi hàng đi Mỹ tại TPHCM </Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Bảng giá gửi hàng đi Mỹ tại Hà Nội </Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Bảng giá gửi hàng đi Mỹ tại Đà Nẵng </Link>
              </p>
              <p>
                ▸&nbsp;
                <Link to="/">Bảng giá gửi hàng đi Mỹ tại Hải Phòng </Link>
              </p>
              <p>
                ▸&nbsp;
                <Link to="/">Bảng giá gửi hàng đi Mỹ tại Nha Trang </Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Bảng giá gửi hàng đi Mỹ tại Cần Thơ </Link>
              </p>
            </div>

            <div className={styles.list}>
              <h3>CHUYỂN PHÁT NHANH DHL</h3>
              <div class={styles.divided}></div>

              <p>
                ▸&nbsp;<Link to="/">Chuyển phát nhanh DHL</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Chuyển phát nhanh DHL TPHCM</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Chuyển phát nhanh DHL Hà Nội</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Chuyển phát nhanh DHL Đà Nẵng</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Chuyển phát nhanh DHL Hải Phòng</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Chuyển phát nhanh DHL Nha Trang</Link>
              </p>
              <p>
                ▸&nbsp;<Link to="/">Chuyển phát nhanh DHL Cần Thơ</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.wrapperBottom}>
        <div className="grid wide">
          <div className={styles.footerBottom}>
            <div className={styles.list}>
              <span className={styles.title}>THÔNG TIN LIÊN HỆ</span>
              <div class={styles.divided}></div>

              <h3>DRAGON EXPRESS VIỆT NAM:</h3>
              <p>
                <strong>1.&nbsp;HCM:</strong> 21/38 Trường Sơn, P.4 , Q. Tân
                Bình, Hồ Chí Minh ( Ngay Sân Bay - TSN) <br />
                <strong>Điện thoại và zalo:</strong>{" "}
                <strong>&nbsp;0987 499 146&nbsp;</strong>
              </p>
              <p>
                <strong>2. HÀ NỘI: </strong>35 Vũ Trọng Phụng, Thanh Xuân, Hà
                Nội
                <br />
                <strong>Điện thoại và zalo:</strong>{" "}
                <strong>08 7799 7797 - 09 7937 7937</strong>
              </p>
              <p>
                <strong>3.&nbsp;ĐÀ NẴNG:&nbsp;</strong>132 Nguyễn Đức Trung,
                Quận Thanh Khê, Đà Nẵng
                <br />
                <strong>Điện thoại và zalo:</strong>{" "}
                <strong>08 7799 7797 - 09 7937 7937</strong>
              </p>
              <p>
                <strong>4. HẢI PHÒNG:&nbsp;</strong>173 Hoàng Minh Thảo, Lê
                Chân, Hải Phòng
                <br />
                <strong>Điện thoại và zalo:</strong>{" "}
                <strong>08 7799 7797 - 09 7937 7937</strong>
              </p>
              <p>
                <strong>5. NHA TRANG:&nbsp;</strong>663 Lê Hồng Phong, Phước
                Hải, Nha Trang
                <br />
                <strong>Điện thoại và zalo:</strong>{" "}
                <strong>08 7799 7797 - 09 7937 7937</strong>
              </p>
              <p>
                <strong>6. CẦN THƠ:&nbsp;</strong>148 Cách Mạng Tháng Tám, Ninh
                Kiều, Cần Thơ
                <br />
                <strong>Điện thoại và zalo:</strong>{" "}
                <strong>08 7799 7797 - 09 7937 7937</strong>
              </p>
            </div>

            <div className={styles.list}>
              <span className={styles.title}>CHỈ ĐƯỜNG</span>
              <div class={styles.divided}></div>
              <p>
                <iframe
                  tabindex="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.749343851327!2d106.66314437625923!3d10.806628615776075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac9dd15b02b90a4e!2sDragon%20Express!5e0!3m2!1sen!2s!4v1604992881127!5m2!1sen!2s"
                  width="100%"
                  height="350"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                  aria-hidden="false"
                ></iframe>
              </p>
              <p>
                <span>
                  <strong>NGÂN HÀNG HỢP TÁC:</strong>
                </span>
              </p>
              <p>
                <img
                  src="https://dragonexpress.com.vn/wp-content/uploads/2021/04/thanh-toan1-1.png"
                  alt="thanh-toan1-1"
                />
              </p>
              <p>
                <span>
                  <strong>LIÊN KẾT FACEBOOK - DRAGON EXPRESS:</strong>
                </span>
              </p>
              <p>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fguihangdimytaihcm%2F&amp;tabs=timeline&amp;width=350&amp;height=250&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=1991374794496279"
                  width="350"
                  height="250"
                  scrolling="no"
                  frameborder="0"
                  allowfullscreen="true"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </p>
            </div>
            <div className={styles.list}>
              <span className={styles.title}>KẾT NỐI VỚI CHÚNG TÔI</span>
              <div class={styles.divided}></div>
              <strong>
                <span className={styles.hotline}>
                  Hotline : 0987 499 146 (Mr.Tuan){" "}
                </span>
              </strong>
              <p>
                <span>
                  <a
                    title="Chuyển phát nhanh DHL Quận Tân Bình"
                    href="https://dragonexpress.com.vn/dhl-quan-tan-binh/"
                  >
                    Chuyển phát nhanh DHL Quận Tân Bình
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Bình Thạnh"
                    href="https://dragonexpress.com.vn/dhl-tai-quan-binh-thanh-tphcm/"
                  >
                    DHL Quận Bình Thạnh
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Gò Vấp"
                    href="https://dragonexpress.com.vn/tong-dai-dhl-tai-quan-go-vap/"
                  >
                    DHL Quận Gò Vấp
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Phú Nhuận"
                    href="https://dragonexpress.com.vn/dhl-quan-phu-nhuan/"
                  >
                    DHL Quận Phú Nhuận
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Thủ Đức"
                    href="https://dragonexpress.com.vn/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-thu-duc/"
                  >
                    DHL Quận Thủ Đức
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Bình Tân"
                    href="https://dragonexpress.com.vn/dhl-tai-quan-binh-tan/"
                  >
                    DHL Quận Bình Tân
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Bình Chánh"
                    href="https://dragonexpress.com.vn/dhl-quan-binh-chanh/"
                  >
                    DHL Quận Bình Chánh
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Tân Phú"
                    href="https://dragonexpress.com.vn/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-tan-phu/"
                  >
                    DHL Quận Tân Phú
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Tân Phú"
                    href="https://dragonexpress.com.vn/dhl-viet-nam/chuyen-phat-nhanh-dhl-tai-tphcm/dhl-quan-tan-phu/"
                  >
                    DHL Quận Tân Phú
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Hóc Môn"
                    href="https://dragonexpress.com.vn/dhl-tai-quan-hoc-mon/"
                  >
                    DHL Quận Hóc Môn
                  </a>
                  ,{" "}
                  <a
                    title="DHL Củ Chi"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-huyen-cu-chi/"
                  >
                    DHL Củ Chi
                  </a>
                  ,{" "}
                  <a
                    title="DHL Nhà Bè"
                    href="https://dragonexpress.com.vn/dhl-tai-quan-nha-be/"
                  >
                    DHL Nhà Bè
                  </a>
                  .
                </span>
              </p>
              <p>
                <span>
                  <a
                    title="Chuyển phát nhanh DHL Quận 1"
                    href="https://dragonexpress.com.vn/dhl-quan-1/"
                  >
                    Chuyển phát nhanh DHL Quận 1
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 2"
                    href="https://dragonexpress.com.vn/dhl-quan-2/"
                  >
                    DHL Quận 2
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 3"
                    href="https://dragonexpress.com.vn/dhl-quan-3/"
                  >
                    DHL Quận 3
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 4"
                    href="https://dragonexpress.com.vn/dhl-quan-4/"
                  >
                    DHL Quận 4
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 5"
                    href="https://dragonexpress.com.vn/dhl-quan-5/"
                  >
                    DHL Quận 5
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 6"
                    href="https://dragonexpress.com.vn/dhl-tai-quan-6-2/"
                  >
                    DHL Quận 6
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 7"
                    href="https://dragonexpress.com.vn/dhl-tai-quan-7/"
                  >
                    DHL Quận 7
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 8"
                    href="https://dragonexpress.com.vn/dhl-quan-8/"
                  >
                    DHL Quận 8
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 9"
                    href="https://dragonexpress.com.vn/dhl-quan-9/"
                  >
                    DHL Quận 9
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 10"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-10/"
                  >
                    DHL Quận 10
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 11"
                    href="https://dragonexpress.com.vn/dhl-quan-11/"
                  >
                    DHL Quận 11
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận 12"
                    href="https://dragonexpress.com.vn/tong-dai-dhl-tai-quan-12/"
                  >
                    DHL Quận 12
                  </a>{" "}
                  .
                </span>
              </p>
              <p>
                <span>
                  <a
                    title="Chuyển phát nhanh DHL Quận Thanh Khê"
                    href="https://dragonexpress.com.vn/dhl-quan-thanh-khe-da-nang/"
                  >
                    Chuyển phát nhanh DHL Quận Thanh Khê
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Liên Chiểu"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-lien-chieu/"
                  >
                    DHL Quận Liên Chiểu
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Hải Châu"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-hai-chau/"
                  >
                    DHL Quận Hải Châu
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Sơn Trà"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-son-tra/"
                  >
                    DHL Quận Sơn Trà
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Ngũ Hành Sơn"
                    href="https://dragonexpress.com.vn/dhl-quan-ngu-hanh-son/"
                  >
                    DHL Quận Ngũ Hành Sơn
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Cẩm Lệ"
                    href="https://dragonexpress.com.vn/dhl-quan-cam-le/"
                  >
                    DHL Quận Cẩm Lệ
                  </a>
                  .
                </span>
              </p>
              <p>
                <span>
                  <a
                    title="Chuyển phát nhanh DHL Quận Thanh Xuân"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-thanh-xuan-a240-html/"
                  >
                    Chuyển phát nhanh DHL Quận Thanh Xuân
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Đống Đa"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-dong-da-a244-html/"
                  >
                    DHL Quận Đống Đa
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Cầu Giấy"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-cau-giay-a241-html/"
                  >
                    DHL Quận Cầu Giấy
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Hoàn Kiếm"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-hoan-kiem-a243-html/"
                  >
                    DHL Quận Hoàn Kiếm
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Tây Hồ"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-tay-ho-a242-html/"
                  >
                    DHL Quận Tây Hồ
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Hoàng Mai"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-hoang-mai-a249-html/"
                  >
                    DHL Quận Hoàng Mai
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Long Biên"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-o-quan-long-bien/"
                  >
                    DHL Quận Long Biên
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Ba Đình"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-ba-dinh/"
                  >
                    DHL Quận Ba Đình
                  </a>
                  ,{" "}
                  <a
                    title="DHL Quận Hai Bà Trưng"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-quan-hai-ba-trung-a247-html/"
                  >
                    DHL Quận Hai Bà Trưng
                  </a>
                  .
                </span>
              </p>
              <p>
                <span>
                  <a
                    title="Chuyển phát nhanh DHL Hà Nội"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-ha-noi/"
                  >
                    Chuyển phát nhanh DHL Hà Nội
                  </a>
                  ,{" "}
                  <a
                    title="Chuyển phát nhanh DHL Nha Trang"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-nha-trang/"
                  >
                    DHL Nha Trang
                  </a>
                  ,{" "}
                  <a
                    title="Chuyển phát nhanh DHL Đà Nẵng"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-da-nang-a159-html/"
                  >
                    DHL Đà Nẵng
                  </a>
                  ,{" "}
                  <a
                    title="Chuyển phát nhanh DHL Cần Thơ"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-can-tho-a276-html/"
                  >
                    DHL Cần Thơ
                  </a>
                  ,{" "}
                  <a
                    title="Chuyển phát nhanh DHL Đồng Nai"
                    href="https://dragonexpress.com.vn/van-phong-dhl-tai-dong-nai-dia-chi-dhl-dong-nai-a169-html/"
                  >
                    DHL Đồng Nai
                  </a>
                  ,{" "}
                  <a
                    title="Chuyển phát nhanh DHL Bình Dương"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-tai-binh-duong/"
                  >
                    DHL Bình Dương
                  </a>
                  ,{" "}
                  <a
                    title="Chuyển phát nhanh DHL Vũng Tàu"
                    href="https://dragonexpress.com.vn/chuyen-phat-nhanh-dhl-vung-tau-a135-html/"
                  >
                    DHL Vũng Tàu
                  </a>
                  .
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
