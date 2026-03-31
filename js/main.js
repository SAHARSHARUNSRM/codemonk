/* ========================= */
/* NEWSLETTER VALIDATION */
/* ========================= */

let newsletterForm =
document.getElementById("newsletterForm");

if (newsletterForm) {

newsletterForm.addEventListener(
"submit",
function(event){

event.preventDefault();

let email =
document.getElementById("email").value;

let message =
document.getElementById("emailMessage");

/* Empty Check */

if(email === ""){

message.innerText =
"Please enter your email.";

message.style.color =
"yellow";

return;

}

/* Email Check */

if(!email.includes("@")){

message.innerText =
"Enter a valid email address.";

message.style.color =
"yellow";

return;

}

/* Success */

message.innerText =
"Subscribed successfully!";

message.style.color =
"lightgreen";

}

);

}


/* ========================= */
/* CONTACT FORM VALIDATION */
/* ========================= */

let contactForm =
document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener(
"submit",
function(event){

event.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("contactEmail").value;

let subject =
document.getElementById("subject").value;

let message =
document.getElementById("message").value;

let formMessage =
document.getElementById("formMessage");

/* Empty Fields Check */

if(
name === "" ||
email === "" ||
subject === "" ||
message === ""
){

formMessage.innerText =
"Please fill all fields.";

formMessage.style.color =
"red";

return;

}

/* Email Validation */

if(!email.includes("@")){

formMessage.innerText =
"Enter valid email.";

formMessage.style.color =
"red";

return;

}

/* Success */

formMessage.innerText =
"Message sent successfully!";

formMessage.style.color =
"green";

}

);

}