var userPhoneNum, birthDate, postalCode, userState, isMarried;

// Ask user for number, check it's length and if has dashes
userPhoneNum = prompt("Please enter your phone number including dashes.");
if(userPhoneNum.length !== 12) {
	alert("Invalid phone number!" + "\n" +
		"Format should be: " + "\"xxx-xxx-xxxx\"");
}
else if(!userPhoneNum.charAt(3) || !userPhoneNum.charAt(7) == "-") {
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

// // Ask user for zip, check length and isNum
postalCode = prompt("And your zipcode?");
if (!(postalCode.length === 5 || postalCode.length === 10 || postalCode.isNum)) {
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

// // ask if user married
isMarried = prompt("And are you married (or lonely like me)? (yes/no)");
if(!((isMarried === "yes") || (isMarried === "no") || (isMarried === "YES") || (isMarried === "NO"))) {
	alert("Please enter \"yes\" or \"no\" !");
}

alert("Here's your info: " + "\n" +
	"Your phone number is " + userPhoneNum + "." + "\n" + 
	"Your DOB is " + birthDate + "." + "\n" + 
	"Your Zip Code is " + postalCode + "." + "\n" +
	"Your state is " + userState + "." + "\n" +
	"Your marrage status is " + "\"" + isMarried + "\"" + "." + "\n");

// var usStates = [
//     { name: 'ALABAMA', abbreviation: 'AL'},
//     { name: 'ALASKA', abbreviation: 'AK'},
//     { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
//     { name: 'ARIZONA', abbreviation: 'AZ'},
//     { name: 'ARKANSAS', abbreviation: 'AR'},
//     { name: 'CALIFORNIA', abbreviation: 'CA'},
//     { name: 'COLORADO', abbreviation: 'CO'},
//     { name: 'CONNECTICUT', abbreviation: 'CT'},
//     { name: 'DELAWARE', abbreviation: 'DE'},
//     { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
//     { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
//     { name: 'FLORIDA', abbreviation: 'FL'},
//     { name: 'GEORGIA', abbreviation: 'GA'},
//     { name: 'GUAM', abbreviation: 'GU'},
//     { name: 'HAWAII', abbreviation: 'HI'},
//     { name: 'IDAHO', abbreviation: 'ID'},
//     { name: 'ILLINOIS', abbreviation: 'IL'},
//     { name: 'INDIANA', abbreviation: 'IN'},
//     { name: 'IOWA', abbreviation: 'IA'},
//     { name: 'KANSAS', abbreviation: 'KS'},
//     { name: 'KENTUCKY', abbreviation: 'KY'},
//     { name: 'LOUISIANA', abbreviation: 'LA'},
//     { name: 'MAINE', abbreviation: 'ME'},
//     { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
//     { name: 'MARYLAND', abbreviation: 'MD'},
//     { name: 'MASSACHUSETTS', abbreviation: 'MA'},
//     { name: 'MICHIGAN', abbreviation: 'MI'},
//     { name: 'MINNESOTA', abbreviation: 'MN'},
//     { name: 'MISSISSIPPI', abbreviation: 'MS'},
//     { name: 'MISSOURI', abbreviation: 'MO'},
//     { name: 'MONTANA', abbreviation: 'MT'},
//     { name: 'NEBRASKA', abbreviation: 'NE'},
//     { name: 'NEVADA', abbreviation: 'NV'},
//     { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
//     { name: 'NEW JERSEY', abbreviation: 'NJ'},
//     { name: 'NEW MEXICO', abbreviation: 'NM'},
//     { name: 'NEW YORK', abbreviation: 'NY'},
//     { name: 'NORTH CAROLINA', abbreviation: 'NC'},
//     { name: 'NORTH DAKOTA', abbreviation: 'ND'},
//     { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
//     { name: 'OHIO', abbreviation: 'OH'},
//     { name: 'OKLAHOMA', abbreviation: 'OK'},
//     { name: 'OREGON', abbreviation: 'OR'},
//     { name: 'PALAU', abbreviation: 'PW'},
//     { name: 'PENNSYLVANIA', abbreviation: 'PA'},
//     { name: 'PUERTO RICO', abbreviation: 'PR'},
//     { name: 'RHODE ISLAND', abbreviation: 'RI'},
//     { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
//     { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
//     { name: 'TENNESSEE', abbreviation: 'TN'},
//     { name: 'TEXAS', abbreviation: 'TX'},
//     { name: 'UTAH', abbreviation: 'UT'},
//     { name: 'VERMONT', abbreviation: 'VT'},
//     { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
//     { name: 'VIRGINIA', abbreviation: 'VA'},
//     { name: 'WASHINGTON', abbreviation: 'WA'},
//     { name: 'WEST VIRGINIA', abbreviation: 'WV'},
//     { name: 'WISCONSIN', abbreviation: 'WI'},
//     { name: 'WYOMING', abbreviation: 'WY' }
// ];