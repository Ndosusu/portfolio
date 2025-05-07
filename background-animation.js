const canvas = document.getElementById('animated-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circle = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 300,
    baseRadius: 300,
    colorStops: {
        dark: ['rgba(63, 15, 39, 0.5)', 'rgba(0, 0, 0, 0.2)'],
        light: ['rgba(190, 134, 162, 0.5)', 'rgba(190, 103, 147, 0.5)']
    },
    pulseSpeed: 0.0005,
};

function drawCircle() {
    const isLightMode = document.body.classList.contains('light-mode');
    const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);

    const colors = isLightMode ? circle.colorStops.light : circle.colorStops.dark;
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient; // Utilise le dégradé
    ctx.fill();
}

function animateCircle() {
    circle.radius = circle.baseRadius + Math.sin(Date.now() * circle.pulseSpeed) * 50;
    if (circle.radius < 0) circle.radius = 0; // Empêche un rayon négatif
    drawCircle();
}

function animateBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animateCircle(); // Dessine le cercle
    requestAnimationFrame(animateBackground);
}

// Initialize
animateBackground();

