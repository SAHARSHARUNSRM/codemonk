// Load Testimonials

let container =
document.getElementById("testimonialContainer");

testimonials.forEach(item => {

container.innerHTML += `

<div class="testimonial-card">

<img src="${item.image}"
alt="${item.name}">

<h3>${item.name}</h3>

<p>"${item.feedback}"</p>

</div>

`;

});