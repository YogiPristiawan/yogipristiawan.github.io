// constanst
const BIRTHDAY = "2000-07-24";

// script
const ageField = document.getElementById("age");

const today = new Date();
const birthDay = new Date(BIRTHDAY);

let age = today.getFullYear() - birthDay.getFullYear();

if (
	today.getMonth() < birthDay.getMonth() ||
	(today.getMonth() == birthDay.getMonth() &&
		today.getDate() < birthDay.getDate())
) {
	age--;
}
ageField.innerHTML = age;
