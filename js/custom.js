(function(e){"use strict";(function(e){e(function(){jQuery("#loopedSlider").prepend("<a href='#' class='previous'>&lt;</a><a href='#' class='next'>&gt;</a>");jQuery("#loopedSlider").loopedSlider({autoHeight:500})})});var t=e(window).width();var n=e(window).height();e(".banner").css({width:t,height:n-"60"});e(document).ready(function(t){var n=0;e(document).scroll(function(){var t=e(".technical").height()-e(window).scrollTop();if(t<-300){if(n==0){e(".chart").easyPieChart({easing:"easeOutBounce",onStep:function(t,n,r){e(this.el).find(".percent").text(Math.round(r))}})}n++}})});e(function(){e("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=e(this.hash);t=t.length?t:e("[name="+this.hash.slice(1)+"]");if(t.length){e("html,body").animate({scrollTop:t.offset().top-60},1e3);return false}}})});e(window).load(function(){var t=window.chart=e(".chart").data("easyPieChart");e(".js_update").on("click",function(){t.update(Math.random()*100)})});e(window).load(function(){function r(){if(t.width()<t.height()){n.removeClass().addClass("bgheight")}else{n.removeClass().addClass("bgwidth")}}var t=e(window),n=e(".bannerImg");t.resize(r).trigger("resize")})})(jQuery)