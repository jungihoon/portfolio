document.addEventListener('scroll', function () {
  const content = document.querySelector('.content_top');
  const sub03 = document.querySelector('.sub03');

  const contentRect = content.getBoundingClientRect();

  // content가 화면에 보이기 시작하면 animate 추가
  if (contentRect.top < window.innerHeight && contentRect.bottom > 0) {
    sub03.classList.add('animate');
  }
  // content가 화면에서 완전히 벗어나면 animate 제거
  else {
    sub03.classList.remove('animate');
  }
});
