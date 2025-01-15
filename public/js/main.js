// Description des patients
 
// Les patients ont un nom, une maladie, de l'argent, une poche, un état de santé.
// Ils savent se rendre à un endroit, prendre un médicament et payer.
// Au début, les patients sont dans une salle d'attente. 
// (Liste des patients que vous allez crée, avec leurs valeurs respectives)

// Créer une classe Patient qui possède les propriétés suivantes :
class Patient {
    constructor(nom, maladie, argent, poche, etatDeSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatDeSante = etatDeSante;
    }

    seRendreA(endroit) {
        console.log(`${this.nom} se rend à ${endroit}.`);
    }

    prendreMedicament(medicament) {
        console.log(`${this.nom} prend le médicament ${medicament}.`);
    }

    payer(montant) {
        if (this.argent >= montant) {
            this.argent -= montant;
            console.log(`${this.nom} a payé ${montant}. Il lui reste ${this.argent}.`);
        } else {
            console.log(`${this.nom} n'a pas assez d'argent pour payer ${montant}.`);
        }
    }
}

// Création des patients
let patients = [
    new patient("Marcus", "mal indenté", 100, "vide", "malade"),
    new patient("Optimus", "unsave", 200, "vide", "malade"),
    new Patient("Sangoku", "404", 80, "vide", "malade"),
    new Patient("DarthVader", "azmatique", 110, "vide", "malade"),
    new Patient("Semicolon", "syntaxError", 60, "vide", "malade")
];

// Exemple d'utilisation
patients.forEach(patient => {
    patient.seRendreA("la pharmacie");
    patient.prendreMedicament("antidote");
    patient.payer(50);
});


// Description du docteur
 
// Le docteur reçoit les patients dans son cabinet.
// Il les diagnostique, se fait payer, puis prescrit un traitement.
// Attention, le docteur fait sortir le patient de son cabinet avant de prendre le suivant.
// Dans son cabinet, il y a son chat de race sphynx pour maintenir un environnement stérile.
// Son chat miaule toutes les deux secondes dans la console (bonus).
// La consultation coûte 50€. Les patients sont dans un état de traitement avant de sortir du cabinet.

class patient {
    constructor(nom) {
        this.nom = nom;
        this.argent = 50; 
        this.diagnostique = null;
    }
}

class Docteur {
    constructor() {
        this.argent = 0;
        this.cabinet = "chat"; 
        this.patients = [];
    }

    recevoirPatient(patient) {
        if (this.patients.length < 1) { 
            console.log(`${patient.nom} entre dans le cabinet.`);
            this.patients.push(patient);
            this.diagnostiquer(patient);
        } else {
            console.log("Le docteur est occupé. Veuillez attendre.");
        }
    }

    diagnostiquer(patient) {
        
        patient.diagnostique = "Diagnostic effectué.";
        console.log(`${patient.nom} a été diagnostiqué.`);
        this.facturer(patient);
    }

    facturer(patient) {
        if (patient.argent >= 50) {
            patient.argent -= 50; 
            this.argent += 50; 
            console.log(`${patient.nom} a payé 50€. Argent du docteur: ${this.argent}€`);
            this.sortirPatient(patient);
        } else {
            console.log(`${patient.nom} n'a pas assez d'argent pour payer la consultation.`);
        }
    }

    sortirPatient(patient) {
        console.log(`${patient.nom} sort du cabinet.`);
        this.patients.pop(); 
    }

    miauler() {
        setInterval(() => {
            console.log("Miaou!"); 
        }, 2000);
    }
}

// Exemple d'utilisation
let docteur = new Docteur();
docteur.miauler();

let patient1 = new Patient("Alice");
docteur.recevoirPatient(patient1);

let patient2 = new Patient("Bob");
docteur.recevoirPatient(patient2); 

//Grille des diagnostics 

let diagnostics = [
    { maladie: "mal indenté", traitement: "ctrl+maj+f" },
    { maladie: "unsave", traitement: "saveOnFocusChange" },
    { maladie: "404", traitement: "CheckLinkRelation" },
    { maladie: "azmatique", traitement: "Ventoline" },
    { maladie: "syntaxError", traitement: "f12+doc" }
];

// Fonction pour afficher la grille des diagnostics
function afficherDiagnostics() {
    console.table(diagnostics);
}

// Appel de la fonction pour afficher les diagnostics
afficherDiagnostics();


// La pharmacie 
 
// La pharmacie dispose de traitement. 
// Après le médecin, les patients se rendront à la pharmacie et recevront leur traitement s'ils ont assez d'argent.
// A leur arrivé a la pharmacie, un message de bienvenu a la pharmacie s'affiche dans la console.
// S'ils n'ont pas assez d'argent, ils seront considérés comme morts et devront être envoyé dans un cimetière.

// Tarif des traitements
 
// Voici les objets traitement (médicaments) que les patients peuvent acheter a la pharmacie

// Définition du tableau des traitements
let traitements = [
    { nom: 'ctrl+maj+f', prix: 60 },
    { nom: 'saveOnFocusChange', prix: 100 },
    { nom: 'CheckLinkRelation', prix: 35 },
    { nom: 'Ventoline', prix: 40 },
    { nom: 'f12+doc', prix: 20 }
];

// Fonction pour afficher les traitements et leurs prix
function afficherTraitements(traitements) {
    console.log('| Traitement           | Prix  |');
    console.log('| -------------------- | ----- |');
    traitements.forEach(traitement => {
        console.log(`| \`${traitement.nom}\`         | ${traitement.prix}€   |`);
    });
}

// Appel de la fonction pour afficher les traitements
afficherTraitements(traitements);


//Le cimetière
 

// Les patients qui a après être passés a la pharmacie n'ont pas pu se procurer leur remède, meurt et sont envoyés au cimetière.
// (un message triste du type annonces nécrologique, indique les détails du décès)

// Création de la classe Cimetiere
class Cimetiere {
    constructor() {
        this.patients = [];
    }

    enterrer(patient) {
        console.log(`Annonce nécrologique: ${patient.nom} est décédé.`);
        this.patients.push(patient);
    }
}

// Exemple d'utilisation
let cimetiere = new Cimetiere();
cimetiere.enterrer(patient);









