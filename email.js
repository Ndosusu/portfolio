// Initialisation d'EmailJS
(function() {
    emailjs.init("Nicolas"); // Remplacez "YOUR_USER_ID" par votre ID utilisateur EmailJS
})();

// Gestionnaire d'événements pour le formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_ain5zzc', 'template_ugyrbqk', this)
        .then(function() {
            alert('Message envoyé avec succès !');
        }, function(error) {
            alert('Échec de l\'envoi du message : ' + JSON.stringify(error));
        });
});