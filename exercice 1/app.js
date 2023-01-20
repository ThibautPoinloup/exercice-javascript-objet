// let voiture = {
//     marque: 'fiat',
//     modèle: 'punto',
//     année: 2000,
//     conduire: function(){
//         console.log(`La voiture de la marque ${this.marque} modèle ${this.modèle} de l'année ${this.année} roule sur la route.`)
//     }
// }

// console.log(voiture.conduire());

class Voiture {

    constructor(marque, modele, annee){
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    
    //utilisation de get pour enlever les parentheses dans mon console.log()
    //sans get ===> console.log(car1.phraseConduire())
    get conduire(){
        return this.phraseConduire()
    }

    phraseConduire(){
        return `La voiture de marque ${this.marque}, de modèle ${this.modele}, de l'année ${this.annee} roule sur la route .`
    }

}

let car1 = new Voiture('fiat', 'punto', 2000);
console.log(car1);
console.log(car1.conduire);

let car2 = new Voiture('Toyota', 'Camry', 2020)
console.log(car2)
console.log(car2.conduire);