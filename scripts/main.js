// Intercambio de imágenes
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

function swapImages() {
    const temp = img1.src;
    img1.src = img2.src;
    img2.src = temp;
}

img1.addEventListener("click", swapImages);
img2.addEventListener("click", swapImages);

// Texto interactivo
const input = document.getElementById("userText");
const display = document.getElementById("displayText");

input.addEventListener("input", () => {
    display.textContent = input.value || "Tu mensaje aparecerá aquí...";
});

// Objeto en movimiento
let pos = 0;
setInterval(() => {
    pos += 2;
    if (pos > window.innerWidth) pos = -80;
    document.getElementById("movingObject").style.left = pos + "px";
}, 20);
