var system = require('system');
var args = system.args;
var sysuser = system.args[1];
var page = require("webpage").create();
var fs = require("fs");
var execFile = require("child_process").execFile;
var home_dir = fs.workingDirectory;

//****************Play file
var stat_for_tester = "stat_frBfp5.txt";
var stat_for_tester = "stat_frBfp5.txt";
var log_file = "log_frDfp_tetser.txt";
var stat_for_tester = "stat5.txt";
var a = '123';
rez_bet_befor=0;
arr_all_total=[];
arr_all_total_count=0;

fs.write("matrix.csv", '', 'w');
fs.write("f1900.csv", '', 'w');

fs.write(log_file, 'Phantomjs.Create log file = ' + log_file, 'w');
//fs.write ("lucky_tester.txt",'',"w");
fs.write('total_tester.txt', 'i= ;' + 'mult_opt= ;' +
	'min_this_game= ; ' +
	'max_bet=  ; ' +
	'max_win=  ; ' +
	'profit_los=  ' +
	'this_game_total', 'w');
	
	fs.write("stat_tester.txt","","w");

//fs.write("arr_pyout_rez_tester.txt", 'Phantomjs.Create arr_pyout_rez.txt\n', 'w');
fs.write("all-t-pl.txt","","w");
// 2.Play - Optimise

	timer_8888=0;
	swthl = 0;
	arr_total_hor=[];
	hi1900=0;
	hi_this_1900=0;
	lo1900=0;
	lo_this_1900=0;	
	switcher=0;
	hihihi=0;
	lololo=0;
	arr_1900=[];
	all_timer=0;

	
fs.write ("flashes_tester.txt","","w");	
fs.write('total_tester_plus.txt', '',"w");	
fs.write('all_analiz.txt', '',"w");

fs.write('1900.txt', '',"w");	

timer_1900=0;timer_1900hi=0;timer_1900lo=0;
timer_1900_count=0;

timer_1000=0
all_timer=0;
arr_1900=[];
arr_8888=[];
arr_19_count=[];

arr_counter_for_reset_1900 = [];
arr_counter_1900 = [];

