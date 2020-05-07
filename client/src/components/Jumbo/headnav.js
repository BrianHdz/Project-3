import React from "react";
import "./style.css"
import {Link} from "react-router-dom"


    
// $(window).scroll(function() {

//     if ($(window).scrollTop() > 300) {
//         $('.main_nav').addClass('sticky');
//     } else {
//         $('.main_nav').removeClass('sticky');
//     }
// });

// // Mobile Navigation
// $('.mobile-toggle').click(function() {
//     if ($('.main_nav').hasClass('open-nav')) {
//         $('.main_nav').removeClass('open-nav');
//     } else {
//         $('.main_nav').addClass('open-nav');
//     }
// });

// $('.main_nav li a').click(function() {
//     if ($('.main_nav').hasClass('open-nav')) {
//         $('.navigation').removeClass('open-nav');
//         $('.main_nav').removeClass('open-nav');
//     }
// });


// jQuery(document).ready(function($) {

//     $('.smoothscroll').on('click',function (e) {
//          e.preventDefault();
 
//          var target = this.hash,
//          $target = $(target);
 
//          $('html, body').stop().animate({
//              'scrollTop': $target.offset().top
//          }, 800, 'swing', function () {
//              window.location.hash = target;
//          });
//      });
   
//  });

//  TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);

export default function Jumbo() {


    return (
        
        <div>
<header id="header">
<div className="main_nav">
  <div className="container">
    <div className="mobile-toggle"> <span></span> <span></span> <span></span> </div>
    <nav>
      <ul>
        <li><Link className="smoothscroll" to="/homePage">Home</Link></li>
        <li><a className="smoothscroll" href="#about">About</a></li>
        <li><a className="smoothscroll" href="#skills">Services</a></li>
        <li><a className="smoothscroll" href="#portfolio">Work</a></li>
        <li><a className="smoothscroll" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</div>
<div className="title">
  <div><span className="typcn typcn-heart-outline icon heading"></span></div>
  <div className="smallsep heading"></div>
  <h1 className="heading"> Societé</h1>
  <h2 className="heading">Your go-to spot for all your needs</h2>
  <a className="smoothscroll" href="#about">
  <div className="mouse">
    <div className="wheel"></div>
  </div>
  </a> </div>
<a className="smoothscroll" href="about">
<div className="scroll-down"></div>
</a> </header>


<p >hello</p>

</div>
 


    )
}