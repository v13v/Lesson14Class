'use strict';
let par = document.querySelector('.par')
const DomElement = function(selector,height,width,bg,fontSize){

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    

};
debugger
DomElement.prototype.creatSelectorElement = function(){
    if(thes.selector.substr(0, 1) === '.'){
      let div = document.createElement('div')
      div.classList.add(this.selector)
    } else if(this.selector.substr(0, 1) === '#'){
        let pg = document.createElement('p')
        pg.classList.add(this.selector)
    }return

div.style.cssText = `
height : ${height}px;
width : ${width}px;
background : ${bg};
fontSize : ${fontSize}px;
`;

pg.style.cssText = `
height : ${height}px;
width : ${width}px;
background : ${bg};
fontSize : ${fontSize}px;
`;
div.innerHTML = 'Любой текст 1';
pg.innerHTML = 'Любой текст 2';
};




const domElement = new DomElement();

domElement.creatSelectorElement('.blanc',30, 50, 'red', 10)

console.log(domElement);