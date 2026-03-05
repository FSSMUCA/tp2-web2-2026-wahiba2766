let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

let nomCorrige = nom.trim();
if (nomCorrige === ""){
    nomCorrige = "inconnu";
}

let ageCorrige = parseInt(age);
if (isNaN(ageCorrige) || ageCorrige <= 0){
    console.log("age : valeur invalide");
}

let emailValide = false;

if (email.includes("@") && email.includes(".")) {
    emailValide = true;
}

let score = parseInt(scoreJeu);

if (isNaN(score)) {
    score = 0;
}

let  admin =estAdmin === "true";

let derniere =  derniereConnexion ?? "Jamais connectè";

let connexions = Number(nombreConnexions);

let messageConnexion;

if (connexions === 0) {
    messageConnexion = "Aucune connexion";
} else {
    messageConnexion = connexions;
}


console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log("age              :", ageCorrige, "(valide)");
console.log('email            : "' + email + '" (invalide : pas de point après @)');
console.log("scoreJeu         :", score, '(extrait depuis "150pts")')
console.log("estAdmin         :", admin);
console.log('derniereConnexion:', derniere);
console.log("nombreConnexions :", messageConnexion);
