// Exercice 1 : Création et manipulation d'objets

//     Etape 1 : Créer un objet "voiture" avec les propriétés "marque", "modèle" et "année"
        class Voiture{
            constructor(marque, modele, annee){
                this.marque = marque;
                this.modele = modele;
                this.annee = annee;
            }

//     Etape 2 : Ajouter une méthode "conduire" à l'objet "voiture" qui affiche un message "La voiture de marque [marque] modèle  [modèle] de l'année [année] roule sur la route."
            conduire = () =>{
                console.log(`La voiture de marque ${this.marque} modèle ${this.modele} de l'année ${this.annee} roule sur la route.`);
            }
        }

//     Etape 3 : Créer une instance de l'objet "voiture" en utilisant les propriétés "Toyota", "Camry" et "2020"
const voiture1 = new Voiture("Toyota", "Camry", 2020);
const voiture2 = new Voiture("Fiat", "Panda", 1995);
const voiture3 = new Voiture("Audi", "A1", 2023);
//     Etape 4 : Appeler la méthode "conduire" sur l'instance de l'objet "voiture" pour afficher le message "La voiture de marque Toyota modèle Camry de l'année 2020 roule sur la route."
voiture1.conduire();

// Exercice 2 : Manipulation d'objets dans un tableau

//     Etape 1 : Créer un tableau "garage" qui contient des instances de l'objet "voiture" créé dans l'exercice précédent

const garage = {
    voitures: [voiture1,voiture2,voiture3],
    //     Etape 2 : Ajouter une méthode "afficherVoitures" à l'objet "garage" qui affiche les propriétés de chaque voiture dans le tableau
    afficherVoitures: function(){
        console.log(this.voitures);
    }
}
//     Etape 3 : Appeler la méthode "afficherVoitures" sur l'objet "garage" pour afficher les propriétés de chaque voiture dans le tableau
garage.afficherVoitures();


// Exercice 3 : Fonction constructeur

//     Etape 1 : Créer une fonction constructeur "Personne" qui prend en paramètres "nom" et "âge"
class Personne {
    constructor(nom, age){
//     Etape 2 : Ajouter les propriétés "nom" et "âge" à l'objet créé par la fonction constructeur
        this.nom = nom;
        this.age  = age;
    }
    //     Etape 3 : Ajouter une méthode "sePresenter" à l'objet créé par la fonction constructeur qui affiche un message "Bonjour, je m'appelle [nom] et j'ai [âge] ans."
    sePresenter = () =>{
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`)
    }
}

//     Etape 4 : Utiliser la fonction constructeur pour créer une instance de l'objet "Personne" en utilisant les valeurs "John" et "30"
const John = new Personne("John", 30);

// Exercice 4 : Héritage de fonction constructeur

//     Etape 1 : Créer une fonction constructeur "Etudiant" qui hérite des propriétés et méthodes de la fonction constructeur "Personne"
class Etudiant extends Personne{
//     Etape 2 : Ajouter une propriété "matricule" à l'objet créé par la fonction constructeur "Etudiant"
    constructor(nom, age, matricule){
        super(nom, age);
        this.matricule = matricule;
    }
//     Etape 3 : Ajouter une méthode "etudier" à l'objet créé par la fonction constructeur "Etudiant" qui affiche un message "L'étudiant [nom] avec le matricule [matricule] étudie pour son examen."
    etudier = () =>{
        console.log(`L'étudiant ${this.nom} avec le matricule ${this.matricule} étudie pour son examen.`)
    }
}
//     Etape 4 : Utiliser la fonction constructeur "Etudiant" pour créer une instance de l'objet "Etudiant" en utilisant les valeurs "Jane" et "22" pour les propriétés "nom" et "âge", et "123456" pour la propriété "matricule"
const jane = new Etudiant("jane", 22, 1234567890);

//     Etape 5 : Appeler la méthode "sePresenter" sur l'instance de l'objet "Etudiant" pour afficher le message "Bonjour, je m'appelle Jane et j'ai 22 ans."
jane.sePresenter();

//     Etape 6 : Appeler la méthode "etudier" sur l'instance de l'objet "Etudiant" pour afficher le message "L'étudiant Jane avec le matricule 123456 étudie pour son examen."
jane.etudier();

// Exercice DOM : Construction d'un carrousel d'images à l'aide d'une fonction constructeur

//     Etape 1 : Créer une fonction constructeur "Carrousel" qui prend en paramètre un tableau d'images et un identifiant d'élément HTML


//     Etape 2 : Utiliser la fonction constructeur pour créer une instance de l'objet "Carrousel" en utilisant un tableau d'images et l'identifiant de l'élément HTML où vous voulez afficher le carrousel.


//     Etape 3 : Ajouter une propriété "indexActuel" à l'objet qui indique l'index de l'image actuellement affichée


//     Etape 4 : Ajouter des méthodes "suivant" et "precedent" à l'objet pour naviguer entre les images du carrousel.


//     Etape 5 : Utiliser les méthodes "appendChild" et "setAttribute" de l'objet DOM pour ajouter les images au carrousel et les mettre en forme


//     Etape 6 : Ajouter des boutons "suivant" et "precedent" à l'HTML et utiliser les méthodes "addEventListener" pour les rendre interactifs


//     Etape 7 : Ajouter une fonction pour faire défiler automatiquement les images toutes les 3 secondes


