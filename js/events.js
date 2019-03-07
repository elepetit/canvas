'use strict';

/**************************************************************************/
/*******************  Mouse Down  ***************************/
/*************************************************************************/

var dessiner = function() {

    dessin = true;
    coordonnees['startX'] = event.offsetX;
    coordonnees['startY'] = event.offsetY;
};

/**************************************************************************************/
/**********************************  Mouse Move ********************************/
/**************************************************************************************/


var traceSurCalque = function(event){

    if(dessin) {

        switch (outilActif) {
            case 'ligne':
                ligne.trace(coordonnees['startX'], coordonnees['startY'], event.offsetX, event.offsetY);
                break;
            case 'libre':
            case 'gomme':
                stylo.trace(coordonnees['startX'], coordonnees['startY'], event.offsetX, event.offsetY);
                break;
            case 'carre':
                carre.trace(coordonnees['startX'], coordonnees['startY'], event.offsetX, event.offsetY);
                break;
            case 'cercle':
                cercle.trace(coordonnees['startX'], coordonnees['startY'], event.offsetX, event.offsetY);
                break;

        }
    }
};

/**************************************************************************************/
/**********************************  Mouse Leave ********************************/
/**************************************************************************************/

var sortieDuCalque = function(){
    dessin = false;
};

/**************************************************************************/
/*************************  Mouse Up  *************************************/
/*************************************************************************/

var transfertSurCanvas = function(event){

    dessin = false;

    if(outilActif === 'ligne') {

        calque.clear();
        calque.ctx.beginPath();
        calque.ctx.moveTo(coordonnees['startX'], coordonnees['startY']);
        calque.ctx.lineTo(event.offsetX, event.offsetY);
        calque.ctx.closePath();
        calque.ctx.stroke();
    }

    else if(outilActif === 'cercle'){

        calque.clear();
        calque.ctx.beginPath();
        calque.ctx.arc(coordonnees['startX'],coordonnees['startY'],Math.abs((event.offsetX - coordonnees['startX'])), 0,360);
        calque.ctx.stroke();
        calque.ctx.closePath();

        if($(rempli).is(':checked')===true){
            calque.ctx.fill();
        }

    }

    /*************************  On transfert le calque sur le canvas *****************/

    calque.transfert();
};
