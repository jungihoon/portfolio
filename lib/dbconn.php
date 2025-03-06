<?
$connect = mysqli_connect("localhost", "jgh", "1234", "jgh_db") or
    die("SQL server에 연결할 수 없습니다.");

mysqli_select_db($connect, "jgh_db");
?>