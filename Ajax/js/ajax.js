var CHECK_USERNAME;// check user input format true or false
var CHECK_PASSWORD;// check password input format true or false 
var CHECK_EMAIL;// check mail input format true or false
var CHECK_DATE;// check date input format true or false

var colorError = "red";// notification's color error
var colorChecked = "green";// notification's color exactly

// constitute style
var fontFamily = 'Century Gothic';
var fontSize = '13px';
var marginLeft = '265px';

/**
 * Function for event click submitame
 * Send user information to server and response from server
 * Now haven't server, then not response
 */
 function checkSubmit() {
 	var user = document.getElementsByName("username")[0];
	var password = document.getElementsByName("password")[0];
	var email = document.getElementsByName("email")[0];
	var date = document.getElementsByName("inputDate")[0];
	//check again
	isInputUserName(user.value);// check user name agian before submit
	isInputPassword(password.value);// check password agian before submit
	isInputEmail(email.value);// check email agian before submit
	isUserInput(date.value);// check date agian before submit
 	var errorUserName = document.getElementById("u-error");
 	var errorPassword = document.getElementById("p-error");
 	console.log(user.value);
 	console.log(CHECK_USERNAME +" "+ CHECK_PASSWORD + " " + CHECK_EMAIL + " " + CHECK_DATE);
 	if(CHECK_USERNAME && CHECK_PASSWORD && CHECK_EMAIL && CHECK_DATE){
		var obj;
		// request ie 7 ie 8 chrome firefox
 		if (window.XMLHttpRequest) {
 			obj = new XMLHttpRequest();
 		}
 		else {
			// lower
 			obj = new ActiveXObject("Microsoft.XMLHTTP");
 		}
		// do when receive result
 		obj.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
 				document.getElementById("result").innerHTML = obj.responseText;
 			}
 		}
 		obj.open("GET", "result.php?username="+user.value, true); 
 		obj.send();
	}
	else
		return false;
}

/**
 * Function for event username input
 * @param {string} name
 * return true (checked) or false (inputUser Fail)
 */
function isInputUserName(name) {
	var errorUserName = document.getElementById("u-error");
	console.log(name.length);
	if (name.length < 8) {
		errorUserName.innerHTML = "Username lenght min 8 letter";
		changeName();
		return CHECK_USERNAME = false;
	}
	if (name.length > 50) {
		errorUserName.innerHTML = "Username lenght max 50 letter";
		changeName();
		return CHECK_USERNAME = false;
	}
	if (isSpecialCharacterRegExp(name)) {
		errorUserName.innerHTML = "Username contains `~!#$%^&*()+=[{]}'<,>?/\";:";
		changeName();
		return CHECK_USERNAME = false;
	}
	if (name.length >= 8 && name.length < 50) {
		errorUserName.innerHTML = "Checked";
		changeName();
		errorUserName.style.color = colorChecked;
		return CHECK_USERNAME = true;
	}
}


/**
 * Function for style username error
 */
function changeName() {
	var errorUserName = document.getElementById("u-error");
        errorUserName.style.color = colorError;
		errorUserName.style.marginLeft= marginLeft;
		errorUserName.style.fontSize= fontSize;
		errorUserName.style.fontFamily= fontFamily;
}

/**
 * Function for event password input
 * @param {string} name
 * return true (checked) or false (inputPassword Fail)
 */
function isInputPassword(name) {
	var errorPassword = document.getElementById("p-error");
	console.log(name.length);
	if (name.length < 8) {
		errorPassword.innerHTML = "Password lenght min 8 letter";
		changePass();
		return CHECK_PASSWORD = false;
	}
	if (name.length > 50) {
		errorPassword.innerHTML = "Password lenght max 50 letter";
		changePass();
		return CHECK_PASSWORD = false;
	}
	if (isSpecialCharacterRegExp(name)) {
		errorPassword.innerHTML = "Password contains `~!#$%^&*()+=[{]}'<,>?/\";:";
		changePass();
		return CHECK_PASSWORD = false;
	}
	if (name.length >= 8 && name.length < 50) {
		errorPassword.innerHTML = "Checked";
		changePass();
		errorPassword.style.color = colorChecked;
		CHECK_PASSWORD = true;
		console.log(CHECK_PASSWORD);
		return CHECK_PASSWORD;

	}

}

