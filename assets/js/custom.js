//====================================================================================

//    Template Name: Runaway - Personal Portfolio HTML Template
//    Version: 2.1.1
//    Author: themetrading
//    Email: themetrading@gmail.com
//    Developed By: themetrading
//    First Release: 08 February 2019
//    Author URL: www.themetrading.com

//=====================================================================================

//  01.   Preloader For Hide loader
//  02.   Scroll Top
//  03.   Navbar scrolling navbar Fixed
//  04.   Services Slider
//  05.   Team Slider
//  06.   Testimonial Slider
//  07.   Fact Counter
//  08.   LightBox / Fancybox
//  09.   Gallery With Filters List
//  10.   Youtube and Vimeo video popup control
//  11.   Contact Form Validation

//=====================================================================================

(function ($) {
  "use strict";

  var $body = $("body"),
  $window = $(window),
  $contact = $('#contact-form');

  let current_page = window.location.href;

  $body.scrollspy({
    target: ".navbar-collapse",
    offset: 20

  });

//=====================================================================================
//  01.   Preloader For Hide loader
//=====================================================================================

function handlePreloader() {
  if($('.preloader').length){
    $('.preloader').delay(500).fadeOut(500);
    $('body').removeClass('page-load');
  }
} 

$window.on('load', function() {
  handlePreloader();
});

//=====================================================================================
// 02.  Scroll Top
//======================================================================================

$(window).scroll(function(){ 
  if ($(this).scrollTop() > 500) { 
    $('#scroll').fadeIn(); 
  } else { 
    $('#scroll').fadeOut(); 
  } 
}); 
$('#scroll').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 1000); 
  return false; 
});

//====================================================================================
// 03.    Navbar scrolling navbar Fixed
//====================================================================================

$window.on("scroll",function () {

  var bodyScroll = $window.scrollTop(),
  navbar = $(".main_nav"),
  logo = $(".main_nav .navbar-brand> img");

  if(bodyScroll > 100){

    navbar.addClass("nav-scroll");
  }else{

    navbar.removeClass("nav-scroll");
  }
});

//=====================================================================================
//  04.   Services Slider
//=====================================================================================

$('.services_item').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 5000,
  nav: true,
  dots: false,
  navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
  responsive:{

    0:{
      items:1
    },
    600:{
      items:1
    },
    1024:{
      items:3
    },
    1200:{
      items:3
    }
  }

});

//=====================================================================================
//  05.   Team Slider
//=====================================================================================

$('.team_member').owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 5000,
  margin: 30,
  nav: true,
  dots: false,
  navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
  responsive:{

    0:{
      items:1
    },
    600:{
      items:1
    },
    1024:{
      items:3
    },
    1200:{
      items:3
    }
  }

});

//=====================================================================================
//  06.   Testimonial Slider
//=====================================================================================

$('.testimonial_item').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 0,
  nav: true,
  dots: false,
  navText: ['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
  responsive:{

    0:{
      items:1
    },
    600:{
      items:1
    },
    1024:{
      items:2
    },
    1200:{
      items:2
    }
  }

});

//=====================================================================================
// 07.    Fact Counter
//=====================================================================================

function factCounter() {
  if($('.fact-counter').length){
    $('.fact-counter .count.animated').each(function() {

      var $t = $(this),
      n = $t.find(".count-num").attr("data-stop"),
      r = parseInt($t.find(".count-num").attr("data-speed"), 10);

      if (!$t.hasClass("counted")) {
        $t.addClass("counted");
        $({
          countNum: $t.find(".count-text").text()
        }).animate({
          countNum: n
        }, {
          duration: r,
          easing: "linear",
          step: function() {
            $t.find(".count-num").text(Math.floor(this.countNum));
          },
          complete: function() {
            $t.find(".count-num").text(this.countNum);
          }
        });
      }

//set skill building height


var size = $(this).children('.progress-bar').attr('aria-valuenow');
$(this).children('.progress-bar').css('width', size+'%');

});
  }
}

