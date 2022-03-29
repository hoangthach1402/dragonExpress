import React from 'react'
import styles from './Phone.module.scss'
const Phone = () => {
  return (
    <div>
            <div class={styles.fx}>
  <div class={styles.zoo}>
    <div class={styles.call}>
    <div className={styles.img}>
    <a href="tel:0987499146 ">
    <img src="https://dragonexpress.com.vn/wp-content/plugins/button-contact-vr/img/phone.png" alt="" />
    </a>
    </div>
    </div>
    {/* <div class={styles.textt}><a href="tel:0899326019">Call Now</a></div> */}
  </div>
</div>
    </div>
  )
}

export default Phone