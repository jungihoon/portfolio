<?
session_start();
@extract($_POST);
@extract($_GET);
@extract($_SESSION);
//세션변수 4
//$num
//$page
//$liststyle

// page=$page&

include "../lib/dbconn.php";

$sql = "select * from greet where num=$num";
$result = mysqli_query($connect, $sql);

$row = mysqli_fetch_array($result);
$item_nick = $row[nick];
$item_subject = $row[subject];
$item_content = $row[content];
?>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>공지사항</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
		rel="stylesheet" />
	<link rel="stylesheet" href="../common/css/common_sub.css" />
	<link rel="stylesheet" href="../common/css/aos.css" />
	<link rel="stylesheet" href="../common/css/common.css">
	<link rel="stylesheet" href="./css/greet.css">
	<script>
		// function del(href) 
		// {
		// 	if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
		// 			document.location.href = href;
		// 	}
		// }
	</script>
</head>

<body>
	<? include '../common/sub_header.html' ?>
	<!-- <div class="sub_layout"></div> -->

	<div class="skipNav">
		<a href="#content">본문 바로가기</a>
		<a href="#gnb">글로벌 네비게이션 바로가기</a>
	</div>

	<div class="wrap">
		<? include '../common/sub_header.html' ?>

		<div id="mainVisual">
			<img src="./images/content1/sub_visual01.jpg" alt="" />
			<div class="sub_title">
				<strong>고객센터</strong>
			</div>
		</div>

		<div class="sub_nav">
			<ul>

				<li><a href="../notice/list.php">보도자료</a></li>
				<li><a class="current" href="./list.php">공지사항</a></li>
			</ul>
		</div>

		<article id="content">
			<div class="title_area">
				<h2 class="hidden">공지사항</h2>
			</div>
			<div class="content_area">


				<div class="bbs_wrap">
					<form name="board_form" method="post"
						action="insert.php?mode=modify&num=<?= $num ?>&page=<?= $page ?>&liststyle=<?= $liststyle ?>">
						<ul class="bbs_write_top">
							<li>
								<dl>
									<dt>이름</dt>
									<dd><?= $item_nick ?></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd>
										<input type="text" name="subject" id="subject" value="<?= $item_subject ?>">
									</dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<textarea name="contents" id="contents"><?= $item_content ?></textarea>
									</dd>
								</dl>
							</li>
						</ul>


						<div class="btn_wrap">
							<a href="list.php?page=<?= $page ?>&liststyle=<?= $liststyle ?>">목록</a>
							<button type="submit" class='active'>완료</button>
						</div>

					</form>
				</div>
			</div>
		</article>

		<? include "../common/sub_footer.html" ?>




		<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
		<script src="../common/js/jquery-1.12.4.min.js"></script>
		<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
		<script src="../common/js/jquery.easing.1.3.js"></script>
		<script src="../common/js/common.js"></script>
		<script src="../mainjs/mainjs.js"></script>
</body>

</html>