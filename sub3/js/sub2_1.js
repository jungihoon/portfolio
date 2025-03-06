document.addEventListener("DOMContentLoaded", () => {
  // 메뉴 항목과 이미지 요소 가져오기
  const menuItems = document.querySelectorAll(".con_nav li a");
  const images = document.querySelectorAll(".con_img li a img");

  // 초기 상태 설정
  menuItems[0].classList.add("on");
  images[0].classList.add("on");

  // 각 메뉴 항목에 클릭 이벤트 추가
  menuItems.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
      e.preventDefault(); // 기본 링크 동작 방지

      // 모든 메뉴 항목과 이미지에서 "on" 클래스 제거
      menuItems.forEach((item) => item.classList.remove("on"));
      images.forEach((img) => img.classList.remove("on"));

      // 클릭된 메뉴 항목과 해당 이미지에 "on" 클래스 추가
      menuItems[index].classList.add("on");
      images[index].classList.add("on");
    });
  });
});
