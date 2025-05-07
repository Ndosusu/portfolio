const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const lightModeIcon = document.getElementById('light-mode-icon');
const darkModeIcon = document.getElementById('dark-mode-icon');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM entièrement chargé');

    const fadeInElements = document.querySelectorAll('.fade-in');
    console.log('Éléments sélectionnés :', fadeInElements);

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log('Entrée observée :', entry);
            if (entry.isIntersecting) {
                console.log('Élément visible :', entry.target);
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => observer.observe(el));
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');

    // Basculer les images de mode clair et sombre
    if (isLightMode) {
        lightModeIcon.classList.remove('hidden');
        darkModeIcon.classList.add('hidden');
    } else {
        lightModeIcon.classList.add('hidden');
        darkModeIcon.classList.remove('hidden');
    }

    // Appliquer la classe light-mode aux autres éléments
    document.querySelectorAll('header, .project, .nav, #skills li, footer, button').forEach(el => {
        el.classList.toggle('light-mode', isLightMode);
    });

    drawCircle();
});

const form = document.getElementById('contact-form');
form.addEventListener('input', (event) => {
    const input = event.target;
    if (input.validity.valid) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
});

const customCursor = document.getElementById('custom-cursor');
const customLittleCursor = document.getElementById('custom-little-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    customLittleCursor.style.transform = `translate(${e.clientX + 10}px, ${e.clientY + 10}px)`;
});

const contactPopupTrigger = document.getElementById('contact-popup-trigger');
const contactPopup = document.getElementById('contact-popup');
const closePopupButton = document.getElementById('close-popup');

// Ouvrir le pop-up
contactPopupTrigger.addEventListener('click', () => {
    contactPopup.classList.remove('hidden');
});

// Fermer le pop-up
closePopupButton.addEventListener('click', () => {
    contactPopup.classList.add('hidden');
});

// Fermer le pop-up en cliquant à l'extérieur
window.addEventListener('click', (event) => {
    if (event.target === contactPopup) {
        contactPopup.classList.add('hidden');
    }
});

const projectPopupTrigger = document.getElementById('project-popup-trigger');
const projectPopup = document.getElementById('project-popup');
const projectPopupButton = document.getElementById('close-project-3-popup'); // Correction ici

// Ouvrir le pop-up
projectPopupTrigger.addEventListener('click', () => {
    projectPopup.classList.remove('hidden');
});

// Fermer le pop-up
projectPopupButton.addEventListener('click', () => { // Correction ici
    projectPopup.classList.add('hidden');
});

// Fermer le pop-up en cliquant à l'extérieur
window.addEventListener('click', (event) => {
    if (event.target === contactPopup) {
        contactPopup.classList.add('hidden');
    }
});

const skillsList = document.querySelector('#skills ul');

// Dupliquer les éléments pour un défilement fluide
skillsList.innerHTML += skillsList.innerHTML;

const skillsContainer = document.querySelector('#skills ul');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

scrollLeftButton.addEventListener('click', () => {
    skillsContainer.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRightButton.addEventListener('click', () => {
    skillsContainer.scrollBy({ left: 200, behavior: 'smooth' });
});