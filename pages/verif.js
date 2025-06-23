document.addEventListener("DOMContentLoaded", function () {
  const numeroInput = document.getElementById("numero");
  const logo = document.getElementById("logo");
  const check = document.getElementById("check");
  const resultat = document.getElementById("resultat");

  numeroInput.addEventListener("input", () => {
    const numero = numeroInput.value.trim();

    // Réinitialisation
    logo.style.display = "none";
    check.style.display = "none";
    resultat.textContent = "";

    // Affichage du logo selon l'opérateur
    if (numero.startsWith("4")) {
      logo.src = "../assets/mauritel.png";
      logo.style.display = "inline";
    } else if (numero.startsWith("3")) {
      logo.src = "../assets/mattel.png";
      logo.style.display = "inline";
    } else if (numero.startsWith("2")) {
      logo.src = "../assets/chinguitel.png";
      logo.style.display = "inline";
    }

    // Validation du numéro
    const valid = /^(2|3|4)\d{7}$/.test(numero);
    if (valid) {
      check.style.display = "inline";
      resultat.textContent = "Numéro valide ✅";
    } else {
      resultat.textContent = "";
    }
  });
});