for (var stoplos =5; stoplos <22; stoplos = stoplos +55) {//-.perek2
for (var i_opt =100; i_opt <2200; i_opt = i_opt+2000) {
	this_total=0;
	for (var mult_opt = 1; mult_opt < 10000; mult_opt = mult_opt*20000) {//perek
		ddd=0;
		beton=2
		all_total=0;
		arr_all_total_count++;
		for (var optcount = 1; optcount < 5000 ; optcount=optcount+1) {//
		
		matrix_3_hi = [] ;
		matrix_3_lo = [] ;
		
		matrix_3_hi [1]=0
		matrix_3_hi [2]=0
		matrix_3_hi [3]=0
		
		hi5=0
		lo5=0
		
	 timer_1900=0;timer_1900hi=0;timer_1900lo=0;
timer_1900_count=0;

timer_1000=0


arr_1900_list=[]
arr_8888=[];


		pause=0;
		 gp=30000;
		 if (ddd>84) ddd=0;
		 flag=0
		 ddd++;
		 hiloswitch="none"
		// stat_for_tester="x"+ddd;//--------------This	
		console.log('');
		console.log('Phantomjs.i_opt=' + i_opt);
		console.log('Phantomjs.mult_opt=' + mult_opt);
		console.log('Phantomjs.optcount=' + optcount);
		bingo_value=0;
		perek=(mult_opt*-0.00000001).toFixed(8);
		
		perek2=(stoplos*-0.00000001).toFixed(8);
		
		console.log ("perek="+perek);
		var arr_pyout_rez = [];
		for (var t = 1; t <= 25; t++) {
			arr_pyout_rez[t] = 0;
		}
		var min_this_game_total = 0;
		var max_bet = 0;
		var max_win = 0;
		var profit_los = 0;

		var min_this_game_total_tester = 0;
		var min_this_game_total_testerf = 0;
		var max_bet_tester = 0;
		var max_win_tester = 0;
		var profit_los_tester = 0;
		var profit_los_tester_this = 0;
		flag_hi_lo=0

		var res_bet = 0; //результат розыгрыша (проиграл,выиграл)

bvfcount=0

		var i = 0; //сколько раз будим играть
		var ilog = i - 1; //Иначе не будут писаться в лог текущие значения 
		var cpt = 0;
		var cptmax = 500000;
		var balance = "";
		var ct = 0;
		var count_value = "";
		var sbalance = "";
		var fin = "";
		var stat = "";
		var log = "";
		var j = 10; //задержка между проверками счетчика, ms
		

		var this_game_total = 0;
		var this_win = 0;

		var this_game_total_tester = 0;
		var this_win_tester = 0;

		
		var bet_value = 0.00000001;


		var sum_count = 0;
		var sum_gam = 0;
		
		var hi2=0;
		var hi01=0;
		var hi5=0;
		var hi10=0;
		var hi101=0;
		
		var lo2=0;
		var lo01=0;
		var lo5=0;
		var lo10=0;
		var lo101=0;
		
		
		
		var kpay=5;
		
		var katcher = 0;
		pausek=0;
		bet_value = 0.00000001;
		var reseter=0;
		var sush_start=0;
		start=0;
		flashes="";
		
		var temp=Math.random();
		//if (temp >= 0.5) hi_or_lo = "BET HI"; else hi_or_lo = "BET LO";
		//console.log("+");
		

		if (fs.isFile(stat_for_tester)) {
			var how_many_from_statfile_read = 1;
			var stream = fs.open(stat_for_tester, 'r');
			var ttt = 0;
			
			while (!stream.atEnd()) {
				var line = stream.readLine();
				if (line != "") {
					
					
					//console.log(ttt);
					line_log=line;
					
					

					line = line.substring(line.indexOf(";") + 1); // обрезает сиволы с первого сивола ;+1 и до конца строки
					line = line.substring(line.indexOf(";") + 1);
					////console.log('Phantomjs.time_bet=' + line);

					//выделил результат - какое число выпало
					line = line.substring(line.indexOf(";") + 1);
					rez_bet = line.substring(0, line.indexOf(";")); //rez_bet
					rez_bet = parseInt(rez_bet);
					////console.log('Phantomjs.rez_bet=' + rez_bet);

					var tempRandom = Math.random();
						//save_log('Phantomjs.tempRandom=' + tempRandom);

					
					
					 if (sum_gam >=9998 && this_game_total >=0) {
						
						
						if(min_this_game_total_testerf<-0.00001900){//0.007
							
							 fs.write ("flashes_tester.txt", i_opt+";"+mult_opt+";"+sum_gam+";"+payout+";"+bet_value+";"+hi_or_lo+";"+min_this_game_total_testerf+
							";"+hi1900+";"+lo1900+";"+hi_this_1900+";"+lo_this_1900+"\n","a");
							fs.write ("flashes_tester.txt",flashes+"\n","a"); 
							fs.write ("flashes_tester.txt","hi1900="+hi1900+"\n","a");
							fs.write ("flashes_tester.txt","lo1900="+lo1900+"\n","a");
							fs.write ("flashes_tester.txt","hiloswitch="+hiloswitch+"\n","a");
							fs.write ("flashes_tester.txt","hi_this_1900="+hi_this_1900+"\n","a");
							fs.write ("flashes_tester.txt","lo_this_1900="+lo_this_1900+"\n======\n","a");
						}
						
						 fs.write("all-t-pl.txt",mult_opt+";"+profit_los_tester+";"+profit_los_tester_this+";"+min_this_game_total_testerf+";"+sum_gam+"\n","a");
						min_this_game_total_testerf=0;
						hi_this_1900=0;
						lo_this_1900=0;
						hihihi=0
						lololo=0
						flashes="";
						flag_hi_lo=0
						
						var time_arr = arr_counter_for_reset_1900.map(function(num) {
							return num=num-sum_gam;
						});
						arr_counter_for_reset_1900=time_arr
	
						time_arr = arr_counter_1900.map(function(num) {
							return num=num+sum_gam;
						});
						arr_counter_1900=time_arr
						
						sum_gam=0;
						profit_los_tester_this = 0;
						

						
						
						break;//--------------This
					}	 
					
				//	if (rez_bet <= 10000) {//--------------This
						if (rez_bet <= 10000 && tempRandom<0.13) {
						sum_count = sum_count + rez_bet;
						sum_gam = sum_gam + 1;
						ttt++;
						
						//save_log("\nPhantomjs.NEW BET=============================");
						//save_log('Phantomjs.rez_bet=' + rez_bet);
						
						//Strategi ---------------------------------
							if (this_game_total >=0) {
								freshes=0;
								//fs.write(log_file, 'Phantomjs.Create log file = ' + log_file, 'w');
								kpay=5;
								
								if (sush_start==1) {
									sush_start=0;
									//fs.write ("lucky_tester.txt", "Start="+sum_gam+"\n","a");
									start=sum_gam;
								}
								switcher=0;
								reseter=0;
								pausek= 0;
								flag=0
								flag_hi_lo=0
								beton=2
								
								/* if (hi_or_lo=="BET HI") hi_or_lo="BET LO";
								else if (hi_or_lo=="BET LO") hi_or_lo="BET HI" */
							}
							

						timer_8888++;
						timer_1900++;
						all_timer++;
						
						
						
						if (!arr_counter_for_reset_1900[timer_1900]) arr_counter_for_reset_1900[timer_1900]=0;
						if (!arr_counter_1900[timer_1900]) arr_counter_1900[timer_1900]=0;
						
						
						
						
						timer_1000++
						timer_1900hi++;
						timer_1900lo++;
						bingo_value=0;
						// stoplos=0.00000001*5000
						 if (this_game_total<= -1*19999.0355) {
								flashes=flashes+"-----------------"+i_opt+";"+mult_opt+";"+sum_gam+";"+this_game_total+";"+line_log+";"+payout+";"+bet_value+";"+hi_or_lo+";"+this_game_total+
							";"+hi1900+";"+lo1900+";"+hi_this_1900+";"+lo_this_1900+";"+switcher+"\n";
								this_game_total=0;
								this_game_total_tester=0;
							
								
							} 
							
							
						if  (1===1){
							//if (timer_1900==2000) timer_1900 = 0;
							
							
							
							
							
							hi_or_lo = "BET HI"
							
							
							
							/* if(hi_this_1900>0 && hi_this_1900==lo_this_1900) {
								hi_this_1900=0
								lo_this_1900=0
							} */
							
							
							/* if (hi_or_lo == "BET HI" &&  hi_this_1900==4 && lo_this_1900==4 ) hiloswitch = "BET LO"
							if (hi_or_lo == "BET LO" &&  hi_this_1900==4 && lo_this_1900==4 ) hiloswitch = "BET HI" */
							
						/* if (timer_1900>5000) {hi_this_1900=0; lo_this_1900=0}
							if (timer_1900>5000) {hi_this_1900=0; lo_this_1900=0} */
							
						
							//if (hi_this_1900>lo_this_1900)	hi_or_lo = "BET LO";
						
						
							 if (this_game_total<= -1*1) {
								this_game_total=0;
								this_game_total_tester=0;
							} 

							// ---- put strategi here
							if (this_game_total*-1<=512*0.00000001){
										payout = '' + 2;
										bet_value = this_game_total*-1
							}	
							else {
											
									payout = '' + 1900;
									bet_value =0.00000001;
									
									raz=((this_game_total*-1)-bet_value*1899).toFixed(8);
									while (raz>0){
										bet_value= (bet_value+0.00000001);
										raz=((this_game_total*-1)-bet_value*1899).toFixed(8);
									}
								
							}	
	
						}//strategy
						 
						if (bet_value <= 0.00000001) bet_value = 0.00000001;
											
						if (lo_this_1900>=9 && hi_this_1900 <3 ) hi_or_lo = "BET LO"
						if (hi_this_1900>=9 && lo_this_1900<3) hi_or_lo = "BET HI"
							
					
					
						
						
						 
						 
						 
						/* if(timer_8888>11000){
										//if (payout!="1900"){
											if (bet_value <=mult_opt){
												this_game_total_tester=this_game_total_tester-0.00000002;
												this_game_total=this_game_total-0.00000002;
												profit_los_tester=profit_los_tester-0.00000002;
												profit_los=profit_los-0.00000002;
												all_total=all_total-0.00000002;
										
												bingo_value=0.0001;
											}
										//}
									} */
						
							
						if (rez_bet<=6833){
							matrix_3_hi [1]++
							matrix_3_lo [1]=0
						}
						
						if (rez_bet<=8100){
							hi5++
							lo5=0
							
						}
						
						if (rez_bet>=3167){
							matrix_3_lo [1]++
							matrix_3_hi [1]=0
						}
						
						if (rez_bet>=1900){
							hi5=0
							lo5++
						}
						
						
						
/* if (rez_bet<=6833){
							matrix_3_hi [1]++
							matrix_3_lo [1]=0
							
						}
						if (rez_bet>6833){
							if (matrix_3_hi [1]>=stoplos && matrix_3_hi[2]==0){
								matrix_3_hi[2]=1
							} else {
								matrix_3_hi [1]=0
								matrix_3_hi [2]=0
								matrix_3_hi [3]=0
							}
						}
						
						if (rez_bet<=6833){
							if (matrix_3_hi [1]>=stoplos && matrix_3_hi [2]==1){
								matrix_3_hi [3]=1;
							}
						} */
						
						
						
						
						
						
						
							
						if (rez_bet<=5250) hi2++; else hi2=0;
						if (rez_bet<=1364) hi01++; else hi01=0;
						if (rez_bet<=80.00010000) hi5++; else hi5=0;
						if (rez_bet<=9050) hi10++; else hi10=0;
						
						
						if (rez_bet>=9406) lo101++; else lo101=0;
						if (rez_bet>=4750) lo2++; else lo2=0;
						if (rez_bet>=8636) lo01++; else lo01=0;
						if (rez_bet>=1900) lo5++; else lo5=0;
						if (rez_bet>=950) lo10++; else lo10=0		
						
						
						
	
							
					//Strategi --------------------------------- 	

					//if 	(arr_1900_list[timer_1900])  arr_1900_list[timer_1900]=arr_1900_list[timer_1900]+' ; '+rez_bet;
						

						if (rez_bet===8888){
							//fs.write ("lucky_tester.txt","++++++++++" +";"+i_opt+";"+mult_opt+";"+sum_gam+";"+line_log+";"+payout+";"+bet_value+";"+hi_or_lo+";"+this_game_total+"\n","a");
							
							flashes = flashes+arr_counter_for_reset_1900[timer_1900]+";"+timer_1900+";"+timer_1900_count+";"+timer_8888+";"+bet_value+";"+hi_or_lo+";"+payout+";"+rez_bet+";"+sum_gam+";"+this_game_total+";"+line_log+";"+payout+";"+bet_value+";"+hi_or_lo+";"+this_game_total+
							";"+hi1900+";"+lo1900+";"+hi_this_1900+";"+lo_this_1900+";"+switcher+";"+hi_or_lo+"\n";
							
							fs.write("timer_8888.csv", all_timer+','+rez_bet+','+timer_8888+','+hi_or_lo+','+payout+','+line_log+'\n', 'a');
							
							//if (!arr_8888[timer_8888]) arr_8888[timer_8888]=1; else arr_1900[timer_8888]++;
							timer_8888=0;
						}
						
						if (rez_bet > 9995){
							flashes = flashes+arr_counter_for_reset_1900[timer_1900]+";"+timer_1900+";"+timer_1900_count+";"+timer_8888+";"+bet_value+";"+hi_or_lo+";"+payout+";"+rez_bet+";"+sum_gam+";"+this_game_total+";"+line_log+";"+payout+";"+bet_value+";"+hi_or_lo+";"+this_game_total+
							";"+hi1900+";"+lo1900+";"+hi_this_1900+";"+lo_this_1900+";"+switcher+";"+hi_or_lo+"\n";
							//hi_or_lo="BET HI"
							
							fs.write("timer_1900.csv", all_timer+','+rez_bet+','+timer_1900+','+hi_or_lo+','+payout+','+line_log+'\n', 'a');
							
							//if (!arr_1900[timer_1900]) arr_1900[timer_1900]=1; else arr_1900[timer_1900]++;
							//if (arr_1900[timer_1900]==2) arr_1900[timer_1900]=undefined
							
							if 	(!arr_1900_list[timer_1900]) arr_1900_list[timer_1900]=ttt+'_'+rez_bet; 
							else if (arr_1900_list[timer_1900]) arr_1900_list[timer_1900]= arr_1900_list[timer_1900]+' ; '+ttt+'_'+rez_bet; 
							
						
							console.log (ttt+'  '+arr_counter_for_reset_1900[timer_1900]+'  '+timer_1900+'   '+bet_value+'   '+rez_bet)
							
							
							arr_counter_for_reset_1900[timer_1900]=300000;
							arr_counter_1900[timer_1900]=0;
							
							hi1900++;
							hi_this_1900++;
							timer_1900=0;
							timer_1900_count=0;
							//if(bet_value>optcount)hiloswitch="BET HI"
							
							timer_1900hi=0
							hihihi++;
							lololo=0;
						}
						
						
						if (rez_bet < 5){
							//hi_or_lo="BET LO"
							
						flashes = flashes+arr_counter_for_reset_1900[timer_1900]+";"+timer_1900+";"+timer_1900_count+";"+timer_8888+";"+bet_value+";"+hi_or_lo+";"+payout+";"+rez_bet+";"+sum_gam+";"+this_game_total+";"+line_log+";"+payout+";"+bet_value+";"+hi_or_lo+";"+this_game_total+
							";"+hi1900+";"+lo1900+";"+hi_this_1900+";"+lo_this_1900+";"+switcher+";"+hi_or_lo+"\n";
						
						fs.write("timer_1900.csv", all_timer+','+rez_bet+','+timer_1900+','+hi_or_lo+','+payout+','+line_log+'\n', 'a');
						
							
							
							//if (!arr_1900[timer_1900]) arr_1900[timer_1900]=1; else arr_1900[timer_1900]++;
							//if (arr_1900[timer_1900]==2) arr_1900[timer_1900]=undefined
						
							
							if 	(!arr_1900_list[timer_1900]) arr_1900_list[timer_1900]=ttt+'_'+rez_bet; 
							else if (arr_1900_list[timer_1900]) arr_1900_list[timer_1900]= arr_1900_list[timer_1900]+' ; '+ttt+'_'+rez_bet; 
							
							console.log (ttt+'  '+arr_counter_for_reset_1900[timer_1900]+'  '+timer_1900+'   '+bet_value+'   '+rez_bet)
							
							arr_counter_for_reset_1900[timer_1900]=300000;
							arr_counter_1900[timer_1900]=0;
							
							lo1900++;
							lo_this_1900++;
							
							timer_1900=0;
							timer_1900_count=0;
							
							//if(bet_value>optcount)	hiloswitch="BET LO"
							
							
							timer_1900lo=0
							lololo++
							hihihi=0
							
						}
						
						
						
						
					bet_value = parseFloat(bet_value);
					bet_value = bet_value.toFixed(8);
					bet_value = parseFloat(bet_value);

					switch (payout) {


		case '1.1': // if (x === 'value1')
							higer_then = 1364;
							lower_then = 8636;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '1.01': // if (x === 'value2')
							higer_then = 594;
							lower_then = 9406;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;
					
					
case '2':
higer_then = 5250;
lower_then = 4750;
win_tester = bet_value * (parseFloat(2.00) - 1);
break;

case '3':
higer_then = 6833;
lower_then = 3167;
win_tester = bet_value * (parseFloat(3.00) - 1);
break;

case '4':
higer_then = 7625;
lower_then = 2375;
win_tester = bet_value * (parseFloat(4.00) - 1);
break;

case '5':
higer_then = 8100;
lower_then = 1900;
win_tester = bet_value * (parseFloat(5.00) - 1);
break;

case '6':
higer_then = 8417;
lower_then = 1583;
win_tester = bet_value * (parseFloat(6.00) - 1);
break;

case '7':
higer_then = 8643;
lower_then = 1357;
win_tester = bet_value * (parseFloat(7.00) - 1);
break;

case '8':
higer_then = 8813;
lower_then = 1188;
win_tester = bet_value * (parseFloat(8.00) - 1);
break;

case '9':
higer_then = 8944;
lower_then = 1056;
win_tester = bet_value * (parseFloat(9.00) - 1);
break;

case '10':
higer_then = 9050;
lower_then = 950;
win_tester = bet_value * (parseFloat(10.00) - 1);
break;

case '11':
higer_then = 9136;
lower_then = 864;
win_tester = bet_value * (parseFloat(11.00) - 1);
break;

case '12':
higer_then = 9208;
lower_then = 792;
win_tester = bet_value * (parseFloat(11.99) - 1);
break;

case '13':
higer_then = 9269;
lower_then = 731;
win_tester = bet_value * (parseFloat(13.00) - 1);
break;

case '14':
higer_then = 9321;
lower_then = 679;
win_tester = bet_value * (parseFloat(13.99) - 1);
break;

case '15':
higer_then = 9367;
lower_then = 633;
win_tester = bet_value * (parseFloat(15.01) - 1);
break;

case '16':
higer_then = 9406;
lower_then = 594;
win_tester = bet_value * (parseFloat(15.99) - 1);
break;

case '17':
higer_then = 9441;
lower_then = 559;
win_tester = bet_value * (parseFloat(16.99) - 1);
break;

case '18':
higer_then = 9472;
lower_then = 528;
win_tester = bet_value * 16;
break;

case '19':
higer_then = 9500;
lower_then = 500;
win_tester = bet_value * (parseFloat(19.00) - 1);
break;

case '20':
higer_then = 9525;
lower_then = 475;
win_tester = bet_value * (parseFloat(20.00) - 1);
break;

case '21':
higer_then = 9548;
lower_then = 452;
win_tester = bet_value * (parseFloat(21.02) - 1);
break;

case '22':
higer_then = 9568;
lower_then = 432;
win_tester = bet_value * (parseFloat(21.99) - 1);
break;

case '23':
higer_then = 9587;
lower_then = 413;
win_tester = bet_value * (parseFloat(23.00) - 1);
break;

case '24':
higer_then = 9604;
lower_then = 396;
win_tester = bet_value * (parseFloat(23.99) - 1);
break;

case '25':
higer_then = 9620;
lower_then = 380;
win_tester = bet_value * (parseFloat(25.00) - 1);
break;

case '26':
higer_then = 9635;
lower_then = 365;
win_tester = bet_value * (parseFloat(26.03) - 1);
break;

case '27':
higer_then = 9648;
lower_then = 352;
win_tester = bet_value * (parseFloat(26.99) - 1);
break;

case '28':
higer_then = 9661;
lower_then = 339;
win_tester = bet_value * (parseFloat(28.02) - 1);
break;

case '29':
higer_then = 9672;
lower_then = 328;
win_tester = bet_value * (parseFloat(28.96) - 1);
break;

case '30':
higer_then = 9683;
lower_then = 317;
win_tester = bet_value * 28;
break;

case '31':
higer_then = 9694;
lower_then = 306;
win_tester = bet_value * (parseFloat(31.05) - 1);
break;

case '32':
higer_then = 9703;
lower_then = 297;
win_tester = bet_value * (parseFloat(31.99) - 1);
break;

case '33':
higer_then = 9712;
lower_then = 288;
win_tester = bet_value * (parseFloat(32.99) - 1);
break;

case '34':
higer_then = 9721;
lower_then = 279;
win_tester = bet_value * (parseFloat(34.05) - 1);
break;

case '35':
higer_then = 9729;
lower_then = 271;
win_tester = bet_value * (parseFloat(35.06) - 1);
break;

case '36':
higer_then = 9736;
lower_then = 264;
win_tester = bet_value * (parseFloat(35.98) - 1);
break;

case '37':
higer_then = 9743;
lower_then = 257;
win_tester = bet_value * (parseFloat(36.96) - 1);
break;

case '38':
higer_then = 9750;
lower_then = 250;
win_tester = bet_value * (parseFloat(38.00) - 1);
break;

case '39':
higer_then = 9756;
lower_then = 244;
win_tester = bet_value * (parseFloat(38.93) - 1);
break;

case '40':
higer_then = 9762;
lower_then = 238;
win_tester = bet_value * 38;
break;

case '41':
higer_then = 9768;
lower_then = 232;
win_tester = bet_value * (parseFloat(40.95) - 1);
break;

case '42':
higer_then = 9774;
lower_then = 226;
win_tester = bet_value * (parseFloat(42.04) - 1);
break;

case '43':
higer_then = 9779;
lower_then = 221;
win_tester = bet_value * (parseFloat(42.99) - 1);
break;

case '44':
higer_then = 9784;
lower_then = 216;
win_tester = bet_value * (parseFloat(43.98) - 1);
break;

case '45':
higer_then = 9789;
lower_then = 211;
win_tester = bet_value * (parseFloat(45.02) - 1);
break;

case '46':
higer_then = 9793;
lower_then = 207;
win_tester = bet_value * (parseFloat(45.89) - 1);
break;

case '47':
higer_then = 9798;
lower_then = 202;
win_tester = bet_value * (parseFloat(47.03) - 1);
break;

case '48':
higer_then = 9802;
lower_then = 198;
win_tester = bet_value * (parseFloat(47.98) - 1);
break;

case '49':
higer_then = 9806;
lower_then = 194;
win_tester = bet_value * (parseFloat(48.97) - 1);
break;

case '50':
higer_then = 9810;
lower_then = 190;
win_tester = bet_value * (parseFloat(50.00) - 1);
break;

case '51':
higer_then = 9814;
lower_then = 186;
win_tester = bet_value * (parseFloat(51.08) - 1);
break;

case '52':
higer_then = 9817;
lower_then = 183;
win_tester = bet_value * (parseFloat(51.91) - 1);
break;

case '53':
higer_then = 9821;
lower_then = 179;
win_tester = bet_value * (parseFloat(53.07) - 1);
break;

case '54':
higer_then = 9824;
lower_then = 176;
win_tester = bet_value * (parseFloat(53.98) - 1);
break;

case '55':
higer_then = 9827;
lower_then = 173;
win_tester = bet_value * 53;
break;

case '56':
higer_then = 9830;
lower_then = 170;
win_tester = bet_value * (parseFloat(55.88) - 1);
break;

case '57':
higer_then = 9833;
lower_then = 167;
win_tester = bet_value * (parseFloat(56.89) - 1);
break;

case '58':
higer_then = 9836;
lower_then = 164;
win_tester = bet_value * (parseFloat(57.93) - 1);
break;

case '59':
higer_then = 9839;
lower_then = 161;
win_tester = bet_value * (parseFloat(59.01) - 1);
break;

case '60':
higer_then = 9842;
lower_then = 158;
win_tester = bet_value * (parseFloat(60.13) - 1);
break;

case '61':
higer_then = 9844;
lower_then = 156;
win_tester = bet_value * (parseFloat(60.90) - 1);
break;

case '62':
higer_then = 9847;
lower_then = 153;
win_tester = bet_value * (parseFloat(62.09) - 1);
break;

case '63':
higer_then = 9849;
lower_then = 151;
win_tester = bet_value * (parseFloat(62.91) - 1);
break;

case '64':
higer_then = 9852;
lower_then = 148;
win_tester = bet_value * (parseFloat(64.19) - 1);
break;

case '65':
higer_then = 9854;
lower_then = 146;
win_tester = bet_value * (parseFloat(65.07) - 1);
break;

case '66':
higer_then = 9856;
lower_then = 144;
win_tester = bet_value * (parseFloat(65.97) - 1);
break;

case '67':
higer_then = 9858;
lower_then = 142;
win_tester = bet_value * (parseFloat(66.90) - 1);
break;

case '68':
higer_then = 9860;
lower_then = 140;
win_tester = bet_value * (parseFloat(67.86) - 1);
break;

case '69':
higer_then = 9862;
lower_then = 138;
win_tester = bet_value * (parseFloat(68.84) - 1);
break;

case '70':
higer_then = 9864;
lower_then = 136;
win_tester = bet_value * 68;
break;

case '71':
higer_then = 9866;
lower_then = 134;
win_tester = bet_value * (parseFloat(70.90) - 1);
break;

case '72':
higer_then = 9868;
lower_then = 132;
win_tester = bet_value * (parseFloat(71.97) - 1);
break;

case '73':
higer_then = 9870;
lower_then = 130;
win_tester = bet_value * (parseFloat(73.08) - 1);
break;

case '74':
higer_then = 9872;
lower_then = 128;
win_tester = bet_value * (parseFloat(74.22) - 1);
break;

case '75':
higer_then = 9873;
lower_then = 127;
win_tester = bet_value * 73;
break;

case '76':
higer_then = 9875;
lower_then = 125;
win_tester = bet_value * (parseFloat(76.00) - 1);
break;

case '77':
higer_then = 9877;
lower_then = 123;
win_tester = bet_value * (parseFloat(77.24) - 1);
break;

case '78':
higer_then = 9878;
lower_then = 122;
win_tester = bet_value * (parseFloat(77.87) - 1);
break;

case '79':
higer_then = 9880;
lower_then = 120;
win_tester = bet_value * (parseFloat(79.17) - 1);
break;

case '80':
higer_then = 9881;
lower_then = 119;
win_tester = bet_value * (parseFloat(79.83) - 1);
break;

case '81':
higer_then = 9883;
lower_then = 117;
win_tester = bet_value * (parseFloat(81.20) - 1);
break;

case '82':
higer_then = 9884;
lower_then = 116;
win_tester = bet_value * (parseFloat(81.90) - 1);
break;

case '83':
higer_then = 9886;
lower_then = 114;
win_tester = bet_value * (parseFloat(83.33) - 1);
break;

case '84':
higer_then = 9887;
lower_then = 113;
win_tester = bet_value * (parseFloat(84.07) - 1);
break;

case '85':
higer_then = 9888;
lower_then = 112;
win_tester = bet_value * 83;
break;

case '86':
higer_then = 9890;
lower_then = 110;
win_tester = bet_value * (parseFloat(86.36) - 1);
break;

case '87':
higer_then = 9891;
lower_then = 109;
win_tester = bet_value * (parseFloat(87.16) - 1);
break;

case '88':
higer_then = 9892;
lower_then = 108;
win_tester = bet_value * (parseFloat(87.96) - 1);
break;

case '89':
higer_then = 9893;
lower_then = 107;
win_tester = bet_value * (parseFloat(88.79) - 1);
break;

case '90':
higer_then = 9894;
lower_then = 106;
win_tester = bet_value * 88;
break;

case '91':
higer_then = 9896;
lower_then = 104;
win_tester = bet_value * (parseFloat(91.35) - 1);
break;

case '92':
higer_then = 9897;
lower_then = 103;
win_tester = bet_value * (parseFloat(92.23) - 1);
break;

case '93':
higer_then = 9898;
lower_then = 102;
win_tester = bet_value * (parseFloat(93.14) - 1);
break;

case '94':
higer_then = 9899;
lower_then = 101;
win_tester = bet_value * (parseFloat(94.06) - 1);
break;

case '95':
higer_then = 9900;
lower_then = 100;
win_tester = bet_value * (parseFloat(95.00) - 1);
break;

case '96':
higer_then = 9901;
lower_then = 99;
win_tester = bet_value * (parseFloat(95.96) - 1);
break;

case '97':
higer_then = 9902;
lower_then = 98;
win_tester = bet_value * (parseFloat(96.94) - 1);
break;

case '98':
higer_then = 9903;
lower_then = 97;
win_tester = bet_value * (parseFloat(97.94) - 1);
break;

case '99':
higer_then = 9904;
lower_then = 96;
win_tester = bet_value * (parseFloat(98.96) - 1);
break;

case '100':
higer_then = 9905;
lower_then = 95;
win_tester = bet_value * (parseFloat(100.00) - 1);
break;

case '101':
higer_then = 9906;
lower_then = 94;
win_tester = bet_value * (parseFloat(101.06) - 1);
break;

case '102':
higer_then = 9907;
lower_then = 93;
win_tester = bet_value * (parseFloat(102.15) - 1);
break;

case '103':
higer_then = 9908;
lower_then = 92;
win_tester = bet_value * (parseFloat(103.26) - 1);
break;

case '104':
higer_then = 9909;
lower_then = 91;
win_tester = bet_value * (parseFloat(104.40) - 1);
break;

case '105':
higer_then = 9910;
lower_then = 90;
win_tester = bet_value * (parseFloat(105.56) - 1);
break;

case '106':
higer_then = 9910;
lower_then = 90;
win_tester = bet_value * (parseFloat(105.56) - 1);
break;

case '107':
higer_then = 9911;
lower_then = 89;
win_tester = bet_value * (parseFloat(106.74) - 1);
break;

case '108':
higer_then = 9912;
lower_then = 88;
win_tester = bet_value * (parseFloat(107.95) - 1);
break;

case '109':
higer_then = 9913;
lower_then = 87;
win_tester = bet_value * (parseFloat(109.20) - 1);
break;

case '110':
higer_then = 9914;
lower_then = 86;
win_tester = bet_value * (parseFloat(110.47) - 1);
break;

case '111':
higer_then = 9914;
lower_then = 86;
win_tester = bet_value * (parseFloat(110.47) - 1);
break;

case '112':
higer_then = 9915;
lower_then = 85;
win_tester = bet_value * (parseFloat(111.76) - 1);
break;

case '113':
higer_then = 9916;
lower_then = 84;
win_tester = bet_value * (parseFloat(113.10) - 1);
break;

case '114':
higer_then = 9917;
lower_then = 83;
win_tester = bet_value * (parseFloat(114.46) - 1);
break;

case '115':
higer_then = 9917;
lower_then = 83;
win_tester = bet_value * (parseFloat(114.46) - 1);
break;

case '116':
higer_then = 9918;
lower_then = 82;
win_tester = bet_value * (parseFloat(115.85) - 1);
break;

case '117':
higer_then = 9919;
lower_then = 81;
win_tester = bet_value * (parseFloat(117.28) - 1);
break;

case '118':
higer_then = 9919;
lower_then = 81;
win_tester = bet_value * (parseFloat(117.28) - 1);
break;

case '119':
higer_then = 9920;
lower_then = 80;
win_tester = bet_value * (parseFloat(118.75) - 1);
break;

case '120':
higer_then = 9921;
lower_then = 79;
win_tester = bet_value * (parseFloat(120.25) - 1);
break;

case '121':
higer_then = 9921;
lower_then = 79;
win_tester = bet_value * (parseFloat(120.25) - 1);
break;

case '122':
higer_then = 9922;
lower_then = 78;
win_tester = bet_value * (parseFloat(121.79) - 1);
break;

case '123':
higer_then = 9923;
lower_then = 77;
win_tester = bet_value * (parseFloat(123.38) - 1);
break;

case '124':
higer_then = 9923;
lower_then = 77;
win_tester = bet_value * (parseFloat(123.38) - 1);
break;

case '125':
higer_then = 9924;
lower_then = 76;
win_tester = bet_value * (parseFloat(125.00) - 1);
break;

case '126':
higer_then = 9925;
lower_then = 75;
win_tester = bet_value * (parseFloat(126.67) - 1);
break;

case '127':
higer_then = 9925;
lower_then = 75;
win_tester = bet_value * (parseFloat(126.67) - 1);
break;

case '128':
higer_then = 9926;
lower_then = 74;
win_tester = bet_value * (parseFloat(128.38) - 1);
break;

case '129':
higer_then = 9926;
lower_then = 74;
win_tester = bet_value * (parseFloat(128.38) - 1);
break;

case '130':
higer_then = 9927;
lower_then = 73;
win_tester = bet_value * (parseFloat(130.14) - 1);
break;

case '131':
higer_then = 9927;
lower_then = 73;
win_tester = bet_value * (parseFloat(130.14) - 1);
break;

case '132':
higer_then = 9928;
lower_then = 72;
win_tester = bet_value * (parseFloat(131.94) - 1);
break;

case '133':
higer_then = 9929;
lower_then = 71;
win_tester = bet_value * (parseFloat(133.80) - 1);
break;

case '134':
higer_then = 9929;
lower_then = 71;
win_tester = bet_value * (parseFloat(133.80) - 1);
break;

case '135':
higer_then = 9930;
lower_then = 70;
win_tester = bet_value * (parseFloat(135.71) - 1);
break;

case '136':
higer_then = 9930;
lower_then = 70;
win_tester = bet_value * (parseFloat(135.71) - 1);
break;

case '137':
higer_then = 9931;
lower_then = 69;
win_tester = bet_value * (parseFloat(137.68) - 1);
break;

case '138':
higer_then = 9931;
lower_then = 69;
win_tester = bet_value * (parseFloat(137.68) - 1);
break;

case '139':
higer_then = 9932;
lower_then = 68;
win_tester = bet_value * (parseFloat(139.71) - 1);
break;

case '140':
higer_then = 9932;
lower_then = 68;
win_tester = bet_value * (parseFloat(139.71) - 1);
break;

case '141':
higer_then = 9933;
lower_then = 67;
win_tester = bet_value * (parseFloat(141.79) - 1);
break;

case '142':
higer_then = 9933;
lower_then = 67;
win_tester = bet_value * (parseFloat(141.79) - 1);
break;

case '143':
higer_then = 9934;
lower_then = 66;
win_tester = bet_value * (parseFloat(143.94) - 1);
break;

case '144':
higer_then = 9934;
lower_then = 66;
win_tester = bet_value * (parseFloat(143.94) - 1);
break;

case '145':
higer_then = 9934;
lower_then = 66;
win_tester = bet_value * (parseFloat(143.94) - 1);
break;

case '146':
higer_then = 9935;
lower_then = 65;
win_tester = bet_value * (parseFloat(146.15) - 1);
break;

case '147':
higer_then = 9935;
lower_then = 65;
win_tester = bet_value * (parseFloat(146.15) - 1);
break;

case '148':
higer_then = 9936;
lower_then = 64;
win_tester = bet_value * (parseFloat(148.44) - 1);
break;

case '149':
higer_then = 9936;
lower_then = 64;
win_tester = bet_value * (parseFloat(148.44) - 1);
break;

case '150':
higer_then = 9937;
lower_then = 63;
win_tester = bet_value * 149;
break;

case '151':
higer_then = 9937;
lower_then = 63;
win_tester = bet_value * (parseFloat(150.79) - 1);
break;

case '152':
higer_then = 9937;
lower_then = 63;
win_tester = bet_value * (parseFloat(150.79) - 1);
break;

case '153':
higer_then = 9938;
lower_then = 62;
win_tester = bet_value * (parseFloat(153.23) - 1);
break;

case '154':
higer_then = 9938;
lower_then = 62;
win_tester = bet_value * (parseFloat(153.23) - 1);
break;

case '155':
higer_then = 9939;
lower_then = 61;
win_tester = bet_value * (parseFloat(155.74) - 1);
break;

case '156':
higer_then = 9939;
lower_then = 61;
win_tester = bet_value * (parseFloat(155.74) - 1);
break;

case '157':
higer_then = 9939;
lower_then = 61;
win_tester = bet_value * (parseFloat(155.74) - 1);
break;

case '158':
higer_then = 9940;
lower_then = 60;
win_tester = bet_value * (parseFloat(158.33) - 1);
break;

case '159':
higer_then = 9940;
lower_then = 60;
win_tester = bet_value * (parseFloat(158.33) - 1);
break;

case '160':
higer_then = 9941;
lower_then = 59;
win_tester = bet_value * (parseFloat(161.02) - 1);
break;

case '161':
higer_then = 9941;
lower_then = 59;
win_tester = bet_value * (parseFloat(161.02) - 1);
break;

case '162':
higer_then = 9941;
lower_then = 59;
win_tester = bet_value * (parseFloat(161.02) - 1);
break;

case '163':
higer_then = 9942;
lower_then = 58;
win_tester = bet_value * (parseFloat(163.79) - 1);
break;

case '164':
higer_then = 9942;
lower_then = 58;
win_tester = bet_value * (parseFloat(163.79) - 1);
break;

case '165':
higer_then = 9942;
lower_then = 58;
win_tester = bet_value * (parseFloat(163.79) - 1);
break;

case '166':
higer_then = 9943;
lower_then = 57;
win_tester = bet_value * (parseFloat(166.67) - 1);
break;

case '167':
higer_then = 9943;
lower_then = 57;
win_tester = bet_value * (parseFloat(166.67) - 1);
break;

case '168':
higer_then = 9943;
lower_then = 57;
win_tester = bet_value * (parseFloat(166.67) - 1);
break;

case '169':
higer_then = 9944;
lower_then = 56;
win_tester = bet_value * (parseFloat(169.64) - 1);
break;

case '170':
higer_then = 9944;
lower_then = 56;
win_tester = bet_value * (parseFloat(169.64) - 1);
break;

case '171':
higer_then = 9944;
lower_then = 56;
win_tester = bet_value * (parseFloat(169.64) - 1);
break;

case '172':
higer_then = 9945;
lower_then = 55;
win_tester = bet_value * (parseFloat(172.73) - 1);
break;

case '173':
higer_then = 9945;
lower_then = 55;
win_tester = bet_value * (parseFloat(172.73) - 1);
break;

case '174':
higer_then = 9945;
lower_then = 55;
win_tester = bet_value * (parseFloat(172.73) - 1);
break;

case '175':
higer_then = 9946;
lower_then = 54;
win_tester = bet_value * (parseFloat(175.93) - 1);
break;

case '176':
higer_then = 9946;
lower_then = 54;
win_tester = bet_value * (parseFloat(175.93) - 1);
break;

case '177':
higer_then = 9946;
lower_then = 54;
win_tester = bet_value * (parseFloat(175.93) - 1);
break;

case '178':
higer_then = 9947;
lower_then = 53;
win_tester = bet_value * (parseFloat(179.25) - 1);
break;

case '179':
higer_then = 9947;
lower_then = 53;
win_tester = bet_value * (parseFloat(179.25) - 1);
break;

case '180':
higer_then = 9947;
lower_then = 53;
win_tester = bet_value * (parseFloat(179.25) - 1);
break;

case '181':
higer_then = 9948;
lower_then = 52;
win_tester = bet_value * (parseFloat(182.69) - 1);
break;

case '182':
higer_then = 9948;
lower_then = 52;
win_tester = bet_value * (parseFloat(182.69) - 1);
break;

case '183':
higer_then = 9948;
lower_then = 52;
win_tester = bet_value * (parseFloat(182.69) - 1);
break;

case '184':
higer_then = 9948;
lower_then = 52;
win_tester = bet_value * (parseFloat(182.69) - 1);
break;

case '185':
higer_then = 9949;
lower_then = 51;
win_tester = bet_value * (parseFloat(186.27) - 1);
break;

case '186':
higer_then = 9949;
lower_then = 51;
win_tester = bet_value * (parseFloat(186.27) - 1);
break;

case '187':
higer_then = 9949;
lower_then = 51;
win_tester = bet_value * (parseFloat(186.27) - 1);
break;

case '188':
higer_then = 9949;
lower_then = 51;
win_tester = bet_value * (parseFloat(186.27) - 1);
break;

case '189':
higer_then = 9950;
lower_then = 50;
win_tester = bet_value * (parseFloat(190.00) - 1);
break;

case '190':
higer_then = 9950;
lower_then = 50;
win_tester = bet_value * (parseFloat(190.00) - 1);
break;

case '191':
higer_then = 9950;
lower_then = 50;
win_tester = bet_value * (parseFloat(190.00) - 1);
break;

case '192':
higer_then = 9951;
lower_then = 49;
win_tester = bet_value * (parseFloat(193.88) - 1);
break;

case '193':
higer_then = 9951;
lower_then = 49;
win_tester = bet_value * (parseFloat(193.88) - 1);
break;

case '194':
higer_then = 9951;
lower_then = 49;
win_tester = bet_value * (parseFloat(193.88) - 1);
break;

case '195':
higer_then = 9951;
lower_then = 49;
win_tester = bet_value * (parseFloat(193.88) - 1);
break;

case '196':
higer_then = 9952;
lower_then = 48;
win_tester = bet_value * (parseFloat(197.92) - 1);
break;

case '197':
higer_then = 9952;
lower_then = 48;
win_tester = bet_value * (parseFloat(197.92) - 1);
break;

case '198':
higer_then = 9952;
lower_then = 48;
win_tester = bet_value * (parseFloat(197.92) - 1);
break;

case '199':
higer_then = 9952;
lower_then = 48;
win_tester = bet_value * (parseFloat(197.92) - 1);
break;

case '200':
higer_then = 9952;
lower_then = 48;
win_tester = bet_value * 196;
break;

case '201':
higer_then = 9953;
lower_then = 47;
win_tester = bet_value * (parseFloat(202.13) - 1);
break;

case '202':
higer_then = 9953;
lower_then = 47;
win_tester = bet_value * (parseFloat(202.13) - 1);
break;

case '203':
higer_then = 9953;
lower_then = 47;
win_tester = bet_value * (parseFloat(202.13) - 1);
break;

case '204':
higer_then = 9953;
lower_then = 47;
win_tester = bet_value * (parseFloat(202.13) - 1);
break;

case '205':
higer_then = 9954;
lower_then = 46;
win_tester = bet_value * (parseFloat(206.52) - 1);
break;

case '206':
higer_then = 9954;
lower_then = 46;
win_tester = bet_value * (parseFloat(206.52) - 1);
break;

case '207':
higer_then = 9954;
lower_then = 46;
win_tester = bet_value * (parseFloat(206.52) - 1);
break;

case '208':
higer_then = 9954;
lower_then = 46;
win_tester = bet_value * (parseFloat(206.52) - 1);
break;

case '209':
higer_then = 9955;
lower_then = 45;
win_tester = bet_value * (parseFloat(211.11) - 1);
break;

case '210':
higer_then = 9955;
lower_then = 45;
win_tester = bet_value * (parseFloat(211.11) - 1);
break;

case '211':
higer_then = 9955;
lower_then = 45;
win_tester = bet_value * (parseFloat(211.11) - 1);
break;

case '212':
higer_then = 9955;
lower_then = 45;
win_tester = bet_value * (parseFloat(211.11) - 1);
break;

case '213':
higer_then = 9955;
lower_then = 45;
win_tester = bet_value * (parseFloat(211.11) - 1);
break;

case '214':
higer_then = 9956;
lower_then = 44;
win_tester = bet_value * (parseFloat(215.91) - 1);
break;

case '215':
higer_then = 9956;
lower_then = 44;
win_tester = bet_value * (parseFloat(215.91) - 1);
break;

case '216':
higer_then = 9956;
lower_then = 44;
win_tester = bet_value * (parseFloat(215.91) - 1);
break;

case '217':
higer_then = 9956;
lower_then = 44;
win_tester = bet_value * (parseFloat(215.91) - 1);
break;

case '218':
higer_then = 9956;
lower_then = 44;
win_tester = bet_value * (parseFloat(215.91) - 1);
break;

case '219':
higer_then = 9957;
lower_then = 43;
win_tester = bet_value * (parseFloat(220.93) - 1);
break;

case '220':
higer_then = 9957;
lower_then = 43;
win_tester = bet_value * (parseFloat(220.93) - 1);
break;

case '221':
higer_then = 9957;
lower_then = 43;
win_tester = bet_value * (parseFloat(220.93) - 1);
break;

case '222':
higer_then = 9957;
lower_then = 43;
win_tester = bet_value * (parseFloat(220.93) - 1);
break;

case '223':
higer_then = 9957;
lower_then = 43;
win_tester = bet_value * (parseFloat(220.93) - 1);
break;

case '224':
higer_then = 9958;
lower_then = 42;
win_tester = bet_value * (parseFloat(226.19) - 1);
break;

case '225':
higer_then = 9958;
lower_then = 42;
win_tester = bet_value * (parseFloat(226.19) - 1);
break;

case '226':
higer_then = 9958;
lower_then = 42;
win_tester = bet_value * (parseFloat(226.19) - 1);
break;

case '227':
higer_then = 9958;
lower_then = 42;
win_tester = bet_value * (parseFloat(226.19) - 1);
break;

case '228':
higer_then = 9958;
lower_then = 42;
win_tester = bet_value * (parseFloat(226.19) - 1);
break;

case '229':
higer_then = 9959;
lower_then = 41;
win_tester = bet_value * (parseFloat(231.71) - 1);
break;

case '230':
higer_then = 9959;
lower_then = 41;
win_tester = bet_value * (parseFloat(231.71) - 1);
break;

case '231':
higer_then = 9959;
lower_then = 41;
win_tester = bet_value * (parseFloat(231.71) - 1);
break;

case '232':
higer_then = 9959;
lower_then = 41;
win_tester = bet_value * (parseFloat(231.71) - 1);
break;

case '233':
higer_then = 9959;
lower_then = 41;
win_tester = bet_value * (parseFloat(231.71) - 1);
break;

case '234':
higer_then = 9959;
lower_then = 41;
win_tester = bet_value * (parseFloat(231.71) - 1);
break;

case '235':
higer_then = 9960;
lower_then = 40;
win_tester = bet_value * (parseFloat(237.50) - 1);
break;

case '236':
higer_then = 9960;
lower_then = 40;
win_tester = bet_value * (parseFloat(237.50) - 1);
break;

case '237':
higer_then = 9960;
lower_then = 40;
win_tester = bet_value * (parseFloat(237.50) - 1);
break;

case '238':
higer_then = 9960;
lower_then = 40;
win_tester = bet_value * (parseFloat(237.50) - 1);
break;

case '239':
higer_then = 9960;
lower_then = 40;
win_tester = bet_value * (parseFloat(237.50) - 1);
break;

case '240':
higer_then = 9960;
lower_then = 40;
win_tester = bet_value * (parseFloat(237.50) - 1);
break;

case '241':
higer_then = 9961;
lower_then = 39;
win_tester = bet_value * (parseFloat(243.59) - 1);
break;

case '242':
higer_then = 9961;
lower_then = 39;
win_tester = bet_value * (parseFloat(243.59) - 1);
break;

case '243':
higer_then = 9961;
lower_then = 39;
win_tester = bet_value * (parseFloat(243.59) - 1);
break;

case '244':
higer_then = 9961;
lower_then = 39;
win_tester = bet_value * (parseFloat(243.59) - 1);
break;

case '245':
higer_then = 9961;
lower_then = 39;
win_tester = bet_value * (parseFloat(243.59) - 1);
break;

case '246':
higer_then = 9961;
lower_then = 39;
win_tester = bet_value * (parseFloat(243.59) - 1);
break;

case '247':
higer_then = 9962;
lower_then = 38;
win_tester = bet_value * (parseFloat(250.00) - 1);
break;

case '248':
higer_then = 9962;
lower_then = 38;
win_tester = bet_value * (parseFloat(250.00) - 1);
break;

case '249':
higer_then = 9962;
lower_then = 38;
win_tester = bet_value * (parseFloat(250.00) - 1);
break;

case '250':
higer_then = 9962;
lower_then = 38;
win_tester = bet_value * (parseFloat(250.00) - 1);
break;

case '251':
higer_then = 9962;
lower_then = 38;
win_tester = bet_value * (parseFloat(250.00) - 1);
break;

case '252':
higer_then = 9962;
lower_then = 38;
win_tester = bet_value * (parseFloat(250.00) - 1);
break;

case '253':
higer_then = 9962;
lower_then = 38;
win_tester = bet_value * (parseFloat(250.00) - 1);
break;

case '254':
higer_then = 9963;
lower_then = 37;
win_tester = bet_value * (parseFloat(256.76) - 1);
break;

case '255':
higer_then = 9963;
lower_then = 37;
win_tester = bet_value * (parseFloat(256.76) - 1);
break;

case '256':
higer_then = 9963;
lower_then = 37;
win_tester = bet_value * (parseFloat(256.76) - 1);
break;

case '257':
higer_then = 9963;
lower_then = 37;
win_tester = bet_value * (parseFloat(256.76) - 1);
break;

case '258':
higer_then = 9963;
lower_then = 37;
win_tester = bet_value * (parseFloat(256.76) - 1);
break;

case '259':
higer_then = 9963;
lower_then = 37;
win_tester = bet_value * (parseFloat(256.76) - 1);
break;

case '260':
higer_then = 9963;
lower_then = 37;
win_tester = bet_value * (parseFloat(256.76) - 1);
break;

case '261':
higer_then = 9964;
lower_then = 36;
win_tester = bet_value * (parseFloat(263.89) - 1);
break;

case '262':
higer_then = 9964;
lower_then = 36;
win_tester = bet_value * (parseFloat(263.89) - 1);
break;

case '263':
higer_then = 9964;
lower_then = 36;
win_tester = bet_value * (parseFloat(263.89) - 1);
break;

case '264':
higer_then = 9964;
lower_then = 36;
win_tester = bet_value * (parseFloat(263.89) - 1);
break;

case '265':
higer_then = 9964;
lower_then = 36;
win_tester = bet_value * (parseFloat(263.89) - 1);
break;

case '266':
higer_then = 9964;
lower_then = 36;
win_tester = bet_value * (parseFloat(263.89) - 1);
break;

case '267':
higer_then = 9964;
lower_then = 36;
win_tester = bet_value * (parseFloat(263.89) - 1);
break;

case '268':
higer_then = 9965;
lower_then = 35;
win_tester = bet_value * (parseFloat(271.43) - 1);
break;

case '269':
higer_then = 9965;
lower_then = 35;
win_tester = bet_value * (parseFloat(271.43) - 1);
break;

case '270':
higer_then = 9965;
lower_then = 35;
win_tester = bet_value * (parseFloat(271.43) - 1);
break;

case '271':
higer_then = 9965;
lower_then = 35;
win_tester = bet_value * (parseFloat(271.43) - 1);
break;

case '272':
higer_then = 9965;
lower_then = 35;
win_tester = bet_value * (parseFloat(271.43) - 1);
break;

case '273':
higer_then = 9965;
lower_then = 35;
win_tester = bet_value * (parseFloat(271.43) - 1);
break;

case '274':
higer_then = 9965;
lower_then = 35;
win_tester = bet_value * (parseFloat(271.43) - 1);
break;

case '275':
higer_then = 9965;
lower_then = 35;
win_tester = bet_value * (parseFloat(271.43) - 1);
break;

case '276':
higer_then = 9966;
lower_then = 34;
win_tester = bet_value * (parseFloat(279.41) - 1);
break;

case '277':
higer_then = 9966;
lower_then = 34;
win_tester = bet_value * (parseFloat(279.41) - 1);
break;

case '278':
higer_then = 9966;
lower_then = 34;
win_tester = bet_value * (parseFloat(279.41) - 1);
break;

case '279':
higer_then = 9966;
lower_then = 34;
win_tester = bet_value * (parseFloat(279.41) - 1);
break;

case '280':
higer_then = 9966;
lower_then = 34;
win_tester = bet_value * (parseFloat(279.41) - 1);
break;

case '281':
higer_then = 9966;
lower_then = 34;
win_tester = bet_value * (parseFloat(279.41) - 1);
break;

case '282':
higer_then = 9966;
lower_then = 34;
win_tester = bet_value * (parseFloat(279.41) - 1);
break;

case '283':
higer_then = 9966;
lower_then = 34;
win_tester = bet_value * (parseFloat(279.41) - 1);
break;

case '284':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '285':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '286':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '287':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '288':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '289':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '290':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '291':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '292':
higer_then = 9967;
lower_then = 33;
win_tester = bet_value * (parseFloat(287.88) - 1);
break;

case '293':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * (parseFloat(296.88) - 1);
break;

case '294':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * (parseFloat(296.88) - 1);
break;

case '295':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * (parseFloat(296.88) - 1);
break;

case '296':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * (parseFloat(296.88) - 1);
break;

case '297':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * (parseFloat(296.88) - 1);
break;

case '298':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * (parseFloat(296.88) - 1);
break;

case '299':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * (parseFloat(296.88) - 1);
break;

case '300':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * 295;
break;

case '301':
higer_then = 9968;
lower_then = 32;
win_tester = bet_value * (parseFloat(296.88) - 1);
break;

case '302':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '303':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '304':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '305':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '306':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '307':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '308':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '309':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '310':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '311':
higer_then = 9969;
lower_then = 31;
win_tester = bet_value * (parseFloat(306.45) - 1);
break;

case '312':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '313':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '314':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '315':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '316':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '317':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '318':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '319':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '320':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '321':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '322':
higer_then = 9970;
lower_then = 30;
win_tester = bet_value * (parseFloat(316.67) - 1);
break;

case '323':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '324':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '325':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '326':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '327':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '328':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '329':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '330':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '331':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '332':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '333':
higer_then = 9971;
lower_then = 29;
win_tester = bet_value * (parseFloat(327.59) - 1);
break;

case '334':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '335':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '336':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '337':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '338':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '339':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '340':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '341':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '342':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '343':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '344':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '345':
higer_then = 9972;
lower_then = 28;
win_tester = bet_value * (parseFloat(339.29) - 1);
break;

case '346':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '347':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '348':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '349':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '350':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '351':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '352':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '353':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '354':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '355':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '356':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '357':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '358':
higer_then = 9973;
lower_then = 27;
win_tester = bet_value * (parseFloat(351.85) - 1);
break;

case '359':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '360':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '361':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '362':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '363':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '364':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '365':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '366':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '367':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '368':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '369':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '370':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '371':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '372':
higer_then = 9974;
lower_then = 26;
win_tester = bet_value * (parseFloat(365.38) - 1);
break;

case '373':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '374':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '375':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '376':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '377':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '378':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '379':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '380':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '381':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '382':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '383':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '384':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '385':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '386':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '387':
higer_then = 9975;
lower_then = 25;
win_tester = bet_value * (parseFloat(380.00) - 1);
break;

case '388':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '389':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '390':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '391':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '392':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '393':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '394':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '395':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '396':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '397':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '398':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '399':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '400':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * 394;
break;

case '401':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '402':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '403':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '404':
higer_then = 9976;
lower_then = 24;
win_tester = bet_value * (parseFloat(395.83) - 1);
break;

case '405':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '406':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '407':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '408':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '409':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '410':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '411':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '412':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '413':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '414':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '415':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '416':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '417':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '418':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '419':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '420':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '421':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '422':
higer_then = 9977;
lower_then = 23;
win_tester = bet_value * (parseFloat(413.04) - 1);
break;

case '423':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '424':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '425':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '426':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '427':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '428':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '429':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '430':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '431':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '432':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '433':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '434':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '435':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '436':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '437':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '438':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '439':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '440':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '441':
higer_then = 9978;
lower_then = 22;
win_tester = bet_value * (parseFloat(431.82) - 1);
break;

case '442':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '443':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '444':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '445':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '446':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '447':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '448':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '449':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '450':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '451':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '452':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '453':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '454':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '455':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '456':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '457':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '458':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '459':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '460':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '461':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '462':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '463':
higer_then = 9979;
lower_then = 21;
win_tester = bet_value * (parseFloat(452.38) - 1);
break;

case '464':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '465':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '466':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '467':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '468':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '469':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '470':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '471':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '472':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '473':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '474':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '475':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '476':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '477':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '478':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '479':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '480':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '481':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '482':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '483':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '484':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '485':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '486':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '487':
higer_then = 9980;
lower_then = 20;
win_tester = bet_value * (parseFloat(475.00) - 1);
break;

case '488':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '489':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '490':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '491':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '492':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '493':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '494':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '495':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '496':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '497':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '498':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '499':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '500':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '501':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '502':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '503':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '504':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '505':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '506':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '507':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '508':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '509':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '510':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '511':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '512':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '513':
higer_then = 9981;
lower_then = 19;
win_tester = bet_value * (parseFloat(500.00) - 1);
break;

case '514':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '515':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '516':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '517':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '518':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '519':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '520':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '521':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '522':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '523':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '524':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '525':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '526':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '527':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '528':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '529':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '530':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '531':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '532':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '533':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '534':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '535':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '536':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '537':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '538':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '539':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '540':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '541':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '542':
higer_then = 9982;
lower_then = 18;
win_tester = bet_value * (parseFloat(527.78) - 1);
break;

case '543':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '544':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '545':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '546':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '547':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '548':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '549':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '550':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * 557;
break;

case '551':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '552':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '553':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '554':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '555':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '556':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '557':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '558':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '559':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '560':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '561':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '562':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '563':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '564':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '565':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '566':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '567':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '568':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '569':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '570':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '571':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '572':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '573':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '574':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '575':
higer_then = 9983;
lower_then = 17;
win_tester = bet_value * (parseFloat(558.82) - 1);
break;

case '576':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '577':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '578':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '579':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '580':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '581':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '582':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '583':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '584':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '585':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '586':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '587':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '588':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '589':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '590':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '591':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '592':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '593':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '594':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '595':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '596':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '597':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '598':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '599':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '600':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '601':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '602':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '603':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '604':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '605':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '606':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '607':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '608':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '609':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '610':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '611':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '612':
higer_then = 9984;
lower_then = 16;
win_tester = bet_value * (parseFloat(593.75) - 1);
break;

case '613':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '614':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '615':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '616':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '617':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '618':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '619':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '620':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '621':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '622':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '623':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '624':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '625':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '626':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '627':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '628':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '629':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '630':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '631':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '632':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '633':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '634':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '635':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '636':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '637':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '638':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '639':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '640':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '641':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '642':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '643':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '644':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '645':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '646':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '647':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '648':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '649':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '650':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '651':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '652':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '653':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '654':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '655':
higer_then = 9985;
lower_then = 15;
win_tester = bet_value * (parseFloat(633.33) - 1);
break;

case '656':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '657':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '658':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '659':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '660':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '661':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '662':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '663':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '664':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '665':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '666':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '667':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '668':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '669':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '670':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '671':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '672':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '673':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '674':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '675':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '676':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '677':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '678':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '679':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '680':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '681':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '682':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '683':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '684':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '685':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '686':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '687':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '688':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '689':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '690':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '691':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '692':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '693':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '694':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '695':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '696':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '697':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '698':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '699':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '700':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '701':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '702':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '703':
higer_then = 9986;
lower_then = 14;
win_tester = bet_value * (parseFloat(678.57) - 1);
break;

case '704':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '705':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '706':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '707':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '708':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '709':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '710':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '711':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '712':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '713':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '714':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '715':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '716':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '717':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '718':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '719':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '720':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '721':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '722':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '723':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '724':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '725':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '726':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '727':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '728':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '729':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '730':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '731':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '732':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '733':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '734':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '735':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '736':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '737':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '738':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '739':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '740':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '741':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '742':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '743':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '744':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '745':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '746':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '747':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '748':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '749':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '750':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '751':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '752':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '753':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '754':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '755':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '756':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '757':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '758':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '759':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '760':
higer_then = 9987;
lower_then = 13;
win_tester = bet_value * (parseFloat(730.77) - 1);
break;

case '761':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '762':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '763':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '764':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '765':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '766':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '767':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '768':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '769':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '770':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '771':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '772':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '773':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '774':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '775':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '776':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '777':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '778':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '779':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '780':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '781':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '782':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '783':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '784':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '785':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '786':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '787':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '788':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '789':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '790':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '791':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '792':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '793':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '794':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '795':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '796':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '797':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '798':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '799':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '800':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '801':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '802':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '803':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '804':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '805':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '806':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '807':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '808':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '809':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '810':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '811':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '812':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '813':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '814':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '815':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '816':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '817':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '818':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '819':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '820':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '821':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '822':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '823':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '824':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '825':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '826':
higer_then = 9988;
lower_then = 12;
win_tester = bet_value * (parseFloat(791.67) - 1);
break;

case '827':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '828':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '829':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '830':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '831':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '832':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '833':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '834':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '835':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '836':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '837':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '838':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '839':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '840':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '841':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '842':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '843':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '844':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '845':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '846':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '847':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '848':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '849':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '850':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '851':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '852':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '853':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '854':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '855':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '856':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '857':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '858':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '859':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '860':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '861':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '862':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '863':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '864':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '865':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '866':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '867':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '868':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '869':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '870':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '871':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '872':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '873':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '874':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '875':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '876':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '877':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '878':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '879':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '880':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '881':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '882':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '883':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '884':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '885':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '886':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '887':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '888':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '889':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '890':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '891':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '892':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '893':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '894':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '895':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '896':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '897':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '898':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '899':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '900':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * 862;
break;

case '901':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '902':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '903':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '904':
higer_then = 9989;
lower_then = 11;
win_tester = bet_value * (parseFloat(863.64) - 1);
break;

case '905':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '906':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '907':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '908':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '909':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '910':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '911':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '912':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '913':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '914':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '915':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '916':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '917':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '918':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '919':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '920':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '921':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '922':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '923':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '924':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '925':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '926':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '927':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '928':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '929':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '930':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '931':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '932':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '933':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '934':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '935':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '936':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '937':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '938':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '939':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '940':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '941':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '942':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '943':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '944':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '945':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '946':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '947':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '948':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '949':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '950':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '951':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '952':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '953':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '954':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '955':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '956':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '957':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '958':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '959':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '960':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '961':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '962':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '963':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '964':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '965':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '966':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '967':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '968':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '969':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '970':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '971':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '972':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '973':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '974':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '975':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '976':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '977':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '978':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '979':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '980':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '981':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '982':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '983':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '984':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '985':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '986':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '987':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '988':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '989':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '990':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '991':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '992':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '993':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '994':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '995':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '996':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '997':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '998':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '999':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '1000':
higer_then = 9990;
lower_then = 10;
win_tester = bet_value * (parseFloat(950.00) - 1);
break;

case '1001':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1002':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1003':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1004':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1005':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1006':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1007':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1008':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1009':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1010':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1011':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1012':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1013':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1014':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1015':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1016':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1017':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1018':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1019':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1020':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1021':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1022':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1023':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1024':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1025':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1026':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1027':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1028':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1029':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1030':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1031':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1032':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1033':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1034':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1035':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1036':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1037':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1038':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1039':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1040':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1041':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1042':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1043':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1044':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1045':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1046':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1047':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1048':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1049':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1050':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1051':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1052':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1053':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1054':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1055':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1056':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1057':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1058':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1059':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1060':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1061':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1062':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1063':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1064':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1065':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1066':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1067':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1068':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1069':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1070':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1071':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1072':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1073':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1074':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1075':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1076':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1077':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1078':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1079':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1080':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1081':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1082':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1083':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1084':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1085':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1086':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1087':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1088':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1089':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1090':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1091':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1092':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1093':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1094':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1095':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1096':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1097':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1098':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1099':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1100':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1101':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1102':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1103':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1104':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1105':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1106':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1107':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1108':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1109':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1110':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1111':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1112':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1113':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1114':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1115':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1116':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1117':
higer_then = 9991;
lower_then = 9;
win_tester = bet_value * (parseFloat(1055.56) - 1);
break;

case '1118':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1119':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1120':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1121':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1122':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1123':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1124':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1125':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1126':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1127':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1128':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1129':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1130':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1131':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1132':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1133':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1134':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1135':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1136':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1137':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1138':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1139':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1140':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1141':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1142':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1143':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1144':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1145':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1146':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1147':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1148':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1149':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1150':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1151':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1152':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1153':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1154':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1155':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1156':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1157':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1158':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1159':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1160':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1161':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1162':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1163':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1164':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1165':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1166':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1167':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1168':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1169':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1170':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1171':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1172':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1173':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1174':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1175':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1176':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1177':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1178':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1179':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1180':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1181':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1182':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1183':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1184':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1185':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1186':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1187':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1188':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1189':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1190':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1191':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1192':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1193':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1194':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1195':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1196':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1197':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1198':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1199':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1200':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1201':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1202':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1203':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1204':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1205':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1206':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1207':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1208':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1209':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1210':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1211':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1212':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1213':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1214':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1215':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1216':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1217':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1218':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1219':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1220':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1221':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1222':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1223':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1224':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1225':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1226':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1227':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1228':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1229':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1230':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1231':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1232':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1233':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1234':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1235':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1236':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1237':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1238':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1239':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1240':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1241':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1242':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1243':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1244':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1245':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1246':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1247':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1248':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1249':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1250':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1251':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1252':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1253':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1254':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1255':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1256':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1257':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1258':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1259':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1260':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1261':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1262':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1263':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1264':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1265':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1266':
higer_then = 9992;
lower_then = 8;
win_tester = bet_value * (parseFloat(1187.50) - 1);
break;

case '1267':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1268':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1269':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1270':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1271':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1272':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1273':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1274':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1275':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1276':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1277':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1278':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1279':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1280':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1281':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1282':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1283':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1284':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1285':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1286':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1287':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1288':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1289':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1290':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1291':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1292':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1293':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1294':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1295':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1296':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1297':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1298':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1299':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1300':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1301':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1302':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1303':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1304':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1305':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1306':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1307':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1308':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1309':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1310':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1311':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1312':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1313':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1314':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1315':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1316':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1317':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1318':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1319':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1320':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1321':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1322':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1323':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1324':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1325':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1326':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1327':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1328':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1329':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1330':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1331':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1332':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1333':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1334':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1335':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1336':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1337':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1338':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1339':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1340':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1341':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1342':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1343':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1344':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1345':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1346':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1347':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1348':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1349':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1350':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1351':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1352':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1353':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1354':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1355':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1356':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1357':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1358':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1359':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1360':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1361':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1362':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1363':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1364':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1365':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1366':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1367':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1368':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1369':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1370':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1371':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1372':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1373':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1374':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1375':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1376':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1377':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1378':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1379':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1380':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1381':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1382':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1383':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1384':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1385':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1386':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1387':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1388':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1389':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1390':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1391':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1392':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1393':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1394':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1395':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1396':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1397':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1398':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1399':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1400':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1401':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1402':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1403':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1404':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1405':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1406':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1407':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1408':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1409':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1410':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1411':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1412':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1413':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1414':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1415':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1416':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1417':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1418':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1419':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1420':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1421':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1422':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1423':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1424':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1425':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1426':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1427':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1428':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1429':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1430':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1431':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1432':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1433':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1434':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1435':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1436':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1437':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1438':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1439':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1440':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1441':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1442':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1443':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1444':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1445':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1446':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1447':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1448':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1449':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1450':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1451':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1452':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1453':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1454':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1455':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1456':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1457':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1458':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1459':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1460':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1461':
higer_then = 9993;
lower_then = 7;
win_tester = bet_value * (parseFloat(1357.14) - 1);
break;

case '1462':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1463':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1464':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1465':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1466':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1467':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1468':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1469':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1470':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1471':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1472':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1473':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1474':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1475':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1476':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1477':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1478':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1479':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1480':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1481':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1482':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1483':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1484':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1485':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1486':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1487':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1488':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1489':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1490':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1491':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1492':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1493':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1494':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1495':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1496':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1497':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1498':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1499':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1500':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1501':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1502':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1503':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1504':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1505':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1506':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1507':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1508':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1509':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1510':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1511':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1512':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1513':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1514':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1515':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1516':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1517':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1518':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1519':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1520':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1521':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1522':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1523':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1524':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1525':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1526':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1527':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1528':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1529':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1530':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1531':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1532':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1533':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1534':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1535':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1536':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1537':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1538':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1539':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1540':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1541':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1542':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1543':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1544':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1545':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1546':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1547':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1548':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1549':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1550':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1551':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1552':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1553':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1554':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1555':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1556':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1557':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1558':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1559':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1560':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1561':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1562':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1563':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1564':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1565':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1566':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1567':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1568':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1569':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1570':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1571':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1572':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1573':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1574':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1575':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1576':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1577':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1578':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1579':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1580':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1581':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1582':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1583':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1584':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1585':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1586':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1587':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1588':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1589':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1590':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1591':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1592':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1593':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1594':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1595':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1596':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1597':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1598':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1599':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1600':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1601':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1602':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1603':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1604':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1605':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1606':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1607':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1608':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1609':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1610':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1611':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1612':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1613':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1614':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1615':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1616':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1617':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1618':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1619':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1620':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1621':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1622':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1623':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1624':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1625':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1626':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1627':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1628':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1629':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1630':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1631':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1632':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1633':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1634':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1635':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1636':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1637':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1638':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1639':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1640':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1641':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1642':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1643':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1644':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1645':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1646':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1647':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1648':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1649':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1650':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1651':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1652':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1653':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1654':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1655':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1656':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1657':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1658':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1659':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1660':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1661':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1662':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1663':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1664':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1665':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1666':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1667':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1668':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1669':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1670':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1671':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1672':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1673':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1674':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1675':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1676':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1677':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1678':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1679':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1680':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1681':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1682':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1683':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1684':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1685':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1686':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1687':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1688':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1689':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1690':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1691':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1692':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1693':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1694':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1695':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1696':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1697':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1698':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1699':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1700':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1701':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1702':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1703':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1704':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1705':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1706':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1707':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1708':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1709':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1710':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1711':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1712':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1713':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1714':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1715':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1716':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1717':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1718':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1719':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1720':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1721':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1722':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1723':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1724':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1725':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1726':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1727':
higer_then = 9994;
lower_then = 6;
win_tester = bet_value * (parseFloat(1583.33) - 1);
break;

case '1728':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1729':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1730':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1731':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1732':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1733':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1734':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1735':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1736':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1737':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1738':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1739':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1740':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1741':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1742':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1743':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1744':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1745':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1746':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1747':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1748':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1749':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1750':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1751':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1752':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1753':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1754':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1755':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1756':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1757':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1758':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1759':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1760':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1761':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1762':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1763':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1764':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1765':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1766':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1767':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1768':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1769':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1770':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1771':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1772':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1773':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1774':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1775':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1776':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1777':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1778':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1779':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1780':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1781':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1782':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1783':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1784':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1785':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1786':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1787':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1788':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1789':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1790':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1791':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1792':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1793':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1794':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1795':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1796':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1797':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1798':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1799':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1800':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1801':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1802':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1803':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1804':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1805':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1806':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1807':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1808':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1809':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1810':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1811':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1812':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1813':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1814':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1815':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1816':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1817':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1818':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1819':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1820':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1821':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1822':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1823':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1824':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1825':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1826':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1827':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1828':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1829':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1830':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1831':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1832':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1833':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1834':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1835':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1836':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1837':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1838':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1839':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1840':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1841':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1842':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1843':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1844':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1845':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1846':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1847':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1848':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1849':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1850':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1851':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1852':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1853':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1854':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1855':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1856':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1857':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1858':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1859':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1860':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1861':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1862':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1863':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1864':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1865':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1866':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1867':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1868':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1869':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1870':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1871':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1872':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1873':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1874':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1875':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1876':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1877':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1878':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1879':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1880':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1881':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1882':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1883':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1884':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1885':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1886':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1887':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1888':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1889':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1890':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1891':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1892':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1893':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1894':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1895':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1896':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1897':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1898':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1899':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1900':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1901':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1902':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1903':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1904':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1905':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1906':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1907':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1908':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1909':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1910':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1911':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1912':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1913':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1914':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1915':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1916':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1917':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1918':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1919':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1920':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1921':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1922':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1923':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1924':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1925':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1926':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1927':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1928':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1929':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1930':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1931':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1932':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1933':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1934':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1935':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1936':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1937':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1938':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1939':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1940':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1941':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1942':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1943':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1944':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1945':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1946':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1947':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1948':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1949':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1950':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1951':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1952':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1953':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1954':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1955':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1956':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1957':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1958':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1959':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1960':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1961':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1962':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1963':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1964':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1965':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1966':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1967':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1968':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1969':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1970':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1971':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1972':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1973':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1974':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1975':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1976':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1977':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1978':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1979':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1980':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1981':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1982':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1983':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1984':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1985':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1986':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1987':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1988':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1989':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1990':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1991':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1992':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1993':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1994':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1995':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1996':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1997':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1998':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '1999':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2000':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2001':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2002':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2003':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2004':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2005':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2006':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2007':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2008':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2009':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2010':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2011':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2012':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2013':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2014':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2015':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2016':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2017':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2018':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2019':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2020':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2021':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2022':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2023':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2024':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2025':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2026':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2027':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2028':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2029':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2030':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2031':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2032':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2033':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2034':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2035':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2036':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2037':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2038':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2039':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2040':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2041':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2042':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2043':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2044':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2045':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2046':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2047':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2048':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2049':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2050':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2051':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2052':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2053':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2054':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2055':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2056':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2057':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2058':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2059':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2060':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2061':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2062':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2063':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2064':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2065':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2066':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2067':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2068':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2069':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2070':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2071':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2072':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2073':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2074':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2075':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2076':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2077':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2078':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2079':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2080':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2081':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2082':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2083':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2084':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2085':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2086':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2087':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2088':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2089':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2090':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2091':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2092':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2093':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2094':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2095':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2096':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2097':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2098':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2099':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2100':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2101':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2102':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2103':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2104':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2105':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2106':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2107':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2108':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2109':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2110':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2111':
higer_then = 9995;
lower_then = 5;
win_tester = bet_value * (parseFloat(1900.00) - 1);
break;

case '2112':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2113':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2114':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2115':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2116':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2117':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2118':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2119':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2120':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2121':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2122':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2123':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2124':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2125':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2126':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2127':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2128':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2129':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2130':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2131':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2132':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2133':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2134':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2135':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2136':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2137':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2138':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2139':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2140':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2141':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2142':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2143':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2144':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2145':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2146':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2147':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2148':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2149':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2150':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2151':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2152':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2153':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2154':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2155':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2156':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2157':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2158':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2159':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2160':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2161':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2162':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2163':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2164':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2165':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2166':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2167':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2168':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2169':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2170':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2171':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2172':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2173':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2174':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2175':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2176':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2177':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2178':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2179':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2180':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2181':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2182':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2183':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2184':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2185':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2186':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2187':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2188':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2189':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2190':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2191':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2192':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2193':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2194':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2195':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2196':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2197':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2198':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2199':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2200':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2201':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2202':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2203':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2204':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2205':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2206':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2207':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2208':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2209':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2210':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2211':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2212':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2213':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2214':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2215':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2216':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2217':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2218':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2219':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2220':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2221':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2222':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2223':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2224':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2225':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2226':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2227':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2228':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2229':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2230':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2231':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2232':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2233':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2234':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2235':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2236':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2237':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2238':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2239':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2240':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2241':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2242':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2243':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2244':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2245':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2246':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2247':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2248':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2249':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2250':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2251':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2252':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2253':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2254':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2255':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2256':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2257':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2258':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2259':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2260':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2261':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2262':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2263':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2264':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2265':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2266':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2267':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2268':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2269':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2270':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2271':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2272':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2273':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2274':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2275':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2276':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2277':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2278':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2279':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2280':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2281':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2282':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2283':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2284':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2285':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2286':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2287':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2288':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2289':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2290':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2291':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2292':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2293':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2294':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2295':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2296':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2297':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2298':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2299':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2300':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2301':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2302':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2303':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2304':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2305':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2306':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2307':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2308':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2309':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2310':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2311':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2312':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2313':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2314':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2315':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2316':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2317':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2318':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2319':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2320':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2321':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2322':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2323':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2324':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2325':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2326':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2327':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2328':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2329':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2330':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2331':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2332':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2333':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2334':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2335':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2336':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2337':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2338':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2339':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2340':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2341':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2342':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2343':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2344':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2345':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2346':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2347':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2348':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2349':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2350':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2351':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2352':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2353':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2354':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2355':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2356':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2357':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2358':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2359':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2360':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2361':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2362':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2363':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2364':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2365':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2366':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2367':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2368':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2369':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2370':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2371':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2372':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2373':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2374':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2375':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2376':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2377':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2378':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2379':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2380':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2381':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2382':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2383':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2384':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2385':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2386':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2387':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2388':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2389':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2390':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2391':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2392':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2393':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2394':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2395':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2396':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2397':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2398':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2399':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2400':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2401':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2402':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2403':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2404':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2405':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2406':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2407':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2408':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2409':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2410':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2411':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2412':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2413':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2414':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2415':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2416':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2417':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2418':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2419':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2420':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2421':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2422':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2423':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2424':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2425':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2426':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2427':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2428':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2429':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2430':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2431':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2432':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2433':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2434':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2435':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2436':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2437':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2438':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2439':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2440':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2441':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2442':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2443':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2444':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2445':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2446':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2447':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2448':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2449':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2450':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2451':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2452':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2453':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2454':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2455':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2456':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2457':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2458':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2459':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2460':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2461':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2462':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2463':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2464':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2465':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2466':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2467':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2468':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2469':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2470':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2471':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2472':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2473':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2474':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2475':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2476':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2477':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2478':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2479':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2480':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2481':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2482':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2483':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2484':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2485':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2486':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2487':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2488':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2489':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2490':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2491':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2492':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2493':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2494':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2495':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2496':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2497':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2498':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2499':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2500':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2501':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2502':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2503':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2504':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2505':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2506':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2507':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2508':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2509':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2510':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2511':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2512':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2513':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2514':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2515':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2516':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2517':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2518':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2519':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2520':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2521':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2522':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2523':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2524':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2525':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2526':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2527':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2528':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2529':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2530':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2531':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2532':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2533':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2534':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2535':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2536':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2537':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2538':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2539':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2540':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2541':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2542':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2543':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2544':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2545':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2546':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2547':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2548':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2549':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2550':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2551':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2552':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2553':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2554':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2555':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2556':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2557':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2558':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2559':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2560':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2561':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2562':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2563':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2564':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2565':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2566':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2567':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2568':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2569':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2570':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2571':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2572':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2573':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2574':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2575':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2576':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2577':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2578':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2579':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2580':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2581':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2582':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2583':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2584':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2585':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2586':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2587':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2588':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2589':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2590':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2591':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2592':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2593':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2594':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2595':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2596':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2597':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2598':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2599':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2600':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2601':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2602':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2603':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2604':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2605':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2606':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2607':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2608':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2609':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2610':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2611':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2612':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2613':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2614':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2615':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2616':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2617':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2618':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2619':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2620':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2621':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2622':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2623':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2624':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2625':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2626':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2627':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2628':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2629':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2630':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2631':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2632':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2633':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2634':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2635':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2636':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2637':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2638':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2639':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2640':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2641':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2642':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2643':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2644':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2645':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2646':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2647':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2648':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2649':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2650':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2651':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2652':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2653':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2654':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2655':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2656':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2657':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2658':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2659':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2660':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2661':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2662':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2663':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2664':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2665':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2666':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2667':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2668':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2669':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2670':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2671':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2672':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2673':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2674':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2675':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2676':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2677':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2678':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2679':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2680':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2681':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2682':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2683':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2684':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2685':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2686':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2687':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2688':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2689':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2690':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2691':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2692':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2693':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2694':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2695':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2696':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2697':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2698':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2699':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2700':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2701':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2702':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2703':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2704':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2705':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2706':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2707':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2708':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2709':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2710':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2711':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2712':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2713':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2714':
higer_then = 9996;
lower_then = 4;
win_tester = bet_value * (parseFloat(2375.00) - 1);
break;

case '2715':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2716':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2717':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2718':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2719':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2720':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2721':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2722':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2723':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2724':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2725':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2726':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2727':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2728':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2729':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2730':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2731':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2732':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2733':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2734':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2735':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2736':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2737':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2738':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2739':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2740':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2741':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2742':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2743':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2744':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2745':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2746':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2747':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2748':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2749':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2750':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2751':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2752':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2753':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2754':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2755':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2756':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2757':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2758':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2759':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2760':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2761':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2762':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2763':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2764':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2765':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2766':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2767':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2768':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2769':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2770':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2771':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2772':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2773':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2774':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2775':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2776':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2777':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2778':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2779':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2780':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2781':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2782':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2783':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2784':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2785':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2786':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2787':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2788':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2789':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2790':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2791':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2792':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2793':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2794':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2795':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2796':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2797':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2798':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2799':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2800':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2801':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2802':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2803':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2804':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2805':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2806':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2807':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2808':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2809':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2810':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2811':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2812':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2813':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2814':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2815':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2816':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2817':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2818':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2819':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2820':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2821':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2822':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2823':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2824':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2825':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2826':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2827':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2828':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2829':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2830':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2831':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2832':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2833':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2834':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2835':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2836':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2837':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2838':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2839':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2840':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2841':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2842':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2843':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2844':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2845':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2846':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2847':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2848':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2849':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2850':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2851':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2852':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2853':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2854':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2855':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2856':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2857':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2858':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2859':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2860':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2861':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2862':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2863':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2864':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2865':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2866':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2867':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2868':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2869':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2870':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2871':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2872':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2873':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2874':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2875':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2876':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2877':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2878':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2879':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2880':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2881':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2882':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2883':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2884':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2885':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2886':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2887':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2888':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2889':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2890':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2891':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2892':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2893':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2894':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2895':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2896':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2897':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2898':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2899':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2900':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2901':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2902':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2903':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2904':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2905':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2906':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2907':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2908':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2909':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2910':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2911':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2912':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2913':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2914':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2915':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2916':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2917':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2918':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2919':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2920':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2921':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2922':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2923':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2924':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2925':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2926':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2927':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2928':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2929':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2930':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2931':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2932':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2933':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2934':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2935':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2936':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2937':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2938':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2939':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2940':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2941':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2942':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2943':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2944':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2945':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2946':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2947':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2948':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2949':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2950':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2951':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2952':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2953':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2954':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2955':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2956':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2957':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2958':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2959':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2960':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2961':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2962':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2963':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2964':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2965':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2966':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2967':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2968':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2969':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2970':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2971':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2972':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2973':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2974':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2975':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2976':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2977':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2978':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2979':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2980':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2981':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2982':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2983':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2984':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2985':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2986':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2987':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2988':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2989':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2990':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2991':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2992':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2993':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2994':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2995':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2996':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2997':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2998':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '2999':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3000':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3001':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3002':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3003':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3004':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3005':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3006':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3007':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3008':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3009':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3010':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3011':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3012':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3013':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3014':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3015':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3016':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3017':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3018':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3019':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3020':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3021':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3022':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3023':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3024':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3025':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3026':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3027':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3028':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3029':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3030':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3031':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3032':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3033':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3034':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3035':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3036':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3037':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3038':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3039':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3040':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3041':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3042':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3043':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3044':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3045':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3046':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3047':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3048':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3049':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3050':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3051':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3052':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3053':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3054':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3055':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3056':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3057':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3058':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3059':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3060':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3061':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3062':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3063':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3064':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3065':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3066':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3067':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3068':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3069':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3070':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3071':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3072':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3073':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3074':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3075':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3076':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3077':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3078':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3079':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3080':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3081':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3082':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3083':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3084':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3085':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3086':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3087':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3088':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3089':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3090':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3091':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3092':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3093':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3094':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3095':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3096':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3097':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3098':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3099':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3100':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3101':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3102':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3103':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3104':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3105':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3106':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3107':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3108':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3109':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3110':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3111':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3112':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3113':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3114':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3115':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3116':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3117':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3118':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3119':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3120':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3121':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3122':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3123':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3124':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3125':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3126':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3127':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3128':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3129':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3130':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3131':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3132':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3133':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3134':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3135':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3136':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3137':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3138':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3139':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3140':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3141':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3142':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3143':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3144':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3145':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3146':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3147':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3148':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3149':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3150':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3151':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3152':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3153':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3154':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3155':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3156':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3157':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3158':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3159':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3160':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3161':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3162':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3163':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3164':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3165':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3166':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3167':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3168':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3169':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3170':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3171':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3172':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3173':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3174':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3175':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3176':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3177':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3178':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3179':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3180':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3181':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3182':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3183':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3184':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3185':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3186':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3187':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3188':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3189':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3190':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3191':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3192':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3193':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3194':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3195':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3196':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3197':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3198':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3199':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3200':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3201':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3202':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3203':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3204':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3205':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3206':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3207':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3208':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3209':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3210':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3211':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3212':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3213':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3214':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3215':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3216':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3217':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3218':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3219':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3220':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3221':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3222':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3223':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3224':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3225':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3226':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3227':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3228':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3229':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3230':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3231':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3232':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3233':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3234':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3235':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3236':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3237':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3238':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3239':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3240':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3241':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3242':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3243':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3244':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3245':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3246':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3247':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3248':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3249':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3250':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3251':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3252':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3253':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3254':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3255':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3256':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3257':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3258':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3259':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3260':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3261':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3262':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3263':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3264':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3265':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3266':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3267':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3268':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3269':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3270':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3271':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3272':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3273':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3274':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3275':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3276':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3277':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3278':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3279':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3280':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3281':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3282':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3283':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3284':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3285':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3286':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3287':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3288':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3289':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3290':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3291':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3292':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3293':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3294':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3295':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3296':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3297':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3298':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3299':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3300':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3301':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3302':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3303':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3304':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3305':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3306':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3307':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3308':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3309':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3310':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3311':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3312':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3313':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3314':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3315':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3316':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3317':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3318':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3319':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3320':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3321':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3322':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3323':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3324':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3325':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3326':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3327':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3328':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3329':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3330':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3331':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3332':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3333':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3334':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3335':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3336':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3337':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3338':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3339':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3340':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3341':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3342':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3343':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3344':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3345':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3346':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3347':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3348':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3349':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3350':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3351':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3352':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3353':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3354':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3355':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3356':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3357':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3358':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3359':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3360':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3361':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3362':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3363':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3364':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3365':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3366':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3367':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3368':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3369':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3370':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3371':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3372':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3373':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3374':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3375':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3376':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3377':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3378':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3379':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3380':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3381':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3382':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3383':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3384':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3385':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3386':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3387':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3388':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3389':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3390':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3391':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3392':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3393':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3394':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3395':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3396':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3397':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3398':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3399':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3400':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3401':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3402':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3403':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3404':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3405':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3406':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3407':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3408':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3409':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3410':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3411':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3412':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3413':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3414':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3415':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3416':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3417':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3418':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3419':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3420':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3421':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3422':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3423':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3424':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3425':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3426':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3427':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3428':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3429':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3430':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3431':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3432':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3433':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3434':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3435':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3436':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3437':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3438':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3439':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3440':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3441':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3442':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3443':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3444':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3445':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3446':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3447':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3448':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3449':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3450':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3451':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3452':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3453':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3454':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3455':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3456':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3457':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3458':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3459':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3460':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3461':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3462':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3463':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3464':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3465':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3466':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3467':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3468':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3469':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3470':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3471':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3472':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3473':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3474':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3475':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3476':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3477':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3478':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3479':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3480':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3481':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3482':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3483':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3484':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3485':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3486':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3487':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3488':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3489':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3490':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3491':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3492':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3493':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3494':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3495':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3496':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3497':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3498':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3499':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3500':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3501':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3502':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3503':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3504':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3505':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3506':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3507':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3508':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3509':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3510':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3511':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3512':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3513':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3514':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3515':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3516':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3517':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3518':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3519':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3520':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3521':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3522':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3523':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3524':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3525':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3526':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3527':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3528':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3529':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3530':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3531':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3532':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3533':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3534':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3535':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3536':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3537':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3538':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3539':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3540':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3541':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3542':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3543':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3544':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3545':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3546':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3547':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3548':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3549':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3550':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3551':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3552':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3553':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3554':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3555':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3556':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3557':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3558':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3559':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3560':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3561':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3562':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3563':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3564':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3565':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3566':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3567':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3568':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3569':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3570':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3571':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3572':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3573':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3574':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3575':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3576':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3577':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3578':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3579':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3580':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3581':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3582':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3583':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3584':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3585':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3586':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3587':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3588':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3589':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3590':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3591':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3592':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3593':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3594':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3595':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3596':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3597':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3598':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3599':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3600':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3601':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3602':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3603':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3604':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3605':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3606':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3607':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3608':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3609':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3610':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3611':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3612':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3613':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3614':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3615':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3616':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3617':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3618':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3619':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3620':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3621':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3622':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3623':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3624':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3625':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3626':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3627':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3628':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3629':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3630':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3631':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3632':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3633':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3634':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3635':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3636':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3637':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3638':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3639':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3640':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3641':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3642':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3643':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3644':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3645':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3646':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3647':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3648':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3649':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3650':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3651':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3652':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3653':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3654':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3655':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3656':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3657':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3658':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3659':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3660':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3661':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3662':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3663':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3664':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3665':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3666':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3667':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3668':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3669':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3670':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3671':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3672':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3673':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3674':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3675':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3676':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3677':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3678':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3679':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3680':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3681':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3682':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3683':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3684':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3685':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3686':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3687':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3688':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3689':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3690':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3691':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3692':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3693':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3694':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3695':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3696':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3697':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3698':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3699':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3700':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3701':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3702':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3703':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3704':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3705':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3706':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3707':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3708':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3709':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3710':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3711':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3712':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3713':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3714':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3715':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3716':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3717':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3718':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3719':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3720':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3721':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3722':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3723':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3724':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3725':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3726':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3727':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3728':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3729':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3730':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3731':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3732':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3733':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3734':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3735':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3736':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3737':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3738':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3739':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3740':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3741':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3742':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3743':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3744':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3745':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3746':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3747':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3748':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3749':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3750':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3751':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3752':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3753':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3754':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3755':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3756':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3757':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3758':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3759':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3760':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3761':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3762':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3763':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3764':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3765':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3766':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3767':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3768':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3769':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3770':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3771':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3772':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3773':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3774':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3775':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3776':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3777':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3778':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3779':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3780':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3781':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3782':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3783':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3784':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3785':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3786':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3787':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3788':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3789':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3790':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3791':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3792':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3793':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3794':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3795':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3796':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3797':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3798':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3799':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3800':
higer_then = 9997;
lower_then = 3;
win_tester = bet_value * (parseFloat(3166.67) - 1);
break;

case '3801':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3802':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3803':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3804':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3805':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3806':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3807':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3808':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3809':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3810':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3811':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3812':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3813':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3814':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3815':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3816':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3817':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3818':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3819':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3820':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3821':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3822':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3823':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3824':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3825':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3826':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3827':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3828':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3829':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3830':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3831':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3832':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3833':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3834':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3835':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3836':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3837':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3838':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3839':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3840':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3841':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3842':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3843':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3844':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3845':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3846':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3847':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3848':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3849':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3850':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3851':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3852':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3853':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3854':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3855':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3856':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3857':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3858':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3859':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3860':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3861':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3862':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3863':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3864':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3865':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3866':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3867':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3868':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3869':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3870':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3871':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3872':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3873':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3874':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3875':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3876':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3877':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3878':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3879':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3880':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3881':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3882':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3883':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3884':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3885':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3886':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3887':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3888':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3889':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3890':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3891':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3892':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3893':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3894':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3895':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3896':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3897':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3898':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3899':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3900':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3901':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3902':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3903':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3904':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3905':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3906':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3907':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3908':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3909':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3910':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3911':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3912':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3913':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3914':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3915':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3916':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3917':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3918':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3919':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3920':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3921':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3922':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3923':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3924':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3925':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3926':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3927':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3928':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3929':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3930':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3931':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3932':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3933':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3934':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3935':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3936':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3937':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3938':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3939':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3940':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3941':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3942':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3943':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3944':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3945':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3946':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3947':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3948':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3949':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3950':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3951':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3952':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3953':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3954':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3955':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3956':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3957':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3958':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3959':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3960':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3961':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3962':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3963':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3964':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3965':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3966':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3967':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3968':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3969':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3970':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3971':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3972':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3973':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3974':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3975':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3976':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3977':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3978':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3979':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3980':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3981':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3982':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3983':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3984':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3985':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3986':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3987':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3988':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3989':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3990':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3991':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3992':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3993':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3994':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3995':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3996':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3997':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3998':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '3999':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4000':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4001':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4002':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4003':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4004':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4005':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4006':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4007':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4008':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4009':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4010':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4011':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4012':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4013':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4014':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4015':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4016':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4017':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4018':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4019':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4020':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4021':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4022':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4023':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4024':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4025':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4026':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4027':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4028':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4029':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4030':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4031':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4032':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4033':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4034':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4035':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4036':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4037':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4038':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4039':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4040':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4041':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4042':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4043':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4044':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4045':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4046':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4047':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4048':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4049':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4050':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4051':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4052':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4053':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4054':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4055':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4056':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4057':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4058':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4059':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4060':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4061':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4062':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4063':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4064':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4065':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4066':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4067':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4068':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4069':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4070':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4071':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4072':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4073':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4074':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4075':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4076':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4077':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4078':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4079':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4080':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4081':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4082':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4083':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4084':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4085':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4086':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4087':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4088':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4089':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4090':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4091':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4092':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4093':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4094':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4095':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4096':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4097':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4098':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4099':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4100':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4101':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4102':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4103':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4104':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4105':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4106':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4107':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4108':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4109':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4110':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4111':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4112':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4113':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4114':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4115':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4116':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4117':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4118':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4119':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4120':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4121':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4122':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4123':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4124':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4125':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4126':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4127':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4128':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4129':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4130':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4131':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4132':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4133':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4134':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4135':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4136':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4137':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4138':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4139':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4140':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4141':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4142':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4143':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4144':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4145':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4146':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4147':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4148':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4149':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4150':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4151':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4152':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4153':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4154':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4155':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4156':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4157':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4158':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4159':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4160':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4161':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4162':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4163':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4164':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4165':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4166':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4167':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4168':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4169':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4170':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4171':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4172':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4173':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4174':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4175':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4176':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4177':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4178':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4179':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4180':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4181':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4182':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4183':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4184':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4185':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4186':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4187':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4188':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4189':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4190':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4191':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4192':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4193':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4194':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4195':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4196':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4197':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4198':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4199':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4200':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4201':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4202':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4203':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4204':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4205':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4206':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4207':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4208':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4209':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4210':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4211':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4212':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4213':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4214':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4215':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4216':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4217':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4218':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4219':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4220':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4221':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4222':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4223':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4224':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4225':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4226':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4227':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4228':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4229':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4230':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4231':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4232':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4233':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4234':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4235':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4236':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4237':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4238':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4239':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4240':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4241':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4242':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4243':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4244':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4245':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4246':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4247':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4248':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4249':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4250':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4251':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4252':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4253':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4254':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4255':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4256':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4257':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4258':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4259':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4260':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4261':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4262':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4263':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4264':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4265':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4266':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4267':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4268':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4269':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4270':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4271':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4272':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4273':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4274':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4275':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4276':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4277':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4278':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4279':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4280':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4281':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4282':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4283':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4284':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4285':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4286':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4287':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4288':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4289':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4290':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4291':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4292':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4293':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4294':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4295':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4296':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4297':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4298':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4299':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4300':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4301':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4302':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4303':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4304':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4305':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4306':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4307':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4308':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4309':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4310':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4311':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4312':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4313':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4314':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4315':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4316':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4317':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4318':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4319':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4320':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4321':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4322':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4323':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4324':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4325':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4326':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4327':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4328':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4329':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4330':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4331':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4332':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4333':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4334':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4335':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4336':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4337':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4338':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4339':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4340':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4341':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4342':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4343':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4344':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4345':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4346':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4347':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4348':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4349':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4350':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4351':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4352':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4353':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4354':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4355':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4356':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4357':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4358':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4359':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4360':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4361':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4362':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4363':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4364':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4365':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4366':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4367':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4368':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4369':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4370':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4371':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4372':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4373':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4374':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4375':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4376':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4377':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4378':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4379':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4380':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4381':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4382':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4383':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4384':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4385':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4386':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4387':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4388':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4389':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4390':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4391':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4392':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4393':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4394':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4395':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4396':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4397':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4398':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4399':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4400':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4401':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4402':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4403':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4404':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4405':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4406':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4407':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4408':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4409':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4410':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4411':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4412':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4413':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4414':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4415':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4416':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4417':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4418':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4419':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4420':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4421':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4422':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4423':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4424':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4425':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4426':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4427':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4428':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4429':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4430':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4431':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4432':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4433':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4434':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4435':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4436':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4437':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4438':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4439':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4440':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4441':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4442':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4443':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4444':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4445':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4446':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4447':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4448':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4449':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4450':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4451':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4452':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4453':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4454':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4455':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4456':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4457':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4458':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4459':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4460':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4461':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4462':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4463':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4464':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4465':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4466':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4467':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4468':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4469':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4470':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4471':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4472':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4473':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4474':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4475':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4476':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4477':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4478':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4479':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4480':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4481':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4482':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4483':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4484':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4485':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4486':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4487':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4488':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4489':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4490':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4491':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4492':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4493':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4494':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4495':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4496':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4497':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4498':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4499':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4500':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4700':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;

case '4750':
higer_then = 9998;
lower_then = 2;
win_tester = bet_value * (parseFloat(4750.00) - 1);
break;




						default:
							console.log("Phantomjs.WARNING!!! Cant get correct payout  samsing wrong... EXIT payout =" + payout);

							exit();
							break;
					} //switch

					count_value = rez_bet; //tester

					if (hi_or_lo === 'BET HI') {
						if (count_value > higer_then) {
							res_bet_from_count = 1;
							res_bet = 1;
						} else {
							res_bet_from_count = -1;
							res_bet = -1;
						}
					} else if (hi_or_lo === 'BET LO') {
						if (count_value < lower_then) {
							res_bet_from_count = 1;
							res_bet = 1;
						} else {
							res_bet_from_count = -1;
							res_bet = -1;
						}
					} else {
						//console.log("Phantomjs.Cent recognize count value. Exit count_value"+count_value);
						exit();
					}
				

					if (res_bet_from_count === 1) {
						//tester -----для тестера здесь ставка или процент, проигрываем ставку, выигрываем процент
						win_tester = win_tester.toFixed(8);

						win_tester = parseFloat(win_tester);
						//console.log("Phantomjs.win_tester="+win_tester);
						//save_log("Phantomjs.win_tester=" + win_tester);
						this_win_tester = win_tester * res_bet_from_count;
						this_win_tester = this_win_tester.toFixed(8);
						this_win_tester = parseFloat(this_win_tester);
						

						//console.log("Phantomjs.this_win_tester="+this_win_tester);
						//save_log("Phantomjs.this_win_tester=" + this_win_tester);
						//console.log("Phantomjs.this_game_total_tester="+this_game_total_tester);
						//save_log("Phantomjs.this_game_total_tester=" + this_game_total_tester);

					} else {
						//tester -----для тестера здесь ставка, проигрываем ставку, выигрываем процент
						win_tester = bet_value;

						win_tester = parseFloat(win_tester);
						//console.log("Phantomjs.win_tester="+win_tester);
					//	save_log("Phantomjs.win_tester=" + win_tester);
						this_win_tester = win_tester * res_bet_from_count;
						this_win_tester = this_win_tester.toFixed(8);
						this_win_tester = parseFloat(this_win_tester);
						
						

						//console.log("Phantomjs.this_win_tester="+this_win_tester);
						//save_log("Phantomjs.this_win_tester=" + this_win_tester);
						//console.log("Phantomjs.this_game_total_tester="+this_game_total_tester);
						//save_log("Phantomjs.this_game_total_tester=" + this_game_total_tester);

					}
					if (rez_bet==8888) {
						this_win_tester=this_win_tester+ bingo_value;
						//console.log("Phantomjs.bingo_value="+bingo_value);
						
		
					}
					this_game_total_tester = this_game_total_tester + this_win_tester;
					this_game_total_tester = this_game_total_tester.toFixed(8);
					this_game_total_tester = parseFloat(this_game_total_tester);

						
						this_game_total = this_game_total_tester; //tester

					//console.log("Phantomjs.count_value="+count_value+" res_bet="+res_bet+" res_bet_from_count="+res_bet_from_count);
					//save_log("Phantomjs.count_value=" + count_value + " res_bet=" + res_bet + " res_bet_from_count=" + res_bet_from_count);

					//_tester
					if (min_this_game_total_tester > this_game_total_tester) min_this_game_total_tester = this_game_total_tester;
if (min_this_game_total_testerf > this_game_total_tester) min_this_game_total_testerf = this_game_total_tester;

					//max_bet_tester = max_bet_tester.toFixed(8);
					//max_bet_tester = parseFloat(max_bet_tester);



					if (max_bet_tester < bet_value) {
						//save_log("Phantomjs.---------------------------------");
						//save_log("Phantomjs.max_bet_tester=" + max_bet_tester);
						//save_log("Phantomjs.bet_value=" + bet_value);
						//save_log("Phantomjs.---------------------------------");
						max_bet_tester = bet_value;
					}

					if (max_win_tester < this_win_tester) max_win_tester = this_win_tester;
					
					profit_los_tester = profit_los_tester + this_win_tester;
					profit_los_tester = profit_los_tester.toFixed(8);
					profit_los_tester = parseFloat(profit_los_tester);
					
					
					profit_los_tester_this = profit_los_tester_this + this_win_tester;
					profit_los_tester_this = profit_los_tester_this.toFixed(8);
					profit_los_tester_this = parseFloat(profit_los_tester_this);
					
					all_total=all_total+this_win_tester;
					//console.log("Phantomjs.min_this_game_total_tester="+min_this_game_total_tester);
					//save_log("Phantomjs.min_this_game_total_tester=" + min_this_game_total_tester);
					//console.log("Phantomjs.max_bet_tester="+max_bet_tester);
					//save_log("Phantomjs.max_bet_tester=" + max_bet_tester);
					//console.log("Phantomjs.max_win_tester="+max_win_tester);
					//save_log("Phantomjs.max_win_tester=" + max_win_tester);
					//console.log("Phantomjs.profit_los_tester="+profit_los_tester);
					
					save_log("\nPhantomjs.NEW BET============================="+
						'\nPhantomjs.rez_bet=' + rez_bet+
						"\nPhantomjs.mult_opt="+mult_opt+
						'\nhi_or_lo ='+hi_or_lo+
						'\nPhantomjs.payout=' + payout+
						'\nPhantomjs.bvfcount=' + bvfcount +
						'\nPhantomjs.bet_value=' + bet_value+
						"\nPhantomjs.this_win_tester=" + this_win_tester+
						'\nPhantomjs.this_game_total=' + this_game_total+
						"\nPhantomjs.min_this_game_total_tester=" + min_this_game_total_tester+
						"\nPhantomjs.profit_los_tester=" + profit_los_tester+
						'\nhi2='+hi2+
						'\nhi01='+hi01+
						'\nlo2='+lo2+
						'\nhi01='+lo01);
						
						
					
						
						
					//	fs.write("stat_tester.txt",ttt + " * " + i +  ";" + rez_bet + ";" + payout + ";"  + bet_value + ";" + this_win_tester + ";" + this_game_total_tester + ";" +hi_or_lo+";" +hi_this_1900+";" +lo_this_1900+";" +timer_1900+";" +timer_8888+";" +matrix_3_hi[1]+";" +matrix_3_hi[2]+";" +matrix_3_hi[3]+"\n","a")
						/* if (rez_bet>9995) hi_or_lo="BET HI";
						if (rez_bet<5) hi_or_lo="BET LO"; */
					//Вывожу какое количество выиграл тот или иной payout
					if (res_bet === 1) {

						if (payout === '1.01') {
							arr_pyout_rez[1] = arr_pyout_rez[1] + 1;
						} else {
							arr_pyout_rez[payout] = arr_pyout_rez[parseFloat(payout)] + 1;
						}
					}


					if (res_bet == 1) {
						ct++;
						i--;
						//console.log("i="+i);
						//next();//
						if (i <= 0 && this_game_total > 0) {

							//save_log("Phantomjs.NEW LETS Play");
							i = 0; //сколько раз будим играть

							this_game_total = 0;
							this_win = 0;

							this_game_total_tester = 0;
							this_win_tester = 0;

							payout = '' + 1.01;
							bet_value = 0.00000001;
						}
					} else if (res_bet == -1) {

						ct--;
						i--;
						if (i <= 0 && this_game_total > 0) {

							//save_log("Phantomjs.NEW LETS Play");
							i = 0; //сколько раз будим играть

							this_game_total = 0;
							this_win = 0;

							this_game_total_tester = 0;
							this_win_tester = 0;

							payout = '' + 1.01;
							bet_value = 0.00000001;
						}
					}

					function save_log(str_to_file) {
						
				//str_to_file = str_to_file + "\n";
			//fs.write(log_file, str_to_file, 'a');
					}

					function save_manager(str_to_file) {
						str_to_file = str_to_file + "\n";
						fs.write(manager_file, str_to_file, 'a');
					}

					function save_stat(stf) {
						stf = stf + "\n";
						fs.write(write_stat_to, stf, 'a');
					}

					function exit() {
						//now();
						page.render('example.png');
						//console.log(fin);
						console.log("Phantomjs.Exit.");
						//console.log("-------------------------");
						phantom.exit();

					}
					//if (how_many_from_statfile_read > 30000) exit();
					//how_many_from_statfile_read++;
					
						
				
				
				
				} //if rez_bet<=0.0001000000
			} //if (line != "")
				
			if ( this_game_total_tester<0 && stream.atEnd()){
				stream.close();
				stream = fs.open(stat_for_tester, 'r');
			}	
		
		} //while
		
		stream.close();
		
		

		count_average = sum_count / sum_gam;
		
		/* for (var t = 1; t <= 25; t++) {
				fs.write("arr_pyout_rez_tester.txt", "\nPhantomjs.payout=" + t + " total win on this payout=" + arr_pyout_rez[t], 'a');
			} */
			
		fs.write('total_tester.txt', '\n' + stoplos + '; '+ i_opt + '; ' + mult_opt + '; ' +optcount + '; '+ min_this_game_total_tester + '; ' +
			max_bet_tester + '; ' + max_win_tester + '; ' + profit_los_tester + '; ' + this_game_total + '; ' + sum_count + '; ' + sum_gam + '; '+hi_or_lo, 'a');
/* 
		if(!arr_total_hor[optcount]) arr_total_hor[optcount]="";
		arr_total_hor[optcount] = arr_total_hor[optcount]+"; ; ; ;"+ stoplos + ';'+ i_opt + '; ' + mult_opt + '; ' +optcount +
		'; '+ min_this_game_total_tester + '; ' + profit_los_tester
		
		fs.write('analiz_hor.txt',"" , 'w');
		for (arrth=1; arrth<=arr_total_hor.length; arrth++){
			fs.write('analiz_hor.txt',arr_total_hor[arrth]+"\n" , 'a');
		} */
		
		fs.write(i_opt+'analiz_hor.txt',stoplos + ';'+ i_opt + '; ' + mult_opt + '; ' +optcount +
		'; '+ min_this_game_total_tester + '; ' + profit_los_tester+"\n" , 'a');
		
		
		if (profit_los_tester>0.007){
			fs.write('total_tester_plus.txt', '\n' + stoplos + '; '+ i_opt + '; ' + mult_opt + '; ' +optcount + '; '+ min_this_game_total_tester + '; ' +
			max_bet_tester + '; ' + max_win_tester + '; ' + profit_los_tester + '; ' + this_game_total + '; ' + sum_count + '; ' + sum_gam + '; ' + count_average+'; '+hi_or_lo, 'a');

		}
		
	arr_all_total[arr_all_total_count]='\n' + stoplos + '; '+ i_opt + '; ' + mult_opt + '; ' +optcount + '; '+ all_total + '; ' +
			"max_bet_tester="+max_bet_tester + '; ' + "max_win_tester="+max_win_tester;
	
	fs.write('all_analiz.txt',"total" , 'w');
	for (arrt=1; arrt<=arr_all_total.length; arrt++){
		 fs.write('all_analiz.txt',arr_all_total[arrt] , 'a');
	 }
	
	
		
		
		
		
		
		/* if (min_this_game_total_tester<-0.005){
			fs.write('flashes.txt', '\n' + stoplos + '; '+ i_opt + '; ' + mult_opt + '; ' +optcount + '; '+ min_this_game_total_tester + '; ' +
			max_bet_tester + '; ' + max_win_tester + '; ' + profit_los_tester + '; ' + this_game_total + '; ' + sum_count + '; ' + sum_gam + '; ' + count_average+'; '+hi_or_lo, 'a');

		} */
		/* fs.write('total_tester.txt', '\n' + i_opt + '; ' + mult_opt + '; ' + min_this_game_total_tester + '; ' +
			max_bet_tester + '; ' + max_win_tester + '; ' + profit_los_tester + '; ' + this_game_total + '; ' + sum_count + '; ' + sum_gam + '; ' + count_average+'; '+hi_or_lo, 'a');
 */
		console.log('Phantomjs.min_=' + min_this_game_total_tester);
		console.log('Phantomjs.pl=' + profit_los_tester);
		analize();
		


	} else {
		console.log('Phantomjs.File for tester=' + stat_for_tester + ' not found, nothing to tester.Go to Analize.');
		exit();
	}
	
	}//countopt
} // -mult_opt
fs.write("this_total.txt",i_opt+ ";"+mult_opt+";"+" this_total="+this_total,"a");
} // -  i_opt
} // sl

