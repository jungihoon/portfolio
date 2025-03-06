// JavaScript Document



  var timeonoff; //타이머 처리  홍길동 정보
  var imageCount = $('.gallery ul li').size(); //이미지 총개수 5
  var cnt = 1; //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
  var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때

  $('.btn1').css('background', '#fff'); //첫번째 불켜
  $('.btn1').css('width', '30px'); // 버튼의 너비 증가

  $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
  $('.gallery .link1 span').delay(1500).animate({ top: 170, opacity: 1 }, 'slow');

  function gallery_change() {
    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
    $('.gallery .link' + cnt).fadeIn('slow'); //자기 자신만 이미지가 보인다

    // for(var i=1;i<=imageCount;i++){
    //   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
    //   $('.btn'+i).css('width','16');
    // }
    $('.mbutton').css('background', '#333'); //버튼 모두불꺼
    $('.mbutton').css('width', '16px');
    $('.btn' + cnt).css('background', '#fff'); //자신 버튼만 불켜
    $('.btn' + cnt).css('width', '30px');

    $('.gallery li span').css('top', 210).css('opacity', 0);
    $('.gallery .link' + cnt)
      .find('span')
      .delay(1000)
      .animate({ top: 170, opacity: 1 }, 'slow');

  }

  gallery_change();

  if (cnt == imageCount) cnt = 0; //카운트 초기화

  timeonoff = setInterval(gallery_change, 4000); //타이머의 부활!!!

  if (onoff == false) {
    //중지상태냐??
    onoff = true; //동작~~
    $(".ps").html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
  }


//stop/play 버튼 클릭시 타이머 동작/중지
$(".ps").click(function () {
  if (onoff == true) {
    // 타이머가 동작 중이냐??
    clearInterval(timeonoff); //살인마 고용 stop버튼 클릭시
    $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
    onoff = false;
  } else {
    // false 타이머가 중지 상태냐??
    timeonoff = setInterval(gallery_change, 4000); //play버튼 클릭시  부활
    $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    onoff = true;
  }
});

//왼쪽/오른쪽 버튼 처리
$(".visual .btn").click(function () {
  clearInterval(timeonoff); //살인마

  if ($(this).is(".btnRight")) {
    // 오른쪽 버튼 클릭
    if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(5)라면 초기화 0
    //if(cnt==imageCount+1)cnt=1;
    cnt++; //카운트 1씩증가
  } else if ($(this).is(".btnLeft")) {
    //왼쪽 버튼 클릭
    if (cnt == 1) cnt = imageCount + 1; // 1->6  최초..
    if (cnt == 0) cnt = imageCount;
    cnt--; //카운트 감소
  }

  $(".gallery li").hide(); //모든 이미지를 보이지 않게.
  $(".gallery .link" + cnt).fadeIn("slow"); //자신만 이미지가 보인다..


  $('.mbutton').click(function (event) {
    //각각의 버튼 클릭시
    var $target = $(event.target); //클릭한 버튼 $target == $(this)
    clearInterval(timeonoff); //타이머 중지

    if ($target.is('.btn1')) {
      //첫번째 버튼 클릭??
      cnt = 1; //클릭한 해당 카운트를 담아놓는다
    } else if ($target.is('.btn2')) {
      //두번째 버튼 클릭??
      cnt = 2;
    } else if ($target.is('.btn3')) {
      cnt = 3;
    } else if ($target.is('.btn4')) {
      cnt = 4;
    } else if ($target.is('.btn5')) {
      cnt = 5;
    }

    gallery_change();

    if (cnt == imageCount) cnt = 0; //카운트 초기화

    timeonoff = setInterval(gallery_change, 4000); //타이머의 부활!!!

    if (onoff == false) {
      //중지상태냐??
      onoff = true; //동작~~
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });

  //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function () {
    if (onoff == true) {
      // 타이머가 동작 중이냐??
      clearInterval(timeonoff); //살인마 고용 stop버튼 클릭시
      $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
      onoff = false;
    } else {
      // false 타이머가 중지 상태냐??
      timeonoff = setInterval(gallery_change, 4000); //play버튼 클릭시  부활
      $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      onoff = true;
    }
  });

  //왼쪽/오른쪽 버튼 처리
  $('.visual .btn').click(function () {
    clearInterval(timeonoff); //살인마

    if ($(this).is('.btnRight')) {
      // 오른쪽 버튼 클릭
      if (cnt == imageCount) cnt = 0; //카운트가 마지막 번호(5)라면 초기화 0
      //if(cnt==imageCount+1)cnt=1;
      cnt++; //카운트 1씩증가
    } else if ($(this).is('.btnLeft')) {
      //왼쪽 버튼 클릭
      if (cnt == 1) cnt = imageCount + 1; // 1->6  최초..
      if (cnt == 0) cnt = imageCount;
      cnt--; //카운트 감소
    }

    // for(var i=1;i<=imageCount;i++){
    //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
    // }
    $('.gallery li').hide(); //모든 이미지를 보이지 않게.
    $('.gallery .link' + cnt).fadeIn('slow'); //자신만 이미지가 보인다..

    $('.mbutton').css('background', '#333'); //버튼 모두불꺼
    $('.mbutton').css('width', '16');
    $('.btn' + cnt).css('background', '#fff'); //자신 버튼만 불켜
    $('.btn' + cnt).css('width', '30px');

    $('.gallery li span').css('top', 210).css('opacity', 0);
    $('.gallery .link' + cnt)
      .find('span')
      .delay(1000)
      .animate({ top: 170, opacity: 1 }, 'slow');

    // if($(this).is('.btnRight')){
    //   if(cnt==imageCount)cnt=0;
    // }else if($(this).is('.btnLeft')){
    //   if(cnt==1)cnt=imageCount+1;
    // }

    timeonoff = setInterval(gallery_change, 4000); //부활
    if (onoff == false) {
      onoff = true;
      $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
    }
  });
// =======
//   $(".mbutton").css("background", "#333"); //버튼 모두불꺼
//   $(".mbutton").css("width", "16");
//   $(".btn" + cnt).css("background", "#fff"); //자신 버튼만 불켜
//   $(".btn" + cnt).css("width", "30px");

//   $(".gallery li span").css("top", 210).css("opacity", 0);
//   $(".gallery .link" + cnt)
//     .find("span")
//     .delay(1000)
//     .animate({ top: 170, opacity: 1 }, "slow");

//   timeonoff = setInterval(moveg, 4000); //부활
//   if (onoff == false) {
//     onoff = true;
//     $(".ps").html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
//   }
// >>>>>>> d105e52f5c9844ac3c5890a069737a5f02d0c950
});