if($('.wow').length){
  var wow = new WOW(
  {
boxClass:     'wow',      // animated element css class (default is wow)
animateClass: 'animated', // animation css class (default is animated)
offset:       0,          // distance to the element when triggering the animation (default is 0)
mobile:       true,       // trigger animations on mobile devices (default is true)
live:         true       // act on asynchronously loaded content (default is true)
}
);
  wow.init();
}

// When document is Scrollig, do

$(window).on('scroll', function() {
  factCounter();
});

//=====================================================================================
//  08.   LightBox / Fancybox
//=====================================================================================

$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "zoom-in-out",
  transitionEffect: "slide",
  transitionEffect: "slide",
});

//=====================================================================================
//  09.   Gallery With Filters List
//=====================================================================================

if($('.filter-list').length){
  $('.filter-list').mixItUp({});
}

//=====================================================================================
//  10.   Youtube and Vimeo video popup control
//=====================================================================================

jQuery(function(){
  jQuery("a.video-popup").YouTubePopUp();
//jQuery("a.video-popup").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
});

//=========================================================================================
//  11.   Contact Form Validation
//=========================================================================================

})(jQuery);

var deleteLog = false;
//  Pagepiling js
//=====================================================
$(document).ready(function() {
  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['home', 'about-us', 'services', 'packages', 'partners','tools','contact-us'],
    loopTop: true,
    loopBottom: true
  });
});
//  Sidebar Nav Menu js
//=====================================================
function openNav() {
  document.getElementById("mysidenav").style.width = "150px";
}
function closeNav() {
  document.getElementById("mysidenav").style.width = "0";
}

function find_term_value(term_key) {
  var res = "";
  $.ajax({
    url: '_controller_ajax.php',
    method: 'POST',
    data: {
      operation: 'find_term_value',
      term_key: term_key
    },
    async: false, 
    success: function (response) {
      res = response;
    }
  });
  return res;
}

function get_col2(table, column) {
  var res = "";
  $.ajax({
    url: '_controller_ajax.php',
    method: 'POST',
    data: {
      operation: 'get_col2',
      table: table,
      column: column
    },
    async: false, 
    success: function (response) {
      res = response;
    }
  });
  return res;
}

function check_validation(tool) {
  switch (tool) {
    case 'CACTI Graph':
      check_cacti_graph_validation();
      break;
    case 'Idea':
      check_idea_validation();
      break;
    case 'Suggession':
      check_suggession_validation();
      break;
    case 'CV Submission':
      check_cv_submission_validation();
      break;
  }
}

function check_suggession_validation() {
  var message = find_term_value('Required Message');
  $send_suggession_form = $("#send_suggession_form");
  if ($send_suggession_form.length) {
    $send_suggession_form.validate({
      rules: {
        suggession_full_name: {
          required: true
        },
        suggession_province: {
          required: true
        },
        suggession_email: {
          required: true,
          email: true
        },
        suggession_issue: {
          required: true
        }
      },
      
      messages: {
        suggession_full_name: message,
        suggession_province: message,
        suggession_email: message,
        suggession_issue: message
      },
      
      submitHandler: function (form) {
        $('#suggession_send').attr({
          'disabled': 'true',
          'value': '...'
        });

        var datastring = new FormData(document.getElementById("send_suggession_form"));
        var send_label = get_col2("suggession_items", "send_label");
        $.ajax({
          url:'_controller_ajax.php',
          method:'post',
          data:datastring,
          cache: false,
          contentType: false,
          processData: false,
          success: function (output) {
            
            if(output=="1"){
              $('#suggession_send').removeAttr('disabled').attr('value', send_label);
              $(".suggession_success").slideDown("slow");
              setTimeout(function () {
                $(".suggession_success").slideUp("slow");
              }, 5000);
              form.reset();
            }else{
              $('#suggession_send').removeAttr('disabled').attr('value', send_label);
              $(".suggession_error").slideDown("slow");
              setTimeout(function () {
                $(".suggession_error").slideUp("slow");
              }, 5000);
            }
          },
          error: function () {
            $('#suggession_send').removeAttr('disabled').attr('value', send_label);
            $(".suggession_error").slideDown("slow");
            setTimeout(function () {
              $(".suggession_error").slideUp("slow");
            }, 5000);
          }
        });
        return false; // required to block normal submit since you used ajax
      }
    });
  }
}

