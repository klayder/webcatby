<?php

$sendto   = "info@webcat.by"; // почта, на которую будет приходить письмо
	$usersubj = $_POST['form-subject'];   // сохраняем в переменную данные полученные из поля c темой формы
	$usertel = $_POST['clientNumber']; // сохраняем в переменную данные полученные из поля c телефонным номеро
	$username = $_POST['clientName'];   // сохраняем в переменную данные полученные из поля c именем
	$userpersons = $_POST['persons'];   // сохраняем в переменную данные полученные из поля c именем
	$userdays = $_POST['days'];
	$userwishes = $_POST['bookFormText'];

	// Формирование заголовка письма
	$subject  = "Заявка с сайта ";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	// Формирование тела письма
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта  - Страница опроса </h2>\r\n";
	$msg .= "<p><strong>Тема:</strong> ".$usersubj."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
	$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
	$msg .= "<p><strong>Количество дней:</strong> ".$userdays."</p>\r\n";
	$msg .= "<p><strong>Количество человек:</strong> ".$userpersons."</p>\r\n";
	$msg .= "<p><strong>Пожелания к туру:</strong> ".$userwishes."</p>\r\n";

	$msg .= "</body></html>";

	// отправка сообщения
	if(@mail($sendto, $subject, $msg, $headers)) {
		header('Location: thanks.html');
	} else {
		echo "<center><img src='img/ne-otpravleno.png'></center>";
	}


?>