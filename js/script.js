"use strict";

/*******************************************/
/********** Mise en place du système********/
/*****************************************/

var coordonnees = [];
var outilActif = "libre";
var tools;
var style = [];
style['bordure']= '';
style['remplissage'] = '';
style['dotted'] = [0];
var dessin = false;
var styleEpaisseur;
var styleDotted;
var styleEndLine;
var background;
var calque;
var stylo;
var carre;
var cercle;
var ligne;

$(function(){

    tools= {
        ligne:$('#ligne'),
        couleur : $('.colorBtn'),
        formCouleur : $('#formCouleur'),
        couleurInput: $('#couleurInput'),
        carre : $('#carre'),
        cercle : $('#cercle'),
        libre : $('#libre'),
        gomme: $('#gomme'),
        effacer : $('#effacer'),
        okBtn: $('.okBtn')
    };

    background = new Background();
    background.setSize();

    calque = new Calque();
    calque.setSize();

    stylo = new Stylo();
    stylo.setColor('borderColor','black');
    stylo.setColor('backgroundColor', 'black');
    stylo.setSize(1);
    stylo.setStyle([0]);
    carre = new Carre();
    cercle = new Cercle();
    ligne = new Ligne();

    $('#colorpicker').farbtastic(getCouleur);
    tools.ligne.click(activerDessiner);
    tools.carre.click(activerDessiner);
    tools.cercle.click(activerDessiner);
    tools.libre.click(activerDessiner).toggleClass('actif');
    tools.gomme.click(activerDessiner);
    tools.effacer.click(effacerDessin);
    tools.okBtn.click(fermerPaletteCouleur);
    tools.couleur.click(localisationCouleur);


    styleEpaisseur = $(".menu-level-two.epaisseur li a");

    for (var i = 0; i < styleEpaisseur.length; i++)
    {
        $(styleEpaisseur[i]).click(definirStyleEpaisseur);
        $(styleEpaisseur[0]).addClass('active');
    }

    styleDotted = $(".menu-level-two.dotted li a");

    for (var i = 0; i < styleDotted.length; i++)
    {
        $(styleDotted[i]).click(definirStyleDotted);
        $(styleDotted[0]).addClass('active');
    }

    styleEndLine = $(".menu-level-two.endTrace li a");

    for (var i = 0; i < styleEndLine.length; i++)
    {
        $(styleEndLine[i]).click(definirStyleLinecap);
        $(styleEndLine[0]).addClass('active');
    }

    $(calque.dom)
        .mousedown(dessiner)
        .mousemove(traceSurCalque)
        .mouseup(transfertSurCanvas)
        .mouseleave(sortieDuCalque);

    $(window).resize(refactorCanvasSize);
})
