<?
session_start();
@extract($_POST);
@extract($_GET);
@extract($_SESSION);

//$liststyle='list';  (get)
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
	<script src="../common/js/prefixfree.min.js"></script>
	<script>
		function del(href) {
			if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
				document.location.href = href;
			}
		}
	</script>
</head>

<body>
	<? include '../common/sub_header.html' ?>

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
				<li><a href="../sub6/sub1_3.html">고쳐야댐</a></li>
				<li><a class="current" href="./list.php">공지사항</a></li>
			</ul>
		</div>
		<article id="content">
			<div class="title_area">
				<h2 class="hidden">공지사항</h2>
			</div>
			<div class="content_area">




				<div class="bbs_wrap">
					<form name="board_form" method="post" action="insert.php?liststyle=<?= $liststyle ?>">
						<ul class="bbs_write_top">
							<li>
								<dl>
									<dt>닉네임</dt>
									<dd><?= $usernick ?></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="subject" required>제목</label></dt>
									<dd><input type="text" id="subject" name="subject" required></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<div>
											<textarea name="contents" id="contents"></textarea>
										</div>
									</dd>
								</dl>
							</li>
						</ul>

						<div class="btn_wrap">
							<a href="list.php?liststyle=<?= $liststyle ?>">목록</a>
							<button type="submit" class='active' required>완료</button>
						</div>
					</form>
				</div>

				<? include "../common/sub_footer.html" ?>

			</div>
		</article>

		<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
		<script src="../common/js/jquery-1.12.4.min.js"></script>
		<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
		<script src="../common/js/jquery.easing.1.3.js"></script>
		<script src="../common/js/common.js"></script>
		<script src="../mainjs/mainjs.js"></script>
</body>

</html>