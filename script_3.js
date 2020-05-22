//Calculs rapides pyramide
function pyramid () {


var n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var pyr;

console.log ("Voici la pyramide :");
var x = 1;
	while (x <= n) {
		pyr= "";
		for(var i = 1;i<=n-x;i++){
 			pyr += " ";
		}
		for(var j = 1;j<=x;j++){
 			pyr += "#";
		}
		
		console.log(pyr);
		x +=1;
	}

}
pyramid();
