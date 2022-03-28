import React from 'react'
import clsx from 'clsx'
import styles from './Banggia.module.scss'
import BanggiaImg from '../../../Images/Banggia.jpg'
const Banggia = () => {
  return (
    <div className={styles.banggia}>
      <h1 className={styles.title}>Bảng giá gửi hàng đi MỸ, ÚC, CANADA 2022 .</h1>    
      <div className={styles.banggiacontainer}>
      <img src={BanggiaImg} alt="" />
      </div>
      <div className={styles.note}>
        <h2>Hotline hỗ trợ: 
        <br />
        0987 499 146 (Viber, Zalo, WhatsApp)</h2>
      
      </div>
    </div>
  )
}

export default Banggia