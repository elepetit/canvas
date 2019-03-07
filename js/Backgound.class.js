'use strict';

var Background = function(){

    this.dom = document.querySelector('#background');
    this.ctx = this.dom.getContext("2d");

};


Background.prototype.clear = function(){

    this.ctx.clearRect(0, 0, this.dom.width, this.dom.height);

};

Background.prototype.setSize = function(){

    this.dom.height = 400;
    this.dom.width = $(window).width() * 0.8;
};
