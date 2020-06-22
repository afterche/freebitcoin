var mynumber="4"
var voice="voice"+mynumber+".msg"
var write_stat_to = "stat_frBfp"+mynumber+".txt";
var total_file="total"+mynumber+".txt"

var system = require('system');
var args = system.args;
var sysuser = system.args[1];
var page = require("webpage").create();
var fs = require("fs");
var execFile = require("child_process").execFile;
var home_dir = fs.workingDirectory;
page.onInitialized = function(){
    page.evaluate(function(){
        Math.log10 = Math.log10 || function(x) {
            return Math.log(x) / Math.LN10;
        };
    });
};
//init
switcher=1
line_log='';
var start_time = curent_time = "";
var balance = "";
var sbalance = "";
var answer = "";
var fname = "captcha.png";
var captcha_id = "";
var pc = ""; //page_content
var ip = "";
var ps = p = "";
var topCaptcha = leftCaptcha = 0;
var ami = "frBfp.js"; //system.args[0];//code name
var report = ami + " ";
var err_index = "";
var iglobal = 0;
var capcha_index = String(Math.random()).slice(9);
var capcha_name = capcha_index + ".png";
var capcha_tipe = "lin"; // Set captcha tipe

//****************Play file
var stat_for_tester = "stat.txt";

var log_file = "log_frBfp.txt";
var st_balance=0;

// 1.Login
// 2.Play
all_total=0;

/* page.onError = function(msg, trace) {
  console.log("page.onError");
  var msgStack = ['ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function +'")' : ''));
    });
  }
  console.error("1"+msgStack.join('\n'));
};

phantom.onError = function(msg, trace) {
  console.log("phantom.onError");
  var msgStack = ['PHANTOM ERROR: ' + msg];
  if (trace && trace.length) {
    msgStack.push('TRACE:');
    trace.forEach(function(t) {
      msgStack.push(' -> ' + (t.file || t.sourceURL) + ': ' + t.line + (t.function ? ' (in function ' + t.function +')' : ''));
    });
  }
  console.error("2"+msgStack.join('\n'));
  //phantom.exit(1);
};
 */
//Поехали
console.log("Phantomjs.^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
console.log("Phantomjs.Hello I am " + ami);
console.log("Phantomjs.Hello!");

console.log('Phantomjs.File with stat data for testering = ' + stat_for_tester);
console.log('Phantomjs.File for write stat data = ' + write_stat_to);
console.log('Phantomjs.File for log = ' + log_file);


console.log('Phantomjs.Create log file = ' + log_file);
fs.write(log_file, 'Phantomjs.Create log file = ' + log_file, 'w');

fs.write('WARNING.txt', '********Warnings\n ', 'w');

if (!fs.isFile(write_stat_to)) {
	console.log('Phantomjs.File for log not found create him = ' + write_stat_to);
	fs.write(write_stat_to, 'Phantomjs.File write_stat_to not foun creat him = ' + write_stat_to, 'w');
}

phantom.clearCookies();
ChekAndAddCooki();
pausek=0;
function ChekAndAddCooki() {
	var CookieJar = "cookiB.ck";
	if (fs.isFile(CookieJar)) {
		Array.prototype.forEach.call(JSON.parse(fs.read(CookieJar)), function(x) {
			phantom.addCookie(x);
			//console.log("Phantomjs."+x);
		});
	}
	setTimeout(OpenPage, 10000)
}

function OpenPage() {
	console.log("Phantomjs.OpenPage");
	page.viewportSize = {
		width: 1920,
		height: 1080
	}; //без этого вместо капчи картинка с Tиг пойми чем
	var useragent = [];
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	useragent.push('Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.4 (Change: )');
	useragent.push('Mozilla/5.0 (X11; U; Linux; fr-FR) AppleWebKit/523.15 (KHTML, like Gecko, Safari/419.3) Arora/0.4');
	useragent.push('Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6');
	useragent.push('Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14');
	useragent.push('Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50');
	useragent.push('Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34');
	page.settings.userAgent = 'Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50';
	console.log(page.settings.userAgent);
	page.open("https://freebitco.in/", function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page");
			fs.write("WARNING.txt","Phantomjs.Cant to load page. See screenshot. Exit.","a");
			setTimeout(full_screen_exit, 10000);
		} else {
			//setTimeout(full_screen_exit, 10000);
			setTimeout(testerLoginAfterCookies, 1000);
		}
	});
}

/* page.onError = function(msg, trace) {
    var msgStack = ['ERROR: ' + msg];
    if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function(t) {
            msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
        });
    }
    // uncomment to log into the console 
    // console.error(msgStack.join('\n'));
}; */

function testerLoginAfterCookies() {
	console.log("Phantomjs.testerLoginAfterCookies");
	var chek = false;
	chek = page.evaluate(function() {
		var be = document.getElementById("balance").innerHTML;
		return be;
	});
	console.log("Phantomjs.Chek=" + chek);
	if (!chek) {
		console.log("Phantomjs.Cant Login whith cookies chek cookies file");
		homepage_login_button(); //GoTo Inter data for LOGIN if new user or cookies not accepted	
	} else {
		console.log("Phantomjs.DONE to LOGIN with Cookis");
		setTimeout(SaveCookLogin, 10000); //GoTo Get free ROLL!!!

		//********** TO DO
		//lets_play
		//********** TO DO

	}
}

//---Inter data for LOGIN if new user or cookies not accepted
function homepage_login_button() {
	console.log("Phantomjs.homepage_login_button.");
	page.evaluate(function() {
		//нажать на кнопку LOGIN
		var hlbx1x1x1a = document.getElementsByClassName("login_menu_button")[0];
		var hlbx1x1x1e = document.createEvent("MouseEvents");
		hlbx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		hlbx1x1x1a.dispatchEvent(hlbx1x1x1e);
	});
	console.log("Phantomjs.EnterLoginData.");
	ps = "login here";
	p = "password here";
	usr = ps; //Login whith btc addres
	console.log("Phantomjs.usr=" + usr);
	page.evaluate(function(ps, p) {
		var eps = ps;
		var ep = p;
		document.getElementById("login_form_btc_address").value = eps; //<--------------------THIS
		document.getElementById("login_form_password").value = ep;
	}, ps, p);
	//setTimeout(select_captcha_type_solvemedia_login, 10000);
	//setTimeout (full_screen_exit, 10000);
	setTimeout (EnterAnswerLogin, 10000);
}

function select_captcha_type_solvemedia_login() {
	console.log("Phantomjs.Select_captcha_type_solvemedia.");
	page.evaluate(function() {
		document.getElementById("signup_page_captcha_types").value = "solvemedia";
		document.getElementById("solvemedia_captcha").style.display = "block";
		document.getElementById("recaptcha_v2_captcha").style.display = "none";
		//document.getElementById("recaptcha_v1_captcha").style.display = "none";
	});
	//setTimeout(GetCaptchaLogin, 10000);
	//setTimeout (full_screen_exit, 10000);
	
	setTimeout (EnterAnswerLogin, 10000);
}

function GetCaptchaLogin() {
	page.clipRect = {
		left: 1095,
		top: 353,
		width: 295,
		height: 127
	};
	//page.clipRect = { left: 700, top: 173, width: 500, height: 500};
	//page.clipRect = {top: 435, left: 855, width: 101, height: 15};
	console.log("Phantomjs.Get  captcha.");
	capcha_index = String(Math.random()).slice(9);
	capcha_name = capcha_index + ".png";
	capcha_tipe = "lin"; // Set captcha tipe
	capcha_name = capcha_tipe + capcha_name;
	page.render(capcha_name);
	start_time = new Date().getTime();
	send_file = "Yes";
	setTimeout(file_put(capcha_name), 8000);
	setTimeout(CaptchaRrecognizeFileLogin, 10000);
}