/**
 * Function for style password error
 */
function changePass() {
	var errorPassword = document.getElementById("p-error");
        errorPassword.style.color = colorError;
		errorPassword.style.marginLeft= '268px';
		errorPassword.style.fontSize= fontSize;
		errorPassword.style.fontFamily= fontFamily;
}

/**
 * Function for event email input
 * @param {string} name
 * return true (checked) or false (inputEmail Fail)
 */
function isInputEmail(name) {
	var errorEmail = document.getElementById("e-error");
	console.log(name.length);
	if (isSpecialCharacterRegExp(name) || (!isEmailRegExp(name))) {
		errorEmail.innerHTML = "Fail, please check again!!!";
		changeEmail();
		return CHECK_EMAIL = false;
	}
	if (isEmailRegExp(name)) {
		errorEmail.innerHTML = "Checked";
		changeEmail();
		errorEmail.style.color = colorChecked;
		return CHECK_EMAIL = true;
	}
}

/**
 * Function for style email error
 */
function changeEmail() {
	var errorEmail = document.getElementById("e-error");
        errorEmail.style.color = colorError;
		errorEmail.style.marginLeft= '292px';
		errorEmail.style.fontSize= fontSize;
		errorEmail.style.fontFamily= fontFamily;
}

/**
 * Function for check special character by regex `~!#$%^&*()+=[{]}\'<,>?/";:
 * @param {String} stringDay is format
 * @return {boolean} true if stringDay correct else return false
 */
function isSpecialCharacterRegExp(stringDay) {
	// Check day of user input with RegExp
	var rule = /\`|\~|\!|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\>|\?|\/|\"|\;|\:|\s/g;
	var checkRegex = new RegExp(rule);
	// begin check data with format
	if (!checkRegex.test(stringDay)) {
		return false;
	}
	return true;
}

/**
 * Function for check email by regex
 * @param {String} stringDay is format
 * @return {boolean} true if stringDay correct else return false
 */
function isEmailRegExp(stringDay) {
	// Check day of user input with RegExp
	var rule = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
	var checkRegex = new RegExp(rule);
	// begin check data with format
	if (!checkRegex.test(stringDay)) {
		return false;
	}
	return true;
}

/**
 * Function for event user input
 * @param {number} day
 * Call to restartCalendar() when finish
 */
function isUserInput(day) {
	if (isFormatAndLimit(day)) {
		notificationInDisplay(true);
		restartCalendar();
		return CHECK_DATE = true;
	}
	notificationInDisplay(false);
	restartCalendar();
	return CHECK_DATE = false;
}

/**
 * Function for notification in display
 * @param {boolean} isDay
 * if false, notificaion will change
 */
function notificationInDisplay(isDay) {
	var errorDate = document.getElementById("notification");
	if (isDay)
	{
	errorDate.innerHTML = "Checked";
	changeDate();
	}
	else  {
		errorDate.innerHTML = "Fail, please check again (MM/DD/YYYY)!!!";
		changeDate();
		errorDate.style.color = "red";
	}
}

/**
 * Function for style date error
 */
function changeDate() {
	var changeDate = document.getElementById("notification");
        changeDate.style.color = colorChecked;
		changeDate.style.marginLeft= '340px';
		changeDate.style.fontSize= fontSize;
		changeDate.style.fontFamily= 'Century Gothic';
}

/**
 * Function for check data format user input
 * @param {String} stringDay is format shortDate
 * @return {boolean} true if stringDay correct else return false
 */
function isFormatAndLimit(stringDay) {
	// Check day of user input with RegExp
	var rule = /^(\d{1,2})([\.\-\/\\ ])(\d{1,2})([\.\-\/\\ ])(\d{4})$/;// MM/DD/YYYY
	var checkRegex = new RegExp(rule);
	// begin check data with format
	if (!checkRegex.test(stringDay)) {
		return false;
	}
	// begin check data input in limit
	var dayTest = new Date(stringDay);
	if (dayTest == "Invalid Date") {
		return false;
	}
	return true;
}