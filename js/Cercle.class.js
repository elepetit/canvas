'use strict';

var Cercle = function(){

};

Cercle.prototype.trace = function(startX, startY, endX, endY, calque, stylo, coordonnees){

    calque.ctx.strokeStyle = stylo.getStyle().borderColor;
    calque.ctx.fillStyle = stylo.getStyle().backgroundColor;
    calque.ctx.lineWidth = stylo.getStyle().lineWidth;
    calque.ctx.setLineDash(stylo.getStyle().lineStyle);
    calque.ctx.lineCap = stylo.getStyle().linecap;
    calque.clear();
    calque.ctx.beginPath();
    calque.ctx.moveTo(startX, startY);
    calque.ctx.arc(coordonnees['startX'],coordonnees['startY'],Math.abs((event.offsetX - coordonnees['startX'])), 0,360);
    calque.ctx.closePath();
    calque.ctx.stroke();

    if($(rempli).is(':checked')===true){

        calque.ctx.fill();
    }

};
