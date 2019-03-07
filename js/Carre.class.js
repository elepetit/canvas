'use strict';

var Carre = function(){


};

Carre.prototype.trace = function(startX, startY, endX, endY){

    calque.ctx.strokeStyle = stylo.getStyle().borderColor;
    calque.ctx.fillStyle = stylo.getStyle().backgroundColor;
    calque.ctx.lineWidth = stylo.getStyle().lineWidth;
    calque.ctx.setLineDash(stylo.getStyle().lineStyle);
    calque.ctx.lineCap = this.getStyle().linecap;
    calque.clear();
    calque.ctx.beginPath();
    calque.ctx.moveTo(startX, startY);
    calque.ctx.rect(startX, startY,endX - startX, endY - startY);
    calque.ctx.closePath();
    calque.ctx.stroke();

    if($(rempli).is(':checked')===true){

        calque.ctx.fill();
    }

};
