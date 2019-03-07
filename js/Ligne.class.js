'use strict';

var Ligne = function(){

};

Ligne.prototype.trace = function(startX, startY, endX, endY, calque, stylo){

    calque.ctx.strokeStyle = stylo.getStyle().borderColor;
    calque.ctx.fillStyle = stylo.getStyle().backgroundColor;
    calque.ctx.lineWidth = stylo.getStyle().lineWidth;
    calque.ctx.setLineDash(stylo.getStyle().lineStyle);
    calque.ctx.lineCap = stylo.getStyle().linecap;
    calque.clear();
    calque.ctx.beginPath();
    calque.ctx.moveTo(startX, startY);
    calque.ctx.lineTo(endX, endY);
    calque.ctx.closePath();
    calque.ctx.stroke();
}
