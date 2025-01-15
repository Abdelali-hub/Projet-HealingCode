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
const docteur = new Docteur();
docteur.miauler();

const patient1 = new Patient("Alice");
docteur.recevoirPatient(patient1);

const patient2 = new Patient("Bob");
docteur.recevoirPatient(patient2); // Bob doit attendre
