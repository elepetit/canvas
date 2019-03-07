'use strict';


var Stylo = function(){

    this.style = {

        linecap: "",
        lineWidth: "",
        lineStyle: "",
        borderColor:null,
        backgroundColor: null
    };


};

Stylo.prototype.setColor = function(type, value){

    this.style[type] = value;

};


Stylo.prototype.setSize = function(size){

    this.style.lineWidth = size;
};

Stylo.prototype.setStyle = function(style){

    this.style.lineStyle = style;
};

Stylo.prototype.setLinecap = function(linecap){

    this.style.linecap = linecap;
};
Stylo.prototype.getStyle = function(){

    return this.style;
};

Stylo.prototype.trace = function(startX, startY, endX, endY, calque,coordonnees){

    if(this.outilActif === 'gommeBtn'){
        calque.ctx.strokeStyle = 'white';
    }
    else {
        calque.ctx.strokeStyle = this.getStyle().borderColor;
    }
    calque.ctx.lineCap = this.getStyle().linecap;
    calque.ctx.fillStyle = this.getStyle().backgroundColor;
    calque.ctx.lineWidth = this.getStyle().lineWidth;
    calque.ctx.setLineDash(this.getStyle().lineStyle);
    calque.ctx.beginPath();
    calque.ctx.moveTo(startX, startY);
    calque.ctx.lineTo(endX, endY);
    calque.ctx.closePath();
    calque.ctx.stroke();
    coordonnees['startX'] = event.offsetX;
    coordonnees['startY'] = event.offsetY;

};
