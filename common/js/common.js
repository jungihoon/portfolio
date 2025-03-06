//전체 페이지 공통 js

//스크롤애미네이션 aos

//글로벌 네비게이션(GNB)
$(document).ready(function () {
  var smh = $("#mainVisual").height(); // 비주얼 이미지의 높이
  var on_off = false; // mouseenter 상태 확인용 변수

  // 공통 스타일을 위한 fixed 클래스 추가
  function applyFixedStyle() {
    $("#headerArea").addClass("fixed");
  }
  // 기본 스타일 복원
  function removeFixedStyle() {
    $("#headerArea").removeClass("fixed");
  }
  // 마우스 엔터/리브 이벤트 처리
  $("#headerArea").mouseenter(function () {
    applyFixedStyle();
    on_off = true;
  });
  $("#headerArea").mouseleave(function () {
    var scroll = $(window).scrollTop();
    if (scroll < smh - 100) {
      // 비주얼 이미지 영역 안이면 기본 스타일 적용
      removeFixedStyle();
    }
    on_off = false;
  });
  // 스크롤 이벤트 처리
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > smh - 100) {
      // 비주얼 이미지 높이를 넘으면 fixed 스타일 적용
      applyFixedStyle();
    } else if (!on_off) {
      // 기본 스타일 복원
      removeFixedStyle();
    }
  });

  // 1depth 효과
  // $('ul.dropdownmenu li.menu').hover(
  //   function () {
  //     $('.depth1', this).css('color', 'red');
  //   },
  //   function () {
  //     $('.depth1', this).css('color', '#333');
  //   }
  // );

  // 2depth 열기/닫기
  // $('ul.dropdownmenu').hover(
  //   function () {
  //     $('ul.dropdownmenu li.menu ul').fadeIn('normal').stop();
  //     $('#headerArea').animate({ height: 100 }, 'fast').clearQueue();
  //   },
  //   function () {
  //     $('ul.dropdownmenu li.menu ul').hide();
  //     $('#headerArea').animate({ height: 100 }, 'fast').clearQueue();
  //   }
  // );

  // 2depth 열기/닫기
  $(".dropdownmenu").hover(
    function () {
      $("#headerArea").addClass("active");
      $(this).removeClass("is-hide").addClass("is-show");
    },
    function () {
      $("#headerArea").removeClass("active");
      $(this).removeClass("is-show").addClass("is-hide");
    }
  );
  // tab 처리
  // $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
  //   $('ul.dropdownmenu li.menu ul').slideDown('normal');
  //   $('#headerArea').animate({ height: 200 }, 'fast').clearQueue();
  // });
  // $('ul.dropdownmenu li.m6 li:last')
  //   .find('a')
  //   .on('blur', function () {
  //     $('ul.dropdownmenu li.menu ul').slideUp('fast');
  //     $('#headerArea').animate({ height: 50 }, 'normal').clearQueue();
  //   });
});

//패밀리사이트 이동
$(document).ready(function () {
  $(".select .arrow").on("click", function (e) {
    e.preventDefault(); // 🔥 새로고침 방지

    let list = $(".select .aList");

    if (list.is(":visible")) {
      list.fadeOut("fast");
      $(this).children("span").html('<i class="fa-solid fa-chevron-up"></i>');
    } else {
      list.fadeIn("slow");
      $(this).children("span").html('<i class="fa-solid fa-chevron-down"></i>');
    }
  });

  // tab키 처리
  $(".select .arrow").on("focus", function () {
    $(".select .aList").fadeIn("slow");
  });

  $(".select .aList li:last a").on("keydown", function (e) {
    if (e.key === "Tab") {
      $(".select .aList").fadeOut("fast");
    }
  });

  // 바깥 클릭 시 닫기
  $(document).on("click", function (e) {
    if (!$(".select").has(e.target).length) {
      $(".select .aList").fadeOut("fast");
    }
  });
});

//TOP으로 이동

$(document).ready(function () {
  $(".top_move").hide();

  $(window).on("scroll", function () {
    //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리

    //$(".text").text(scroll);

    if (scroll > 500) {
      //300이상의 거리가 발생되면
      $(".top_move").fadeIn("slow"); //top보여라~~~~
    } else {
      $(".top_move").fadeOut("fast"); //top안보여라~~~~
    }
  });

  $(".top_move").click(function (e) {
    e.preventDefault();
    //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({ scrollTop: 0 }, 1000);
  });
});
