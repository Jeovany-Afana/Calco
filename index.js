const numeros = document.querySelectorAll(".numero");
const result = document.getElementById("result");
const signes = document.querySelectorAll(".signe");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equal");
let partie1;
let partie2;
let signeChoisi = "";

numeros.forEach(function (element) {
  //Ajout de l'évènement de click aux boutons

  element.addEventListener("click", function () {
    result.value += element.innerHTML;
  });
});

//Choix du signe
//On ajoute un évènement 'click' aux boutons qui ont la classe Signe
//On utilise un switch ici pour connaitre quel signe a été choisi par l'utilisateur, et pour ça on utilise le innerHTML

signes.forEach(function (element) {
  element.addEventListener("click", function () {
    switch (element.innerHTML) {
      case "+":
        partie1 = parseFloat(result.value); //On transforme le contenur de l'écran en entier
        result.value = ""; //On librère l'écran après avoir récupérer la première partie du calcul
        signeChoisi = "+";
        break;

      case "-":
        partie1 = parseFloat(result.value); //On transforme le contenur de l'écran en entier
        result.value = ""; //On librère l'écran après avoir récupérer la première partie du calcul
        signeChoisi = "-";
        break;

      case "×":
        partie1 = parseFloat(result.value); //On transforme le contenur de l'écran en entier
        result.value = ""; //On librère l'écran après avoir récupérer la première partie du calcul
        signeChoisi = "×";
        break;

      case "÷":
        partie1 = parseFloat(result.value); //On transforme le contenur de l'écran en entier
        result.value = ""; //On librère l'écran après avoir récupérer la première partie du calcul
        signeChoisi = "÷";
        break;

      default:
        break;
    }
  });
});

clear.addEventListener("click", function () {
  result.value = "";
});

//Le bouton égale
equals.addEventListener("click", function () {
  switch (signeChoisi) {
    case "+":
      partie2 = result.value;
      result.value = partie1 + parseFloat(partie2);
      break;

    case "-":
      partie2 = result.value;
      result.value = partie1 - parseFloat(partie2);
      break;

    case "×":
      partie2 = result.value;
      result.value = partie1 * parseFloat(partie2);
      break;

    case "÷":
      partie2 = result.value;

      if (parseFloat(partie2) === 0) {
        alert("Vous ne pouvez pas diviser un nombre par 0");
      } else {
        result.value = partie1 / parseFloat(partie2);
      }

      break;

    default:
      break;
  }
});
//Addition
