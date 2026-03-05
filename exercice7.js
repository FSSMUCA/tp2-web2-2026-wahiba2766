let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

let SousTotal = prix * quantite;
console.log("Sous-Total :", SousTotal);

let reduction = 0;

if ((codePromo ?? false) && estMembre) {
    reduction = SousTotal * reductionPourcentage / 100;
}

console.log("Reduction :", reduction);

let Total = SousTotal - reduction;
console.log("Total final :", Total);

let statut;

if (soldeCompte >= Total) {
    statut = "Paiement accepté";
} else {
    statut = "Solde insuffisant";
}

console.log(statut);

let nouveauSolde = soldeCompte;

if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - Total;
}
console.log("Nouveau solde :", nouveauSolde);

console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "MAD");
console.log("Sous-total:", SousTotal, "MAD");
console.log("Réduction :", reduction, "MAD");
console.log("Total     :", Total, "MAD");
console.log("Statut    :", statut);
console.log("Solde     :", nouveauSolde, "MAD");
