/** Numero du tour */
let tour =1;

/** Array des personnages */
let personnages = new Array();

/** Nombre de personnage */
let nbPersonnages = 5;

/** Numero de l'imposteur scenario 1 */
const IMPOSTEUR_SCENARIO1 = 3;

/** Numero de l'imposteur scenario 2 */
const IMPOSTEUR_SCENARIO2 = 1;

/**
 * Objet de type Personnage
 */
function Personnage(imposteur,vie,fichierImg) {
    this.imposteur = imposteur; // imposteur ou innocent
    this.vie = vie; //en vie ?
    this.fichierImg = fichierImg; //lien vers son fichier image
}
/**
 * Change le numero du scenario
 */
function setScenario(newScenario) {
	console.log("set scenario");
	sessionStorage.setItem("choixScenario", newScenario);
}

function setTour(newTour) {
	this.tour = 1;
}

/**
 * Cree la partie en fonction du scenario selectionne
 */
function gestionJeu() {
	let choixScenario = sessionStorage.getItem("choixScenario");
	console.log("Gestion jeu : \n Choix scenario :" +choixScenario);
	setTour(1);
	switch(choixScenario) {
		case 1:
			scenario(IMPOSTEUR_SCENARIO1);
			break;
		case 2:
			scenario(IMPOSTEUR_SCENARIO2);
			break;
	}
}

/**
 * Remet toutes les variables par defaut
 */
function nouvellePartie() {
	//TODO recuperer numero sur interface ou directement envoye ?
	setTour(1);
}


/**
 * Effectue les elements necessaires pour le scenario 1
 */
function scenario(numImposteur) {
	initPersonnages(numImposteur);
	afficherStatusPersonnagesDebug();
}

/**
 * Initialise tous les personnages et l'imposteur
 */
function initPersonnages(numImposteur) {
	console.log("initPersonnages");
	personnages = new Array();
	for(let i = 0; i < nbPersonnages; i++) {
		if(i+1 == numImposteur) { //le personnage a definir comme imposteur
			personnages[i] = new Personnage(true,true,"personnage"+i+".png");
		} else {
			personnages[i] = new Personnage(false,true,"personnage"+i+".png");
		}
	}
}

function changementTexte() {

}

/**
 * Affiche l'etat actuel des personnages
 */
function afficherStatusPersonnagesDebug() {
	for(let i = 0; i < personnages.length; i++) {
		console.log("Personnage : " + i+1 + " est : \n  Imposteur : " + personnages[i].imposteur + " \n  En vie : " + personnages[i].vie + " \n  Image : " + personnages[i].fichierImg);
	}
}

/**
 * Lorsque l'utilisateur vote un personnage
 * S'il etait l'imposteur la partie est gagne sinon perdu
 */
function vote(numPersonnage) {
	//get personnage voted
	if(personnages[numPersonnage-1].imposteur) {
		afficherVictoire();
	} else {
		afficherDefaite();
		
	}
}

/**
 * Affiche la video ? gif de defaite
 */
function afficherDefaite() {
	console.log("defaite");
}

/**
 * Affiche la video ? gif de victoire
 */
function afficherVictoire() {
	console.log("Le personnage est l'imposteur. Victoire");
}
