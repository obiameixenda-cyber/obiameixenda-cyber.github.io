// 1. INTERCAMBIO DE IMÁGENES AL HACER CLIC
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');

function swapImages() {
    const tempSrc = img1.src;
    const tempAlt = img1.alt;
    
    img1.src = img2.src;
    img1.alt = img2.alt;
    
    img2.src = tempSrc;
    img2.alt = tempAlt;
}

img1.addEventListener('click', swapImages);
img2.addEventListener('click', swapImages);

// 2. CAMPO DE TEXTO QUE CAMBIA CONTENIDO
const userTextInput = document.getElementById('userText');
const displayText = document.getElementById('displayText');

userTextInput.addEventListener('input', function() {
    if (this.value.trim() === '') {
        displayText.textContent = 'Tu mensaje aparecerá aquí...';
        displayText.style.color = '#a0d8ef';
    } else {
        displayText.textContent = '🌱 ' + this.value + ' 🌱';
        displayText.style.color = '#00ff88';
    }
});

// 3. OBJETO EN MOVIMIENTO
const movingObject = document.getElementById('movingObject');
let posX = Math.random() * (window.innerWidth - 80);
let posY = Math.random() * (window.innerHeight - 80);
let velocityX = 2 + Math.random() * 2;
let velocityY = 2 + Math.random() * 2;

function moveObject() {
    posX += velocityX;
    posY += velocityY;

    // Rebote en los bordes
    if (posX <= 0 || posX >= window.innerWidth - 80) {
        velocityX = -velocityX;
    }
    if (posY <= 0 || posY >= window.innerHeight - 80) {
        velocityY = -velocityY;
    }

    movingObject.style.left = posX + 'px';
    movingObject.style.top = posY + 'px';

    requestAnimationFrame(moveObject);
}

moveObject();

// Ajustar posición del objeto en movimiento al cambiar tamaño de ventana
window.addEventListener('resize', function() {
    if (posX > window.innerWidth - 80) posX = window.innerWidth - 80;
    if (posY > window.innerHeight - 80) posY = window.innerHeight - 80;
});
