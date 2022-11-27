function validateForm() {
var fName = document.getElementById('firstName');
var lName = document.getElementById('lastName');
var address = document.getElementById('address');
var city = document.getElementById('city');
var postalCode = document.getElementById('postalCode');
var province = document.getElementById('province');
var age = document.getElementById('age');
var password = document.getElementById('password');
var confirm = document.getElementById('confirm');
var email = document.getElementById('email');

var pc = /[a-zA-Z][0-9][a-zA-Z][0-9][a-zA-Z][0-9]/; //postal code
var pv = /QC|ON|MN|SK|AB|BC/; //province
var pw = /[0-9]{1,}/; //password
var pw1 = /[A-Z]{1,}/; //password - at least one digit
var pw2 = /.{6,}/; //password - at least one upper-case character
var em = /[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}[\.][a-zA-Z0-9]{1,}/; //email

    if (fName.value == null || fName.value == "") {
        fName.setCustomValidity("Enter Your First Name");
    } else if (lName.value == null || lName.value == "") {
        lName.setCustomValidity("Enter Your Last Name");
    } else if (address.value == null || address.value == "") {
        address.setCustomValidity("Enter Your Address");
    } else if (city.value == null ||city.value == "") {
        city.setCustomValidity("Enter Your City");
    } else if (postalCode.value==null ||postalCode.value == "") {
        postalCode.setCustomValidity("Enter Your Postal Code");
    } else if (pc.test(postalCode.value) === false) {
        postalCode.setCustomValidity("Postal Code must be written as a0a0a0");
    } else if (province.value == null || province.value == "") {
        province.setCustomValidity("Enter Your Provice Code");
    } else if (pv.test(province.value) === false) {
        province.setCustomValidity("Province must be one of QC/ON/MN/SK/AB/BC");
    } else if (age.value == null || age.value == "") {
        age.setCustomValidity("Enter Your Age");
    } else if (age.value < 18) {
        age.setCustomValidity("Age has to be at least 18");
    } else if (password.value == null || password.value == "") {
        password.setCustomValidity("Enter Your Password");
    } else if (pw.test(password.value) === false) {
        password.setCustomValidity("Password must contain at least one digit");
    } else if (pw1.test(password.value) === false) {
        password.setCustomValidity("Password must contain at least one upper-case character");
    } else if (pw2.test(password.value) === false) {
        password.setCustomValidity("Passwords must have at least 6 characters");
    } else if (confirm.value == null || confirm.value == ""){
        password.setCustomValidity("Password confirmation Required");
    }else if (password.value != confirm.value) {
        confirm.setCustomValidity("Passwords and confirmed password must be identical");
    } else if (email.value == null || email.value == "") {
        email.setCustomValidity("Enter Your Email");
    } else if (em.test(email.value) === false) {
        email.setCustomValidity("Your email must include @ and .");
    } else {
        alert("Thanks for registering with our website, your customer record was created successfully!");
    }
}