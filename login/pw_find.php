<?
session_start();
@extract($_GET);
@extract($_POST);
@extract($_SESSION);
?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>비밀번호 찾기</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="./css/login_common.css">
    <link rel="stylesheet" href="./css/login.css">

    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script>
        $(document).ready(function () {

            $(".find").click(function () {
                var id = $('#id').val();
                var name = $('#name').val();
                var hp1 = $('#hp1').val();
                var hp2 = $('#hp2').val();
                var hp3 = $('#hp3').val();

                $.ajax({
                    type: "POST",
                    url: "./find2.php",
                    data: "id=" + id + "&name=" + name + "&hp1=" + hp1 + "&hp2=" + hp2 + "&hp3=" + hp3,
                    cache: false,
                    success: function (data) {
                        $("#loadtext").html(data);
                    }
                });

                $(document).on('click', '#loadtext .close, .loadtext_bg', function () {
                    $('#loadtext').fadeOut();
                    $('.loadtext_bg').fadeOut();
                });
            });
        });
    </script>
</head>

<body>

    <header>
        <h1><a href="../index.html">POSCO M-TECH LOGO</a></h1>
    </header>

    <article id="content">
        <h2>비밀번호 찾기</h2>
        <p class="summary">가입 시 입력하신 정보로 비밀번호를 찾아드립니다</p>

        <div class="login_wrap">
            <form name="find" method="post" action="find2.php">
                <ul>
                    <li>
                        <label for="name">이름</label>
                        <input type="text" name="name" id="name" required placeholder="이름을 입력하세요">
                    </li>
                    <li>
                        <label for="id">아이디</label>
                        <input type="text" name="id" id="id" required placeholder="아이디를 입력하세요">
                    </li>
                    <li class="hp">
                        <label for="hp1">연락처</label>
                        <div class="hp-group">
                            <select name="hp1" id="hp1" title="휴대폰 앞3자리를 선택하세요.">
                                <option>010</option>
                                <option>011</option>
                                <option>016</option>
                                <option>017</option>
                                <option>018</option>
                                <option>019</option>
                            </select>
                            <span>-</span>
                            <input type="text" id="hp2" name="hp2" maxlength="4" placeholder="(ex. 1111)" required>
                            <span>-</span>
                            <input type="text" id="hp3" name="hp3" maxlength="4" placeholder="(ex. 1111)" required>
                        </div>
                    </li>
                </ul>

                <button type="button" class="find"><span>비밀번호 찾기</span></button>

                <span id="loadtext"></span>
                <div class="loadtext_bg"></div>
            </form>

            <ul class="find_link">
                <li><a href="./login_form.php">로그인하기</a></li>
                <li><a href="./id_find.php">아이디 찾기</a></li>
            </ul>

            <div class="join_link">
                아이디가 없으신 분은 회원가입을 해주세요
                <a href="../member/member_check.html">회원가입</a>
            </div>

        </div>
    </article>
</body>

</html>