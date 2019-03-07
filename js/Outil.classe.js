'use strict';

var Outil = function(){

    var outil = {

        nom: "",
        proprietes: {
                    epaisseur: "",
                    styleDeTrait : "",
                    styleDeFin: "",
                    couleurdeTrait: "",
                    couleurdeBordure: ""
                    }
    }
};

Outil.prototype.setProprietes = function(nom,epaisseur,styleDeTrait,styleDeFin,couleurdeTrait,couleurdeBordure){

    this.proprietes.nom = nom;
    this.proprietes.epaisseur = epaisseur;
    this.proprietes.styleDeTrait = styleDeTrait;
    this.proprietes.styleDeFin = styleDeFin;
    this.proprietes.couleurdeTrait = couleurdeTrait;
    this.proprietes.couleurdeBordure = couleurdeBordure;

};

Otuil.prototype.getProperties = function(){

    return this.proprietes;
};
