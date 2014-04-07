var userPhoneNum, birthDate, postalCode, userState, isMarried;

// Ask user for number, check it's length and if has dashes
userPhoneNum = prompt("Please enter your phone number including dashes.");
if(userPhoneNum.length !== 12) {
	alert("Invalid phone number!" + "\n" +
		"Format should be: " + "\"xxx-xxx-xxxx\"");
}
else if(userPhoneNum.charAt(3) && userPhoneNum.charAt(7) !== "-") {
	alert("Be sure to add dashes!" + "\n" +
		"Format should be: " + "\"xxx-xxx-xxxx\"");
}

// Ask user for DOB, check syntax
birthDate = prompt("Gimme your DOB too plz");
if(birthDate.charAt(2) && birthDate.charAt(5) !== "/") {
	alert("Be suer to add forward (/) slashes!" + "\n" +
		"Format should be: " + "xx/xx/xx"
		);
}

// Ask user for zip, check length and isNum
postalCode = prompt("And your zipcode?");
if((postalCode.length !== 5) || (postalCode.length !== 10) || (!postalCode.isNum)) {
	alert("Please enter a proper area code!" + "\n" +
		"Format should be: " + "\"xxxxx\" or \"xxxx-xxxx\""
		);
}

// Ask user for their state of residency
userState = prompt("Where do you live? (enter 2-letter state code)");
if((userState.length === 2) && (userState === userState.toUpperCase())) {
}
else {
	alert("Enter a 2-letter state code!");
}

// ask if user married
isMarried = prompt("And are you married (or lonely like me)? (yes/no)");
if(!((isMarried === "yes") || (isMarried === "no") || (isMarried === "YES") || (isMarried === "NO"))) {
 alert("Please enter \"yes\" or \"no\" !");
}

// alert("You are: " + "\n")
