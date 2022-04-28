var fname = document.forms['form']['fname'];
var lname = document.forms['form']['lname'];
var email = document.forms['form']['email'];
var pnumber = document.forms['form']['pnumber'];
var password = document.forms['form']['password'];


var fname_error = document.getElementById('fname_error');
var lname_error = document.getElementById('lname_error');
var email_error = document.getElementById('email_error');
var pnumber_error = document.getElementById('pnumber_error');
var pass_error = document.getElementById('pass_error');


fname.addEventListener('textInput', fname_Verify);
lname.addEventListener('textInput', lname_Verify);
email.addEventListener('textInput', email_Verify);
pnumber.addEventListener('textInput', pnumber_Verify);
password.addEventListener('textInput', pass_Verify);


function validated(){
	if (fname.value.length < 3) {
		fname.style.border = "1px solid red";
		fname_error.style.display = "block";
		fname.focus();
		return false;
	}
	if (lname.value.length < 3) {
		lname.style.border = "1px solid red";
		lname_error.style.display = "block";
		lname.focus();
		return false;
	}
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (pnumber.value.length < 10) {
		pnumber.style.border = "1px solid red";
		pnumber_error.style.display = "block";
		pnumber.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}

function fname_Verify(){
	if (fname.value.length >= 3) {
		fname.style.border = "1px solid silver";
		fname_error.style.display = "none";
		return true;
	}
}
function lname_Verify(){
	if (lname.value.length >= 3) {
		lname.style.border = "1px solid silver";
		lname_error.style.display = "none";
		return true;
	}
}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pnumber_Verify(){
	if (pnumber.value.length =10) {
		pnumber.style.border = "1px solid silver";
		pnumber_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