/* fs.write("arr_1900.txt",'',"w");
for (var i=0; i<arr_1900.length; i++){
	if (arr_1900[i]){
		fs.write("arr_1900.txt",i+';'+arr_1900[i]+'\n',"a");
	}
} */
	
/* fs.write("arr_1900_list.txt",'',"w");
for (var i=0; i<arr_1900_list.length; i++){
	if (arr_1900_list[i]){
		fs.write("arr_1900_list.txt",i+';'+arr_1900_list[i]+'\n',"a");
	}
}	
 */
 
/* fs.write("arr_8888.txt",'',"w");
for (var i=0; i<arr_8888.length; i++){
	if (arr_8888[i]){
		fs.write("arr_8888.txt",i+';'+arr_8888[i]+'\n',"a");
	}
} */	

exit();

function analize(){	

		if(fs.isFile("total_tester.txt")){
			var stream = fs.open("total_tester.txt", 'r');
			
			var nline = 0;
			var arr_analiz=[];
			var arr_data=[];
			var arr_bmin=[];
			
			while(!stream.atEnd()) {
				var line = stream.readLine();
				if (nline===0) {nline++;}// пропустил первую строку
				else {
					if (line != ""){
						//console.log('Phantomjs.line=' + line);
						var line_data = line;
						
						first_arg=line.substring(0,line.indexOf(";"));
						first_arg=parseFloat(first_arg);
						
						first_arg=Math.abs(first_arg);
						line=line.substring(line.indexOf(";")+1);// обрезает сиволы с первого сивола ;+1 и до конца строки
						//console.log('Phantomjs.first_arg=' + first_arg);
						
						second_arg=line.substring(0,line.indexOf(";"));
						second_arg=parseFloat(second_arg);
						line=line.substring(line.indexOf(";")+1);// обрезает сиволы с первого сивола ;+1 и до конца строки
						//console.log('Phantomjs.second_arg=' + second_arg);
						
						min_this_game=line.substring(0,line.indexOf(";"));
						min_this_game=parseFloat(min_this_game);
						line=line.substring(line.indexOf(";")+1);// обрезает сиволы с первого сивола ;+1 и до конца строки
						
						max_bet=line.substring(0,line.indexOf(";"));
						max_bet=parseFloat(max_bet);
						line=line.substring(line.indexOf(";")+1);// обрезает сиволы с первого сивола ;+1 и до конца строки
						
						max_win=line.substring(0,line.indexOf(";"));
						max_win=parseFloat(max_win);
						line=line.substring(line.indexOf(";")+1);// обрезает сиволы с первого сивола ;+1 и до конца строки
						
						profit_los=line.substring(0,line.indexOf(";"));
						profit_los=parseFloat(profit_los);
						line=line.substring(line.indexOf(";")+1);// обрезает сиволы с первого сивола ;+1 и до конца строки
						
						this_game_total = line.substring(0,line.indexOf(";"));
						this_game_total=parseFloat(this_game_total);
						
						if (!arr_analiz[second_arg]) arr_analiz[second_arg]=[];// инициализация элемента иначе undifined
						if (!arr_analiz[second_arg][first_arg])arr_analiz[second_arg][first_arg]={};
						
						if (!arr_analiz[second_arg][first_arg].total)arr_analiz[second_arg][first_arg].total=0;
						arr_analiz[second_arg][first_arg].total=arr_analiz[second_arg][first_arg].total+this_game_total+profit_los;
					
						if (!arr_analiz[second_arg][first_arg].min) arr_analiz[second_arg][first_arg].min=0;
						if (arr_analiz[second_arg][first_arg].min > min_this_game) arr_analiz[second_arg][first_arg].min =min_this_game;
						
						if (!arr_analiz[second_arg][first_arg].bmin) arr_analiz[second_arg][first_arg].bmin="";
						if (min_this_game<= -53000) arr_analiz[second_arg][first_arg].bmin=arr_analiz[second_arg][first_arg].bmin+line_data + '\n';
						
						if (!arr_analiz[second_arg][first_arg].nomber) arr_analiz[second_arg][first_arg].nomber=0;
						arr_analiz[second_arg][first_arg].nomber = arr_analiz[second_arg][first_arg].nomber+1;
						
						if (!arr_analiz[second_arg][first_arg].sum_min) arr_analiz[second_arg][first_arg].sum_min=0;
						if (min_this_game >- 50000)arr_analiz[second_arg][first_arg].sum_min=arr_analiz[second_arg][first_arg].sum_min+min_this_game; 
						
						
						if (!arr_data[second_arg])arr_data[second_arg]=[];
						if (!arr_data[second_arg][first_arg])arr_data[second_arg][first_arg]='';
						arr_data[second_arg][first_arg] = arr_data[second_arg][first_arg]+line_data + '\n';
											
					}//if (line != "")
				}// if nline===0		
			}//while
			stream.close();
			
			fs.write("analiz2.txt", 'ANALIZ WITH STOPS\n', 'w');
			
			for (var i=0; i < arr_analiz.length; i++){
				if (arr_analiz[i]){  
					for (var t=1; t<=10000; t=t+1){
						if(arr_analiz[i][t]) {
							fs.write("analiz2.txt", i+';'+t+';'+arr_analiz[i][t].total+'; '+
							arr_analiz[i][t].min+'; '+
							arr_analiz[i][t].nomber+'; '+
							(arr_analiz[i][t].sum_min/arr_analiz[i][t].nomber)+'\n', 'a');
							//"\nsplashes"+'\n============================\n'+arr_analiz[i][t].bmin, 'a');
							//fs.write("analiz2.txt", '============================\n\n\n', 'a');
						}	
					}
					
					
				}	
			}
			
			/* for (var i=0; i < arr_data.length; i++){
				if (arr_data[i]){
					for (var t=1; t<=10.000100000; t=t+1){
						if(arr_data[i][t]) fs.write("analiz2.txt", i+';'+t+'\n'+arr_data[i][t]+'\n', 'a');
					}
					fs.write("analiz2.txt", '---\n', 'a');
				}	
			}
			 */
		
		} //if(fs.isFile("analiz2.txt")
		else {
			console.log('Phantomjs.WARNING!!! File for test  not found or empty, nothing to test.Chek it. Exit.');
			exit();
		}
	 
	function exit(){
	  console.log("Phantomjs.Exit.");
	  console.log("-------------------------");
	  phantom.exit();
	 //} 
	}
}//function analize	

