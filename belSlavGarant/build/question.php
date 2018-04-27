<?php

$sendto   = "info@webcat.by"; // почта, на которую будет приходить письмо
	$username = $_POST['clientName'];   // сохраняем в переменную данные полученные из поля c темой формы
	$usertel = $_POST['clientNumber']; // сохраняем в переменную данные полученные из поля c телефонным номеро
	$usera1 = $_POST['restType'];   // сохраняем в переменную данные полученные из поля c именем
	$usera2 = $_POST['who'];   // сохраняем в переменную данные полученные из поля c именем
	$usera3 = $_POST['howMany'];   // сохраняем в переменную данные полученные из поля c именем
	$usera4 = $_POST['wasEarlier'];   // сохраняем в переменную данные полученные из поля c именем


	// Формирование заголовка письма
	$subject  = "Заявка с теста belslavgarant Турция";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	// Формирование тела письма
	$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
	$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта belslavgarant Турция - Страница опроса </h2>\r\n";
	$msg .= "<p><strong>Имя:</strong> ".$username."</p>\r\n";
	$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
	$msg .= "<p><strong>Тип отдыха:</strong> ".$usera1."</p>\r\n";
	$msg .= "<p><strong>Кто:</strong> ".$usera2."</p>\r\n";
	$msg .= "<p><strong>Сколько отдыхающих:</strong> ".$usera3."</p>\r\n";
	$msg .= "<p><strong>Были ли ранее:</strong> ".$usera4."</p>\r\n";
	$msg .= "</body></html>";

	// отправка сообщения
	if(@mail($sendto, $subject, $msg, $headers)) {
		header('Location: thanks.html');
	} else {
		echo "<center><img src='img/ne-otpravleno.png'></center>";
	}


?>