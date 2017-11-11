

	
 	var number = 5;
 	var nakopitel = 0;
 while (number != enter){
	 var enter = +prompt("введите число от 0 до 100");
	if (enter == number) {
		alert("Поздровляю вы угадали c " + nakopitel + " Попытки");
	}else if (isNaN(enter) || enter > 100 || enter < 0) {
		alert("вы ввели некоректные данные");
	}else if (enter > 5){
		alert("вы ввели число больше загаданного");
	}else if (enter < 5){
		alert("Вы ввели число меньше загаданного");
	}else {
		alert("Вы не угадали число");
	}
	nakopitel++;
}