function CaptchaRrecognizeFileLogin() {
	if (send_file === "Yes") {
		curent_time = new Date().getTime();
		console.log("Phantomjs.Captcha_recognize.Time", curent_time - start_time);
		//setTimeout(full_screen_exit, 15000);
		if ((curent_time - start_time) > 210000) { //время на ввод капчи ms
			console.log("Phantomjs.Captcha_recognize.No time left... Next steep");
			//setTimeout(solcap, 15000);
			console.log("Phantomjs.Answer from Operator not present. Goto OCR");
			console.log("-------------------------------------------------------");
			setTimeout(solcap, 5000);
		} else {
			console.log("Phantomjs.Captcha_recognize.Get File...");

			//Where is catalog with captcha
			get_file("/js/100sat/answer/" + capcha_tipe + capcha_index + ".aw");
			//Where is catalog with captcha

			console.log("Phantomjs.Captcha_recognize.Waiting for an answer...");
			if (fs.isFile(capcha_tipe + capcha_index + ".aw")) { //если Tайлик есть
				answer = fs.read(capcha_tipe + capcha_index + ".aw");
				console.log("Phantomjs.answer=", answer);
				if (answer == "False") { //есть ответ - не могу разгадать
					console.log("Phantomjs.Geting a False answer, Samsing wrong, Exit...");
					setTimeout(full_screen_exit, 1000);
				} else { //есть ответ положительный
					send_file === "No"
					console.log("Phantomjs.answer=", answer);
					EnterAnswerLogin();
				}
			} else { //нету Tайла
				setTimeout(CaptchaRrecognizeFileLogin, 15000);
			}
		}
	} //send_file chek	
}

function EnterAnswerLogin() {
	

	//////////////////////////////////////
	answer="Remove_this_if_a_captcha_not_empty";
	//////////////////////////////////////
console.log("Phantomjs.Inter Answer to the webpage = ", answer);
	if (answer === "") {
		console.log("Phantomjs.We get an EMPTY answer. Exit. answer = ", answer);
		console.log("Phantomjs.Exit.");
		console.log("-------------------------");
		phantom.exit();
	} else {
		var aw = answer;
		
		page.evaluate(function(aw) {
			//document.getElementById("adcopy_response").value = aw;
			var bx1x1x1a = document.getElementById("login_button");
			var bx1x1x1e = document.createEvent("MouseEvents");
			bx1x1x1e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			bx1x1x1a.dispatchEvent(bx1x1x1e);
		}, aw);
		setTimeout(testerLogin, 10000);
		//setTimeout(full_screen_exit, 15000);
	}
}

function testerLogin() {
	var chek = false;
	chek = page.evaluate(function() {
		var be = document.getElementById("balance").innerHTML;
		return be;
	});
	
	console.log("Phantomjs.Chek=" + chek);
	if (!chek) {
		var err_login = "NOOOOOOOOOOOOOOOOOOOOOO";
		err_login = page.evaluate(function() {
			var be = document.getElementById("login_error").innerHTML;
			return be;
		});
		console.log("Phantomjs.Cant Login to the frb err_login=" + err_login + " ip=" + ip);
		fs.write("cantlogin.w", ami + " Cant Login to the frb err_login=", 'w'); //*[@id="login_error"]
		full_screen_exit();
	} else {
		console.log("Phantomjs.DONE to LOGIN");
		setTimeout(SaveCookLogin, 10000);
	}
}

function SaveCookLogin() {
	console.log("Phantomjs.Save cookies");
	var CookieJar = "cookiB.ck";
	fs.write(CookieJar, JSON.stringify(phantom.cookies), "w");
	setTimeout(GoToMULTIPLYBTC, 10000); // 2.Play
}

function file_put(pf) {
	execFile("ncftpput", ["-uftp-user", "-ppassword", "node", "/js/100sat/captcha", pf], null, function(err, stdout, stderr) {
		console.log("PUT: ", pf);
		console.log(stderr);
	})
}

function get_file(gf) {
	execFile("ncftpget", ["-uftp-user", "-ppassword", "-DD", "node", home_dir, gf], null, function(err, stdout, stderr) {
		console.log("GET: ", gf);
		console.log(stderr);
	})
}

function full_screen_exit() {
	page.clipRect = {
		top: 0,
		left: 0,
		width: 1920,
		height: 1600
	};
	page.render("frD.png");
	setTimeout(exit, 5000);
}

function exit() {
	console.log('Phantomjs.File with stat data for testering = ' + stat_for_tester);
	console.log('Phantomjs.File for write stat data = ' + write_stat_to);
	console.log('Phantomjs.File for log=' + log_file);
	console.log("Phantomjs.Exit.");
	console.log("-------------------------");
	phantom.exit();
}

function solcap() {
	var page2 = require("webpage").create();
	page2.settings.userAgent = 'Mozilla/5.0 (Unknown; Linux i686) AppleWebKit/534.34 (KHTML, like Gecko) Safari/534.34';
	page2.open('http://www.newocr.com/', function(status) {
		if (status !== "success") {
			console.log("Phantomjs.Cant to load page www.newocr.com");
			err_index = String(Math.random()).slice(9);
			fs.write(err_index + ".w", "Phantomjs.Cant to load page www.newocr.com");

			page2.render("newocr.png");
			page2.close();
			console.log("Phantomjs.Go to the next ocr.");
			setTimeout(solcap2, 1000);
		} else {
			console.log("Phantomjs.Page www.newocr.com Load. Good.");
			page2.uploadFile('input[name=userfile]', capcha_name);
			console.log("Phantomjs.Press preview.");
			page2.evaluate(function() {
				var lbx1x1x1a1 = document.getElementById("preview");
				var lbx1x1x1e1 = document.createEvent("MouseEvents");
				lbx1x1x1e1.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				lbx1x1x1a1.dispatchEvent(lbx1x1x1e1);
			});
			setTimeout(ocr, 25000);
			console.log("Phantomjs. Waiting FOR Prepare rezult ... ");
		}
	});

	function ocr() {
		console.log("Phantomjs. Prepare rezult ... ");
		var pp = page2.evaluate(function() {
			return document.getElementById("thumbnail-container").getElementsByClassName("alert")[0].textContent;
		});
		if (pp) {
			console.log("Phantomjs." + pp);
			//page2.render("newocr"+err_index+".jpg");
			setTimeout(solcap2, 1000);
		} else if (!pp) {
			console.log("Phantomjs. Trying to recognaze...");
			page2.evaluate(function() {
				var lbx1x1x1a1 = document.getElementById("ocr");
				var lbx1x1x1e1 = document.createEvent("MouseEvents");
				lbx1x1x1e1.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				lbx1x1x1a1.dispatchEvent(lbx1x1x1e1);
			});
			setTimeout(ocransw, 20000);
		}
	}

	function ocransw() {
		console.log("Phantomjs. Geting answer...");
		var pc = page2.evaluate(function() {
			return document.getElementById("ocr-result").textContent;
		});
		if (!pc) {
			console.log("Phantomjs. Empty or null answer try www.to-text.com");
			setTimeout(solcap2, 1000);
		}
		console.log("Phantomjs. RAW Answer is = " + pc);
		answer = pc.replace(/\n/g, ' ');
		answer = answer.trim();
		console.log("Phantomjs. Cultivated Answer is = " + answer);
		//page2.render("newocr"+err_index+".jpg");
		page2.close();
		setTimeout(EnterAnswerLogin, 1000);
	}
}

// 2.Play

var arr_pyout_rez = [];
for (var t = 1; t <= 25; t++) {
	arr_pyout_rez[t] = 0;
}

var min_this_game_total = 0;
var max_bet = 0;
var max_win = 0;
var profit_los = 0;

var i_opt = 50;
var min_this_game_total_tester = 0;
var max_bet_tester = 0;
var max_win_tester = 0;
var profit_los_tester = 0;
var rez_bet=0;

var hi_or_lo = "BET HI";
var tttt = 0;

