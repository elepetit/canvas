'use strict';

var Program = function(){

    this.background = new Background();
    this.calque = new Calque();
    this.stylo = new Stylo();
    //this.outil = new Outil();
    this.carre = new Carre();
    this.cercle = new Cercle();
    this.ligne = new Ligne();
    this.coordonnees = [];
    this.outilActif = "libreBtn";
    this.dessin = false;
    this.styleEpaisseur = $(".menu-level-two.epaisseur li a");
    this.styleDotted = $(".menu-level-two.dotted li a");
    this.styleEndLine = $(".menu-level-two.endTrace li a");
    this.ligneBtn = $('#ligneBtn');
    this.carreBtn = $('#carreBtn');
    this.cercleBtn = $('#cercleBtn');
    this.libreBtn= $('#libreBtn');
    this.gommeBtn = $('#gommeBtn');
    this.formCouleur = $('#formCouleur');
};

Program.prototype.start = function(){


    this.background.setSize();
    this.calque.setSize();
    this.stylo.setColor('borderColor','black');
    this.stylo.setColor('backgroundColor', 'black');
    this.stylo.setSize(1);
    this.stylo.setStyle([0]);

    $(this.calque.dom)
        .mousedown(this.dessiner.bind(this))
        .mousemove(this.traceSurCalque.bind(this))
        .mouseup(this.transfertSurCanvas.bind(this))
        .mouseleave(this.sortieDuCalque);

    $('#colorpicker').farbtastic(this.getCouleur.bind(this));


    this.ligneBtn.click(this.activerDessiner.bind(this));
    this.carreBtn.click(this.activerDessiner.bind(this));
    this.cercleBtn.click(this.activerDessiner.bind(this));
    this.libreBtn.click(this.activerDessiner.bind(this)).toggleClass('actif');
    this.gommeBtn.click(this.activerDessiner.bind(this));

    $('#effacer').click(this.effacerDessin.bind(this));

    //$('.okBtn').click(fermerPaletteCouleur);

    $('.colorBtn').click(this.localisationCouleur.bind(this));

    this.formCouleur.mouseleave(this.hideFormCouleur.bind(this));


    for (var i = 0; i < this.styleEpaisseur.length; i++)
    {
        $(this.styleEpaisseur[i]).click(this.definirStyleEpaisseur.bind(this));
        $(this.styleEpaisseur[0]).addClass('active');
    }




    for (var i = 0; i < this.styleDotted.length; i++)
    {
        $(this.styleDotted[i]).click(this.definirStyleDotted.bind(this));
        $(this.styleDotted[0]).addClass('active');
    }



    for (var i = 0; i < this.styleEndLine.length; i++)
    {
        $(this.styleEndLine[i]).click(this.definirStyleLinecap.bind(this));
        $(this.styleEndLine[0]).addClass('active');
    }



    $(window).resize(this.refactorCanvasSize.bind(this));




};

Program.prototype.farbtastic = function(event){

    this.getCouleur(data);
};

Program.prototype.hideFormCouleur = function(){

        this.formCouleur.toggleClass('displayNone');
}
Program.prototype.getCouleur = function(data){

    $('#couleurInput').val(data);

    this.stylo.setColor(this.formCouleur.data('style'), data);

};

Program.prototype.dessiner = function(event) {

    this.dessin = true;
    this.coordonnees['startX'] = event.offsetX;
    this.coordonnees['startY'] = event.offsetY;
};

Program.prototype.traceSurCalque = function(event){
    if(this.dessin) {

        switch (this.outilActif) {
            case 'ligneBtn':
                this.ligne.trace(this.coordonnees['startX'], this.coordonnees['startY'], event.offsetX, event.offsetY, this.calque, this.stylo);
                break;
            case 'libreBtn':
            case 'gommeBtn':
                this.stylo.trace(this.coordonnees['startX'], this.coordonnees['startY'], event.offsetX, event.offsetY, this.calque, this.coordonnees);
                break;
            case 'carreBtn':
                this.carre.trace(this.coordonnees['startX'], this.coordonnees['startY'], event.offsetX, event.offsetY,this.calque, this.stylo);
                break;
            case 'cercleBtn':

                this.cercle.trace(this.coordonnees['startX'], this.coordonnees['startY'], event.offsetX, event.offsetY,this.calque,this.stylo,this.coordonnees);
                break;

        }
    }
};

Program.prototype.sortieDuCalque = function(){
    this.dessin = false;
};

Program.prototype.transfertSurCanvas = function(event){

    this.dessin = false;

    if(this.outilActif === 'ligneBtn') {

        this.calque.clear();
        this.calque.ctx.beginPath();
        this.calque.ctx.moveTo(this.coordonnees['startX'], this.coordonnees['startY']);
        this.calque.ctx.lineTo(event.offsetX, event.offsetY);
        this.calque.ctx.closePath();
        this.calque.ctx.stroke();
    }

    else if(this.outilActif === 'cercleBtn'){

        this.calque.clear();
        this.calque.ctx.beginPath();
        this.calque.ctx.arc(this.coordonnees['startX'],this.coordonnees['startY'],Math.abs((event.offsetX - this.coordonnees['startX'])), 0,360);
        this.calque.ctx.stroke();
        this.calque.ctx.closePath();

        if($(rempli).is(':checked')===true){
            this.calque.ctx.fill();
        }

    }

    this.calque.transfert(this.calque, this.coordonnees, this.background);
};

Program.prototype.activerDessiner = function(event){

    this[this.outilActif].toggleClass('actif');
    this.outilActif = $(event.currentTarget).data('outil');
    this[this.outilActif].toggleClass('actif');

};

Program.prototype.effacerDessin = function(){

    this.background.clear();
};

Program.prototype.localisationCouleur = function(event){

    this.formCouleur
            .toggleClass('displayNone')
            .data("style", $(event.currentTarget).data('type'));

};

Program.prototype.definirStyleEpaisseur = function(){

    for (var i = 0; i < this.styleEpaisseur.length; i++)
    {
        $(this.styleEpaisseur[i]).removeClass('active');
    }
    $(event.currentTarget).toggleClass('active');

    this.stylo.setSize(parseInt($(event.currentTarget).data('epaisseur')));

};

Program.prototype.definirStyleDotted = function(){

    for (var i = 0; i < this.styleDotted.length; i++)
    {
        $(this.styleDotted[i]).removeClass('active');
    }
    $(event.currentTarget).toggleClass('active');

    var typeDeTrait = parseInt($(event.currentTarget).data('dotted'));

    if(typeDeTrait === 1){
        this.stylo.setStyle([0]) ;
    }
    else if(typeDeTrait === 2){
        this.stylo.setStyle([3]);
    }
    else if(typeDeTrait === 3){
        this.stylo.setStyle([5]);
    }
    else if(typeDeTrait === 4){
        this.stylo.setStyle([10]);
    }
};

Program.prototype.definirStyleLinecap = function(event){


    for (var i = 0; i < this.styleEndLine.length; i++)
    {
        $(this.styleEndLine[i]).removeClass('active');
    }
    $(event.currentTarget).toggleClass('active');

    this.stylo.setLinecap($(event.currentTarget).data('linecap'));
};

Program.prototype.refactorCanvasSize = function(){

    this.background.setSize();
    this.calque.setSize();

};
