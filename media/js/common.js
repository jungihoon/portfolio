//네비처리
$(".menuOpen").click(function() {
  $("#gnb").animate({left:0,opacity:1}, 'fast');
  $('.box').show();
 });
 
 $(".close, .box").click(function() {
   $("#gnb").animate({left:'-100%',opacity:0}, 'fast');
   $('.box').hide();
 });

 //네비 높이처리
 //var documentHeight =  $(document).height();
 var screenSize = $(window).width(); 
 // if( screenSize > 768){ 
 //    $("#gnb").height('auto');
 // }else{
 //    $("#gnb").height(documentHeight);
 // }
 
 
 var current=0; // 1(소형테블릿이상) , 0(모바일)
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
    var screenSize = $(window).width(); 
    if( screenSize > 1024){ //소형테블릿 이상
      $("#gnb").css({left:0,opacity:1});
      //$("#gnb").height('auto');
      current=1;
    }
    if(current==1 && screenSize <= 1024){
       $("#gnb").css({left:'-100%',opacity:0});
      // $("#gnb").height(documentHeight);
       current=0;
    }
  }); 


$(window).on("scroll", function () {
  //스크롤 값의 변화가 생기면
  var scroll = $(window).scrollTop(); //스크롤의 거리
  var win_height = $(window).height();
  var header_height = $("header").height();

  if (scroll > win_height) {
    //300이상의 거리가 발생되면
    $(".topMove").fadeIn("slow"); //top보여라~~~~
  } else {
    $(".topMove").fadeOut("fast"); //top안보여라~~~~
  }

  if (scroll > win_height - header_height) {
    //300이상의 거리가 발생되면
    $("header").css("background", "#000"); //top보여라~~~~
    $("header").css("border-bottom", "2px solid #333");
  } else {
    $("header").css("background", "rgba(0, 0, 0, 0.4)"); //top안보여라~~~~
    $("header").css("border-bottom", "none");
  }
});

$(".topMove").click(function (e) {
  e.preventDefault();
  //상단으로 스르륵 이동합니다.
  $("html,body").stop().animate({ scrollTop: 0 }, 1000);
});
