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
    new Patient("Marcus", "mal indenté", 100, "vide", "malade"),
    new Patient("Optimus", "unsave", 200, "vide", "malade"),
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


