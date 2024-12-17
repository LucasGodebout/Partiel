const slider = document.getElementById("slider");

let isDragging = false; // Indique si on maintient la souris enfoncée
let startX = 0;         // Position initiale de la souris
let currentTranslate = 0; // Position actuelle du slider
let previousTranslate = 0; // Position avant le dernier mouvement

// Quand on appuie sur le bouton gauche de la souris
slider.addEventListener("mousedown", (e) => {
  if (e.button !== 0) return; // Ignore si ce n'est pas un clic gauche
  isDragging = true;
  startX = e.clientX; // Position horizontale initiale
  slider.style.transition = "none"; // Désactive la transition pour un drag naturel
});

// Quand on déplace la souris avec le bouton gauche enfoncé
window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const currentX = e.clientX; // Position actuelle de la souris
  const deltaX = currentX - startX; // Déplacement horizontal
  currentTranslate = previousTranslate + deltaX; // Mise à jour de la position du slider
  slider.style.transform = `translateX(${currentTranslate}px)`;
});

// Quand on relâche le bouton de la souris
window.addEventListener("mouseup", () => {
  if (!isDragging) return;
  isDragging = false;
  previousTranslate = currentTranslate; // Enregistre la dernière position
  slider.style.transition = "transform 0.3s ease-out"; // Réactive la transition fluide
});

// Réinitialise le glissement si la souris quitte la fenêtre
window.addEventListener("mouseleave", () => {
  isDragging = false;
});
