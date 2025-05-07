document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("4_vhXh0ZbiQ1Sora9"); // remplace par ta clé publique
  
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      emailjs.sendForm('service_ain5zzc', 'template_ugyrbqk', this)
        .then(() => {
          alert('Message envoyé avec succès !');
          form.reset();
        }, (error) => {
          alert('Erreur lors de l\'envoi : ' + JSON.stringify(error));
        });
    });
  });
  
