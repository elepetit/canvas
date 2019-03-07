'use strict';

var Calque = function(){

    this.dom = document.querySelector('#calque');
    this.ctx = this.dom.getContext("2d");

};


Calque.prototype.clear = function(){

    this.ctx.clearRect(0, 0, this.dom.width, this.dom.height);

};

Calque.prototype.setSize = function(){

    this.dom.height = 400;
    this.dom.width = $(window).width() * 0.8;
};

Calque.prototype.transfert = function(calque,coordonnees, background){

    background.ctx.drawImage(calque.dom, 0, 0);
    calque.clear();
    coordonnees = [];

}
