import React from 'react'
import clsx from 'clsx';
import styles from './LienHe.module.scss'
const LienHe = () => {
  return (
    <div className={styles.lienHe}>
    <div className="heading">Thong tin lien he</div>
    <div className="content">
    <div className="item">
    <div className={styles.img}>
    <img src="https://anhdaoexpress.com/wp-content/uploads/2021/06/map-pin-2-fill-2.png" alt="" />
    </div>
    <div className={styles.title}>dia chi</div>
    <div className="description">
    
21/38 Trường Sơn , Phường 4 , Quận Tân Bình 
    </div>
    </div>
    </div>
    </div>
  )
}

export default LienHe