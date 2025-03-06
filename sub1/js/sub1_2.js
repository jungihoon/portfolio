$(function () {
  var historyNav = $(".history_nav");
  var header = $("#headerArea");
  var contentArea = $(".content_area");

  var lastScrollTop = 0; // 이전 스크롤 위치
  var headerHeight = header.outerHeight(); // header 높이
  var historyNavInitialOffset = historyNav.offset().top; // history_nav의 초기 오프셋

  var isFixed = false; // history_nav가 고정 상태인지 여부
  var isHeaderHidden = false; // header가 숨겨져 있는지 여부

  var sections = [".his_2023s", ".his_2018s", ".his_2010s", ".his_1997s"]; // 각 섹션의 클래스
  var offsets = []; // 각 섹션의 오프셋을 저장할 배열

  // 섹션 오프셋 업데이트 함수
  function updateOffsets() {
    offsets = sections.map(function (selector) {
      return $(selector).offset().top;
    });
    console.log("업데이트된 섹션 오프셋:", offsets);
  }

  updateOffsets(); // 초기 오프셋 설정

  // 창 크기 변경 시 오프셋과 header 높이 업데이트
  $(window).on("resize", function () {
    headerHeight = header.outerHeight();
    historyNavInitialOffset = historyNav.offset().top;
    updateOffsets();
  });

  // 스크롤 이벤트 핸들러
  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    var delta = scrollTop - lastScrollTop;

    // history_nav가 고정되어야 하는지 확인
    if (scrollTop > historyNavInitialOffset - headerHeight - 100) {
      if (!isFixed) {
        historyNav.addClass("fixed");
        isFixed = true;
      }

      if (scrollTop > historyNavInitialOffset - headerHeight + 100) {
        if (!isHeaderHidden) {
          header.addClass("hidden");
          historyNav.addClass("top-zero");
          isHeaderHidden = true;
        }
      } else {
        if (isHeaderHidden) {
          header.removeClass("hidden");
          historyNav.removeClass("top-zero");
          isHeaderHidden = false;
        }
      }
    } else {
      if (isFixed) {
        historyNav.removeClass("fixed top-zero");
        isFixed = false;
      }
      if (isHeaderHidden) {
        header.removeClass("hidden");
        isHeaderHidden = false;
      }
    }

    // 활성 링크 처리
    historyNav.find("a").removeClass("on"); // 모든 링크 비활성화
    $(sections).each(function (index, section) {
      var sectionTop = offsets[index] - historyNav.outerHeight() - headerHeight;
      var sectionBottom = offsets[index + 1]
        ? offsets[index + 1] - historyNav.outerHeight() - headerHeight
        : $(document).height();

      // 현재 스크롤 위치가 섹션 범위 안에 있는 경우
      if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
        historyNav.find("li:eq(" + index + ") a").addClass("on");
        $(section).addClass("boxMove").siblings().removeClass("boxMove");
      }
    });

    lastScrollTop = scrollTop; // 이전 스크롤 위치 업데이트
  });

  // 초기 스크롤 상태 적용
  $(window).trigger("scroll");

  // 메뉴 클릭 시 부드럽게 이동 및 'on' 클래스 적용
  $(".history_nav a").click(function (e) {
    e.preventDefault();

    var value = 0;
    var $this = $(this);

    if ($this.hasClass("link1")) {
      value = $(".his_2023s").offset().top - headerHeight;
    } else if ($this.hasClass("link2")) {
      value = $(".his_2018s").offset().top - headerHeight;
    } else if ($this.hasClass("link3")) {
      value = $(".his_2010s").offset().top - headerHeight;
    } else if ($this.hasClass("link4")) {
      value = $(".his_1997s").offset().top - headerHeight;
    }

    // 모든 서브메뉴 비활성화 및 클릭한 링크에 'on' 클래스 추가
    historyNav.find("a").removeClass("on");
    $this.addClass("on");

    // 스크롤 애니메이션 시작
    $("html, body").stop(true, true).animate({ scrollTop: value }, 1000);
  });
});
