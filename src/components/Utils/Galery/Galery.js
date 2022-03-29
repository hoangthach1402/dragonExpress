import React from 'react'
import styles from './Galery.module.scss'
import clsx from 'clsx'
import gal3 from '../../../Images/Galery/gal3.jpg'
import gal4 from '../../../Images/Galery/gal4.jpg'
import gal5 from '../../../Images/Galery/gal5.jpg'
import gal6 from '../../../Images/Galery/gal6.jpg'
import gal7 from '../../../Images/Galery/gal7.jpg'
import gal8 from '../../../Images/Galery/gal8.jpg'
import gal9 from '../../../Images/Galery/gal9.jpg'
import gal10 from '../../../Images/Galery/gal10.jpg'
import gal11 from '../../../Images/Galery/gal11.jpg'
const Galery = () => {
  return (
    <div>
   <div class={styles.container}>

<h1 class={styles.heading}>Team chúng tôi</h1>

<div class={styles.gallery}>

    <div class={styles.galleryItem}>
        <img class={styles.galleryImage} src={gal3} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
    </div>

    <div class={styles.galleryItem}>
        <img class={styles.galleryImage} src={gal4} alt="sunset behind San Francisco city skyline" />
    </div>

    <div class={styles.galleryItem}>
        <img class={styles.galleryImage} src={gal5} alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
    </div>

    <div class={styles.galleryItem}>
        <img class={styles.galleryImage} src={gal6} alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
    </div>

    <div class={styles.galleryItem}>
        <img class={styles.galleryImage} src={gal7} alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
    </div>

    <div class={styles.galleryItem}>
        <img class={styles.galleryImage} src={gal8} alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" />
    </div>

</div>

</div>
    </div>
  )
}

export default Galery