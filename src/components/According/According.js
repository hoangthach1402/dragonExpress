import React,{useEffect} from 'react'
import clsx from 'clsx'
import styles from './According.module.scss'
// import second from 'first'
import './According.css'
import acc2 from '../../Images/according/acc2.jpg'    
import acc3 from '../../Images/according/acc3.jpg'    
import acc4 from '../../Images/according/acc4.jpg'    
import acc5 from '../../Images/according/acc5.jpg'    
import acc6 from '../../Images/according/acc6.jpg'    
const According = () => {
// import second from '../../Images/according/acc2.jpg'    
    
 useEffect(()=>{
 console.log('load')
 const buttons = document.querySelectorAll('[data-carousel-button]')
console.log(buttons);
buttons.forEach(button=>{
    button.addEventListener('click',()=>{
    console.log('click')
    let offset = button.dataset.carouselButton ==='next'? 1:-1; 
    
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]') ;
    
    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset ;
    
    if(newIndex<0) newIndex = slides.children.length -1 ;
    if(newIndex >= slides.children.length) newIndex =0 ; 
    
    slides.children[newIndex].dataset.active =true;
    delete activeSlide.dataset.active ;
})
})
 },[])   

    
    
return (
  
           <div className={clsx('carousel',styles.according)} data-carousel>
      <button class="carousel-button prev" data-carousel-button="prev">&#8656;</button>
      <button class="carousel-button next" data-carousel-button="next">&#8658;</button>
      <ul data-slides>
        <li class="slide" data-active>
          <img src={acc2} alt="Nature Image #1" />
        </li>
        <li class="slide">
          <img src={acc3} alt="Nature Image #2" />
        </li>
        <li class="slide">
          <img src={acc4} alt="Nature Image #4" />
        </li>
        <li class="slide">
          <img src={acc5} alt="Nature Image #5" />
        </li>
        <li class="slide">
          <img src={acc6} alt="Nature Image #6" />
        </li>
      </ul>
    </div>
  
     
        
    
   
  )
}

export default According