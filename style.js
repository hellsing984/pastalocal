function toggleDarkMode() {
  // Ajoute ou enlève la classe "dark-mode" sur le body pour activer/désactiver le mode sombre
  document.body.classList.toggle("dark-mode");

  // Change le texte du bouton en fonction de l'état du mode sombre
  const button = document.querySelector('.darkmode button');
  if (document.body.classList.contains("dark-mode")) {
      button.textContent = "Light Mode";
  } else {
      button.textContent = "Dark Mode";
  }
}

