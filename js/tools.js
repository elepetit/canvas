'use strict';

/**************************************************************************/
/**********************  Click sur Toolbar  ******************************/
/*************************************************************************/

var activerDessiner = function(){

    tools[outilActif].toggleClass('actif');
    outilActif = $(this).data('outil');
    tools[outilActif].toggleClass('actif');

}

/**************************************************************************************/
/**********************************  Epaisseur du trait ********************************/
/**************************************************************************************/

var definirStyleEpaisseur = function(){

    for (var i = 0; i < styleEpaisseur.length; i++)
    {
        $(styleEpaisseur[i]).removeClass('active');
    }
    $(this).toggleClass('active');

    stylo.setSize(parseInt($(this).data('epaisseur')));

};

/**************************************************************************************/
/**********************************  Style du trait ********************************/
/**************************************************************************************/

var definirStyleDotted = function(){

    for (var i = 0; i < styleDotted.length; i++)
    {
        $(styleDotted[i]).removeClass('active');
    }
    $(this).toggleClass('active');

    var typeDeTrait = parseInt($(this).data('dotted'));

    if(typeDeTrait === 1){
        stylo.setStyle([0]) ;
    }
    else if(typeDeTrait === 2){
        stylo.setStyle([3]);
    }
    else if(typeDeTrait === 3){
        stylo.setStyle([5]);
    }
    else if(typeDeTrait === 4){
        stylo.setStyle([10]);
    }
};

/**************************************************************************************/
/**********************************  Style de fin de trait ****************************/
/**************************************************************************************/

var definirStyleLinecap = function(){
    console.log($(this).data('linecap'));
    for (var i = 0; i < styleEndLine.length; i++)
    {
        $(styleEndLine[i]).removeClass('active');
    }
    $(this).toggleClass('active');

        stylo.setLinecap($(this).data('linecap'));
    console.log(stylo.getStyle());
};


/**************************************************************************************/
/**********************************  Couleurs des tracés ********************************/
/**************************************************************************************/

var localisationCouleur = function(){

    tools.formCouleur.toggleClass('displayNone');
    tools.formCouleur.data("style", $(this).data('type'));

};

var getCouleur = function(data){

    tools.couleurInput.val(data);

    stylo.setColor(tools.formCouleur.data('style'), data);

};

var fermerPaletteCouleur = function(){

    tools.formCouleur.toggleClass('displayNone');
};

/**************************************************************************************/
/**********************************  Effacer le Canvas ********************************/
/**************************************************************************************/

var effacerDessin = function(){

    background.clear();
};

/**************************************************************************************/
/**********************************  Taille du Canvas ********************************/
/**************************************************************************************/
var refactorCanvasSize = function(){

    background.setSize();
    calque.setSize();

};
