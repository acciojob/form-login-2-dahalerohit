//your JS code here. If required.

let form  = document.querySelector('form');
let first_name = document.getElementById('FirstName');
let last_name = document.getElementById('LastName');
let phone_number = document.getElementById('PhoneNumber');
let email_id = document.getElementById('EmailID');

form.addEventListener("submit", (e) =>{
e.preventDefault();
let firstname = first_name.value;
let lastname = last_name.value;
let phonenumber = phone_number.value;
let emailid = email_id.value;

 alert(
  "First Name: " + firstname + "\n" +
  "Last Name: " + lastname + "\n" +
  "Phone Number: " + phonenumber + "\n" +
  "Email ID: " + emailid
 );
})


