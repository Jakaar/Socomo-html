//device체크
function deviceChk() {
	if(window.innerWidth > 1025 ) {
		$("body").addClass("pc");
		$("body").removeClass("mob");
	} else{
		$("body").addClass("mob");
		$("body").removeClass("pc");
	}
};

function pcNavi() {
	// pc GNB
	$(".pc .gnb_depth1 > li > a").on("mouseenter focusin", function(){
		$(".pc .gnb_bg").stop().slideDown(300);
		$(".pc .gnb_depth2").fadeIn(500);	
	});
	$(".pc #header").on("mouseleave focusout", function(){
		$(".pc .gnb_bg").stop().slideUp(300);
		$(".pc .gnb_depth2").fadeOut(100);
	});
};

function mobNavi() {
	// mo GNB
	$(".header_btn").click(function(){
		if ($(this).hasClass("open")){
			$(this).removeClass("open");
			TweenMax.to($("#gnb"), 0.4, {css:{left: "-100%"}});	
		} else {
			$(this).addClass("open");
			TweenMax.to($("#gnb"), 0.4, {css:{left: 0}});
		}
	});
}

$(document).ready(function(){
	deviceChk();
	pcNavi();
	mobNavi();	

	$(window).on('resize', function(){
		deviceChk();
		$(".gnb_depth2").attr("style", "");	
		if($(window).width() > 1025 ) {
			pcNavi();			
		} else if ($(window).width() <= 1025 ){

		}
	}).resize();

	// header search button
	$(".link_sch").on("click", function(){
		$(".head_sch_wp").stop().slideDown(200);
	});
	$(".sch_clo").on("click", function(){
		$(".head_sch_wp").stop().slideUp(100);
	});

	// 메인 비주얼 슬라이드
	$(function(){		
		var mainSwiper = new Swiper('.main_visual .swiper-container', {
			effect: "fade",
			slidesPerView: 1,
			spaceBetween: 0,			
			loop: true,
			speed:2000,	
			pagination: {
				el: ".main_visual .vs_page",
				clickable: true,
			},
			on: {
				init: function(){
					$('.vs_text_box .vs_text').removeClass('act');
					$('.vs_text_box .vs_text').eq(this.realIndex).addClass('act');
					$('.vs_bg_box .vs_bg').removeClass('act');
					$('.vs_bg_box .vs_bg').eq(this.realIndex).addClass('act');
				},
				slideChange: function (swiper) {
					$('.vs_text_box .vs_text').removeClass('act');
					$('.vs_text_box .vs_text').eq(this.realIndex).addClass('act');
					$('.vs_bg_box .vs_bg').removeClass('act');
					$('.vs_bg_box .vs_bg').eq(this.realIndex).addClass('act');
				},
			},			
			autoplay: {
				delay: 6000,
			}			
		});
	});

	// 메인 new item
	$(function(){		
		var new_itemSwiper = new Swiper('.main_new .swiper-container', {
			slidesPerView: 3,
			spaceBetween: 32,			
			loop: true,
			speed:1000,	
			navigation: {
				nextEl: ".n_item_next",
				prevEl: ".n_item_prev",
			},
			autoplay: {
				delay: 6000,
			},
			breakpoints: { 				
				1025: {
					slidesPerView: 2							
				},
				720: {			
					slidesPerView: 2,
					spaceBetween: 10		
				},
			}
		});
	});	

	// 메인 인트로
	$(function(){		
		var introSwiper = new Swiper('.intro_slide .swiper-container', {
			effect: "fade",
			slidesPerView: 1,
			spaceBetween: 0,	
			navigation: {
				nextEl: ".it_next",
				prevEl: ".it_prev",
			},
			pagination: {
				el: '.intro_nav',
				type: 'custom',
				renderCustom: function (swiper, current) {
					$('.intro_nav .it_nav_num').html("0" + current);					
				}
			},
			on: {
				init: function(){
					$('.it_slide_ttl .it_sd_tt').removeClass('act');
					$('.it_slide_ttl .it_sd_tt').eq(this.realIndex).addClass('act');
				},
				slideChange: function (swiper) {
					$('.it_slide_ttl .it_sd_tt').removeClass('act');
					$('.it_slide_ttl .it_sd_tt').eq(this.realIndex).addClass('act');
				},
			},
			loop: true,
			speed:1000,
			autoplay: {
				delay: 4000,
			}
		});
	});

	// 메인 인트로 텍스트
	$(function(){		
		var introTextSwiper = new Swiper('.text_slide .swiper-container', {		
			direction: "vertical",
			effect: "cube",
			cubeEffect: {
				shadow: false,
				slideShadows: false,
				//shadowOffset: 20,
				//shadowScale: 0.94,
			},
			slidesPerView: 1,
			spaceBetween: 0,					
			loop: true,
			speed:500,			
			autoplay: {
				delay: 2000,
			}
		});
	});

	// 메인 product 마우스 오버
	$(function(){		
		$(".grid_item a").on("mouseenter", function(){
			$(this).find(".caption").fadeIn(300);
		});		
		$(".grid_item a").on("mouseleave", function(){
			$(this).find(".caption").fadeOut(300);
		});			
	});
	
	// 메인 background images 마우스 오버
	$(function(){		
		$(".bg_cont ul li").on("mouseenter", function(){
			var $idx = $(this).index();	
			$(".bg_img .bg").eq($idx).addClass("on").siblings().removeClass("on");
		});		
		$(".bg_cont").on("mouseleave", function(){
			$(".bg_img .bg").eq(0).fadeIn(300);
		});			
	});
});

$(window).load(function(){
	// 메인 하단 카운트업
	$('.ex_dsc_bot .counter').counterUp({
		delay: 10,
		time: 1000
	});

	// AOS
	var myAOS = function() {
		AOS.init({
		   easing: 'ease-out-back',
		   duration: 1500
		});
	}
	myAOS();
});







