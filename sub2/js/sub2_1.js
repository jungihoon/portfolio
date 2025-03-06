document.addEventListener("DOMContentLoaded", () => {
  // // 메뉴 항목과 이미지 요소 가져오기
  // const menuItems = document.querySelectorAll('.con_nav li a');
  // const images = document.querySelectorAll('.con_img_wrap li a img');

  // // 초기 상태 설정
  // menuItems[0].classList.add('on');
  // images[0].classList.add('on');

  // // 각 메뉴 항목에 클릭 이벤트 추가
  // menuItems.forEach((menu, index) => {
  //   menu.addEventListener('click', (e) => {
  //     e.preventDefault(); // 기본 링크 동작 방지

  //     // 모든 메뉴 항목과 이미지에서 "on" 클래스 제거
  //     menuItems.forEach((item) => item.classList.remove('on'));
  //     images.forEach((img) => img.classList.remove('on'));

  //     // 클릭된 메뉴 항목과 해당 이미지에 "on" 클래스 추가
  //     menuItems[index].classList.add('on');
  //     images[index].classList.add('on');
  //   });
  // });

  // 메뉴 항목과 이미지 리스트 가져오기
  const menuItems = document.querySelectorAll(".main_content .con_nav li a");
  const imageList = document.querySelector(".main_content .con_img_wrap");

  // 초기 상태 설정
  menuItems[0].classList.add("on"); // 첫 번째 메뉴 활성화

  // 각 메뉴 항목에 클릭 이벤트 추가
  menuItems.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
      e.preventDefault(); // 기본 링크 동작 방지

      // 모든 메뉴 항목에서 "on" 클래스 제거
      menuItems.forEach((item) => item.classList.remove("on"));

      // 클릭된 메뉴 항목에 "on" 클래스 추가
      menu.classList.add("on");

      // 슬라이드 애니메이션 (위로 이동)
      const slideHeight = 700; // 슬라이드 높이 (700px)
      imageList.style.transform = `translateY(-${index * slideHeight}px)`;
    });
  });

  /**
   * 숫자가 차례로 올라가는 애니메이션
   * @param {HTMLElement} element - 숫자를 표시할 HTML 요소
   * @param {number} start - 시작 숫자
   * @param {number} end - 종료 숫자
   * @param {number} duration - 애니메이션 지속 시간(ms)
   */
  function animateNumber(element, start, end, duration) {
    const range = end - start; // 숫자의 범위
    const stepTime = Math.max(duration / range, 10); // 최소 10ms 간격
    let current = start;

    const increment = Math.ceil(range / (duration / stepTime)); // 증감값 계산

    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
        current = end; // 마지막 숫자에서 정확히 멈춤
        clearInterval(timer);
      }
      element.textContent = current.toLocaleString(); // 천 단위 콤마 추가
    }, stepTime);
  }

  // Intersection Observer로 .essentials 요소가 보일 때 애니메이션 실행
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".essentials_txt strong").forEach((strong) => {
            const endValue = parseInt(strong.textContent.replace(/,/g, ""), 10); // 숫자 추출
            animateNumber(strong, 0, endValue, 3000); // 0부터 해당 숫자까지 3초 동안 애니메이션
          });

          // 애니메이션이 한 번 실행된 후에는 Observer를 해제
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5, // 요소가 50% 보이면 트리거
    }
  );

  // .essentials 요소 관찰 시작
  observer.observe(document.querySelector(".essentials"));
});
