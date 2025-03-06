<?php
session_start();
?>
<meta charset="UTF-8">
<?php
@extract($_GET);
@extract($_POST);
@extract($_SESSION);

if (!$id) {
    echo ("<script>
                window.alert('아이디를 입력하세요');
            </script>");
    exit;
}

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

$sql = "SELECT * FROM member WHERE id='$id'";
$result = mysqli_query($connect, $sql);
$num_match = mysqli_num_rows($result);

if (!$num_match) {
    echo ("<script>
                window.alert('등록되지 않은 아이디입니다');
            </script>");
    exit;
} else {
    $hp = $hp1 . "-" . $hp2 . "-" . $hp3;

    $sql = "SELECT * FROM member WHERE id='$id' AND name='$name' AND hp='$hp'";
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

        // 랜덤 비밀번호 생성 함수
        function generateRandomPassword($length = 8, $strength = 0)
        {
            $vowels = '!@#$^%*';
            $consonants = 'bdghjmnpqrstvz';

            if ($strength & 1) {
                $consonants .= 'BDGHJLMNPQRSTVWXZ';
            }

            $password = '';
            $alt = time() % 2;
            for ($i = 0; $i < $length; $i++) {
                if ($alt == 1) {
                    $index = mt_rand(0, strlen($consonants) - 1);
                    $password .= $consonants[$index];
                    $alt = 0;
                } else {
                    $index = mt_rand(0, strlen($vowels) - 1);
                    $password .= $vowels[$index];
                    $alt = 1;
                }
            }

            return $password;
        }

        $ranpass = generateRandomPassword(8, 1);
        $hashed_pass = password_hash($ranpass, PASSWORD_BCRYPT);

        // 비밀번호 업데이트
        $sql = "UPDATE member SET pass='$hashed_pass' WHERE id='$id' AND name='$name' AND hp='$hp'";
        $result = mysqli_query($connect, $sql);
        ?>
        <script>
            $('#loadtext').fadeIn();
            $('.loadtext_bg').fadeIn();
        </script>
        <p><span><?php echo $name; ?></span> 회원님 가입정보입니다.</p>
        <div class='notice'>
            임시비밀번호는 <strong><?php echo $ranpass; ?></strong> 입니다.<br>
            로그인 후 비밀번호를 변경해주세요.
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
        </ul>
        <a href='#' class='close'>닫기</a>
        <?php
    }
}
mysqli_close($connect);
?>