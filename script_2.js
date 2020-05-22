//Calculs rapides fonction Factorielle
function factorielle () {
  var output =1;
  var answer = prompt("De quel nombre veux-tu calculer la factorielle ?");
  if (isNaN(answer) || answer < 0) {
  	console.log("Saisissez un nombre entier et positif SVP");
  }
  else {
  	for (var i = answer ; i > 0; i--) {
  output *= i;
}
// Dans la console le résultat suivant est affiché
console.log("Le résultat est : "+output);
}
}
factorielle();