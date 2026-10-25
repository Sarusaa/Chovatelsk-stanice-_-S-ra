// Přepínač světlý / tmavý režim
var tlacitko = document.getElementById("prepinac");

tlacitko.onclick = function () {
  document.body.classList.toggle("dark");   // přidá nebo odebere třídu "dark"

  if (document.body.classList.contains("dark")) {
    tlacitko.textContent = "☀ Světlý režim";
  } else {
    tlacitko.textContent = "☾ Tmavý režim";
  }
};
