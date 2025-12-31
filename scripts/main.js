// Cambiar color de fondo
var colorBtn = document.getElementById('color-btn');
var colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a'];
var currentIndex = 0;

colorBtn.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % colors.length;
  document.body.style.background = 'linear-gradient(135deg, ' + colors[currentIndex] + ' 0%, ' + colors[(currentIndex + 1) % colors.length] + ' 100%)';
  
  var message = document.getElementById('message');
  message.innerHTML = '¡Color cambiado! Haz clic de nuevo para más colores.';
  
  // Limpiar mensaje después de 2 segundos
  setTimeout(function() {
    message.innerHTML = '';
  }, 2000);
});

// Animación de bienvenida
window.addEventListener('load', function() {
  var header = document.querySelector('header');
  header.style.opacity = '0';
  header.style.transform = 'translateY(-20px)';
  header.style.transition = 'all 0.5s ease';
  
  setTimeout(function() {
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
  }, 100);
});

// Efecto en la foto de perfil
var profilePic = document.getElementById('profile-pic');
profilePic.addEventListener('click', function() {
  this.style.transform = 'rotate(360deg) scale(1.1)';
  setTimeout(function() {
    profilePic.style.transform = 'rotate(0deg) scale(1)';
  }, 500);
});
