<?php
session_start();
?>
<meta charset="UTF-8">
<?php
@extract($_GET);
@extract($_POST);
@extract($_SESSION);

if (!$name) {
    echo ("<script>
                window.alert('이름을 입력하세요');
            </script>");
    exit;
}

if (!($hp2 && $hp3)) {
    echo ("<script>
                window.alert('연락처를 입력하세요');
            </script>");
    exit;
}

include "../lib/dbconn.php";

$sql = "SELECT * FROM member WHERE name='$name'";
$result = mysqli_query($connect, $sql);
$num_match = mysqli_num_rows($result);

if (!$num_match) {
    echo ("<script>
                window.alert('등록되지 않은 이름입니다');
            </script>");
    exit;
} else {
    $hp = $hp1 . "-" . $hp2 . "-" . $hp3;

    $sql = "SELECT * FROM member WHERE name='$name' AND hp='$hp'";
    $result = mysqli_query($connect, $sql);
    $num_match = mysqli_num_rows($result);
    $row = mysqli_fetch_array($result);

    if (!$num_match) {
        echo ("<script>
                    window.alert('등록된 정보가 없습니다');
                </script>");
        exit;
    } else {
        $id = $row['id'];
        $name = $row['name'];
        $hp = $row['hp'];
        $date = $row['regist_day'];
        ?>
        <script>
            $('#loadtext').fadeIn();
            $('.loadtext_bg').fadeIn();
        </script>
        <p><span><?php echo $name; ?></span> 회원님 가입정보입니다.</p>
        <div class='notice'>
            회원님의 아이디는 <strong><?php echo $id; ?></strong> 입니다.
        </div>
        <dl>
            <dt>아이디</dt>
            <dd><?php echo $id; ?></dd>
            <dt>이름</dt>
            <dd><?php echo $name; ?></dd>
            <dt>연락처</dt>
            <dd><?php echo $hp; ?></dd>
            <dt>가입일자</dt>
            <dd><?php echo $date; ?></dd>
        </dl>
        <ul>
            <li><a href='./login_form.php'>로그인하기</a></li>
            <li><a href='./pw_find.php'>비밀번호 찾기</a></li>
        </ul>
        <a href='#' class='close'>닫기</a>
        <?php
    }
}
mysqli_close($connect);
?>