<html>
<head>
<title>Transfer page</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
</head>
 
<body>
<?php
$rowanswer = $_POST['rowanswer']; // �������� ��������� ������ � ����������� ����������
$filename = $_POST['filename'];
$verify = $_POST['verify'];
$exit = $_POST['exit'];
$copypaste = $_POST['copypaste'];
//Capcha tipe
$ct3x3 = $_POST['ct3x3']; 
$ct3x3b = $_POST['ct3x3b'];
$ct2x4 = $_POST['ct2x4'];
$ct4x4 = $_POST['ct4x4'];
if (is_array($rowanswer)){//���� ��� ������ (������������ ��������)
	foreach ($rowanswer as $value) {//��������� ������
		if (isset($value)) {//���� ������� ���������� ������� ��� 
			$answer .= $value;
		}
	}
} 
else{
	$answer .= "$rowanswer";//line captcga
}
//��� ����� ������� � ������ ������
if (isset($ct3x3)) {//���� ������� ���������� ������� ��� � ������
			$answer =$ct3x3.$answer;
}
if (isset($ct3x3b)) {//���� ������� ���������� ������� ��� � ������
			$answer =$ct3x3b.$answer;
}
if (isset($ct2x4)) {//���� ������� ���������� ������� ��� � ������
			$answer =$ct2x4.$answer;
}
if (isset($ct4x4)) {//���� ������� ���������� ������� ��� � ������
			$answer =$ct4x4.$answer;
}

if (isset($verify)) {//���� ������� ���������� ������� ��� 
			$answer .= $verify;
}
if (isset($exit)) {//���� ������� ���������� ������� ��� 
			$answer .= $exit;
}
if (isset($copypaste)) {//���� ������� ���������� ������� ��� 
			$answer .= $copypaste;
}

$text .= "$answer"; 
echo $text;
$saveanswerto .="answer/";
$saveanswerto .= "$filename"; 
$saveanswerto .= ".aw"; 
$deletecaptchafile .="captcha/";
$deletecaptchafile .= "$filename";
$deletecaptchafile .= ".png";
if (!empty($answer)) {//���� ��� ���������� ����� �������� ��������� ������ � ����
    $file = fopen ($saveanswerto, "w"); //��������� ��� ���������� ���� 
	fwrite ($file,$text); // ����� � ����
	fclose ($file); // ��������� ����
}
unlink ( $deletecaptchafile );// Delete captcha file
	
 //Remove old files
$expire_time = 300; // ����� ����� ������� ���� ��������� ���������� (� ���.)
$time_sec=time();// ������� �����

$dir = 'answer/'; // From what directori delete
$files = scandir($dir); // ���� �� ���������� ����������
for ($i = 0; $i < count($files); $i++) { // ���������� ��� �����
	if (($files[$i] != ".") && ($files[$i] != "..")) { // ������� ������� � ������������ ����������
		$path = $dir.$files[$i];
		$time_file=filemtime($path);// ����� ��������� �����
		$time=$time_sec-$time_file;
		if ($time>$expire_time){
			unlink ( $path );
		}	
	}	
} 

$dir = 'captcha/'; // From what directori delete
$files = scandir($dir); // ���� �� ���������� ����������
for ($i = 0; $i < count($files); $i++) { // ���������� ��� �����
	if (($files[$i] != ".") && ($files[$i] != "..")) { // ������� ������� � ������������ ����������
		$path = $dir.$files[$i];
		$time_file=filemtime($path);// ����� ��������� �����
		$time=$time_sec-$time_file;
		if ($time>$expire_time){
			unlink ( $path );
		}	
	} 	
} 
header("Location:index.php");
?>
<P>OK</P> 
<P>       </P> 
<P>       </P> 
<P>       </P> 
<P>       </P> 
<form action="index.php">
    <button type="submit" autofocus>Choose captcha</button>
</form> 
</body>
</html>




