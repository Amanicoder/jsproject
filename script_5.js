//Analyses de données Bibliothécaire
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
var rented_once = books.filter(function(element) { 
return element.rented > 0 ;
})
//Printing desired values 
if (rented_once.length=books.length) {
  console.log("Tous les livres ont été empruntés au moins une fois");
}
  else {
    console.log("Au moins un livre n'a jamais été emprunté");
}

console.log("Quel est livre le plus emprunté ?");

books.sort(function(a, b){
 var rentedA=a.rented, rentedB=b.rented;
 return rentedA - rentedB //sort string ascending
});
console.log(books[(books.length)-1]);


console.log("Quel est livre le moins emprunté ?");

books.sort(function(a, b){
 var rentedA=a.rented, rentedB=b.rented;
 return rentedA - rentedB //sort string ascending
});
console.log(books[0]);

console.log("Trouve le livre avec lID: 873495");
var book_tofind=books.filter(function(element) {
 
return element.id == 873495;
})
//Printing desired values. 
console.log(book_tofind);


console.log("Supprime le livre avec l'ID: 133712");
var books_new=books.filter(function(element) {
 return (element.id !== 133712);
})
console.log(books_new);

console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");
//var bookssorder = new Array();

  //bookssorder = books_new.sort(books_new.title);

books_new.sort(function(a, b){
 var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase();
 if (titleA < titleB) //sort string ascending
  return -1;
 if (titleA > titleB)
  return 1;
 return 0; //default return value (no sorting)
});
console.log(books_new);