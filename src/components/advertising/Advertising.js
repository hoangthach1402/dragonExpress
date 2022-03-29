import React from 'react'
import styles from './Advertising.module.scss'
import clsx from 'clsx'
import './Advertising.css'
import Zalo from './Zalo/Zalo'
import Phone from './Phone/Phone'
const Advertising = () => {
  return (
    <div className={styles.advertising}>
    <Zalo />
    <Phone />
    </div>
  )
}

export default Advertising