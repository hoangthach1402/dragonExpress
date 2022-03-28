import React from 'react'
import clsx from 'clsx'
import styles from './Banner.module.scss'
import banner from '../../Images/banner.png'
const Banner = () => {
  return (
    <div className={styles.banner}>
    <img className={styles.banner_img} src={banner} alt="" />
    </div>
  )
}

export default Banner