var mult = 1;
	var hi2=0;
		var hi01=0;
		var hi10=0;
		hi101=0
		hi_this_1900=0;
		lo_this_1900=0;
		hi1900=0;
		lo1900=0;
		timer_1900=0;
		timer_8888=0;
		lololo=0
		hihihi=0
		var katcher = 0;
		flashes ='';
		
		
		matrix_3_hi = [] ;
		matrix_3_lo = [] ;
		
		matrix_3_hi [1]=0
		matrix_3_lo [1]=0
		
		
		
		hi5=0
		lo5=0
		

function GoToMULTIPLYBTC() {
	fbalance();
	st_balance = balance;
	console.log("Phantomjs.Press MULTIPLY BTC.");
	page.evaluate(function() {
		var lbx1x1x1a1 = document.getElementsByClassName("double_your_btc_link")[0];
		var lbx1x1x1e1 = document.createEvent("MouseEvents");
		lbx1x1x1e1.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		lbx1x1x1a1.dispatchEvent(lbx1x1x1e1);
	});
	//setTimeout (full_screen_exit, 10000);
	setTimeout(SetJackPot, 10000);
}

function SetJackPot (){
	chek_free_play=page.evaluate(function() {
		return document.getElementById("double_your_btc_tab").style.display;
		
	}); 
	console.log("chek_free_play="+chek_free_play)
	
	if(chek_free_play=="none"){
		console.log("Phantomjs.Cant switch to play mode. See screenshot. Exit.")
		fs.write("WARNING.txt","Phantomjs.Cant switch to play mode. See screenshot. Exit.","a");
		//setTimeout(ListeningTheVoice, 10000);
		setTimeout (full_screen_exit, 10000)
	
	} else{
		setTimeout(ListeningTheVoice, 10000);
	}
	
	/* console.log("Phantomjs.SetJackPot.");
	page.evaluate(function() {
		var lbx1x1x1a1 = document.getElementsByClassName("play_jackpot jackpot_input_margin hidden-field")[4];
		var lbx1x1x1e1 = document.createEvent("MouseEvents");
		lbx1x1x1e1.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		lbx1x1x1a1.dispatchEvent(lbx1x1x1e1);
	}); */
	//setTimeout (full_screen_exit, 10000);

}


console.log('Phantomjs.**********************');
console.log('Phantomjs.Lets Play. Runnig play mode, Good Luck ;)');
console.log('Phantomjs.**********************');

this_game_total_voice =0;
hiloswitch="none"

function ListeningTheVoice (){
	
	console.log("Phantomjs.Listening The Voice.");
	
	if (fs.isFile(voice)) {
		var stream = fs.open(voice, 'r');
		var line = stream.readLine();
		
		flashes=flashes+"===voice5.msg\n"
		flashes=flashes+line+"\n"
		flashes=flashes+"=\n"
		
		//this_game_total;hi_this_1900;lo_this_1900,timer_1900;timer_8888
		this_game_total_voice = line.substring(0, line.indexOf(";")); //
		this_game_total_voice= parseFloat(this_game_total_voice);
		console.log("this_game_total_voice="+this_game_total_voice);
		
		line = line.substring(line.indexOf(";") + 1); // обрезает сиволы с первого сивола ;+1 и до конца строки
		hi_this_1900_msg = line.substring(0, line.indexOf(";")); //
		hi_this_1900_msg= parseFloat(hi_this_1900_msg);
		console.log("hi_this_1900="+hi_this_1900_msg);
		
		line = line.substring(line.indexOf(";") + 1); // обрезает сиволы с первого сивола ;+1 и до конца строки
		lo_this_1900_msg = line.substring(0, line.indexOf(";")); //
		lo_this_1900_msg= parseFloat(lo_this_1900_msg);
		console.log("lo_this_1900="+lo_this_1900_msg);
		
		line = line.substring(line.indexOf(";") + 1); // обрезает сиволы с первого сивола ;+1 и до конца строки
		timer_1900 = line.substring(0, line.indexOf(";")); //
		timer_1900= parseFloat(timer_1900);
		console.log("timer_1900="+timer_1900);
		
		line = line.substring(line.indexOf(";") + 1); // обрезает сиволы с первого сивола ;+1 и до конца строки
		timer_8888 =  line.substring(0, line.indexOf(";"));
		timer_8888= parseFloat(timer_8888);
		console.log("timer_8888="+timer_8888);
		
		line = line.substring(line.indexOf(";") + 1); // обрезает сиволы с первого сивола ;+1 и до конца строки
		hiloswitch = line
		console.log("hiloswitch="+hiloswitch);		
					
	} else {
		console.log("Phantomjs.Cant Listening The Voice.");
		console.log("Phantomjs.Run with zero parameters.");
	}
	
	//setTimeout (full_screen_exit, 10000);
	setTimeout(LetsPlay, 10000);
	
}
ktt=0

