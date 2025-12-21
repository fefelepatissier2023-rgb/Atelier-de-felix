document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Commande envoyée. L’Atelier de Félix te recontacte rapidement.");
  this.reset();
});