// // swiper

// console.log(progressCircle);
window.addEventListener('DOMContentLoaded', function () {
  const progressCircle = document.querySelector('#mainVisual .autoplay-progress svg');
  const progressContent = document.querySelector('#mainVisual .autoplay-progress span');
  var mainSwiper = new Swiper('.main_slide', {
    loop: true,
    speed: 1200,
    parallax: true,
    slideActiveClass: 'on',
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
    pagination: {
      el: '#mainVisual .pager',
      type: 'fraction',
    },
    navigation: {
      nextEl: '#mainVisual .next',
      prevEl: '#mainVisual .prev',
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty('--progress', 1 - progress);
      },
    },
  });
  $('#mainVisual .swiper-pause').click(function () {
    mainSwiper.autoplay.stop();
  });
  $('#mainVisual .swiper-play').click(function () {
    mainSwiper.autoplay.start();
  });
  $(function () {
    $('#mainVisual .play').click(function () {
      $(this).toggleClass('on');
    });
  });
});

//  사업소개
const origin = 450; //li의 원래 너비값

const min_width = 310; ////작아졌을때 사이즈

const max_width = 730; //li에 마우스 엔터 되었을때

$(() => {
  const $businessItems = $('.business_box .business_content li');
  const $businessContainer = $('.business_box .business_content');

  $businessContainer.on('mouseenter', 'li', function () {
    $businessItems.removeClass('active inactive');
    $(this).addClass('active');
    $businessItems.not(this).addClass('inactive');
    console.log('mouseenter on li:', $(this).index() + 1);
  });

  $businessContainer.on('mouseleave', function () {
    $businessItems.removeClass('active inactive');
    console.log('mouseleave from all li');
  });
});

//          기술개발


// document.addEventListener("DOMContentLoaded", () => {
//   // 메뉴 항목과 아이템 섹션의 각 div 선택
//   const menus = document.querySelectorAll(".skill_link li a");
//   const items = document.querySelectorAll(".items .item");
//   const texts = document.querySelectorAll(".tit_items .tit_item");

//   //처음 화면ㅇㅔ 보이는거
//   items[0].classList.add("on");
//   texts[0].classList.add("on");
//   menus[0].classList.add("active");

//   //menus를 누르면  items, texts가 바뀌게

//   // for (index = 0; index <  menus.length; index++) {
//   //   var menu = menus[index];
//   //}

