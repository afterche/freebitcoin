<html>
<head>
<title>STATICTIC</title>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
<p>Stat</p>
</head>

<body>
<?php
	function getExtension3($path) {
		return substr($path, strrpos($path, '.') + 1);
	}
	//Remove old  files
	$expire_time = 86400; // Время через которое файл считается устаревшим (в сек.)
	$id=0;
	
	//--------------------------------
	 //*Settings
	$id++;
	$dir = 'caw/r/'; // From what directori delete
	$domain[$id]=$dir;
	$ok[$id]=0;
	$tr[$id]=0;
	//*Settings
	
	echo "<br>";
	echo "----------------------$dir";
	echo "<br>";
	$time_sec=time();// текущее время
	$files = scandir($dir); // Берём всё содержимое директории
	for ($i = 0; $i < count($files); $i++) { // Перебираем все файлы
		if (($files[$i] != ".") && ($files[$i] != "..")) { // Текущий каталог и родительский пропускаем
			$path = $dir.$files[$i];
			$time_file=filemtime($path);// время изменения файла
			$time=$time_sec-$time_file;
			if ($time>$expire_time){
				echo $time;
				unlink ( $path );
			}
			else {
				$ext=getExtension3($path);
				if ($ext==="ok"){
					$f = fopen($path, "r");
					echo fgets($f); 
					fclose($f);
					echo "<br>";
					$ok[$id]++;
				}
				if ($ext==="w"){
					$f = fopen($path, "r");
					echo fgets($f); 
					fclose($f);
					echo "<br>";
				}
				if ($ext==="tr"){
					$tr[$id]++;
				}
			}
		}
	}

 
 //*Settings
 	$id++;
	$dir = 'i9/r/'; // From what directori delete
	$domain[$id]=$dir;
	$ok[$id]=0;
	$tr[$id]=0;
//*Settings
	
	echo "<br>";
	echo "----------------------$dir";
	echo "<br>";
	$time_sec=time();// текущее время
	$files = scandir($dir); // Берём всё содержимое директории
	for ($i = 0; $i < count($files); $i++) { // Перебираем все файлы
		if (($files[$i] != ".") && ($files[$i] != "..")) { // Текущий каталог и родительский пропускаем
			$path = $dir.$files[$i];
			$time_file=filemtime($path);// время изменения файла
			$time=$time_sec-$time_file;
			if ($time>$expire_time){
				unlink ( $path );
			}
			else {
				$ext=getExtension3($path);
				if ($ext==="ok"){
					$f = fopen($path, "r");
					echo fgets($f); 
					fclose($f);
					echo "<br>";
					$ok[$id]++;
				}
				if ($ext==="w"){
					$f = fopen($path, "r");
					echo fgets($f); 
					fclose($f);
					echo "<br>";
				}
				if ($ext==="tr"){
					$tr[$id]++;
				}
			}
		}
	}
	
	$all_tr=0;
	$all_ok=0;
	for ($k=1; $k<=$id; $k++) {
		echo "<br>";
		echo "<br>";
		echo "domain=$domain[$k]";
		echo "<br>";
		echo "tr=$tr[$k]";
		echo "<br>";
		echo "ok=$ok[$k]";
		$all_tr+=$tr[$k];
		$all_ok+=$ok[$k];
	}
	echo "<br>";
	echo "-------------------------------------";
	echo "<br>";
	echo "TOTAL";
	echo "<br>";
	echo "tr=$all_tr";
	echo "<br>";
	echo "ok=$all_ok";
	
?>
</body>
</html>