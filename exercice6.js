let nom = null ;
let age = 0 ;
let ville = 0 ;
let score = undefined ;
let actif = false ;
console.log("nom : ",nom ?? "valeur par dèfaut");
console.log("age : ",age ?? "valeur par dèfaut");
console.log("ville : ",ville ?? "valeur par dèfaut");
console.log("score : ",score ?? "valeur par dèfaut");
console.log("actif : ",actif ?? "valeur par dèfaut");


console.log("nom :", nom || "valeur par défaut");
console.log("age :", age || "valeur par défaut");
console.log("ville :", ville || "valeur par défaut");
console.log("score :", score || "valeur par défaut");
console.log("actif :", actif || "valeur par défaut");

console.log("nom : ?? et || -> même résultat");
console.log("age : ?? et || -> résultat différent");
console.log("ville : ?? et || -> résultat différent");
console.log("score : ?? et || -> même résultat");
console.log("actif : ?? et || -> résultat différent");