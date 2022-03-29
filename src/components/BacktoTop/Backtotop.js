import React,{useEffect} from 'react'
import $ from 'jquery'
import clsx from 'clsx'
// import second from 'first'
import './Backtotop.css'

const Backtotop = () => {
  useEffect(()=>{
    var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

    
    console.log('load')
  },[])
  return (
    <div >
   <a id="button"></a>
    </div>
  )
}

export default Backtotop