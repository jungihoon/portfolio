document.addEventListener('scroll', function () {
  // sub 비주얼 페이지 이미지 나타나게 하기
  const content = document.querySelector('.content_area');
  const subVisual = document.querySelector('.sub_visual');

  const contentRect = content.getBoundingClientRect();

  // content가 화면에 보이기 시작하면 animate 추가
  if (contentRect.top < window.innerHeight && contentRect.bottom > 0) {
    subVisual.classList.add('animate');
  }
  // content가 화면에서 완전히 벗어나면 animate 제거
  else {
    subVisual.classList.remove('animate');
  }
});

// 서브 비주얼 텍스트 올라오게 하기
document.addEventListener('DOMContentLoaded', () => {
  const contentTopTxt = document.querySelector('.content_top_txt');
  const items = document.querySelectorAll('.content_top_txt .item');

  const handleScroll = () => {
    const contentRect = contentTopTxt.getBoundingClientRect();

    // 요소가 화면에 보이는 경우
    if (contentRect.top < window.innerHeight && contentRect.bottom > 0) {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('active');
        }, index * 500); // 500ms 간격으로 실행
      });
    } else {
      // 화면에서 벗어난 경우 active 제거
      items.forEach((item) => {
        item.classList.remove('active');
      });
    }
  };

  // 스크롤 이벤트 연결
  window.addEventListener('scroll', handleScroll);

  // 새로고침 시 초기 상태 검사
  items.forEach((item) => {
    item.classList.remove('active');
  });

  handleScroll(); // 초기 상태 확인
});

//<![CDATA[
$(document).ready(function () {
  $('.research > dl > dd').hide();
  $('.research > dl:first-child dd').show();
  $('.research > dl > dt').click(function () {
    $(this).next('dd').slideToggle().parent().toggleClass('on').siblings().removeClass('on').children('dd').slideUp('fast');
  });

  $('.research dt a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        400,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
//]]>
