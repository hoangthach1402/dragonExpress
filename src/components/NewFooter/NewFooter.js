import React from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import styles from './NewFooter.module.scss'

const NewFooter = () => {
  return (
    <div className={styles.newFooter}>
    <div className={styles.item}>
    <div className={styles.title}>
    THÔNG TIN LIÊN HÊ
    </div>
    <div className={styles.description}>
    <h3 className={styles.heading}>VẬN TẢI QUỐC TẾ DRAGON247EXPRESS</h3>
   <p><strong>Địa chỉ</strong> 86/12 Phổ Quang, Phường 2, Tân Bình, HCM</p> 
    <p><strong>Hotline :</strong><a href="tel:0987499146"> 0987 499 146 </a> </p>
    <p><strong>Liên Hệ :</strong><a href="tel:0987499146">0987 499 146 (Mr. Tuấn Nguyễn)</a>  </p>
    <p><strong>Email: </strong><a href="tuannguyen@gmail.com.vn">tuannguyen@gmail.com</a></p>
    <p><strong>Website</strong>: <a href="https://dragon247express.com/">dragon247express.com</a>  </p>
    </div>
    </div>
    
    <div className={styles.item}>
    <div className={styles.title}>
    FANPAGE
    </div> 
    <div className={styles.description}>
    {/* <iframe  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fhttps://www.facebook.com/profile.php?id=100013768668216&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=false&amp;appId" width="500" height="300" frameborder="0" scrolling="no" allowfullscreen="true"></iframe> */}
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDragonExpresssVN%2F&amp;tabs=timeline&amp;width=350&amp;height=250&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=1991374794496279" width="350" height="250"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    </div>
    </div>
    <div className={styles.item}>
    <div className={styles.title}>
    GOOGLE MAPS
    </div> 
    <div className={styles.description}>
    <iframe tabindex="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1099.749343851327!2d106.66314437625923!3d10.806628615776075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac9dd15b02b90a4e!2sDragon%20Express!5e0!3m2!1sen!2s!4v1604992881127!5m2!1sen!2s" width="100%" height="350" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false"></iframe>
    </div>
    </div>
    
    <div className={styles.item}>
    <div className={styles.title}>
    Chính Sách
    </div> 
    <div className={styles.description}>
    
    <h3>Chính Sách Giao Nhận</h3>
    <p><Link to="/chinhsachdenbu">Chính Sách Đền Bù</Link></p>
    <p><Link to='/chinhsachthanhtoan'>Chính Sách Thanh Toán</Link></p>
    </div>
    </div>
   
    </div>
  )
}

export default NewFooter