function check_idea_validation() {
  var message = find_term_value('Required Message');
  $send_idea_form = $("#send_idea_form");
  if ($send_idea_form.length) {
    $send_idea_form.validate({
      rules: {
        idea_full_name: {
          required: true
        },
        idea_province: {
          required: true
        },
        idea_phone: {
          required: true
        },
        idea_email: {
          required: true,
          email: true
        },
        idea_subject: {
          required: true
        },
        idea_attachment: {
          required: true
        },
        idea_summary: {
          required: true
        }
      },
  
      messages: {
        idea_full_name: message,
        idea_province: message,
        idea_phone: message,
        idea_email: message,
        idea_subject: message,
        idea_attachment: message,
        idea_summary: message
      },
  
      submitHandler: function (form) {
        $('#idea_send').attr({
          'disabled': 'true',
          'value': '...'
        });

        var datastring = new FormData(document.getElementById("send_idea_form"));
        var send_label = get_col2("idea_items", "send_label");
        $.ajax({
          url:'_controller_ajax.php',
          method:'post',
          data:datastring,
          cache: false,
          contentType: false,
          processData: false,
          success: function (output) {

            if(output=="1"){
              $('#idea_send').removeAttr('disabled').attr('value', send_label);
              $(".idea_success").slideDown("slow");
              setTimeout(function () {
                $(".idea_success").slideUp("slow");
              }, 5000);
              form.reset();
            }else{
              $('#idea_send').removeAttr('disabled').attr('value', send_label);
              $(".idea_error").slideDown("slow");
              setTimeout(function () {
                $(".idea_error").slideUp("slow");
              }, 5000);
            }
          },
          error: function () {
            $('#idea_send').removeAttr('disabled').attr('value', send_label);
            $(".idea_error").slideDown("slow");
            setTimeout(function () {
              $(".idea_error").slideUp("slow");
            }, 5000);
          }
        });
  
        
        return false; // required to block normal submit since you used ajax
      }
  
    });
  }
}



function check_cv_submission_validation() {
  var message = find_term_value('Required Message');
  $send_cv_form = $("#send_cv_form");
  if ($send_cv_form.length) {
    $send_cv_form.validate({
      rules: {
        cv_full_name: {
          required: true
        },
        cv_province: {
          required: true
        },
        cv_email: {
          required: true,
          email: true
        },
        cv_position: {
          required: true
        },
        cv_attachment: {
          required: true
        }
      },
      
      messages: {
        cv_full_name: message,
        cv_province: message,
        cv_email: message,
        cv_position: message,
        cv_attachment: message
      },
      
      submitHandler: function (form) {
        $('#cv_send').attr({
          'disabled': 'true',
          'value': '...'
        });

        var datastring = new FormData(document.getElementById("send_cv_form"));
        var send_label = get_col2("idea_items", "send_label");
        $.ajax({
          url:'_controller_ajax.php',
          method:'post',
          data:datastring,
          cache: false,
          contentType: false,
          processData: false,
          success: function (output) {
            if(output=="1"){
              $('#cv_send').removeAttr('disabled').attr('value', send_label);
              $(".cv_success").slideDown("slow");
              setTimeout(function () {
                $(".cv_success").slideUp("slow");
              }, 5000);
              form.reset();
            }else{

              $('#cv_send').removeAttr('disabled').attr('value', send_label);
              $(".cv_error").slideDown("slow");
              setTimeout(function () {
                $(".cv_error").slideUp("slow");
              }, 5000);
            }
          },
          error: function () {
            $('#cv_send').removeAttr('disabled').attr('value', send_label);
            $(".cv_error").slideDown("slow");
            setTimeout(function () {
              $(".cv_error").slideUp("slow");
            }, 5000);
          }
        });
        return false; // required to block normal submit since you used ajax
      }
    });
  }
}

//JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
var imageAddr = "http://cdn3.movie.af/test/11.jpg"; 
var downloadSize = 12405264; //bytes

function ShowProgressMessage(msg) {
  if (console) {
    if (typeof msg == "string") {
      console.log(msg);
    } else {
      for (var i = 0; i < msg.length; i++) {
        console.log(msg[i]);
      }
    }
  }
  
  var oProgress = document.getElementById("progress");
  if (oProgress) {
    var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
    oProgress.innerHTML = actualHTML;
  }
}

function InitiateSpeedDetection() {
  ShowProgressMessage("Testing internet speed, please wait...");
  document.querySelector(".loader").style.display = 'block';
  document.querySelector("#progress").style.display = 'block';
  document.querySelector("#check-speed").style.display = 'none';
  document.querySelector("#check-speed").value = 'Test again';
  window.setTimeout(MeasureConnectionSpeed, 1);
};    


function MeasureConnectionSpeed() {
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
    endTime = (new Date()).getTime();
    showResults();
  }
  
  download.onerror = function (err, msg) {
    ShowProgressMessage("Invalid image, or error downloading");
  }
  
  startTime = (new Date()).getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = ((speedBps / 1024) / 8).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);

    // Hide the loader when the download speed is determined
    document.querySelector(".loader").style.display = 'none';

    // Checking for try again button
    document.querySelector("#check-speed").style.display = 'block';
    // document.querySelector("#check-speed").addEventListener('click', try_again);

    // ShowProgressMessage([
    //   "Your connection speed is:", 
    //   speedBps + " bps", 
    //   speedKbps + " kbps", 
    //   speedMbps + " Mbps"
    // ]);

    ShowProgressMessage([
      "Your connection speed is:",
      speedKbps + " KBps"
    ]);
  }
}

function try_again() {
  const btn = document.querySelector("#check-speed");
  if (btn.value == 'Test again') {
    window.location.reload();
  }
}

function test_internet_speed() {
  $.ajax({
    url: '_controller_ajax.php',
    method: 'post',
    data: {
      operation:"speed_test"
    },
    async: false, 
    success: function (result) {
      console.log(result);
    }
  });
}

function load_package_item(reference_type, reference_id){
  if(reference_type=="province"){
    $("#provinces_id").val(reference_id);
  }else if(reference_type=="package_category"){
    $("#package_categories_id").val(reference_id);
  }
  var provinces_id = $("#provinces_id").val();
  var package_categories_id = $("#package_categories_id").val();
  $.ajax({
    url:'_controller_ajax.php',
    method:'post',
    data:{
      operation:"load_package_item", 
      provinces_id:provinces_id,
      package_categories_id:package_categories_id
    },
    success:function(result){
      $("#package_item_container").hide().html(result).fadeIn(1500);
    }
  });
}

function load_tool(tool){
  $.ajax({
    url:'_controller_ajax.php',
    method:'post',
    data:{
      operation:"load_tool", 
      tool:tool
    },
    success:function(result){
      $("#tool_container").hide().html(result).fadeIn(1500);
      check_validation(tool);
    }
  });

  if(tool=="CACTI Graph"){
    get_csrf_cacti();
  }
}

function change_language(languages_id){
  $.ajax({
    url:'_controller_ajax.php',
    method:'post',
    data:{
      operation:"change_language", 
      languages_id:languages_id
    },
    success:function(result){
      window.location.reload();
    }
  });
}

function get_csrf_cacti(){
  $.get('http://bw.uniontelecom.af/cacti/index.php', null, function(text){
    var csrf_cacti = ($(text).find('[name="__csrf_magic"]').val());
    csrf_cacti = csrf_cacti.split(";");
    csrf_cacti = csrf_cacti[0];
    $('[name="__csrf_magic"]').val(csrf_cacti);
      
  });
}


// get_csrf_cacti();
check_suggession_validation();

