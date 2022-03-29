import React from "react";
import styles from './LienHe.module.scss'
import clsx from "clsx";
// import styles from "./LienHe.module.scss";
const LienHe = () => {
  return (
    <div className={styles.lienHe}>
      {/* <div className={styles.heading}>Thong tin lien he</div> */}
        {/* <div className={styles.headingLine}>thong tin lien he</div> */}
      <h1 className={styles.headingLine}>Thông tin liên hệ</h1>
      <div className={styles.content}>
        <div className={styles.item}>
          <div className={styles.img}>
            <img
              src="https://anhdaoexpress.com/wp-content/uploads/2021/06/map-pin-2-fill-2.png"
              alt=""
            />
          </div>
          <div className={styles.title}>Địa Chỉ</div>
          <div className={styles.description}>
            21/38 Trường Sơn , Phường 4 , Quận Tân Bình
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <img
              src="https://anhdaoexpress.com/wp-content/uploads/2021/06/time-fill.png"
              alt=""
            />
          </div>
          <div className={styles.title}>GIỜ LÀM VIỆC</div>
          <div className={styles.description}>
            <p> Thứ 2 - Thứ 6: 8am – 6pm</p>
            <p>Thứ 7: 8:30am – 11:30am</p>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.img}>
            <img
              src="https://anhdaoexpress.com/wp-content/uploads/2021/06/phone-fill.png"
              alt=""
            />
          </div>
          <div className={styles.title}>PHONE</div>
          <div className={styles.description}>
            <p>
              <a href="tel:0987499146">0987 499 146</a> Mr Tuấn
            </p>
            {/* <p>Thứ 7:   8:30am – 11:30am</p>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
