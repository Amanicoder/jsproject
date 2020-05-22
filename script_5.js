//Analyses de données Startup Nation
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
/*console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
 Here find function returns the value of  
 the first element in the array that satisfies  
 the provided testing function (return element > 4). 
var age = entrepreneurs.filter(function(element) { 
return element.year <= 1979 && element.year >=1970;  
:}  );
Printing desired values. 
console.log(age); */

//console.log(entrepreneurs[0].first);

/*console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
var entrepreneursfullname = new Array();
for (var i =0; i< entrepreneurs.length; i++) {
	entrepreneursfullname[i] = new Object();
	entrepreneursfullname[i].first = entrepreneurs[i].first;
	entrepreneursfullname[i].last = entrepreneurs[i].last;
}
console.log(entrepreneursfullname);*/

/*console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
var entrepreneursage = new Array();
for (var i =0; i< entrepreneurs.length; i++) {
	entrepreneursage[i] = new Object();
	entrepreneursage[i].first = entrepreneurs[i].first;
	entrepreneursage[i].last = entrepreneurs[i].last;
	entrepreneursage[i].age = 2020 - entrepreneurs[i].year;
}
console.log(entrepreneursage);*/

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille");
var entrepreneursorder = new Array();

	entrepreneursorder = entrepreneurs.sort(entrepreneurs.last);

entrepreneurs.sort(function(a, b){
 var lastA=a.last.toLowerCase(), lastB=b.last.toLowerCase();
 if (lastA < lastB) //sort string ascending
  return -1;
 if (lastA > lastB)
  return 1;
 return 0; //default return value (no sorting)
});
console.log(entrepreneurs);