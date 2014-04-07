// format: 111-111-1111
var userPhoneNum = prompt("Please enter your phone number including dashes.");
var birthDate = prompt("Gimme your DOB too plz");
var postal = prompt("And your zipcode");
var isMarried = prompt("And are you married or lonely like me?");

if(userPhoneNum.length === 9) {
	alert("Don't forget the area code!")
} 
else if(userPhoneNum.length !== 12) {
	alert("Invalid phone number!" + "\n" +
	"Format should be: " + "\"123-123-1234\"");
} 
else if(userPhoneNum.charAt(2) && userPhoneNum.charAt(5) !== "-") {
	alert("Be sure to add dashes!" + "\n" +
	"Format should be: " + "\"123-123-1234\"");
}
else {
	alert("Looks good!");
}

if(birthDate.charAt(2) && birthDate.charAt(5) !== "/") {
	alert("Be suer to add slashes!" + "\n" +
	"Format should be: " + "xx/xx/xx"
	);
}