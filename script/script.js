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
    guideInfo();
    guideList();

    function guideInfo(){
        if(scrollPos > 2150){
            $('.guide-info .text').addClass('on');
        }
        else{
            $('.guide-info .text').removeClass('on');
        }
        if(scrollPos > 3800){
            $('.guide-info .text').removeClass('on');
        }
    }

    function guideList(){
        $('section.guide .inner .guide-list li a').removeClass('on');
        if(scrollPos > 2150){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(0) a').addClass('on');
        }
        if(scrollPos > 2550){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(1) a').addClass('on');
        }
        if(scrollPos > 2950){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(2) a').addClass('on');
        }
        if(scrollPos > 3350){
            $('section.guide .inner .guide-list li a').removeClass('on');
            $('section.guide .inner .guide-list li:eq(3) a').addClass('on');
        }
        if(scrollPos > 3750){
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