function LetsPlay() {
	//console.log("Phantomjs. LetsPlay ... ");
	
	play=true;
	//------Go
	//init
	var count1 = 1;
	var count2 = 2;
	var start_time = "";
	var log = "";
	var res_bet = 0; //результат розыгрыша (проиграл,выиграл)
	var stop = 1; //остановить скрипт ввести в консоль stop=0;


	var i = 0; //сколько раз будим играть


	var ilog = i - 1; //Иначе не будут писаться в лог текущие значения 
	var cpt = 0;
	var cptmax = 10000;
	var balance = "";
	var ct = 0;
	var count_value = "";
	var sbalance = "";
	var fin = "";
	var stat = "";
	var log = "";
	var j = 10; //задержка между проверками счетчика, ms

	
	if(this_game_total_voice<0){
		console.log("Phantomjs. Get this_game_total from the voice5.msg");
		var this_game_total = this_game_total_voice;
		var this_game_total_tester = this_game_total_voice;
		console.log("Phantomjs. this_game_total="+this_game_total);
		this_game_total_voice=0;
	} else {
		var this_game_total = 0;
		var this_game_total_tester = 0;
	}
	
	
	var this_win = 0;
	var this_win_tester = 0;

	var payout = '' + 2;
	var bet_value = 0.00000001;

	var kpay=5;
		

	now();
	start_time = new Date();
	fbalance();
	sbalance = balance;
	
	//save_stat(i+";"+now()+";"+time()+";"+count_value+";"+balance+";"+res_bet+";"+bet_value+";"+this_game_total);
	real_play_or_tester = "lets_play"; // real_play or tester
	//console.log('Phantomjs.**********************');
	//console.log('Phantomjs.real_play_or_tester = ' + real_play_or_tester + ' Runnig play mode Good Luck');
	//console.log('Phantomjs.**********************');

	Strategy()

	function Strategy() {
		if (this_game_total <= -555350) {
			exit();
		}

		fs.write(total_file, 'i= ' + i_opt + ';' +
			'min_this_game=' + min_this_game_total + '; ' +
			'max_bet=' + max_bet + '; ' +
			'max_win=' + max_win + '; ' +
			'profit_los=' + profit_los + ' tttt= ' + tttt+'\n', 'w');
			

		tttt++;
		ktt++;
		sum_gam=tttt;
		console.log(tttt);
		
		
		if (tttt > 9998 && this_game_total >= 0) {//if (tttt > 9998 && this_game_total >= 0) {//9998
			
			//fs.write(log_file, 'Phantomjs.Create log file = '+log_file, 'w');
			play=false;
			
		}
		
		test_bal = page.evaluate(function() {
					var be = document.getElementById("balance").innerHTML;
					return be;
		});
		test_bal = parseFloat(test_bal);
		
		
		
				if (play){// иначе еще раз поставит пока баланс провериться
					
						//console.log("\nPhantomjs.NEW BET=============================");
						save_log("\nPhantomjs.NEW BET=============================");
		
						//******Parametrs********
						mult_opt=1000;
						//******Parametrs********
						
						timer_8888++;
						timer_1900++;
						bingo_value=0;
						
						
						
						
						
						//strategy
								hi_or_lo = "BET HI"
							}

							
						
						
							 if (this_game_total<= -.01) {
								this_game_total=0;
								this_game_total_tester=0;
							} 
	
								
								if (this_game_total*-1<=15*0.00000001){
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
									
								/* if 	(parseInt (payout)<1900){
									payout = '' + 2;
									bet_value = this_game_total*-1
								} */
								/* 	
									if (!arr_1900[timer_1900]) {
												timer_1900_count++;
												
									}	 */
									
									
							
									
							
								
						
						
						if (bet_value <= 0.00000001) bet_value = 0.00000001;
						
						if(bingo_value==0){
								console.log('Phantomjs.hi_or_lo=' + hi_or_lo);	
								
								console.log('Phantomjs.timer_1900=' + timer_1900);
								console.log('Phantomjs.hi_this_1900=' + hi_this_1900);
								console.log('Phantomjs.lo_this_1900=' + lo_this_1900);
								console.log('Phantomjs.timer_8888=' + timer_8888);
								console.log('Phantomjs.bingo_value=' + bingo_value);	
								console.log('Phantomjs.payout=' + payout);	
								console.log('Phantomjs.this_game_total =' + this_game_total);
								console.log('Phantomjs.bet_value=' + bet_value);
								} else{
									console.log('Phantomjs.timer_8888=' + timer_8888);
						}

					//Strategi --------------------------------- 

					
					
					
					
					
					
					//bet_value = parseFloat(bet_value);
					//bet_value = bet_value.toFixed(8);
					//bet_value = parseFloat(bet_value);
					
					

					//console.log('Phantomjs.this_game_total=' + this_game_total);
					save_log('Phantomjs.this_game_total=' + this_game_total);
					//console.log('Phantomjs.bet_value_from_this_game_total=' + bet_value);
					save_log('Phantomjs.bet_value_from_this_game_total=' + bet_value);

					//console.log('Phantomjs.mult=' + mult);
					save_log('Phantomjs.mult=' + mult);
									
					//console.log('Phantomjs.mult=' + mult);
					save_log('Phantomjs.payout=' + payout);
									
					//console.log('Phantomjs.mult=' + mult);
					save_log('Phantomjs.hi_or_lo=' + hi_or_lo);

					//console.log('Phantomjs.bet_value=' + bet_value);
					save_log('Phantomjs.bet_value=' + bet_value);

					
						// Test site online
						var chek = false;
						chek = page.evaluate(function() {
							var be = document.getElementById("balance").innerHTML;
							return be;
						});
						
						if (!chek) {
							console.log("Phantomjs.Cant Chek Balance");
							console.log("Phantomjs.Please CHEKIT");
							fs.write("WARNING.txt","\nPhantomjs.Cant Chek Balance.Please CHEKIT"+ this_game_total + ";" + balance,"a");
							exit();
						} else if(chek) {
							
							if (this_game_total<-0.00355){
								setTimeout(set_bet_play,65000)
								console.log('Phantomjs.Think mode...');
								console.log('Phantomjs.flashes...');
								console.log("*******************************paused");
								//hi_or_lo="BET LO"
								console.log('Phantomjs.hi_or_lo=' + hi_or_lo);
							}else{
								//console.log("Phantomjs.DONE Chek");
								set_bet_play();
							}
						}
						
				
				} //if (play){	
				else {
					PrintBalance();
					function PrintBalance(){
						fbalance();
						new_balance = balance;
						setTimeout (WriteBalance, 5000);
						
						function WriteBalance(){
							fs.write(total_file,"balance = "+st_balance+'\n', 'a');
							fs.write(total_file,"new_balance = "+new_balance+'\n', 'a');
							fs.write(total_file,"total = "+((parseFloat(new_balance)-parseFloat(st_balance))).toFixed(8)+'\n', 'a');
							fs.write(total_file,"+++flashes\n","a");
							fs.write(total_file,flashes,"a");
							fs.write(total_file,"====\n","a");
							fs.write(total_file,"hi_this_1900="+hi_this_1900+'\n',"a");
							fs.write(total_file,"lo_this_1900="+lo_this_1900+'\n',"a");
							fs.write(total_file,"timer_1900="+timer_1900+'\n',"a");
							fs.write(total_file,"timer_8888="+timer_8888+'\n',"a");
							fs.write(total_file,"=========================="+'\n',"a");
							
							fs.write('all_total_list.txt', 
								'min_this_game=' + min_this_game_total + '; ' +
								'max_bet=' + max_bet + '; ' +
								'max_win=' + max_win + '; ' +
								'profit_los=' + profit_los + '; ' +
								'balance=' + st_balance + '; ' +
								'new_balance=' + new_balance + '; ' +
								'total=' + ((parseFloat(new_balance)-parseFloat(st_balance))).toFixed(8) + '; ' +
								'hi_this_1900=' + hi_this_1900 + '; ' +
								'lo_this_1900=' + lo_this_1900 + '; ' +
								'hi_or_lo=' + hi_or_lo + '; ' +
								' tttt= ' + tttt+'\n', 'a');
							console.log ("tttt="+tttt);	
							exit();
						}	
					}
				}//(play)	
		
	}



	function set_bet_play() {
		
		
		window.__cfRLUnblockHandlers="true"
		//set PAYOUT
		var point = page.evaluate(function(payout) {
			document.getElementById('double_your_btc_payout_multiplier').value=payout
			document.getElementById('double_your_btc_payout_multiplier').focus()
			var element = document.getElementById('double_your_btc_payout_multiplier');
			var rect = element.getBoundingClientRect();
			return {
				x: rect.left + Math.floor(rect.width / 2),
				y: rect.top + Math.floor(rect.height / 2)
			};
		},payout);
		point.x = Math.floor(point.x);
		point.y = Math.floor(point.y);
		//page.sendEvent('click', point.x, point.y);
		page.sendEvent('keypress', "\n"); //set PAYOUT
		
		//set BET AMOUNT
		page.evaluate(function(bet_value) {
			document.getElementById('double_your_btc_stake').value = bet_value;
		}, bet_value);
		
		var point = page.evaluate(function(payout) {
			
			var element = document.getElementById('double_your_btc_stake');
			var rect = element.getBoundingClientRect();
			return {
				x: rect.left + Math.floor(rect.width / 2),
				y: rect.top + Math.floor(rect.height / 2)
			};
		},payout);
		point.x = Math.floor(point.x);
		point.y = Math.floor(point.y);
		page.sendEvent('click', point.x, point.y);
		page.sendEvent('keypress', "\n");
		
		
		//BET HI		
		if (hi_or_lo === 'BET HI') {
			//console.log('Phantomjs.Set_bet_play. bet_amount=' + bet_value + ' payout=' + payout + ' hi_or_low=' + hi_or_lo);
			save_log('Phantomjs.Set_bet_play. bet_amount=' + bet_value + ' payout=' + payout + ' hi_or_low=' + hi_or_lo);
			page.evaluate(function() {
				//нажать на кнопку 
				var sbhx1x1x1a = document.getElementById('double_your_btc_bet_hi_button');
				var sbhx1x1x1e = document.createEvent('MouseEvents');
				sbhx1x1x1e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				sbhx1x1x1a.dispatchEvent(sbhx1x1x1e);
			});
			count1 = get_count(); //так счетчик проверяю, наверное переписать можно)))
			setTimeout(chek_count, j);
		}
		//BET LO
		else if (hi_or_lo === 'BET LO') {
			//console.log('Phantomjs.Set_bet_play. bet_amount=' + bet_value + ' payout=' + payout + ' hi_or_low=' + hi_or_lo);
			save_log('Phantomjs.Set_bet_play. bet_amount=' + bet_value + ' payout=' + payout + ' hi_or_low=' + hi_or_lo);
			page.evaluate(function() {
				//нажать на кнопку 
				var sbhx1x1x1a = document.getElementById('double_your_btc_bet_lo_button');
				var sbhx1x1x1e = document.createEvent('MouseEvents');
				sbhx1x1x1e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				sbhx1x1x1a.dispatchEvent(sbhx1x1x1e);
			});
			
			count1 = get_count(); //так счетчик проверяю, наверное переписать можно)))
			setTimeout(chek_count, j);
		}
		
		
		
	} //end function 

	//Проверяем остановился ли счетчик   
	function chek_count() {
		count2 = get_count();
		if (count1 == count2) { //счетчик остановился
		//page.render('wtf.png');
			if (parseInt(count2)>10000){
				fbalance();
				console.log("WARNING!!!. count = "+count2);
				//save_stat("????????????"+tttt + " * " + i + ";" + now() + ";" + time() + ";" + count_value + ";" + res_bet + ";" + bet_value + ";" + this_win + ";" + this_game_total + ";" + balance);
				fs.write("WARNING.txt","????????????"+tttt + ";" + i + ";" + now() + ";" + time() + ";" + count_value + ";" + res_bet + ";" + bet_value + ";" + this_win + ";" + this_game_total + ";" + balance,"a");
				screen();
			
			} else {
				cpt=0;
				result();
			}
		
		} else if (count1 != count2) { //ограничение кол-ва проверок счетчика
			//console.log("cpt="+cpt);
			cpt++;
			if (cpt>=cptmax){
				page.render('wtf'+tttt+'.png');
				fs.write("WARNING.txt","????????????"+tttt + ";" + i + ";" + now() + ";" + time() + ";" + count_value + ";" + res_bet + ";" + bet_value + ";" + this_win + ";" + this_game_total + ";" + balance,"a");
				console.log("WARNING!!!. Cent chek counter ");
				console.log("WARNING!!!. count2= "+count2);
				exit();
			
			} else {
				count1 = count2;
				setTimeout(chek_count, j);
			}	
		}
	}
	
	function screen() {
		page.render('example'+tttt+'.png');
		setTimeout(chek_count, 3000);
		
	}
	
	

	//Return count value
	function get_count() {
		var ct = page.evaluate(function() {
			var cte =
				document.getElementById("multiplier_first_digit").innerHTML +
				document.getElementById("multiplier_second_digit").innerHTML +
				document.getElementById("multiplier_third_digit").innerHTML +
				document.getElementById("multiplier_fourth_digit").innerHTML +
				document.getElementById("multiplier_fifth_digit").innerHTML;
			return cte;
		});
		count_value = ct;
		return ct;
	}

	//Result
	function result() {
		
		//console.log("Phantomjs.count_value=" + count_value);
		save_log("Phantomjs.count_value=" + count_value);
		
		rez_bet=parseInt(count_value);		
		if (rez_bet<=5250) hi2++; else hi2=0;
		if (rez_bet<=1364) hi01++; else hi01=0;
		if (rez_bet<=594) hi101++; else hi101=0;
						
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
						

						
		res_bet = page.evaluate(function() {
			if ((document.getElementById('double_your_btc_bet_win').innerHTML) != "") { //1
				return 1;
			} else if ((document.getElementById('double_your_btc_bet_lose').innerHTML) != "") { //-1
				return -1;
			} else if (document.getElementById('double_your_btc_bet_lose').innerHTML == "" &&
				document.getElementById('double_your_btc_bet_win').innerHTML == "") { //NULL
				return 0;
			}
		}); //page.evaluate

		var res_text = page.evaluate(function() {
			return document.getElementById('double_your_btc_result').innerText;
		});
		res_text = res_text.replace(/\n/g, ' ');
		var win_rules = page.evaluate(function() {
			return document.getElementsByClassName('manual_bet_element manual_bet_gt_lt_p')[0].innerText;
		});

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

						case '2': // if (x === 'value2')
							higer_then = 5250;
							lower_then = 4750;
							win_tester = bet_value * (parseFloat(2) - 1);
							break;

						case '3': // if (x === 'value2')
							higer_then = 6833;
							lower_then = 3167;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '4': // if (x === 'value2')
							higer_then = 7625;
							lower_then = 2375;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '5': // if (x === 'value2')
							higer_then = 8100;
							lower_then = 1900;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '6': // if (x === 'value2')
							higer_then = 8417;
							lower_then = 1583;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '7': // if (x === 'value2')
							higer_then = 8643;
							lower_then = 1357;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '8': // if (x === 'value2')
							higer_then = 8813;
							lower_then = 1188;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '9': // if (x === 'value2')
							higer_then = 8944;
							lower_then = 1056;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '10': // if (x === 'value2')
							higer_then = 9050;
							lower_then = 950;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '11': // if (x === 'value2')
							higer_then = 9136;
							lower_then = 864;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '12': // if (x === 'value2')
							higer_then = 9208;
							lower_then = 792;
							win_tester = bet_value * (parseFloat(11.99) - 1);
							break;

						case '13': // if (x === 'value2')
							higer_then = 9269;
							lower_then = 731;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '14': // if (x === 'value2')
							higer_then = 9321;
							lower_then = 679;
							win_tester = bet_value * (parseFloat(13.99) - 1);
							break;

						case '15': // if (x === 'value2')
							higer_then = 9367;
							lower_then = 633;
							win_tester = bet_value * (parseFloat(15.01) - 1);
							break;

						case '16': // if (x === 'value2')
							higer_then = 9406;
							lower_then = 594;
							win_tester = bet_value * (parseFloat(15.99) - 1);
							break;

						case '17': // if (x === 'value2')
							higer_then = 9441;
							lower_then = 559;
							win_tester = bet_value * (parseFloat(16.99) - 1);
							break;

						case '18': // if (x === 'value2')
							higer_then = 9472;
							lower_then = 528;
							win_tester = bet_value * (parseFloat(17.99) - 1);
							break;

						case '19': // if (x === 'value2')
							higer_then = 9500;
							lower_then = 500;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '20': // if (x === 'value2')
							higer_then = 9525;
							lower_then = 475;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '21': // if (x === 'value2')
							higer_then = 9548;
							lower_then = 452;
							win_tester = bet_value * (parseFloat(21.02) - 1);
							break;

						case '22': // if (x === 'value2')
							higer_then = 9568;
							lower_then = 432;
							win_tester = bet_value * (parseFloat(21.99) - 1);
							break;

						case '23': // if (x === 'value2')
							higer_then = 9587;
							lower_then = 413;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '24': // if (x === 'value2')
							higer_then = 9604;
							lower_then = 396;
							win_tester = bet_value * (parseFloat(23.99) - 1);
							break;

						case '25': // if (x === 'value2')
							higer_then = 9620;
							lower_then = 380;
							win_tester = bet_value * (parseFloat(payout) - 1);
							break;

						case '26': // if (x === 'value2')
							higer_then = 9635;
							lower_then = 365;
							win_tester = bet_value * (parseFloat(26.03) - 1);
							break;


						case '27': // if (x === 'value2')
							higer_then = 9648;
							lower_then = 352;
							win_tester = bet_value * (parseFloat(26.99) - 1);
							break;

						case '28': // if (x === 'value2')
							higer_then = 9661;
							lower_then = 339;
							win_tester = bet_value * (parseFloat(28.02) - 1);
							break;

						case '29': // if (x === 'value2')
							higer_then = 9672;
							lower_then = 328;
							win_tester = bet_value * (parseFloat(28.96) - 1);
							break;

						case '30': // if (x === 'value2')
							higer_then = 9683;
							lower_then = 317;
							win_tester = bet_value * (parseFloat(29.97) - 1);
							break;

						case '31': // if (x === 'value2')
							higer_then = 9694;
							lower_then = 306;
							win_tester = bet_value * (parseFloat(31.05) - 1);
							break;

						case '32': // if (x === 'value2')
							higer_then = 9703;
							lower_then = 297;
							win_tester = bet_value * (parseFloat(32.99) - 1);
							break;

						case '33': // if (x === 'value2')
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
						
case '40':
higer_then = 9762;
lower_then = 238;
win_tester = bet_value * (parseFloat(39.92) - 1);
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
win_tester = bet_value * (parseFloat(54.91) - 1);
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
win_tester = bet_value * (parseFloat(69.85) - 1);
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
win_tester = bet_value * (parseFloat(74.80) - 1);
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
win_tester = bet_value * (parseFloat(84.82) - 1);
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
win_tester = bet_value * (parseFloat(89.62) - 1);
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

							case '125':
							higer_then = 9924;
							lower_then = 76;
							win_tester = bet_value * (parseFloat(125.00) - 1);
							break;

							case '150':
							higer_then = 9937;
							lower_then = 63;
							win_tester = bet_value * (parseFloat(150.79) - 1);
							break;

							case '175':
							higer_then = 9946;
							lower_then = 54;
							win_tester = bet_value * (parseFloat(175.93) - 1);
							break;

							case '200':
							higer_then = 9952;
							lower_then = 48;
							win_tester = bet_value * (parseFloat(197.92) - 1);
							break;

							case '225':
							higer_then = 9958;
							lower_then = 42;
							win_tester = bet_value * (parseFloat(226.19) - 1);
							break;

							case '250':
							higer_then = 9962;
							lower_then = 38;
							win_tester = bet_value * (parseFloat(250.00) - 1);
							break;

							case '275':
							higer_then = 9965;
							lower_then = 35;
							win_tester = bet_value * (parseFloat(271.43) - 1);
							break;

							case '300':
							higer_then = 9968;
							lower_then = 32;
							win_tester = bet_value * (parseFloat(296.88) - 1);
							break;

							case '325':
							higer_then = 9971;
							lower_then = 29;
							win_tester = bet_value * (parseFloat(327.59) - 1);
							break;

							case '350':
							higer_then = 9973;
							lower_then = 27;
							win_tester = bet_value * (parseFloat(351.85) - 1);
							break;

							case '375':
							higer_then = 9975;
							lower_then = 25;
							win_tester = bet_value * (parseFloat(380.00) - 1);
							break;

							case '400':
							higer_then = 9976;
							lower_then = 24;
							win_tester = bet_value * (parseFloat(395.83) - 1);
							break;

							case '425':
							higer_then = 9978;
							lower_then = 22;
							win_tester = bet_value * (parseFloat(431.82) - 1);
							break;

							case '450':
							higer_then = 9979;
							lower_then = 21;
							win_tester = bet_value * (parseFloat(452.38) - 1);
							break;

							case '475':
							higer_then = 9980;
							lower_then = 20;
							win_tester = bet_value * (parseFloat(475.00) - 1);
							break;

							case '500':
							higer_then = 9981;
							lower_then = 19;
							win_tester = bet_value * (parseFloat(500.00) - 1);
							break;

							case '525':
							higer_then = 9982;
							lower_then = 18;
							win_tester = bet_value * (parseFloat(527.78) - 1);
							break;

							case '550':
							higer_then = 9983;
							lower_then = 17;
							win_tester = bet_value * (parseFloat(558.82) - 1);
							break;

							case '575':
							higer_then = 9983;
							lower_then = 17;
							win_tester = bet_value * (parseFloat(558.82) - 1);
							break;

							case '600':
							higer_then = 9984;
							lower_then = 16;
							win_tester = bet_value * (parseFloat(593.75) - 1);
							break;

							case '625':
							higer_then = 9985;
							lower_then = 15;
							win_tester = bet_value * (parseFloat(633.33) - 1);
							break;

							case '650':
							higer_then = 9985;
							lower_then = 15;
							win_tester = bet_value * (parseFloat(633.33) - 1);
							break;

							case '675':
							higer_then = 9986;
							lower_then = 14;
							win_tester = bet_value * (parseFloat(678.57) - 1);
							break;

							case '700':
							higer_then = 9986;
							lower_then = 14;
							win_tester = bet_value * (parseFloat(678.57) - 1);
							break;

							case '725':
							higer_then = 9987;
							lower_then = 13;
							win_tester = bet_value * (parseFloat(730.77) - 1);
							break;

							case '750':
							higer_then = 9987;
							lower_then = 13;
							win_tester = bet_value * (parseFloat(730.77) - 1);
							break;

							case '775':
							higer_then = 9988;
							lower_then = 12;
							win_tester = bet_value * (parseFloat(791.67) - 1);
							break;

							case '800':
							higer_then = 9988;
							lower_then = 12;
							win_tester = bet_value * (parseFloat(791.67) - 1);
							break;

							case '825':
							higer_then = 9988;
							lower_then = 12;
							win_tester = bet_value * (parseFloat(791.67) - 1);
							break;

							case '850':
							higer_then = 9989;
							lower_then = 11;
							win_tester = bet_value * (parseFloat(863.64) - 1);
							break;

							case '875':
							higer_then = 9989;
							lower_then = 11;
							win_tester = bet_value * (parseFloat(863.64) - 1);
							break;

							case '900':
							higer_then = 9989;
							lower_then = 11;
							win_tester = bet_value * (parseFloat(863.64) - 1);
							break;

							case '925':
							higer_then = 9990;
							lower_then = 10;
							win_tester = bet_value * (parseFloat(950.00) - 1);
							break;

							case '950':
							higer_then = 9990;
							lower_then = 10;
							win_tester = bet_value * (parseFloat(950.00) - 1);
							break;

							case '975':
							higer_then = 9990;
							lower_then = 10;
							win_tester = bet_value * (parseFloat(950.00) - 1);
							break;

							case '1000':
							higer_then = 9990;
							lower_then = 10;
							win_tester = bet_value * (parseFloat(950.00) - 1);
							break;

							case '1025':
							higer_then = 9991;
							lower_then = 9;
							win_tester = bet_value * (parseFloat(1055.56) - 1);
							break;

							case '1050':
							higer_then = 9991;
							lower_then = 9;
							win_tester = bet_value * (parseFloat(1055.56) - 1);
							break;

							case '1075':
							higer_then = 9991;
							lower_then = 9;
							win_tester = bet_value * (parseFloat(1055.56) - 1);
							break;

							case '1100':
							higer_then = 9991;
							lower_then = 9;
							win_tester = bet_value * (parseFloat(1055.56) - 1);
							break;

							case '1125':
							higer_then = 9992;
							lower_then = 8;
							win_tester = bet_value * (parseFloat(1187.50) - 1);
							break;

							case '1150':
							higer_then = 9992;
							lower_then = 8;
							win_tester = bet_value * (parseFloat(1187.50) - 1);
							break;

							case '1175':
							higer_then = 9992;
							lower_then = 8;
							win_tester = bet_value * (parseFloat(1187.50) - 1);
							break;

							case '1200':
							higer_then = 9992;
							lower_then = 8;
							win_tester = bet_value * (parseFloat(1187.50) - 1);
							break;

							case '1225':
							higer_then = 9992;
							lower_then = 8;
							win_tester = bet_value * (parseFloat(1187.50) - 1);
							break;

							case '1250':
							higer_then = 9992;
							lower_then = 8;
							win_tester = bet_value * (parseFloat(1187.50) - 1);
							break;

							case '1275':
							higer_then = 9993;
							lower_then = 7;
							win_tester = bet_value * (parseFloat(1357.14) - 1);
							break;

							case '1300':
							higer_then = 9993;
							lower_then = 7;
							win_tester = bet_value * (parseFloat(1357.14) - 1);
							break;

							case '1325':
							higer_then = 9993;
							lower_then = 7;
							win_tester = bet_value * (parseFloat(1357.14) - 1);
							break;

							case '1350':
							higer_then = 9993;
							lower_then = 7;
							win_tester = bet_value * (parseFloat(1357.14) - 1);
							break;

							case '1375':
							higer_then = 9993;
							lower_then = 7;
							win_tester = bet_value * (parseFloat(1357.14) - 1);
							break;

							case '1400':
							higer_then = 9993;
							lower_then = 7;
							win_tester = bet_value * (parseFloat(1357.14) - 1);
							break;

							case '1425':
							higer_then = 9993;
							lower_then = 7;
							win_tester = bet_value * (parseFloat(1357.14) - 1);
							break;

							case '1450':
							higer_then = 9993;
							lower_then = 7;
							win_tester = bet_value * (parseFloat(1357.14) - 1);
							break;

							case '1475':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1500':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1525':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1550':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1575':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1600':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1625':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1650':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1675':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1700':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1725':
							higer_then = 9994;
							lower_then = 6;
							win_tester = bet_value * (parseFloat(1583.33) - 1);
							break;

							case '1750':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1775':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1800':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1825':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1850':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1875':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1900':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1925':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1950':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '1975':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '2000':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '2025':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '2050':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '2075':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '2100':
							higer_then = 9995;
							lower_then = 5;
							win_tester = bet_value * (parseFloat(1900.00) - 1);
							break;

							case '2125':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2150':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2175':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2200':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2225':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2250':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2275':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2300':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2325':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2350':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2375':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2400':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2425':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2450':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2475':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2500':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2525':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2550':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2575':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2600':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2625':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2650':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2675':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2700':
							higer_then = 9996;
							lower_then = 4;
							win_tester = bet_value * (parseFloat(2375.00) - 1);
							break;

							case '2725':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2750':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2775':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2800':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2825':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2850':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2875':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2900':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2925':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2950':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '2975':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '3000':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;

							case '3025':
							higer_then = 9997;
							lower_then = 3;
							win_tester = bet_value * (parseFloat(3166.67) - 1);
							break;						
					

						


			default:
				console.log("Phantomjs.WARNING!!! Cant get correct payout  samsing wrong... EXIT payout =" + payout);
				save_log(i + ";" + now() + ";" + time() + ";" + "Phantomjs.WARNING!!!  Cant get correct payout  samsing wrong... EXIT payout =" + payout);
				save_warning("Phantomjs.WARNING!!! Cant get correct payout  samsing wrong... EXIT payout =" + payout);
				exit();
				break;
		}

		if (hi_or_lo === 'BET HI') {
			if (count_value > higer_then) {
				res_bet_from_count = 1;
			} else {
				res_bet_from_count = -1;
			}
		} else if (hi_or_lo === 'BET LO') {
			if (count_value < lower_then) {
				res_bet_from_count = 1;
			} else {
				res_bet_from_count = -1;
			}
		} else {
			console.log("Phantomjs.Cent recognize count value. Exit count_value" + count_value);
			save_log(i + ";" + now() + ";" + time() + ";" + count_value + ";" + balance + ";" + res_bet + "Phantomjs.Cent recognize count value. Exit count_value" + count_value);
			exit();
		}

		//console.log("Phantomjs.win_rules=" + win_rules);
		//console.log("Phantomjs.res_bet=" + res_bet);
		//console.log("Phantomjs.res_text=" + res_text);

		save_log("Phantomjs.win_rules=" + win_rules);
		save_log("Phantomjs.res_bet=" + res_bet);
		save_log("Phantomjs.res_text=" + res_text);


		if (res_bet === 0) {
			var compare_rezult = "OK";
			save_warning("Phantomjs.WARNING!!! res_text=" + res_text);
			save_warning("Phantomjs.WARNING!!! res_bet=" + res_bet);
			save_warning("Phantomjs.WARNING!!! this_game_total=" + this_game_total);
			
			console.log("Phantomjs.WARNING!!! res_text=" + res_text);
			save_log("Phantomjs.WARNING!!! res_text=" + res_text);
			console.log("Phantomjs.WARNING!!! res_bet=" + res_bet);
			save_log("Phantomjs.WARNING!!! res_bet=" + res_bet);
			//setTimeout(set_bet_play, 1);
			exit();

		} else {


			var compare_rezult = "OK";

			if (res_bet === 1) {
				var rez_from_btc_text_line = res_text.replace(/[^.0-9]/gim, ''); //Удаляем из строки все кроме точек и циTр
				rez_from_btc_text_line = parseFloat(rez_from_btc_text_line);

				

				

				//console.log("Phantomjs.rez_from_btc_text_line=" + rez_from_btc_text_line);
				save_log("Phantomjs.rez_from_btc_text_line=" + rez_from_btc_text_line);

				//console.log("Phantomjs.this_win=" + this_win);
				save_log("Phantomjs.this_win=" + this_win);



				//console.log("Phantomjs.this_game_total=" + this_game_total);
				save_log("Phantomjs.this_game_total=" + this_game_total);


			

				//save_manager('*this_win=' + this_win + ':bet_value=' + bet_value + '*' + this_game_total);

			} else if (res_bet === -1) {
				var rez_from_btc_text_line = res_text.replace(/[^.0-9]/gim, ''); //Удаляем из строки все кроме точек и циTр
				rez_from_btc_text_line = parseFloat(rez_from_btc_text_line);

				

				


				//console.log("Phantomjs.rez_from_btc_text_line=" + rez_from_btc_text_line);
				save_log("Phantomjs.rez_from_btc_text_line=" + rez_from_btc_text_line);

				//console.log("Phantomjs.this_win=" + this_win);
				save_log("Phantomjs.this_win=" + this_win);



				//console.log("Phantomjs.this_game_total=" + this_game_total);
				save_log("Phantomjs.this_game_total=" + this_game_total);

				
			}
			
				this_win = rez_from_btc_text_line * res_bet;
					if (rez_bet==8888) {
						this_win=+ bingo_value;
						console.log("Phantomjs.bingo_value="+bingo_value);
						
		
					}

				this_game_total = this_game_total + this_win;
				this_game_total = this_game_total.toFixed(8);
				this_game_total = parseFloat(this_game_total);

			//console.log("Phantomjs.count_value=" + count_value + " res_bet=" + res_bet + " res_bet_from_count=" + res_bet_from_count + " compare_rezult=" + compare_rezult);
			save_log("Phantomjs.count_value=" + count_value + " res_bet=" + res_bet + " res_bet_from_count=" + res_bet_from_count + " compare_rezult=" + compare_rezult);

			if (min_this_game_total > this_game_total) min_this_game_total = this_game_total;
			if (max_bet < bet_value) max_bet = bet_value;

			if (max_win < this_win) max_win = this_win;
			profit_los = profit_los + this_win;
			profit_los = profit_los.toFixed(8);
			profit_los = parseFloat(profit_los);

			

			//console.log("Phantomjs.min_this_game_total=" + min_this_game_total);
			save_log("Phantomjs.min_this_game_total=" + min_this_game_total);



			//console.log("Phantomjs.max_bet=" + max_bet);
			save_log("Phantomjs.max_bet=" + max_bet);


			

			//console.log("Phantomjs.max_win=" + max_win);
			save_log("Phantomjs.max_win=" + max_win);

			

			//console.log("Phantomjs.profit_los=" + profit_los);
			save_log("Phantomjs.profit_los=" + profit_los);

						
						
						
						if (rez_bet===8888){
							flashes=flashes+timer_1900+";"+timer_8888+";"+bet_value+";"+hi_or_lo+";"+payout+";"+rez_bet+";"+sum_gam+";"+this_game_total+";"+line_log+";"+payout+";"+bet_value+";"+hi_or_lo+";"+this_game_total+
							";"+hi1900+";"+lo1900+";"+hi_this_1900+";"+lo_this_1900+";"+switcher+";"+hi_or_lo+"\n";
							fs.write("flashes.txt",flashes,"w");
							timer_8888=0;
							
						}
						
						if (rez_bet > 9995){
							hi1900++;
							hi_this_1900++;
							flashes=flashes+timer_1900+";"+timer_8888+";"+bet_value+";"+hi_or_lo+";"+payout+";"+rez_bet+";"+sum_gam+";"+this_game_total+";"+line_log+";"+payout+";"+bet_value+";"+hi_or_lo+";"+this_game_total+
							";"+hi1900+";"+lo1900+";"+hi_this_1900+";"+lo_this_1900+";"+switcher+";"+hi_or_lo+"\n";
							fs.write("flashes.txt",flashes,"w");
							timer_1900=0;
							lololo=0
							hihihi++
							
						}
						
						if (rez_bet < 5){
							lo1900++;
							lo_this_1900++;
							flashes=flashes+timer_1900+";"+timer_8888+";"+bet_value+";"+hi_or_lo+";"+payout+";"+rez_bet+";"+sum_gam+";"+this_game_total+";"+line_log+";"+payout+";"+bet_value+";"+hi_or_lo+";"+this_game_total+
							";"+hi1900+";"+lo1900+";"+hi_this_1900+";"+lo_this_1900+";"+switcher+";"+hi_or_lo+"\n";
							fs.write("flashes.txt",flashes,"w");
							timer_1900=0;
							lololo++
							hihihi=0
						}	
						console.log('Phantomjs.count_value=' + count_value);
						console.log('Phantomjs.rez_bet=' + rez_bet);						

			fs.write(voice,this_game_total+";"+hi_this_1900+";"+lo_this_1900+";"+timer_1900+";"+timer_8888+";"+hiloswitch,"w");
			
			if (res_bet == 1) {
				fbalance();
				ct++;
				i--;
				//console.log("i=" + i);
				next(); //
			} else if (res_bet == -1) {
				fbalance();
				//stat=balance+";;*"+"-1;";
				//save_stat(stat);
				ct--;
				i--;
				//console.log("i=" + i);
				next();
			} else if (res_bet == 0) {
				console.log("Phantomjs.result=WARNIG!!! Samthing Wrong in function ('result'). res_bet==0");
				save_log(i + ";" + now() + ";" + time() + ";" + count_value + ";" + balance + ";" + res_bet + "Phantomjs.result=WARNIG!!! Samthing Wrong in function ('result') res_bet=0!!!.")
				exit();
			} else {
				console.log("Phantomjs.result=WARNIG!!! Samthing Wrong in function ('result').");
				save_log(i + ";" + now() + ";" + time() + ";" + count_value + ";" + balance + ";" + res_bet + "Phantomjs.result=WARNIG!!! Samthing Wrong in function ('result').")
				exit();
			}
		}
	}

	function next() {
		if (i > 0 && stop) {
			fbalance();
			//console.log("Phantomjs.balance=" + balance);
			//console.log("Phantomjs.**************** NEXT PLAY");

			save_log("Phantomjs.balance=" + balance);
			//save_log("Phantomjs.**************** NEXT PLAY");

			save_stat(tttt + " * " + i + ";" + now() + ";" + time() + ";" + count_value + ";" + payout + ";" + res_bet + ";" + bet_value + ";" + this_win + ";" + this_game_total + ";" +hi_or_lo+";" +hi_this_1900+";" +lo_this_1900+";" +timer_1900+";" +timer_8888+";" + balance);
			// console.log(i+";"+now()+";"+time()+";"+count_value+";"+balance+";"+res_bet); 
			setTimeout(Strategy, 5000)

		} else if (i <= 0 && this_game_total > 0) {

			save_log("Phantomjs.NEW LETS Play");
			//save_manager("Phantomjs.NEW LETS Play");
			//console.log("Phantomjs.NEW LETS Play");
			save_stat(tttt + " * " + i + ";" + now() + ";" + time() + ";" + count_value + ";" + payout + ";" + res_bet + ";" + bet_value + ";" + this_win + ";" + this_game_total + ";" +hi_or_lo+";" +hi_this_1900+";" +lo_this_1900+";" +timer_1900+";" +timer_8888+";" + balance);
			LetsPlay();
		} else if (i <= 0 && this_game_total <= 0) {

			fbalance();
			//console.log("Phantomjs.balance=" + balance);
			// console.log("Phantomjs.**************** NEXT PLAY EXTRA");

			save_log("Phantomjs.balance=" + balance);
			//save_log("Phantomjs.**************** NEXT PLAY EXTRA");

			save_stat(tttt + " * " + i + ";" + now() + ";" + time() + ";" + count_value + ";" + payout + ";" + res_bet + ";" + bet_value + ";" + this_win + ";" + this_game_total + ";" +hi_or_lo+";" +hi_this_1900+";" +lo_this_1900+";" +timer_1900+";" +timer_8888+";" + balance);
			// console.log(i+";"+now()+";"+time()+";"+count_value+";"+balance+";"+res_bet); 
			setTimeout(Strategy, 1)
		} else {
			fbalance();
			save_stat(tttt + " * " + i + ";" + now() + ";" + time() + ";" + count_value + ";" + payout + ";" + res_bet + ";" + bet_value + ";" + this_win + ";" + this_game_total + ";" +hi_or_lo+";" +hi_this_1900+";" +lo_this_1900+";" +timer_1900+";" +timer_8888+";" + balance);
			fin = "j=" + j + "\n" +
				"StartBalance=" + sbalance + "\n" +
				"ct=" + ct + "\n" +
				"Balance=" + balance + "\n" +
				start_time + "<---start_time" + "\n" +
				new Date();
			log = "Done   " + fin;
			save_log(log);
			setTimeout(full_screen_exit, 1000); //<----------ОТЛАДОЧНЫЙ ВЫХОД
		}
	}

	function save_log(str_to_file) {
		//str_to_file=str_to_file+"\n";
		//fs.write(log_file, str_to_file, 'a');
	}

	function save_manager(str_to_file) {
		//str_to_file=str_to_file+"\n";
		//fs.write(manager_file, str_to_file, 'a');
	}

	function save_stat(stf) {
		stf = stf + "\n";
		fs.write(write_stat_to, stf, 'a');
	}
	
	function save_warning(war) {
		war = war + "\n";
		fs.write('WARNING.txt', war, 'a');
	}


	function time() {
		var t = new Date().getHours();
		t += ":" + new Date().getMinutes();
		t += ":" + new Date().getSeconds();
		t += ":" + new Date().getMilliseconds();
		return t;
	}

	//Date
	function now() {
		var d = new Date();
		return d;
	}

	function exit() {
		now();
		page.render('screen_by_exit.png');
		console.log(fin);
		console.log("Phantomjs.Exit.");
		console.log("-------------------------");
		phantom.exit();
		//} 
	}


	function fbalance() {
		
			var chekb=page.evaluate(function() {
				return  document.getElementById("bonus_account_wager").innerHTML;
			});
			
			if(parseFloat(chekb) != 0){
					balance = page.evaluate(function() {
						var be = document.getElementById("bonus_account_balance").innerHTML;
						return be;
				});
			
			} else{
				balance = page.evaluate(function() {
					var be = document.getElementById("balance").innerHTML;
					return be;
				});
			}
}
	
} //END LetsPlay	


function fbalance() {
		
			var chekb=page.evaluate(function() {
				return  document.getElementById("bonus_account_wager").innerHTML;
			});
			
			if(parseFloat(chekb) != 0){
					balance = page.evaluate(function() {
						var be = document.getElementById("bonus_account_balance").innerHTML;
						return be;
				});
			
			} else{
				balance = page.evaluate(function() {
					var be = document.getElementById("balance").innerHTML;
					return be;
				});
			}
}

function exit123() {
	if (ttt >= ttt2) {
		fbalance();
		console.log("Phantomjs.Exit.");
		console.log("-------------------------");
		phantom.exit();
	} else {
		ttt++;
		console.log("Phantomjs.ttt=", ttt);
		phantom.clearCookies();
		setTimeout(login, 5000);
	}
}

function now() {
	var d = new Date();
	console.log(d);
}

function page_reload() {
	page.reload();
	setTimeout(select_captcha_type_recaptcha_v1, 10000);
}