//your JS code here. If required.

let form  = document.querySelector('form');
let first_name = document.getElementById('FirstName');
let last_name = document.getElementById('LastName');
let phone_number = document.getElementById('PhoneNumber');
let email_id = document.getElementById('EmailID');

form.addEventListener("submit", (e) =>{
e.preventDefault();
firstname = first_name.value;
lastname = last_name.value;
phonenumber = phone_number.value;
emailid = email_id.value;

 alert(
  "First Name: " + firstname + "\n" +
  "Last Name: " + lastname + "\n" +
  "phone Number: " + phonenumber + "\n" +
  "Email ID: " + emailid
 );
})


