'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
};

DomElement.prototype.creatSelectorElement = function () {
    let elem;
    if (this.selector.substr(0, 1) === '.') {
        elem = document.createElement('div');
        elem.setAttribute('class', this.selector);
    } else if (this.selector.substr(0, 1) === '#') {
        elem = document.createElement('p')
        elem.setAttribute('id', this.selector);
    }
    elem.style.cssText = `
    height : ${this.height}px;
    width : ${this.width}px;
    background : ${this.bg};
    font-size : ${this.fontSize}%;
    `;
    elem.innerHTML = 'Любой текст 1';
    document.body.insertAdjacentElement('beforebegin', elem);
};

let domElement = new DomElement('#money', 200, 400, 'tomato', 190);

domElement.creatSelectorElement();