//   menus.forEach((menu, index) => {
//     //=>  ==  function(){
//     menu.addEventListener("click", () => {
//       //모든 아이템들 활성화 제거

//       items.forEach((item) => {
//         item.classList.remove("on");
//       });

//       texts.forEach((text) => {
//         text.classList.remove("on");
//       });

//       menus.forEach((menu) => {
//         menu.classList.remove("active");
//       });

//       //클릭한 메뉴 내용 동작
//       items[index].classList.add("on");
//       texts[index].classList.add("on");
//       menu.classList.add("active");
//     });
//   });

//   $(document).ready(function () {
//     /*숫자 자동입력*/

//     var memberCountConTxt = 40; //출력하고 싶은 최종값

//     $({ val: 0 }).animate(
//       { val: memberCountConTxt },
//       {
//         duration: 2000,
//         step: function () {
//           var number = Math.floor(this.val);
//           $(".count1").text(number);
//         },
//         complete: function () {
//           var number = Math.floor(this.val);
//           $(".count1").text(number);
//         },
//       }
//     );
//   });
// });

document.addEventListener('DOMContentLoaded', () => {

var memberCountConTxt = 40; //출력하고 싶은 최종값
function cnt_per() {
  $({ val: 0 }).animate(
    { val: memberCountConTxt },
    {
      duration: 2000,
      step: function () {
        var number = Math.floor(this.val);
        $(".count1").text(number);
      },
      complete: function () {
        var number = Math.floor(this.val);
        $(".count1").text(number);
      },
    }
  );
}
cnt_per();

document.addEventListener("DOMContentLoaded", () => {
  //문서가 로드 되고 코드 실행


  // 메뉴 항목과 아이템 섹션의 각 div 선택
  const menus = document.querySelectorAll('.skill_link li a');
  const items = document.querySelectorAll('.items .item');
  const texts = document.querySelectorAll('.tit_items .tit_item');

  // 각 아이템의 최종 숫자 값 설정
  const finalValues = [40, 0, 0]; // 각 아이템의 최종 값 설정

  // 처음 화면에 보이는 항목 설정
  items[0].classList.add('on');
  texts[0].classList.add('on');
  menus[0].classList.add('active');


  // 숫자 애니메이션 함수
  const animateNumber = (target, finalValue) => {
    const duration = 1500; // 1.5초
    const steps = 60; // 총 애니메이션 단계
    const stepTime = duration / steps; // 각 단계당 시간(ms)
    const increment = finalValue / steps; // 각 단계당 증가 값
    let currentValue = 0;

  //


    const interval = setInterval(() => {
      currentValue += increment;

      if (currentValue >= finalValue) {
        currentValue = finalValue; // 값이 초과하지 않도록 고정
        clearInterval(interval); // 애니메이션 종료
      }

      target.textContent = Math.floor(currentValue); // 화면에 업데이트
    }, stepTime);
  };

  // 메뉴 클릭 이벤트 설정
  menus.forEach((menu, index) => {

    menu.addEventListener('click', () => {
      // 모든 아이템들 활성화 제거
      items.forEach((item) => item.classList.remove('on'));
      texts.forEach((text) => text.classList.remove('on'));
      menus.forEach((menu) => menu.classList.remove('active'));

      // 클릭한 메뉴 내용 활성화
      items[index].classList.add('on');
      texts[index].classList.add('on');
      menu.classList.add('active');

      // 숫자 애니메이션 실행 (클릭한 아이템 내 count1 요소 대상)
      const countElement = items[index].querySelector('.count1');
      if (countElement) {
        animateNumber(countElement, finalValues[index]);
      }
    });
  });

  // 초기 숫자 애니메이션 실행
  const initialCountElement = items[0].querySelector('.count1');
  if (initialCountElement) {
    animateNumber(initialCountElement, finalValues[0]);
  }

    menu.addEventListener("click", () => {
      //
      //모든 아이템들 활성화 제거

      items.forEach((item) => {
        item.classList.remove("on");
      });


      items.forEach((item) => item.classList.remove("on"));

      texts.forEach((text) => text.classList.remove("on"));

      menus.forEach((menu) => menu.classList.remove("active"));

      //클릭한 메뉴 내용 동작
      items[index].classList.add("on");
      texts[index].classList.add("on");
      menu.classList.add("active");

      cnt_per();
    });
  });
});

//공지사항

var swiper2 = new Swiper(".swiper2", {
  slidesPerView: "auto", //단수
  spaceBetween: 26.66, //단사이 여백

  pagination: {
    //페이지 네이션
    el: ".spagination",
  },
});
