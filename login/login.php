<?php
session_start();
@extract($_GET);
@extract($_POST);
@extract($_SESSION);
?>
<meta charset="utf-8">
<?php
if (!$id) {
    echo ("<script>
                window.alert('아이디를 입력하세요.');
                history.go(-1);
            </script>");
    exit;
}

if (!$pass) {
    echo ("<script>
                window.alert('비밀번호를 입력하세요.');
                history.go(-1);
            </script>");
    exit;
}

include "../lib/dbconn.php";

if (!$connect) {
    die("DB 연결 실패: " . mysqli_connect_error());
}

$sql = "SELECT * FROM member WHERE id='$id'";
$result = mysqli_query($connect, $sql);
$num_match = mysqli_num_rows($result);

if (!$num_match) {
    echo ("<script>
                window.alert('등록되지 않은 아이디입니다.');
                history.go(-1);
            </script>");
    exit;
} else {
    $row = mysqli_fetch_array($result);
    $sql = "SELECT * FROM member WHERE id='$id' AND pass=password('$pass')";
    $result = mysqli_query($connect, $sql);
    $num_match = mysqli_num_rows($result);

    if (!$num_match) {
        echo ("<script>
                    window.alert('비밀번호가 틀립니다.');
                    history.go(-1);
                </script>");
        exit;
    } else {
        $userid = $row['id'];
        $username = $row['name'];
        $usernick = $row['nick'];
        $userlevel = $row['level'];

        $_SESSION['userid'] = $userid;
        $_SESSION['username'] = $username;
        $_SESSION['usernick'] = $usernick;
        $_SESSION['userlevel'] = $userlevel;

        echo ("<script>
                    location.href = '../index.html';
                </script>");
    }
}
?>