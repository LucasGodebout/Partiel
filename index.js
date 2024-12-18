let currentTranslate = 0; // Position actuelle du slider

const slider = document.getElementsByClassName('slider'); // Assurez-vous que l'élément slider est correctement sélectionné
const sliderContainer = document.getElementById('slider-container'); // Conteneur du slider

// Calcul des limites
const maxTranslate = 0; // Limite maximale (première image)
const minTranslate = slider.scrollWidth - sliderContainer.offsetWidth; // Limite minimale (dernière image)

// Fonction pour faire défiler le slider automatiquement
function autoSlide() {
  currentTranslate -= 1; // Déplace le slider vers la gauche

  // Réinitialise la position du slider lorsqu'il atteint la fin
  if (currentTranslate < -minTranslate) {
    currentTranslate = maxTranslate;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;

  // Appelle la fonction autoSlide toutes les 10ms pour un défilement fluide
  requestAnimationFrame(autoSlide);
}

// Démarre le défilement automatique
autoSlide();