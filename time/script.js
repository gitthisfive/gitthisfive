$(document).ready(function() {
	"use strict";

//---------------控制navigation的显示字和时间----------------
$(function(){
  // changetimes();

  function thetimech(){
    var date1=new Date();  //开始时间

    var endLogTime = "2016-08-20 11:00:00"
    var date2 = new Date(Date.parse(endLogTime.replace(/-/g, "/")));  
    // var date2=new Date();    //结束时间
    var date3 ;
    if(date2>date1){
      date3 = date2.getTime()-date1.getTime()  //时间差的毫秒数
    }else{
      date3 = date1.getTime()-date2.getTime()  //时间差的毫秒数
    } 

    //计算出相差天数
    var days=Math.floor(date3/(24*3600*1000));
    //计算出小时数
    var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));
     
    //计算相差秒数
    var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);
     
  }
  // setInterval(thetimech, 1000); 
});

//----------------------------------------------------
//--------------------Pre-loader----------------------
//----------------------------------------------------

// makes sure the whole site is loaded
$(window).load(function() {
    // will first fade out the loading animation
    $(".preloader").fadeOut();
    //then background color will fade out slowly
    $("#faceoff").delay(200).fadeOut("slow");
});

//----------------------------------------------------
//--------------------Sticky nav----------------------
//----------------------------------------------------

$("#sticker").sticky({topSpacing:0});

//----------------------------------------------------
//-----------Appearence of navigation-----------------
//----------------------------------------------------

  $('.nav-block .nav, footer .nav').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 72 //Height of Navigation Bar
  });

//----------------------------------------------------
//--------------- For navigation----------------------
//----------------------------------------------------

$('.navbar-collapse ul li a').on( "click",function() {
    $('.navbar-toggle:visible').click();
});

//----------------------------------------------------
//--------------- SmoothSroll-------------------------
//----------------------------------------------------

var scrollAnimationTime = 1200,
   scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
   event.preventDefault();
   var target = this.hash;
   $('html, body').stop().animate({
       'scrollTop': $(target).offset().top
   }, scrollAnimationTime, scrollAnimation, function () {
       window.location.hash = target;
   });
});

//----------------------------------------------------
//------------Scroll to Next Section------------------
//----------------------------------------------------
  
  $('.next-arrow a').on( "click",function() {
    $('html,body').animate({scrollTop:$('#story').offset().top - 76}, 750);
 return false;
  });
   $('a[href="#contact"]').on( "click",function() {
    $('html,body').animate({scrollTop:$('#contact').offset().top - 76}, 750);
 return false;
  });
   $('a[href="#map"]').on( "click",function() {
    $('html,body').animate({scrollTop:$('#map').offset().top - 77}, 750);
 return false;
  });

//----------------------------------------------------
//--------------------Countdown-----------------------
//----------------------------------------------------

$("#count-down").TimeCircles(
   {   
     circle_bg_color: "#fd6e6e",
     use_background: true,
     bg_width: 1,
     fg_width: 0.03,
     time: {
          Days: { color: "#fefeee" },
          Hours: { color: "#fefeee" },
          Minutes: { color: "#fefeee" },
          Seconds: { color: "#fefeee" }
      }
   }
);


//add by lx 0724
$("#count-down1").TimeCircles(
   {   
     circle_bg_color: "#fd6e6e",
     use_background: true,
     bg_width: 1,
     fg_width: 0.03,
     time: {
          Days: { color: "#fefeee" },
          Hours: { color: "#fefeee" },
          Minutes: { color: "#fefeee" },
          Seconds: { color: "#fefeee" }
      }
   }
);
$("#count-down2").TimeCircles(
   {   
     circle_bg_color: "#fd6e6e",
     use_background: true,
     bg_width: 1,
     fg_width: 0.03,
     time: {
          Days: { color: "#fefeee" },
          Hours: { color: "#fefeee" },
          Minutes: { color: "#fefeee" },
          Seconds: { color: "#fefeee" }
      }
   }
);

$("#count-down3").TimeCircles(
   {   
     circle_bg_color: "#fd6e6e",
     use_background: true,
     bg_width: 1,
     fg_width: 0.03,
     time: {
          Days: { color: "#fefeee" },
          Hours: { color: "#fefeee" },
          Minutes: { color: "#fefeee" },
          Seconds: { color: "#fefeee" }
      }
   }
);

$("#count-down4").TimeCircles(
   {   
     circle_bg_color: "#fd6e6e",
     use_background: true,
     bg_width: 1,
     fg_width: 0.03,
     time: {
          Days: { color: "#fefeee" },
          Hours: { color: "#fefeee" },
          Minutes: { color: "#fefeee" },
          Seconds: { color: "#fefeee" }
      }
   }
);
//---------------------------------------------------
//---------------- Scroll to top --------------------
//---------------------------------------------------

$(window).scroll(function() {
   if ($(this).scrollTop() > 200) {
      $('#go-to-top').fadeIn('slow');
      } else {
      $('#go-to-top').fadeOut('slow');
    }
});

  
$('#go-to-top a').on( "click",function(){
  $("html,body").animate({ scrollTop: 0 }, 750);
  return false;
});

//---------------------------------------------------
//------------------- Massonary ---------------------
//---------------------------------------------------

	var container = document.querySelector('#photo-gallery');
	var msnry;
// initialize Masonry after all images have loaded
	imagesLoaded( container, function() {
	  msnry = new Masonry( container, {
	  // options
	  columnWidth: 0,
	  itemSelector: '.item',
	  "gutter": 30
	});
});

//---------------------------------------------------
//------------------- Placeholder -------------------
//---------------------------------------------------

$(function() {
    // Invoke the plugin
    $('input, textarea').placeholder();
});

//---------------------------------------------------
//------------------- Selectbox -------------------
//---------------------------------------------------

$(function () {
  $("#numberOfGuest").selectbox();
  $("#eventAttending").selectbox();
});

//---------------------------------------------------
//---------------- Magnific Image Popup--------------
//---------------------------------------------------

  $('.gallery-popup').magnificPopup({
        type:'image',
        closeBtnInside:true,
        // Delay in milliseconds before popup is removed
        removalDelay: 300,
    
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        //mainClass: 'mfp-fade',
        gallery: {
          enabled: true, // set to true to enable gallery
    
          preload: [0,2], // read about this option in next Lazy-loading section
    
          navigateByImgClick: true,
    
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
    
          closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',
    
          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          //tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
  });
//---------------------------------------------------------
//--------------- Animate and WOW Animation----------------
    var wow = new WOW(
        {
            //offset: 50,
            mobile: false
           // live: true
        }
    );
    wow.init();

	
  // --------------RSVP Form Ajax request-----------------------

    $('.contact_form').on('submit', function(event){
    event.preventDefault();

    // $this = $(this);

    var data = {
      name: $('#name').val(),
      numberOfGuest: $('#numberOfGuest').val(),
      eventAttending: $('#eventAttending').val(),
      // email: $('#contact_email').val(),
      // subject: $('#subject').val(),
      message: $('#message').val()
    };

    $.ajax({
      type: "POST",
      url: "email.php",
      data: data,
      success: function(msg){
	     $('.contact-success').fadeIn().delay(3000).fadeOut();
      }
    });
  });

/* =================================
===  IE10 ON WINDOWS 8 FIX      ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}
  
});