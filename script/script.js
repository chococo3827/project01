// visual 슬라이드
$(function(){
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      effect: "fade",
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay:{
        delay: 5000
      },
      on:{
        reachEnd: function(){
            swiper.mousewheel.disable();
        }
      }
    });
    window.addEventListener('wheel', function(event){
        if(event.deltaY < 0){
            swiper.mousewheel.enable();
        }
        else if(event.deltaY > 0){}
    })
})

// guide info 스크롤시 나타내기
$(window).on('scroll resize', function(){
    let scrollPos = 0;
    scrollPos = $(document).scrollTop();
    console.log(scrollPos);
    // guideInfo_1();
    // guideList_1();

    if(window.innerWidth > 1400){
        guideInfo_1();
        guideList_1();
    }
    if(window.innerWidth <= 1400){
        guideInfo_2();
        guideList_2();
    }

    function guideInfo_1(){
        if(scrollPos > 2100){
            $('.guide-info .text').addClass('on');
        }
        else{
            $('.guide-info .text').removeClass('on');
        }
        if(scrollPos > 3800){
            $('.guide-info .text').removeClass('on');
        }
    }
    function guideList_1(){
        $('section.guide .inner .guide-list li a').removeClass('on');
        if(scrollPos > 2100){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(0) a').addClass('on');
        }
        if(scrollPos > 2500){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(1) a').addClass('on');
        }
        if(scrollPos > 2900){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(2) a').addClass('on');
        }
        if(scrollPos > 3300){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(3) a').addClass('on');
        }
        if(scrollPos > 3700){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(4) a').addClass('on');
        }
    }
    // 너비 1024px 이상 일때
    function guideInfo_2(){
        if(scrollPos > 1800){
            $('.guide-info .text').addClass('on');
        }
        else{
            $('.guide-info .text').removeClass('on');
        }
        if(scrollPos > 3030){
            $('.guide-info .text').removeClass('on');
        }
    }
    function guideList_2(){
        $('section.guide .inner .guide-list li a').removeClass('on');
        if(scrollPos > 1800){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(0) a').addClass('on');
        }
        if(scrollPos > 2100){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(1) a').addClass('on');
        }
        if(scrollPos > 2400){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(2) a').addClass('on');
        }
        if(scrollPos > 2700){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(3) a').addClass('on');
        }
        if(scrollPos > 3000){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(4) a').addClass('on');
        }
    }
})

// section event hover
$(function(){
    $('section.event .inner .event-list li a').hover(
        function(){
            $(this).children('.text').addClass('on');
        },
        function(){
            $(this).children('.text').removeClass('on');
        }
    )
})

// section map 슬라이드
$(function(){
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay:{
            delay: 3000
        }
    });
})

// 메뉴바 나타내기
$(function(){
    $('header .inner .gnbBtn label').on('click', function(){
        $('nav.gnb').toggleClass('on');
    })
    $('.contents').on('click', function(){
        $('nav.gnb').removeClass('on');
    })
})

// top 버튼 나타내기, 아래로 스크롤 시 header 축소
$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('#top').addClass('on');
        $('header').addClass('on');
        $('nav.gnb').addClass('active');
    }
    else{
        $('#top').removeClass('on');
        $('header').removeClass('on');
        $('nav.gnb').removeClass('active');
    }
})

// scrolla 이벤트
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false
    })
})
// 텍스트 애니메이션
$(function(){
    Splitting();
})