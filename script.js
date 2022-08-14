
// function sendMail( ) {
//   var templateParams = {
//     from_name : document.getElementById("fullName").value,
//     email_id : document.getElementById("email_id").value,
//     message : document.getElementById("message").value
//   };

//   emailjs.send('service_bssjf1p', 'template_k6og8dt' , templateParams)
//     .then(function (response) {
//       console.log('SUCCESS!', response.status, response.text);
//     }, function (error) {
//       console.log('FAILED...', error);
//     });
// }

window.onload = function () {
  let form = document.getElementById('contact-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    emailjs.sendForm('service_bssjf1p', 'template_k6og8dt', this)
      .then(function () {
        console.log('SUCCESS!');
        form.reset();
      }, function (error) {
        console.log('FAILED...', error);
      });
  });
}